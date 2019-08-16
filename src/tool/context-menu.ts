export class ContextMenu implements chrome.contextMenus.CreateProperties {
    documentUrlPatterns = ['*://exhentai.org/*', '*://e-hentai.org/*', '*://*.exhentai.org/*', '*://*.e-hentai.org/*'];
    title = '提交标签翻译';
    targetUrlPatterns = ['*://exhentai.org/tag/*', '*://e-hentai.org/tag/*', '*://*.exhentai.org/tag/*', '*://*.e-hentai.org/tag/*'];
    contexts = ['link'];

    onclick(info: chrome.contextMenus.OnClickData): void {
        if (!/\/tag\//.test(info.linkUrl)) {
            return;
        }
        const seg = info.linkUrl.split('/').pop().replace('+', ' ').split(':');
        const namespace = seg.length === 1 ? 'misc' : seg[0];
        const tag = seg.pop();
        chrome.tabs.create({
            url: `https://ehtagtranslation.github.io/Editor/edit/${encodeURIComponent(namespace)}/${encodeURIComponent(tag)}`,
        });
    }

    static init() {
        if (!chrome.contextMenus) {
            return false;
        }
        const menu = new ContextMenu();
        chrome.contextMenus.create(menu);
        return true;
    }
}
