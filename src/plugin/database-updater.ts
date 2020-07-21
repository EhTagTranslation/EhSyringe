import { BehaviorSubject } from 'rxjs';

import { GithubRelease, EHTDatabase } from 'interface';
import { Logger } from 'services/logger';
import { Service } from 'typedi';
import { Messaging } from 'services/messaging';
import { Storage } from 'services/storage';
import { Database } from 'services/database';
import { BadgeLoading } from 'services/badge-loading';
import { sleep } from 'utils';

export interface DownloadStatus {
    run: boolean;
    progress: number;
    info: string;
    complete: boolean;
    error: boolean;
}

export interface ReleaseCheckData {
    old: string;
    new: string;
    check: number;
    githubRelease: GithubRelease | null;
}

const defaultStatus: DownloadStatus = {
    run: false,
    progress: 0,
    info: '',
    complete: false,
    error: false,
};

@Service()
export class DatabaseUpdater {
    constructor(
        readonly logger: Logger,
        readonly messaging: Messaging,
        readonly storage: Storage,
        readonly database: Database,
        readonly badge: BadgeLoading,
    ) {
        this.messaging.on('update-database', async ({ force, recheck }) => {
            if (this.checked && !force) {
                this.logger.log('跳过');
                return false;
            }
            const version = await this.checkVersion(recheck);
            if (version?.new && (version.new !== version.old || force)) {
                await this.update();
                this.logger.log('有新版本并更新');
                return true;
            }
            this.logger.log('没有新版本');
            return false;
        });
    }

    lastCheckData: ReleaseCheckData = {
        old: '',
        new: '',
        check: 0,
        githubRelease: null,
    };
    downloadStatus = { ...defaultStatus };

    private loadLock = false;

    private checked = false;

    async update(): Promise<void> {
        // 重置下载状态
        this.initDownloadStatus();
        try {
            const data = await this.download();
            await this.messaging.emit('update-tag', data.data);

            this.badge.set('OK', '#00C801');
            this.pushDownloadStatus({
                run: true,
                info: '更新完成',
                progress: 100,
                complete: true,
            });
            this.lastCheckData = {
                ...this.lastCheckData,
                old: await this.messaging.emit('get-tag-sha', undefined),
            };
            void sleep(2500).then(() => {
                if (this.downloadStatus.complete) {
                    this.badge.set('', '#4A90E2');
                    this.initDownloadStatus();
                }
            });
        } catch (err) {
            const e = err as Error;
            this.logger.error(e);
            this.pushDownloadStatus({
                run: false,
                error: true,
                info: e?.message ? e.message : '更新失败',
            });
        }
    }

    private initDownloadStatus(): void {
        this.downloadStatus = { ...defaultStatus };
        void this.messaging.emit('updating-database', this.downloadStatus);
    }

    private pushDownloadStatus(data: Partial<DownloadStatus> = {}): void {
        this.downloadStatus = {
            ...this.downloadStatus,
            ...data,
        };
        void this.messaging.emit('updating-database', this.downloadStatus);
    }

    async checkVersion(force = false): Promise<ReleaseCheckData | null> {
        if (!force) {
            // 限制每分钟最多请求1次
            const time = new Date().getTime();
            const lastCheckData = this.lastCheckData;
            if (time - lastCheckData.check <= 1000 * 60 && lastCheckData.githubRelease) {
                return lastCheckData;
            }
        }

        const oldRelease = await this.storage.get('release');
        const info = await this.database.getLatestVersion();

        if (!info.target_commitish) {
            return null;
        }
        this.lastCheckData = {
            old: oldRelease?.info.target_commitish ?? '',
            new: info.target_commitish,
            githubRelease: info,
            check: Date.now(),
        };
        this.checked = true;
        return this.lastCheckData;
    }

    private async download(): Promise<{ release: GithubRelease; data: EHTDatabase }> {
        if (this.loadLock) {
            throw new Error('已经正在下载');
        }
        this.loadLock = true;
        try {
            this.badge.set('', '#4A90E2', 2);
            this.pushDownloadStatus({ run: true, info: '加载中' });
            const checkData = await this.checkVersion();
            if (!checkData?.githubRelease?.target_commitish) {
                this.logger.debug('checkData', checkData);
                throw new Error('无法获取版本信息');
            }
            const info = checkData.githubRelease;
            const timer = this.logger.time(`开始下载`);
            try {
                this.pushDownloadStatus({ info: '0%', progress: 0 });
                this.badge.set('0', '#4A90E2', 1);
                const data = await this.database.getData(info, (event) => {
                    if (event.lengthComputable) {
                        const percent = Math.floor((event.loaded / event.total) * 100);
                        this.pushDownloadStatus({ info: `${percent}%`, progress: percent });
                        this.badge.set(percent.toFixed(0), '#4A90E2', 1);
                    }
                });
                this.pushDownloadStatus({ info: '下载完成', progress: 100 });
                this.badge.set('100', '#4A90E2', 1);
                return { release: info, data };
            } catch (ex) {
                this.badge.set('ERR', '#C80000');
                throw ex;
            } finally {
                timer.end();
            }
        } finally {
            this.loadLock = false;
        }
    }
}
