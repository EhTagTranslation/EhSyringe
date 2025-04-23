import type { Storage, ListenerId, SyncStorage, Listener } from '../common/storage';
import { get, set, del, keys, createStore } from 'idb-keyval';
import type { JsonValue } from 'type-fest';

const syncMark = '__sync__';

function parse(value: string | null | undefined): JsonValue | undefined {
    if (value == null) return undefined;
    try {
        return JSON.parse(value) as JsonValue;
    } catch {
        return undefined;
    }
}

function serialize(value: JsonValue | undefined): string | undefined {
    if (value === undefined) return undefined;
    try {
        return JSON.stringify(value);
    } catch {
        return undefined;
    }
}

class AsyncPolyfill implements Storage {
    private listenerId = 1;
    private readonly listeners = new Map<number, { name: string; listener: Tampermonkey.ValueChangeListener }>();
    private readonly store = createStore('EhSyringe', 'keyval');
    private async onAllStorageChange(): Promise<void> {
        const values = new Map<string, unknown>();
        for (const { name } of this.listeners.values()) {
            if (!values.has(name)) {
                values.set(name, await this.get(name));
            }
        }
        for (const { name, listener } of this.listeners.values()) {
            listener(name, undefined, values.get(name), false);
        }
    }
    private onStorageChange(key?: string, oldValue?: unknown, value?: unknown): void {
        if (!key) {
            void this.onAllStorageChange();
            return;
        }
        for (const { name, listener } of this.listeners.values()) {
            if (name !== key) continue;
            listener(name, oldValue, value, false);
        }
    }
    async get(key: string): Promise<JsonValue | undefined> {
        return await get(key, this.store);
    }
    async set(key: string, value: JsonValue): Promise<void> {
        const oldValue = await this.get(key);
        await set(key, value, this.store);
        this.onStorageChange(key, oldValue, value);
    }
    async delete(key: string): Promise<void> {
        const oldValue = await this.get(key);
        await del(key, this.store);
        this.onStorageChange(key, oldValue, undefined);
    }
    async keys(): Promise<string[]> {
        const ks = await keys(this.store);
        return ks.filter((k): k is string => typeof k == 'string');
    }
    on(key: string, listener: Listener): ListenerId {
        const id = this.listenerId++;
        this.listeners.set(id, { name: key, listener });
        return id as unknown as ListenerId;
    }
    off(key: string, id: ListenerId): void {
        this.listeners.delete(id as unknown as number);
    }
}

class GmAsyncStorage implements Storage {
    get(key: string): Promise<JsonValue | undefined> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(parse(GM_getValue(key)));
                } catch (ex) {
                    reject(ex as Error);
                }
            });
        });
    }
    set(key: string, value: JsonValue): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    GM_setValue(key, serialize(value));
                    resolve();
                } catch (ex) {
                    reject(ex as Error);
                }
            });
        });
    }
    delete(key: string): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    GM_deleteValue(key);
                    resolve();
                } catch (ex) {
                    reject(ex as Error);
                }
            });
        });
    }
    keys(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const ks = GM_listValues();
                    resolve(ks.filter((k) => !k.startsWith(syncMark)));
                } catch (ex) {
                    reject(ex as Error);
                }
            });
        });
    }
    on(key: string, listener: Listener): ListenerId {
        return GM_addValueChangeListener(key, listener) as unknown as ListenerId;
    }
    off(key: string, id: ListenerId): void {
        GM_removeValueChangeListener(id as unknown as number);
    }
}

const GM_ALL_DEFINED =
    typeof GM_getValue == 'function' &&
    typeof GM_setValue == 'function' &&
    typeof GM_deleteValue == 'function' &&
    typeof GM_listValues == 'function' &&
    typeof GM_addValueChangeListener == 'function' &&
    typeof GM_removeValueChangeListener == 'function';
export const storage: Storage = GM_ALL_DEFINED ? new GmAsyncStorage() : new AsyncPolyfill();

abstract class SyncStorageBase implements SyncStorage {
    protected abstract getRaw(key: string): string | null | undefined;
    protected abstract setRaw(key: string, value: string | null | undefined): void;
    get(key: string): JsonValue | undefined {
        const value = this.getRaw(this.KEY_PREFIX + key);
        return parse(value);
    }
    set(key: string, value: JsonValue): void {
        this.setRaw(this.KEY_PREFIX + key, serialize(value));
    }
    delete(key: string): void {
        this.setRaw(this.KEY_PREFIX + key, undefined);
    }
    protected abstract listRaw(): Iterable<string>;
    keys(): string[] {
        const names = [];
        const prefix = this.KEY_PREFIX;
        for (const key of this.listRaw()) {
            if (!key) continue;
            if (key.startsWith(prefix)) {
                names.push(key.slice(prefix.length));
            }
        }
        return names;
    }
    protected abstract readonly KEY_PREFIX: string;
}

class SyncPolyfill extends SyncStorageBase {
    protected readonly KEY_PREFIX = 'EH_SYNC_POLYFILL_';
    getRaw(key: string): string | null {
        return localStorage.getItem(key);
    }
    setRaw(key: string, value: string | null | undefined): void {
        if (value == null) {
            return localStorage.removeItem(key);
        }
        localStorage.setItem(key, value);
    }
    protected override *listRaw(): Iterable<string> {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) yield key;
        }
    }
}

class GMSyncStorage extends SyncStorageBase {
    protected readonly KEY_PREFIX = syncMark;
    getRaw(key: string): string | undefined {
        return GM_getValue(key);
    }
    setRaw(key: string, value: string | null): void {
        if (value == null) {
            return GM_deleteValue(key);
        }
        GM_setValue(key, value);
    }
    protected override listRaw(): Iterable<string> {
        return GM_listValues();
    }
}

const GM_ALL_SYNC_DEFINED =
    typeof GM_getValue == 'function' &&
    typeof GM_setValue == 'function' &&
    typeof GM_deleteValue == 'function' &&
    typeof GM_listValues == 'function';
export const syncStorage: SyncStorage = GM_ALL_SYNC_DEFINED ? new GMSyncStorage() : new SyncPolyfill();
