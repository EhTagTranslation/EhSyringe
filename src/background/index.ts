import type { suggest } from './suggest';
import type { tagDatabase } from './tag-database';
import type { updater } from './updater';

class Background {
    readonly updater: typeof updater = require('./updater').updater;
    readonly suggest: typeof suggest = require('./suggest').suggest;
    readonly omnibox: typeof omnibox = require('./omnibox').omnibox;
    readonly tagDatabase: typeof tagDatabase = require('./tag-database').tagDatabase;
}

function getBackground(): Background {
    const winbg = chrome.extension.getBackgroundPage() as {
        syringeBackground?: Background;
    };
    if (!winbg.syringeBackground) {
        logger.log('Create background');
        winbg.syringeBackground = new Background();
    }
    return winbg.syringeBackground;
}

export const background = getBackground();
