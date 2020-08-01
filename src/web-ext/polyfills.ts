import 'core-js/features/global-this';
import 'core-js/features/array';
import 'core-js/features/object';
import 'core-js/features/string';
import 'core-js/features/regexp';
import 'core-js/features/reflect';

// 引入 promise 的 polyfills 会导致 waterfox classic 出错，按需引入

import { browser } from 'webextension-polyfill-ts';

Object.defineProperty(globalThis, 'browser', { value: browser });
