import 'polyfills';
import { Container } from 'services';
import { Introduce } from 'plugin/introduce';
import { TagTip } from 'plugin/tag-tip';
import { Syringe } from 'plugin/syringe';
import { AutoUpdate } from 'plugin/auto-update';
import { ContextMenu } from 'plugin/context-menu';
import { DatabaseUpdater } from 'plugin/database-updater';
import { Suggest } from 'plugin/suggest';
import { TagDatabase } from 'plugin/tag-database';
import { Popup } from 'plugin/popup';

import './index.less';

Container.get(DatabaseUpdater);
Container.get(TagDatabase);
Container.get(Syringe);

/* e站經常某個圖片加載不出來,一直加載中, 導致插件無法加載. 在頭部注入插件 DOMContentLoaded 事件后執行 */
window.document.addEventListener('DOMContentLoaded', () => {
    Container.get(ContextMenu);
    Container.get(Suggest);
    Container.get(AutoUpdate);
    Container.get(TagTip);
    Container.get(Introduce);

    const button = document.body.appendChild(document.createElement('div'));
    button.id = 'eh-syringe-popup-button';
    const popupBack = document.body.appendChild(document.createElement('div'));
    popupBack.id = 'eh-syringe-popup-back';
    const popup = popupBack.appendChild(document.createElement('div'));
    popup.id = 'eh-syringe-popup';

    const closeListeners = new Array<() => unknown>();
    const openListeners = new Array<() => unknown>();
    const open = (): void => {
        openListeners.forEach((l) => l());
        popupBack.classList.add('show');
    };
    const close = (): void => {
        closeListeners.forEach((l) => l());
        popupBack.classList.remove('show');
    };
    Container.get(Popup).mount(popup, {
        close: close,
        onopen(listener) {
            openListeners.push(listener);
        },
        onclose(listener) {
            closeListeners.push(listener);
        },
    });
    button.addEventListener('click', open);
    popupBack.addEventListener('click', (ev) => {
        if (ev.target === popupBack) close();
    });
});
