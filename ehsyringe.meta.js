// ==UserScript==
// @name        EhSyringe
// @version     3.1.0
// @author      EhTagTranslation
// @description E 站注射器，将中文翻译注入到 E 站体内。包含全站 UI 翻译和超过 36000 条标签翻译，标签数据库持续更新中。
// @homepage    https://github.com/EhTagTranslation/EhSyringe
// @supportURL  https://github.com/EhTagTranslation/EhSyringe/issues
// @match       *://exhentai.org/*
// @match       *://exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*
// @match       *://e-hentai.org/*
// @match       *://*.exhentai.org/*
// @match       *://*.exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*
// @match       *://*.e-hentai.org/*
// @match       *://*.hath.network/*
// @namespace   https://github.com/EhTagTranslation/EhSyringe
// @license     MIT
// @compatible  firefox >= 60
// @compatible  edge >= 16
// @compatible  chrome >= 61
// @compatible  safari >= 11
// @compatible  opera >= 48
// @exclude     *://forums.e-hentai.org/*
// @icon        https://fastly.jsdelivr.net/gh/EhTagTranslation/EhSyringe@3fd2033574367d989adf606fc7771c3380c88f65/src/assets/logo.svg
// @updateURL   https://github.com/EhTagTranslation/EhSyringe/releases/latest/download/ehsyringe.meta.js
// @downloadURL https://github.com/EhTagTranslation/EhSyringe/releases/latest/download/ehsyringe.user.js
// @run-at      document-start
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addValueChangeListener
// @grant       GM_removeValueChangeListener
// @grant       GM_openInTab
// @grant       GM_notification
// ==/UserScript==
