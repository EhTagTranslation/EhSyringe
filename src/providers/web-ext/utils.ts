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
    if (info.background && typeof chrome.action.setBadgeBackgroundColor == 'function') {
        void chrome.action.setBadgeBackgroundColor({ color: info.background });
    }
    if (info.text != null) {
        if (typeof chrome.action.setBadgeText == 'function') {
            void chrome.action.setBadgeText({ text: info.text });
        } else if (typeof chrome.action.setTitle == 'function') {
            const extname = packageJson.displayName;
            const title = info.text ? `${extname} (${info.text})` : extname;
            void chrome.action.setTitle({ title });
        }
    }
}
