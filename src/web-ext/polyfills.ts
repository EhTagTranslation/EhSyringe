import '../polyfills';

import * as browser from 'webextension-polyfill';

Object.defineProperty(globalThis, 'browser', { value: browser });
__webpack_public_path__ = chrome.runtime.getURL('/');
