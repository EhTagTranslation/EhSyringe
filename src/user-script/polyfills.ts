import '../polyfills';

if (typeof GM_notification == 'undefined') {
    window.GM_notification = function (
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
}

const STORAGE_PREFIX = 'GM_POLYFILL_';

function parse<T>(value?: string | null, defaultValue?: T): T {
    if (!value) return defaultValue as T;
    try {
        return JSON.parse(value) as T;
    } catch {
        return defaultValue as T;
    }
}

if (typeof GM_getValue == 'undefined') {
    window.GM_getValue = function (name, defaultValue) {
        const value = localStorage.getItem(`${STORAGE_PREFIX}${name}`);
        if (!value) return defaultValue as NonNullable<typeof defaultValue>;
        return parse(value);
    };
}

if (typeof GM_setValue == 'undefined') {
    window.GM_setValue = function (name, value) {
        if (value === undefined) {
            return GM_deleteValue(name);
        }
        try {
            const jValue = JSON.stringify(value);
            const key = `${STORAGE_PREFIX}${name}`;
            localStorage.setItem(key, jValue);
            onStorageChange(
                new StorageEvent('storage', {
                    storageArea: localStorage,
                    key: key,
                    newValue: jValue,
                }),
                true,
            );
        } catch {
            // Ignore
        }
    };
}

if (typeof GM_deleteValue == 'undefined') {
    window.GM_deleteValue = function (name) {
        const key = `${STORAGE_PREFIX}${name}`;
        localStorage.removeItem(key);
        onStorageChange(
            new StorageEvent('storage', {
                storageArea: localStorage,
                key: key,
            }),
            true,
        );
    };
}

if (typeof GM_listValues == 'undefined') {
    window.GM_listValues = function () {
        const names = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!key) break;
            if (key.startsWith(STORAGE_PREFIX)) {
                names.push(key.slice(STORAGE_PREFIX.length));
            }
        }
        return names;
    };
}

let listenerId = 1;
const listeners = new Map<number, { name: string; listener: Tampermonkey.ValueChangeListener }>();

function onStorageChange(ev: StorageEvent, local = false): void {
    if (ev.storageArea !== localStorage) return;
    if (!ev.key) {
        for (const { name, listener } of listeners.values()) {
            listener(name, undefined, GM_getValue(name), !local);
        }
        return;
    }
    if (!ev.key.startsWith(STORAGE_PREFIX)) return;
    const changedName = ev.key.slice(STORAGE_PREFIX.length);
    const oldValue = parse(ev.oldValue);
    const newValue = parse(ev.newValue);
    for (const { name, listener } of listeners.values()) {
        if (name !== changedName) continue;
        listener(name, oldValue, newValue, !local);
    }
}

if (typeof GM_addValueChangeListener == 'undefined') {
    window.GM_addValueChangeListener = function (name, listener) {
        const id = listenerId++;
        if (listeners.size === 0) {
            window.addEventListener('storage', onStorageChange);
        }
        listeners.set(id, { name, listener });
        return id;
    };
}

if (typeof GM_removeValueChangeListener == 'undefined') {
    window.GM_removeValueChangeListener = function (listenerId: number) {
        listeners.delete(listenerId);
        if (listeners.size === 0) {
            window.removeEventListener('storage', onStorageChange);
        }
    };
}

if (typeof GM_openInTab == 'undefined') {
    window.GM_openInTab = function (url, _options) {
        const opened = window.open(url);
        return {
            close() {
                opened?.close();
                this.onclosed?.();
                this.closed = true;
            },
            closed: false,
        };
    };
}
