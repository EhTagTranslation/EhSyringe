import type { NotificationInfo } from '../common/notification';
import type { Badge } from 'providers/common/badge';
import { packageJson } from 'info';

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

export function setBadge(info: Badge): void {
    if (info.background && chrome.browserAction.setBadgeBackgroundColor) {
        void chrome.browserAction.setBadgeBackgroundColor({ color: info.background });
    }
    if (info.text != null) {
        if (chrome.browserAction.setBadgeText) {
            void chrome.browserAction.setBadgeText({ text: info.text });
        } else if (chrome.browserAction.setTitle) {
            const extname = packageJson.displayName;
            const title = info.text ? `${extname} (${info.text})` : extname;
            void chrome.browserAction.setTitle({ title });
        }
    }
}
