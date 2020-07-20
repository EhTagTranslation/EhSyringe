import { Storage, ListenerId } from '../common/storage';

export const storage: Storage = {
    get: (key) => Promise.resolve(GM_getValue(key)),
    set: (key, value) => Promise.resolve(GM_setValue(key, value)),
    delete: (key) => Promise.resolve(GM_deleteValue(key)),
    keys: () => Promise.resolve(GM_listValues()),
    on: (key, listener) => (GM_addValueChangeListener(key, listener) as unknown) as ListenerId,
    off: (key, id) => GM_removeValueChangeListener((id as unknown) as number),
};
