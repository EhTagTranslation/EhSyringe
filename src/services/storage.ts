import { Service } from '.';
import { storage } from 'providers/storage';
import { TagMap } from 'interface';
import { ReleaseCheckData } from 'plugin/database-updater';
import { Logger } from './logger';

export const enum ImageLevel {
    hide,
    nonH,
    r18,
    r18g,
}

export interface ConfigData {
    translateUi: boolean;
    translateTag: boolean;
    showIntroduce: boolean;
    showIcon: boolean;
    introduceImageLevel: ImageLevel;
    autoUpdate: boolean;
    tagTip: boolean;
}

export interface StorageItems {
    config: ConfigData;
    extensionCheck: number;
    database:
        | undefined
        | {
              sha: string;
              map: TagMap;
              /** 上次检查时间 */
              check: number;
              /** 插件数据结构版本 */
              version: number;
          };

    release: undefined | ReleaseCheckData;
}

@Service()
export class Storage {
    constructor(readonly logger: Logger) {
        Object.defineProperty(globalThis, 'storage', {
            value: () => {
                (async () => {
                    const keys = await this.keys();
                    for (const key of keys) {
                        console.log(key, await this.get(key));
                    }
                })().catch(logger.error);
            },
        });
    }

    async get<K extends keyof StorageItems>(key: K): Promise<StorageItems[K]> {
        const value = await storage.get(key);
        if (value == null) return this.defaults[key];
        return JSON.parse(value) as StorageItems[K];
    }
    async set<T extends keyof StorageItems>(key: T, value: StorageItems[T] | undefined): Promise<void> {
        if (value == null) return this.delete(key);
        const json = JSON.stringify(value);
        return storage.set(key, json);
    }
    async delete<T extends keyof StorageItems>(key: T): Promise<void> {
        return await storage.delete(key);
    }
    async keys(): Promise<Array<keyof StorageItems>> {
        return (await storage.keys()) as Array<keyof StorageItems>;
    }

    async migrate(): Promise<void> {
        const keys = await this.keys();
        const keysInCurrentVersion = Object.keys(this.defaults);
        const deletes = keys.filter((k) => !keysInCurrentVersion.includes(k));
        if (deletes.length === 0) return;

        this.logger.log(`迁移存储版本，删除 `, deletes);
        for (const key of deletes) {
            await this.delete(key);
        }
    }

    readonly defaults: Readonly<StorageItems> = {
        extensionCheck: 0,
        config: {
            translateUi: true,
            translateTag: true,
            showIntroduce: true,
            showIcon: true,
            introduceImageLevel: ImageLevel.r18g,
            autoUpdate: true,
            tagTip: true,
        },
        database: undefined,
        release: undefined,
    };
}
