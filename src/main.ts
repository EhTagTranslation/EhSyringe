import "./syringe/syringe";

/* e站經常某個圖片加載不出來,一直加載中, 導致插件無法加載. 在頭部注入插件 DOMContentLoaded 事件后執行 */
import { tagTipInit } from "./plugin/tag-tip/tag-tip"
import { introduceInit } from "./plugin/introduce/introduce"
import { autoUpdateInit } from "./plugin/auto-update/auto-update"
window.document.addEventListener('DOMContentLoaded', () => {
  tagTipInit().catch(console.error);
  introduceInit().catch(console.error);
  autoUpdateInit().catch(console.error);
});
