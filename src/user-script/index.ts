import { Container } from 'services';
import { Introduce } from 'plugin/introduce';
import { TagTip } from 'plugin/tag-tip';
import { Syringe } from 'plugin/syringe';
import { AutoUpdate } from 'plugin/auto-update';
import { TagContextMenu } from 'plugin/tag-context-menu';
import { DatabaseUpdater } from 'plugin/database-updater';
import { Suggest } from 'plugin/suggest';
import { TagDatabase } from 'plugin/tag-database';
import { Popup } from 'plugin/popup';
import { packageJson } from 'info';
import { setBadge } from 'providers/utils';
import { ImageContextMenu } from 'plugin/image-context-menu';

import './index.less';

function main(): void {
    Container.get(DatabaseUpdater);
    Container.get(TagDatabase);
    Container.get(Syringe);

    function start(): void {
        Container.get(TagContextMenu);
        Container.get(ImageContextMenu);
        Container.get(Suggest);
        Container.get(AutoUpdate);
        Container.get(TagTip);
        Container.get(Introduce);

        const button = document.body.appendChild(document.createElement('div'));
        button.id = 'eh-syringe-popup-button';
        button.title = packageJson.displayName;
        const badge = button.appendChild(document.createElement('div'));
        badge.id = 'eh-syringe-popup-badge';
        setBadge({ text: '' });
        const popupBack = document.body.appendChild(document.createElement('div'));
        popupBack.id = 'eh-syringe-popup-back';
        popupBack.lang = 'cmn-Hans';
        const popup = popupBack.appendChild(document.createElement('div'));
        popup.id = 'eh-syringe-popup';

        const closeListeners = new Array<() => unknown>();
        const openListeners = new Array<() => unknown>();
        popupBack.classList.add('close');
        popupBack.ontransitionend = (ev) => {
            if (ev.target !== popupBack) return;
            if (popupBack.classList.contains('opening')) {
                popupBack.classList.remove('opening', 'close');
                popupBack.classList.add('open');
            }
            if (popupBack.classList.contains('closing')) {
                popupBack.classList.remove('closing', 'open');
                popupBack.classList.add('close');
                closeListeners.forEach((l) => l());
            }
        };
        const open = (): void => {
            openListeners.forEach((l) => l());
            popupBack.classList.add('opening');
        };
        const close = (): void => {
            popupBack.classList.add('closing');
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
        popupBack.addEventListener('click', (ev) => {
            if (ev.target === popupBack && popupBack.classList.contains('open')) close();
        });
        button.addEventListener('click', () => {
            if (popupBack.classList.contains('close')) open();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        setTimeout(start);
    }
}

function isValidHost(): boolean {
    const hostname = location.hostname;
    if (!hostname.endsWith('e-hentai.org') && !hostname.endsWith('exhentai.org')) {
        return false;
    }
    if (hostname.endsWith('forums.e-hentai.org')) {
        return false;
    }
    return true;
}

// 为轻型用户脚本实现添加简单过滤
const LOADED_KEY = `EhTagTranslation:EhSyringeLoaded`;
if (!(LOADED_KEY in window)) {
    Object.defineProperty(window, LOADED_KEY, { value: true });
    if (isValidHost()) {
        main();
    }
}
