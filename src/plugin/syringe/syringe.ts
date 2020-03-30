import { getUiData } from '../../data/ui-data';
import { TagReplace } from '../../interface';
import { chromeMessage } from '../../tool/chrome-message';
import { config } from '../../tool/config-manage';
import { logger } from '../../tool/log';

import './syringe.less';

(function (): void {
    const tagClear = () => {
        window.localStorage.removeItem('tag-list');
        window.localStorage.removeItem('tag-replace-data');
        window.localStorage.removeItem('tag-update-time');
        window.localStorage.removeItem('tag-sha');
        chrome.storage.local.remove('tagList');
        chrome.storage.local.remove('tagReplaceData');
        chrome.storage.local.remove('updateTime');
        chrome.storage.local.remove('tagDB');
        chrome.storage.local.remove('sha');
    };
    const win = window as any;
    if (win.exportFunction) {
        win.exportFunction(tagClear, window, { defineAs: 'tagClear' });
    } else {
        win.tagClear = tagClear;
    }
})();

function isNode<K extends keyof HTMLElementTagNameMap>(node: Node, nodeName: K): node is HTMLElementTagNameMap[K] {
    return node && node.nodeName === nodeName.toUpperCase();
}

function isText(node: Node): node is Text {
    return node.nodeType === Node.TEXT_NODE;
}

class Syringe {
    tagReplace: TagReplace = {};
    pendingTags: Node[] = [];
    documentEnd = false;
    readonly skipNode: Set<string> = new Set(['TITLE', 'LINK', 'META', 'HEAD', 'SCRIPT', 'BR', 'HR', 'STYLE', 'MARK']);
    readonly conf = config.syncGet();
    observer?: MutationObserver;

    readonly uiData = getUiData();

    constructor() {
        config.sync().catch(logger.error);
        if (this.conf.translateTag || this.conf.translateUI) {
            this.init();
        }
    }

    private init(): void {
        window.document.addEventListener('DOMContentLoaded', (e) => {
            this.documentEnd = true;
        });
        this.setBodyClass(document.querySelector('body')!);
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

        if (this.conf.translateTag) {
            const timer = logger.time('获取替换数据');
            chromeMessage
                .send('get-tagreplace', null)
                .then((data) => {
                    this.tagReplace = data as TagReplace;
                    timer.end();
                    this.pendingTags.forEach((t) => this.translateTagImpl(t));
                    this.pendingTags = [];
                })
                .catch(logger.error);
        }
    }

    setBodyClass(node: HTMLBodyElement) {
        if (!node) return;
        node.classList.add(!location.host.includes('exhentai') ? 'eh' : 'ex');
        if (!this.conf.showIcon) {
            node.classList.add('ehs-hide-icon');
        }
        node.classList.add(`ehs-image-level-${this.conf.introduceImageLevel}`);
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
        if (this.conf.translateTag) {
            handled = this.translateTag(node);
        }
        /* tag 处理过的ui不再处理*/
        if (this.conf.translateUI && !handled) {
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

        let value = '';
        let aId = parentElement.id;
        let aTitle = parentElement.title;

        if (!(value || aTitle || aId)) {
            return false;
        }

        if (!this.tagReplace) {
            // 替换列表未加载时直接返回
            this.pendingTags.push(node);
            return true;
        }

        if (!value && aTitle) {
            if (aTitle.startsWith(':')) {
                aTitle = aTitle.slice(1);
            }
            if (this.tagReplace[aTitle]) {
                value = this.tagReplace[aTitle];
            }
        }

        if (!value && aId) {
            aId = aId.replace('ta_', '');
            aId = aId.replace(/_/gi, ' ');
            if (this.tagReplace[aId]) {
                value = this.tagReplace[aId];
            }
        }

        if (value) {
            const text = node.textContent ?? '';
            if (text[1] === ':') {
                value = `${text[0]}:${value}`;
            }
            if (!parentElement.title) {
                parentElement.title = aId || aTitle;
            }
            parentElement.setAttribute('ehs-tag', text);
            if (value !== node.textContent) {
                parentElement.innerHTML = value;
            } else {
                logger.log('翻译内容相同', value);
            }
            return true;
        }

        return false;
    }

    translateTag(node: Node): boolean {
        if (!isText(node) || !node.parentElement) {
            return false;
        }
        const parentElement = node.parentElement;
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
            reptext = reptext.replace(/Torrent Download \( (\d+) \)/, '种子下载（$1）');
            reptext = reptext.replace(/Average: ([\d\.]+)/, '平均值：$1');
            reptext = reptext.replace(
                /Posted on (.*?) by:\s*/,
                (_, t) => `评论时间：${new Date(t).toLocaleString()} \xA0作者：`,
            );
            reptext = reptext.replace(
                /Showing ([\d,]+) results?\. Your filters excluded ([\d,]+) galler(ies|y) from this page/,
                '共 $1 个结果，你的过滤器已从此页面移除 $2 个结果。',
            );
            reptext = reptext.replace(/Showing ([\d,]+) results?/, '共 $1 个结果');
            reptext = reptext.replace(/Rate as ([\d\.]+) stars?/, '$1 星');
            reptext = reptext.replace(/([\d,]+) torrent was found for this gallery./, '找到了 $1 个种子。');
            reptext = reptext.replace(
                /([\d,]+) \/ ([\d,]+) favorite note slots? used./,
                '已经使用了 $1 个便签，共 $2 个。',
            );
            reptext = reptext.replace(/Showing results for ([\d,]+) watched tags?/, '订阅的 $1 个标签的结果');
            reptext = reptext.replace(/Showing ([\d,]+)-([\d,]+) of ([\d,]+)/, '$1 - $2，共 $3 个结果');
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
                node.parentElement!.insertBefore(p, node);
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

export const syringe = new Syringe();
