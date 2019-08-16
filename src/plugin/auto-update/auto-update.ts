import { browser } from 'webextension-polyfill-ts';

import { chromeMessage } from '../../tool/chrome-message';
import { Config } from '../../tool/config-manage';
import { dateDiff } from '../../tool/tool';

export const autoUpdateInit = async () => {
  const config = await Config.get();
  if (!config.autoUpdate) return;
  console.log('💉 插件', '自动更新');

  const data = await browser.storage.local.get('lastCheckTime');

  const time = new Date().getTime();
  /*
  * 不需要太频繁, 常用标签都汉化过了, 不常用的更新了也发现不了, 过多的请求可能会引起github的注意.
  * 每5天检查一次.
  * */
  const flage = (time - (1000 * 60 * 60 * 24 * 5)) > (data.lastCheckTime || 0);
  console.log('💉 上次自动更新检查', dateDiff(new Date(data.lastCheckTime)), new Date(data.lastCheckTime), flage ? '开始检查' : '跳过');
  if (flage) {
    await browser.storage.local.set({ lastCheckTime: time });
    const updated = await chromeMessage.send('auto-update', void 0);
    console.log('💉 自动更新结束', updated ? '有新版本并更新' : '没有新版本');
  }
};
