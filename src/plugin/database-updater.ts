import type { GithubRelease, EHTDatabase } from 'interface';
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
    sha: string;
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
                return undefined;
            }
            const version = await this.checkVersion(recheck);
            if (version?.sha && (force || version.sha !== (await this.messaging.emit('get-tag-sha', undefined)))) {
                await this.updating;
                const updating = this.update();
                this.updating = updating;
                const success = await updating;
                this.updating = undefined;
                if (success) {
                    this.logger.log('有新版本并更新', version);
                    return version;
                } else {
                    this.logger.log('更新新版本失败', version);
                    return undefined;
                }
            }
            this.logger.log('没有新版本');
            return undefined;
        });
        this.messaging.on('check-database', async ({ force }) => {
            return await this.checkVersion(force);
        });
        this.init().catch(logger.error);
    }

    private async init(): Promise<void> {
        const storage = await this.storage.get('release');
        if (storage && storage.check > this._lastCheckData.check) {
            Object.assign(this._lastCheckData, storage);
        }
    }

    private readonly _lastCheckData: ReleaseCheckData = {
        sha: '',
        check: 0,
        githubRelease: null,
    };
    get lastCheckData(): ReleaseCheckData {
        return this._lastCheckData;
    }
    set lastCheckData(value: ReleaseCheckData) {
        if (value && value.check > this.lastCheckData.check) {
            Object.assign(this._lastCheckData, value);
            this.storage.set('release', this._lastCheckData).catch(this.logger.error);
        }
    }
    downloadStatus = { ...defaultStatus };

    private checked = false;

    private updating?: Promise<boolean>;

    async update(): Promise<boolean> {
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
            void sleep(2500).then(() => {
                if (this.downloadStatus.complete) {
                    this.badge.set('', '#4A90E2');
                    this.initDownloadStatus();
                }
            });
            return true;
        } catch (err) {
            const e = err as Error;
            this.logger.error(e);
            this.badge.set('ERR', '#C80000');
            this.pushDownloadStatus({
                run: false,
                error: true,
                info: e?.message ? e.message : '更新失败',
            });
            return false;
        }
    }

    private initDownloadStatus(): void {
        this.downloadStatus = { ...defaultStatus };
        void this.messaging.emit('updating-database', this.downloadStatus, true);
    }

    private pushDownloadStatus(data: Partial<DownloadStatus> = {}): void {
        this.downloadStatus = {
            ...this.downloadStatus,
            ...data,
        };
        void this.messaging.emit('updating-database', this.downloadStatus, true);
    }

    async checkVersion(force = false): Promise<ReleaseCheckData> {
        if (!force) {
            // 限制每 5 分钟最多请求 1 次
            const time = new Date().getTime();
            const lastCheckData = this.lastCheckData;
            if (time - lastCheckData.check <= 1000 * 60 * 5 && lastCheckData.githubRelease) {
                return lastCheckData;
            }
        }

        const info = await this.database.getLatestVersion();
        if (!info.target_commitish) throw new Error('获取失败，响应有误');

        this.lastCheckData = {
            sha: info.target_commitish,
            githubRelease: info,
            check: Date.now(),
        };
        this.checked = true;
        return this.lastCheckData;
    }

    private async download(): Promise<{ release: GithubRelease; data: EHTDatabase }> {
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
            const data = await this.database.getData(info, (progress) => {
                const percent = Math.floor(progress * 100);
                this.pushDownloadStatus({ info: `${percent}%`, progress: percent });
                this.badge.set(percent.toFixed(0), '#4A90E2', 1);
            });
            this.pushDownloadStatus({ info: '下载完成', progress: 100 });
            this.badge.set('100', '#4A90E2', 1);
            return { release: info, data };
        } finally {
            timer.end();
        }
    }
}
