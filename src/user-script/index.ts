import { Container } from 'services';
import { isValidHost } from 'utils/hosts';
import { ready } from 'utils/dom';
import { Introduce } from 'plugin/introduce';
import { TagTip } from 'plugin/tag-tip';
import { Syringe } from 'plugin/syringe';
import { AutoUpdate } from 'plugin/auto-update';
import { TagContextMenu } from 'plugin/tag-context-menu';
import { DatabaseUpdater } from 'plugin/database-updater';
import { Suggest } from 'plugin/suggest';
import { TagDatabase } from 'plugin/tag-database';
import { ImageContextMenu } from 'plugin/image-context-menu';

import { createPopup } from './popup-host';

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

        createPopup();
    }

    ready(start);
}

// 为轻型用户脚本实现添加简单过滤
const LOADED_KEY = `EhTagTranslation:EhSyringeLoaded`;
if (!(LOADED_KEY in window)) {
    Object.defineProperty(window, LOADED_KEY, { value: true });
    if (isValidHost(location.hostname)) {
        main();
    }
}
