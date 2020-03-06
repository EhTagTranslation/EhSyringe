import { EHTNamespaceName } from '../interface';
import { getEditorUrl } from '../tool/tool';

export class ContextMenu implements chrome.contextMenus.CreateProperties {
    readonly documentUrlPatterns = ['*://exhentai.org/*', '*://e-hentai.org/*', '*://*.exhentai.org/*', '*://*.e-hentai.org/*'];
    readonly title = '提交标签翻译';
    readonly targetUrlPatterns = ['*://exhentai.org/tag/*', '*://e-hentai.org/tag/*', '*://*.exhentai.org/tag/*', '*://*.e-hentai.org/tag/*'];
    readonly contexts = ['link'];

    readonly onclick = (info: chrome.contextMenus.OnClickData): void => {
        if (!info.linkUrl || !/\/tag\//.test(info.linkUrl)) {
            return;
        }
        const seg = info.linkUrl.split('/').pop()!.replace(/\+/g, ' ').split(':');
        const namespace = seg.length === 1 ? 'misc' : (seg[0] as EHTNamespaceName);
        const tag = seg.pop()!;
        chrome.tabs.create({
            url: getEditorUrl(namespace, tag),
        });
    }
}

function init(): boolean {
    if (!chrome.contextMenus) {
        return false;
    }
    const menu = new ContextMenu();
    chrome.contextMenus.create(menu);
    return true;
}

export const contextMenu = init();
