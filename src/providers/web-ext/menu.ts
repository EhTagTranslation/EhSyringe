/// <reference types="chrome" />
import type { Menu } from '../common/menu';
import type { Menus } from 'webextension-polyfill';
export * from '../common/menu';

const clickHandlers = new Map<string, (info: Menus.OnClickData) => void>();

async function createMenuImpl(info: Menu): Promise<void> {
    try {
        await browser.contextMenus.remove(info.title);
    } catch {
        // Ignore error if menu item does not exist
    }
    browser.contextMenus.create(
        {
            id: info.title,
            title: info.title,
            targetUrlPatterns: info.targetUrlPatterns,
            contexts: info.contexts,
        },
        () => {
            if (chrome.runtime.lastError) {
                console.error(`Failed to create context menu: ${chrome.runtime.lastError.message}`);
            }
        },
    );
    if (clickHandlers.size === 0) {
        browser.contextMenus.onClicked.addListener((data: Menus.OnClickData): void => {
            const handler = clickHandlers.get(data.menuItemId as string);
            if (handler) {
                handler(data);
            }
        });
    }
    clickHandlers.set(info.title, (data: Menus.OnClickData): void => {
        info.onclick({
            url: data.mediaType ? data.srcUrl : data.linkUrl,
        });
    });
}

export function createMenu(info: Menu): void {
    if (!chrome.contextMenus) {
        return;
    }
    void createMenuImpl(info);
}
