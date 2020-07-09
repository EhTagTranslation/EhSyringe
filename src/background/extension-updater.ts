import { browser } from 'webextension-polyfill-ts';
import { logger } from '../tool/log';

async function main(): Promise<void> {
    const info = await browser.management.getSelf();
    const response = await fetch('https://api.github.com/repos/EhTagTranslation/EhSyringe/releases/latest', {
        headers: {
            accept: 'application/json',
        },
    });
    const payload = (await response.json()) as { tag_name: string; html_url: string };
    const current = `v${info.version}`;
    const latest = payload.tag_name;
    logger.log('检查插件更新', { current, latest });
    if (latest !== current) {
        const id = await browser.notifications.create({
            type: 'basic',
            title: info.name,
            message: `发现新的版本 ${latest}，点击跳转到下载页面。`,
            iconUrl: browser.runtime.getURL('assets/logo-padding.svg'),
        });
        browser.notifications.onClicked.addListener((cid) => {
            if (cid === id) {
                chrome.tabs.create({
                    url: payload.html_url,
                });
            }
        });
    }
}

export const result = main();
