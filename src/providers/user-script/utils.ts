import { NotificationInfo } from '../common/notification';
import { Badge } from '../common/badge';
export function openInTab(url: string): void {
    GM_openInTab(url, { active: true, insert: true, setParent: true });
}

export function sendNotification(info: NotificationInfo): void {
    GM_notification({ text: info.message, title: info.title, onclick: info.action });
}

export function setBadge(info: Badge): void {
    const badge = document.getElementById('eh-syringe-popup-badge') as HTMLDivElement;
    if (badge) {
        if (info.text != null) {
            badge.innerText = info.text;
            badge.style.visibility = info.text ? 'visible' : 'hidden';
        }
        if (info.background != null) {
            badge.style.background = info.background;
        }
    }
}
