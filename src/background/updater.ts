import { BehaviorSubject } from 'rxjs';
import { browser } from 'webextension-polyfill-ts';

import { DownloadStatus, ReleaseCheckData, GithubRelease } from '../interface';
import { badgeLoading } from '../tool/badge-loading';
import { chromeMessage } from '../tool/chrome-message';
import { logger } from '../services/logger';
import { sleep } from '../tool/promise';

import { tagDatabase } from './tag-database';
import { downloadFile } from '../tool/tool';

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
        new: '',
        timestamp: 0,
        githubRelease: null,
    });
    readonly downloadStatus = new BehaviorSubject<DownloadStatus>(defaultStatus);

    private loadLock = false;

    private checked = false;

    constructor() {
        chromeMessage.listener('auto-update', async (force) => {
            if (this.checked && !force) {
                logger.log('自动更新', '跳过');
                return false;
            }
            const version = await this.checkVersion(true);
            if (version?.new && (version.new !== version.old || force)) {
                await this.update();
                logger.log('自动更新', '有新版本并更新');
                return true;
            }
            logger.log('自动更新', '没有新版本');
            return false;
        });
    }

    async update(): Promise<void> {
        // 重置下载状态
        this.initDownloadStatus();
        try {
            const data = await this.download();
            tagDatabase.update(data.content, data.filename.endsWith('.gz'));

            badgeLoading.set('OK', '#00C801');
            this.pushDownloadStatus({
                run: true,
                info: '更新完成',
                progress: 100,
                complete: true,
            });
            this.lastCheckData.next({
                ...this.lastCheckData.value,
                old: tagDatabase.sha.value,
            });
            await sleep(2500);
            if (this.downloadStatus.value.complete) {
                badgeLoading.set('', '#4A90E2');
                this.initDownloadStatus();
            }
        } catch (err) {
            const e = err as Error;
            logger.error(e);
            this.pushDownloadStatus({
                run: false,
                error: true,
                info: e?.message ? e.message : '更新失败',
            });
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

        const { sha } = await browser.storage.local.get(['sha']);
        const githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
        const info = (await (await fetch(githubDownloadUrl)).json()) as GithubRelease;

        if (!info?.target_commitish) {
            return null;
        }
        this.lastCheckData.next({
            old: sha,
            new: info.target_commitish,
            githubRelease: info,
            timestamp: new Date().getTime(),
        });
        this.checked = true;
        return this.lastCheckData.value;
    }

    private async download(): Promise<{
        release: GithubRelease;
        filename: string;
        content: ArrayBuffer;
    }> {
        if (this.loadLock) {
            throw new Error('已经正在下载');
        }
        this.loadLock = true;
        try {
            badgeLoading.set('', '#4A90E2', 2);
            this.pushDownloadStatus({ run: true, info: '加载中' });
            const checkData = await this.checkVersion();
            if (!checkData?.githubRelease?.assets) {
                logger.debug('checkData', checkData);
                throw new Error('无法获取版本信息');
            }
            const info = checkData.githubRelease;
            const asset =
                info.assets.find((i) => i.name === 'db.html.json.gz') ??
                info.assets.find((i) => i.name === 'db.html.json');
            if (!asset || !asset.browser_download_url) {
                logger.debug('assets', info.assets);
                throw new Error('无法获取下载地址');
            }
            const url = asset.browser_download_url;
            const timer = logger.time(`开始下载 ${url}`);
            try {
                this.pushDownloadStatus({ info: '0%', progress: 0 });
                badgeLoading.set('0', '#4A90E2', 1);
                const data = await downloadFile(url, undefined, (event) => {
                    if (event.lengthComputable) {
                        const percent = Math.floor((event.loaded / event.total) * 100);
                        this.pushDownloadStatus({ info: `${percent}%`, progress: percent });
                        badgeLoading.set(percent.toFixed(0), '#4A90E2', 1);
                    }
                });
                this.pushDownloadStatus({ info: '下载完成', progress: 100 });
                badgeLoading.set('100', '#4A90E2', 1);
                return { release: info, filename: asset.name, content: data };
            } catch (ex) {
                badgeLoading.set('ERR', '#C80000');
                throw ex;
            } finally {
                timer.end();
            }
        } finally {
            this.loadLock = false;
        }
    }
}

export const updater = new Updater();
