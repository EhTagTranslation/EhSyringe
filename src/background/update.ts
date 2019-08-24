import emojiRegex from 'emoji-regex';
import pako from 'pako';
import { BehaviorSubject } from 'rxjs';
import { browser } from 'webextension-polyfill-ts';

import { DownloadStatus, EHTDatabase, ReleaseCheckData, TagItem, TagList } from '../interface';
import { badgeLoading } from '../tool/badge-loading';
import { chromeMessage } from '../tool/chrome-message';
import { logger } from '../tool/log';
import { sleep } from '../tool/promise';
import { trim } from '../tool/tool';

const emojiReg = emojiRegex();
const defaultStatus = {
    run: false,
    progress: 0,
    info: '',
    complete: false,
    error: false,
};

class Update {

    /* 数据存储结构版本, 如果不同 系统会自动执行 storageTagData 重新构建数据*/
    /* 注意这是本地数据结构, 主要用于 storageTagData内解析方法发生变化, 重新加载数据的, 与线上无关*/
    private readonly DATA_STRUCTURE_VERSION = 3;
    readonly lastCheckData = new BehaviorSubject<ReleaseCheckData>({
        old: '',
        oldLink: '',
        new: '',
        newLink: '',
        timestamp: 0,
        githubRelease: null,
    });
    readonly tagList = new BehaviorSubject<TagList>([]);
    readonly downloadStatus = new BehaviorSubject<DownloadStatus>(defaultStatus);

    private loadLock = false;

    constructor() {

        this.checkLocalData().catch(logger.error);
        chromeMessage.listener('get-tag-data', _ => this.getTagDataEvent());
        chromeMessage.listener('check-version', _ => this.checkVersion());
        chromeMessage.listener('auto-update', async () => {
            const version = await this.checkVersion();
            if (version.new && (version.new !== version.old)) {
                await this.getTagDataEvent();
                return true;
            }
            return false;
        });
        this.downloadStatus.subscribe(v => chromeMessage.broadcast('downloadStatus', v));
    }

    async getTagDataEvent(): Promise<void> {
        // 重置下载状态
        this.initDownloadStatus();
        try {
            const data = await this.download();
            await this.storageTagData(data.db, data.release.html_url);
        } catch (err) {
            logger.error(err);
            this.pushDownloadStatus({ run: false, error: true, info: (err && err.message) ? err.message : '更新失败' });
        }
    }

    initDownloadStatus(): void {
        this.downloadStatus.next(defaultStatus);
    }

    pushDownloadStatus(data: Partial<DownloadStatus> = {}): void {
        this.downloadStatus.next({
            ...this.downloadStatus.value,
            ...data,
        });
    }

    async checkVersion(): Promise<ReleaseCheckData> {
        const time = new Date().getTime();
        // 限制每分钟最多请求1次
        const lastCheckData = this.lastCheckData.value;
        if ((time - lastCheckData.timestamp <= 1000 * 60)
            && lastCheckData.githubRelease) {
            return lastCheckData;
        }
        const { sha, releaseLink } = await browser.storage.local.get(['sha', 'releaseLink']);
        const githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
        const info = await (await fetch(githubDownloadUrl)).json();

        if (!(info && info.target_commitish)) {
            return null;
        }
        this.lastCheckData.next({
            old: sha,
            oldLink: releaseLink,
            new: info.target_commitish,
            newLink: info.html_url,
            githubRelease: info,
            timestamp: new Date().getTime(),
        });
        return this.lastCheckData.value;
    }

    download(): Promise<{ release: any, db: EHTDatabase }> {
        return new Promise(async (resolve, reject) => {
            if (this.loadLock) {
                return false;
            }
            this.loadLock = true;
            badgeLoading.set('', '#4A90E2', 2);
            this.pushDownloadStatus({ run: true, info: '加载中' });
            const checkData = await this.checkVersion();
            if (!(checkData && checkData.githubRelease && checkData.githubRelease.assets)) {
                reject(new Error('无法获取版本信息'));
                this.loadLock = false;
                return;
            }
            const info = checkData.githubRelease;
            const asset = info.assets.find((i: any) => i.name === 'db.html.json.gz');
            const url = asset && asset.browser_download_url || '';
            if (!url) {
                reject(new Error('无法获取下载地址'));
                this.loadLock = false;
                return;
            }

            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'arraybuffer';
            xhr.onload = () => {
                this.loadLock = false;
                try {
                    const data = JSON.parse(pako.ungzip(xhr.response, { to: 'string' })) as EHTDatabase;
                    this.loadLock = false;
                    resolve({ release: info, db: data });
                    this.pushDownloadStatus({ info: '下载完成', progress: 100 });
                    badgeLoading.set('100', '#4A90E2', 1);
                } catch (e) {
                    reject(new Error('数据无法解析'));
                    badgeLoading.set('ERR', '#C80000');
                }
            };
            xhr.onerror = (e) => {
                this.loadLock = false;
                badgeLoading.set('ERR', '#C80000');
                reject(e);
            };
            xhr.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percent = Math.floor((event.loaded / event.total) * 100);
                    this.pushDownloadStatus({ info: percent + '%', progress: percent });
                    badgeLoading.set(percent.toFixed(0), '#4A90E2', 1);
                }
            };
            xhr.send();
            this.pushDownloadStatus({ info: '0%', progress: 0 });
            badgeLoading.set('0', '#4A90E2', 1);
        });
    }

    async storageTagData(tagDB: EHTDatabase, releasePageUrl: string = 'https://github.com/EhTagTranslation/EhSyringe/blob/master/src/data/tag.db.json'): Promise<void> {
        const namespaceOrder = ['female', 'language', 'misc', 'male', 'artist', 'group', 'parody', 'character', 'reclass'];
        const tagReplaceData: { [key: string]: string } = {};
        const tagList: TagList = [];
        tagDB.data.sort((a, b) => {
            return namespaceOrder.indexOf(a.namespace) - namespaceOrder.indexOf(b.namespace);
        });
        tagDB.data.forEach(space => {
            const namespace = space.namespace;
            if (namespace === 'rows') return;
            for (const key in space.data) {
                const t = space.data[key];
                let search = ``;
                if (namespace !== 'misc') {
                    search += namespace + ':';
                }
                if (key.indexOf(' ') !== -1) {
                    search += `"${key}$"`;
                } else {
                    search += key + '$';
                }

                const name = t.name.replace(/^<p>(.+)<\/p>$/, '$1');
                const cleanName = trim(name.replace(emojiReg, '').replace(/<img.*?>/ig, ''));
                const dirtyName = name.replace(emojiReg, '<span class="ehs-emoji">$&</span>');

                tagList.push({
                    ...t,
                    name: cleanName,
                    key,
                    namespace,
                    search,
                });

                tagReplaceData[`${namespace}:${key}`] = dirtyName;
                if (namespace === 'misc') {
                    tagReplaceData[key] = dirtyName;
                }
            }
        });
        this.tagList.next(tagList);

        await browser.storage.local.set({
            tagDB,
            tagList,
            tagReplaceData,
            updateTime: new Date().getTime(),
            releaseLink: releasePageUrl,
            sha: tagDB.head.sha,
            dataStructureVersion: this.DATA_STRUCTURE_VERSION,
        });

        badgeLoading.set('OK', '#00C801');
        this.pushDownloadStatus({ run: true, info: '更新完成', progress: 100, complete: true });
        await sleep(2500);
        if (this.downloadStatus.complete) {
            badgeLoading.set('', '#4A90E2');
            this.initDownloadStatus();
        }
    }

    async loadPackedData(): Promise<void> {
        const dbUrl = chrome.runtime.getURL('assets/tag.db');
        const r = await fetch(dbUrl);
        const d = await r.json();
        return await this.storageTagData(d);
    }

    async checkLocalData(): Promise<void> {
        const data = await browser.storage.local.get(['tagList', 'tagReplaceData', 'dataStructureVersion']);
        if (data.dataStructureVersion !== this.DATA_STRUCTURE_VERSION) {
            logger.log('数据结构变化, 重新构建数据');
            await this.loadPackedData();
        } else if (!('tagList' in data && 'tagReplaceData' in data)) {
            // 如果沒有數據自動加載本地數據
            await this.loadPackedData();
        } else {
            this.tagList.next(data.tagList);
        }
    }
}

export const update = new Update();
