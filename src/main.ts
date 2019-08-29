import { autoUpdateInit } from './plugin/auto-update/auto-update';
import { introduceInit } from './plugin/introduce/introduce';
import './plugin/syringe/syringe';
import { tagTipInit } from './plugin/tag-tip/tag-tip';
import { logger } from './tool/log';

/* e站經常某個圖片加載不出來,一直加載中, 導致插件無法加載. 在頭部注入插件 DOMContentLoaded 事件后執行 */

window.document.addEventListener('DOMContentLoaded', () => {
    tagTipInit().catch(logger.error);
    introduceInit().catch(logger.error);
    autoUpdateInit().catch(logger.error);
});
