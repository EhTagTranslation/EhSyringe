import { Storage, Listener, ListenerId } from '../common/storage';
import { JsonValue } from 'type-fest';

const listeners = new Map<string, Listener[]>();

browser.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local') return;
    for (const key in changes) {
        const listener = listeners.get(key);
        if (!listener || listener.length === 0) continue;
        const element = changes[key];
        listener.forEach((l) => l(key, element.oldValue, element.newValue));
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
        return (listener as unknown) as ListenerId;
    },
    off: (key, id) => {
        const listenerList = listeners.get(key);
        if (!listenerList || listenerList.length === 0) {
            return;
        }
        const index = listenerList.indexOf((id as unknown) as Listener);
        if (index < 0) return;
        listenerList.splice(index, 1);
    },
};
