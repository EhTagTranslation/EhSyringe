import "./syringe/syringe";

/* e站經常某個圖片加載不出來,導致一直加載中, 導致插件無法加載. 在頭部注入插件 DOMContentLoaded 事件后執行 */
import { tagTip } from "./plugin/tag-tip/tag-tip"
import { introduce } from "./plugin/introduce/introduce"
import { autoUpdate } from "./plugin/auto-update/auto-update"
window.document.addEventListener('DOMContentLoaded', (e) => {
  tagTip();
  introduce();
  autoUpdate();
});
