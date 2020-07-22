import 'polyfills';
import browser from 'webextension-polyfill-ts';

Object.defineProperty(globalThis, 'browser', { value: browser });
