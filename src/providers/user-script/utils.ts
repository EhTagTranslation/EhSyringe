import { NotificationInfo } from '../common/notification';
import { Badge } from '../common/badge';
export function openInTab(url: string): void {
    GM_openInTab(url, { active: true, insert: true, setParent: true });
}

export function sendNotification(info: NotificationInfo): void {
    GM_notification({ text: info.message, title: info.title, onclick: info.action });
}

export function setBadge(info: Badge): void {
    console.log('setBadge', info);
}
