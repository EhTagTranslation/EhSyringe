import type { Storage, Listener, ListenerId, SyncStorage } from '../common/storage';
import type { JsonValue } from 'type-fest';
import { packageJson } from 'info';

const listeners = new Map<string, Listener[]>();

browser.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local') return;
    for (const key in changes) {
        const listener = listeners.get(key);
        if (!listener || listener.length === 0) continue;
        const element = changes[key];
        listener.forEach((l) => l(key, element.oldValue as JsonValue, element.newValue as JsonValue));
    }
});

export const storage: Storage = {
    get: async (key) => {
        const result = await browser.storage.local.get(key);
        return result[key] as JsonValue;
    },
    set: (key, value) => browser.storage.local.set({ [key]: value }),
    delete: (key) => browser.storage.local.remove(key),
    keys: async () => Object.keys(await browser.storage.local.get()),
    on: (key, listener) => {
        let listenerList = listeners.get(key);
        if (!listenerList) {
            listenerList = [];
            listeners.set(key, listenerList);
        }
        listenerList.push(listener);
        return listener as unknown as ListenerId;
    },
    off: (key, id) => {
        const listenerList = listeners.get(key);
        if (!listenerList || listenerList.length === 0) {
            return;
        }
        const index = listenerList.indexOf(id as unknown as Listener);
        if (index < 0) return;
        listenerList.splice(index, 1);
    },
};

const mark = `${packageJson.name}.`;
const syncKey = (k: string): string => mark + k;

export const syncStorage: SyncStorage = {
    get: (key) => {
        const v = localStorage.getItem(syncKey(key));
        if (v == null) return undefined;
        try {
            return JSON.parse(v) as JsonValue;
        } catch {
            syncStorage.delete(key);
            return undefined;
        }
    },
    set: (key, value) => localStorage.setItem(syncKey(key), JSON.stringify(value)),
    delete: (key) => localStorage.removeItem(syncKey(key)),
    keys: () => {
        const keys = new Array<string>();
        for (let index = 0; index < localStorage.length; index++) {
            const key = localStorage.key(index);
            if (key?.startsWith(mark)) {
                keys.push(key.slice(mark.length));
            }
        }
        return keys;
    },
};
