import { UiTranslation } from 'services/ui-translation';
import { Service } from 'services';
import { ConfigData } from 'services/storage';
import { SyncStorage } from 'services/sync-storage';
import { Logger } from 'services/logger';
import { Messaging } from 'services/messaging';
import { Tagging } from 'services/tagging';
import { DateTime } from 'services/date-time';

import './index.less';

function isNode<K extends keyof HTMLElementTagNameMap>(node: Node, nodeName: K): node is HTMLElementTagNameMap[K] {
    return node && node.nodeName === nodeName.toUpperCase();
}

function isText(node: Node): node is Text {
    return node.nodeType === Node.TEXT_NODE;
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

    tagMap = this.storage.get('databaseMap');
    // 存储未找到翻译的标签，待替换数据加载后重试
    private readonly pendingTags: Node[] = [];
    documentEnd = false;
    readonly skipNode: Set<string> = new Set(['TITLE', 'LINK', 'META', 'HEAD', 'SCRIPT', 'BR', 'HR', 'STYLE', 'MARK']);
    config = this.getAndInitConfig();
    observer?: MutationObserver;

    readonly uiData = this.uiTranslation.get();

    private updateConfig(config: ConfigData): void {
        this.config = config;
        this.storage.set('config', config);
        const body = document.querySelector('body');
        if (body) this.setBodyClass(body);
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

    private init(): void {
        window.document.addEventListener('DOMContentLoaded', () => {
            this.documentEnd = true;
        });
        const body = document.querySelector('body');
        if (body) {
            const nodes = new Array<Node>();
            this.setBodyClass(body);
            const nodeIterator = document.createNodeIterator(body);
            let node = nodeIterator.nextNode();
            while (node) {
                nodes.push(node);
                this.translateNode(node);
                node = nodeIterator.nextNode();
            }
            this.logger.debug(`有 ${nodes.length} 个节点在注入前加载`, nodes);
        } else {
            this.logger.debug(`没有节点在注入前加载`);
        }
        this.observer = new MutationObserver((mutations) =>
            mutations.forEach((mutation) =>
                mutation.addedNodes.forEach((node1) => {
                    this.translateNode(node1);
                    if (this.documentEnd && node1.childNodes) {
                        const nodeIterator = document.createNodeIterator(node1);
                        let node = nodeIterator.nextNode();
                        while (node) {
                            this.translateNode(node);
                            node = nodeIterator.nextNode();
                        }
                    }
                }),
            ),
        );
        this.observer.observe(window.document, {
            attributes: true,
            childList: true,
            subtree: true,
        });

        const timer = this.logger.time('获取替换数据');
        Promise.resolve()
            .then(async () => {
                const currentSha = this.storage.get('databaseSha');
                const data = await this.messaging.emit('get-tag-map', { ifNotMatch: currentSha });
                if (data.map) {
                    const tagMap: this['tagMap'] = {};
                    for (const key in data.map) {
                        tagMap[key] = data.map[key].name;
                    }
                    this.tagMap = tagMap;
                    const pendingTags = this.pendingTags.splice(0);
                    pendingTags.forEach((t) => this.translateTagImpl(t));
                    this.storage.set('databaseMap', tagMap);
                    this.storage.set('databaseSha', data.sha);
                    this.logger.log('替换数据已更新', data.sha);
                }
                timer.end();
            })
            .catch(this.logger.error);
    }

    setBodyClass(node: HTMLBodyElement): void {
        if (!node) return;
        node.classList.add(!location.host.includes('exhentai') ? 'eh' : 'ex');

        node.classList.remove(...[...node.classList.values()].filter((k) => k.startsWith('ehs')));
        if (!this.config.showIcon) {
            node.classList.add('ehs-hide-icon');
        }
        if (this.config.translateTag) {
            node.classList.add('ehs-translate-tag');
        }
        node.classList.add(`ehs-image-level-${this.config.introduceImageLevel}`);
    }

    translateNode(node: Node): void {
        if (
            !node.nodeName ||
            this.skipNode.has(node.nodeName) ||
            (node.parentNode && this.skipNode.has(node.parentNode.nodeName))
        ) {
            return;
        }

        if (isNode(node, 'body')) {
            this.setBodyClass(node);
        }

        const handled = this.translateTag(node);
        /* tag 处理过的ui不再处理*/
        if (!handled && this.config.translateUi) {
            this.translateUi(node);
        }
    }

    private isTagContainer(node: Element | null): boolean {
        if (!node) {
            return false;
        }
        return node.classList.contains('gt') || node.classList.contains('gtl') || node.classList.contains('gtw');
    }

    // 实际进行替换，必须保证 node 是标签节点
    private translateTagImpl(node: Node): boolean {
        const parentElement = node.parentElement;
        if (!parentElement || parentElement.hasAttribute('ehs-tag')) {
            return true;
        }

        const aId = parentElement.id;
        const aTitle = parentElement.title;

        let fullKeyCandidate: string | undefined;
        if (aTitle) {
            const [namespace, key] = aTitle.split(':');
            fullKeyCandidate = this.tagging.fullKey({ namespace, key });
        } else if (aId) {
            let id = aId;
            if (id.startsWith('ta_')) id = id.slice(3);
            const [namespace, key] = id.replace(/_/gi, ' ').split(':');
            fullKeyCandidate = key
                ? this.tagging.fullKey({ namespace, key })
                : this.tagging.fullKey({ namespace: '', key: namespace });
        }

        if (!fullKeyCandidate) return false;
        const fullKey = fullKeyCandidate;
        const text = node.textContent ?? '';
        if (!this.tagMap) {
            this.pendingTags.push(node);
            return true;
        }
        let value = this.tagMap[fullKey];
        if (!value) {
            this.pendingTags.push(node);
            return true;
        }
        value = this.tagging.markImagesAndEmoji(value);
        if (!aTitle) {
            parentElement.title = fullKey;
        }
        if (text[1] === ':') {
            value = `${text[0]}:${value}`;
        }
        parentElement.innerHTML = `<span ehs-tag-original>${text}</span><span ehs-tag-translated>${value}</span>`;
        parentElement.setAttribute('ehs-tag', '');

        return true;
    }

    translateTag(node: Node): boolean {
        const parentElement = node.parentElement;
        if (!isText(node) || !parentElement) {
            return false;
        }
        if (parentElement.nodeName === 'MARK' || parentElement.classList.contains('auto-complete-text')) {
            // 不翻译搜索提示的内容
            return true;
        }

        // 标签只翻译已知的位置
        if (!this.isTagContainer(parentElement) && !this.isTagContainer(parentElement?.parentElement)) {
            return false;
        }

        return this.translateTagImpl(node);
    }

    translateUi(node: Node): void {
        const text = node.textContent ?? '';
        if (isText(node)) {
            if (this.uiData[text]) {
                node.textContent = this.uiData[text];
                return;
            }
            let reptext = text;
            reptext = reptext.replace(/(\d+) pages?/, '$1 页');
            reptext = reptext.replace(/Torrent Download \(\s*(\d+)\s*\)/, '种子下载（$1）');
            reptext = reptext.replace(/Average: ([\d.]+)/, '平均值：$1');
            reptext = reptext.replace(/Posted on (.*?) by:\s*/, `评论时间：$1 \xA0作者：`);
            reptext = reptext.replace(/^, added (.*?)$/, `，更新于 $1`);
            reptext = reptext.replace(
                /Showing ([\d,]+) results?\. Your filters excluded ([\d,]+) galler(ies|y) from this page/,
                '共 $1 个结果，你的过滤器已从此页面移除 $2 个结果。',
            );
            reptext = reptext.replace(/Showing ([\d,]+) results?/, '共 $1 个结果');
            reptext = reptext.replace(/Rate as ([\d.]+) stars?/, '$1 星');
            reptext = reptext.replace(/([\d,]+) torrent was found for this gallery./, '找到了 $1 个种子。');
            reptext = reptext.replace(
                /([\d,]+) \/ ([\d,]+) favorite note slots? used./,
                '已经使用了 $1 个备注，共 $2 个。',
            );
            reptext = reptext.replace(/Showing results for ([\d,]+) watched tags?/, '订阅的 $1 个标签的结果');
            reptext = reptext.replace(/Showing ([\d,]+)-([\d,]+) of ([\d,]+)/, '$1 - $2，共 $3 个结果');
            reptext = reptext.replace(/Download original (.*?) source/, '下载原图（$1）');

            reptext = reptext.replace(/\d\d\d\d-\d\d-\d\d \d\d:\d\d/, (t) => {
                const date = Date.parse(t + 'Z');
                if (!date) return t;
                return `${this.time.diff(date, undefined, DateTime.hour)}`;
            });
            reptext = reptext.replace(/\d\d \w{2,10} \d\d\d\d, \d\d:\d\d\s*UTC/i, (t) => {
                const date = Date.parse(t);
                if (!date) return t;
                return `${this.time.diff(date, undefined, DateTime.hour)}`;
            });

            if (reptext !== text) {
                node.textContent = reptext;
                return;
            }
        } else if (isNode(node, 'input') || isNode(node, 'textarea')) {
            if (this.uiData[node.placeholder]) {
                node.placeholder = this.uiData[node.placeholder];
                return;
            }
            if (node.type === 'submit' || node.type === 'button') {
                if (this.uiData[node.value]) {
                    node.value = this.uiData[node.value];
                    return;
                }
            }
        } else if (isNode(node, 'optgroup')) {
            if (this.uiData[node.label]) {
                node.label = this.uiData[node.label];
                return;
            }
        } else if (isNode(node, 'a') && node?.parentElement?.parentElement?.id === 'nb') {
            if (this.uiData[text]) {
                node.textContent = this.uiData[text];
                return;
            }
        }

        if (isNode(node, 'p')) {
            /* 兼容熊猫书签，单独处理页码，保留原页码Element，防止熊猫书签取不到报错*/
            if (node.classList.contains('gpc')) {
                node.style.display = 'none';
                const p = document.createElement('p');
                p.textContent = text.replace(
                    /Showing ([\d,]+) - ([\d,]+) of ([\d,]+) images?/,
                    '$1 - $2，共 $3 张图片',
                );
                p.className = 'gpc-translate';
                node.parentElement?.insertBefore(p, node);
            }
        }

        if (isNode(node, 'div')) {
            /* E-Hentai-Downloader 兼容处理 */
            if (node.id === 'gdd') {
                const div = document.createElement('div');
                div.textContent = node.textContent;
                div.style.display = 'none';
                node.insertBefore(div, null);
            }

            /* 熊猫书签 兼容处理 2 */
            if (
                node.parentElement?.id === 'gdo4' &&
                node.classList.contains('ths') &&
                node.classList.contains('nosel')
            ) {
                const div = document.createElement('div');
                div.textContent = node.textContent;
                div.style.display = 'none';
                div.className = 'ths';
                node.parentElement.insertBefore(div, node);
            }
        }
    }
}
