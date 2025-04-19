import { isEx, isEh, isRepo } from 'utils/hosts';
import { ready } from 'utils/dom';
import { Service } from 'services';
import { UiTranslation } from 'services/ui-translation';
import type { ConfigData } from 'services/storage';
import { SyncStorage } from 'services/sync-storage';
import { Logger } from 'services/logger';
import { Messaging } from 'services/messaging';
import { Tagging } from 'services/tagging';
import { DateTime } from 'services/date-time';

import './index.less';

function isElement<K extends keyof HTMLElementTagNameMap | undefined = undefined>(
    node: Node | undefined,
    nodeName?: K,
): node is K extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[K] : HTMLElement {
    return node instanceof HTMLElement && (nodeName == null || node.localName === nodeName);
}

function isText(node: Node | undefined): node is Text {
    return node != null && node.nodeType === Node.TEXT_NODE;
}

function childNodes(node: Node): Node[] {
    const iterator = document.createNodeIterator(node);
    const nodes: Node[] = [];
    let childNode = iterator.nextNode();
    while (childNode) {
        nodes.push(childNode);
        childNode = iterator.nextNode();
    }
    return nodes;
}

const skipNodeName = new Set<string>(['TITLE', 'LINK', 'META', 'HEAD', 'SCRIPT', 'BR', 'HR', 'STYLE', 'MARK']);
const ignoreClassName = `eh-syringe-ignore`;
const skipElementMatcher = `.${ignoreClassName}, .${ignoreClassName} *, [translate=no], [translate=no] :not([translate=yes])`;

declare global {
    interface Window {
        toggle_advsearch_pane: (b: HTMLElement) => void;
        toggle_filesearch_pane: (b: HTMLElement) => void;
        show_advsearch_pane: (b: HTMLElement) => void;
        hide_advsearch_pane: (b: HTMLElement) => void;
        show_filesearch_pane: (b: HTMLElement) => void;
        hide_filesearch_pane: (b: HTMLElement) => void;
    }
}
// 该方案同时在 V2、V3 和 UserScript 生效
// 注意 actualCode 是在事件回调内部运行的，要挂载变量需要显式写 `window.varName = xxx`
function codePatch(window: Window): void {
    window.toggle_advsearch_pane = function toggle_advsearch_pane(b) {
        if (document.getElementById('advdiv')!.style.display === 'none') {
            window.show_advsearch_pane(b);
        } else {
            window.hide_advsearch_pane(b);
        }
    };
    window.toggle_filesearch_pane = function toggle_filesearch_pane(b) {
        if (document.getElementById('fsdiv')!.style.display === 'none') {
            window.show_filesearch_pane(b);
        } else {
            window.hide_filesearch_pane(b);
        }
    };
}

class TagNodeRef {
    static attached(node: Text | HTMLElement): boolean {
        const parentElement = isText(node) ? node.parentElement : node;
        if (!parentElement) return false;
        return parentElement.hasAttribute(this.ATTR);
    }
    private static readonly ATTR = 'ehs-tag';

    static create(node: Text | HTMLElement, service: Syringe): TagNodeRef | boolean {
        const parentElement = isText(node) ? node.parentElement : node;
        if (!parentElement || parentElement.hasAttribute(this.ATTR)) {
            return true;
        }
        const aId = parentElement.id;
        const aTitle = parentElement.title;

        let fullKeyCandidate: string | undefined;
        if (aTitle) {
            const [namespace, key] = aTitle.includes(':') ? aTitle.split(':') : ['', aTitle];
            fullKeyCandidate = service.tagging.fullKey({ namespace, key });
        } else if (aId) {
            let id = aId;
            if (id.startsWith('ta_')) id = id.slice(3);
            const [namespace, key] = id.replace(/_/gi, ' ').split(':');
            fullKeyCandidate = key
                ? service.tagging.fullKey({ namespace, key })
                : service.tagging.fullKey({ namespace: '', key: namespace });
        }

        if (!fullKeyCandidate) return false;
        const fullKey = fullKeyCandidate;
        const text = node.textContent ?? '';

        return new TagNodeRef(parentElement, fullKey, text, service);
    }
    private constructor(
        readonly node: HTMLElement,
        readonly fullKey: string,
        readonly original: string,
        readonly service: Syringe,
    ) {
        node.setAttribute(TagNodeRef.ATTR, this.original);
        node.setAttribute('lang', 'en');
        Object.defineProperty(node, 'ehs', { value: this });
        if (!node.hasAttribute('title')) {
            node.title = this.fullKey;
        }
    }

    get alive(): boolean {
        return !!this.node.parentElement;
    }

    translate(tagMap: Record<string, string> | undefined): boolean {
        if (!this.alive) return true;
        if (!this.service.config.translateTag) {
            this.node.textContent = this.original;
            this.node.setAttribute('lang', 'en');
            return true;
        }
        if (!tagMap) {
            return false;
        }
        let value = tagMap[this.fullKey];
        if (!value) {
            return false;
        }
        value = this.service.tagging.markImagesAndEmoji(value);
        if (this.original.includes(':')) {
            const originalNs = this.original.split(':')[0];
            if (!originalNs) value = `:${value}`;
            else value = `${this.service.tagging.ns(originalNs)}:${value}`;
        }
        this.node.innerHTML = value;
        this.node.setAttribute('lang', 'zh-hans');
        return true;
    }
}

@Service()
export class Syringe {
    constructor(
        readonly storage: SyncStorage,
        readonly uiTranslation: UiTranslation,
        readonly logger: Logger,
        readonly messaging: Messaging,
        readonly tagging: Tagging,
        readonly time: DateTime,
    ) {
        storage.async.on('config', (k, ov, nv) => {
            if (nv) this.updateConfig(nv);
        });
        this.init();
    }

    private tags: TagNodeRef[] = [];
    private tagMap?: Record<string, string>;
    private translateTags(tagMap?: Record<string, string>): void {
        const tags = this.tags.filter((t) => t.alive);
        this.tags = tags;
        tagMap ??= this.tagMap;
        tagMap ??= this.storage.get('databaseMap');
        this.tagMap = tagMap;
        tags.forEach((t) => t.translate(tagMap));
    }
    documentEnd = false;
    config = this.getAndInitConfig();
    observer?: MutationObserver;

    readonly uiData = this.uiTranslation.get();

    private updateConfig(config: ConfigData): void {
        this.config = config;
        this.storage.set('config', config);
        this.setRootAttrs();
        this.translateTags();
    }

    private getAndInitConfig(): ConfigData {
        this.storage.async
            .get('config')
            .then((conf) => {
                this.updateConfig(conf);
            })
            .catch(this.logger.error);
        return this.storage.get('config');
    }

    private codePatch(): void {
        const { documentElement } = document;
        documentElement.setAttribute('onreset', `;(${codePatch.toString()})(window); return false;`);
        documentElement.dispatchEvent(new Event('reset'));
        documentElement.removeAttribute('onreset');
    }

    private onObserved(mutations: readonly MutationRecord[]): void {
        for (const mutation of mutations) {
            if (mutation.type === 'attributes') {
                this.translateNode(mutation.target);
                continue;
            }
            for (const node of mutation.addedNodes) {
                this.translateNode(node);
                if (this.documentEnd) {
                    const nodes = childNodes(node);
                    for (const childNode of nodes) {
                        this.translateNode(childNode);
                    }
                }
            }
        }
    }

    private init(): void {
        ready(() => {
            this.onObserved(this.observer?.takeRecords() ?? []);
            this.codePatch();
            this.documentEnd = true;
        });
        this.setRootAttrs();
        const { body } = document;
        if (body) {
            const nodes = childNodes(body);
            this.logger.warn(`有 ${nodes.length} 个节点在注入前加载`, nodes);
            for (const node of nodes) {
                this.translateNode(node);
            }
        } else {
            this.logger.debug(`没有节点在注入前加载`);
        }
        this.observer = new MutationObserver((mutations) => this.onObserved(mutations));
        this.observer.observe(document.documentElement, {
            attributeFilter: ['title', 'placeholder', 'label', 'value'],
            childList: true,
            subtree: true,
        });

        this.updateTagMap();
        this.messaging.on('tag-updated', () => this.updateTagMap());
    }

    private updatingTagMap?: Promise<void>;
    private updateTagMap(): void {
        if (this.updatingTagMap) return;
        let updatingTagMap;
        updatingTagMap = (async () => {
            const timer = this.logger.time('获取替换数据');
            try {
                const currentSha = this.storage.get('databaseSha');
                const data = await this.messaging.emit('get-tag-map', { ifNotMatch: currentSha });
                if (data.map) {
                    const tagMap: Record<string, string> = {};
                    for (const key in data.map) {
                        tagMap[key] = data.map[key].name;
                    }
                    this.translateTags(tagMap);
                    this.storage.set('databaseMap', tagMap);
                    this.storage.set('databaseSha', data.sha);
                    this.logger.log('替换数据已更新', data.sha);
                } else {
                    this.logger.log('替换数据已经最新', data.sha);
                }
            } catch (ex) {
                this.logger.error(ex);
            } finally {
                timer.end();
                if (this.updatingTagMap === updatingTagMap) {
                    this.updatingTagMap = undefined;
                    updatingTagMap = undefined;
                }
            }
        })();
        this.updatingTagMap = updatingTagMap;
    }

    setRootAttrs(): void {
        const node = document.documentElement;
        if (!node) return;

        node.classList.remove(...[...node.classList.values()].filter((k) => k.startsWith('ehs')));
        node.classList.add('ehs-injected');
        if (isEx(location.hostname)) {
            node.classList.add('ehs-ex');
        } else if (isEh(location.hostname)) {
            node.classList.add('ehs-eh');
        } else if (isRepo(location.hostname)) {
            node.classList.add('ehs-repo');
        } else if ('matchMedia' in window) {
            const matchesDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (matchesDarkTheme) {
                node.classList.add('ehs-ex');
            } else {
                node.classList.add('ehs-eh');
            }
        }
        if (!this.config.showIcon) {
            node.classList.add('ehs-hide-icon');
        }
        if (this.config.translateTag) {
            node.classList.add('ehs-translate-tag');
        }
        if (this.config.translateUi) {
            node.setAttribute('lang', 'zh-hans');
        } else {
            node.setAttribute('lang', 'en');
        }
        node.classList.add(`ehs-image-level-${this.config.introduceImageLevel}`);
    }

    translateNode(node: Node): void {
        const { nodeName } = node;
        if (!nodeName || skipNodeName.has(nodeName)) return;
        if (node.parentNode && skipNodeName.has(node.parentNode.nodeName)) return;
        if (isElement(node) ? node.matches(skipElementMatcher) : node.parentElement?.matches(skipElementMatcher)) {
            return;
        }

        const handled = this.translateTag(node);
        /* tag 处理过的ui不再处理*/
        if (!handled && (this.config.translateUi || this.config.translateTimestamp)) {
            this.translateUi(node);
        }
    }

    private isTagContainer(node: Element | null): boolean {
        if (!node) {
            return false;
        }
        if (isElement(node, 'a') && node.href.startsWith('https://e-hentai.org/tag/')) {
            const url = new URL(node.href);
            const urlTag = decodeURIComponent(url.pathname.split('/').pop()!).replace(/_/g, ' ').replace(/\+/g, ' ');
            if (urlTag === node.textContent) {
                node.title = node.textContent ?? '';
                return true;
            }
            return false;
        }
        return node.classList.contains('gt') || node.classList.contains('gtl') || node.classList.contains('gtw');
    }

    translateTag(node: Node): boolean {
        const parentElement = node.parentElement;

        let ref: TagNodeRef | boolean;
        if (parentElement?.id === 'tagname_newtagcomplete-list' && isElement(node)) {
            // 翻译我的标签提示
            if (node.querySelector('.ehs-new-tag-complete-translate')) return false;
            const elTrans = document.createElement('span');
            const tag = node.getAttribute('data-value');
            if (!tag) return false;
            elTrans.id = tag;
            elTrans.classList.add('ehs-new-tag-complete-translate');
            node.appendChild(elTrans);
            ref = TagNodeRef.create(elTrans, this) as TagNodeRef;
        } else if (!isText(node) || !parentElement) {
            return false;
        } else if (TagNodeRef.attached(node)) {
            return true;
        } else if (parentElement.nodeName === 'MARK' || parentElement.classList.contains('auto-complete-text')) {
            // 不翻译搜索提示的内容
            return true;
        } else if (!this.isTagContainer(parentElement) && !this.isTagContainer(parentElement?.parentElement)) {
            // 标签只翻译已知的位置
            return false;
        } else {
            ref = TagNodeRef.create(node, this);
        }

        if (typeof ref == 'boolean') return ref;

        ref.translate(this.tagMap);
        this.tags.push(ref);
        return true;
    }

    private translateUiText(text: string): string | undefined {
        let repText = text;

        if (this.config.translateUi) {
            const plain = this.uiData.plainReplacements.get(text);
            if (plain != null) return plain;

            for (const [k, v] of this.uiData.regexReplacements) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                repText = repText.replace(k, v as (substring: string, ...args: any[]) => string);
            }
        }

        if (
            this.config.translateTimestamp &&
            // 快速判断是否有可能包含时间戳
            repText.includes(':')
        ) {
            repText = repText.replace(
                /(\d\d\d\d-[0-1][0-9]-[0-3][0-9] [0-2][0-9]:[0-5][0-9](:[0-5][0-9])?)( UTC)?/g,
                ($, t, seconds) => {
                    const date = Date.parse(t + 'Z');
                    if (!date) return $;
                    if (seconds) return this.time.absolute(date, true);
                    return this.time.diff(date, undefined, DateTime.hour);
                },
            );
            repText = repText.replace(
                /([0-3][0-9]|[1-9]) (January|February|March|April|May|June|July|August|September|October|November|December) (\d\d\d\d), ([0-2][0-9]:[0-5][0-9])( UTC)?/gi,
                ($, d, m, y, t) => {
                    const date = Date.parse(`${d} ${m} ${y}, ${t} UTC`);
                    if (!date) return $;
                    return this.time.diff(date, undefined, DateTime.hour);
                },
            );
            repText = repText.replace(
                /(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-3][0-9]|[1-9])(st|nd|rd|th) of (January|February|March|April|May|June|July|August|September|October|November|December) (\d\d\d\d), ([0-2][0-9]:[0-5][0-9])( UTC)?/gi,
                ($, _w, d, _do, m, y, t) => {
                    const date = Date.parse(`${d} ${m} ${y}, ${t} UTC`);
                    if (!date) return $;
                    return this.time.diff(date, undefined, DateTime.hour);
                },
            );
        }
        if (repText !== text) return repText;

        return undefined;
    }

    translateUi(node: Node): void {
        if (isElement(node) && node.title) {
            const translation = this.translateUiText(node.title);
            if (translation != null) {
                node.title = translation;
            }
        }
        if (isText(node)) {
            const text = node.textContent ?? '';
            const translation = this.translateUiText(text);
            if (translation != null) {
                node.textContent = translation;
            }
            return;
        }
        if (isElement(node, 'input') && (node.type === 'submit' || node.type === 'button' || node.type === 'reset')) {
            // 将 input[type=submit] 等按钮替换为 button[ehs-input]，避免 value 属性被翻译导致提交内容错误
            const translation = this.translateUiText(node.value);
            if (translation != null) {
                const button = document.createElement('button');
                for (const attr of node.attributes) {
                    button.setAttribute(attr.name, attr.value);
                }
                button.setAttribute('ehs-input', '');
                button.textContent = translation;
                node.replaceWith(button);
                // 新元素的事件派发至原元素，兼容 MEMS
                button.addEventListener('click', (e) => {
                    if (!node.dispatchEvent(new MouseEvent('click', e))) {
                        e.preventDefault();
                    }
                });
            }
            return;
        }
        if (isElement(node, 'button') && node.hasAttribute('ehs-input')) {
            // 响应 button[ehs-input] 的 value 变更
            const translation = this.translateUiText(node.value);
            node.textContent = translation ?? node.value;
            return;
        }
        if ((isElement(node, 'input') || isElement(node, 'textarea')) && node.placeholder) {
            const translation = this.translateUiText(node.placeholder);
            if (translation != null) {
                node.placeholder = translation;
            }
            return;
        }
        if (isElement(node, 'optgroup')) {
            const translation = this.translateUiText(node.label);
            if (translation != null) {
                node.label = translation;
            }
            return;
        }

        // 导航链接，一体化处理，不再处理文本节点（原文使用子元素和媒体查询实现页面宽度改变时文本自动更改为缩写）
        if (isElement(node, 'a') && node?.parentElement?.parentElement?.id === 'nb') {
            const translation = this.translateUiText(node.textContent ?? '');
            if (translation != null) {
                node.textContent = translation;
            }
        }

        if (isElement(node, 'select') && node.matches('.searchnav > div > :scope')) {
            // 兼容 MEMS
            this.cloneAndPrependElement(node);
        }

        if (isElement(node, 'p') && node.classList.contains('gpc')) {
            /* 兼容熊猫书签，单独处理页码，保留原页码 Element，防止熊猫书签取不到报错 */
            this.cloneAndPrependElement(node);
        }

        if (isElement(node, 'div') && node.id === 'gdd') {
            /* E-Hentai-Downloader 兼容处理 */
            this.cloneAndPrependElement(node.firstElementChild!);
        }
    }

    private cloneAndPrependElement<E extends Element, C extends Element = E>(el: E, cloneNode?: (el: E) => C): C {
        const clone = cloneNode ? cloneNode(el) : (el.cloneNode(true) as C);
        clone.classList.add(ignoreClassName);
        clone.setAttribute('hidden', '');
        if (clone.id) clone.id = `ehs-clone-${clone.id}`;
        clone.querySelectorAll('[id]').forEach((node) => {
            node.id = `ehs-clone-${node.id}`;
        });
        el.before(clone);
        return clone;
    }
}
