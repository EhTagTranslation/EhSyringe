import emojiRegex from 'emoji-regex';
import { browser } from 'webextension-polyfill-ts';
import { EHTDatabase, TagMap } from '../interface';
import { getFullKey, getSearchTerm } from 'utils';
import { Service } from 'typedi';
import { Storage } from 'services/storage';
import { Logger } from 'services/logger';
import { Messaging } from 'services/messaging';

const emojiReg = emojiRegex();
/* 数据存储结构版本, 如果不同 系统会自动执行 storageTagData 重新构建数据*/
/* 注意这是本地数据结构, 主要用于 storageTagData内解析方法发生变化, 重新加载数据的, 与线上无关*/
const DATA_STRUCTURE_VERSION = 7;

@Service()
export class TagDatabase {
    readonly tagMap: TagMap = {};
    readonly sha = '0000000000000000000000000000000000000000';

    constructor(readonly storage: Storage, readonly logger: Logger, readonly messaging: Messaging) {
        messaging.listen('get-tag', (key) => {
            return this.tagMap[key];
        });
        messaging.listen('get-tag-map', ({ ifNotMatch }) => {
            if (ifNotMatch === this.sha) return undefined;
            return this.tagMap;
        });
        this.init().catch(logger.error);
    }

    private async init(): Promise<void> {
        const data = await this.storage.get('database');
        if (dataStructureVersion !== DATA_STRUCTURE_VERSION || !tagList || !tagReplace || !sha) {
            const timer = logger.time('数据结构变化, 重新构建数据');
            await this.updateUseLocal();
            timer.end();
        } else {
            this.tagList.next(tagList);
            this.tagReplace.next(tagReplace);
            this.updateTime.next(new Date(updateTime));
            this.sha.next(sha);
        }
    }

    update(data: ArrayBuffer, isGziped: boolean, updateTime: Date = new Date()): void {
        const timer = logger.time('构建数据');
        const tagDB = JSON.parse(
            isGziped ? pako.ungzip(new Uint8Array(data), { to: 'string' }) : new TextDecoder('utf-8').decode(data),
        ) as EHTDatabase;
        const sha = tagDB.head.sha;
        const tagReplace: TagReplace = {};
        const tagList: TagList = [];
        tagDB.data.forEach((space) => {
            const namespace = space.namespace;
            if (namespace === 'rows') return;
            for (const key in space.data) {
                const t = space.data[key];

                const name = t.name.replace(/^<p>(.+?)<\/p>$/, '$1').trim();
                const cleanName = name
                    .replace(emojiReg, '')
                    .replace(/<img.*?>/gi, '')
                    .trim();
                const dirtyName = name
                    .replace(emojiReg, '<span class="ehs-emoji">$&</span>')
                    .replace(/<img(.*?)>/gi, '<img class="ehs-icon" $1>');
                const search = getSearchTerm(namespace, key);
                const fullKey = getFullKey(namespace, key);

                tagList.push({
                    ...t,
                    name: cleanName,
                    key,
                    fullKey,
                    namespace,
                    search,
                });
                tagReplace[fullKey] = dirtyName;
            }
        });
        this.updateTime.next(updateTime.getTime() ? updateTime : undefined);
        this.tagList.next(tagList);
        this.tagReplace.next(tagReplace);
        this.sha.next(sha);
        timer.end();

        // 后台继续处理，直接返回
        browser.storage.local
            .set({
                tagList,
                tagReplace,
                sha,
                updateTime: updateTime.getTime() ?? undefined,
                dataStructureVersion: DATA_STRUCTURE_VERSION,
            })
            .catch(logger.error);
    }
}

export const tagDatabase = new TagDatabase();
