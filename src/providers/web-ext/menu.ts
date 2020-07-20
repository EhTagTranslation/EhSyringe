import { Menu } from '../common/menu';
import { browser, Menus } from 'webextension-polyfill-ts';

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
                url: data.linkUrl,
            });
        },
    });
}
