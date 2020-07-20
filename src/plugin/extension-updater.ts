import { browser } from 'webextension-polyfill-ts';
import { Service } from 'typedi';
import { Logger } from 'services/logger';
import { Storage } from 'services/storage';
import { openInTab } from 'providers/utils';

@Service()
export class ExtensionUpdater {
    constructor(readonly logger: Logger, readonly storage: Storage) {
        this.check().catch(logger.error);
    }

    async check(): Promise<void> {
        const lastCheck = await this.storage.get('extensionCheck');
        const diff = Date.now() - lastCheck;
        if (diff <= 1000 * 60 * 60 * 24) {
            this.logger.info(`上次检查于 ${new Date(lastCheck).toLocaleString()}，跳过`);
            return;
        }

        try {
            const info = await browser.management.getSelf();
            const response = await fetch('https://api.github.com/repos/EhTagTranslation/EhSyringe/releases/latest', {
                headers: {
                    accept: 'application/json',
                },
            });
            const payload = (await response.json()) as { tag_name: string; html_url: string };
            const current = `v${info.version}`;
            const latest = payload.tag_name;
            if (typeof latest != 'string' || !latest.startsWith('v')) {
                const e = new Error('响应格式错误');
                Object.defineProperty(e, 'response', payload);
                throw e;
            }
            this.logger.log('检查插件更新', { current, latest });
            if (latest !== current) {
                const id = await browser.notifications.create({
                    type: 'basic',
                    title: info.name,
                    message: `发现新的版本 ${latest}，点击跳转到下载页面。`,
                    iconUrl: browser.runtime.getURL('assets/logo-padding.svg'),
                });
                browser.notifications.onClicked.addListener((cid) => {
                    if (cid === id) {
                        openInTab(payload.html_url);
                    }
                });
            }
        } catch (ex) {
            this.logger.error('检查插件更新失败', ex);
        }
    }
}
