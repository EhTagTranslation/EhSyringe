import { logger } from '../tool/log';

import { contextMenu } from './context-menu';
import { omnibox } from './omnibox';
import { suggest } from './suggest';
import { tagDatabase } from './tag-database';
import { updater } from './updater';

class Background {
    readonly updater: typeof updater = require('./updater').updater;
    readonly suggest: typeof suggest = require('./suggest').suggest;
    readonly contextMenu: typeof contextMenu = require('./context-menu').contextMenu;
    readonly omnibox: typeof omnibox = require('./omnibox').omnibox;
    readonly tagDatabase: typeof tagDatabase = require('./tag-database').tagDatabase;
}

function getBackground(): Background {
    const winbg = chrome.extension.getBackgroundPage() as { syringeBackground?: Background };
    if (!winbg.syringeBackground) {
        logger.log('Create background');
        winbg.syringeBackground = new Background();
    }
    return winbg.syringeBackground;
}

export const background = getBackground();
