import { Service } from '.';
import { storage } from 'providers/storage';

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
}

const defaults: StorageItems = {
    config: {
        translateUi: true,
        translateTag: true,
        showIntroduce: true,
        showIcon: true,
        introduceImageLevel: ImageLevel.r18g,
        autoUpdate: true,
        tagTip: true,
    },
};

@Service()
export class Storage {
    async get<K extends keyof StorageItems>(key: K): Promise<StorageItems[K]> {
        const value = await storage.get(key);
        if (value == null) return defaults[key];
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
}
