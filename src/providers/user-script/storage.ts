import { Storage, ListenerId, SyncStorage, Listener } from '../common/storage';
import { get, set, del, keys, createStore } from 'idb-keyval';
import type { JsonValue } from 'type-fest';

const syncMark = '__sync__';

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
    get(key: string): Promise<JsonValue | undefined> {
        return get(key, this.store);
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
        return Promise.resolve(GM_getValue(key));
    }
    set(key: string, value: JsonValue): Promise<void> {
        return Promise.resolve(GM_setValue(key, value));
    }
    delete(key: string): Promise<void> {
        return Promise.resolve(GM_deleteValue(key));
    }
    keys(): Promise<string[]> {
        return Promise.resolve(GM_listValues().filter((k) => !k.startsWith(syncMark)));
    }
    on(key: string, listener: Listener): ListenerId {
        return GM_addValueChangeListener(key, listener) as unknown as ListenerId;
    }
    off(key: string, id: ListenerId): void {
        GM_removeValueChangeListener(id as unknown as number);
    }
}

const GM_ALL_DEFINED =
    !!GM_getValue &&
    !!GM_setValue &&
    !!GM_deleteValue &&
    !!GM_listValues &&
    !!GM_addValueChangeListener &&
    !!GM_removeValueChangeListener;
export const storage: Storage = GM_ALL_DEFINED ? new GmAsyncStorage() : new AsyncPolyfill();

abstract class SyncStorageBase implements SyncStorage {
    abstract get(key: string): JsonValue | undefined;
    abstract set(key: string, value: JsonValue): void;
    abstract delete(key: string): void;
    protected abstract list(): Iterable<string>;
    keys(): string[] {
        const names = [];
        const prefix = this.KEY_PREFIX;
        for (const key of this.list()) {
            if (!key) break;
            if (key.startsWith(prefix)) {
                names.push(key.slice(prefix.length));
            }
        }
        return names;
    }
    protected abstract readonly KEY_PREFIX: string;
    protected key(key: string): string {
        return this.KEY_PREFIX + key;
    }
}

class SyncPolyfill extends SyncStorageBase {
    protected readonly KEY_PREFIX = 'EH_SYNC_POLYFILL_';

    private parse<T>(value?: string | null, defaultValue?: T): T {
        if (!value) return defaultValue as T;
        try {
            return JSON.parse(value) as T;
        } catch {
            return defaultValue as T;
        }
    }
    get(key: string): JsonValue | undefined {
        const value = localStorage.getItem(this.key(key));
        return this.parse(value);
    }
    set(key: string, value: JsonValue): void {
        if (value === undefined) {
            return this.delete(key);
        }
        const jValue = JSON.stringify(value);
        localStorage.setItem(this.key(key), jValue);
    }
    delete(key: string): void {
        localStorage.removeItem(this.key(key));
    }
    protected override *list(): Iterable<string> {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) yield key;
        }
    }
}

class GMSyncStorage extends SyncStorageBase {
    protected readonly KEY_PREFIX = syncMark;
    get(key: string): JsonValue | undefined {
        return GM_getValue(this.key(key));
    }
    set(key: string, value: JsonValue): void {
        GM_setValue(this.key(key), value);
    }
    delete(key: string): void {
        GM_deleteValue(this.key(key));
    }
    protected override list(): Iterable<string> {
        return GM_listValues();
    }
}

const GM_ALL_SYNC_DEFINED = !!GM_getValue && !!GM_setValue && !!GM_deleteValue && !!GM_listValues;
export const syncStorage: SyncStorage = GM_ALL_SYNC_DEFINED ? new GMSyncStorage() : new SyncPolyfill();
