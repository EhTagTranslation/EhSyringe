import type { Menu } from '../common/menu';
import type { Menus } from 'webextension-polyfill';
export * from '../common/menu';

export function createMenu(info: Menu): void {
    if (!chrome.contextMenus) {
        return;
    }
    browser.contextMenus.create({
        id: info.title,
        title: info.title,
        targetUrlPatterns: info.targetUrlPatterns,
        contexts: info.contexts,
    });
    browser.contextMenus.onClicked.addListener((data: Menus.OnClickData): void => {
        if (data.menuItemId !== info.title) return;

        info.onclick({
            url: data.mediaType ? data.srcUrl : data.linkUrl,
        });
    });
}
