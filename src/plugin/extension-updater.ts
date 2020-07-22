import { Service } from 'typedi';
import { Logger } from 'services/logger';
import { Storage } from 'services/storage';
import { openInTab } from 'providers/utils';
import { Messaging } from 'services/messaging';
import { Notification } from 'services/notification';
import { Http } from 'services/http';
import { GithubRelease } from 'interface';
import { packageJson } from 'info';

@Service()
export class ExtensionUpdater {
    constructor(
        readonly logger: Logger,
        readonly storage: Storage,
        readonly messaging: Messaging,
        readonly notification: Notification,
        readonly http: Http,
    ) {
        this.check().catch(logger.error);
        messaging.on('check-extension', () => this.check());
    }

    private async check(): Promise<boolean> {
        const lastCheck = await this.storage.get('extensionCheck');
        const diff = Date.now() - lastCheck;
        if (diff <= 1000 * 60 * 60 * 24) {
            this.logger.info(`上次检查于 ${new Date(lastCheck).toLocaleString()}，跳过`);
            return false;
        }

        try {
            const response = await this.http.json<GithubRelease>(
                'https://api.github.com/repos/EhTagTranslation/EhSyringe/releases/latest',
            );
            const current = `v${packageJson.version}`;
            const latest = response.tag_name;
            if (typeof latest != 'string' || !latest.startsWith('v')) {
                const e = new Error('响应格式错误');
                Object.defineProperty(e, 'response', response);
                throw e;
            }
            await this.storage.set('extensionCheck', Date.now());
            this.logger.log('检查插件更新', { current, latest });
            if (latest === current) return false;

            this.notification.send({
                title: packageJson.displayName,
                message: `发现新的版本 ${latest}，点击跳转到下载页面。`,
                action: () => openInTab(response.html_url),
            });
            return true;
        } catch (ex) {
            this.logger.error('检查插件更新失败', ex);
            return false;
        }
    }
}
