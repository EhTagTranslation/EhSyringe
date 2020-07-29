import { Storage, ListenerId, SyncStorage } from '../common/storage';

const syncMark = '__sync__';

export const storage: Storage = {
    get: (key) => Promise.resolve(GM_getValue(key)),
    set: (key, value) => Promise.resolve(GM_setValue(key, value)),
    delete: (key) => Promise.resolve(GM_deleteValue(key)),
    keys: () => Promise.resolve(GM_listValues().filter((k) => !k.startsWith(syncMark))),
    on: (key, listener) => (GM_addValueChangeListener(key, listener) as unknown) as ListenerId,
    off: (key, id) => GM_removeValueChangeListener((id as unknown) as number),
};

const syncKey = (k: string): string => syncMark + k;
export const syncStorage: SyncStorage = {
    get: (key) => GM_getValue(syncKey(key)),
    set: (key, value) => GM_setValue(syncKey(key), value),
    delete: (key) => GM_deleteValue(syncKey(key)),
    keys: () => GM_listValues().filter((k) => k.startsWith(syncMark)),
};
