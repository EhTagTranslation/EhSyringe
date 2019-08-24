import { logger } from '../tool/log';

import { contextMenu } from './context-menu';
import { omnibox } from './omnibox';
import { update } from './update';

class Background {
    readonly update = update;
    readonly contextMenu = contextMenu;
    readonly omnibox = omnibox;
}

function getBackground(): Background {
    const winbg = chrome.extension.getBackgroundPage() as { syringeBackground?: Background };
    if (winbg.syringeBackground) {
        return winbg.syringeBackground;
    } else {
        logger.log('Create background');
        return winbg.syringeBackground = new Background();
    }
}

export const background = getBackground();
