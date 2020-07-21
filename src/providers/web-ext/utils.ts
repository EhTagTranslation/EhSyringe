import { browser } from 'webextension-polyfill-ts';
import { NotificationInfo } from '../common/notification';

export function openInTab(url: string): void {
    void browser.tabs.create({
        url,
    });
}

export function sendNotification(info: NotificationInfo): void {
    browser.notifications
        .create({
            type: 'basic',
            title: info.title,
            message: info.message,
            iconUrl: browser.runtime.getURL('assets/logo-padding.svg'),
        })
        .then((id) => {
            const action = info.action;
            if (!action) return;
            const listener = (cid: string): void => {
                if (cid === id) {
                    action();
                    browser.notifications.onClicked.removeListener(listener);
                }
            };
            browser.notifications.onClicked.addListener(listener);
        })
        .catch(console.error);
}
