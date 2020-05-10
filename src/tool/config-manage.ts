import { browser } from 'webextension-polyfill-ts';

import { logger } from './log';
import { load, save } from './storage';

export interface ConfigData {
    translateUI: boolean;
    translateTag: boolean;
    showIntroduce: boolean;
    showIcon: boolean;
    introduceImageLevel: number; // 0:hide, 1:non-h 2: R18 3: R18G
    autoUpdate: boolean;
    tagTip: boolean;
}

class ConfigManage {
    constructor() {
        /* 有可能会有性能问题, 开的页面多了不知道会是什么效果*/
        chrome.storage.onChanged.addListener((changes) => {
            logger.log('插件存储改变', changes);
            if ('config' in changes && changes.config.newValue) {
                save('config', changes.config.newValue);
            }
        });
    }

    readonly defaultValue: ConfigData = {
        translateUI: true,
        translateTag: true,
        showIntroduce: true,
        showIcon: true,
        introduceImageLevel: 3,
        autoUpdate: false, // 默认不开启自动更新
        tagTip: true,
    };

    syncGet(): ConfigData {
        return this.fixData(load<ConfigData>('config'));
    }

    async sync(): Promise<boolean> {
        const oldConfig = this.syncGet();
        const newConfig = await this.get();
        if (JSON.stringify(oldConfig) !== JSON.stringify(newConfig)) {
            save('config', newConfig);
            return true;
        }
        return false;
    }

    async get(): Promise<ConfigData> {
        const data = await browser.storage.local.get('config');
        const conf = this.fixData(data.config);
        save('config', conf);
        return conf;
    }

    async set(data: Partial<ConfigData>): Promise<void> {
        const conf = await this.get();
        const newConfig = {
            ...conf,
            ...data,
        };
        await browser.storage.local.set({ config: newConfig });
    }

    private fixData(data?: Partial<ConfigData>): ConfigData {
        if (!data) {
            return { ...this.defaultValue };
        }
        const defaultValue = this.defaultValue as any;
        const input = { ...data } as any;
        for (const key in defaultValue) {
            if (typeof input[key] === 'undefined') {
                input[key] = defaultValue[key];
            }
        }
        return input;
    }
}

export const config = new ConfigManage();
