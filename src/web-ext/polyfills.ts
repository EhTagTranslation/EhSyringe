import '../polyfills';

import * as browser from 'webextension-polyfill';

Object.defineProperty(globalThis, 'browser', { value: browser });
