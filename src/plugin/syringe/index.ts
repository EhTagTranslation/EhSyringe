import { UiTranslation } from 'services/ui-translation';
import { Service } from 'services';
import { TagItem } from 'interface';
import { Storage, ConfigData } from 'services/storage';
import { Logger } from 'services/logger';
import { Messaging } from 'services/messaging';
import { Tagging } from 'services/tagging';
import { packageJson } from 'info';
import { Store, get, set } from 'idb-keyval';

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
        readonly storage: Storage,
        readonly uiTranslation: UiTranslation,
        readonly logger: Logger,
        readonly messaging: Messaging,
        readonly tagging: Tagging,
    ) {
        this.init();
    }

    private readonly tagMap = new Store(`${packageJson.name}_tag_map`);
    // 存储未找到翻译的标签，待替换数据加载后重试
    private readonly pendingTags: Node[] = [];
    documentEnd = false;
    readonly skipNode: Set<string> = new Set(['TITLE', 'LINK', 'META', 'HEAD', 'SCRIPT', 'BR', 'HR', 'STYLE', 'MARK']);
    config = this.getAndInitConfig();
    observer?: MutationObserver;

    readonly uiData = this.uiTranslation.get();

    private getAndInitConfig(): ConfigData {
        const key = `${packageJson.name}_config`;
        this.storage
            .get('config')
            .then((conf) => {
                this.config = conf;
                localStorage.setItem(key, JSON.stringify(conf));
            })
            .catch(this.logger.error);
        const v = localStorage.getItem(key);
        if (v) {
            try {
                return JSON.parse(v) as ConfigData;
            } catch {
                this.logger.error('解析 localStorage 配置失败');
            }
        }
        return this.storage.defaults.config;
    }

    private init(): void {
        if (!(this.config.translateUi || this.config.translateTag)) return;

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

        if (this.config.translateTag) {
            const timer = this.logger.time('获取替换数据');
            get<string>('__sha__', this.tagMap)
                .then(async (sha) => {
                    this.logger.log(sha);
                    const data = await this.messaging.emit('get-tag-map', { ifNotMatch: sha });
                    const map = data.map;
                    if (map) {
                        await Promise.all(
                            Object.keys(map).map((k) => {
                                const v = map[k];
                                return set(k, v, this.tagMap);
                            }),
                        );
                        await set('__sha__', data.sha, this.tagMap);
                        this.logger.log('替换数据已更新', data.sha);
                    }
                    timer.end();
                    const pendingTags = this.pendingTags.splice(0);
                    pendingTags.forEach((t) => this.translateTagImpl(t));
                })
                .catch(this.logger.error);
        }
    }

    setBodyClass(node: HTMLBodyElement): void {
        if (!node) return;
        node.classList.add(!location.host.includes('exhentai') ? 'eh' : 'ex');
        if (!this.config.showIcon) {
            node.classList.add('ehs-hide-icon');
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

        let handled = false;
        if (this.config.translateTag) {
            handled = this.translateTag(node);
        }
        /* tag 处理过的ui不再处理*/
        if (this.config.translateUi && !handled) {
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

        get<TagItem>(fullKey, this.tagMap)
            .then((tag) => {
                let value = tag?.name;
                if (!value) {
                    this.pendingTags.push(node);
                    return;
                }
                if (!aTitle) {
                    parentElement.title = fullKey;
                }
                parentElement.setAttribute('ehs-tag', text);
                if (text[1] === ':') {
                    value = `${text[0]}:${value}`;
                }
                if (value !== text) {
                    parentElement.innerHTML = value;
                } else {
                    this.logger.log('翻译内容相同', value);
                }
            })
            .catch(this.logger.error);
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
            reptext = reptext.replace(
                /Posted on (.*?) by:\s*/,
                (_, t) => `评论时间：${new Date(t).toLocaleString()} \xA0作者：`,
            );
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
