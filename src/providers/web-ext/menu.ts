import type { Menu } from '../common/menu';
import type { Menus } from 'webextension-polyfill';
export * from '../common/menu';

export function createMenu(info: Menu): void {
    if (!chrome.contextMenus) {
        return;
    }
    browser.contextMenus.create({
        title: info.title,
        targetUrlPatterns: info.targetUrlPatterns,
        contexts: info.contexts,
        onclick: (data: Menus.OnClickData): void => {
            info.onclick({
                url: data.mediaType ? data.srcUrl : data.linkUrl,
            });
        },
    });
}
