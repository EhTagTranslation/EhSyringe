import { Popup, htmlUri } from '../common/popup';

import './popup.less';
const iframe = unsafeWindow.document.createElement('iframe');
unsafeWindow.document.body.appendChild(iframe);

export const popup: Popup = {
    set(scriptUri: string) {
        iframe.src = htmlUri(scriptUri);
        return Promise.resolve();
    },
};
