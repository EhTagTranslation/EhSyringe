import { NotificationInfo } from '../common/notification';
import { Badge } from '../common/badge';

const _notification: typeof GM_notification =
    typeof GM_notification == 'function'
        ? GM_notification
        : function (
              detailsOrText: Tampermonkey.NotificationDetails | string,
              ondoneOrTitle?: Tampermonkey.NotificationOnDone | string,
              image?: string,
              onclick?: Tampermonkey.NotificationOnClick,
          ) {
              const notification: Tampermonkey.NotificationThis =
                  typeof detailsOrText == 'object'
                      ? (detailsOrText as Tampermonkey.NotificationThis)
                      : ({
                            text: String(detailsOrText),
                            image: image,
                            onclick: onclick,
                            highlight: false,
                        } as Tampermonkey.NotificationThis);
              notification.id = `${Math.random() * 1000000000}`;
              if (typeof ondoneOrTitle == 'function') {
                  notification.ondone = ondoneOrTitle;
              } else if (ondoneOrTitle) {
                  notification.title = ondoneOrTitle;
              }
              alert(`${notification.title ?? ''}\n\n${notification.text ?? ''}`);
              notification.onclick?.();
              notification.ondone?.(true);
          };

const _openInTab: typeof GM_openInTab =
    typeof GM_openInTab == 'function'
        ? GM_openInTab
        : function (url) {
              const opened = window.open(url);
              return {
                  close() {
                      opened?.close();
                      this.onclose?.();
                      this.closed = true;
                  },
                  closed: false,
              };
          };

export function openInTab(url: string): void {
    _openInTab(url, { active: true, insert: true, setParent: true });
}

export function sendNotification(info: NotificationInfo): void {
    _notification({ text: info.message, title: info.title, onclick: info.action });
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
