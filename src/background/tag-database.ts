import emojiRegex from 'emoji-regex';
import pako from 'pako';
import { BehaviorSubject } from 'rxjs';
import { browser } from 'webextension-polyfill-ts';

import { EHTDatabase, TagList, TagReplace } from '../interface';
import { chromeMessage } from '../tool/chrome-message';
import { logger } from '../tool/log';
import { getFullKey, getSearchTerm } from '../tool/tool';

const emojiReg = emojiRegex();
const defaultReleaseLink = 'https://github.com/EhTagTranslation/EhSyringe/blob/master/src/assets/tag.db';
/* 数据存储结构版本, 如果不同 系统会自动执行 storageTagData 重新构建数据*/
/* 注意这是本地数据结构, 主要用于 storageTagData内解析方法发生变化, 重新加载数据的, 与线上无关*/
const DATA_STRUCTURE_VERSION = 5;

class TagDatabase {
    readonly tagList = new BehaviorSubject<TagList>([]);
    readonly tagReplace = new BehaviorSubject<TagReplace>({});
    readonly updateTime = new BehaviorSubject<Date>(new Date(0));
    readonly releaseLink = new BehaviorSubject<string>(defaultReleaseLink);
    readonly sha = new BehaviorSubject<string>('');

    constructor() {
        chromeMessage.listener('get-taglist', key => {
            if (!key) {
                return this.tagList.value;
            }
            return this.tagList.value.find(t => t.fullKey === key);
        });
        chromeMessage.listener('get-tagreplace', key => {
            if (!key) {
                return this.tagReplace.value;
            }
            return this.tagReplace.value[key];
        });
        this.init().catch(logger.error);
    }

    private async init(): Promise<void> {
        const { tagList, tagReplace, releaseLink, sha, updateTime, dataStructureVersion }
            = await browser.storage.local.get(['tagList', 'tagReplace', 'releaseLink', 'updateTime', 'sha', 'dataStructureVersion']);
        if (dataStructureVersion !== DATA_STRUCTURE_VERSION || !tagList || !tagReplace || !releaseLink || !sha || !updateTime) {
            const timer = logger.time('数据结构变化, 重新构建数据');
            await this.updateUseLocal();
            timer.end();
        } else {
            this.tagList.next(tagList);
            this.tagReplace.next(tagReplace);
            this.updateTime.next(new Date(updateTime));
            this.sha.next(sha);
            this.releaseLink.next(releaseLink);
        }
    }

    async updateUseLocal(): Promise<void> {
        const dbUrl = chrome.runtime.getURL('assets/tag.db');
        const r = await fetch(dbUrl);
        const buf = await r.arrayBuffer();
        return await this.update(buf, defaultReleaseLink);
    }

    async update(data: ArrayBuffer, releaseLink: string): Promise<void> {
        const timer = logger.time('构建数据');
        const tagDB: EHTDatabase = JSON.parse(await pako.ungzip(new Uint8Array(data), { to: 'string' }));
        const sha = tagDB.head.sha;
        const tagReplace: TagReplace = {};
        const tagList: TagList = [];
        tagDB.data.forEach(space => {
            const namespace = space.namespace;
            if (namespace === 'rows') return;
            for (const key in space.data) {
                const t = space.data[key];

                const name = t.name.replace(/^<p>(.+?)<\/p>$/, '$1').trim();
                const cleanName = name.replace(emojiReg, '').replace(/<img.*?>/ig, '').trim();
                const dirtyName = name.replace(emojiReg, '<span class="ehs-emoji">$&</span>');
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
        const updateTime = new Date();
        this.updateTime.next(updateTime);
        this.tagList.next(tagList);
        this.tagReplace.next(tagReplace);
        this.sha.next(sha);
        this.releaseLink.next(releaseLink);
        timer.end();

        // 后台继续处理，直接返回
        browser.storage.local.set({
            tagList,
            tagReplace,
            releaseLink,
            sha,
            updateTime: updateTime.getTime(),
            dataStructureVersion: DATA_STRUCTURE_VERSION,
        }).catch(logger.error);
    }
}

export const tagDatabase = new TagDatabase();
