import { Service } from '.';
import { syncStorage } from 'providers/storage';
import { Logger } from './logger';
import { JsonValue } from 'type-fest';
import { ConfigData, Storage } from './storage';
import { packageJson } from 'info';

export interface SyncStorageItems {
    version: string;
    config: ConfigData;
    databaseMap: undefined | Record<string, string>;
    databaseSha: undefined | string;
}

@Service()
export class SyncStorage {
    constructor(readonly logger: Logger, readonly async: Storage) {
        const oldVer = this.get('version');
        if (packageJson.version !== oldVer) {
            this.migrate();
            this.set('version', packageJson.version);
        }
    }

    get<K extends keyof SyncStorageItems>(key: K): SyncStorageItems[K] {
        const value = syncStorage.get(key);
        if (value == null) return this.defaults[key];
        return value as SyncStorageItems[K];
    }
    set<T extends keyof SyncStorageItems>(key: T, value: SyncStorageItems[T] | undefined): void {
        if (value == null) return this.delete(key);
        return syncStorage.set(key, value as JsonValue);
    }
    delete<T extends keyof SyncStorageItems>(key: T): void {
        return syncStorage.delete(key);
    }
    keys(): Array<keyof SyncStorageItems> {
        return syncStorage.keys() as Array<keyof SyncStorageItems>;
    }

    migrate(): void {
        const keys = this.keys();
        if (keys.length === 0) return;

        this.logger.log(`迁移同步存储版本，删除 `, keys);
        for (const key of keys) {
            this.delete(key);
        }
    }

    readonly defaults: Readonly<SyncStorageItems> = {
        version: packageJson.version,
        databaseMap: undefined,
        databaseSha: undefined,
        config: this.async.defaults.config,
    };
}
