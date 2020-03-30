import { BehaviorSubject } from 'rxjs';
import { browser } from 'webextension-polyfill-ts';

import { DownloadStatus, ReleaseCheckData, GithubRelease } from '../interface';
import { badgeLoading } from '../tool/badge-loading';
import { chromeMessage } from '../tool/chrome-message';
import { logger } from '../tool/log';
import { sleep } from '../tool/promise';

import { tagDatabase } from './tag-database';

const defaultStatus: DownloadStatus = {
    run: false,
    progress: 0,
    info: '',
    complete: false,
    error: false,
};

class Updater {
    readonly lastCheckData = new BehaviorSubject<ReleaseCheckData>({
        old: '',
        oldLink: '',
        new: '',
        newLink: '',
        timestamp: 0,
        githubRelease: null,
    });
    readonly downloadStatus = new BehaviorSubject<DownloadStatus>(defaultStatus);

    private loadLock = false;

    constructor() {
        chromeMessage.listener('auto-update', async (force) => {
            const version = await this.checkVersion(true);
            if (version?.new && (version.new !== version.old || force)) {
                await this.update();
                return true;
            }
            return false;
        });
    }

    async update(): Promise<void> {
        // 重置下载状态
        this.initDownloadStatus();
        try {
            const data = await this.download();
            tagDatabase.update(data.content, data.filename.endsWith('.gz'), data.release.html_url);

            badgeLoading.set('OK', '#00C801');
            this.pushDownloadStatus({ run: true, info: '更新完成', progress: 100, complete: true });
            this.lastCheckData.next({
                ...this.lastCheckData.value,
                old: tagDatabase.sha.value,
                oldLink: tagDatabase.releaseLink.value,
            });
            await sleep(2500);
            if (this.downloadStatus.value.complete) {
                badgeLoading.set('', '#4A90E2');
                this.initDownloadStatus();
            }
        } catch (err) {
            logger.error(err);
            this.pushDownloadStatus({ run: false, error: true, info: err?.message ? err.message : '更新失败' });
        }
    }

    private initDownloadStatus(): void {
        this.downloadStatus.next(defaultStatus);
    }

    private pushDownloadStatus(data: Partial<DownloadStatus> = {}): void {
        this.downloadStatus.next({
            ...this.downloadStatus.value,
            ...data,
        });
    }

    async checkVersion(force = false): Promise<ReleaseCheckData | null> {
        if (!force) {
            // 限制每分钟最多请求1次
            const time = new Date().getTime();
            const lastCheckData = this.lastCheckData.value;
            if (time - lastCheckData.timestamp <= 1000 * 60 && lastCheckData.githubRelease) {
                return lastCheckData;
            }
        }

        const { sha, releaseLink } = await browser.storage.local.get(['sha', 'releaseLink']);
        const githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
        const info = (await (await fetch(githubDownloadUrl)).json()) as GithubRelease;

        if (!info?.target_commitish) {
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

    private download(): Promise<{ release: GithubRelease; filename: string; content: ArrayBuffer }> {
        return new Promise(async (resolve, reject) => {
            if (this.loadLock) {
                reject('已经正在下载');
                return;
            }
            this.loadLock = true;
            badgeLoading.set('', '#4A90E2', 2);
            this.pushDownloadStatus({ run: true, info: '加载中' });
            const checkData = await this.checkVersion();
            if (!checkData?.githubRelease?.assets) {
                logger.debug('checkData', checkData);
                reject(new Error('无法获取版本信息'));
                this.loadLock = false;
                return;
            }
            const info = checkData.githubRelease;
            const asset =
                info.assets.find((i) => i.name === 'db.html.json.gz') ??
                info.assets.find((i) => i.name === 'db.html.json');
            if (!asset || !asset.browser_download_url) {
                logger.debug('assets', info.assets);
                reject(new Error('无法获取下载地址'));
                this.loadLock = false;
                return;
            }
            const url = asset.browser_download_url;

            const timer = logger.time(`开始下载 ${url}`);
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'arraybuffer';
            xhr.onload = () => {
                try {
                    resolve({ release: info, filename: asset.name, content: xhr.response as ArrayBuffer });
                    this.pushDownloadStatus({ info: '下载完成', progress: 100 });
                    badgeLoading.set('100', '#4A90E2', 1);
                } catch (e) {
                    reject(new Error('数据无法解析'));
                    badgeLoading.set('ERR', '#C80000');
                } finally {
                    timer.end();
                    this.loadLock = false;
                }
            };
            xhr.onerror = (e) => {
                this.loadLock = false;
                badgeLoading.set('ERR', '#C80000');
                timer.end();
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
}

export const updater = new Updater();
