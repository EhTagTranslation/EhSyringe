import { browser } from 'webextension-polyfill-ts';

export function openInTab(url: string): void {
    void browser.tabs.create({
        url,
    });
}
