import { browser } from 'webextension-polyfill-ts';

import { chromeMessage } from '../../tool/chrome-message';
import { config } from '../../tool/config-manage';
import { logger } from '../../tool/log';
import { dateDiff } from '../../tool/tool';

// 1 day
const autoCheckInterval = 1000 * 60 * 60 * 24;

export const autoUpdateInit = async () => {
    const conf = await config.get();
    if (!conf.autoUpdate) return;
    logger.log('自动更新');

    const { lastCheckTime } = await browser.storage.local.get('lastCheckTime');

    const time = new Date().getTime();
    const needCheck = (time - autoCheckInterval) > (lastCheckTime || 0);
    logger.log('上次自动更新检查', dateDiff(lastCheckTime), new Date(lastCheckTime), needCheck ? '开始检查' : '跳过');
    if (needCheck) {
        await browser.storage.local.set({ lastCheckTime: time });
        const updated = await chromeMessage.send('auto-update', false);
        logger.log('自动更新结束', updated ? '有新版本并更新' : '没有新版本');
    }
};
