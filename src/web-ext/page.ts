import './polyfills';
import { Container } from 'services';
import { Introduce } from 'plugin/introduce';
import { TagTip } from 'plugin/tag-tip';
import { Syringe } from 'plugin/syringe';
import { AutoUpdate } from 'plugin/auto-update';

Container.get(Syringe);

/* e站經常某個圖片加載不出來,一直加載中, 導致插件無法加載. 在頭部注入插件 DOMContentLoaded 事件后執行 */
window.document.addEventListener('DOMContentLoaded', () => {
    Container.get(AutoUpdate);
    Container.get(TagTip);
    Container.get(Introduce);
});
