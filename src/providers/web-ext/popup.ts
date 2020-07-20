import { Popup, htmlUri } from '../common/popup';
import { browser } from 'webextension-polyfill-ts';

export const popup: Popup = {
    set(scriptUri: string) {
        return browser.browserAction.setPopup({
            popup: htmlUri(scriptUri),
        });
    },
};
