import { Storage, ListenerId, SyncStorage } from '../common/storage';
import { get, set, del, keys, createStore } from 'idb-keyval';

const syncMark = '__sync__';
const GP_POLYFILLED = 'polyfilled' in GM_getValue;

export const storage: Storage = GP_POLYFILLED
    ? (() => {
          const store = createStore('EhSyringe', 'keyval');
          let listenerId = 1;
          const listeners = new Map<number, { name: string; listener: Tampermonkey.ValueChangeListener }>();

          function onStorageChange(key?: string, value?: unknown): void {
              if (!key) {
                  for (const { name, listener } of listeners.values()) {
                      listener(name, undefined, GM_getValue(name), false);
                  }
                  return;
              }
              for (const { name, listener } of listeners.values()) {
                  if (name !== key) continue;
                  listener(name, undefined, value, false);
              }
          }

          const storage: Storage = {
              get: async (key) => {
                  return await get(key, store);
              },
              set: async (key, value) => {
                  await set(key, value, store);
                  onStorageChange(key, value);
              },
              delete: async (key) => {
                  await del(key, store);
                  onStorageChange(key, undefined);
              },
              keys: async () => {
                  const ks = await keys(store);
                  return ks.filter((k): k is string => typeof k == 'string');
              },
              on: (key, listener) => {
                  const id = listenerId++;
                  listeners.set(id, { name: key, listener });
                  return id as unknown as ListenerId;
              },
              off: (key, id) => {
                  listeners.delete(id as unknown as number);
              },
          };
          return storage;
      })()
    : {
          get: (key) => Promise.resolve(GM_getValue(key)),
          set: (key, value) => Promise.resolve(GM_setValue(key, value)),
          delete: (key) => Promise.resolve(GM_deleteValue(key)),
          keys: () => Promise.resolve(GM_listValues().filter((k) => !k.startsWith(syncMark))),
          on: (key, listener) => GM_addValueChangeListener(key, listener) as unknown as ListenerId,
          off: (key, id) => GM_removeValueChangeListener(id as unknown as number),
      };

const syncKey = (k: string): string => syncMark + k;
export const syncStorage: SyncStorage = {
    get: (key) => GM_getValue(syncKey(key)),
    set: (key, value) => GM_setValue(syncKey(key), value),
    delete: (key) => GM_deleteValue(syncKey(key)),
    keys: () => GM_listValues().filter((k) => k.startsWith(syncMark)),
};
