// ==UserScript==
// @name         EhSyringe
// @version      3.4.6
// @author       EhTagTranslation
// @description  E 站注射器，将中文翻译注入到 E 站体内。包含全站 UI 翻译和超过 37000 条标签翻译，标签数据库持续更新中。
// @icon         https://fastly.jsdelivr.net/gh/EhTagTranslation/EhSyringe@926f913aaf95b6aeadaf3eef42ba72638791c82d/src/assets/logo.svg
// @license      MIT
// @namespace    https://github.com/EhTagTranslation/EhSyringe
// @homepage     https://github.com/EhTagTranslation/EhSyringe
// @supportURL   https://github.com/EhTagTranslation/EhSyringe/issues
// @updateURL    https://github.com/EhTagTranslation/EhSyringe/releases/latest/download/ehsyringe.meta.js
// @downloadURL  https://github.com/EhTagTranslation/EhSyringe/releases/latest/download/ehsyringe.user.js
// @compatible   firefox >= 60
// @compatible   edge >= 16
// @compatible   chrome >= 61
// @compatible   safari >= 11
// @compatible   opera >= 48
// @match        *://exhentai.org/*
// @match        *://exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*
// @match        *://e-hentai.org/*
// @match        *://*.exhentai.org/*
// @match        *://*.exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*
// @match        *://*.e-hentai.org/*
// @match        *://*.hath.network/*
// @match        *://ehwiki.org/*
// @exclude      *://forums.e-hentai.org/*
// @run-at       document-start
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_openInTab
// @grant        GM_notification
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 82145:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 74572:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 55315:
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 66321:
/***/ ((module) => {

"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */
var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);
  if (!match) {
    return str;
  }
  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#39;';
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escape;
  }
  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}

/***/ }),

/***/ 12604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55315);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82145);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#gmid{display:grid;grid:"gd3 spa spa" auto "gd3 gd4 gd5" auto/auto 1fr auto}#gmid #gd3{grid-area:gd3}#gmid #spa{grid-area:spa;width:auto}#gmid #gd4{grid-area:gd4;width:auto}#gmid #gd5{grid-area:gd5;min-width:150px;position:relative;z-index:3}:root #ehs-introduce-box{background:#edebdf;border-radius:0 0 6px 0;bottom:0;display:flex;flex-flow:column;left:0;overflow:auto;position:absolute;right:-5px;text-align:left;top:0}:root #ehs-introduce-box .ehs-title{border-bottom:1px solid #5c0d12;display:flex;flex:none;flex-direction:row;line-height:14px;margin:0 8px;padding:3px 0}:root #ehs-introduce-box .ehs-title .ehs-cn{font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:root #ehs-introduce-box .ehs-title .ehs-en{opacity:.7;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:root #ehs-introduce-box .ehs-title>div{flex:auto;overflow:hidden}:root #ehs-introduce-box .ehs-title>span{flex:none;overflow:hidden}:root #ehs-introduce-box .ehs-close{cursor:pointer;font-size:16px;line-height:28px;opacity:.8;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:20px}:root #ehs-introduce-box .ehs-close:hover{opacity:1}:root #ehs-introduce-box .ehs-close:after{content:"\\00d7"}:root #ehs-introduce-box .ehs-content{flex:auto;margin:4px 0;overflow:auto;padding:4px 8px;scrollbar-color:#5c0d12 transparent;scrollbar-width:thin}:root #ehs-introduce-box .ehs-content::-webkit-scrollbar{height:4px;width:4px}:root #ehs-introduce-box .ehs-content::-webkit-scrollbar-thumb{background:#5c0d12}:root #ehs-introduce-box .ehs-content abbr[title]{padding:0 1px}:root #ehs-introduce-box .ehs-content abbr[title]:after{content:" (" attr(title) ")";font-size:90%}:root #ehs-introduce-box .ehs-href{border-top:1px solid #5c0d12;flex:none;line-height:24px;margin:0 8px}:root #ehs-introduce-box .ehs-href:empty,:root #ehs-introduce-box:empty{display:none}:root #ehs-introduce-box img{height:auto;margin:0;max-width:100%;width:auto}:root.ehs-ex #ehs-introduce-box{background:#4f535b;border-radius:0}:root.ehs-ex #ehs-introduce-box .ehs-title{border-bottom:1px solid #000}:root.ehs-ex #ehs-introduce-box .ehs-href{border-top:1px solid #000}:root.ehs-ex #ehs-introduce-box .ehs-content{scrollbar-color:#000 transparent}:root.ehs-ex #ehs-introduce-box .ehs-content::-webkit-scrollbar-thumb{background:#000}.ehs-no-intro,.ehs-no-translation{opacity:.8}.ehs-no-intro h3,.ehs-no-translation h3{font-size:16px;font-weight:700;opacity:.6;padding:8px;text-align:center}:root.ehs-image-level-0 #ehs-introduce-box .ehs-content img,:root.ehs-image-level-1 #ehs-introduce-box .ehs-content img[nsfw],:root.ehs-image-level-2 #ehs-introduce-box .ehs-content img[nsfw=R18G]{display:none}`, "",{"version":3,"sources":["webpack://./index.less","webpack://./src/plugin/introduce/index.less"],"names":[],"mappings":"AAAA,MACI,YAAA,CACA,wDCCJ,CDHA,WAOQ,aCDR,CDNA,WAUQ,aAAA,CACA,UCDR,CDVA,WAcQ,aAAA,CACA,UCDR,CDdA,WAkBQ,aAAA,CAGA,eAAA,CADA,iBAAA,CADA,SCCR,CDKA,yBAQI,kBAAA,CADA,uBAAA,CALA,QAAA,CAGA,YAAA,CACA,gBAAA,CAJA,MAAA,CACA,aAAA,CAFA,iBAAA,CACA,UAAA,CAEA,eAAA,CAFA,KCGJ,CDLA,oCAYQ,+BAAA,CAGA,YAAA,CALA,SAAA,CAMA,kBAAA,CAHA,gBAAA,CAFA,YAAA,CAGA,aCAR,CDdA,4CAmBY,eAAA,CACA,eAAA,CACA,sBAAA,CACA,kBCFZ,CDpBA,4CAyBY,UAAA,CACA,eAAA,CACA,sBAAA,CACA,kBCFZ,CD1BA,wCAiCY,SAAA,CADA,eCFZ,CD9BA,yCAqCY,SAAA,CADA,eCFZ,CDlCA,oCA0CQ,cAAA,CACA,cAAA,CAEA,gBAAA,CADA,UAAA,CAGA,iBAAA,CANA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CAKA,UCHR,CDKQ,0CACI,SCHZ,CDKQ,0CACI,eCHZ,CDjDA,sCAwDQ,SAAA,CAEA,YAAA,CADA,aAAA,CAEA,eAAA,CAEA,mCAAA,CADA,oBCHR,CDMQ,yDAEI,UAAA,CADA,SCHZ,CDMQ,+DACI,kBCJZ,CDhEA,kDAuEY,aCJZ,CDKY,wDACI,4BAAA,CACA,aCHhB,CDvEA,mCAgFQ,4BAAA,CADA,SAAA,CAGA,gBAAA,CADA,YCJR,CDUI,wEACI,YCLR,CDnFA,6BA8FQ,WAAA,CAFA,QAAA,CADA,cAAA,CAEA,UCJR,CDSA,gCACI,kBAAA,CACA,eCPJ,CDKA,2CAIQ,4BCNR,CDEA,0CAOQ,yBCNR,CDDA,6CAUQ,gCCNR,CDOQ,sEACI,eCLZ,CDUA,kCAEI,UCRJ,CDMA,wCAMQ,cAAA,CAEA,eAAA,CAJA,UAAA,CAGA,WAAA,CAFA,iBCHR,CDsBA,qMAEQ,YCdR","sourcesContent":["#gmid {\n    display: grid;\n    grid:\n        'gd3 spa spa' auto\n        'gd3 gd4 gd5' auto\n        / auto 1fr auto;\n    #gd3 {\n        grid-area: gd3;\n    }\n    #spa {\n        grid-area: spa;\n        width: auto;\n    }\n    #gd4 {\n        grid-area: gd4;\n        width: auto;\n    }\n    #gd5 {\n        grid-area: gd5;\n        z-index: 3;\n        position: relative;\n        min-width: 150px;\n    }\n}\n\n:root #ehs-introduce-box {\n    position: absolute;\n    inset: 0 -5px 0 0;\n    overflow: auto;\n    text-align: left;\n    display: flex;\n    flex-flow: column;\n    border-radius: 0 0 6px 0;\n    background: #edebdf;\n    .ehs-title {\n        flex: none;\n        margin: 0 8px;\n        border-bottom: 1px solid #5c0d12;\n        line-height: 14px;\n        padding: 3px 0;\n        display: flex;\n        flex-direction: row;\n\n        .ehs-cn {\n            font-weight: bold;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n        }\n        .ehs-en {\n            opacity: 0.7;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n        }\n\n        > div {\n            overflow: hidden;\n            flex: auto;\n        }\n        > span {\n            overflow: hidden;\n            flex: none;\n        }\n    }\n    .ehs-close {\n        user-select: none;\n        cursor: pointer;\n        font-size: 16px;\n        opacity: 0.8;\n        line-height: 28px;\n        width: 20px;\n        text-align: center;\n        &:hover {\n            opacity: 1;\n        }\n        &::after {\n            content: '\\00d7';\n        }\n    }\n    .ehs-content {\n        flex: auto;\n        overflow: auto;\n        margin: 4px 0;\n        padding: 4px 8px;\n        scrollbar-width: thin;\n        scrollbar-color: #5c0d12 transparent;\n\n        &::-webkit-scrollbar {\n            width: 4px;\n            height: 4px;\n        }\n        &::-webkit-scrollbar-thumb {\n            background: #5c0d12;\n        }\n        abbr[title] {\n            padding: 0 1px;\n            &::after {\n                content: ' (' attr(title) ')';\n                font-size: 90%;\n            }\n        }\n    }\n    .ehs-href {\n        flex: none;\n        border-top: 1px solid #5c0d12;\n        margin: 0 8px;\n        line-height: 24px;\n        &:empty {\n            display: none;\n        }\n    }\n    &:empty {\n        display: none;\n    }\n    img {\n        max-width: 100%;\n        margin: 0;\n        width: auto;\n        height: auto;\n    }\n}\n\n:root.ehs-ex #ehs-introduce-box {\n    background: #4f535b;\n    border-radius: 0;\n    .ehs-title {\n        border-bottom: 1px solid #000;\n    }\n    .ehs-href {\n        border-top: 1px solid #000;\n    }\n    .ehs-content {\n        scrollbar-color: #000 transparent;\n        &::-webkit-scrollbar-thumb {\n            background: #000;\n        }\n    }\n}\n\n.ehs-no-translation,\n.ehs-no-intro {\n    opacity: 0.8;\n    h3 {\n        opacity: 0.6;\n        text-align: center;\n        font-size: 16px;\n        padding: 8px;\n        font-weight: bold;\n    }\n}\n\n//0:hide, 1:non-h 2: R18 3: R18G\n/* nsfw=\"R18\" */\n:root.ehs-image-level-0 #ehs-introduce-box .ehs-content {\n    img {\n        display: none;\n    }\n}\n:root.ehs-image-level-1 #ehs-introduce-box .ehs-content {\n    img[nsfw] {\n        display: none;\n    }\n}\n:root.ehs-image-level-2 #ehs-introduce-box .ehs-content {\n    img[nsfw='R18G'] {\n        display: none;\n    }\n}\n:root.ehs-image-level-3 {\n    // 所有都显示\n}\n","#gmid {\n  display: grid;\n  grid: 'gd3 spa spa' auto 'gd3 gd4 gd5' auto / auto 1fr auto;\n}\n#gmid #gd3 {\n  grid-area: gd3;\n}\n#gmid #spa {\n  grid-area: spa;\n  width: auto;\n}\n#gmid #gd4 {\n  grid-area: gd4;\n  width: auto;\n}\n#gmid #gd5 {\n  grid-area: gd5;\n  z-index: 3;\n  position: relative;\n  min-width: 150px;\n}\n:root #ehs-introduce-box {\n  position: absolute;\n  inset: 0 -5px 0 0;\n  overflow: auto;\n  text-align: left;\n  display: flex;\n  flex-flow: column;\n  border-radius: 0 0 6px 0;\n  background: #edebdf;\n}\n:root #ehs-introduce-box .ehs-title {\n  flex: none;\n  margin: 0 8px;\n  border-bottom: 1px solid #5c0d12;\n  line-height: 14px;\n  padding: 3px 0;\n  display: flex;\n  flex-direction: row;\n}\n:root #ehs-introduce-box .ehs-title .ehs-cn {\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n:root #ehs-introduce-box .ehs-title .ehs-en {\n  opacity: 0.7;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n:root #ehs-introduce-box .ehs-title > div {\n  overflow: hidden;\n  flex: auto;\n}\n:root #ehs-introduce-box .ehs-title > span {\n  overflow: hidden;\n  flex: none;\n}\n:root #ehs-introduce-box .ehs-close {\n  user-select: none;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.8;\n  line-height: 28px;\n  width: 20px;\n  text-align: center;\n}\n:root #ehs-introduce-box .ehs-close:hover {\n  opacity: 1;\n}\n:root #ehs-introduce-box .ehs-close::after {\n  content: '\\00d7';\n}\n:root #ehs-introduce-box .ehs-content {\n  flex: auto;\n  overflow: auto;\n  margin: 4px 0;\n  padding: 4px 8px;\n  scrollbar-width: thin;\n  scrollbar-color: #5c0d12 transparent;\n}\n:root #ehs-introduce-box .ehs-content::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n:root #ehs-introduce-box .ehs-content::-webkit-scrollbar-thumb {\n  background: #5c0d12;\n}\n:root #ehs-introduce-box .ehs-content abbr[title] {\n  padding: 0 1px;\n}\n:root #ehs-introduce-box .ehs-content abbr[title]::after {\n  content: ' (' attr(title) ')';\n  font-size: 90%;\n}\n:root #ehs-introduce-box .ehs-href {\n  flex: none;\n  border-top: 1px solid #5c0d12;\n  margin: 0 8px;\n  line-height: 24px;\n}\n:root #ehs-introduce-box .ehs-href:empty {\n  display: none;\n}\n:root #ehs-introduce-box:empty {\n  display: none;\n}\n:root #ehs-introduce-box img {\n  max-width: 100%;\n  margin: 0;\n  width: auto;\n  height: auto;\n}\n:root.ehs-ex #ehs-introduce-box {\n  background: #4f535b;\n  border-radius: 0;\n}\n:root.ehs-ex #ehs-introduce-box .ehs-title {\n  border-bottom: 1px solid #000;\n}\n:root.ehs-ex #ehs-introduce-box .ehs-href {\n  border-top: 1px solid #000;\n}\n:root.ehs-ex #ehs-introduce-box .ehs-content {\n  scrollbar-color: #000 transparent;\n}\n:root.ehs-ex #ehs-introduce-box .ehs-content::-webkit-scrollbar-thumb {\n  background: #000;\n}\n.ehs-no-translation,\n.ehs-no-intro {\n  opacity: 0.8;\n}\n.ehs-no-translation h3,\n.ehs-no-intro h3 {\n  opacity: 0.6;\n  text-align: center;\n  font-size: 16px;\n  padding: 8px;\n  font-weight: bold;\n}\n/* nsfw=\"R18\" */\n:root.ehs-image-level-0 #ehs-introduce-box .ehs-content img {\n  display: none;\n}\n:root.ehs-image-level-1 #ehs-introduce-box .ehs-content img[nsfw] {\n  display: none;\n}\n:root.ehs-image-level-2 #ehs-introduce-box .ehs-content img[nsfw='R18G'] {\n  display: none;\n}\n/*# sourceMappingURL=index.css.map */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 25483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55315);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82145);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#eh-syringe-popup-root{font-size:medium;line-height:normal;text-align:left;text-align:initial}#eh-syringe-popup-root input,#eh-syringe-popup-root table,#eh-syringe-popup-root td,#eh-syringe-popup-root th{background:inherit;color:inherit;margin:0;padding:0}#eh-syringe-popup-root td,#eh-syringe-popup-root th{padding:1px}#eh-syringe-popup-root input{border:none;margin:0;min-width:0;padding:0}#eh-syringe-popup-root input[type=text]{border-bottom:1px solid transparent;border-radius:0}#eh-syringe-popup-root input[type=text].invalid,#eh-syringe-popup-root input[type=text]:invalid{border-color:#aa575e!important}#eh-syringe-popup-root input[type=checkbox],#eh-syringe-popup-root input[type=radio]{position:static;top:auto}#eh-syringe-popup-root p{margin:.8em 0;padding:0}#eh-syringe-popup-root a{background:transparent;-webkit-text-decoration:none;text-decoration:none;transition:all .28s cubic-bezier(.4,0,.2,1) 0s}#eh-syringe-popup{background:#f0f0f0;border:1px solid #8041a6;border-radius:6px;box-shadow:0 0 6px 2px rgba(0,0,0,.2);color:#111}#eh-syringe-popup .action{background:#f0f0f0;color:#8041a6}#eh-syringe-popup .action.primary{background:#8041a6;border-color:#8041a6;color:#f0f0f0}#eh-syringe-popup .action.primary:hover{background:#491774}#eh-syringe-popup .action.primary:active{background:#ae79c9}#eh-syringe-popup #info{color:#8041a6}#eh-syringe-popup .hasNew{color:#79252b}#eh-syringe-popup a{color:#8041a6}#eh-syringe-popup a:hover{color:#491774}#eh-syringe-popup a:active{color:#ae79c9}#eh-syringe-popup a.minor{color:#a5a3a6}#eh-syringe-popup a.minor:hover{color:#d2cdd4}#eh-syringe-popup a.minor:active{color:#838185}#eh-syringe-popup .logo svg [fill-bg]{fill:#f0f0f0}#eh-syringe-popup .logo svg [fill-accent]{fill:#8041a6}#eh-syringe-popup .logo svg [fill-sa]{fill:#cfbadc}#eh-syringe-popup .logo svg [stroke-bg]{stroke:#f0f0f0}#eh-syringe-popup .logo svg [stroke-accent]{stroke:#8041a6}#eh-syringe-popup .logo svg [stroke-sa]{stroke:#cfbadc}#eh-syringe-popup #settingForm{scrollbar-color:#8041a6 transparent}#eh-syringe-popup #settingForm .checkbox-item svg path{stroke:#8041a6}#eh-syringe-popup #settingForm input[type=text]{border-color:#ae79c9;color:#8041a6}#eh-syringe-popup #settingForm input[type=text]:focus{border-color:#8041a6}#eh-syringe-popup #settingForm input[type=text]::-ms-input-placeholder{opacity:.5;-webkit-text-fill-color:#ae79c9;color:#ae79c9}#eh-syringe-popup #settingForm input[type=text]::placeholder{opacity:.5;-webkit-text-fill-color:#ae79c9;color:#ae79c9}#eh-syringe-popup #settingForm input[type=checkbox]{border:2px solid #a09da6}#eh-syringe-popup #settingForm input[type=checkbox]:checked{border:2px solid #8041a6}#eh-syringe-popup #settingForm input[type=range]::-webkit-slider-runnable-track{border:1px solid #ae79c9}#eh-syringe-popup #settingForm input[type=range]::-moz-range-track{border:1px solid #ae79c9}#eh-syringe-popup #settingForm input[type=range]::-webkit-slider-thumb{background:#f0f0f0;border:2px solid #8041a6}#eh-syringe-popup #settingForm input[type=range]::-moz-range-thumb{background:#f0f0f0;border:2px solid #8041a6}#eh-syringe-popup #settingForm input[type=range]:focus::-webkit-slider-thumb{border:2px solid #8041a6;box-shadow:0 0 7px rgba(0,0,0,.2)}#eh-syringe-popup #settingForm input[type=range]:focus::-moz-range-thumb{border:2px solid #8041a6;box-shadow:0 0 7px rgba(0,0,0,.2)}#eh-syringe-popup #settingForm input[type=range]:active::-webkit-slider-thumb{background:#fdfdfd;border:2px solid #8041a6;box-shadow:0 0 7px 1px rgba(0,0,0,.2)}#eh-syringe-popup #settingForm input[type=range]:active::-moz-range-thumb{background:#fdfdfd;border:2px solid #8041a6;box-shadow:0 0 7px 1px rgba(0,0,0,.2)}:root.ehs-ex #eh-syringe-popup{background:#313131;border:1px solid #ce90f1;border-radius:6px;box-shadow:0 0 6px 2px rgba(0,0,0,.2);color:#eee}:root.ehs-ex #eh-syringe-popup .action{background:#313131;color:#ce90f1}:root.ehs-ex #eh-syringe-popup .action.primary{background:#ce90f1;border-color:#ce90f1;color:#313131}:root.ehs-ex #eh-syringe-popup .action.primary:hover{background:#e2b9f7}:root.ehs-ex #eh-syringe-popup .action.primary:active{background:#b669e9}:root.ehs-ex #eh-syringe-popup #info{color:#ce90f1}:root.ehs-ex #eh-syringe-popup .hasNew{color:#cb8d93}:root.ehs-ex #eh-syringe-popup a{color:#ce90f1}:root.ehs-ex #eh-syringe-popup a:hover{color:#e2b9f7}:root.ehs-ex #eh-syringe-popup a:active{color:#b669e9}:root.ehs-ex #eh-syringe-popup a.minor{color:#a5a3a6}:root.ehs-ex #eh-syringe-popup a.minor:hover{color:#d2cdd4}:root.ehs-ex #eh-syringe-popup a.minor:active{color:#838185}:root.ehs-ex #eh-syringe-popup .logo svg [fill-bg]{fill:#313131}:root.ehs-ex #eh-syringe-popup .logo svg [fill-accent]{fill:#ce90f1}:root.ehs-ex #eh-syringe-popup .logo svg [fill-sa]{fill:#987ca8}:root.ehs-ex #eh-syringe-popup .logo svg [stroke-bg]{stroke:#313131}:root.ehs-ex #eh-syringe-popup .logo svg [stroke-accent]{stroke:#ce90f1}:root.ehs-ex #eh-syringe-popup .logo svg [stroke-sa]{stroke:#987ca8}:root.ehs-ex #eh-syringe-popup #settingForm{scrollbar-color:#ce90f1 transparent}:root.ehs-ex #eh-syringe-popup #settingForm .checkbox-item svg path{stroke:#ce90f1}:root.ehs-ex #eh-syringe-popup #settingForm input[type=text]{border-color:#b669e9;color:#ce90f1}:root.ehs-ex #eh-syringe-popup #settingForm input[type=text]:focus{border-color:#ce90f1}:root.ehs-ex #eh-syringe-popup #settingForm input[type=text]::-ms-input-placeholder{opacity:.5;-webkit-text-fill-color:#b669e9;color:#b669e9}:root.ehs-ex #eh-syringe-popup #settingForm input[type=text]::placeholder{opacity:.5;-webkit-text-fill-color:#b669e9;color:#b669e9}:root.ehs-ex #eh-syringe-popup #settingForm input[type=checkbox]{border:2px solid #a09da6}:root.ehs-ex #eh-syringe-popup #settingForm input[type=checkbox]:checked{border:2px solid #ce90f1}:root.ehs-ex #eh-syringe-popup #settingForm input[type=range]::-webkit-slider-runnable-track{border:1px solid #b669e9}:root.ehs-ex #eh-syringe-popup #settingForm input[type=range]::-moz-range-track{border:1px solid #b669e9}:root.ehs-ex #eh-syringe-popup #settingForm input[type=range]::-webkit-slider-thumb{background:#313131;border:2px solid #ce90f1}:root.ehs-ex #eh-syringe-popup #settingForm input[type=range]::-moz-range-thumb{background:#313131;border:2px solid #ce90f1}:root.ehs-ex #eh-syringe-popup #settingForm input[type=range]:focus::-webkit-slider-thumb{border:2px solid #ce90f1;box-shadow:0 0 7px rgba(0,0,0,.2)}:root.ehs-ex #eh-syringe-popup #settingForm input[type=range]:focus::-moz-range-thumb{border:2px solid #ce90f1;box-shadow:0 0 7px rgba(0,0,0,.2)}:root.ehs-ex #eh-syringe-popup #settingForm input[type=range]:active::-webkit-slider-thumb{background:#131313;border:2px solid #ce90f1;box-shadow:0 0 7px 1px rgba(0,0,0,.2)}:root.ehs-ex #eh-syringe-popup #settingForm input[type=range]:active::-moz-range-thumb{background:#131313;border:2px solid #ce90f1;box-shadow:0 0 7px 1px rgba(0,0,0,.2)}#eh-syringe-popup-root{font-family:sans-serif;font-size:12pt;max-width:400px;min-width:240px;overflow:hidden;padding:1px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}#eh-syringe-popup-root .hidden{display:none;visibility:hidden}#eh-syringe-popup-root .ehs-panel{display:flex;flex-direction:column;margin:0 auto}#eh-syringe-popup-root .ehs-panel .header{display:flex;line-height:1;margin:16px}#eh-syringe-popup-root .ehs-panel .header>.cushion{flex:auto}#eh-syringe-popup-root .ehs-panel .header span{color:#a5a3a6}#eh-syringe-popup-root .ehs-panel .content{flex:auto;margin:0 16px;overflow-x:hidden;overflow-y:auto;overflow:hidden auto;padding:0 2px;scrollbar-width:thin}#eh-syringe-popup-root .ehs-panel .action{box-sizing:border-box;cursor:pointer;display:block;font-size:16px;line-height:36px;margin:16px;outline:0;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;border:1px solid #ddd;border-radius:4px;font-weight:400;min-width:64px;overflow:visible;padding:0 16px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transform:translateZ(0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow .28s cubic-bezier(.4,0,.2,1);white-space:nowrap}#eh-syringe-popup-root .ehs-panel .action.primary{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}#eh-syringe-popup-root .ehs-panel .action.primary:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}#eh-syringe-popup-root .ehs-panel .action:disabled{opacity:.6}#eh-syringe-popup-root .ehs-panel .action:focus{border:1px solid #888}#eh-syringe-popup-root #ehs-main-panel{transform:scale(1);transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root #ehs-main-panel.ehs-hide{opacity:0;pointer-events:none;transform:scale(.9)}#eh-syringe-popup-root .logo-box{margin:-16px;overflow:hidden;pointer-events:none;position:relative}#eh-syringe-popup-root .logo{margin:20px 0;text-align:center;transform:scale(1) rotate(-45deg);transition:transform .28s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root .logo svg{pointer-events:none}#eh-syringe-popup-root .logo #Enema{opacity:0;transform-origin:61px 86px}#eh-syringe-popup-root .logo #Enema2{opacity:1}#eh-syringe-popup-root .logo #Enema,#eh-syringe-popup-root .logo #Enema2,#eh-syringe-popup-root .logo #PushRod{transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root .logo.prominent{transform:scale(1.6) rotate(0deg)}#eh-syringe-popup-root .logo.prominent #Enema2{opacity:0}#eh-syringe-popup-root .logo.prominent #Enema{opacity:1}#eh-syringe-popup-root .logo.prominent.injection{transform:scale(1.6) rotate(0deg) translate(-10px)}#eh-syringe-popup-root .logo.prominent.injection #Enema,#eh-syringe-popup-root .logo.prominent.injection #Enema2,#eh-syringe-popup-root .logo.prominent.injection #PushRod{transition:width .6s cubic-bezier(.4,0,.2,1),transform .6s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root #info{bottom:30px;font-size:16px;height:24px;left:0;line-height:24px;position:absolute;right:0;text-align:center}#eh-syringe-popup-root .monospace{font-family:Menlo,Consolas,Source Code Pro,Inconsolata,Monaco,Courier New,monospace}#eh-syringe-popup-root table{font-size:14px}#eh-syringe-popup-root #ehs-setting-panel{bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transform:scale(1.1);transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root #ehs-setting-panel.ehs-show{opacity:1;pointer-events:auto;transform:scale(1)}#eh-syringe-popup-root #ehs-setting-panel #settingForm{font-size:10pt;line-height:12pt}#eh-syringe-popup-root .checkbox-item{padding:4px 0}#eh-syringe-popup-root .checkbox-item label{display:block;position:relative}#eh-syringe-popup-root .checkbox-item svg{height:10px;left:3px;position:absolute;top:3px;width:10px}#eh-syringe-popup-root .checkbox-item svg path{fill:none;stroke-dasharray:1000;stroke-dashoffset:1000;stroke-linecap:round;stroke-linejoin:round;stroke-width:16px}#eh-syringe-popup-root .checkbox-item svg.checked path{stroke-dasharray:113.137,113.137;stroke-dashoffset:0;transition:all .28s cubic-bezier(.4,0,.2,1) 0s}#eh-syringe-popup-root .checkbox-item svg.checked path+path{transition:all .28s cubic-bezier(.4,0,.2,1) .28s}#eh-syringe-popup-root .checkbox-item input[type=checkbox]{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;height:16px;margin-right:2px;transition:all .28s cubic-bezier(.4,0,.2,1) 0s;vertical-align:top;width:16px}#eh-syringe-popup-root .checkbox-item input[type=checkbox]:focus{outline:none}#eh-syringe-popup-root #settingForm input[type=range]{appearance:none;-moz-appearance:none;-webkit-appearance:none;border-radius:8px;width:100%}#eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-runnable-track{border-radius:10px;box-sizing:border-box;height:6px}#eh-syringe-popup-root #settingForm input[type=range]:focus{outline:none}#eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-thumb{appearance:none;-moz-appearance:none;-webkit-appearance:none;border-radius:50%;box-sizing:border-box;height:16px;margin-top:-6px;-webkit-transition:all .28s cubic-bezier(.4,0,.2,1);transition:all .28s cubic-bezier(.4,0,.2,1);width:16px}#eh-syringe-popup-root #settingForm input[type=range]::-moz-range-track{border-radius:10px;box-sizing:border-box;height:6px}#eh-syringe-popup-root #settingForm input[type=range]::-moz-range-thumb{appearance:none;-moz-appearance:none;-webkit-appearance:none;border-radius:50%;box-sizing:border-box;height:16px;margin-top:-6px;-moz-transition:all .28s cubic-bezier(.4,0,.2,1);transition:all .28s cubic-bezier(.4,0,.2,1);width:16px}#eh-syringe-popup-root #settingForm h3 span{font-size:20pt;font-weight:400}#eh-syringe-popup-root .image-level{padding:4px}#eh-syringe-popup-root .range-title{margin:0}#eh-syringe-popup-root .range-box{margin:5px}#eh-syringe-popup-root .range-label{display:flex;justify-content:space-between}#eh-syringe-popup-root .range-label a{display:inline-block;flex:none;font-size:10pt;text-align:center;width:30px}#eh-syringe-popup-root .override-db{align-items:flex-start;display:flex;flex-direction:column;gap:4px;padding:4px}#eh-syringe-popup-root .override-db input{width:100%}`, "",{"version":3,"sources":["webpack://./index.less","webpack://./src/plugin/popup/index.less"],"names":[],"mappings":"AAAA,uBAEI,gBAAA,CACA,kBAAA,CAFA,eAAA,CAAA,kBCGJ,CDJA,8GAQQ,kBAAA,CACA,aAAA,CACA,QAAA,CACA,SCER,CDbA,oDAeQ,WCER,CDjBA,6BAmBQ,WAAA,CAEA,QAAA,CACA,WAAA,CAFA,SCGR,CDvBA,wCA2BQ,mCAAA,CADA,eCCR,CDEQ,gGAEI,8BCAZ,CD/BA,qFAqCQ,eAAA,CACA,QCFR,CDpCA,yBA0CQ,aAAA,CADA,SCDR,CDxCA,yBA6CQ,sBAAA,CAEA,4BAAA,CAAA,oBAAA,CADA,8CCDR,CDkJA,kBArIQ,kBAAA,CAFA,wBAAA,CACA,iBAAA,CAGA,qCAAA,CADA,UCPR,CD2IA,0BA/HQ,kBAAA,CACA,aCTR,CDWQ,kCAEI,kBAAA,CADA,oBAAA,CAEA,aCTZ,CDWQ,wCACI,kBCTZ,CDWQ,yCACI,kBCTZ,CD4HA,wBA9GQ,aCXR,CDyHA,0BA3GQ,aCXR,CDsHA,oBAxGQ,aCXR,CDYQ,0BACI,aCVZ,CDYQ,2BACI,aCVZ,CDYQ,0BACI,aCVZ,CDWY,gCACI,aCThB,CDWY,iCACI,aCThB,CDoGA,sCApFY,YCbZ,CDiGA,0CAjFY,YCbZ,CD8FA,sCA9EY,YCbZ,CD2FA,wCA3EY,cCbZ,CDwFA,4CAxEY,cCbZ,CDqFA,wCArEY,cCbZ,CDkFA,+BAhEQ,mCCfR,CD+EA,uDA7DY,cCfZ,CD4EA,gDAxDY,oBAAA,CADA,aCfZ,CDiBY,sDACI,oBCfhB,CDkBY,uEACI,UAAA,CACA,+BAAA,CACA,aChBhB,CDaY,6DACI,UAAA,CACA,+BAAA,CACA,aChBhB,CDgEA,oDA3CY,wBClBZ,CDmBY,4DACI,wBCjBhB,CDsBY,gFACI,wBCpBhB,CDsBY,mEACI,wBCpBhB,CDsBY,uEACI,kBAAA,CACA,wBCpBhB,CDsBY,mEACI,kBAAA,CACA,wBCpBhB,CDsBY,6EACI,wBAAA,CACA,iCCpBhB,CDsBY,yEACI,wBAAA,CACA,iCCpBhB,CDsBY,8EAEI,kBAAA,CADA,wBAAA,CAEA,qCCpBhB,CDsBY,0EAEI,kBAAA,CADA,wBAAA,CAEA,qCCpBhB,CDkCA,+BA7IQ,kBAAA,CAFA,wBAAA,CACA,iBAAA,CAGA,qCAAA,CADA,UCiHR,CD2BA,uCAvIQ,kBAAA,CACA,aC+GR,CD7GQ,+CAEI,kBAAA,CADA,oBAAA,CAEA,aC+GZ,CD7GQ,qDACI,kBC+GZ,CD7GQ,sDACI,kBC+GZ,CDYA,qCAtHQ,aC6GR,CDSA,uCAnHQ,aC6GR,CDMA,iCAhHQ,aC6GR,CD5GQ,uCACI,aC8GZ,CD5GQ,wCACI,aC8GZ,CD5GQ,uCACI,aC8GZ,CD7GY,6CACI,aC+GhB,CD7GY,8CACI,aC+GhB,CDZA,mDA5FY,YC2GZ,CDfA,uDAzFY,YC2GZ,CDlBA,mDAtFY,YC2GZ,CDrBA,qDAnFY,cC2GZ,CDxBA,yDAhFY,cC2GZ,CD3BA,qDA7EY,cC2GZ,CD9BA,4CAxEQ,mCCyGR,CDjCA,oEArEY,cCyGZ,CDpCA,6DAhEY,oBAAA,CADA,aCyGZ,CDvGY,mEACI,oBCyGhB,CDtGY,oFACI,UAAA,CACA,+BAAA,CACA,aCwGhB,CD3GY,0EACI,UAAA,CACA,+BAAA,CACA,aCwGhB,CDhDA,iEAnDY,wBCsGZ,CDrGY,yEACI,wBCuGhB,CDlGY,6FACI,wBCoGhB,CDlGY,gFACI,wBCoGhB,CDlGY,oFACI,kBAAA,CACA,wBCoGhB,CDlGY,gFACI,kBAAA,CACA,wBCoGhB,CDlGY,0FACI,wBAAA,CACA,iCCoGhB,CDlGY,sFACI,wBAAA,CACA,iCCoGhB,CDlGY,2FAEI,kBAAA,CADA,wBAAA,CAEA,qCCoGhB,CDlGY,uFAEI,kBAAA,CADA,wBAAA,CAEA,qCCoGhB,CD9EA,uBAGI,sBAAA,CACA,cAAA,CAGA,eAAA,CACA,eAAA,CAPA,eAAA,CAKA,WAAA,CAGA,iBAAA,CAJA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CAHA,kBCuFJ,CDzFA,+BAaQ,YAAA,CADA,iBCiFR,CD7FA,kCAkBQ,YAAA,CACA,qBAAA,CAFA,aCiFR,CDlGA,0CAyBY,YAAA,CAFA,aAAA,CADA,WCiFZ,CDvGA,mDA2BgB,SC+EhB,CD1GA,+CA8BgB,aC+EhB,CD7GA,2CAqCY,SAAA,CAFA,aAAA,CAGA,iBAAA,CAAA,eAAA,CAAA,oBAAA,CAFA,aAAA,CAGA,oBC6EZ,CDpHA,0CA+CY,qBAAA,CAGA,cAAA,CAPA,aAAA,CAEA,cAAA,CADA,gBAAA,CAEA,WAAA,CAKA,SAAA,CAHA,iBAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CAGA,uCAAA,CAUA,qBAAA,CAHA,iBAAA,CALA,eAAA,CAGA,cAAA,CAGA,gBAAA,CAFA,cAAA,CAFA,iBAAA,CADA,4BAAA,CAAA,oBAAA,CAMA,uBAAA,CAEA,4FAAA,CAVA,kBCsFZ,CDxEY,kDACI,gGC0EhB,CDrEY,yDACI,sGCuEhB,CDlEY,mDACI,UCoEhB,CDlEY,gDACI,qBCoEhB,CDvJA,uCA4FQ,kBAAA,CAHA,sFCkER,CD9DQ,gDAEI,SAAA,CACA,mBAAA,CAFA,mBCkEZ,CDhKA,iCAuGQ,YAAA,CAFA,eAAA,CAGA,mBAAA,CAFA,iBCgER,CDtKA,6BA4GQ,aAAA,CADA,iBAAA,CAGA,iCAAA,CADA,iDC+DR,CD5KA,iCAiHY,mBC8DZ,CD/KA,oCAoHY,SAAA,CACA,0BC8DZ,CDnLA,qCAwHY,SC8DZ,CDtLA,+GA6HY,yHC8DZ,CDzDQ,uCAOI,iCCqDZ,CD5DQ,+CAEQ,SC6DhB,CD/DQ,8CAKQ,SC6DhB,CD1DY,iDACI,kDC4DhB,CD7DY,2KAKQ,kFC6DpB,CD5MA,6BAyJQ,WAAA,CAMA,cAAA,CAHA,WAAA,CAFA,MAAA,CAGA,gBAAA,CALA,iBAAA,CAGA,OAAA,CAGA,iBCwDR,CDtNA,kCAmKQ,mFCsDR,CDzNA,6BAsKQ,cCsDR,CD5NA,0CA6KQ,QAAA,CAFA,MAAA,CAKA,SAAA,CADA,mBAAA,CALA,iBAAA,CAIA,OAAA,CAFA,KAAA,CAQA,oBAAA,CAHA,sFCsDR,CDjDQ,mDAEI,SAAA,CADA,mBAAA,CAEA,kBCmDZ,CD5OA,uDA6LY,cAAA,CACA,gBCkDZ,CDhPA,sCAkMQ,aCiDR,CDnPA,4CAsMY,aAAA,CADA,iBCkDZ,CDvPA,0CA2MY,WAAA,CAEA,QAAA,CADA,iBAAA,CAEA,OAAA,CAJA,UCoDZ,CD9PA,+CAqNgB,SAAA,CALA,qBAAA,CACA,sBAAA,CAEA,oBAAA,CACA,qBAAA,CAFA,iBCoDhB,CD9CY,uDAEQ,gCAAA,CACA,mBAAA,CACA,8CC+CpB,CDnDY,4DAOQ,gDC+CpB,CD9QA,2DAqOY,uBAAA,CAAA,oBAAA,CAAA,eAAA,CAIA,qBAAA,CAFA,WAAA,CACA,gBAAA,CAGA,8CAAA,CADA,kBAAA,CAJA,UCiDZ,CDvRA,iEA8OY,YC4CZ,CD1RA,sDAoPY,eAAA,CACA,oBAAA,CACA,uBAAA,CACA,iBAAA,CACA,UCyCZ,CDjSA,qFA4PY,kBAAA,CACA,qBAAA,CAFA,UC2CZ,CDtSA,4DAgQY,YCyCZ,CDzSA,4EAmQY,eAAA,CACA,oBAAA,CACA,uBAAA,CAKA,iBAAA,CADA,qBAAA,CAHA,WAAA,CAEA,eAAA,CAGA,mDAAA,CAAA,2CAAA,CAJA,UC6CZ,CDpTA,wEAgRY,kBAAA,CACA,qBAAA,CAFA,UC0CZ,CDzTA,wEAoRY,eAAA,CACA,oBAAA,CACA,uBAAA,CAKA,iBAAA,CADA,qBAAA,CAHA,WAAA,CAEA,eAAA,CAGA,gDAAA,CAAA,2CAAA,CAJA,UC4CZ,CDpUA,4CAkSgB,cAAA,CADA,eCuChB,CDxUA,oCAwSQ,WCmCR,CD3UA,oCA2SQ,QCmCR,CD9UA,kCA8SQ,UCmCR,CDjVA,oCAiTQ,YAAA,CACA,6BCmCR,CDrVA,sCAwTY,oBAAA,CAJA,SAAA,CACA,cAAA,CAEA,iBAAA,CADA,UCsCZ,CD5VA,oCAiUQ,sBAAA,CAHA,YAAA,CACA,qBAAA,CACA,OAAA,CAHA,WCsCR,CDnWA,0CAoUY,UCkCZ","sourcesContent":["#eh-syringe-popup-root {\n    text-align: initial;\n    font-size: initial;\n    line-height: initial;\n    input,\n    table,\n    th,\n    td {\n        background: inherit;\n        color: inherit;\n        margin: 0;\n        padding: 0;\n    }\n    th,\n    td {\n        padding: 1px;\n    }\n\n    input {\n        border: none;\n        padding: 0;\n        margin: 0;\n        min-width: 0;\n    }\n\n    input[type='text'] {\n        border-radius: 0;\n        border-bottom: solid 1px transparent;\n\n        &.invalid,\n        &:invalid {\n            border-color: #aa575e !important;\n        }\n    }\n\n    input[type='radio'],\n    input[type='checkbox'] {\n        position: initial;\n        top: initial;\n    }\n    p {\n        padding: 0;\n        margin: 0.8em 0;\n    }\n    a {\n        background: rgba(0, 0, 0, 0);\n        transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n        text-decoration: none;\n    }\n}\n\n// theme\n.theme(@background, @foreground, @shadow, @accent) {\n    @soft-accent: softlight(@accent, @background);\n\n    & {\n        border: @accent solid 1px;\n        border-radius: 6px;\n        background: @background;\n        color: @foreground;\n        box-shadow: 0 0 6px 2px @shadow;\n    }\n\n    .action {\n        background: @background;\n        color: @accent;\n\n        &.primary {\n            border-color: @accent;\n            background: @accent;\n            color: @background;\n        }\n        &.primary:hover {\n            background: softlight(@accent, @foreground);\n        }\n        &.primary:active {\n            background: softlight(@accent, @background);\n        }\n    }\n\n    #info {\n        color: @accent;\n    }\n    .hasNew {\n        color: softlight(#aa575e, @foreground);\n    }\n    a {\n        color: @accent;\n        &:hover {\n            color: softlight(@accent, @foreground);\n        }\n        &:active {\n            color: softlight(@accent, @background);\n        }\n        &.minor {\n            color: #a5a3a6;\n            &:hover {\n                color: #d2cdd4;\n            }\n            &:active {\n                color: #838185;\n            }\n        }\n    }\n    .logo svg {\n        @sa: lighten(average(@accent, @background), 10%);\n        [fill-bg] {\n            fill: @background;\n        }\n        [fill-accent] {\n            fill: @accent;\n        }\n        [fill-sa] {\n            fill: @sa;\n        }\n        [stroke-bg] {\n            stroke: @background;\n        }\n        [stroke-accent] {\n            stroke: @accent;\n        }\n        [stroke-sa] {\n            stroke: @sa;\n        }\n    }\n\n    #settingForm {\n        scrollbar-color: @accent transparent;\n\n        .checkbox-item svg path {\n            stroke: @accent;\n        }\n\n        input[type='text'] {\n            color: @accent;\n            border-color: @soft-accent;\n            &:focus {\n                border-color: @accent;\n            }\n\n            &::placeholder {\n                opacity: 0.5;\n                -webkit-text-fill-color: @soft-accent;\n                color: @soft-accent;\n            }\n        }\n\n        input[type='checkbox'] {\n            border: solid 2px #a09da6;\n            &:checked {\n                border: solid 2px @accent;\n            }\n        }\n\n        input[type='range'] {\n            &::-webkit-slider-runnable-track {\n                border: 1px @soft-accent solid;\n            }\n            &::-moz-range-track {\n                border: 1px @soft-accent solid;\n            }\n            &::-webkit-slider-thumb {\n                background: @background;\n                border: solid 2px @accent;\n            }\n            &::-moz-range-thumb {\n                background: @background;\n                border: solid 2px @accent;\n            }\n            &:focus::-webkit-slider-thumb {\n                border: solid 2px @accent;\n                box-shadow: 0 0 7px @shadow;\n            }\n            &:focus::-moz-range-thumb {\n                border: solid 2px @accent;\n                box-shadow: 0 0 7px @shadow;\n            }\n            &:active::-webkit-slider-thumb {\n                border: solid 2px @accent;\n                background: overlay(@background, @background);\n                box-shadow: 0 0 7px 1px @shadow;\n            }\n            &:active::-moz-range-thumb {\n                border: solid 2px @accent;\n                background: overlay(@background, @background);\n                box-shadow: 0 0 7px 1px @shadow;\n            }\n        }\n    }\n}\n\n#eh-syringe-popup {\n    @background: rgb(240, 240, 240);\n    @foreground: #111;\n    @shadow: rgba(0, 0, 0, 0.2);\n    @accent: #8041a6;\n    .theme(@background, @foreground, @shadow, @accent);\n}\n\n:root.ehs-ex #eh-syringe-popup {\n    @background: rgb(49, 49, 49);\n    @foreground: #eee;\n    @shadow: rgba(0, 0, 0, 0.2);\n    @accent: #ce90f1;\n    .theme(@background, @foreground, @shadow, @accent);\n}\n\n#eh-syringe-popup-root {\n    overflow: hidden;\n    white-space: nowrap;\n    font-family: sans-serif;\n    font-size: 12pt;\n    user-select: none;\n    padding: 1px;\n    max-width: 400px;\n    min-width: 240px;\n    position: relative;\n\n    .hidden {\n        visibility: hidden;\n        display: none;\n    }\n\n    .ehs-panel {\n        margin: 0 auto;\n        display: flex;\n        flex-direction: column;\n\n        .header {\n            margin: 16px;\n            line-height: 1;\n            //font-size: 16px;\n            display: flex;\n            > .cushion {\n                flex: auto;\n            }\n            span {\n                color: #a5a3a6;\n            }\n        }\n\n        .content {\n            margin: 0 16px;\n            padding: 0 2px;\n            flex: auto;\n            overflow: hidden auto;\n            scrollbar-width: thin;\n        }\n\n        .action {\n            display: block;\n            line-height: 36px;\n            font-size: 16px;\n            margin: 16px;\n            box-sizing: border-box;\n            position: relative;\n            user-select: none;\n            cursor: pointer;\n            outline: 0;\n            -webkit-tap-highlight-color: transparent;\n            white-space: nowrap;\n            font-weight: normal;\n            text-decoration: none;\n            text-align: center;\n            min-width: 64px;\n            padding: 0 16px;\n            border-radius: 4px;\n            overflow: visible;\n            transform: translate3d(0, 0, 0);\n            border: 1px #ddd solid;\n            transition:\n                background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),\n                box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n\n            &.primary {\n                box-shadow:\n                    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n                    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n            }\n            &.primary:active {\n                box-shadow:\n                    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n            }\n            &:disabled {\n                opacity: 0.6;\n            }\n            &:focus {\n                border: 1px #888 solid;\n            }\n        }\n    }\n\n    #ehs-main-panel {\n        transition:\n            opacity 280ms cubic-bezier(0.4, 0, 0.2, 1),\n            transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        transform: scale(1);\n        &.ehs-hide {\n            transform: scale(0.9);\n            opacity: 0;\n            pointer-events: none;\n        }\n    }\n\n    .logo-box {\n        overflow: hidden;\n        position: relative;\n        margin: -16px;\n        pointer-events: none;\n    }\n    .logo {\n        text-align: center;\n        margin: 20px 0;\n        transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        transform: scale(1) rotate(-45deg);\n\n        svg {\n            pointer-events: none;\n        }\n        #Enema {\n            opacity: 0;\n            transform-origin: 61px 86px;\n        }\n        #Enema2 {\n            opacity: 1;\n        }\n        #Enema,\n        #Enema2,\n        #PushRod {\n            transition:\n                width 280ms cubic-bezier(0.4, 0, 0.2, 1),\n                opacity 280ms cubic-bezier(0.4, 0, 0.2, 1),\n                transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        }\n        &.prominent {\n            #Enema2 {\n                opacity: 0;\n            }\n            #Enema {\n                opacity: 1;\n            }\n            transform: scale(1.6) rotate(0deg);\n            &.injection {\n                transform: scale(1.6) rotate(0deg) translate(-10px, 0);\n                #Enema,\n                #Enema2,\n                #PushRod {\n                    transition:\n                        width 600ms cubic-bezier(0.4, 0, 0.2, 1),\n                        transform 600ms cubic-bezier(0.4, 0, 0.2, 1);\n                }\n            }\n        }\n    }\n\n    #info {\n        position: absolute;\n        bottom: 30px;\n        left: 0;\n        right: 0;\n        height: 24px;\n        line-height: 24px;\n        text-align: center;\n        font-size: 16px;\n    }\n\n    .monospace {\n        font-family: Menlo, Consolas, 'Source Code Pro', Inconsolata, Monaco, 'Courier New', monospace;\n    }\n    table {\n        font-size: 14px;\n    }\n\n    #ehs-setting-panel {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        pointer-events: none;\n        opacity: 0;\n        transition:\n            opacity 280ms cubic-bezier(0.4, 0, 0.2, 1),\n            transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        transform: scale(1.1);\n\n        &.ehs-show {\n            pointer-events: auto;\n            opacity: 1;\n            transform: scale(1);\n        }\n\n        #settingForm {\n            font-size: 10pt;\n            line-height: 12pt;\n        }\n    }\n    .checkbox-item {\n        padding: 4px 0;\n\n        label {\n            position: relative;\n            display: block;\n        }\n\n        svg {\n            width: 10px;\n            height: 10px;\n            position: absolute;\n            left: 3px;\n            top: 3px;\n            path {\n                stroke-dasharray: 1000;\n                stroke-dashoffset: 1000;\n                stroke-width: 16px;\n                stroke-linecap: round;\n                stroke-linejoin: round;\n                fill: none;\n            }\n\n            &.checked {\n                path {\n                    stroke-dasharray: 113.137, 113.137;\n                    stroke-dashoffset: 0;\n                    transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n                }\n                path + path {\n                    transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 280ms;\n                }\n            }\n        }\n\n        input[type='checkbox'] {\n            appearance: none;\n            width: 16px;\n            height: 16px;\n            margin-right: 2px;\n            box-sizing: border-box;\n            vertical-align: top;\n            transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n        }\n        input[type='checkbox']:focus {\n            outline: none;\n        }\n    }\n\n    #settingForm {\n        input[type='range'] {\n            appearance: none;\n            -moz-appearance: none;\n            -webkit-appearance: none;\n            border-radius: 8px;\n            width: 100%;\n        }\n        input[type='range']::-webkit-slider-runnable-track {\n            height: 6px;\n            border-radius: 10px;\n            box-sizing: border-box;\n        }\n        input[type='range']:focus {\n            outline: none;\n        }\n        input[type='range']::-webkit-slider-thumb {\n            appearance: none;\n            -moz-appearance: none;\n            -webkit-appearance: none;\n            height: 16px;\n            width: 16px;\n            margin-top: -6px;\n            box-sizing: border-box;\n            border-radius: 50%;\n            transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        }\n\n        input[type='range']::-moz-range-track {\n            height: 6px;\n            border-radius: 10px;\n            box-sizing: border-box;\n        }\n        input[type='range']::-moz-range-thumb {\n            appearance: none;\n            -moz-appearance: none;\n            -webkit-appearance: none;\n            height: 16px;\n            width: 16px;\n            margin-top: -6px;\n            box-sizing: border-box;\n            border-radius: 50%;\n            transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        }\n\n        h3 {\n            span {\n                font-weight: 400;\n                font-size: 20pt;\n            }\n        }\n    }\n\n    .image-level {\n        padding: 4px;\n    }\n    .range-title {\n        margin: 0;\n    }\n    .range-box {\n        margin: 5px;\n    }\n    .range-label {\n        display: flex;\n        justify-content: space-between;\n        a {\n            flex: none;\n            font-size: 10pt;\n            width: 30px;\n            text-align: center;\n            display: inline-block;\n        }\n    }\n\n    .override-db {\n        padding: 4px;\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n        align-items: flex-start;\n\n        input {\n            width: 100%;\n        }\n    }\n}\n","#eh-syringe-popup-root {\n  text-align: initial;\n  font-size: initial;\n  line-height: initial;\n}\n#eh-syringe-popup-root input,\n#eh-syringe-popup-root table,\n#eh-syringe-popup-root th,\n#eh-syringe-popup-root td {\n  background: inherit;\n  color: inherit;\n  margin: 0;\n  padding: 0;\n}\n#eh-syringe-popup-root th,\n#eh-syringe-popup-root td {\n  padding: 1px;\n}\n#eh-syringe-popup-root input {\n  border: none;\n  padding: 0;\n  margin: 0;\n  min-width: 0;\n}\n#eh-syringe-popup-root input[type='text'] {\n  border-radius: 0;\n  border-bottom: solid 1px transparent;\n}\n#eh-syringe-popup-root input[type='text'].invalid,\n#eh-syringe-popup-root input[type='text']:invalid {\n  border-color: #aa575e !important;\n}\n#eh-syringe-popup-root input[type='radio'],\n#eh-syringe-popup-root input[type='checkbox'] {\n  position: initial;\n  top: initial;\n}\n#eh-syringe-popup-root p {\n  padding: 0;\n  margin: 0.8em 0;\n}\n#eh-syringe-popup-root a {\n  background: rgba(0, 0, 0, 0);\n  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  text-decoration: none;\n}\n#eh-syringe-popup {\n  border: #8041a6 solid 1px;\n  border-radius: 6px;\n  background: #f0f0f0;\n  color: #111;\n  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);\n}\n#eh-syringe-popup .action {\n  background: #f0f0f0;\n  color: #8041a6;\n}\n#eh-syringe-popup .action.primary {\n  border-color: #8041a6;\n  background: #8041a6;\n  color: #f0f0f0;\n}\n#eh-syringe-popup .action.primary:hover {\n  background: #491774;\n}\n#eh-syringe-popup .action.primary:active {\n  background: #ae79c9;\n}\n#eh-syringe-popup #info {\n  color: #8041a6;\n}\n#eh-syringe-popup .hasNew {\n  color: #79252b;\n}\n#eh-syringe-popup a {\n  color: #8041a6;\n}\n#eh-syringe-popup a:hover {\n  color: #491774;\n}\n#eh-syringe-popup a:active {\n  color: #ae79c9;\n}\n#eh-syringe-popup a.minor {\n  color: #a5a3a6;\n}\n#eh-syringe-popup a.minor:hover {\n  color: #d2cdd4;\n}\n#eh-syringe-popup a.minor:active {\n  color: #838185;\n}\n#eh-syringe-popup .logo svg [fill-bg] {\n  fill: #f0f0f0;\n}\n#eh-syringe-popup .logo svg [fill-accent] {\n  fill: #8041a6;\n}\n#eh-syringe-popup .logo svg [fill-sa] {\n  fill: #cfbadc;\n}\n#eh-syringe-popup .logo svg [stroke-bg] {\n  stroke: #f0f0f0;\n}\n#eh-syringe-popup .logo svg [stroke-accent] {\n  stroke: #8041a6;\n}\n#eh-syringe-popup .logo svg [stroke-sa] {\n  stroke: #cfbadc;\n}\n#eh-syringe-popup #settingForm {\n  scrollbar-color: #8041a6 transparent;\n}\n#eh-syringe-popup #settingForm .checkbox-item svg path {\n  stroke: #8041a6;\n}\n#eh-syringe-popup #settingForm input[type='text'] {\n  color: #8041a6;\n  border-color: #ae79c9;\n}\n#eh-syringe-popup #settingForm input[type='text']:focus {\n  border-color: #8041a6;\n}\n#eh-syringe-popup #settingForm input[type='text']::placeholder {\n  opacity: 0.5;\n  -webkit-text-fill-color: #ae79c9;\n  color: #ae79c9;\n}\n#eh-syringe-popup #settingForm input[type='checkbox'] {\n  border: solid 2px #a09da6;\n}\n#eh-syringe-popup #settingForm input[type='checkbox']:checked {\n  border: solid 2px #8041a6;\n}\n#eh-syringe-popup #settingForm input[type='range']::-webkit-slider-runnable-track {\n  border: 1px #ae79c9 solid;\n}\n#eh-syringe-popup #settingForm input[type='range']::-moz-range-track {\n  border: 1px #ae79c9 solid;\n}\n#eh-syringe-popup #settingForm input[type='range']::-webkit-slider-thumb {\n  background: #f0f0f0;\n  border: solid 2px #8041a6;\n}\n#eh-syringe-popup #settingForm input[type='range']::-moz-range-thumb {\n  background: #f0f0f0;\n  border: solid 2px #8041a6;\n}\n#eh-syringe-popup #settingForm input[type='range']:focus::-webkit-slider-thumb {\n  border: solid 2px #8041a6;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);\n}\n#eh-syringe-popup #settingForm input[type='range']:focus::-moz-range-thumb {\n  border: solid 2px #8041a6;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);\n}\n#eh-syringe-popup #settingForm input[type='range']:active::-webkit-slider-thumb {\n  border: solid 2px #8041a6;\n  background: #fdfdfd;\n  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.2);\n}\n#eh-syringe-popup #settingForm input[type='range']:active::-moz-range-thumb {\n  border: solid 2px #8041a6;\n  background: #fdfdfd;\n  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.2);\n}\n:root.ehs-ex #eh-syringe-popup {\n  border: #ce90f1 solid 1px;\n  border-radius: 6px;\n  background: #313131;\n  color: #eee;\n  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);\n}\n:root.ehs-ex #eh-syringe-popup .action {\n  background: #313131;\n  color: #ce90f1;\n}\n:root.ehs-ex #eh-syringe-popup .action.primary {\n  border-color: #ce90f1;\n  background: #ce90f1;\n  color: #313131;\n}\n:root.ehs-ex #eh-syringe-popup .action.primary:hover {\n  background: #e2b9f7;\n}\n:root.ehs-ex #eh-syringe-popup .action.primary:active {\n  background: #b669e9;\n}\n:root.ehs-ex #eh-syringe-popup #info {\n  color: #ce90f1;\n}\n:root.ehs-ex #eh-syringe-popup .hasNew {\n  color: #cb8d93;\n}\n:root.ehs-ex #eh-syringe-popup a {\n  color: #ce90f1;\n}\n:root.ehs-ex #eh-syringe-popup a:hover {\n  color: #e2b9f7;\n}\n:root.ehs-ex #eh-syringe-popup a:active {\n  color: #b669e9;\n}\n:root.ehs-ex #eh-syringe-popup a.minor {\n  color: #a5a3a6;\n}\n:root.ehs-ex #eh-syringe-popup a.minor:hover {\n  color: #d2cdd4;\n}\n:root.ehs-ex #eh-syringe-popup a.minor:active {\n  color: #838185;\n}\n:root.ehs-ex #eh-syringe-popup .logo svg [fill-bg] {\n  fill: #313131;\n}\n:root.ehs-ex #eh-syringe-popup .logo svg [fill-accent] {\n  fill: #ce90f1;\n}\n:root.ehs-ex #eh-syringe-popup .logo svg [fill-sa] {\n  fill: #987ca8;\n}\n:root.ehs-ex #eh-syringe-popup .logo svg [stroke-bg] {\n  stroke: #313131;\n}\n:root.ehs-ex #eh-syringe-popup .logo svg [stroke-accent] {\n  stroke: #ce90f1;\n}\n:root.ehs-ex #eh-syringe-popup .logo svg [stroke-sa] {\n  stroke: #987ca8;\n}\n:root.ehs-ex #eh-syringe-popup #settingForm {\n  scrollbar-color: #ce90f1 transparent;\n}\n:root.ehs-ex #eh-syringe-popup #settingForm .checkbox-item svg path {\n  stroke: #ce90f1;\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='text'] {\n  color: #ce90f1;\n  border-color: #b669e9;\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='text']:focus {\n  border-color: #ce90f1;\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='text']::placeholder {\n  opacity: 0.5;\n  -webkit-text-fill-color: #b669e9;\n  color: #b669e9;\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='checkbox'] {\n  border: solid 2px #a09da6;\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='checkbox']:checked {\n  border: solid 2px #ce90f1;\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='range']::-webkit-slider-runnable-track {\n  border: 1px #b669e9 solid;\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='range']::-moz-range-track {\n  border: 1px #b669e9 solid;\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='range']::-webkit-slider-thumb {\n  background: #313131;\n  border: solid 2px #ce90f1;\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='range']::-moz-range-thumb {\n  background: #313131;\n  border: solid 2px #ce90f1;\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='range']:focus::-webkit-slider-thumb {\n  border: solid 2px #ce90f1;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='range']:focus::-moz-range-thumb {\n  border: solid 2px #ce90f1;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='range']:active::-webkit-slider-thumb {\n  border: solid 2px #ce90f1;\n  background: #131313;\n  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.2);\n}\n:root.ehs-ex #eh-syringe-popup #settingForm input[type='range']:active::-moz-range-thumb {\n  border: solid 2px #ce90f1;\n  background: #131313;\n  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.2);\n}\n#eh-syringe-popup-root {\n  overflow: hidden;\n  white-space: nowrap;\n  font-family: sans-serif;\n  font-size: 12pt;\n  user-select: none;\n  padding: 1px;\n  max-width: 400px;\n  min-width: 240px;\n  position: relative;\n}\n#eh-syringe-popup-root .hidden {\n  visibility: hidden;\n  display: none;\n}\n#eh-syringe-popup-root .ehs-panel {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n#eh-syringe-popup-root .ehs-panel .header {\n  margin: 16px;\n  line-height: 1;\n  display: flex;\n}\n#eh-syringe-popup-root .ehs-panel .header > .cushion {\n  flex: auto;\n}\n#eh-syringe-popup-root .ehs-panel .header span {\n  color: #a5a3a6;\n}\n#eh-syringe-popup-root .ehs-panel .content {\n  margin: 0 16px;\n  padding: 0 2px;\n  flex: auto;\n  overflow: hidden auto;\n  scrollbar-width: thin;\n}\n#eh-syringe-popup-root .ehs-panel .action {\n  display: block;\n  line-height: 36px;\n  font-size: 16px;\n  margin: 16px;\n  box-sizing: border-box;\n  position: relative;\n  user-select: none;\n  cursor: pointer;\n  outline: 0;\n  -webkit-tap-highlight-color: transparent;\n  white-space: nowrap;\n  font-weight: normal;\n  text-decoration: none;\n  text-align: center;\n  min-width: 64px;\n  padding: 0 16px;\n  border-radius: 4px;\n  overflow: visible;\n  transform: translate3d(0, 0, 0);\n  border: 1px #ddd solid;\n  transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n#eh-syringe-popup-root .ehs-panel .action.primary {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n#eh-syringe-popup-root .ehs-panel .action.primary:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n#eh-syringe-popup-root .ehs-panel .action:disabled {\n  opacity: 0.6;\n}\n#eh-syringe-popup-root .ehs-panel .action:focus {\n  border: 1px #888 solid;\n}\n#eh-syringe-popup-root #ehs-main-panel {\n  transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: scale(1);\n}\n#eh-syringe-popup-root #ehs-main-panel.ehs-hide {\n  transform: scale(0.9);\n  opacity: 0;\n  pointer-events: none;\n}\n#eh-syringe-popup-root .logo-box {\n  overflow: hidden;\n  position: relative;\n  margin: -16px;\n  pointer-events: none;\n}\n#eh-syringe-popup-root .logo {\n  text-align: center;\n  margin: 20px 0;\n  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: scale(1) rotate(-45deg);\n}\n#eh-syringe-popup-root .logo svg {\n  pointer-events: none;\n}\n#eh-syringe-popup-root .logo #Enema {\n  opacity: 0;\n  transform-origin: 61px 86px;\n}\n#eh-syringe-popup-root .logo #Enema2 {\n  opacity: 1;\n}\n#eh-syringe-popup-root .logo #Enema,\n#eh-syringe-popup-root .logo #Enema2,\n#eh-syringe-popup-root .logo #PushRod {\n  transition: width 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n#eh-syringe-popup-root .logo.prominent {\n  transform: scale(1.6) rotate(0deg);\n}\n#eh-syringe-popup-root .logo.prominent #Enema2 {\n  opacity: 0;\n}\n#eh-syringe-popup-root .logo.prominent #Enema {\n  opacity: 1;\n}\n#eh-syringe-popup-root .logo.prominent.injection {\n  transform: scale(1.6) rotate(0deg) translate(-10px, 0);\n}\n#eh-syringe-popup-root .logo.prominent.injection #Enema,\n#eh-syringe-popup-root .logo.prominent.injection #Enema2,\n#eh-syringe-popup-root .logo.prominent.injection #PushRod {\n  transition: width 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n#eh-syringe-popup-root #info {\n  position: absolute;\n  bottom: 30px;\n  left: 0;\n  right: 0;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  font-size: 16px;\n}\n#eh-syringe-popup-root .monospace {\n  font-family: Menlo, Consolas, 'Source Code Pro', Inconsolata, Monaco, 'Courier New', monospace;\n}\n#eh-syringe-popup-root table {\n  font-size: 14px;\n}\n#eh-syringe-popup-root #ehs-setting-panel {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transform: scale(1.1);\n}\n#eh-syringe-popup-root #ehs-setting-panel.ehs-show {\n  pointer-events: auto;\n  opacity: 1;\n  transform: scale(1);\n}\n#eh-syringe-popup-root #ehs-setting-panel #settingForm {\n  font-size: 10pt;\n  line-height: 12pt;\n}\n#eh-syringe-popup-root .checkbox-item {\n  padding: 4px 0;\n}\n#eh-syringe-popup-root .checkbox-item label {\n  position: relative;\n  display: block;\n}\n#eh-syringe-popup-root .checkbox-item svg {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  left: 3px;\n  top: 3px;\n}\n#eh-syringe-popup-root .checkbox-item svg path {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 1000;\n  stroke-width: 16px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n#eh-syringe-popup-root .checkbox-item svg.checked path {\n  stroke-dasharray: 113.137, 113.137;\n  stroke-dashoffset: 0;\n  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n}\n#eh-syringe-popup-root .checkbox-item svg.checked path + path {\n  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 280ms;\n}\n#eh-syringe-popup-root .checkbox-item input[type='checkbox'] {\n  appearance: none;\n  width: 16px;\n  height: 16px;\n  margin-right: 2px;\n  box-sizing: border-box;\n  vertical-align: top;\n  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n}\n#eh-syringe-popup-root .checkbox-item input[type='checkbox']:focus {\n  outline: none;\n}\n#eh-syringe-popup-root #settingForm input[type='range'] {\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border-radius: 8px;\n  width: 100%;\n}\n#eh-syringe-popup-root #settingForm input[type='range']::-webkit-slider-runnable-track {\n  height: 6px;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n#eh-syringe-popup-root #settingForm input[type='range']:focus {\n  outline: none;\n}\n#eh-syringe-popup-root #settingForm input[type='range']::-webkit-slider-thumb {\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  height: 16px;\n  width: 16px;\n  margin-top: -6px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n#eh-syringe-popup-root #settingForm input[type='range']::-moz-range-track {\n  height: 6px;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n#eh-syringe-popup-root #settingForm input[type='range']::-moz-range-thumb {\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  height: 16px;\n  width: 16px;\n  margin-top: -6px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n#eh-syringe-popup-root #settingForm h3 span {\n  font-weight: 400;\n  font-size: 20pt;\n}\n#eh-syringe-popup-root .image-level {\n  padding: 4px;\n}\n#eh-syringe-popup-root .range-title {\n  margin: 0;\n}\n#eh-syringe-popup-root .range-box {\n  margin: 5px;\n}\n#eh-syringe-popup-root .range-label {\n  display: flex;\n  justify-content: space-between;\n}\n#eh-syringe-popup-root .range-label a {\n  flex: none;\n  font-size: 10pt;\n  width: 30px;\n  text-align: center;\n  display: inline-block;\n}\n#eh-syringe-popup-root .override-db {\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-start;\n}\n#eh-syringe-popup-root .override-db input {\n  width: 100%;\n}\n/*# sourceMappingURL=index.css.map */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 85588:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55315);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82145);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{--csstools-color-scheme--light:initial;color-scheme:light}:root.ehs-ex{--csstools-color-scheme--light: ;color-scheme:dark}.ehs-eh:root button[ehs-input],.ehs-ex:root button[ehs-input]{background-color:#edeada;border:2px solid #b5a4a4;border-radius:3px;color:#5c0d12;font-size:9pt;line-height:20px;margin:0 2px;min-height:26px;outline:none;padding:1px 5px 2px;white-space:pre}.ehs-eh:root button[ehs-input]:disabled,.ehs-ex:root button[ehs-input]:disabled{color:#c2a8a4;-webkit-text-fill-color:#c2a8a4;opacity:1}.ehs-eh:root button[ehs-input]:enabled:focus,.ehs-eh:root button[ehs-input]:enabled:hover,.ehs-ex:root button[ehs-input]:enabled:focus,.ehs-ex:root button[ehs-input]:enabled:hover{background-color:#f3f0e0!important;border-color:#977273!important}.ehs-eh:root button[ehs-input]:enabled:active,.ehs-ex:root button[ehs-input]:enabled:active{background:radial-gradient(#d7d3c2,#f3f0e0)!important;border-color:#5c0d12!important}:root.ehs-ex button[ehs-input]{background-color:#34353b;border-color:#8d8d8d;color:#f1f1f1}:root.ehs-ex button[ehs-input]:enabled:focus,:root.ehs-ex button[ehs-input]:enabled:hover{background-color:#43464e!important;border-color:#aeaeae!important}:root.ehs-ex button[ehs-input]:enabled:active{background:radial-gradient(#1a1a1a,#43464e)!important;border-color:#c3c3c3!important}:root.ehs-ex button[ehs-input]:disabled{color:#8a8a8a;-webkit-text-fill-color:#8a8a8a}:root.ehs-hide-icon [ehs-emoji],:root.ehs-hide-icon [ehs-icon],[hidden]{display:none}body div#gright{z-index:3}body #expunge_new button[ehs-input][type=submit]{margin:6px auto 2px}body #gleft{pointer-events:none}body #gj{margin:3px 4px}body #gmid{height:auto}body #tagmenu_act,body #tagmenu_new{width:calc(100% - 30px)!important}body #tagmenu_new>form{display:flex}body #tagmenu_new>form #newtagfield{flex:auto}body #gd5{display:flex;flex-flow:column}body #gd5:has(>:nth-child(10)) .g2:not(:has(+.gsp)){padding-bottom:18px}body #gd5:has(>:nth-child(10)) .g3:not(:has(+.gsp)){padding-bottom:18px}body #gd5:has(>:nth-child(10)) .gsp{padding-top:0}body #gd5:has(>:nth-child(11)) .g2:not(:has(+.gsp)){padding-bottom:16px}body #gd5:has(>:nth-child(11)) .g3:not(:has(+.gsp)){padding-bottom:16px}body #gd5:has(>:nth-child(12)) .g2:not(:has(+.gsp)){padding-bottom:12px}body #gd5:has(>:nth-child(12)) .g3:not(:has(+.gsp)){padding-bottom:12px}body #gd5:has(>:nth-child(13)) .g2:not(:has(+.gsp)){padding-bottom:8px}body #gd5:has(>:nth-child(13)) .g3:not(:has(+.gsp)){padding-bottom:8px}body #gd5:has(>:nth-child(14)) .g2:not(:has(+.gsp)){padding-bottom:6px}body #gd5:has(>:nth-child(14)) .g3:not(:has(+.gsp)){padding-bottom:6px}body #gd5:has(>:nth-child(15)) .g2:not(:has(+.gsp)){padding-bottom:4px}body #gd5:has(>:nth-child(15)) .g3:not(:has(+.gsp)){padding-bottom:4px}body .g2,body .g3{padding-bottom:20px}body .gsp{padding-top:10px}body td.tc{white-space:nowrap}body div.gt,body div.gtl,body div.gtw{line-height:16px;white-space:nowrap}body div.c6{text-align:left}[ehs-emoji],[ehs-icon]{margin:-.25em 1px!important;max-height:1.25em!important;max-width:2em!important}[ehs-icon]{vertical-align:middle}.ehs-new-tag-complete-translate{display:block;font-weight:bolder;margin-top:4px;opacity:.8;pointer-events:none}.ehs-new-tag-complete-translate:empty{display:none}:root.ehs-wiki.ehs-translate-tag [ehs-tag][lang|=zh-hans]:after{content:" (" attr(ehs-tag) ")";font-size:80%}`, "",{"version":3,"sources":["webpack://./index.less","webpack://./src/plugin/syringe/index.less"],"names":[],"mappings":"AAEA,MACI,sCAAA,CAAA,kBCDJ,CDEI,aACI,gCAAA,CAAA,iBCAR,CDKI,8DASI,wBAAA,CAJA,wBAAA,CACA,iBAAA,CAEA,aAAA,CADA,aAAA,CALA,gBAAA,CAEA,YAAA,CAHA,eAAA,CASA,YAAA,CAPA,mBAAA,CAQA,eCHR,CDKQ,gFACI,aAAA,CACA,+BAAA,CACA,SCHZ,CDMQ,oLAEI,kCAAA,CACA,8BCJZ,CDOQ,4FACI,qDAAA,CACA,8BCLZ,CDSI,+BAGI,wBAAA,CAFA,oBAAA,CACA,aCNR,CDSQ,0FAEI,kCAAA,CACA,8BCPZ,CDUQ,8CACI,qDAAA,CACA,8BCRZ,CDWQ,wCACI,aAAA,CACA,+BCTZ,CDkBA,wEAGQ,YCdR,CDkBA,gBAEQ,SCjBR,CDeA,iDAOQ,mBCnBR,CDYA,YAYQ,mBCrBR,CDSA,SAiBQ,cCvBR,CDMA,WAsBQ,WCzBR,CDGA,oCA4BQ,iCC3BR,CDDA,uBAgCQ,YC5BR,CDJA,oCAkCY,SC3BZ,CDPA,UAwCQ,YAAA,CACA,gBC9BR,CDiCQ,oDAEQ,mBChChB,CD8BQ,oDAEQ,mBChChB,CD8BQ,oCAKQ,aChChB,CDmCQ,oDAEQ,mBClChB,CDgCQ,oDAEQ,mBClChB,CDqCQ,oDAEQ,mBCpChB,CDkCQ,oDAEQ,mBCpChB,CDuCQ,oDAEQ,kBCtChB,CDoCQ,oDAEQ,kBCtChB,CDyCQ,oDAEQ,kBCxChB,CDsCQ,oDAEQ,kBCxChB,CD2CQ,oDAEQ,kBC1ChB,CDwCQ,oDAEQ,kBC1ChB,CDhCA,kBAgFQ,mBC5CR,CDpCA,UAmFQ,gBC5CR,CDvCA,WAwFQ,kBC9CR,CD1CA,sCA+FQ,gBAAA,CACA,kBChDR,CDhDA,YAqGQ,eClDR,CDsDA,uBAII,2BAAA,CAFA,2BAAA,CACA,uBCnDJ,CDuDA,WACI,qBCrDJ,CDwDA,gCACI,aAAA,CAMA,kBAAA,CADA,cAAA,CAEA,UAAA,CACA,mBC1DJ,CDmDI,sCACI,YCjDR,CD8DQ,gEACI,8BAAA,CACA,aC5DZ","sourcesContent":["// 全局注入样式\n\n:root {\n    color-scheme: light;\n    &.ehs-ex {\n        color-scheme: dark;\n    }\n}\n\nbutton[ehs-input] {\n    :is(:root.ehs-eh, :root.ehs-ex) & {\n        min-height: 26px;\n        line-height: 20px;\n        padding: 1px 5px 2px;\n        margin: 0 2px;\n        border: 2px solid #b5a4a4;\n        border-radius: 3px;\n        font-size: 9pt;\n        color: #5c0d12;\n        background-color: #edeada;\n        outline: none;\n        white-space: pre;\n\n        &:disabled {\n            color: #c2a8a4;\n            -webkit-text-fill-color: #c2a8a4;\n            opacity: 1;\n        }\n\n        &:enabled:hover,\n        &:enabled:focus {\n            background-color: #f3f0e0 !important;\n            border-color: #977273 !important;\n        }\n\n        &:enabled:active {\n            background: radial-gradient(#d7d3c2, #f3f0e0) !important;\n            border-color: #5c0d12 !important;\n        }\n    }\n\n    :root.ehs-ex & {\n        border-color: #8d8d8d;\n        color: #f1f1f1;\n        background-color: #34353b;\n\n        &:enabled:hover,\n        &:enabled:focus {\n            background-color: #43464e !important;\n            border-color: #aeaeae !important;\n        }\n\n        &:enabled:active {\n            background: radial-gradient(#1a1a1a, #43464e) !important;\n            border-color: #c3c3c3 !important;\n        }\n\n        &:disabled {\n            color: #8a8a8a;\n            -webkit-text-fill-color: #8a8a8a;\n        }\n    }\n}\n\n[hidden] {\n    display: none;\n}\n\n:root.ehs-hide-icon {\n    [ehs-icon],\n    [ehs-emoji] {\n        display: none;\n    }\n}\n\nbody {\n    div#gright {\n        z-index: 3;\n    }\n\n    // 提交删除申请按钮\n    #expunge_new button[ehs-input][type='submit'] {\n        margin: 6px auto 2px;\n    }\n\n    // 题图\n    #gleft {\n        pointer-events: none;\n    }\n\n    // 日文标题\n    #gj {\n        margin: 3px 4px;\n    }\n\n    // 信息框\n    #gmid {\n        height: auto;\n    }\n\n    // 标签输入\n    #tagmenu_act,\n    #tagmenu_new {\n        width: calc(100% - 30px) !important; // 留下右侧 loading 空间\n    }\n\n    #tagmenu_new > form {\n        display: flex;\n        #newtagfield {\n            flex: auto;\n        }\n    }\n\n    // 信息框右侧菜单\n    #gd5 {\n        display: flex;\n        flex-flow: column;\n\n        // 当其他脚本在这里插入过多链接时。修改布局\n        &:has(> :nth-child(10)) {\n            :is(.g2, .g3):not(:has(+ .gsp)) {\n                padding-bottom: 18px;\n            }\n            .gsp {\n                padding-top: 0;\n            }\n        }\n        &:has(> :nth-child(11)) {\n            :is(.g2, .g3):not(:has(+ .gsp)) {\n                padding-bottom: 16px;\n            }\n        }\n        &:has(> :nth-child(12)) {\n            :is(.g2, .g3):not(:has(+ .gsp)) {\n                padding-bottom: 12px;\n            }\n        }\n        &:has(> :nth-child(13)) {\n            :is(.g2, .g3):not(:has(+ .gsp)) {\n                padding-bottom: 8px;\n            }\n        }\n        &:has(> :nth-child(14)) {\n            :is(.g2, .g3):not(:has(+ .gsp)) {\n                padding-bottom: 6px;\n            }\n        }\n        &:has(> :nth-child(15)) {\n            :is(.g2, .g3):not(:has(+ .gsp)) {\n                padding-bottom: 4px;\n            }\n        }\n    }\n    .g2,\n    .g3 {\n        padding-bottom: 20px;\n    }\n    .gsp {\n        padding-top: 10px;\n    }\n\n    // 标签组名\n    td.tc {\n        white-space: nowrap;\n    }\n\n    // 标签\n    div.gtl,\n    div.gtw,\n    div.gt {\n        line-height: 16px;\n        white-space: nowrap;\n    }\n\n    // 评论内容\n    div.c6 {\n        text-align: left;\n    }\n}\n\n[ehs-icon],\n[ehs-emoji] {\n    max-height: 1.25em !important;\n    max-width: 2em !important;\n    margin: -0.25em 1px !important;\n}\n\n[ehs-icon] {\n    vertical-align: middle;\n}\n\n.ehs-new-tag-complete-translate {\n    display: block;\n    &:empty {\n        display: none;\n    }\n\n    margin-top: 4px;\n    font-weight: bolder;\n    opacity: 0.8;\n    pointer-events: none;\n}\n\n// wiki 样式\n\n:root.ehs-wiki {\n    &.ehs-translate-tag [ehs-tag][lang|='zh-hans'] {\n        &::after {\n            content: ' (' attr(ehs-tag) ')';\n            font-size: 80%;\n        }\n    }\n}\n",":root {\n  color-scheme: light;\n}\n:root.ehs-ex {\n  color-scheme: dark;\n}\n:is(:root.ehs-eh, :root.ehs-ex) button[ehs-input] {\n  min-height: 26px;\n  line-height: 20px;\n  padding: 1px 5px 2px;\n  margin: 0 2px;\n  border: 2px solid #b5a4a4;\n  border-radius: 3px;\n  font-size: 9pt;\n  color: #5c0d12;\n  background-color: #edeada;\n  outline: none;\n  white-space: pre;\n}\n:is(:root.ehs-eh, :root.ehs-ex) button[ehs-input]:disabled {\n  color: #c2a8a4;\n  -webkit-text-fill-color: #c2a8a4;\n  opacity: 1;\n}\n:is(:root.ehs-eh, :root.ehs-ex) button[ehs-input]:enabled:hover,\n:is(:root.ehs-eh, :root.ehs-ex) button[ehs-input]:enabled:focus {\n  background-color: #f3f0e0 !important;\n  border-color: #977273 !important;\n}\n:is(:root.ehs-eh, :root.ehs-ex) button[ehs-input]:enabled:active {\n  background: radial-gradient(#d7d3c2, #f3f0e0) !important;\n  border-color: #5c0d12 !important;\n}\n:root.ehs-ex button[ehs-input] {\n  border-color: #8d8d8d;\n  color: #f1f1f1;\n  background-color: #34353b;\n}\n:root.ehs-ex button[ehs-input]:enabled:hover,\n:root.ehs-ex button[ehs-input]:enabled:focus {\n  background-color: #43464e !important;\n  border-color: #aeaeae !important;\n}\n:root.ehs-ex button[ehs-input]:enabled:active {\n  background: radial-gradient(#1a1a1a, #43464e) !important;\n  border-color: #c3c3c3 !important;\n}\n:root.ehs-ex button[ehs-input]:disabled {\n  color: #8a8a8a;\n  -webkit-text-fill-color: #8a8a8a;\n}\n[hidden] {\n  display: none;\n}\n:root.ehs-hide-icon [ehs-icon],\n:root.ehs-hide-icon [ehs-emoji] {\n  display: none;\n}\nbody div#gright {\n  z-index: 3;\n}\nbody #expunge_new button[ehs-input][type='submit'] {\n  margin: 6px auto 2px;\n}\nbody #gleft {\n  pointer-events: none;\n}\nbody #gj {\n  margin: 3px 4px;\n}\nbody #gmid {\n  height: auto;\n}\nbody #tagmenu_act,\nbody #tagmenu_new {\n  width: calc(100% - 30px) !important;\n}\nbody #tagmenu_new > form {\n  display: flex;\n}\nbody #tagmenu_new > form #newtagfield {\n  flex: auto;\n}\nbody #gd5 {\n  display: flex;\n  flex-flow: column;\n}\nbody #gd5:has( > :nth-child(10)) :is(.g2, .g3):not(:has(+ .gsp)) {\n  padding-bottom: 18px;\n}\nbody #gd5:has( > :nth-child(10)) .gsp {\n  padding-top: 0;\n}\nbody #gd5:has( > :nth-child(11)) :is(.g2, .g3):not(:has(+ .gsp)) {\n  padding-bottom: 16px;\n}\nbody #gd5:has( > :nth-child(12)) :is(.g2, .g3):not(:has(+ .gsp)) {\n  padding-bottom: 12px;\n}\nbody #gd5:has( > :nth-child(13)) :is(.g2, .g3):not(:has(+ .gsp)) {\n  padding-bottom: 8px;\n}\nbody #gd5:has( > :nth-child(14)) :is(.g2, .g3):not(:has(+ .gsp)) {\n  padding-bottom: 6px;\n}\nbody #gd5:has( > :nth-child(15)) :is(.g2, .g3):not(:has(+ .gsp)) {\n  padding-bottom: 4px;\n}\nbody .g2,\nbody .g3 {\n  padding-bottom: 20px;\n}\nbody .gsp {\n  padding-top: 10px;\n}\nbody td.tc {\n  white-space: nowrap;\n}\nbody div.gtl,\nbody div.gtw,\nbody div.gt {\n  line-height: 16px;\n  white-space: nowrap;\n}\nbody div.c6 {\n  text-align: left;\n}\n[ehs-icon],\n[ehs-emoji] {\n  max-height: 1.25em !important;\n  max-width: 2em !important;\n  margin: -0.25em 1px !important;\n}\n[ehs-icon] {\n  vertical-align: middle;\n}\n.ehs-new-tag-complete-translate {\n  display: block;\n  margin-top: 4px;\n  font-weight: bolder;\n  opacity: 0.8;\n  pointer-events: none;\n}\n.ehs-new-tag-complete-translate:empty {\n  display: none;\n}\n:root.ehs-wiki.ehs-translate-tag [ehs-tag][lang|='zh-hans']::after {\n  content: ' (' attr(ehs-tag) ')';\n  font-size: 80%;\n}\n/*# sourceMappingURL=index.css.map */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 47437:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55315);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82145);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.eh-syringe-lite-auto-complete-list{background:#f8f4ec;border-radius:4px;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);color:#5c0d12;display:block;left:628px;max-height:50vh;min-height:20px;min-width:570px;overflow-x:hidden;overflow-y:auto;overflow:hidden auto;padding:8px 0;position:absolute;scroll-padding:16px;scrollbar-width:thin;text-align-last:left;top:168px;z-index:10}:root.ehs-ex .eh-syringe-lite-auto-complete-list{background:#2b2b2b;color:#f1f1f1}.eh-syringe-lite-auto-complete-list:empty,.eh-syringe-lite-auto-complete-list[hidden]{display:none}.eh-syringe-lite-auto-complete-list.exclude .auto-complete-item .en-name:before{content:"- "}.eh-syringe-lite-auto-complete-list .auto-complete-item{contain:strict;content-visibility:auto;cursor:pointer;display:flex;height:24px;justify-content:space-between;line-height:24px;padding:0 8px}.eh-syringe-lite-auto-complete-list .auto-complete-item img{display:inline-block!important;height:8pt;vertical-align:text-top}.eh-syringe-lite-auto-complete-list .auto-complete-item.selected,.eh-syringe-lite-auto-complete-list .auto-complete-item:hover{background:#e8ecf3}:root.ehs-ex .eh-syringe-lite-auto-complete-list .auto-complete-item.selected,:root.ehs-ex .eh-syringe-lite-auto-complete-list .auto-complete-item:hover{background:#3e3f40}.eh-syringe-lite-auto-complete-list .auto-complete-text{flex:0 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eh-syringe-lite-auto-complete-list .auto-complete-text.en-name{color:#5f6368;flex-shrink:4;padding-left:8px}:root.ehs-ex .eh-syringe-lite-auto-complete-list .auto-complete-text.en-name{color:#d9d9d9}.eh-syringe-lite-auto-complete-list mark{background:#f5f500;color:inherit}:root.ehs-ex .eh-syringe-lite-auto-complete-list mark{background:#727200}`, "",{"version":3,"sources":["webpack://./index.less","webpack://./src/plugin/tag-tip/index.less"],"names":[],"mappings":"AAAA,oCACI,kBAAA,CAcA,iBAAA,CACA,gGAAA,CAdA,aAAA,CAkBA,aAAA,CATA,UAAA,CAUA,eAAA,CARA,eAAA,CADA,eAAA,CAUA,iBAAA,CAAA,eAAA,CAAA,oBAAA,CACA,aAAA,CAdA,iBAAA,CAeA,mBAAA,CACA,oBAAA,CAXA,oBAAA,CAJA,SAAA,CAgBA,UCRJ,CDdI,iDACI,kBAAA,CACA,aCgBR,CDMI,sFAEI,YCJR,CDOI,gFAGY,YCPhB,CD7BA,wDA6CQ,cAAA,CACA,uBAAA,CAGA,cAAA,CAFA,YAAA,CAHA,WAAA,CAIA,6BAAA,CALA,gBAAA,CADA,aCHR,CDvCA,4DAoDY,8BAAA,CACA,UAAA,CACA,uBCVZ,CDaQ,+HAEI,kBCXZ,CDaY,yJACI,kBCVhB,CDpDA,wDAoEQ,aAAA,CAGA,eAAA,CADA,sBAAA,CADA,kBCXR,CDeQ,gEAGI,aAAA,CAFA,aAAA,CACA,gBCZZ,CDcY,6EACI,aCZhB,CDlEA,yCAqFQ,kBAAA,CADA,aCdR,CDgBQ,sDACI,kBCdZ","sourcesContent":[".eh-syringe-lite-auto-complete-list {\n    background: #f8f4ec;\n    color: #5c0d12;\n\n    :root.ehs-ex & {\n        background: #2b2b2b;\n        color: #f1f1f1;\n    }\n\n    position: absolute;\n    top: 168px;\n    left: 628px;\n    min-width: 570px;\n    min-height: 20px;\n    text-align-last: left;\n    border-radius: 4px;\n    box-shadow:\n        0 1px 3px 0 rgba(0, 0, 0, 0.2),\n        0 1px 1px 0 rgba(0, 0, 0, 0.14),\n        0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    display: block;\n    max-height: 50vh;\n    overflow: hidden auto;\n    padding: 8px 0;\n    scroll-padding: 16px;\n    scrollbar-width: thin;\n    z-index: 10;\n\n    &[hidden],\n    &:empty {\n        display: none;\n    }\n\n    &.exclude {\n        .auto-complete-item {\n            .en-name::before {\n                content: '- ';\n            }\n        }\n    }\n\n    .auto-complete-item {\n        padding: 0 8px;\n        line-height: 24px;\n        height: 24px;\n        contain: strict;\n        content-visibility: auto;\n        display: flex;\n        justify-content: space-between;\n        cursor: pointer;\n\n        img {\n            display: inline-block !important;\n            height: 8pt;\n            vertical-align: text-top;\n        }\n\n        &:hover,\n        &.selected {\n            background: #e8ecf3;\n\n            :root.ehs-ex & {\n                background: #3e3f40;\n            }\n        }\n    }\n\n    .auto-complete-text {\n        flex: 0 1 auto;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n\n        &.en-name {\n            flex-shrink: 4;\n            padding-left: 8px;\n            color: #5f6368;\n            :root.ehs-ex & {\n                color: #d9d9d9;\n            }\n        }\n    }\n\n    mark {\n        color: inherit;\n        background: #f5f500;\n        :root.ehs-ex & {\n            background: #727200;\n        }\n    }\n}\n",".eh-syringe-lite-auto-complete-list {\n  background: #f8f4ec;\n  color: #5c0d12;\n  position: absolute;\n  top: 168px;\n  left: 628px;\n  min-width: 570px;\n  min-height: 20px;\n  text-align-last: left;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  display: block;\n  max-height: 50vh;\n  overflow: hidden auto;\n  padding: 8px 0;\n  scroll-padding: 16px;\n  scrollbar-width: thin;\n  z-index: 10;\n}\n:root.ehs-ex .eh-syringe-lite-auto-complete-list {\n  background: #2b2b2b;\n  color: #f1f1f1;\n}\n.eh-syringe-lite-auto-complete-list[hidden],\n.eh-syringe-lite-auto-complete-list:empty {\n  display: none;\n}\n.eh-syringe-lite-auto-complete-list.exclude .auto-complete-item .en-name::before {\n  content: '- ';\n}\n.eh-syringe-lite-auto-complete-list .auto-complete-item {\n  padding: 0 8px;\n  line-height: 24px;\n  height: 24px;\n  contain: strict;\n  content-visibility: auto;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n.eh-syringe-lite-auto-complete-list .auto-complete-item img {\n  display: inline-block !important;\n  height: 8pt;\n  vertical-align: text-top;\n}\n.eh-syringe-lite-auto-complete-list .auto-complete-item:hover,\n.eh-syringe-lite-auto-complete-list .auto-complete-item.selected {\n  background: #e8ecf3;\n}\n:root.ehs-ex .eh-syringe-lite-auto-complete-list .auto-complete-item:hover,\n:root.ehs-ex .eh-syringe-lite-auto-complete-list .auto-complete-item.selected {\n  background: #3e3f40;\n}\n.eh-syringe-lite-auto-complete-list .auto-complete-text {\n  flex: 0 1 auto;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.eh-syringe-lite-auto-complete-list .auto-complete-text.en-name {\n  flex-shrink: 4;\n  padding-left: 8px;\n  color: #5f6368;\n}\n:root.ehs-ex .eh-syringe-lite-auto-complete-list .auto-complete-text.en-name {\n  color: #d9d9d9;\n}\n.eh-syringe-lite-auto-complete-list mark {\n  color: inherit;\n  background: #f5f500;\n}\n:root.ehs-ex .eh-syringe-lite-auto-complete-list mark {\n  background: #727200;\n}\n/*# sourceMappingURL=index.css.map */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 17075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55315);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82145);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74572);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(79334), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_pnpm_css_loader_7_1_3_webpack_5_105_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#eh-syringe-popup-button{background:50%/65% no-repeat #fff url(${___CSS_LOADER_URL_REPLACEMENT_0___});border:2px solid #6e066e;border-radius:36px;box-shadow:0 0 2px 1px rgba(0,0,0,.5);height:36px;position:fixed;touch-action:none;width:36px;z-index:10}#eh-syringe-popup-button:hover{cursor:pointer}:root.ehs-ex #eh-syringe-popup-button{background-color:#bbb;border-color:#926a92}#eh-syringe-popup-badge{background:#444;border-radius:4px;color:#fff;font-size:12px;height:14px;padding:2px 4px;position:absolute;right:-10px;top:-10px}#eh-syringe-popup-back{background:rgba(0,0,0,.3);bottom:0;left:0;opacity:0;pointer-events:none;position:fixed;right:0;top:0;transition:visibility,opacity .4s;visibility:hidden;z-index:1000}#eh-syringe-popup-back.closing,#eh-syringe-popup-back.open,#eh-syringe-popup-back.opening{pointer-events:auto;visibility:visible}#eh-syringe-popup-back.open,#eh-syringe-popup-back.opening{opacity:1}#eh-syringe-popup-back.closing{opacity:0}#eh-syringe-popup{bottom:72px;position:absolute;right:12px}@media print{#eh-syringe-popup-back,#eh-syringe-popup-button{display:none}}`, "",{"version":3,"sources":["webpack://./popup-host.less","webpack://./src/user-script/popup-host.less"],"names":[],"mappings":"AAAA,yBAUI,yEAAA,CAFA,wBAAA,CADA,kBAAA,CAEA,qCAAA,CAHA,WAAA,CALA,cAAA,CACA,iBAAA,CAGA,UAAA,CAMA,UCDJ,CDEI,+BACI,cCAR,CDGI,sCACI,qBAAA,CACA,oBCDR,CDKA,wBAQI,eAAA,CADA,iBAAA,CAEA,UAAA,CAPA,cAAA,CADA,WAAA,CAKA,eAAA,CAHA,iBAAA,CACA,WAAA,CACA,SCCJ,CDMA,uBAOI,yBAAA,CALA,QAAA,CAGA,MAAA,CAKA,SAAA,CADA,mBAAA,CARA,cAAA,CAEA,OAAA,CACA,KAAA,CAOA,iCAAA,CAHA,iBAAA,CAFA,YCCJ,CDQI,0FAII,mBAAA,CADA,kBCLR,CDYI,2DACI,SCPR,CDSI,+BACI,SCPR,CDWA,kBAEI,WAAA,CADA,iBAAA,CAEA,UCTJ,CDYA,aACI,gDAEI,YCVN,CACF","sourcesContent":["#eh-syringe-popup-button {\n    position: fixed;\n    touch-action: none;\n    // bottom: 12px;\n    // right: 12px;\n    width: 36px;\n    height: 36px;\n    border-radius: 36px;\n    border: rgb(110, 6, 110) 2px solid;\n    box-shadow: rgba(0, 0, 0, 0.5) 0 0 2px 1px;\n    background: center/65% no-repeat white url('../assets/logo.svg');\n    z-index: 10;\n    &:hover {\n        cursor: pointer;\n    }\n\n    :root.ehs-ex & {\n        background-color: rgb(187, 187, 187);\n        border-color: rgb(146, 106, 146);\n    }\n}\n\n#eh-syringe-popup-badge {\n    height: 14px;\n    font-size: 12px;\n    position: absolute;\n    right: -10px;\n    top: -10px;\n    padding: 2px 4px;\n    border-radius: 4px;\n    background: #444;\n    color: white;\n}\n\n#eh-syringe-popup-back {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    background: rgba(0, 0, 0, 0.3);\n    visibility: hidden;\n    pointer-events: none;\n    opacity: 0;\n    transition:\n        visibility,\n        opacity 0.4s;\n\n    &.open,\n    &.opening,\n    &.closing {\n        visibility: visible;\n        pointer-events: initial;\n    }\n\n    &.open {\n        opacity: 1;\n    }\n    &.opening {\n        opacity: 1;\n    }\n    &.closing {\n        opacity: 0;\n    }\n}\n\n#eh-syringe-popup {\n    position: absolute;\n    bottom: 12px + 36px + 24px;\n    right: 12px;\n}\n\n@media print {\n    #eh-syringe-popup-back,\n    #eh-syringe-popup-button {\n        display: none;\n    }\n}\n","#eh-syringe-popup-button {\n  position: fixed;\n  touch-action: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 36px;\n  border: #6e066e 2px solid;\n  box-shadow: rgba(0, 0, 0, 0.5) 0 0 2px 1px;\n  background: center / 65% no-repeat white url('../assets/logo.svg');\n  z-index: 10;\n}\n#eh-syringe-popup-button:hover {\n  cursor: pointer;\n}\n:root.ehs-ex #eh-syringe-popup-button {\n  background-color: #bbbbbb;\n  border-color: #926a92;\n}\n#eh-syringe-popup-badge {\n  height: 14px;\n  font-size: 12px;\n  position: absolute;\n  right: -10px;\n  top: -10px;\n  padding: 2px 4px;\n  border-radius: 4px;\n  background: #444;\n  color: white;\n}\n#eh-syringe-popup-back {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.3);\n  visibility: hidden;\n  pointer-events: none;\n  opacity: 0;\n  transition: visibility, opacity 0.4s;\n}\n#eh-syringe-popup-back.open,\n#eh-syringe-popup-back.opening,\n#eh-syringe-popup-back.closing {\n  visibility: visible;\n  pointer-events: initial;\n}\n#eh-syringe-popup-back.open {\n  opacity: 1;\n}\n#eh-syringe-popup-back.opening {\n  opacity: 1;\n}\n#eh-syringe-popup-back.closing {\n  opacity: 0;\n}\n#eh-syringe-popup {\n  position: absolute;\n  bottom: 72px;\n  right: 12px;\n}\n@media print {\n  #eh-syringe-popup-back,\n  #eh-syringe-popup-button {\n    display: none;\n  }\n}\n/*# sourceMappingURL=popup-host.css.map */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 85968:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 44507:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 32204:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 30672:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 6529:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 95385:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 79334:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1NS4yICg3ODE4MSkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+bG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJsb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcuMjMxMzAzLCA3MS42NDQ5MzkpIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTU3LjIzMTMwMywgLTcxLjY0NDkzOSkgIiB4PSIxOS43MzEzMDI3IiB5PSI1OS44OTQ5Mzk0IiB3aWR0aD0iNzUiIGhlaWdodD0iMjMuNSI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OC4xMzEzNTQsIDQwLjI0NTY4OSkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtODguMTMxMzU0LCAtNDAuMjQ1Njg5KSAiIHg9IjgyLjYzMTM1NDUiIHk9IjE0LjI0NTY4OSIgd2lkdGg9IjExIiBoZWlnaHQ9IjUyIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOS40ODk1OTIsIDE4LjUyNDAyOCkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTA5LjQ4OTU5MiwgLTE4LjUyNDAyOCkgIiB4PSIxMDMuOTg5NTkyIiB5PSIxLjAyNDAyODIxIiB3aWR0aD0iMTEiIGhlaWdodD0iMzUiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkuNzk4NjE2LCAyOS4xOTY5NTYpIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTk5Ljc5ODYxNiwgLTI5LjE5Njk1NikgIiB4PSI4OS41NDg2MTY0IiB5PSIyMi45NDY5NTU1IiB3aWR0aD0iMjAuNSIgaGVpZ2h0PSIxMi41Ij48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNGREJERjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0Ljg2MTY0NywgMTAyLjk4MjQxMSkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtMjQuODYxNjQ3LCAtMTAyLjk4MjQxMSkgIiB4PSIxOS4zNjE2NDY3IiB5PSI5Ny40ODI0MTEiIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSI+PC9yZWN0PgogICAgICAgICAgICA8cGF0aCBkPSJNMjcuNDI2MjQ4LDg2LjM1OTg4MjEgQzI3LjQyNjI0OCw4Ni4zNTk4ODIxIDMzLjA3NjUyMjUsODYuMzY2ODA4MSA0MS4wMjM0NzY0LDg2LjM2NTQyMyBDNDguOTc0NTg1OSw4Ni4zNjU0MjMgNTcuNjQwNDY0LDgzLjM1Njc0NTMgNTcuNjQwNDY0LDgzLjM1Njc0NTMgTDM4LjAxNDc5ODYsMTAyLjk4MjQxMSBMMjQuOTc5OTY1OSw4OS45NDc1Nzc5IEwyNy40MjQ4NjI4LDg2LjM2MTI2NzMgTDI3LjQyNjI0OCw4Ni4zNTk4ODIxIFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGREJERjEiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNOTQuNzIyNTU0OCwzNy41ODM4NDI0IEwxMDUuNjI0MTYzLDI2LjY4MjIzNDIgTDEwMS4yNzg3NTcsMjIuMzM2ODI4MiBMOTAuMzc3MTQ4OSwzMy4yMzg0MzY1IEw5NC43MjI1NTQ4LDM3LjU4Mzg0MjQgWiBNODMuODUxNDIxMiwzMS4wNzMzNTIxIEwxMDEuMjk1MzgsMTMuNjI5MzkzNiBMMTE0LjMzMTU5OCwyNi42NjU2MTE2IEw5Ni44ODYyNTM5LDQ0LjExMDk1NTMgTDgzLjg1MTQyMTIsMzEuMDc2MTIyNiBMODMuODUxNDIxMiwzMS4wNzMzNTIxIFoiIGlkPSLlvaLnirYiIGZpbGw9IiM3ODM2QTAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNzEuMjkwMzMwNCwyMi44NzI5MDQ3IEM3MC4wODc5Njc2LDI0LjA3NTI2NzYgNzAuMTkwNDczMSwyNi4xMzM2OTA3IDcxLjUwNjQyMzIsMjcuNDQ5NjQwOSBMMTAwLjUxMjczNiw1Ni40NTU5NTMzIEMxMDEuODE0ODM0LDU3Ljc1ODA1MTQgMTAzLjg5NDAzNSw1Ny44NjQ3MTI2IDEwNS4wODgwODcsNTYuNjcwNjYwOSBDMTA2LjI5MDQ0OSw1NS40NjgyOTggMTA2LjE4Nzk0NCw1My40MDk4NzQ5IDEwNC44NzE5OTQsNTIuMDkzOTI0NyBMNzUuODY3MDY2NywyMy4wODg5OTc2IEM3NC41NjQ5Njg2LDIxLjc4Njg5OTUgNzIuNDg0MzgyMSwyMS42Nzg4NTMyIDcxLjI5MDMzMDQsMjIuODcyOTA0NyBaIE02Ni40NjI4NzExLDE4LjA0NTQ0NTMgQzcwLjA3NTUwMDYsMTQuNDMyODE1OCA3Ni4yNzAxNjI5LDE0Ljc3MDgwNzIgODAuMjI3NzEsMTguNzI4MzU0MyBMMTA5LjIzNDAyMiw0Ny43MzQ2NjY1IEMxMTMuMjIzNDI5LDUxLjcyNDA3MzQgMTEzLjUxOTg2NCw1Ny44OTM4MDE5IDEwOS45MTU1NDYsNjEuNDk4MTIwMiBDMTA2LjMwMjkxNiw2NS4xMTA3NDk3IDEwMC4xMDgyNTQsNjQuNzcyNzU4MyA5Ni4xNTA3MDcxLDYwLjgxNTIxMTQgTDY3LjE0NTc3OTksMzEuODEwMjg0MiBDNjMuMTU2MzczMSwyNy44MjA4Nzc0IDYyLjg1ODU1MjgsMjEuNjQ5NzYzNiA2Ni40NjI4NzExLDE4LjA0NTQ0NTMgWiBNOTkuMTMwMjk1Myw3LjEwMzY2NTkxIEM5Ny45MzA3MDI5LDguMzAzMjU4MzMgOTcuOTI3OTMyNCwxMC4yNjE5NDYzIDk5LjEzMDI5NTMsMTEuNDY0MzA5MiBMMTE2LjQ5NjY4MiwyOC44MzA2OTYgQzExNy43MDQ1ODYsMzAuMDM4NTk5NyAxMTkuNjUyMTkyLDMwLjAzNTgyOTMgMTIwLjg1NzMyNSwyOC44MzA2OTYgQzEyMi4wNTU1MzMsMjcuNjMyNDg4NiAxMjIuMDU5Njg4LDI1LjY3MjQxNTUgMTIwLjg1NzMyNSwyNC40NzAwNTI3IEwxMDMuNDkwOTM5LDcuMTAzNjY1OTEgQzEwMi4yODMwMzUsNS44OTU3NjIxMiAxMDAuMzM1NDI5LDUuODk4NTMyNTggOTkuMTMwMjk1Myw3LjEwMzY2NTkxIFogTTk0Ljc4NDg4OTMsMi43NTgyNTk5NyBDOTYuNTE0OTgsMS4wMjIyODYzOCA5OC44NjQxOTgsMC4wNDUyNjU1OTg0IDEwMS4zMTUwNzcsMC4wNDIzOTUwMjI4IEMxMDMuNzY1OTU3LDAuMDM5NTQ5NTQzNiAxMDYuMTE3NDQ3LDEuMDExMDg4NzIgMTA3Ljg1MTU4MiwyLjc0MzAyMjYgTDEyNS4yMTc5NjksMjAuMTA5NDA5MyBDMTI4LjgyMjI4NywyMy43MTM3Mjc3IDEyOC44MDU2NjQsMjkuNTcwMzk4NSAxMjUuMjAxMzQ2LDMzLjE3NDcxNjggQzEyMy40NzE0OTUsMzQuOTEwNDUwNCAxMjEuMTIyNjc3LDM1Ljg4NzQ1MTIgMTE4LjY3MjEzNywzNS44OTA1ODM5IEMxMTYuMjIxNTk3LDM1Ljg5MzY4NjcgMTEzLjg3MDMwMSwzNC45MjI2NjU2IDExMi4xMzYwMzksMzMuMTkxMzM5MyBMOTQuNzY5NjUyLDE1LjgyNDk1MjcgQzkxLjE2NTMzMzcsMTIuMjIwNjM0MyA5MS4xODE5NTYzLDYuMzYzOTYzNTEgOTQuNzg2Mjc0NSwyLjc1OTY0NTIgTDk0Ljc4NDg4OTMsMi43NTgyNTk5NyBaIiBpZD0i5b2i54q2IiBmaWxsPSIjNzgzNkEwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI0Ljk5Nzk1MTYsODkuOTI5NTcwMSBDMjQuOTg0MTIxNSw4OS45NDM0MjIyIDM4LjAxNjE4MzgsMTAyLjk4MTAyNiAzOC4wMTYxODM4LDEwMi45ODEwMjYgQzM4LjAyMTcyNDYsMTAyLjk4NjU2NiA4OC4xNjYzNTI1LDUyLjgzMDg1NjggODguMTY2MzUyNSw1Mi44MzA4NTY4IEw3NS4xMzE1MTk3LDM5Ljc5NjAyNCBMMjQuOTk3OTUxNiw4OS45Mjk1NzAxIFogTTc1LjE0NTM3MTgsMzEuMDg4NTg5NCBMOTYuODcyNDAxOSw1Mi44MTU2MTk0IEw0Mi4zNzgyMTI0LDEwNy4zMDk4MDkgQzQxLjIyODE3NywxMDguNDc0NTkgMzkuNjYxMzIzMywxMDkuMTMyOTY4IDM4LjAyNDQ3OTMsMTA5LjEzOTI5NiBDMzYuMzg3NjM1MiwxMDkuMTQ1NDQ3IDM0LjgxNTgwNzcsMTA4LjQ5OTAzNCAzMy42NTY5MjU4LDEwNy4zNDMwNTQgTDIwLjYxOTMyMjUsOTQuMzA1NDUwOCBDMTguMjIwMTM3NSw5MS45MDYyNjU4IDE4LjIzMjYwNDQsODguMDAxMzU2OCAyMC42NTExODIzLDg1LjU4Mjc3ODkgTDc1LjE0NTM3MTgsMzEuMDg4NTg5NCBaIiBpZD0i5b2i54q2IiBmaWxsPSIjNzgzNkEwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIwLjU5OTkyOTUsMTAzLjAxNTY1NiBDMjAuNjA0MDg1MiwxMDMuMDExNSAyNC45NTM2NDY4LDEwNy4zNjEwNjIgMjQuOTUzNjQ2OCwxMDcuMzYxMDYyIEMyNC45NDk0OTEyLDEwNy4zNTY5MDYgMjkuMzEwMTM0NiwxMDIuOTk2MjYzIDI5LjMxMDEzNDYsMTAyLjk5NjI2MyBMMjQuOTY0NzI4NSw5OC42NTA4NTY4IEwyMC41OTk5Mjk1LDEwMy4wMTU2NTYgTDIwLjU5OTkyOTUsMTAzLjAxNTY1NiBaIE0yNC45ODEzNTEsODkuOTQzNDIyMiBMMzguMDE3NTY5MSwxMDIuOTc5NjQgTDI5LjI5MDc0MTUsMTExLjcwNjQ2OCBDMjYuODkxNTY2NCwxMTQuMTA4NzE4IDIzLjAwMDU4MDgsMTE0LjExNTUzNCAyMC41OTMwMDM1LDExMS43MjE3MDUgTDE2LjIzOTI4NjIsMTA3LjM2Nzk4OCBDMTMuODQ1NDU3LDEwNC45NjA0MTEgMTMuODUyMjczNSwxMDEuMDY5NDI1IDE2LjI1NDUyMzYsOTguNjcwMjQ5NyBMMjQuOTgxMzUxLDg5Ljk0MzQyMjIgTDI0Ljk4MTM1MSw4OS45NDM0MjIyIFoiIGlkPSLlvaLnirYiIGZpbGw9IiM3ODM2QTAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjAuNTk5OTI5NSwxMDMuMDE1NjU2IEMyMC42MDQwODUyLDEwMy4wMTE1IDI0Ljk1MzY0NjgsMTA3LjM2MTA2MiAyNC45NTM2NDY4LDEwNy4zNjEwNjIgQzI0Ljk0OTQ5MTIsMTA3LjM1NjkwNiAyOS4zMTAxMzQ2LDEwMi45OTYyNjMgMjkuMzEwMTM0NiwxMDIuOTk2MjYzIEwyNC45NjQ3Mjg1LDk4LjY1MDg1NjggTDIwLjU5OTkyOTUsMTAzLjAxNTY1NiBMMjAuNTk5OTI5NSwxMDMuMDE1NjU2IFogTTI0Ljk4MTM1MSw4OS45NDM0MjIyIEwzOC4wMTc1NjkxLDEwMi45Nzk2NCBMMjkuMjkwNzQxNSwxMTEuNzA2NDY4IEMyNi44OTE1NjY0LDExNC4xMDg3MTggMjMuMDAwNTgwOCwxMTQuMTE1NTM0IDIwLjU5MzAwMzUsMTExLjcyMTcwNSBMMTYuMjM5Mjg2MiwxMDcuMzY3OTg4IEMxMy44NDU0NTcsMTA0Ljk2MDQxMSAxMy44NTIyNzM1LDEwMS4wNjk0MjUgMTYuMjU0NTIzNiw5OC42NzAyNDk3IEwyNC45ODEzNTEsODkuOTQzNDIyMiBMMjQuOTgxMzUxLDg5Ljk0MzQyMjIgWiIgaWQ9IuW9oueKtiIgZmlsbD0iIzc4MzZBMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi4yNDM0NDE5LDEwNy4zNzIxNDMgTDAuOTc5ODA1MDUxLDEyMi42MzU3OCBDLTAuMjI1MzI4MjgzLDEyMy44NDA5MTQgLTAuMjI4MDk4NzM3LDEyNS43ODg1MiAwLjk3Mjg3OTA0LDEyNi45ODk0OTcgQzIuMTcyNDcxNDYsMTI4LjE4OTA5IDQuMTIxNDYzMDEsMTI4LjE4NDkzNCA1LjMyNTIxMDk4LDEyNi45ODExODYgTDIwLjU4ODg0NzksMTExLjcxNzU0OSBDMjEuNzkyNTk2LDExMC41MTM4MDEgMjEuNzk2NzUxNiwxMDguNTY0ODEgMjAuNTk3MTU5MSwxMDcuMzY1MjE3IEMxOS4zOTYxODE0LDEwNi4xNjQyNCAxNy40NDcxODk5LDEwNi4xNjgzOTUgMTYuMjQzNDQxOSwxMDcuMzcyMTQzIFogTTYwLjk2OTEyNTQsNDcuNDM5NjE2NyBMNjcuNDg2NTQxOCw1My45NTcwMzMxIEM2OC4wODg4NDMsNTQuNTU2Mjc4IDY5LjA2MjY5OTYsNTQuNTU0NDE4MyA2OS42NjI3MDc4LDUzLjk1Mjg3NzUgQzY5Ljk1MjIwNTEsNTMuNjY0ODUxNyA3MC4xMTU0MjY4LDUzLjI3MzYxOTkgNzAuMTE2NDc1OCw1Mi44NjUyNDk0IEM3MC4xMTc1MDUsNTIuNDU2ODc4OSA2OS45NTYyNzYzLDUyLjA2NDgyMTYgNjkuNjY4MjQ4Niw1MS43NzUzMjYzIEw2My4xNTA4MzIyLDQ1LjI1NzkwOTggQzYyLjg2MTQ2MzcsNDQuOTY5Mjc0OCA2Mi40NjkyMTI0LDQ0LjgwNzUyODQgNjIuMDYwNTAyNiw0NC44MDgzMDIyIEM2MS42NTE3OTI4LDQ0LjgwOTA4NzMgNjEuMjYwMTYxMyw0NC45NzIzMjg3IDYwLjk3MTg5NTgsNDUuMjYyMDY1NCBDNjAuMzcwNzE0NCw0NS44NjMyNDY4IDYwLjM2Nzk0MzksNDYuODM4NDM1MiA2MC45NjkxMjU0LDQ3LjQzOTYxNjcgTDYwLjk2OTEyNTQsNDcuNDM5NjE2NyBaIE01Mi4yNDc4Mzg4LDU2LjE2MDkwMzMgTDU4Ljc2NTI1NTIsNjIuNjc4MzE5NyBDNTkuMzY3NTU2NCw2My4yNzc1NjQ2IDYwLjM0MTQxMyw2My4yNzU3MDQ5IDYwLjk0MTQyMTIsNjIuNjc0MTY0MSBDNjEuNTQyOTYyLDYyLjA3NDE1NTkgNjEuNTQ0ODIxNyw2MS4xMDAyOTkzIDYwLjk0NTU3NjgsNjAuNDk3OTk4MSBMNTQuNDI4MTYwNCw1My45ODA1ODE3IEM1NC4xMzkwMzE5LDUzLjY5MjE4NzYgNTMuNzQ3MTgxMiw1My41MzA0NjEzIDUzLjMzODgxMSw1My41MzA5Nzg0IEM1Mi45MzA0NDA5LDUzLjUzMTUwMDQgNTIuNTM5MDAyOSw1My42OTQyMjMyIDUyLjI1MDYwOTIsNTMuOTgzMzUyMSBDNTEuNjQ5NDI3OCw1NC41ODQ1MzM2IDUxLjY0NjY1NzMsNTUuNTU5NzIyIDUyLjI0NzgzODgsNTYuMTYwOTAzMyBMNTIuMjQ3ODM4OCw1Ni4xNjA5MDMzIFogTTQzLjUyNjU1MjEsNjQuODgyMTkgTDUwLjA0Mzk2ODQsNzEuMzk5NjA2NCBDNTAuNjQ2MjY5Nyw3MS45OTg4NTEzIDUxLjYyMDEyNjMsNzEuOTk2OTkxNiA1Mi4yMjAxMzQ1LDcxLjM5NTQ1MDggQzUyLjgyMTY3NTMsNzAuNzk1NDQyNSA1Mi44MjM1MzUsNjkuODIxNTg2IDUyLjIyNDI5MDIsNjkuMjE5Mjg0NyBMNDUuNzA2ODczNyw2Mi43MDE4NjgzIEM0NS40MTc3NDUzLDYyLjQxMzQ3NDEgNDUuMDI1ODk0NSw2Mi4yNTE3NDc4IDQ0LjYxNzUyNDMsNjIuMjUyMjY0OSBDNDQuMjA5MTU0MSw2Mi4yNTI3ODY5IDQzLjgxNzcxNjIsNjIuNDE1NTA5OCA0My41MjkzMjI1LDYyLjcwNDYzODggQzQyLjkyNjc1NTgsNjMuMzA3MjA1NCA0Mi45MjUzNzA2LDY0LjI4MTAwODYgNDMuNTI2NTUyMSw2NC44ODIxOSBMNDMuNTI2NTUyMSw2NC44ODIxOSBaIE0zNC44MDUyNjU0LDczLjYwMzQ3NjYgTDQxLjMyMjY4MTgsODAuMTIwODkzMSBDNDEuOTI0OTgzMSw4MC43MjAxMzc5IDQyLjg5ODgzOTYsODAuNzE4Mjc4MiA0My40OTg4NDc5LDgwLjExNjczNzQgQzQ0LjEwMDM4ODcsNzkuNTE2NzI5MiA0NC4xMDIyNDg0LDc4LjU0Mjg3MjYgNDMuNTAzMDAzNSw3Ny45NDA1NzEzIEwzNi45ODU1ODcxLDcxLjQyMzE1NDkgQzM2LjY5NjQ1ODcsNzEuMTM0NzYwNyAzNi4zMDQ2MDc5LDcwLjk3MzAzNDQgMzUuODk2MjM3Nyw3MC45NzM1NTE1IEMzNS40ODc4Njc1LDcwLjk3NDA3MzYgMzUuMDk2NDI5Niw3MS4xMzY3OTY0IDM0LjgwODAzNTksNzEuNDI1OTI1NCBDMzQuMjA1NDY5Miw3Mi4wMjg0OTIgMzQuMjA0MDg0LDczLjAwMjI5NTIgMzQuODA1MjY1NCw3My42MDM0NzY2IEwzNC44MDUyNjU0LDczLjYwMzQ3NjYgWiIgaWQ9IuW9oueKtiIgZmlsbD0iIzc4MzZBMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";

/***/ }),

/***/ 29922:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(30563);

/***/ }),

/***/ 80857:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(56628);

/***/ }),

/***/ 22074:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(44437);

/***/ }),

/***/ 35043:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(38996);

/***/ }),

/***/ 68126:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(97013);

/***/ }),

/***/ 11788:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(51219);

/***/ }),

/***/ 73442:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(65377);

/***/ }),

/***/ 68416:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(82661);

/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(76513);

/***/ }),

/***/ 30328:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(84563);

/***/ }),

/***/ 73678:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(93083);

/***/ }),

/***/ 83755:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(11144);

/***/ }),

/***/ 23103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(77324);

/***/ }),

/***/ 62285:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(45098);

/***/ }),

/***/ 72767:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(23407);

/***/ }),

/***/ 32536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(5807);

/***/ }),

/***/ 49166:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(9561);

/***/ }),

/***/ 30211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(40879);

/***/ }),

/***/ 18479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(61217);

/***/ }),

/***/ 12118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(92387);

module.exports = parent;


/***/ }),

/***/ 42716:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(20803);

module.exports = parent;


/***/ }),

/***/ 29053:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(30902);

module.exports = parent;


/***/ }),

/***/ 58229:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(85706);

module.exports = parent;


/***/ }),

/***/ 9415:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(59722);

module.exports = parent;


/***/ }),

/***/ 31313:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(84854);

__webpack_require__(49063);
__webpack_require__(63308);
__webpack_require__(33057);
__webpack_require__(1975);

module.exports = parent;


/***/ }),

/***/ 90503:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(5270);

module.exports = parent;


/***/ }),

/***/ 41344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(80201);

module.exports = parent;


/***/ }),

/***/ 75310:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(71148);
__webpack_require__(49695);
var getBuiltInPrototypeMethod = __webpack_require__(77566);

module.exports = getBuiltInPrototypeMethod('Array', 'flatMap');


/***/ }),

/***/ 71383:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(61901);
var getBuiltInPrototypeMethod = __webpack_require__(77566);

module.exports = getBuiltInPrototypeMethod('Array', 'includes');


/***/ }),

/***/ 78194:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(32110);
__webpack_require__(41569);
var getBuiltInPrototypeMethod = __webpack_require__(77566);

module.exports = getBuiltInPrototypeMethod('Array', 'keys');


/***/ }),

/***/ 88968:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(86658);
var getBuiltInPrototypeMethod = __webpack_require__(77566);

module.exports = getBuiltInPrototypeMethod('Array', 'reduce');


/***/ }),

/***/ 65214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(80572);
var getBuiltInPrototypeMethod = __webpack_require__(77566);

module.exports = getBuiltInPrototypeMethod('Array', 'slice');


/***/ }),

/***/ 94462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(56908);
var getBuiltInPrototypeMethod = __webpack_require__(77566);

module.exports = getBuiltInPrototypeMethod('Array', 'sort');


/***/ }),

/***/ 98212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(32110);
__webpack_require__(41569);
var getBuiltInPrototypeMethod = __webpack_require__(77566);

module.exports = getBuiltInPrototypeMethod('Array', 'values');


/***/ }),

/***/ 48524:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(22747);

module.exports = __webpack_require__(44326);


/***/ }),

/***/ 13953:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPrototypeOf = __webpack_require__(60875);
var method = __webpack_require__(72875);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.endsWith;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.endsWith) ? method : own;
};


/***/ }),

/***/ 19874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPrototypeOf = __webpack_require__(60875);
var method = __webpack_require__(75310);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.flatMap;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.flatMap) ? method : own;
};


/***/ }),

/***/ 88171:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPrototypeOf = __webpack_require__(60875);
var arrayMethod = __webpack_require__(71383);
var stringMethod = __webpack_require__(67905);

var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.includes)) return arrayMethod;
  if (typeof it == 'string' || it === StringPrototype || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.includes)) {
    return stringMethod;
  } return own;
};


/***/ }),

/***/ 93508:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPrototypeOf = __webpack_require__(60875);
var method = __webpack_require__(88968);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reduce) ? method : own;
};


/***/ }),

/***/ 74578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPrototypeOf = __webpack_require__(60875);
var method = __webpack_require__(65214);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.slice) ? method : own;
};


/***/ }),

/***/ 2602:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPrototypeOf = __webpack_require__(60875);
var method = __webpack_require__(94462);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.sort;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.sort) ? method : own;
};


/***/ }),

/***/ 24504:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPrototypeOf = __webpack_require__(60875);
var method = __webpack_require__(59870);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.startsWith;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.startsWith) ? method : own;
};


/***/ }),

/***/ 36482:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPrototypeOf = __webpack_require__(60875);
var method = __webpack_require__(42488);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trim;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.trim) ? method : own;
};


/***/ }),

/***/ 86198:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(15426);
var path = __webpack_require__(87337);

module.exports = path.Number.parseFloat;


/***/ }),

/***/ 95859:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(3427);
var path = __webpack_require__(87337);

module.exports = path.Object.assign;


/***/ }),

/***/ 35715:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(23027);
var path = __webpack_require__(87337);

var Object = path.Object;

var defineProperties = module.exports = function defineProperties(T, D) {
  return Object.defineProperties(T, D);
};

if (Object.defineProperties.sham) defineProperties.sham = true;


/***/ }),

/***/ 55631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(2463);
var path = __webpack_require__(87337);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),

/***/ 76917:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(72421);
var path = __webpack_require__(87337);

module.exports = path.Object.freeze;


/***/ }),

/***/ 53175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(32110);
__webpack_require__(24423);
var path = __webpack_require__(87337);

module.exports = path.Object.fromEntries;


/***/ }),

/***/ 76405:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(82482);
var path = __webpack_require__(87337);

module.exports = path.parseInt;


/***/ }),

/***/ 2912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(41293);
__webpack_require__(32110);
__webpack_require__(41569);
__webpack_require__(51264);
__webpack_require__(27325);
__webpack_require__(32604);
__webpack_require__(20063);
__webpack_require__(5686);
__webpack_require__(40441);
__webpack_require__(57590);
var path = __webpack_require__(87337);

module.exports = path.Promise;


/***/ }),

/***/ 98256:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(49890);
var path = __webpack_require__(87337);

module.exports = path.Reflect.set;


/***/ }),

/***/ 72875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(51503);
var getBuiltInPrototypeMethod = __webpack_require__(77566);

module.exports = getBuiltInPrototypeMethod('String', 'endsWith');


/***/ }),

/***/ 67905:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(8101);
var getBuiltInPrototypeMethod = __webpack_require__(77566);

module.exports = getBuiltInPrototypeMethod('String', 'includes');


/***/ }),

/***/ 59870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(74282);
var getBuiltInPrototypeMethod = __webpack_require__(77566);

module.exports = getBuiltInPrototypeMethod('String', 'startsWith');


/***/ }),

/***/ 42488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(87588);
var getBuiltInPrototypeMethod = __webpack_require__(77566);

module.exports = getBuiltInPrototypeMethod('String', 'trim');


/***/ }),

/***/ 24710:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(9174);
var WrappedWellKnownSymbolModule = __webpack_require__(57681);

module.exports = WrappedWellKnownSymbolModule.f('asyncIterator');


/***/ }),

/***/ 75535:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(74316);
__webpack_require__(41569);
__webpack_require__(98101);
__webpack_require__(61039);
__webpack_require__(9174);
__webpack_require__(58793);
__webpack_require__(34278);
__webpack_require__(9935);
__webpack_require__(95242);
__webpack_require__(15337);
__webpack_require__(35030);
__webpack_require__(69688);
__webpack_require__(89635);
__webpack_require__(52191);
__webpack_require__(5621);
__webpack_require__(20107);
__webpack_require__(59922);
__webpack_require__(73995);
__webpack_require__(86396);
__webpack_require__(78757);
__webpack_require__(24937);
__webpack_require__(71698);
var path = __webpack_require__(87337);

module.exports = path.Symbol;


/***/ }),

/***/ 17209:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(32110);
__webpack_require__(41569);
__webpack_require__(57590);
__webpack_require__(15337);
var WrappedWellKnownSymbolModule = __webpack_require__(57681);

module.exports = WrappedWellKnownSymbolModule.f('iterator');


/***/ }),

/***/ 21218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(48470);
__webpack_require__(59922);
var WrappedWellKnownSymbolModule = __webpack_require__(57681);

module.exports = WrappedWellKnownSymbolModule.f('toPrimitive');


/***/ }),

/***/ 64032:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(32110);
__webpack_require__(41569);
__webpack_require__(35994);
__webpack_require__(60592);
__webpack_require__(37234);
var path = __webpack_require__(87337);

module.exports = path.WeakMap;


/***/ }),

/***/ 30563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(10041);


/***/ }),

/***/ 10041:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: remove from `core-js@4`
__webpack_require__(53174);

var parent = __webpack_require__(12118);

module.exports = parent;


/***/ }),

/***/ 88249:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(42716);

module.exports = parent;


/***/ }),

/***/ 12484:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(29053);

module.exports = parent;


/***/ }),

/***/ 73124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(58229);

module.exports = parent;


/***/ }),

/***/ 4512:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(9415);

module.exports = parent;


/***/ }),

/***/ 14012:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(31313);
__webpack_require__(82604);
__webpack_require__(85718);
__webpack_require__(47878);
__webpack_require__(48335);
// TODO: Remove from `core-js@4`
__webpack_require__(60359);
__webpack_require__(13465);
__webpack_require__(10634);
__webpack_require__(75585);
__webpack_require__(95350);
__webpack_require__(8050);

module.exports = parent;


/***/ }),

/***/ 26600:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(90503);

module.exports = parent;


/***/ }),

/***/ 12979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(41344);

module.exports = parent;


/***/ }),

/***/ 89092:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(33663);
var tryToString = __webpack_require__(58069);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 55658:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isConstructor = __webpack_require__(84939);
var tryToString = __webpack_require__(58069);

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ 47488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPossiblePrototype = __webpack_require__(74827);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 56678:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var WeakMapHelpers = __webpack_require__(85061);

var weakmap = new WeakMapHelpers.WeakMap();
var set = WeakMapHelpers.set;
var remove = WeakMapHelpers.remove;

module.exports = function (key) {
  set(weakmap, key, 1);
  remove(weakmap, key);
  return key;
};


/***/ }),

/***/ 91911:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var tryToString = __webpack_require__(58069);

var $TypeError = TypeError;

// Perform ? RequireInternalSlot(M, [[WeakMapData]])
module.exports = function (it) {
  if (typeof it == 'object' && 'has' in it && 'get' in it && 'set' in it && 'delete') return it;
  throw new $TypeError(tryToString(it) + ' is not a weakmap');
};


/***/ }),

/***/ 41891:
/***/ ((module) => {

"use strict";

module.exports = function () { /* empty */ };


/***/ }),

/***/ 22913:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPrototypeOf = __webpack_require__(60875);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 50953:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(63492);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 10266:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(59109);

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ 52194:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(67926);
var call = __webpack_require__(72115);
var toObject = __webpack_require__(75623);
var callWithSafeIterationClosing = __webpack_require__(90337);
var isArrayIteratorMethod = __webpack_require__(8423);
var isConstructor = __webpack_require__(84939);
var lengthOfArrayLike = __webpack_require__(76708);
var createProperty = __webpack_require__(81138);
var setArrayLength = __webpack_require__(645);
var getIterator = __webpack_require__(19547);
var getIteratorMethod = __webpack_require__(96213);

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    result = IS_CONSTRUCTOR ? new this() : [];
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  setArrayLength(result, index);
  return result;
};


/***/ }),

/***/ 51855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(34555);
var toAbsoluteIndex = __webpack_require__(85996);
var lengthOfArrayLike = __webpack_require__(76708);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 63711:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(67926);
var IndexedObject = __webpack_require__(29717);
var toObject = __webpack_require__(75623);
var lengthOfArrayLike = __webpack_require__(76708);
var arraySpeciesCreate = __webpack_require__(56163);
var createProperty = __webpack_require__(81138);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var resIndex = 0;
    var target = IS_MAP ? arraySpeciesCreate($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) createProperty(target, index, result);    // map
        else if (result) switch (TYPE) {
          case 3: return true;                                // some
          case 5: return value;                               // find
          case 6: return index;                               // findIndex
          case 2: createProperty(target, resIndex++, value);  // filter
        } else switch (TYPE) {
          case 4: return false;                               // every
          case 7: createProperty(target, resIndex++, value);  // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ 2551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(59109);
var wellKnownSymbol = __webpack_require__(99909);
var V8_VERSION = __webpack_require__(26161);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ 71716:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(59109);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ 26192:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(89092);
var toObject = __webpack_require__(75623);
var IndexedObject = __webpack_require__(29717);
var lengthOfArrayLike = __webpack_require__(76708);

var $TypeError = TypeError;

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError(REDUCE_EMPTY);
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ 645:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(86714);
var isArray = __webpack_require__(74734);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 32886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);

module.exports = uncurryThis([].slice);


/***/ }),

/***/ 33558:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arraySlice = __webpack_require__(32886);

var floor = Math.floor;

var sort = function (array, comparefn) {
  var length = array.length;

  if (length < 8) {
    // insertion sort
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    }
  } else {
    // merge sort
    var middle = floor(length / 2);
    var left = sort(arraySlice(array, 0, middle), comparefn);
    var right = sort(arraySlice(array, middle), comparefn);
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    }
  }

  return array;
};

module.exports = sort;


/***/ }),

/***/ 38707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isArray = __webpack_require__(74734);
var isConstructor = __webpack_require__(84939);
var isObject = __webpack_require__(63492);
var wellKnownSymbol = __webpack_require__(99909);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ 56163:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arraySpeciesConstructor = __webpack_require__(38707);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 90337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(50953);
var iteratorClose = __webpack_require__(57333);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ 58253:
/***/ ((module) => {

"use strict";

module.exports = function (methodName, numArgs) {
  return numArgs === 1 ? function (object, arg) {
    return object[methodName](arg);
  } : function (object, arg1, arg2) {
    return object[methodName](arg1, arg2);
  };
};


/***/ }),

/***/ 88566:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(99909);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 8002:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 50005:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(90278);
var isCallable = __webpack_require__(33663);
var classofRaw = __webpack_require__(8002);
var wellKnownSymbol = __webpack_require__(99909);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 8075:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);
var defineBuiltIns = __webpack_require__(84805);
var getWeakData = (__webpack_require__(29549).getWeakData);
var anInstance = __webpack_require__(22913);
var anObject = __webpack_require__(50953);
var isNullOrUndefined = __webpack_require__(99763);
var isObject = __webpack_require__(63492);
var iterate = __webpack_require__(96702);
var ArrayIterationModule = __webpack_require__(63711);
var hasOwn = __webpack_require__(76959);
var InternalStateModule = __webpack_require__(39903);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (state) {
  return state.frozen || (state.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice(this.entries, index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: null
      });
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    defineBuiltIns(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          if (data) return data[state.id];
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};


/***/ }),

/***/ 93314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var globalThis = __webpack_require__(44326);
var InternalMetadataModule = __webpack_require__(29549);
var fails = __webpack_require__(59109);
var createNonEnumerableProperty = __webpack_require__(98233);
var iterate = __webpack_require__(96702);
var anInstance = __webpack_require__(22913);
var isCallable = __webpack_require__(33663);
var isObject = __webpack_require__(63492);
var isNullOrUndefined = __webpack_require__(99763);
var setToStringTag = __webpack_require__(59745);
var defineProperty = (__webpack_require__(89751).f);
var forEach = (__webpack_require__(63711).forEach);
var DESCRIPTORS = __webpack_require__(86714);
var InternalStateModule = __webpack_require__(39903);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = globalThis[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;

  if (!DESCRIPTORS || !isCallable(NativeConstructor)
    || !(IS_WEAK || NativePrototype.forEach && !fails(function () { new NativeConstructor().entries().next(); }))
  ) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else {
    Constructor = wrapper(function (target, iterable) {
      setInternalState(anInstance(target, Prototype), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (!isNullOrUndefined(iterable)) iterate(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
      var IS_ADDER = KEY === 'add' || KEY === 'set';
      if (KEY in NativePrototype && !(IS_WEAK && KEY === 'clear')) {
        createNonEnumerableProperty(Prototype, KEY, function (a, b) {
          var collection = getInternalState(this).collection;
          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY === 'get' ? undefined : false;
          var result = collection[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      }
    });

    IS_WEAK || defineProperty(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).collection.size;
      }
    });
  }

  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: true }, exported);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ 31914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(76959);
var ownKeys = __webpack_require__(88181);
var getOwnPropertyDescriptorModule = __webpack_require__(70101);
var definePropertyModule = __webpack_require__(89751);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 6870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(99909);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ 31373:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(59109);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 11811:
/***/ ((module) => {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ 98233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(86714);
var definePropertyModule = __webpack_require__(89751);
var createPropertyDescriptor = __webpack_require__(2270);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 2270:
/***/ ((module) => {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 81138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(86714);
var definePropertyModule = __webpack_require__(89751);
var createPropertyDescriptor = __webpack_require__(2270);

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ 29372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineProperty = __webpack_require__(89751);

module.exports = function (target, name, descriptor) {
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ 13198:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var createNonEnumerableProperty = __webpack_require__(98233);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
  return target;
};


/***/ }),

/***/ 84805:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineBuiltIn = __webpack_require__(13198);

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else defineBuiltIn(target, key, src[key], options);
  } return target;
};


/***/ }),

/***/ 1571:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ 72608:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var tryToString = __webpack_require__(58069);

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ 86714:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(59109);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 83581:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var isObject = __webpack_require__(63492);

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 56959:
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 68630:
/***/ ((module) => {

"use strict";

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 35049:
/***/ ((module) => {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 82427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var userAgent = __webpack_require__(83825);

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ 18569:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var UA = __webpack_require__(83825);

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ 8459:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var userAgent = __webpack_require__(83825);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';


/***/ }),

/***/ 23366:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var userAgent = __webpack_require__(83825);

// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ 6843:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ENVIRONMENT = __webpack_require__(31581);

module.exports = ENVIRONMENT === 'NODE';


/***/ }),

/***/ 5930:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var userAgent = __webpack_require__(83825);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ 83825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ 26161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var userAgent = __webpack_require__(83825);

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 33969:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var userAgent = __webpack_require__(83825);

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ 31581:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* global Bun, Deno -- detection */
var globalThis = __webpack_require__(44326);
var userAgent = __webpack_require__(83825);
var classof = __webpack_require__(8002);

var userAgentStartsWith = function (string) {
  return userAgent.slice(0, string.length) === string;
};

module.exports = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof(globalThis.process) === 'process') return 'NODE';
  if (globalThis.window && globalThis.document) return 'BROWSER';
  return 'REST';
})();


/***/ }),

/***/ 22195:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable, sonarjs/slow-regex -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ 28565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var createNonEnumerableProperty = __webpack_require__(98233);
var clearErrorStack = __webpack_require__(22195);
var ERROR_STACK_INSTALLABLE = __webpack_require__(15009);

// non-standard V8
// eslint-disable-next-line es/no-nonstandard-error-properties -- safe
var captureStackTrace = Error.captureStackTrace;

module.exports = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};


/***/ }),

/***/ 15009:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(59109);
var createPropertyDescriptor = __webpack_require__(2270);

module.exports = !fails(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ 82592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var apply = __webpack_require__(24079);
var uncurryThis = __webpack_require__(30638);
var isCallable = __webpack_require__(33663);
var getOwnPropertyDescriptor = (__webpack_require__(70101).f);
var isForced = __webpack_require__(39230);
var path = __webpack_require__(87337);
var bind = __webpack_require__(67926);
var createNonEnumerableProperty = __webpack_require__(98233);
var hasOwn = __webpack_require__(76959);
// add debugging info
__webpack_require__(83019);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? globalThis : STATIC ? globalThis[TARGET] : globalThis[TARGET] && globalThis[TARGET].prototype;

  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;

    // bind methods to global for calling from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, globalThis);
    // wrap global constructors for prevent changes in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ 59109:
/***/ ((module) => {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 87581:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isArray = __webpack_require__(74734);
var lengthOfArrayLike = __webpack_require__(76708);
var doesNotExceedSafeInteger = __webpack_require__(56959);
var bind = __webpack_require__(67926);
var createProperty = __webpack_require__(81138);

// `FlattenIntoArray` abstract operation
// https://tc39.es/ecma262/#sec-flattenintoarray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        createProperty(target, targetIndex, element);
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ 15182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(59109);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ 24079:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(98310);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 67926:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(30638);
var aCallable = __webpack_require__(89092);
var NATIVE_BIND = __webpack_require__(98310);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 98310:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(59109);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 72115:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(98310);

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 62204:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(86714);
var hasOwn = __webpack_require__(76959);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 92180:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);
var aCallable = __webpack_require__(89092);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 30638:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classofRaw = __webpack_require__(8002);
var uncurryThis = __webpack_require__(33686);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ 33686:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(98310);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 77566:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var path = __webpack_require__(87337);

module.exports = function (CONSTRUCTOR, METHOD) {
  var Namespace = path[CONSTRUCTOR + 'Prototype'];
  var pureMethod = Namespace && Namespace[METHOD];
  if (pureMethod) return pureMethod;
  var NativeConstructor = globalThis[CONSTRUCTOR];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  return NativePrototype && NativePrototype[METHOD];
};


/***/ }),

/***/ 67869:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var path = __webpack_require__(87337);
var globalThis = __webpack_require__(44326);
var isCallable = __webpack_require__(33663);

var aFunction = function (variable) {
  return isCallable(variable) ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(globalThis[namespace])
    : path[namespace] && path[namespace][method] || globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ 96213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(50005);
var getMethod = __webpack_require__(14448);
var isNullOrUndefined = __webpack_require__(99763);
var Iterators = __webpack_require__(55059);
var wellKnownSymbol = __webpack_require__(99909);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 19547:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(72115);
var aCallable = __webpack_require__(89092);
var anObject = __webpack_require__(50953);
var tryToString = __webpack_require__(58069);
var getIteratorMethod = __webpack_require__(96213);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 14448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(89092);
var isNullOrUndefined = __webpack_require__(99763);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 44326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 76959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);
var toObject = __webpack_require__(75623);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 13151:
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ 33527:
/***/ ((module) => {

"use strict";

module.exports = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 92343:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(67869);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 10051:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(86714);
var fails = __webpack_require__(59109);
var createElement = __webpack_require__(83581);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 29717:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);
var fails = __webpack_require__(59109);
var classof = __webpack_require__(8002);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 41888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);
var isCallable = __webpack_require__(33663);
var store = __webpack_require__(83019);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 62974:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(63492);
var createNonEnumerableProperty = __webpack_require__(98233);

// `InstallErrorCause` abstract operation
// https://tc39.es/ecma262/#sec-installerrorcause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ 29549:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var uncurryThis = __webpack_require__(33686);
var hiddenKeys = __webpack_require__(13151);
var isObject = __webpack_require__(63492);
var hasOwn = __webpack_require__(76959);
var defineProperty = (__webpack_require__(89751).f);
var getOwnPropertyNamesModule = __webpack_require__(95354);
var getOwnPropertyNamesExternalModule = __webpack_require__(54704);
var isExtensible = __webpack_require__(22254);
var uid = __webpack_require__(59734);
var FREEZING = __webpack_require__(15182);

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ 39903:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(3184);
var globalThis = __webpack_require__(44326);
var isObject = __webpack_require__(63492);
var createNonEnumerableProperty = __webpack_require__(98233);
var hasOwn = __webpack_require__(76959);
var shared = __webpack_require__(83019);
var sharedKey = __webpack_require__(48805);
var hiddenKeys = __webpack_require__(13151);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 8423:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(99909);
var Iterators = __webpack_require__(55059);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 74734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(8002);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 33663:
/***/ ((module) => {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 84939:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);
var fails = __webpack_require__(59109);
var isCallable = __webpack_require__(33663);
var classof = __webpack_require__(50005);
var getBuiltIn = __webpack_require__(67869);
var inspectSource = __webpack_require__(41888);

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 4177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(76959);

module.exports = function (descriptor) {
  return descriptor !== undefined && (hasOwn(descriptor, 'value') || hasOwn(descriptor, 'writable'));
};


/***/ }),

/***/ 39230:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(59109);
var isCallable = __webpack_require__(33663);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 99763:
/***/ ((module) => {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 63492:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(33663);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 74827:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(63492);

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ 27609:
/***/ ((module) => {

"use strict";

module.exports = true;


/***/ }),

/***/ 53812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(63492);
var getInternalState = (__webpack_require__(39903).get);

module.exports = function isRawJSON(O) {
  if (!isObject(O)) return false;
  var state = getInternalState(O);
  return !!state && state.type === 'RawJSON';
};


/***/ }),

/***/ 37518:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(63492);
var classof = __webpack_require__(8002);
var wellKnownSymbol = __webpack_require__(99909);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


/***/ }),

/***/ 26443:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(67869);
var isCallable = __webpack_require__(33663);
var isPrototypeOf = __webpack_require__(60875);
var USE_SYMBOL_AS_UID = __webpack_require__(31578);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 96702:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(67926);
var call = __webpack_require__(72115);
var anObject = __webpack_require__(50953);
var tryToString = __webpack_require__(58069);
var isArrayIteratorMethod = __webpack_require__(8423);
var lengthOfArrayLike = __webpack_require__(76708);
var isPrototypeOf = __webpack_require__(60875);
var getIterator = __webpack_require__(19547);
var getIteratorMethod = __webpack_require__(96213);
var iteratorClose = __webpack_require__(57333);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 57333:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(72115);
var anObject = __webpack_require__(50953);
var getMethod = __webpack_require__(14448);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 48676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = (__webpack_require__(82055).IteratorPrototype);
var create = __webpack_require__(81022);
var createPropertyDescriptor = __webpack_require__(2270);
var setToStringTag = __webpack_require__(59745);
var Iterators = __webpack_require__(55059);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 23626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var call = __webpack_require__(72115);
var IS_PURE = __webpack_require__(27609);
var FunctionName = __webpack_require__(62204);
var isCallable = __webpack_require__(33663);
var createIteratorConstructor = __webpack_require__(48676);
var getPrototypeOf = __webpack_require__(24393);
var setPrototypeOf = __webpack_require__(97589);
var setToStringTag = __webpack_require__(59745);
var createNonEnumerableProperty = __webpack_require__(98233);
var defineBuiltIn = __webpack_require__(13198);
var wellKnownSymbol = __webpack_require__(99909);
var Iterators = __webpack_require__(55059);
var IteratorsCore = __webpack_require__(82055);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ 82055:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(59109);
var isCallable = __webpack_require__(33663);
var isObject = __webpack_require__(63492);
var create = __webpack_require__(81022);
var getPrototypeOf = __webpack_require__(24393);
var defineBuiltIn = __webpack_require__(13198);
var wellKnownSymbol = __webpack_require__(99909);
var IS_PURE = __webpack_require__(27609);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 55059:
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ 76708:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toLength = __webpack_require__(71296);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 42747:
/***/ ((module) => {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 35661:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var safeGetBuiltIn = __webpack_require__(9511);
var bind = __webpack_require__(67926);
var macrotask = (__webpack_require__(19019).set);
var Queue = __webpack_require__(80287);
var IS_IOS = __webpack_require__(23366);
var IS_IOS_PEBBLE = __webpack_require__(8459);
var IS_WEBOS_WEBKIT = __webpack_require__(5930);
var IS_NODE = __webpack_require__(6843);

var MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;
var document = globalThis.document;
var process = globalThis.process;
var Promise = globalThis.Promise;
var microtask = safeGetBuiltIn('queueMicrotask');
var notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask) {
  var queue = new Queue();

  var flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind(macrotask, globalThis);
    notify = function () {
      macrotask(flush);
    };
  }

  microtask = function (fn) {
    if (!queue.head) notify();
    queue.add(fn);
  };
}

module.exports = microtask;


/***/ }),

/***/ 76929:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-json -- safe */
var fails = __webpack_require__(59109);

module.exports = !fails(function () {
  var unsafeInt = '9007199254740993';
  // eslint-disable-next-line es/no-json-rawjson -- feature detection
  var raw = JSON.rawJSON(unsafeInt);
  // eslint-disable-next-line es/no-json-israwjson -- feature detection
  return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
});


/***/ }),

/***/ 90217:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(89092);

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 16605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toString = __webpack_require__(43313);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ 21265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isRegExp = __webpack_require__(37518);

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ 60270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var fails = __webpack_require__(59109);
var uncurryThis = __webpack_require__(33686);
var toString = __webpack_require__(43313);
var trim = (__webpack_require__(95980).trim);
var whitespaces = __webpack_require__(87162);

var charAt = uncurryThis(''.charAt);
var $parseFloat = globalThis.parseFloat;
var Symbol = globalThis.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && charAt(trimmedString, 0) === '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ 5089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var fails = __webpack_require__(59109);
var uncurryThis = __webpack_require__(33686);
var toString = __webpack_require__(43313);
var trim = (__webpack_require__(95980).trim);
var whitespaces = __webpack_require__(87162);

var $parseInt = globalThis.parseInt;
var Symbol = globalThis.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ 92283:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(86714);
var uncurryThis = __webpack_require__(33686);
var call = __webpack_require__(72115);
var fails = __webpack_require__(59109);
var objectKeys = __webpack_require__(12078);
var getOwnPropertySymbolsModule = __webpack_require__(80367);
var propertyIsEnumerableModule = __webpack_require__(91687);
var toObject = __webpack_require__(75623);
var IndexedObject = __webpack_require__(29717);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 81022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(50953);
var definePropertiesModule = __webpack_require__(5835);
var enumBugKeys = __webpack_require__(35049);
var hiddenKeys = __webpack_require__(13151);
var html = __webpack_require__(92343);
var documentCreateElement = __webpack_require__(83581);
var sharedKey = __webpack_require__(48805);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 5835:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(86714);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(98436);
var definePropertyModule = __webpack_require__(89751);
var anObject = __webpack_require__(50953);
var toIndexedObject = __webpack_require__(34555);
var objectKeys = __webpack_require__(12078);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 89751:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(86714);
var IE8_DOM_DEFINE = __webpack_require__(10051);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(98436);
var anObject = __webpack_require__(50953);
var toPropertyKey = __webpack_require__(47091);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 70101:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(86714);
var call = __webpack_require__(72115);
var propertyIsEnumerableModule = __webpack_require__(91687);
var createPropertyDescriptor = __webpack_require__(2270);
var toIndexedObject = __webpack_require__(34555);
var toPropertyKey = __webpack_require__(47091);
var hasOwn = __webpack_require__(76959);
var IE8_DOM_DEFINE = __webpack_require__(10051);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 54704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(8002);
var toIndexedObject = __webpack_require__(34555);
var $getOwnPropertyNames = (__webpack_require__(95354).f);
var arraySlice = __webpack_require__(32886);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 95354:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(322);
var enumBugKeys = __webpack_require__(35049);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 80367:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 24393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(76959);
var isCallable = __webpack_require__(33663);
var toObject = __webpack_require__(75623);
var sharedKey = __webpack_require__(48805);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(31373);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 22254:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(59109);
var isObject = __webpack_require__(63492);
var classof = __webpack_require__(8002);
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(10266);

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ 60875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);
var hasOwn = __webpack_require__(76959);
var toIndexedObject = __webpack_require__(34555);
var indexOf = (__webpack_require__(51855).indexOf);
var hiddenKeys = __webpack_require__(13151);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 12078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(322);
var enumBugKeys = __webpack_require__(35049);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 91687:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 97589:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(92180);
var isObject = __webpack_require__(63492);
var requireObjectCoercible = __webpack_require__(45940);
var aPossiblePrototype = __webpack_require__(47488);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 58537:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(90278);
var classof = __webpack_require__(50005);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 24464:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(72115);
var isCallable = __webpack_require__(33663);
var isObject = __webpack_require__(63492);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 88181:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(67869);
var uncurryThis = __webpack_require__(33686);
var getOwnPropertyNamesModule = __webpack_require__(95354);
var getOwnPropertySymbolsModule = __webpack_require__(80367);
var anObject = __webpack_require__(50953);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 86462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);
var hasOwn = __webpack_require__(76959);

var $SyntaxError = SyntaxError;
var $parseInt = parseInt;
var fromCharCode = String.fromCharCode;
var at = uncurryThis(''.charAt);
var slice = uncurryThis(''.slice);
var exec = uncurryThis(/./.exec);

var codePoints = {
  '\\"': '"',
  '\\\\': '\\',
  '\\/': '/',
  '\\b': '\b',
  '\\f': '\f',
  '\\n': '\n',
  '\\r': '\r',
  '\\t': '\t'
};

var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
// eslint-disable-next-line regexp/no-control-character -- safe
var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;

module.exports = function (source, i) {
  var unterminated = true;
  var value = '';
  while (i < source.length) {
    var chr = at(source, i);
    if (chr === '\\') {
      var twoChars = slice(source, i, i + 2);
      if (hasOwn(codePoints, twoChars)) {
        value += codePoints[twoChars];
        i += 2;
      } else if (twoChars === '\\u') {
        i += 2;
        var fourHexDigits = slice(source, i, i + 4);
        if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError('Bad Unicode escape at: ' + i);
        value += fromCharCode($parseInt(fourHexDigits, 16));
        i += 4;
      } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
    } else if (chr === '"') {
      unterminated = false;
      i++;
      break;
    } else {
      if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError('Bad control character in string literal at: ' + i);
      value += chr;
      i++;
    }
  }
  if (unterminated) throw new $SyntaxError('Unterminated string at: ' + i);
  return { value: value, end: i };
};


/***/ }),

/***/ 87337:
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ 24957:
/***/ ((module) => {

"use strict";

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ 32874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var NativePromiseConstructor = __webpack_require__(66236);
var isCallable = __webpack_require__(33663);
var isForced = __webpack_require__(39230);
var inspectSource = __webpack_require__(41888);
var wellKnownSymbol = __webpack_require__(99909);
var ENVIRONMENT = __webpack_require__(31581);
var IS_PURE = __webpack_require__(27609);
var V8_VERSION = __webpack_require__(26161);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === 'BROWSER' || ENVIRONMENT === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),

/***/ 66236:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);

module.exports = globalThis.Promise;


/***/ }),

/***/ 816:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(50953);
var isObject = __webpack_require__(63492);
var newPromiseCapability = __webpack_require__(90217);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 61459:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NativePromiseConstructor = __webpack_require__(66236);
var checkCorrectnessOfIteration = __webpack_require__(88566);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(32874).CONSTRUCTOR);

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),

/***/ 80287:
/***/ ((module) => {

"use strict";

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ 45940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isNullOrUndefined = __webpack_require__(99763);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 9511:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var DESCRIPTORS = __webpack_require__(86714);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
module.exports = function (name) {
  if (!DESCRIPTORS) return globalThis[name];
  var descriptor = getOwnPropertyDescriptor(globalThis, name);
  return descriptor && descriptor.value;
};


/***/ }),

/***/ 46247:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(67869);
var defineBuiltInAccessor = __webpack_require__(29372);
var wellKnownSymbol = __webpack_require__(99909);
var DESCRIPTORS = __webpack_require__(86714);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 59745:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(90278);
var defineProperty = (__webpack_require__(89751).f);
var createNonEnumerableProperty = __webpack_require__(98233);
var hasOwn = __webpack_require__(76959);
var toString = __webpack_require__(58537);
var wellKnownSymbol = __webpack_require__(99909);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  var target = STATIC ? it : it && it.prototype;
  if (target) {
    if (!hasOwn(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),

/***/ 48805:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var shared = __webpack_require__(65019);
var uid = __webpack_require__(59734);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 83019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IS_PURE = __webpack_require__(27609);
var globalThis = __webpack_require__(44326);
var defineGlobalProperty = __webpack_require__(1571);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.48.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
  license: 'https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 65019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var store = __webpack_require__(83019);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 48375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(50953);
var aConstructor = __webpack_require__(55658);
var isNullOrUndefined = __webpack_require__(99763);
var wellKnownSymbol = __webpack_require__(99909);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ 20581:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);
var toIntegerOrInfinity = __webpack_require__(77673);
var toString = __webpack_require__(43313);
var requireObjectCoercible = __webpack_require__(45940);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 82551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var uncurryThis = __webpack_require__(33686);

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;

var $RangeError = RangeError;
var exec = uncurryThis(regexSeparators.exec);
var floor = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis(''.charCodeAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var split = uncurryThis(''.split);
var toLowerCase = uncurryThis(''.toLowerCase);

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = charCodeAt(string, counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);
      if ((extra & 0xFC00) === 0xDC00) { // Low surrogate.
        push(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push(output, value);
        counter--;
      }
    } else {
      push(output, value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  while (delta > baseMinusTMin * tMax >> 1) {
    delta = floor(delta / baseMinusTMin);
    k += base;
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      push(output, fromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    push(output, delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw new $RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw new $RangeError(OVERFLOW_ERROR);
      }
      if (currentValue === n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = base;
        while (true) {
          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
          k += base;
        }

        push(output, fromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
        delta = 0;
        handledCPCount++;
      }
    }

    delta++;
    n++;
  }
  return join(output, '');
};

module.exports = function (input) {
  var encoded = [];
  var labels = split(replace(toLowerCase(input), regexSeparators, '\u002E'), '.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push(encoded, exec(regexNonASCII, label) ? 'xn--' + encode(label) : label);
  }
  return join(encoded, '.');
};


/***/ }),

/***/ 67760:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var PROPER_FUNCTION_NAME = (__webpack_require__(62204).PROPER);
var fails = __webpack_require__(59109);
var whitespaces = __webpack_require__(87162);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ 95980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);
var requireObjectCoercible = __webpack_require__(45940);
var toString = __webpack_require__(43313);
var whitespaces = __webpack_require__(87162);

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 92945:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(26161);
var fails = __webpack_require__(59109);
var globalThis = __webpack_require__(44326);

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 28188:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(72115);
var getBuiltIn = __webpack_require__(67869);
var wellKnownSymbol = __webpack_require__(99909);
var defineBuiltIn = __webpack_require__(13198);

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};


/***/ }),

/***/ 87980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(67869);
var uncurryThis = __webpack_require__(33686);

var Symbol = getBuiltIn('Symbol');
var keyFor = Symbol.keyFor;
var thisSymbolValue = uncurryThis(Symbol.prototype.valueOf);

// `Symbol.isRegisteredSymbol` method
// https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
module.exports = Symbol.isRegisteredSymbol || function isRegisteredSymbol(value) {
  try {
    return keyFor(thisSymbolValue(value)) !== undefined;
  } catch (error) {
    return false;
  }
};


/***/ }),

/***/ 89642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var shared = __webpack_require__(65019);
var getBuiltIn = __webpack_require__(67869);
var uncurryThis = __webpack_require__(33686);
var isSymbol = __webpack_require__(26443);
var wellKnownSymbol = __webpack_require__(99909);

var Symbol = getBuiltIn('Symbol');
var $isWellKnownSymbol = Symbol.isWellKnownSymbol;
var getOwnPropertyNames = getBuiltIn('Object', 'getOwnPropertyNames');
var thisSymbolValue = uncurryThis(Symbol.prototype.valueOf);
var WellKnownSymbolsStore = shared('wks');

for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
  // some old engines throws on access to some keys like `arguments` or `caller`
  try {
    var symbolKey = symbolKeys[i];
    if (isSymbol(Symbol[symbolKey])) wellKnownSymbol(symbolKey);
  } catch (error) { /* empty */ }
}

// `Symbol.isWellKnownSymbol` method
// https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
module.exports = function isWellKnownSymbol(value) {
  if ($isWellKnownSymbol && $isWellKnownSymbol(value)) return true;
  try {
    var symbol = thisSymbolValue(value);
    for (var j = 0, keys = getOwnPropertyNames(WellKnownSymbolsStore), keysLength = keys.length; j < keysLength; j++) {
      // eslint-disable-next-line eqeqeq -- polyfilled symbols case
      if (WellKnownSymbolsStore[keys[j]] == symbol) return true;
    }
  } catch (error) { /* empty */ }
  return false;
};


/***/ }),

/***/ 62342:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_SYMBOL = __webpack_require__(92945);

/* eslint-disable es/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),

/***/ 19019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var apply = __webpack_require__(24079);
var bind = __webpack_require__(67926);
var isCallable = __webpack_require__(33663);
var hasOwn = __webpack_require__(76959);
var fails = __webpack_require__(59109);
var html = __webpack_require__(92343);
var arraySlice = __webpack_require__(32886);
var createElement = __webpack_require__(83581);
var validateArgumentsLength = __webpack_require__(96638);
var IS_IOS = __webpack_require__(23366);
var IS_NODE = __webpack_require__(6843);

var set = globalThis.setImmediate;
var clear = globalThis.clearImmediate;
var process = globalThis.process;
var Dispatch = globalThis.Dispatch;
var Function = globalThis.Function;
var MessageChannel = globalThis.MessageChannel;
var String = globalThis.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = globalThis.location;
});

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    globalThis.addEventListener &&
    isCallable(globalThis.postMessage) &&
    !globalThis.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    globalThis.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ 85996:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(77673);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 34555:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(29717);
var requireObjectCoercible = __webpack_require__(45940);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 77673:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var trunc = __webpack_require__(42747);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 71296:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(77673);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 75623:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var requireObjectCoercible = __webpack_require__(45940);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 18863:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(72115);
var isObject = __webpack_require__(63492);
var isSymbol = __webpack_require__(26443);
var getMethod = __webpack_require__(14448);
var ordinaryToPrimitive = __webpack_require__(24464);
var wellKnownSymbol = __webpack_require__(99909);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 47091:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__(18863);
var isSymbol = __webpack_require__(26443);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 90278:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(99909);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 43313:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(50005);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 58069:
/***/ ((module) => {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 59734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(33686);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 93070:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(59109);
var wellKnownSymbol = __webpack_require__(99909);
var DESCRIPTORS = __webpack_require__(86714);
var IS_PURE = __webpack_require__(27609);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'https://a');
  var params = url.searchParams;
  var params2 = new URLSearchParams('a=1&a=2&b=3');
  var result = '';
  url.pathname = 'c%20d';
  params.forEach(function (value, key) {
    params['delete']('b');
    result += key + value;
  });
  params2['delete']('a', 2);
  // `undefined` case is a Chromium 117 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=14222
  params2['delete']('b', undefined);
  return (IS_PURE && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')))
    || (!params.size && (IS_PURE || !DESCRIPTORS))
    || !params.sort
    || url.href !== 'https://a/c%20d?a=1&c=3'
    || params.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !params[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('https://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('https://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('https://x', undefined).host !== 'x';
});


/***/ }),

/***/ 31578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(92945);

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 98436:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(86714);
var fails = __webpack_require__(59109);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 96638:
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 3184:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var isCallable = __webpack_require__(33663);

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 85061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(67869);
var caller = __webpack_require__(58253);

module.exports = {
  WeakMap: getBuiltIn('WeakMap'),
  set: caller('set', 2),
  get: caller('get', 1),
  has: caller('has', 1),
  remove: caller('delete', 1)
};


/***/ }),

/***/ 27621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var path = __webpack_require__(87337);
var hasOwn = __webpack_require__(76959);
var wrappedWellKnownSymbolModule = __webpack_require__(57681);
var defineProperty = (__webpack_require__(89751).f);

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ 57681:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(99909);

exports.f = wellKnownSymbol;


/***/ }),

/***/ 99909:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var shared = __webpack_require__(65019);
var hasOwn = __webpack_require__(76959);
var uid = __webpack_require__(59734);
var NATIVE_SYMBOL = __webpack_require__(92945);
var USE_SYMBOL_AS_UID = __webpack_require__(31578);

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 87162:
/***/ ((module) => {

"use strict";

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 22511:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var isPrototypeOf = __webpack_require__(60875);
var getPrototypeOf = __webpack_require__(24393);
var setPrototypeOf = __webpack_require__(97589);
var copyConstructorProperties = __webpack_require__(31914);
var create = __webpack_require__(81022);
var createNonEnumerableProperty = __webpack_require__(98233);
var createPropertyDescriptor = __webpack_require__(2270);
var installErrorCause = __webpack_require__(62974);
var installErrorStack = __webpack_require__(28565);
var iterate = __webpack_require__(96702);
var normalizeStringArgument = __webpack_require__(16605);
var wellKnownSymbol = __webpack_require__(99909);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Error = Error;
var push = [].push;

var $AggregateError = function AggregateError(errors, message /* , options */) {
  var isInstance = isPrototypeOf(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf) {
    that = setPrototypeOf(new $Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create(AggregateErrorPrototype);
    createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
  installErrorStack(that, $AggregateError, that.stack, 1);
  if (arguments.length > 2) installErrorCause(that, arguments[2]);
  var errorsArray = [];
  iterate(errors, push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

if (setPrototypeOf) setPrototypeOf($AggregateError, $Error);
else copyConstructorProperties($AggregateError, $Error, { name: true });

var AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {
  constructor: createPropertyDescriptor(1, $AggregateError),
  message: createPropertyDescriptor(1, ''),
  name: createPropertyDescriptor(1, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true, constructor: true, arity: 2 }, {
  AggregateError: $AggregateError
});


/***/ }),

/***/ 41293:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(22511);


/***/ }),

/***/ 74316:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var fails = __webpack_require__(59109);
var isArray = __webpack_require__(74734);
var isObject = __webpack_require__(63492);
var toObject = __webpack_require__(75623);
var lengthOfArrayLike = __webpack_require__(76708);
var doesNotExceedSafeInteger = __webpack_require__(56959);
var createProperty = __webpack_require__(81138);
var setArrayLength = __webpack_require__(645);
var arraySpeciesCreate = __webpack_require__(56163);
var arrayMethodHasSpeciesSupport = __webpack_require__(2551);
var wellKnownSymbol = __webpack_require__(99909);
var V8_VERSION = __webpack_require__(26161);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    setArrayLength(A, n);
    return A;
  }
});


/***/ }),

/***/ 71148:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var flattenIntoArray = __webpack_require__(87581);
var aCallable = __webpack_require__(89092);
var toObject = __webpack_require__(75623);
var lengthOfArrayLike = __webpack_require__(76708);
var arraySpeciesCreate = __webpack_require__(56163);

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A;
    aCallable(callbackfn);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ 61901:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var $includes = (__webpack_require__(51855).includes);
var fails = __webpack_require__(59109);
var addToUnscopables = __webpack_require__(41891);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 32110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(34555);
var addToUnscopables = __webpack_require__(41891);
var Iterators = __webpack_require__(55059);
var InternalStateModule = __webpack_require__(39903);
var defineProperty = (__webpack_require__(89751).f);
var defineIterator = __webpack_require__(23626);
var createIterResultObject = __webpack_require__(11811);
var IS_PURE = __webpack_require__(27609);
var DESCRIPTORS = __webpack_require__(86714);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ 86658:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var $reduce = (__webpack_require__(26192).left);
var arrayMethodIsStrict = __webpack_require__(71716);
var CHROME_VERSION = __webpack_require__(26161);
var IS_NODE = __webpack_require__(6843);

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 80572:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var isArray = __webpack_require__(74734);
var isConstructor = __webpack_require__(84939);
var isObject = __webpack_require__(63492);
var toAbsoluteIndex = __webpack_require__(85996);
var lengthOfArrayLike = __webpack_require__(76708);
var toIndexedObject = __webpack_require__(34555);
var createProperty = __webpack_require__(81138);
var setArrayLength = __webpack_require__(645);
var wellKnownSymbol = __webpack_require__(99909);
var arrayMethodHasSpeciesSupport = __webpack_require__(2551);
var nativeSlice = __webpack_require__(32886);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    setArrayLength(result, n);
    return result;
  }
});


/***/ }),

/***/ 56908:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var uncurryThis = __webpack_require__(33686);
var aCallable = __webpack_require__(89092);
var toObject = __webpack_require__(75623);
var lengthOfArrayLike = __webpack_require__(76708);
var deletePropertyOrThrow = __webpack_require__(72608);
var toString = __webpack_require__(43313);
var fails = __webpack_require__(59109);
var internalSort = __webpack_require__(33558);
var arrayMethodIsStrict = __webpack_require__(71716);
var FF = __webpack_require__(82427);
var IE_OR_EDGE = __webpack_require__(18569);
var V8 = __webpack_require__(26161);
var WEBKIT = __webpack_require__(33969);

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});


/***/ }),

/***/ 49695:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(41891);

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


/***/ }),

/***/ 48470:
/***/ (() => {

// empty


/***/ }),

/***/ 22747:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var globalThis = __webpack_require__(44326);

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({ global: true, forced: globalThis.globalThis !== globalThis }, {
  globalThis: globalThis
});


/***/ }),

/***/ 68388:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var getBuiltIn = __webpack_require__(67869);
var apply = __webpack_require__(24079);
var call = __webpack_require__(72115);
var uncurryThis = __webpack_require__(33686);
var fails = __webpack_require__(59109);
var isArray = __webpack_require__(74734);
var isCallable = __webpack_require__(33663);
var isRawJSON = __webpack_require__(53812);
var isSymbol = __webpack_require__(26443);
var classof = __webpack_require__(8002);
var toString = __webpack_require__(43313);
var arraySlice = __webpack_require__(32886);
var parseJSONString = __webpack_require__(86462);
var uid = __webpack_require__(59734);
var NATIVE_SYMBOL = __webpack_require__(92945);
var NATIVE_RAW_JSON = __webpack_require__(76929);

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var slice = uncurryThis(''.slice);
var push = uncurryThis([].push);
var numberToString = uncurryThis(1.1.toString);

var surrogates = /[\uD800-\uDFFF]/g;
var lowSurrogates = /^[\uD800-\uDBFF]$/;
var hiSurrogates = /^[\uDC00-\uDFFF]$/;

var MARK = uid();
var MARK_LENGTH = MARK.length;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply($stringify, null, args);
} : $stringify;

var fixIllFormedJSON = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(lowSurrogates, match) && !exec(hiSurrogates, next)) || (exec(hiSurrogates, match) && !exec(lowSurrogates, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

var getReplacerFunction = function (replacer) {
  if (isCallable(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') push(keys, toString(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};

// `JSON.stringify` method
// https://tc39.es/ecma262/#sec-json.stringify
// https://github.com/tc39/proposal-json-parse-with-source
if ($stringify) $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
  stringify: function stringify(text, replacer, space) {
    var replacerFunction = getReplacerFunction(replacer);
    var rawStrings = [];

    var json = stringifyWithProperSymbolsConversion(text, function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      var v = isCallable(replacerFunction) ? call(replacerFunction, this, $String(key), value) : value;
      return !NATIVE_RAW_JSON && isRawJSON(v) ? MARK + (push(rawStrings, v.rawJSON) - 1) : v;
    }, space);

    if (typeof json != 'string') return json;

    if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);

    if (NATIVE_RAW_JSON) return json;

    var result = '';
    var length = json.length;

    for (var i = 0; i < length; i++) {
      var chr = charAt(json, i);
      if (chr === '"') {
        var end = parseJSONString(json, ++i).end - 1;
        var string = slice(json, i, end);
        result += slice(string, 0, MARK_LENGTH) === MARK
          ? rawStrings[slice(string, MARK_LENGTH)]
          : '"' + string + '"';
        i = end;
      } else result += chr;
    }

    return result;
  }
});


/***/ }),

/***/ 78757:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(44326);
var setToStringTag = __webpack_require__(59745);

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(globalThis.JSON, 'JSON', true);


/***/ }),

/***/ 24937:
/***/ (() => {

// empty


/***/ }),

/***/ 15426:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var parseFloat = __webpack_require__(60270);

// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es/no-number-parsefloat -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseFloat !== parseFloat }, {
  parseFloat: parseFloat
});


/***/ }),

/***/ 3427:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var assign = __webpack_require__(92283);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ 23027:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var DESCRIPTORS = __webpack_require__(86714);
var defineProperties = (__webpack_require__(5835).f);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ 2463:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var DESCRIPTORS = __webpack_require__(86714);
var defineProperty = (__webpack_require__(89751).f);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ }),

/***/ 72421:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var FREEZING = __webpack_require__(15182);
var fails = __webpack_require__(59109);
var isObject = __webpack_require__(63492);
var onFreeze = (__webpack_require__(29549).onFreeze);

// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ 24423:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var iterate = __webpack_require__(96702);
var createProperty = __webpack_require__(81138);

// `Object.fromEntries` method
// https://tc39.es/ecma262/#sec-object.fromentries
$({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});


/***/ }),

/***/ 95591:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var NATIVE_SYMBOL = __webpack_require__(92945);
var fails = __webpack_require__(59109);
var getOwnPropertySymbolsModule = __webpack_require__(80367);
var toObject = __webpack_require__(75623);

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),

/***/ 41569:
/***/ (() => {

// empty


/***/ }),

/***/ 82482:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var $parseInt = __webpack_require__(5089);

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt !== $parseInt }, {
  parseInt: $parseInt
});


/***/ }),

/***/ 27325:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var call = __webpack_require__(72115);
var aCallable = __webpack_require__(89092);
var newPromiseCapabilityModule = __webpack_require__(90217);
var perform = __webpack_require__(24957);
var iterate = __webpack_require__(96702);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(61459);

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 24309:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var call = __webpack_require__(72115);
var aCallable = __webpack_require__(89092);
var newPromiseCapabilityModule = __webpack_require__(90217);
var perform = __webpack_require__(24957);
var iterate = __webpack_require__(96702);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(61459);

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 32604:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var call = __webpack_require__(72115);
var aCallable = __webpack_require__(89092);
var getBuiltIn = __webpack_require__(67869);
var newPromiseCapabilityModule = __webpack_require__(90217);
var perform = __webpack_require__(24957);
var iterate = __webpack_require__(96702);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(61459);

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn('AggregateError');
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 71549:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var IS_PURE = __webpack_require__(27609);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(32874).CONSTRUCTOR);
var NativePromiseConstructor = __webpack_require__(66236);
var getBuiltIn = __webpack_require__(67869);
var isCallable = __webpack_require__(33663);
var defineBuiltIn = __webpack_require__(13198);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),

/***/ 14318:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var IS_PURE = __webpack_require__(27609);
var IS_NODE = __webpack_require__(6843);
var globalThis = __webpack_require__(44326);
var path = __webpack_require__(87337);
var call = __webpack_require__(72115);
var defineBuiltIn = __webpack_require__(13198);
var setPrototypeOf = __webpack_require__(97589);
var setToStringTag = __webpack_require__(59745);
var setSpecies = __webpack_require__(46247);
var aCallable = __webpack_require__(89092);
var isCallable = __webpack_require__(33663);
var isObject = __webpack_require__(63492);
var anInstance = __webpack_require__(22913);
var speciesConstructor = __webpack_require__(48375);
var task = (__webpack_require__(19019).set);
var microtask = __webpack_require__(35661);
var hostReportErrors = __webpack_require__(33527);
var perform = __webpack_require__(24957);
var Queue = __webpack_require__(80287);
var InternalStateModule = __webpack_require__(39903);
var NativePromiseConstructor = __webpack_require__(66236);
var PromiseConstructorDetection = __webpack_require__(32874);
var newPromiseCapabilityModule = __webpack_require__(90217);

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = globalThis.TypeError;
var document = globalThis.document;
var process = globalThis.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && globalThis.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    globalThis.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, globalThis, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, globalThis, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: null
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

// `Promise` constructor
// https://tc39.es/ecma262/#sec-promise-executor
$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

PromiseWrapper = path.Promise;

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),

/***/ 40441:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var IS_PURE = __webpack_require__(27609);
var NativePromiseConstructor = __webpack_require__(66236);
var fails = __webpack_require__(59109);
var getBuiltIn = __webpack_require__(67869);
var isCallable = __webpack_require__(33663);
var speciesConstructor = __webpack_require__(48375);
var promiseResolve = __webpack_require__(816);
var defineBuiltIn = __webpack_require__(13198);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromiseConstructor && fails(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromisePrototype['finally'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'finally', method, { unsafe: true });
  }
}


/***/ }),

/***/ 51264:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(14318);
__webpack_require__(24309);
__webpack_require__(71549);
__webpack_require__(78653);
__webpack_require__(33083);
__webpack_require__(79362);


/***/ }),

/***/ 78653:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var call = __webpack_require__(72115);
var aCallable = __webpack_require__(89092);
var newPromiseCapabilityModule = __webpack_require__(90217);
var perform = __webpack_require__(24957);
var iterate = __webpack_require__(96702);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(61459);

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 33083:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var newPromiseCapabilityModule = __webpack_require__(90217);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(32874).CONSTRUCTOR);

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});


/***/ }),

/***/ 79362:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var getBuiltIn = __webpack_require__(67869);
var IS_PURE = __webpack_require__(27609);
var NativePromiseConstructor = __webpack_require__(66236);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(32874).CONSTRUCTOR);
var promiseResolve = __webpack_require__(816);

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),

/***/ 20063:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var globalThis = __webpack_require__(44326);
var apply = __webpack_require__(24079);
var slice = __webpack_require__(32886);
var newPromiseCapabilityModule = __webpack_require__(90217);
var aCallable = __webpack_require__(89092);
var perform = __webpack_require__(24957);

var Promise = globalThis.Promise;

var ACCEPT_ARGUMENTS = false;
// Avoiding the use of polyfills of the previous iteration of this proposal
// that does not accept arguments of the callback
var FORCED = !Promise || !Promise['try'] || perform(function () {
  Promise['try'](function (argument) {
    ACCEPT_ARGUMENTS = argument === 8;
  }, 8);
}).error || !ACCEPT_ARGUMENTS;

// `Promise.try` method
// https://tc39.es/ecma262/#sec-promise.try
$({ target: 'Promise', stat: true, forced: FORCED }, {
  'try': function (callbackfn /* , ...args */) {
    var args = arguments.length > 1 ? slice(arguments, 1) : [];
    var promiseCapability = newPromiseCapabilityModule.f(this);
    var result = perform(function () {
      return apply(aCallable(callbackfn), undefined, args);
    });
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});


/***/ }),

/***/ 5686:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var newPromiseCapabilityModule = __webpack_require__(90217);

// `Promise.withResolvers` method
// https://tc39.es/ecma262/#sec-promise.withResolvers
$({ target: 'Promise', stat: true }, {
  withResolvers: function withResolvers() {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    return {
      promise: promiseCapability.promise,
      resolve: promiseCapability.resolve,
      reject: promiseCapability.reject
    };
  }
});


/***/ }),

/***/ 49890:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var call = __webpack_require__(72115);
var anObject = __webpack_require__(50953);
var isObject = __webpack_require__(63492);
var isDataDescriptor = __webpack_require__(4177);
var fails = __webpack_require__(59109);
var definePropertyModule = __webpack_require__(89751);
var getOwnPropertyDescriptorModule = __webpack_require__(70101);
var getPrototypeOf = __webpack_require__(24393);
var createPropertyDescriptor = __webpack_require__(2270);

// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  var existingDescriptor, prototype, setter;
  if (!ownDescriptor) {
    if (isObject(prototype = getPrototypeOf(target))) {
      return set(prototype, propertyKey, V, receiver);
    }
    ownDescriptor = createPropertyDescriptor(0);
  }
  if (isDataDescriptor(ownDescriptor)) {
    if (ownDescriptor.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      definePropertyModule.f(receiver, propertyKey, existingDescriptor);
    } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
  } else {
    setter = ownDescriptor.set;
    if (setter === undefined) return false;
    call(setter, receiver, V);
  } return true;
}

// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var MS_EDGE_BUG = fails(function () {
  var Constructor = function () { /* empty */ };
  var object = definePropertyModule.f(new Constructor(), 'a', { configurable: true });
  // eslint-disable-next-line es/no-reflect -- required for testing
  return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
});

$({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
  set: set
});


/***/ }),

/***/ 71698:
/***/ (() => {

// empty


/***/ }),

/***/ 51503:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var uncurryThis = __webpack_require__(30638);
var getOwnPropertyDescriptor = (__webpack_require__(70101).f);
var toLength = __webpack_require__(71296);
var toString = __webpack_require__(43313);
var notARegExp = __webpack_require__(21265);
var requireObjectCoercible = __webpack_require__(45940);
var correctIsRegExpLogic = __webpack_require__(6870);
var IS_PURE = __webpack_require__(27609);

var slice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return slice(that, end - search.length, end) === search;
  }
});


/***/ }),

/***/ 91167:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var uncurryThis = __webpack_require__(33686);
var toAbsoluteIndex = __webpack_require__(85996);

var $RangeError = RangeError;
var fromCharCode = String.fromCharCode;
// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
var $fromCodePoint = String.fromCodePoint;
var join = uncurryThis([].join);

// length should be 1, old FF problem
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;

// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
$({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  fromCodePoint: function fromCodePoint(x) {
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;
    while (length > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw new $RangeError(code + ' is not a valid code point');
      elements[i] = code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
    } return join(elements, '');
  }
});


/***/ }),

/***/ 8101:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var uncurryThis = __webpack_require__(33686);
var notARegExp = __webpack_require__(21265);
var requireObjectCoercible = __webpack_require__(45940);
var toString = __webpack_require__(43313);
var correctIsRegExpLogic = __webpack_require__(6870);

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ 57590:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = (__webpack_require__(20581).charAt);
var toString = __webpack_require__(43313);
var InternalStateModule = __webpack_require__(39903);
var defineIterator = __webpack_require__(23626);
var createIterResultObject = __webpack_require__(11811);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),

/***/ 74282:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var uncurryThis = __webpack_require__(30638);
var getOwnPropertyDescriptor = (__webpack_require__(70101).f);
var toLength = __webpack_require__(71296);
var toString = __webpack_require__(43313);
var notARegExp = __webpack_require__(21265);
var requireObjectCoercible = __webpack_require__(45940);
var correctIsRegExpLogic = __webpack_require__(6870);
var IS_PURE = __webpack_require__(27609);

var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return stringSlice(that, index, index + search.length) === search;
  }
});


/***/ }),

/***/ 87588:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var $trim = (__webpack_require__(95980).trim);
var forcedStringTrimMethod = __webpack_require__(67760);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ 61039:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-async-explicit-resource-management
defineWellKnownSymbol('asyncDispose');


/***/ }),

/***/ 9174:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),

/***/ 66903:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var globalThis = __webpack_require__(44326);
var call = __webpack_require__(72115);
var uncurryThis = __webpack_require__(33686);
var IS_PURE = __webpack_require__(27609);
var DESCRIPTORS = __webpack_require__(86714);
var NATIVE_SYMBOL = __webpack_require__(92945);
var fails = __webpack_require__(59109);
var hasOwn = __webpack_require__(76959);
var isPrototypeOf = __webpack_require__(60875);
var anObject = __webpack_require__(50953);
var toIndexedObject = __webpack_require__(34555);
var toPropertyKey = __webpack_require__(47091);
var $toString = __webpack_require__(43313);
var createPropertyDescriptor = __webpack_require__(2270);
var nativeObjectCreate = __webpack_require__(81022);
var objectKeys = __webpack_require__(12078);
var getOwnPropertyNamesModule = __webpack_require__(95354);
var getOwnPropertyNamesExternal = __webpack_require__(54704);
var getOwnPropertySymbolsModule = __webpack_require__(80367);
var getOwnPropertyDescriptorModule = __webpack_require__(70101);
var definePropertyModule = __webpack_require__(89751);
var definePropertiesModule = __webpack_require__(5835);
var propertyIsEnumerableModule = __webpack_require__(91687);
var defineBuiltIn = __webpack_require__(13198);
var defineBuiltInAccessor = __webpack_require__(29372);
var shared = __webpack_require__(65019);
var sharedKey = __webpack_require__(48805);
var hiddenKeys = __webpack_require__(13151);
var uid = __webpack_require__(59734);
var wellKnownSymbol = __webpack_require__(99909);
var wrappedWellKnownSymbolModule = __webpack_require__(57681);
var defineWellKnownSymbol = __webpack_require__(27621);
var defineSymbolToPrimitive = __webpack_require__(28188);
var setToStringTag = __webpack_require__(59745);
var InternalStateModule = __webpack_require__(39903);
var $forEach = (__webpack_require__(63711).forEach);

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = globalThis.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var RangeError = globalThis.RangeError;
var TypeError = globalThis.TypeError;
var QObject = globalThis.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var fallbackDefineProperty = function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
};

var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a !== 7;
}) ? fallbackDefineProperty : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw new TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      var $this = this === undefined ? globalThis : this;
      if ($this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
      var descriptor = createPropertyDescriptor(1, value);
      try {
        setSymbolDescriptor($this, tag, descriptor);
      } catch (error) {
        if (!(error instanceof RangeError)) throw error;
        fallbackDefineProperty($this, tag, descriptor);
      }
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://tc39.es/ecma262/#sec-symbol.prototype.description
    defineBuiltInAccessor(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ 58793:
/***/ (() => {

// empty


/***/ }),

/***/ 34278:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-explicit-resource-management
defineWellKnownSymbol('dispose');


/***/ }),

/***/ 30952:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var getBuiltIn = __webpack_require__(67869);
var hasOwn = __webpack_require__(76959);
var toString = __webpack_require__(43313);
var shared = __webpack_require__(65019);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(62342);

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),

/***/ 9935:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),

/***/ 95242:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),

/***/ 15337:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ 98101:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(66903);
__webpack_require__(30952);
__webpack_require__(91818);
__webpack_require__(68388);
__webpack_require__(95591);


/***/ }),

/***/ 91818:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var hasOwn = __webpack_require__(76959);
var isSymbol = __webpack_require__(26443);
var tryToString = __webpack_require__(58069);
var shared = __webpack_require__(65019);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(62342);

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),

/***/ 69688:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');


/***/ }),

/***/ 35030:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),

/***/ 89635:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),

/***/ 52191:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),

/***/ 5621:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),

/***/ 20107:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),

/***/ 59922:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);
var defineSymbolToPrimitive = __webpack_require__(28188);

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();


/***/ }),

/***/ 73995:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(67869);
var defineWellKnownSymbol = __webpack_require__(27621);
var setToStringTag = __webpack_require__(59745);

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag(getBuiltIn('Symbol'), 'Symbol');


/***/ }),

/***/ 86396:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),

/***/ 43484:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var FREEZING = __webpack_require__(15182);
var globalThis = __webpack_require__(44326);
var uncurryThis = __webpack_require__(33686);
var defineBuiltIns = __webpack_require__(84805);
var InternalMetadataModule = __webpack_require__(29549);
var collection = __webpack_require__(93314);
var collectionWeak = __webpack_require__(8075);
var isObject = __webpack_require__(63492);
var enforceInternalState = (__webpack_require__(39903).enforce);
var fails = __webpack_require__(59109);
var NATIVE_WEAK_MAP = __webpack_require__(3184);

var $Object = Object;
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray = Array.isArray;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = $Object.isExtensible;
// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = $Object.isFrozen;
// eslint-disable-next-line es/no-object-issealed -- safe
var isSealed = $Object.isSealed;
// eslint-disable-next-line es/no-object-freeze -- safe
var freeze = $Object.freeze;
// eslint-disable-next-line es/no-object-seal -- safe
var seal = $Object.seal;

var IS_IE11 = !globalThis.ActiveXObject && 'ActiveXObject' in globalThis;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);
var WeakMapPrototype = $WeakMap.prototype;
var nativeSet = uncurryThis(WeakMapPrototype.set);

// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
var hasMSEdgeFreezingBug = function () {
  return FREEZING && fails(function () {
    var frozenArray = freeze([]);
    nativeSet(new $WeakMap(), frozenArray, 1);
    return !isFrozen(frozenArray);
  });
};

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP) if (IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
  var nativeHas = uncurryThis(WeakMapPrototype.has);
  var nativeGet = uncurryThis(WeakMapPrototype.get);
  defineBuiltIns(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen['delete'](key);
      } return nativeDelete(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      } return nativeHas(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      } return nativeGet(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else nativeSet(this, key, value);
      return this;
    }
  });
// Chakra Edge frozen keys fix
} else if (hasMSEdgeFreezingBug()) {
  defineBuiltIns(WeakMapPrototype, {
    set: function set(key, value) {
      var arrayIntegrityLevel;
      if (isArray(key)) {
        if (isFrozen(key)) arrayIntegrityLevel = freeze;
        else if (isSealed(key)) arrayIntegrityLevel = seal;
      }
      nativeSet(this, key, value);
      if (arrayIntegrityLevel) arrayIntegrityLevel(key);
      return this;
    }
  });
}


/***/ }),

/***/ 37234:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var aCallable = __webpack_require__(89092);
var aWeakMap = __webpack_require__(91911);
var aWeakKey = __webpack_require__(56678);
var WeakMapHelpers = __webpack_require__(85061);
var IS_PURE = __webpack_require__(27609);

var get = WeakMapHelpers.get;
var has = WeakMapHelpers.has;
var set = WeakMapHelpers.set;

var FORCED = IS_PURE || !function () {
  try {
    // eslint-disable-next-line es/no-weak-map, no-throw-literal -- testing
    if (WeakMap.prototype.getOrInsertComputed) new WeakMap().getOrInsertComputed(1, function () { throw 1; });
  } catch (error) {
    // FF144 Nightly - Beta 3 bug
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1988369
    return error instanceof TypeError;
  }
}();

// `WeakMap.prototype.getOrInsertComputed` method
// https://github.com/tc39/proposal-upsert
$({ target: 'WeakMap', proto: true, real: true, forced: FORCED }, {
  getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
    aWeakMap(this);
    aWeakKey(key);
    aCallable(callbackfn);
    if (has(this, key)) return get(this, key);
    var value = callbackfn(key);
    set(this, key, value);
    return value;
  }
});


/***/ }),

/***/ 60592:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var aWeakMap = __webpack_require__(91911);
var WeakMapHelpers = __webpack_require__(85061);
var IS_PURE = __webpack_require__(27609);

var get = WeakMapHelpers.get;
var has = WeakMapHelpers.has;
var set = WeakMapHelpers.set;

// `WeakMap.prototype.getOrInsert` method
// https://github.com/tc39/proposal-upsert
$({ target: 'WeakMap', proto: true, real: true, forced: IS_PURE }, {
  getOrInsert: function getOrInsert(key, value) {
    if (has(aWeakMap(this), key)) return get(this, key);
    set(this, key, value);
    return value;
  }
});


/***/ }),

/***/ 35994:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(43484);


/***/ }),

/***/ 49063:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(99909);
var defineProperty = (__webpack_require__(89751).f);

var METADATA = wellKnownSymbol('metadata');
var FunctionPrototype = Function.prototype;

// Function.prototype[@@metadata]
// https://github.com/tc39/proposal-decorator-metadata
if (FunctionPrototype[METADATA] === undefined) {
  defineProperty(FunctionPrototype, METADATA, {
    value: null
  });
}


/***/ }),

/***/ 53174:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(22747);


/***/ }),

/***/ 63308:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(61039);


/***/ }),

/***/ 47878:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.customMatcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('customMatcher');


/***/ }),

/***/ 33057:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(34278);


/***/ }),

/***/ 82604:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var isRegisteredSymbol = __webpack_require__(87980);

// `Symbol.isRegisteredSymbol` method
// https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
$({ target: 'Symbol', stat: true }, {
  isRegisteredSymbol: isRegisteredSymbol
});


/***/ }),

/***/ 60359:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var isRegisteredSymbol = __webpack_require__(87980);

// `Symbol.isRegistered` method
// obsolete version of https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
$({ target: 'Symbol', stat: true, name: 'isRegisteredSymbol' }, {
  isRegistered: isRegisteredSymbol
});


/***/ }),

/***/ 85718:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var isWellKnownSymbol = __webpack_require__(89642);

// `Symbol.isWellKnownSymbol` method
// https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
$({ target: 'Symbol', stat: true, forced: true }, {
  isWellKnownSymbol: isWellKnownSymbol
});


/***/ }),

/***/ 13465:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var isWellKnownSymbol = __webpack_require__(89642);

// `Symbol.isWellKnown` method
// obsolete version of https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
$({ target: 'Symbol', stat: true, name: 'isWellKnownSymbol', forced: true }, {
  isWellKnown: isWellKnownSymbol
});


/***/ }),

/***/ 10634:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.matcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('matcher');


/***/ }),

/***/ 75585:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.metadataKey` well-known symbol
// https://github.com/tc39/proposal-decorator-metadata
defineWellKnownSymbol('metadataKey');


/***/ }),

/***/ 1975:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.metadata` well-known symbol
// https://github.com/tc39/proposal-decorators
defineWellKnownSymbol('metadata');


/***/ }),

/***/ 48335:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ }),

/***/ 95350:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(27621);

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');


/***/ }),

/***/ 8050:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(27621);

defineWellKnownSymbol('replaceAll');


/***/ }),

/***/ 36803:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(32110);
var DOMIterables = __webpack_require__(68630);
var globalThis = __webpack_require__(44326);
var setToStringTag = __webpack_require__(59745);
var Iterators = __webpack_require__(55059);

for (var COLLECTION_NAME in DOMIterables) {
  setToStringTag(globalThis[COLLECTION_NAME], COLLECTION_NAME);
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),

/***/ 54236:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(32110);
__webpack_require__(91167);
var $ = __webpack_require__(82592);
var globalThis = __webpack_require__(44326);
var safeGetBuiltIn = __webpack_require__(9511);
var getBuiltIn = __webpack_require__(67869);
var call = __webpack_require__(72115);
var uncurryThis = __webpack_require__(33686);
var DESCRIPTORS = __webpack_require__(86714);
var USE_NATIVE_URL = __webpack_require__(93070);
var defineBuiltIn = __webpack_require__(13198);
var defineBuiltInAccessor = __webpack_require__(29372);
var defineBuiltIns = __webpack_require__(84805);
var setToStringTag = __webpack_require__(59745);
var createIteratorConstructor = __webpack_require__(48676);
var InternalStateModule = __webpack_require__(39903);
var anInstance = __webpack_require__(22913);
var isCallable = __webpack_require__(33663);
var hasOwn = __webpack_require__(76959);
var bind = __webpack_require__(67926);
var classof = __webpack_require__(50005);
var anObject = __webpack_require__(50953);
var isObject = __webpack_require__(63492);
var $toString = __webpack_require__(43313);
var create = __webpack_require__(81022);
var createPropertyDescriptor = __webpack_require__(2270);
var getIterator = __webpack_require__(19547);
var getIteratorMethod = __webpack_require__(96213);
var createIterResultObject = __webpack_require__(11811);
var validateArgumentsLength = __webpack_require__(96638);
var wellKnownSymbol = __webpack_require__(99909);
var arraySort = __webpack_require__(33558);

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var TypeError = globalThis.TypeError;
var encodeURIComponent = globalThis.encodeURIComponent;
var fromCharCode = String.fromCharCode;
var fromCodePoint = getBuiltIn('String', 'fromCodePoint');
var $parseInt = parseInt;
var charAt = uncurryThis(''.charAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var splice = uncurryThis([].splice);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var exec = uncurryThis(/./.exec);

var plus = /\+/g;
var FALLBACK_REPLACER = '\uFFFD';
var VALID_HEX = /^[0-9a-f]+$/i;

var parseHexOctet = function (string, start) {
  var substr = stringSlice(string, start, start + 2);
  if (!exec(VALID_HEX, substr)) return NaN;

  return $parseInt(substr, 16);
};

var getLeadingOnes = function (octet) {
  var count = 0;
  for (var mask = 0x80; mask > 0 && (octet & mask) !== 0; mask >>= 1) {
    count++;
  }
  return count;
};

var utf8Decode = function (octets) {
  var codePoint = null;

  switch (octets.length) {
    case 1:
      codePoint = octets[0];
      break;
    case 2:
      codePoint = (octets[0] & 0x1F) << 6 | (octets[1] & 0x3F);
      break;
    case 3:
      codePoint = (octets[0] & 0x0F) << 12 | (octets[1] & 0x3F) << 6 | (octets[2] & 0x3F);
      break;
    case 4:
      codePoint = (octets[0] & 0x07) << 18 | (octets[1] & 0x3F) << 12 | (octets[2] & 0x3F) << 6 | (octets[3] & 0x3F);
      break;
  }

  return codePoint > 0x10FFFF ? null : codePoint;
};

var decode = function (input) {
  input = replace(input, plus, ' ');
  var length = input.length;
  var result = '';
  var i = 0;

  while (i < length) {
    var decodedChar = charAt(input, i);

    if (decodedChar === '%') {
      if (charAt(input, i + 1) === '%' || i + 3 > length) {
        result += '%';
        i++;
        continue;
      }

      var octet = parseHexOctet(input, i + 1);

      // eslint-disable-next-line no-self-compare -- NaN check
      if (octet !== octet) {
        result += decodedChar;
        i++;
        continue;
      }

      i += 2;
      var byteSequenceLength = getLeadingOnes(octet);

      if (byteSequenceLength === 0) {
        decodedChar = fromCharCode(octet);
      } else {
        if (byteSequenceLength === 1 || byteSequenceLength > 4) {
          result += FALLBACK_REPLACER;
          i++;
          continue;
        }

        var octets = [octet];
        var sequenceIndex = 1;

        while (sequenceIndex < byteSequenceLength) {
          i++;
          if (i + 3 > length || charAt(input, i) !== '%') break;

          var nextByte = parseHexOctet(input, i + 1);

          // eslint-disable-next-line no-self-compare -- NaN check
          if (nextByte !== nextByte) {
            i += 3;
            break;
          }
          if (nextByte > 191 || nextByte < 128) break;

          push(octets, nextByte);
          i += 2;
          sequenceIndex++;
        }

        if (octets.length !== byteSequenceLength) {
          result += FALLBACK_REPLACER;
          continue;
        }

        var codePoint = utf8Decode(octets);
        if (codePoint === null) {
          result += FALLBACK_REPLACER;
        } else {
          decodedChar = fromCodePoint(codePoint);
        }
      }
    }

    result += decodedChar;
    i++;
  }

  return result;
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace(encodeURIComponent(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    target: getInternalParamsState(params).entries,
    index: 0,
    kind: kind
  });
}, URL_SEARCH_PARAMS, function next() {
  var state = getInternalIteratorState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
    return createIterResultObject(undefined, true);
  }
  var entry = target[index];
  switch (state.kind) {
    case 'keys': return createIterResultObject(entry.key, false);
    case 'values': return createIterResultObject(entry.value, false);
  } return createIterResultObject([entry.key, entry.value], false);
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject(init)) this.parseObject(init);
    else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var entries = this.entries;
    var iteratorMethod = getIteratorMethod(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call(next, iterator)).done) {
        entryIterator = getIterator(anObject(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call(entryNext, entryIterator)).done ||
          (second = call(entryNext, entryIterator)).done ||
          !call(entryNext, entryIterator).done
        ) throw new TypeError('Expected sequence with length 2');
        push(entries, { key: $toString(first.value), value: $toString(second.value) });
      }
    } else for (var key in object) if (hasOwn(object, key)) {
      push(entries, { key: key, value: $toString(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var entries = this.entries;
      var attributes = split(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split(attribute, '=');
          push(entries, {
            key: decode(shift(entry)),
            value: decode(join(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      push(result, serialize(entry.key) + '=' + serialize(entry.value));
    } return join(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var state = setInternalState(this, new URLSearchParamsState(init));
  if (!DESCRIPTORS) this.size = state.entries.length;
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    var state = getInternalParamsState(this);
    validateArgumentsLength(arguments.length, 2);
    push(state.entries, { key: $toString(name), value: $toString(value) });
    if (!DESCRIPTORS) this.size++;
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name /* , value */) {
    var state = getInternalParamsState(this);
    var length = validateArgumentsLength(arguments.length, 1);
    var entries = state.entries;
    var key = $toString(name);
    var $value = length < 2 ? undefined : arguments[1];
    var value = $value === undefined ? $value : $toString($value);
    var index = 0;
    while (index < entries.length) {
      var entry = entries[index];
      if (entry.key === key && (value === undefined || entry.value === value)) {
        splice(entries, index, 1);
        if (value !== undefined) break;
      } else index++;
    }
    if (!DESCRIPTORS) this.size = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength(arguments.length, 1);
    var key = $toString(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength(arguments.length, 1);
    var key = $toString(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name /* , value */) {
    var entries = getInternalParamsState(this).entries;
    var length = validateArgumentsLength(arguments.length, 1);
    var key = $toString(name);
    var $value = length < 2 ? undefined : arguments[1];
    var value = $value === undefined ? $value : $toString($value);
    var index = 0;
    while (index < entries.length) {
      var entry = entries[index++];
      if (entry.key === key && (value === undefined || entry.value === value)) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    var state = getInternalParamsState(this);
    validateArgumentsLength(arguments.length, 1);
    var entries = state.entries;
    var found = false;
    var key = $toString(name);
    var val = $toString(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push(entries, { key: key, value: val });
    if (!DESCRIPTORS) this.size = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS) defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
  get: function size() {
    return getInternalParamsState(this).entries.length;
  },
  configurable: true,
  enumerable: true
});

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable(Headers)) {
  var headersHas = uncurryThis(HeadersPrototype.has);
  var headersSet = uncurryThis(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject(init)) {
      var body = init.body;
      var headers;
      if (classof(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create(init, {
          body: createPropertyDescriptor(0, $toString(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable(nativeFetch)) {
    $({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ 78293:
/***/ (() => {

// empty


/***/ }),

/***/ 92024:
/***/ (() => {

// empty


/***/ }),

/***/ 1786:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(54236);


/***/ }),

/***/ 22915:
/***/ (() => {

// empty


/***/ }),

/***/ 17816:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var getBuiltIn = __webpack_require__(67869);
var fails = __webpack_require__(59109);
var validateArgumentsLength = __webpack_require__(96638);
var toString = __webpack_require__(43313);
var USE_NATIVE_URL = __webpack_require__(93070);

var URL = getBuiltIn('URL');

// https://github.com/nodejs/node/issues/47505
// https://github.com/denoland/deno/issues/18893
var THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails(function () {
  URL.canParse();
});

// Bun ~ 1.0.30 bug
// https://github.com/oven-sh/bun/issues/9250
var WRONG_ARITY = fails(function () {
  return URL.canParse.length !== 1;
});

// `URL.canParse` method
// https://url.spec.whatwg.org/#dom-url-canparse
$({ target: 'URL', stat: true, forced: !THROWS_WITHOUT_ARGUMENTS || WRONG_ARITY }, {
  canParse: function canParse(url) {
    var length = validateArgumentsLength(arguments.length, 1);
    var urlString = toString(url);
    var base = length < 2 || arguments[1] === undefined ? undefined : toString(arguments[1]);
    try {
      return !!new URL(urlString, base);
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 63232:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(57590);
var $ = __webpack_require__(82592);
var DESCRIPTORS = __webpack_require__(86714);
var USE_NATIVE_URL = __webpack_require__(93070);
var globalThis = __webpack_require__(44326);
var bind = __webpack_require__(67926);
var uncurryThis = __webpack_require__(33686);
var defineBuiltIn = __webpack_require__(13198);
var defineBuiltInAccessor = __webpack_require__(29372);
var anInstance = __webpack_require__(22913);
var hasOwn = __webpack_require__(76959);
var assign = __webpack_require__(92283);
var arrayFrom = __webpack_require__(52194);
var arraySlice = __webpack_require__(32886);
var codeAt = (__webpack_require__(20581).codeAt);
var toASCII = __webpack_require__(82551);
var $toString = __webpack_require__(43313);
var setToStringTag = __webpack_require__(59745);
var validateArgumentsLength = __webpack_require__(96638);
var URLSearchParamsModule = __webpack_require__(54236);
var InternalStateModule = __webpack_require__(39903);

var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;

var NativeURL = globalThis.URL;
var TypeError = globalThis.TypeError;
var parseInt = globalThis.parseInt;
var floor = Math.floor;
var pow = Math.pow;
var charAt = uncurryThis(''.charAt);
var exec = uncurryThis(/./.exec);
var join = uncurryThis([].join);
var numberToString = uncurryThis(1.1.toString);
var pop = uncurryThis([].pop);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var toLowerCase = uncurryThis(''.toLowerCase);
var unshift = uncurryThis([].unshift);

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[a-z]/i;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */
// eslint-disable-next-line no-unassigned-vars -- expected `undefined` value
var EOF;

// https://url.spec.whatwg.org/#ipv4-number-parser
var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] === '') {
    parts.length--;
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part === '') return input;
    radix = 10;
    if (part.length > 1 && charAt(part, 0) === '0') {
      radix = exec(HEX_START, part) ? 16 : 8;
      part = stringSlice(part, radix === 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return input;
      number = parseInt(part, radix);
    }
    push(numbers, number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index === partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = pop(numbers);
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return charAt(input, pointer);
  };

  if (chr() === ':') {
    if (charAt(input, 1) !== ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (chr()) {
    if (pieceIndex === 8) return;
    if (chr() === ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && exec(HEX, chr())) {
      value = value * 16 + parseInt(chr(), 16);
      pointer++;
      length++;
    }
    if (chr() === '.') {
      if (length === 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (chr()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (chr() === '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!exec(DIGIT, chr())) return;
        while (exec(DIGIT, chr())) {
          number = parseInt(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece === 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;
      }
      if (numbersSeen !== 4) return;
      break;
    } else if (chr() === ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex !== 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex !== 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  return currLength > maxLength ? currStart : maxIndex;
};

// https://url.spec.whatwg.org/#host-serializing
var serializeHost = function (host) {
  var result, index, compress, ignore0;

  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor(host / 256);
    }
    return join(result, '.');
  }

  // ipv6
  if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  }

  return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
};

// https://url.spec.whatwg.org/#special-scheme
var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

// https://url.spec.whatwg.org/#windows-drive-letter
var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length === 2 && exec(ALPHA, charAt(string, 0))
    && ((second = charAt(string, 1)) === ':' || (!normalized && second === '|'));
};

// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (
    string.length === 2 ||
    ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

// https://url.spec.whatwg.org/#single-dot-path-segment
var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
};

// https://url.spec.whatwg.org/#double-dot-path-segment
var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

var URLState = function (url, isBase, base) {
  var urlString = $toString(url);
  var baseState, failure, searchParams;
  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw new TypeError(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw new TypeError(failure);
    searchParams = getInternalSearchParamsState(new URLSearchParams());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};

URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;

    input = $toString(input);

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = replace(input, LEADING_C0_CONTROL_OR_SPACE, '');
      input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
    }

    input = replace(input, TAB_AND_NEW_LINE, '');

    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (chr && exec(ALPHA, chr)) {
            buffer += toLowerCase(chr);
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;

        case SCHEME:
          if (chr && (exec(ALPHANUMERIC, chr) || chr === '+' || chr === '-' || chr === '.')) {
            buffer += toLowerCase(chr);
          } else if (chr === ':') {
            if (stateOverride && (
              (url.isSpecial() !== hasOwn(specialSchemes, buffer)) ||
              (buffer === 'file' && (url.includesCredentials() || url.port !== null)) ||
              (url.scheme === 'file' && !url.host)
            )) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme === 'file') {
              state = FILE;
            } else if (url.isSpecial() && base && base.scheme === url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] === '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              push(url.path, '');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;

        case NO_SCHEME:
          if (!base || (base.cannotBeABaseURL && chr !== '#')) return INVALID_SCHEME;
          if (base.cannotBeABaseURL && chr === '#') {
            url.scheme = base.scheme;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme === 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr === '/' && codePoints[pointer + 1] === '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          } break;

        case PATH_OR_AUTHORITY:
          if (chr === '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;
          if (chr === EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
          } else if (chr === '/' || (chr === '\\' && url.isSpecial())) {
            state = RELATIVE_SLASH;
          } else if (chr === '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr === '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.path.length--;
            state = PATH;
            continue;
          } break;

        case RELATIVE_SLASH:
          if (url.isSpecial() && (chr === '/' || chr === '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr === '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          } break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr !== '/' || charAt(buffer, pointer + 1) !== '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr !== '/' && chr !== '\\') {
            state = AUTHORITY;
            continue;
          } break;

        case AUTHORITY:
          if (chr === '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint === ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;
              else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (
            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
            (chr === '\\' && url.isSpecial())
          ) {
            if (seenAt && buffer === '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;
          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme === 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr === ':' && !seenBracket) {
            if (buffer === '') return INVALID_HOST;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride === HOSTNAME) return;
          } else if (
            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
            (chr === '\\' && url.isSpecial())
          ) {
            if (url.isSpecial() && buffer === '') return INVALID_HOST;
            if (stateOverride && buffer === '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr === '[') seenBracket = true;
            else if (chr === ']') seenBracket = false;
            buffer += chr;
          } break;

        case PORT:
          if (exec(DIGIT, chr)) {
            buffer += chr;
          } else if (
            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
            (chr === '\\' && url.isSpecial()) ||
            stateOverride
          ) {
            if (buffer !== '') {
              var port = parseInt(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;

        case FILE:
          url.scheme = 'file';
          if (chr === '/' || chr === '\\') state = FILE_SLASH;
          else if (base && base.scheme === 'file') {
            switch (chr) {
              case EOF:
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.query = base.query;
                break;
              case '?':
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.query = '';
                state = QUERY;
                break;
              case '#':
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.query = base.query;
                url.fragment = '';
                state = FRAGMENT;
                break;
              default:
                if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                  url.host = base.host;
                  url.path = arraySlice(base.path);
                  url.shortenPath();
                }
                state = PATH;
                continue;
            }
          } else {
            state = PATH;
            continue;
          } break;

        case FILE_SLASH:
          if (chr === '/' || chr === '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme === 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
            else url.host = base.host;
          }
          state = PATH;
          continue;

        case FILE_HOST:
          if (chr === EOF || chr === '/' || chr === '\\' || chr === '?' || chr === '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer === '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host === 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            } continue;
          } else buffer += chr;
          break;

        case PATH_START:
          if (url.isSpecial()) {
            state = PATH;
            if (chr !== '/' && chr !== '\\') continue;
          } else if (!stateOverride && chr === '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr === '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr !== EOF) {
            state = PATH;
            if (chr !== '/') continue;
          } break;

        case PATH:
          if (
            chr === EOF || chr === '/' ||
            (chr === '\\' && url.isSpecial()) ||
            (!stateOverride && (chr === '?' || chr === '#'))
          ) {
            if (isDoubleDot(buffer)) {
              url.shortenPath();
              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else if (isSingleDot(buffer)) {
              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else {
              if (url.scheme === 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
              }
              push(url.path, buffer);
            }
            buffer = '';
            if (url.scheme === 'file' && (chr === EOF || chr === '?' || chr === '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                shift(url.path);
              }
            }
            if (chr === '?') {
              url.query = '';
              state = QUERY;
            } else if (chr === '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(chr, pathPercentEncodeSet);
          } break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr === '?') {
            url.query = '';
            state = QUERY;
          } else if (chr === '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr !== EOF) {
            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case QUERY:
          if (!stateOverride && chr === '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr !== EOF) {
            if (chr === "'" && url.isSpecial()) url.query += '%27';
            else if (chr === '#') url.query += '%23';
            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case FRAGMENT:
          if (chr !== EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;
    if (charAt(input, 0) === '[') {
      if (charAt(input, input.length - 1) !== ']') return INVALID_HOST;
      result = parseIPv6(stringSlice(input, 1, -1));
      if (!result) return INVALID_HOST;
      this.host = result;
    // opaque host
    } else if (!this.isSpecial()) {
      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      this.host = result;
    } else {
      input = toASCII(input);
      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      this.host = result;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme === 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username !== '' || this.password !== '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return hasOwn(specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;
    if (pathSize && (this.scheme !== 'file' || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme === 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw new TypeError(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme === 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme === 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse($toString(protocol) + ':', SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = arrayFrom($toString(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = arrayFrom($toString(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? ''
      : port === null ? serializeHost(host)
      : serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : $toString(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = $toString(port);
    if (port === '') this.port = null;
    else this.parse(port, PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = $toString(search);
    if (search === '') {
      this.query = null;
    } else {
      if (charAt(search, 0) === '?') search = stringSlice(search, 1);
      this.query = '';
      this.parse(search, QUERY);
    }
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = $toString(hash);
    if (hash === '') {
      this.fragment = null;
      return;
    }
    if (charAt(hash, 0) === '#') hash = stringSlice(hash, 1);
    this.fragment = '';
    this.parse(hash, FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLPrototype);
  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = setInternalState(that, new URLState(url, false, base));
  if (!DESCRIPTORS) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};

var URLPrototype = URLConstructor.prototype;

var accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};

if (DESCRIPTORS) {
  // `URL.prototype.href` accessors pair
  // https://url.spec.whatwg.org/#dom-url-href
  defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
  // `URL.prototype.origin` getter
  // https://url.spec.whatwg.org/#dom-url-origin
  defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
  // `URL.prototype.protocol` accessors pair
  // https://url.spec.whatwg.org/#dom-url-protocol
  defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
  // `URL.prototype.username` accessors pair
  // https://url.spec.whatwg.org/#dom-url-username
  defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
  // `URL.prototype.password` accessors pair
  // https://url.spec.whatwg.org/#dom-url-password
  defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
  // `URL.prototype.host` accessors pair
  // https://url.spec.whatwg.org/#dom-url-host
  defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
  // `URL.prototype.hostname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hostname
  defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
  // `URL.prototype.port` accessors pair
  // https://url.spec.whatwg.org/#dom-url-port
  defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
  // `URL.prototype.pathname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-pathname
  defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
  // `URL.prototype.search` accessors pair
  // https://url.spec.whatwg.org/#dom-url-search
  defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
  // `URL.prototype.searchParams` getter
  // https://url.spec.whatwg.org/#dom-url-searchparams
  defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
  // `URL.prototype.hash` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hash
  defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
defineBuiltIn(URLPrototype, 'toJSON', function toJSON() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
defineBuiltIn(URLPrototype, 'toString', function toString() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ 55254:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(63232);


/***/ }),

/***/ 34199:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(82592);
var getBuiltIn = __webpack_require__(67869);
var validateArgumentsLength = __webpack_require__(96638);
var toString = __webpack_require__(43313);
var USE_NATIVE_URL = __webpack_require__(93070);

var URL = getBuiltIn('URL');

// `URL.parse` method
// https://url.spec.whatwg.org/#dom-url-canparse
$({ target: 'URL', stat: true, forced: !USE_NATIVE_URL }, {
  parse: function parse(url) {
    var length = validateArgumentsLength(arguments.length, 1);
    var urlString = toString(url);
    var base = length < 2 || arguments[1] === undefined ? undefined : toString(arguments[1]);
    try {
      return new URL(urlString, base);
    } catch (error) {
      return null;
    }
  }
});


/***/ }),

/***/ 73142:
/***/ (() => {

// empty


/***/ }),

/***/ 11099:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(78194);

module.exports = parent;


/***/ }),

/***/ 83209:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(98212);

module.exports = parent;


/***/ }),

/***/ 92387:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(48524);

module.exports = parent;


/***/ }),

/***/ 56628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(13953);

module.exports = parent;


/***/ }),

/***/ 44437:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(19874);

module.exports = parent;


/***/ }),

/***/ 38996:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(88171);

module.exports = parent;


/***/ }),

/***/ 97013:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(36803);
var classof = __webpack_require__(50005);
var hasOwn = __webpack_require__(76959);
var isPrototypeOf = __webpack_require__(60875);
var method = __webpack_require__(11099);

var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.keys;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.keys)
    || hasOwn(DOMIterables, classof(it)) ? method : own;
};


/***/ }),

/***/ 51219:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(93508);

module.exports = parent;


/***/ }),

/***/ 20803:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(74578);

module.exports = parent;


/***/ }),

/***/ 65377:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(2602);

module.exports = parent;


/***/ }),

/***/ 82661:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(24504);

module.exports = parent;


/***/ }),

/***/ 76513:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(36482);

module.exports = parent;


/***/ }),

/***/ 84563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(36803);
var classof = __webpack_require__(50005);
var hasOwn = __webpack_require__(76959);
var isPrototypeOf = __webpack_require__(60875);
var method = __webpack_require__(83209);

var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.values;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.values)
    || hasOwn(DOMIterables, classof(it)) ? method : own;
};


/***/ }),

/***/ 93083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(86198);

module.exports = parent;


/***/ }),

/***/ 11144:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(95859);

module.exports = parent;


/***/ }),

/***/ 30902:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(35715);

module.exports = parent;


/***/ }),

/***/ 85706:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(55631);

module.exports = parent;


/***/ }),

/***/ 59722:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(76917);

module.exports = parent;


/***/ }),

/***/ 77324:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(53175);
__webpack_require__(36803);

module.exports = parent;


/***/ }),

/***/ 45098:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(76405);

module.exports = parent;


/***/ }),

/***/ 23407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(2912);
__webpack_require__(36803);

module.exports = parent;


/***/ }),

/***/ 5807:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(98256);

module.exports = parent;


/***/ }),

/***/ 9561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(24710);

module.exports = parent;


/***/ }),

/***/ 84854:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(75535);
__webpack_require__(36803);

module.exports = parent;


/***/ }),

/***/ 5270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(17209);
__webpack_require__(36803);

module.exports = parent;


/***/ }),

/***/ 80201:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(21218);

module.exports = parent;


/***/ }),

/***/ 40879:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(32609);

module.exports = parent;


/***/ }),

/***/ 61217:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(64032);
__webpack_require__(36803);

module.exports = parent;


/***/ }),

/***/ 51825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(1786);
__webpack_require__(78293);
__webpack_require__(92024);
__webpack_require__(22915);
var path = __webpack_require__(87337);

module.exports = path.URLSearchParams;


/***/ }),

/***/ 32609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(51825);
__webpack_require__(55254);
__webpack_require__(17816);
__webpack_require__(34199);
__webpack_require__(73142);
var path = __webpack_require__(87337);

module.exports = path.URL;


/***/ }),

/***/ 49900:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(55149);

module.exports = parent;


/***/ }),

/***/ 90390:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(49347);
__webpack_require__(17700);
__webpack_require__(87241);
__webpack_require__(54211);
__webpack_require__(23275);
__webpack_require__(25064);
__webpack_require__(59001);
__webpack_require__(58837);
__webpack_require__(88700);
__webpack_require__(30538);
__webpack_require__(97809);
__webpack_require__(23993);
__webpack_require__(37228);
__webpack_require__(38345);
__webpack_require__(79616);
var path = __webpack_require__(63247);

module.exports = path.Reflect;


/***/ }),

/***/ 70089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* unused reexport */ __webpack_require__(27035);


/***/ }),

/***/ 27035:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(49900);
__webpack_require__(77234);
__webpack_require__(81842);
__webpack_require__(18943);
__webpack_require__(15196);
__webpack_require__(18328);
__webpack_require__(14809);
__webpack_require__(31259);
__webpack_require__(48276);
__webpack_require__(5936);

module.exports = parent;


/***/ }),

/***/ 18522:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(97157);
var tryToString = __webpack_require__(93447);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 34412:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isConstructor = __webpack_require__(2173);
var tryToString = __webpack_require__(93447);

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ 49362:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPossiblePrototype = __webpack_require__(70005);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 10983:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPrototypeOf = __webpack_require__(95881);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 82007:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(70930);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 28308:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(70383);

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ 69457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(65317);
var toAbsoluteIndex = __webpack_require__(8810);
var lengthOfArrayLike = __webpack_require__(39942);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 86045:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(81024);
var IndexedObject = __webpack_require__(33151);
var toObject = __webpack_require__(50437);
var lengthOfArrayLike = __webpack_require__(39942);
var arraySpeciesCreate = __webpack_require__(26445);
var createProperty = __webpack_require__(43648);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var resIndex = 0;
    var target = IS_MAP ? arraySpeciesCreate($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) createProperty(target, index, result);    // map
        else if (result) switch (TYPE) {
          case 3: return true;                                // some
          case 5: return value;                               // find
          case 6: return index;                               // findIndex
          case 2: createProperty(target, resIndex++, value);  // filter
        } else switch (TYPE) {
          case 4: return false;                               // every
          case 7: createProperty(target, resIndex++, value);  // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ 96496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);

module.exports = uncurryThis([].slice);


/***/ }),

/***/ 90105:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isArray = __webpack_require__(48600);
var isConstructor = __webpack_require__(2173);
var isObject = __webpack_require__(70930);
var wellKnownSymbol = __webpack_require__(56547);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ 26445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arraySpeciesConstructor = __webpack_require__(90105);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 70109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(18522);
var isNullOrUndefined = __webpack_require__(57157);
var lengthOfArrayLike = __webpack_require__(39942);
var toObject = __webpack_require__(50437);
var createProperty = __webpack_require__(43648);
var MapHelpers = __webpack_require__(28040);
var iterate = __webpack_require__(99807);

var Map = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapSet = MapHelpers.set;

// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
module.exports = function uniqueBy(resolver) {
  var that = toObject(this);
  var length = lengthOfArrayLike(that);
  var result = [];
  var map = new Map();
  var resolverFunction = !isNullOrUndefined(resolver) ? aCallable(resolver) : function (value) {
    return value;
  };
  var index, item, key;
  for (index = 0; index < length; index++) {
    item = that[index];
    key = resolverFunction(item);
    if (!mapHas(map, key)) mapSet(map, key, item);
  }
  index = 0;
  iterate(map, function (value) {
    createProperty(result, index++, value);
  });
  return result;
};


/***/ }),

/***/ 86076:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(56547);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 55792:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 98731:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(27964);
var isCallable = __webpack_require__(97157);
var classofRaw = __webpack_require__(55792);
var wellKnownSymbol = __webpack_require__(56547);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 67850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(65416);
var defineBuiltInAccessor = __webpack_require__(27402);
var defineBuiltIns = __webpack_require__(51303);
var bind = __webpack_require__(81024);
var anInstance = __webpack_require__(10983);
var isNullOrUndefined = __webpack_require__(57157);
var iterate = __webpack_require__(67708);
var defineIterator = __webpack_require__(36000);
var createIterResultObject = __webpack_require__(2545);
var setSpecies = __webpack_require__(28833);
var DESCRIPTORS = __webpack_require__(20092);
var fastKey = (__webpack_require__(3787).fastKey);
var InternalStateModule = __webpack_require__(92733);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: null,
        last: null,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: null,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key === key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = null;
          entry = entry.next;
        }
        state.first = state.last = null;
        state.index = create(null);
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first === entry) state.first = next;
          if (state.last === entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: null
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = null;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind === 'keys') return createIterResultObject(entry.key, false);
      if (kind === 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ 76569:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);
var defineBuiltIns = __webpack_require__(51303);
var getWeakData = (__webpack_require__(3787).getWeakData);
var anInstance = __webpack_require__(10983);
var anObject = __webpack_require__(82007);
var isNullOrUndefined = __webpack_require__(57157);
var isObject = __webpack_require__(70930);
var iterate = __webpack_require__(67708);
var ArrayIterationModule = __webpack_require__(86045);
var hasOwn = __webpack_require__(47121);
var InternalStateModule = __webpack_require__(92733);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (state) {
  return state.frozen || (state.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice(this.entries, index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: null
      });
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    defineBuiltIns(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          if (data) return data[state.id];
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};


/***/ }),

/***/ 23332:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var globalThis = __webpack_require__(98896);
var uncurryThis = __webpack_require__(3712);
var isForced = __webpack_require__(96812);
var defineBuiltIn = __webpack_require__(13368);
var InternalMetadataModule = __webpack_require__(3787);
var iterate = __webpack_require__(67708);
var anInstance = __webpack_require__(10983);
var isCallable = __webpack_require__(97157);
var isNullOrUndefined = __webpack_require__(57157);
var isObject = __webpack_require__(70930);
var fails = __webpack_require__(70383);
var checkCorrectnessOfIteration = __webpack_require__(86076);
var setToStringTag = __webpack_require__(7023);
var inheritIfRequired = __webpack_require__(23855);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = globalThis[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY === 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ 13884:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(47121);
var ownKeys = __webpack_require__(47495);
var getOwnPropertyDescriptorModule = __webpack_require__(3059);
var definePropertyModule = __webpack_require__(94401);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 45347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(70383);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 2545:
/***/ ((module) => {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ 96091:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(20092);
var definePropertyModule = __webpack_require__(94401);
var createPropertyDescriptor = __webpack_require__(36788);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 36788:
/***/ ((module) => {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 43648:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(20092);
var definePropertyModule = __webpack_require__(94401);
var createPropertyDescriptor = __webpack_require__(36788);

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ 27402:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var makeBuiltIn = __webpack_require__(9659);
var defineProperty = __webpack_require__(94401);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ 13368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(97157);
var definePropertyModule = __webpack_require__(94401);
var makeBuiltIn = __webpack_require__(9659);
var defineGlobalProperty = __webpack_require__(58905);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 51303:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineBuiltIn = __webpack_require__(13368);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ 58905:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(98896);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ 20092:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(70383);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 59047:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(98896);
var isObject = __webpack_require__(70930);

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 66631:
/***/ ((module) => {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 99943:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(98896);

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ 54863:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(98896);
var userAgent = __webpack_require__(99943);

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 45286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(98896);
var getOwnPropertyDescriptor = (__webpack_require__(3059).f);
var createNonEnumerableProperty = __webpack_require__(96091);
var defineBuiltIn = __webpack_require__(13368);
var defineGlobalProperty = __webpack_require__(58905);
var copyConstructorProperties = __webpack_require__(13884);
var isForced = __webpack_require__(96812);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 70383:
/***/ ((module) => {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 78552:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(70383);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ 97321:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(11896);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 81024:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(89412);
var aCallable = __webpack_require__(18522);
var NATIVE_BIND = __webpack_require__(11896);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 11896:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(70383);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 42038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);
var aCallable = __webpack_require__(18522);
var isObject = __webpack_require__(70930);
var hasOwn = __webpack_require__(47121);
var arraySlice = __webpack_require__(96496);
var NATIVE_BIND = __webpack_require__(11896);

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    var list = [];
    var i = 0;
    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ 91661:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(11896);

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 7934:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(20092);
var hasOwn = __webpack_require__(47121);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 51554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);
var aCallable = __webpack_require__(18522);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 89412:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classofRaw = __webpack_require__(55792);
var uncurryThis = __webpack_require__(3712);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ 3712:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(11896);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 97671:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(98896);
var isCallable = __webpack_require__(97157);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ 59667:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(98731);
var getMethod = __webpack_require__(1806);
var isNullOrUndefined = __webpack_require__(57157);
var Iterators = __webpack_require__(35149);
var wellKnownSymbol = __webpack_require__(56547);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 63153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(91661);
var aCallable = __webpack_require__(18522);
var anObject = __webpack_require__(82007);
var tryToString = __webpack_require__(93447);
var getIteratorMethod = __webpack_require__(59667);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 1806:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(18522);
var isNullOrUndefined = __webpack_require__(57157);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 98896:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 47121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);
var toObject = __webpack_require__(50437);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 30885:
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ 7293:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(97671);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 1821:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(20092);
var fails = __webpack_require__(70383);
var createElement = __webpack_require__(59047);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 33151:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);
var fails = __webpack_require__(70383);
var classof = __webpack_require__(55792);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 23855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(97157);
var isObject = __webpack_require__(70930);
var setPrototypeOf = __webpack_require__(45047);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 60026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);
var isCallable = __webpack_require__(97157);
var store = __webpack_require__(31853);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 3787:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var uncurryThis = __webpack_require__(3712);
var hiddenKeys = __webpack_require__(30885);
var isObject = __webpack_require__(70930);
var hasOwn = __webpack_require__(47121);
var defineProperty = (__webpack_require__(94401).f);
var getOwnPropertyNamesModule = __webpack_require__(28064);
var getOwnPropertyNamesExternalModule = __webpack_require__(92650);
var isExtensible = __webpack_require__(52348);
var uid = __webpack_require__(59008);
var FREEZING = __webpack_require__(78552);

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ 92733:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(87534);
var globalThis = __webpack_require__(98896);
var isObject = __webpack_require__(70930);
var createNonEnumerableProperty = __webpack_require__(96091);
var hasOwn = __webpack_require__(47121);
var shared = __webpack_require__(31853);
var sharedKey = __webpack_require__(8183);
var hiddenKeys = __webpack_require__(30885);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 33505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(56547);
var Iterators = __webpack_require__(35149);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 48600:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(55792);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 97157:
/***/ ((module) => {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 2173:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);
var fails = __webpack_require__(70383);
var isCallable = __webpack_require__(97157);
var classof = __webpack_require__(98731);
var getBuiltIn = __webpack_require__(97671);
var inspectSource = __webpack_require__(60026);

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 53199:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(47121);

module.exports = function (descriptor) {
  return descriptor !== undefined && (hasOwn(descriptor, 'value') || hasOwn(descriptor, 'writable'));
};


/***/ }),

/***/ 96812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(70383);
var isCallable = __webpack_require__(97157);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 57157:
/***/ ((module) => {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 70930:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(97157);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 70005:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(70930);

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ 20027:
/***/ ((module) => {

"use strict";

module.exports = false;


/***/ }),

/***/ 54709:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(97671);
var isCallable = __webpack_require__(97157);
var isPrototypeOf = __webpack_require__(95881);
var USE_SYMBOL_AS_UID = __webpack_require__(30736);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 86987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(91661);

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


/***/ }),

/***/ 67708:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(81024);
var call = __webpack_require__(91661);
var anObject = __webpack_require__(82007);
var tryToString = __webpack_require__(93447);
var isArrayIteratorMethod = __webpack_require__(33505);
var lengthOfArrayLike = __webpack_require__(39942);
var isPrototypeOf = __webpack_require__(95881);
var getIterator = __webpack_require__(63153);
var getIteratorMethod = __webpack_require__(59667);
var iteratorClose = __webpack_require__(69491);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 69491:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(91661);
var anObject = __webpack_require__(82007);
var getMethod = __webpack_require__(1806);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 65626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = (__webpack_require__(66889).IteratorPrototype);
var create = __webpack_require__(65416);
var createPropertyDescriptor = __webpack_require__(36788);
var setToStringTag = __webpack_require__(7023);
var Iterators = __webpack_require__(35149);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 36000:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var call = __webpack_require__(91661);
var IS_PURE = __webpack_require__(20027);
var FunctionName = __webpack_require__(7934);
var isCallable = __webpack_require__(97157);
var createIteratorConstructor = __webpack_require__(65626);
var getPrototypeOf = __webpack_require__(22995);
var setPrototypeOf = __webpack_require__(45047);
var setToStringTag = __webpack_require__(7023);
var createNonEnumerableProperty = __webpack_require__(96091);
var defineBuiltIn = __webpack_require__(13368);
var wellKnownSymbol = __webpack_require__(56547);
var Iterators = __webpack_require__(35149);
var IteratorsCore = __webpack_require__(66889);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ 66889:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(70383);
var isCallable = __webpack_require__(97157);
var isObject = __webpack_require__(70930);
var create = __webpack_require__(65416);
var getPrototypeOf = __webpack_require__(22995);
var defineBuiltIn = __webpack_require__(13368);
var wellKnownSymbol = __webpack_require__(56547);
var IS_PURE = __webpack_require__(20027);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 35149:
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ 39942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toLength = __webpack_require__(47214);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 9659:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);
var fails = __webpack_require__(70383);
var isCallable = __webpack_require__(97157);
var hasOwn = __webpack_require__(47121);
var DESCRIPTORS = __webpack_require__(20092);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(7934).CONFIGURABLE);
var inspectSource = __webpack_require__(60026);
var InternalStateModule = __webpack_require__(92733);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 28040:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;

module.exports = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis(MapPrototype.set),
  get: uncurryThis(MapPrototype.get),
  has: uncurryThis(MapPrototype.has),
  remove: uncurryThis(MapPrototype['delete']),
  proto: MapPrototype
};


/***/ }),

/***/ 99807:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);
var iterateSimple = __webpack_require__(86987);
var MapHelpers = __webpack_require__(28040);

var Map = MapHelpers.Map;
var MapPrototype = MapHelpers.proto;
var forEach = uncurryThis(MapPrototype.forEach);
var entries = uncurryThis(MapPrototype.entries);
var next = entries(new Map()).next;

module.exports = function (map, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: entries(map), next: next }, function (entry) {
    return fn(entry[1], entry[0]);
  }) : forEach(map, fn);
};


/***/ }),

/***/ 17749:
/***/ ((module) => {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 65416:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(82007);
var definePropertiesModule = __webpack_require__(46673);
var enumBugKeys = __webpack_require__(66631);
var hiddenKeys = __webpack_require__(30885);
var html = __webpack_require__(7293);
var documentCreateElement = __webpack_require__(59047);
var sharedKey = __webpack_require__(8183);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 46673:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(20092);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(44350);
var definePropertyModule = __webpack_require__(94401);
var anObject = __webpack_require__(82007);
var toIndexedObject = __webpack_require__(65317);
var objectKeys = __webpack_require__(30320);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 94401:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(20092);
var IE8_DOM_DEFINE = __webpack_require__(1821);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(44350);
var anObject = __webpack_require__(82007);
var toPropertyKey = __webpack_require__(93881);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 3059:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(20092);
var call = __webpack_require__(91661);
var propertyIsEnumerableModule = __webpack_require__(89269);
var createPropertyDescriptor = __webpack_require__(36788);
var toIndexedObject = __webpack_require__(65317);
var toPropertyKey = __webpack_require__(93881);
var hasOwn = __webpack_require__(47121);
var IE8_DOM_DEFINE = __webpack_require__(1821);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 92650:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(55792);
var toIndexedObject = __webpack_require__(65317);
var $getOwnPropertyNames = (__webpack_require__(28064).f);
var arraySlice = __webpack_require__(96496);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 28064:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(35764);
var enumBugKeys = __webpack_require__(66631);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 14309:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 22995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(47121);
var isCallable = __webpack_require__(97157);
var toObject = __webpack_require__(50437);
var sharedKey = __webpack_require__(8183);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(45347);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 52348:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(70383);
var isObject = __webpack_require__(70930);
var classof = __webpack_require__(55792);
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(28308);

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ 95881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 35764:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);
var hasOwn = __webpack_require__(47121);
var toIndexedObject = __webpack_require__(65317);
var indexOf = (__webpack_require__(69457).indexOf);
var hiddenKeys = __webpack_require__(30885);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 30320:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(35764);
var enumBugKeys = __webpack_require__(66631);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 89269:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 45047:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(51554);
var isObject = __webpack_require__(70930);
var requireObjectCoercible = __webpack_require__(20118);
var aPossiblePrototype = __webpack_require__(49362);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 96651:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(27964);
var classof = __webpack_require__(98731);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 25054:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(91661);
var isCallable = __webpack_require__(97157);
var isObject = __webpack_require__(70930);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 47495:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(97671);
var uncurryThis = __webpack_require__(3712);
var getOwnPropertyNamesModule = __webpack_require__(28064);
var getOwnPropertySymbolsModule = __webpack_require__(14309);
var anObject = __webpack_require__(82007);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 63247:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(98896);

module.exports = globalThis;


/***/ }),

/***/ 86241:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(19089);
__webpack_require__(1628);
var getBuiltIn = __webpack_require__(97671);
var uncurryThis = __webpack_require__(3712);
var shared = __webpack_require__(4961);

var Map = getBuiltIn('Map');
var WeakMap = getBuiltIn('WeakMap');
var push = uncurryThis([].push);

var metadata = shared('metadata');
var store = metadata.store || (metadata.store = new WeakMap());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};

var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};

var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};

var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};

var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { push(keys, key); });
  return keys;
};

var toMetadataKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};

module.exports = {
  store: store,
  getMap: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  toKey: toMetadataKey
};


/***/ }),

/***/ 20118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isNullOrUndefined = __webpack_require__(57157);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 28833:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(97671);
var defineBuiltInAccessor = __webpack_require__(27402);
var wellKnownSymbol = __webpack_require__(56547);
var DESCRIPTORS = __webpack_require__(20092);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 7023:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineProperty = (__webpack_require__(94401).f);
var hasOwn = __webpack_require__(47121);
var wellKnownSymbol = __webpack_require__(56547);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 8183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var shared = __webpack_require__(4961);
var uid = __webpack_require__(59008);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 31853:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IS_PURE = __webpack_require__(20027);
var globalThis = __webpack_require__(98896);
var defineGlobalProperty = __webpack_require__(58905);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.48.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
  license: 'https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 4961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var store = __webpack_require__(31853);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 10719:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(54863);
var fails = __webpack_require__(70383);
var globalThis = __webpack_require__(98896);

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 8810:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(45707);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 65317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(33151);
var requireObjectCoercible = __webpack_require__(20118);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 45707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var trunc = __webpack_require__(17749);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 47214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(45707);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 50437:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var requireObjectCoercible = __webpack_require__(20118);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 66841:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(91661);
var isObject = __webpack_require__(70930);
var isSymbol = __webpack_require__(54709);
var getMethod = __webpack_require__(1806);
var ordinaryToPrimitive = __webpack_require__(25054);
var wellKnownSymbol = __webpack_require__(56547);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 93881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__(66841);
var isSymbol = __webpack_require__(54709);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 27964:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(56547);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 93447:
/***/ ((module) => {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 59008:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3712);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 30736:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(10719);

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 44350:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(20092);
var fails = __webpack_require__(70383);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 87534:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(98896);
var isCallable = __webpack_require__(97157);

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 56547:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(98896);
var shared = __webpack_require__(4961);
var hasOwn = __webpack_require__(47121);
var uid = __webpack_require__(59008);
var NATIVE_SYMBOL = __webpack_require__(10719);
var USE_SYMBOL_AS_UID = __webpack_require__(30736);

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 10811:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var collection = __webpack_require__(23332);
var collectionStrong = __webpack_require__(67850);

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ 19089:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(10811);


/***/ }),

/***/ 49347:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(27964);
var defineBuiltIn = __webpack_require__(13368);
var toString = __webpack_require__(96651);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ 17700:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var functionApply = __webpack_require__(97321);
var aCallable = __webpack_require__(18522);
var anObject = __webpack_require__(82007);
var fails = __webpack_require__(70383);

// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
  // eslint-disable-next-line es/no-reflect -- required for testing
  Reflect.apply(function () { /* empty */ });
});

// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
$({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
  apply: function apply(target, thisArgument, argumentsList) {
    return functionApply(aCallable(target), thisArgument, anObject(argumentsList));
  }
});


/***/ }),

/***/ 87241:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var getBuiltIn = __webpack_require__(97671);
var apply = __webpack_require__(97321);
var bind = __webpack_require__(42038);
var aConstructor = __webpack_require__(34412);
var anObject = __webpack_require__(82007);
var isObject = __webpack_require__(70930);
var create = __webpack_require__(65416);
var fails = __webpack_require__(70383);

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target === newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 54211:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var DESCRIPTORS = __webpack_require__(20092);
var anObject = __webpack_require__(82007);
var toPropertyKey = __webpack_require__(93881);
var definePropertyModule = __webpack_require__(94401);
var fails = __webpack_require__(70383);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var ERROR_INSTEAD_OF_FALSE = fails(function () {
  // eslint-disable-next-line es/no-reflect -- required for testing
  Reflect.defineProperty(definePropertyModule.f({}, 1, { value: 1 }), 1, { value: 2 });
});

// `Reflect.defineProperty` method
// https://tc39.es/ecma262/#sec-reflect.defineproperty
$({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !DESCRIPTORS }, {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    var key = toPropertyKey(propertyKey);
    anObject(attributes);
    try {
      definePropertyModule.f(target, key, attributes);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 23275:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var anObject = __webpack_require__(82007);
var getOwnPropertyDescriptor = (__webpack_require__(3059).f);

// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
$({ target: 'Reflect', stat: true }, {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ 59001:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var DESCRIPTORS = __webpack_require__(20092);
var anObject = __webpack_require__(82007);
var getOwnPropertyDescriptorModule = __webpack_require__(3059);

// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
$({ target: 'Reflect', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ 58837:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var anObject = __webpack_require__(82007);
var objectGetPrototypeOf = __webpack_require__(22995);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(45347);

// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
$({ target: 'Reflect', stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(target) {
    return objectGetPrototypeOf(anObject(target));
  }
});


/***/ }),

/***/ 25064:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var call = __webpack_require__(91661);
var isObject = __webpack_require__(70930);
var anObject = __webpack_require__(82007);
var isDataDescriptor = __webpack_require__(53199);
var getOwnPropertyDescriptorModule = __webpack_require__(3059);
var getPrototypeOf = __webpack_require__(22995);

// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);
  if (descriptor) return isDataDescriptor(descriptor)
    ? descriptor.value
    : descriptor.get === undefined ? undefined : call(descriptor.get, receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ 88700:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);

// `Reflect.has` method
// https://tc39.es/ecma262/#sec-reflect.has
$({ target: 'Reflect', stat: true }, {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ 30538:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var anObject = __webpack_require__(82007);
var $isExtensible = __webpack_require__(52348);

// `Reflect.isExtensible` method
// https://tc39.es/ecma262/#sec-reflect.isextensible
$({ target: 'Reflect', stat: true }, {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible(target);
  }
});


/***/ }),

/***/ 97809:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var ownKeys = __webpack_require__(47495);

// `Reflect.ownKeys` method
// https://tc39.es/ecma262/#sec-reflect.ownkeys
$({ target: 'Reflect', stat: true }, {
  ownKeys: ownKeys
});


/***/ }),

/***/ 23993:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var getBuiltIn = __webpack_require__(97671);
var anObject = __webpack_require__(82007);
var FREEZING = __webpack_require__(78552);

// `Reflect.preventExtensions` method
// https://tc39.es/ecma262/#sec-reflect.preventextensions
$({ target: 'Reflect', stat: true, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
      if (objectPreventExtensions) objectPreventExtensions(target);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 38345:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var anObject = __webpack_require__(82007);
var aPossiblePrototype = __webpack_require__(49362);
var objectSetPrototypeOf = __webpack_require__(45047);

// `Reflect.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.setprototypeof
if (objectSetPrototypeOf) $({ target: 'Reflect', stat: true }, {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    anObject(target);
    aPossiblePrototype(proto);
    try {
      objectSetPrototypeOf(target, proto);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 37228:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var call = __webpack_require__(91661);
var anObject = __webpack_require__(82007);
var isObject = __webpack_require__(70930);
var isDataDescriptor = __webpack_require__(53199);
var fails = __webpack_require__(70383);
var definePropertyModule = __webpack_require__(94401);
var getOwnPropertyDescriptorModule = __webpack_require__(3059);
var getPrototypeOf = __webpack_require__(22995);
var createPropertyDescriptor = __webpack_require__(36788);

// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  var existingDescriptor, prototype, setter;
  if (!ownDescriptor) {
    if (isObject(prototype = getPrototypeOf(target))) {
      return set(prototype, propertyKey, V, receiver);
    }
    ownDescriptor = createPropertyDescriptor(0);
  }
  if (isDataDescriptor(ownDescriptor)) {
    if (ownDescriptor.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      definePropertyModule.f(receiver, propertyKey, existingDescriptor);
    } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
  } else {
    setter = ownDescriptor.set;
    if (setter === undefined) return false;
    call(setter, receiver, V);
  } return true;
}

// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var MS_EDGE_BUG = fails(function () {
  var Constructor = function () { /* empty */ };
  var object = definePropertyModule.f(new Constructor(), 'a', { configurable: true });
  // eslint-disable-next-line es/no-reflect -- required for testing
  return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
});

$({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
  set: set
});


/***/ }),

/***/ 79616:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var globalThis = __webpack_require__(98896);
var setToStringTag = __webpack_require__(7023);

$({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(globalThis.Reflect, 'Reflect', true);


/***/ }),

/***/ 44962:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var FREEZING = __webpack_require__(78552);
var globalThis = __webpack_require__(98896);
var uncurryThis = __webpack_require__(3712);
var defineBuiltIns = __webpack_require__(51303);
var InternalMetadataModule = __webpack_require__(3787);
var collection = __webpack_require__(23332);
var collectionWeak = __webpack_require__(76569);
var isObject = __webpack_require__(70930);
var enforceInternalState = (__webpack_require__(92733).enforce);
var fails = __webpack_require__(70383);
var NATIVE_WEAK_MAP = __webpack_require__(87534);

var $Object = Object;
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray = Array.isArray;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = $Object.isExtensible;
// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = $Object.isFrozen;
// eslint-disable-next-line es/no-object-issealed -- safe
var isSealed = $Object.isSealed;
// eslint-disable-next-line es/no-object-freeze -- safe
var freeze = $Object.freeze;
// eslint-disable-next-line es/no-object-seal -- safe
var seal = $Object.seal;

var IS_IE11 = !globalThis.ActiveXObject && 'ActiveXObject' in globalThis;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);
var WeakMapPrototype = $WeakMap.prototype;
var nativeSet = uncurryThis(WeakMapPrototype.set);

// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
var hasMSEdgeFreezingBug = function () {
  return FREEZING && fails(function () {
    var frozenArray = freeze([]);
    nativeSet(new $WeakMap(), frozenArray, 1);
    return !isFrozen(frozenArray);
  });
};

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP) if (IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
  var nativeHas = uncurryThis(WeakMapPrototype.has);
  var nativeGet = uncurryThis(WeakMapPrototype.get);
  defineBuiltIns(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen['delete'](key);
      } return nativeDelete(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      } return nativeHas(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      } return nativeGet(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else nativeSet(this, key, value);
      return this;
    }
  });
// Chakra Edge frozen keys fix
} else if (hasMSEdgeFreezingBug()) {
  defineBuiltIns(WeakMapPrototype, {
    set: function set(key, value) {
      var arrayIntegrityLevel;
      if (isArray(key)) {
        if (isFrozen(key)) arrayIntegrityLevel = freeze;
        else if (isSealed(key)) arrayIntegrityLevel = seal;
      }
      nativeSet(this, key, value);
      if (arrayIntegrityLevel) arrayIntegrityLevel(key);
      return this;
    }
  });
}


/***/ }),

/***/ 1628:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(44962);


/***/ }),

/***/ 77234:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(45286);
var ReflectMetadataModule = __webpack_require__(86241);
var anObject = __webpack_require__(82007);

var toMetadataKey = ReflectMetadataModule.toKey;
var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

// `Reflect.defineMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  defineMetadata: function defineMetadata(metadataKey, metadataValue, target /* , targetKey */) {
    var targetKey = arguments.length < 4 ? undefined : toMetadataKey(arguments[3]);
    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 81842:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var ReflectMetadataModule = __webpack_require__(86241);
var anObject = __webpack_require__(82007);

var toMetadataKey = ReflectMetadataModule.toKey;
var getOrCreateMetadataMap = ReflectMetadataModule.getMap;
var store = ReflectMetadataModule.store;

// `Reflect.deleteMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
    if (metadataMap.size) return true;
    var targetMetadata = store.get(target);
    targetMetadata['delete'](targetKey);
    return !!targetMetadata.size || store['delete'](target);
  }
});


/***/ }),

/***/ 15196:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(45286);
var uncurryThis = __webpack_require__(3712);
var ReflectMetadataModule = __webpack_require__(86241);
var anObject = __webpack_require__(82007);
var getPrototypeOf = __webpack_require__(22995);
var $arrayUniqueBy = __webpack_require__(70109);

var arrayUniqueBy = uncurryThis($arrayUniqueBy);
var concat = uncurryThis([].concat);
var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? arrayUniqueBy(concat(oKeys, pKeys)) : pKeys : oKeys;
};

// `Reflect.getMetadataKeys` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
    var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
    return ordinaryMetadataKeys(anObject(target), targetKey);
  }
});


/***/ }),

/***/ 18943:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(45286);
var ReflectMetadataModule = __webpack_require__(86241);
var anObject = __webpack_require__(82007);
var getPrototypeOf = __webpack_require__(22995);

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

// `Reflect.getMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryGetMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 14809:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(45286);
var ReflectMetadataModule = __webpack_require__(86241);
var anObject = __webpack_require__(82007);

var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.getOwnMetadataKeys` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
    var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
    return ordinaryOwnMetadataKeys(anObject(target), targetKey);
  }
});


/***/ }),

/***/ 18328:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(45286);
var ReflectMetadataModule = __webpack_require__(86241);
var anObject = __webpack_require__(82007);

var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.getOwnMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryGetOwnMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 31259:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(45286);
var ReflectMetadataModule = __webpack_require__(86241);
var anObject = __webpack_require__(82007);
var getPrototypeOf = __webpack_require__(22995);

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

// `Reflect.hasMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryHasMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 48276:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(45286);
var ReflectMetadataModule = __webpack_require__(86241);
var anObject = __webpack_require__(82007);

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.hasOwnMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryHasOwnMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 5936:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(45286);
var ReflectMetadataModule = __webpack_require__(86241);
var anObject = __webpack_require__(82007);

var toMetadataKey = ReflectMetadataModule.toKey;
var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

// `Reflect.metadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  metadata: function metadata(metadataKey, metadataValue) {
    return function decorator(target, key) {
      ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetadataKey(key));
    };
  }
});


/***/ }),

/***/ 55149:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(90390);

module.exports = parent;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.48.0/node_modules/core-js/features/reflect/index.js
var reflect = __webpack_require__(70089);
;// ./src/polyfills.ts

;// ./src/user-script/polyfills.ts

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js
var object_assign = __webpack_require__(83755);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js
var includes = __webpack_require__(35043);
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);
;// ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/token.class.js
/**
 * Used to create unique typed service identifier.
 * Useful when service has only interface, but don't have a class.
 */
var Token = /** @class */function () {
  /**
   * @param name Token name, optional and only used for debugging purposes.
   */
  function Token(name) {
    this.name = name;
  }
  return Token;
}();

;// ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/error/service-not-found.error.js
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

/**
 * Thrown when requested service was not found.
 */
var ServiceNotFoundError = /** @class */function (_super) {
  __extends(ServiceNotFoundError, _super);
  function ServiceNotFoundError(identifier) {
    var _a, _b;
    var _this = _super.call(this) || this;
    _this.name = 'ServiceNotFoundError';
    /** Normalized identifier name used in the error message. */
    _this.normalizedIdentifier = '<UNKNOWN_IDENTIFIER>';
    if (typeof identifier === 'string') {
      _this.normalizedIdentifier = identifier;
    } else if (identifier instanceof Token) {
      _this.normalizedIdentifier = "Token<" + (identifier.name || 'UNSET_NAME') + ">";
    } else if (identifier && (identifier.name || ((_a = identifier.prototype) === null || _a === void 0 ? void 0 : _a.name))) {
      _this.normalizedIdentifier = "MaybeConstructable<" + identifier.name + ">" || 0;
    }
    return _this;
  }
  Object.defineProperty(ServiceNotFoundError.prototype, "message", {
    get: function get() {
      return "Service with \"" + this.normalizedIdentifier + "\" identifier was not found in the container. " + "Register it before usage via explicitly calling the \"Container.set\" function or using the \"@Service()\" decorator.";
    },
    enumerable: false,
    configurable: true
  });
  return ServiceNotFoundError;
}(Error);

;// ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/error/cannot-instantiate-value.error.js
var cannot_instantiate_value_error_extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

/**
 * Thrown when DI cannot inject value into property decorated by @Inject decorator.
 */
var CannotInstantiateValueError = /** @class */function (_super) {
  cannot_instantiate_value_error_extends(CannotInstantiateValueError, _super);
  function CannotInstantiateValueError(identifier) {
    var _a, _b;
    var _this = _super.call(this) || this;
    _this.name = 'CannotInstantiateValueError';
    /** Normalized identifier name used in the error message. */
    _this.normalizedIdentifier = '<UNKNOWN_IDENTIFIER>';
    // TODO: Extract this to a helper function and share between this and NotFoundError.
    if (typeof identifier === 'string') {
      _this.normalizedIdentifier = identifier;
    } else if (identifier instanceof Token) {
      _this.normalizedIdentifier = "Token<" + (identifier.name || 'UNSET_NAME') + ">";
    } else if (identifier && (identifier.name || ((_a = identifier.prototype) === null || _a === void 0 ? void 0 : _a.name))) {
      _this.normalizedIdentifier = "MaybeConstructable<" + identifier.name + ">" || 0;
    }
    return _this;
  }
  Object.defineProperty(CannotInstantiateValueError.prototype, "message", {
    get: function get() {
      return "Cannot instantiate the requested value for the \"" + this.normalizedIdentifier + "\" identifier. " + "The related metadata doesn't contain a factory or a type to instantiate.";
    },
    enumerable: false,
    configurable: true
  });
  return CannotInstantiateValueError;
}(Error);

;// ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/empty.const.js
var EMPTY_VALUE = Symbol('EMPTY_VALUE');
;// ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/container-instance.class.js


var __assign = undefined && undefined.__assign || function () {
  __assign = (assign_default()) || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
};





/**
 * TypeDI can have multiple containers.
 * One container is ContainerInstance.
 */
var ContainerInstance = /** @class */function () {
  function ContainerInstance(id) {
    /** All registered services in the container. */
    this.services = [];
    this.id = id;
  }
  ContainerInstance.prototype.has = function (identifier) {
    return !!this.findService(identifier);
  };
  ContainerInstance.prototype.get = function (identifier) {
    var globalContainer = Container.of(undefined);
    var globalService = globalContainer.findService(identifier);
    var scopedService = this.findService(identifier);
    if (globalService && globalService.global === true) return this.getServiceValue(globalService);
    if (scopedService) return this.getServiceValue(scopedService);
    /** If it's the first time requested in the child container we load it from parent and set it. */
    if (globalService && this !== globalContainer) {
      var clonedService = __assign({}, globalService);
      clonedService.value = EMPTY_VALUE;
      /**
       * We need to immediately set the empty value from the root container
       * to prevent infinite lookup in cyclic dependencies.
       */
      this.set(clonedService);
      var value = this.getServiceValue(clonedService);
      this.set(__assign(__assign({}, clonedService), {
        value: value
      }));
      return value;
    }
    if (globalService) return this.getServiceValue(globalService);
    throw new ServiceNotFoundError(identifier);
  };
  ContainerInstance.prototype.getMany = function (identifier) {
    var _this = this;
    return this.findAllServices(identifier).map(function (service) {
      return _this.getServiceValue(service);
    });
  };
  ContainerInstance.prototype.set = function (identifierOrServiceMetadata, value) {
    var _this = this;
    if (identifierOrServiceMetadata instanceof Array) {
      identifierOrServiceMetadata.forEach(function (data) {
        return _this.set(data);
      });
      return this;
    }
    if (typeof identifierOrServiceMetadata === 'string' || identifierOrServiceMetadata instanceof Token) {
      return this.set({
        id: identifierOrServiceMetadata,
        type: null,
        value: value,
        factory: undefined,
        global: false,
        multiple: false,
        eager: false,
        transient: false
      });
    }
    if (typeof identifierOrServiceMetadata === 'function') {
      return this.set({
        id: identifierOrServiceMetadata,
        // TODO: remove explicit casting
        type: identifierOrServiceMetadata,
        value: value,
        factory: undefined,
        global: false,
        multiple: false,
        eager: false,
        transient: false
      });
    }
    var newService = __assign({
      id: new Token('UNREACHABLE'),
      type: null,
      factory: undefined,
      value: EMPTY_VALUE,
      global: false,
      multiple: false,
      eager: false,
      transient: false
    }, identifierOrServiceMetadata);
    var service = this.findService(newService.id);
    if (service && service.multiple !== true) {
      assign_default()(service, newService);
    } else {
      this.services.push(newService);
    }
    if (newService.eager) {
      this.get(newService.id);
    }
    return this;
  };
  /**
   * Removes services with a given service identifiers.
   */
  ContainerInstance.prototype.remove = function (identifierOrIdentifierArray) {
    var _this = this;
    if (Array.isArray(identifierOrIdentifierArray)) {
      identifierOrIdentifierArray.forEach(function (id) {
        return _this.remove(id);
      });
    } else {
      this.services = this.services.filter(function (service) {
        if (service.id === identifierOrIdentifierArray) {
          _this.destroyServiceInstance(service);
          return false;
        }
        return true;
      });
    }
    return this;
  };
  /**
   * Completely resets the container by removing all previously registered services from it.
   */
  ContainerInstance.prototype.reset = function (options) {
    var _this = this;
    if (options === void 0) {
      options = {
        strategy: 'resetValue'
      };
    }
    switch (options.strategy) {
      case 'resetValue':
        this.services.forEach(function (service) {
          return _this.destroyServiceInstance(service);
        });
        break;
      case 'resetServices':
        this.services.forEach(function (service) {
          return _this.destroyServiceInstance(service);
        });
        this.services = [];
        break;
      default:
        throw new Error('Received invalid reset strategy.');
    }
    return this;
  };
  /**
   * Returns all services registered with the given identifier.
   */
  ContainerInstance.prototype.findAllServices = function (identifier) {
    return this.services.filter(function (service) {
      return service.id === identifier;
    });
  };
  /**
   * Finds registered service in the with a given service identifier.
   */
  ContainerInstance.prototype.findService = function (identifier) {
    return this.services.find(function (service) {
      return service.id === identifier;
    });
  };
  /**
   * Gets the value belonging to `serviceMetadata.id`.
   *
   * - if `serviceMetadata.value` is already set it is immediately returned
   * - otherwise the requested type is resolved to the value saved to `serviceMetadata.value` and returned
   */
  ContainerInstance.prototype.getServiceValue = function (serviceMetadata) {
    var _a;
    var value = EMPTY_VALUE;
    /**
     * If the service value has been set to anything prior to this call we return that value.
     * NOTE: This part builds on the assumption that transient dependencies has no value set ever.
     */
    if (serviceMetadata.value !== EMPTY_VALUE) {
      return serviceMetadata.value;
    }
    /** If both factory and type is missing, we cannot resolve the requested ID. */
    if (!serviceMetadata.factory && !serviceMetadata.type) {
      throw new CannotInstantiateValueError(serviceMetadata.id);
    }
    /**
     * If a factory is defined it takes priority over creating an instance via `new`.
     * The return value of the factory is not checked, we believe by design that the user knows what he/she is doing.
     */
    if (serviceMetadata.factory) {
      /**
       * If we received the factory in the [Constructable<Factory>, "functionName"] format, we need to create the
       * factory first and then call the specified function on it.
       */
      if (serviceMetadata.factory instanceof Array) {
        var factoryInstance = void 0;
        try {
          /** Try to get the factory from TypeDI first, if failed, fall back to simply initiating the class. */
          factoryInstance = this.get(serviceMetadata.factory[0]);
        } catch (error) {
          if (error instanceof ServiceNotFoundError) {
            factoryInstance = new serviceMetadata.factory[0]();
          } else {
            throw error;
          }
        }
        value = factoryInstance[serviceMetadata.factory[1]](this, serviceMetadata.id);
      } else {
        /** If only a simple function was provided we simply call it. */
        value = serviceMetadata.factory(this, serviceMetadata.id);
      }
    }
    /**
     * If no factory was provided and only then, we create the instance from the type if it was set.
     */
    if (!serviceMetadata.factory && serviceMetadata.type) {
      var constructableTargetType = serviceMetadata.type;
      // setup constructor parameters for a newly initialized service
      var paramTypes = ((_a = Reflect) === null || _a === void 0 ? void 0 : _a.getMetadata('design:paramtypes', constructableTargetType)) || [];
      var params = this.initializeParams(constructableTargetType, paramTypes);
      // "extra feature" - always pass container instance as the last argument to the service function
      // this allows us to support javascript where we don't have decorators and emitted metadata about dependencies
      // need to be injected, and user can use provided container to get instances he needs
      params.push(this);
      value = new (constructableTargetType.bind.apply(constructableTargetType, __spreadArrays([void 0], params)))();
      // TODO: Calling this here, leads to infinite loop, because @Inject decorator registerds a handler
      // TODO: which calls Container.get, which will check if the requested type has a value set and if not
      // TODO: it will start the instantiation process over. So this is currently called outside of the if branch
      // TODO: after the current value has been assigned to the serviceMetadata.
      // this.applyPropertyHandlers(constructableTargetType, value as Constructable<unknown>);
    }
    /** If this is not a transient service, and we resolved something, then we set it as the value. */
    if (!serviceMetadata.transient && value !== EMPTY_VALUE) {
      serviceMetadata.value = value;
    }
    if (value === EMPTY_VALUE) {
      /** This branch should never execute, but better to be safe than sorry. */
      throw new CannotInstantiateValueError(serviceMetadata.id);
    }
    if (serviceMetadata.type) {
      this.applyPropertyHandlers(serviceMetadata.type, value);
    }
    return value;
  };
  /**
   * Initializes all parameter types for a given target service class.
   */
  ContainerInstance.prototype.initializeParams = function (target, paramTypes) {
    var _this = this;
    return paramTypes.map(function (paramType, index) {
      var paramHandler = Container.handlers.find(function (handler) {
        /**
         * @Inject()-ed values are stored as parameter handlers and they reference their target
         * when created. So when a class is extended the @Inject()-ed values are not inherited
         * because the handler still points to the old object only.
         *
         * As a quick fix a single level parent lookup is added via `Object.getPrototypeOf(target)`,
         * however this should be updated to a more robust solution.
         *
         * TODO: Add proper inheritance handling: either copy the handlers when a class is registered what
         * TODO: has it's parent already registered as dependency or make the lookup search up to the base Object.
         */
        return (handler.object === target || handler.object === Object.getPrototypeOf(target)) && handler.index === index;
      });
      if (paramHandler) return paramHandler.value(_this);
      if (paramType && paramType.name && !_this.isPrimitiveParamType(paramType.name)) {
        return _this.get(paramType);
      }
      return undefined;
    });
  };
  /**
   * Checks if given parameter type is primitive type or not.
   */
  ContainerInstance.prototype.isPrimitiveParamType = function (paramTypeName) {
    var _context;
    return includes_default()(_context = ['string', 'boolean', 'number', 'object']).call(_context, paramTypeName.toLowerCase());
  };
  /**
   * Applies all registered handlers on a given target class.
   */
  ContainerInstance.prototype.applyPropertyHandlers = function (target, instance) {
    var _this = this;
    Container.handlers.forEach(function (handler) {
      if (typeof handler.index === 'number') return;
      if (handler.object.constructor !== target && !(target.prototype instanceof handler.object.constructor)) return;
      if (handler.propertyName) {
        instance[handler.propertyName] = handler.value(_this);
      }
    });
  };
  /**
   * Checks if the given service metadata contains a destroyable service instance and destroys it in place. If the service
   * contains a callable function named `destroy` it is called but not awaited and the return value is ignored..
   *
   * @param serviceMetadata the service metadata containing the instance to destroy
   * @param force when true the service will be always destroyed even if it's cannot be re-created
   */
  ContainerInstance.prototype.destroyServiceInstance = function (serviceMetadata, force) {
    if (force === void 0) {
      force = false;
    }
    /** We reset value only if we can re-create it (aka type or factory exists). */
    var shouldResetValue = force || !!serviceMetadata.type || !!serviceMetadata.factory;
    if (shouldResetValue) {
      /** If we wound a function named destroy we call it without any params. */
      if (typeof (serviceMetadata === null || serviceMetadata === void 0 ? void 0 : serviceMetadata.value)['destroy'] === 'function') {
        try {
          serviceMetadata.value.destroy();
        } catch (error) {
          /** We simply ignore the errors from the destroy function. */
        }
      }
      serviceMetadata.value = EMPTY_VALUE;
    }
  };
  return ContainerInstance;
}();

;// ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/container.class.js

/**
 * Service container.
 */
var Container = /** @class */function () {
  function Container() {}
  /**
   * Gets a separate container instance for the given instance id.
   */
  Container.of = function (containerId) {
    if (containerId === void 0) {
      containerId = 'default';
    }
    if (containerId === 'default') return this.globalInstance;
    var container = this.instances.find(function (instance) {
      return instance.id === containerId;
    });
    if (!container) {
      container = new ContainerInstance(containerId);
      this.instances.push(container);
      // TODO: Why we are not reseting here? Let's reset here. (I have added the commented code.)
      // container.reset();
    }
    return container;
  };
  Container.has = function (identifier) {
    return this.globalInstance.has(identifier);
  };
  Container.get = function (identifier) {
    return this.globalInstance.get(identifier);
  };
  Container.getMany = function (id) {
    return this.globalInstance.getMany(id);
  };
  Container.set = function (identifierOrServiceMetadata, value) {
    this.globalInstance.set(identifierOrServiceMetadata, value);
    return this;
  };
  /**
   * Removes services with a given service identifiers.
   */
  Container.remove = function (identifierOrIdentifierArray) {
    this.globalInstance.remove(identifierOrIdentifierArray);
    return this;
  };
  /**
   * Completely resets the container by removing all previously registered services and handlers from it.
   */
  Container.reset = function (containerId) {
    if (containerId === void 0) {
      containerId = 'default';
    }
    if (containerId == 'default') {
      this.globalInstance.reset();
      this.instances.forEach(function (instance) {
        return instance.reset();
      });
    } else {
      var instance = this.instances.find(function (instance) {
        return instance.id === containerId;
      });
      if (instance) {
        instance.reset();
        this.instances.splice(this.instances.indexOf(instance), 1);
      }
    }
    return this;
  };
  /**
   * Registers a new handler.
   */
  Container.registerHandler = function (handler) {
    this.handlers.push(handler);
    return this;
  };
  /**
   * Helper method that imports given services.
   */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  Container.import = function (services) {
    return this;
  };
  /**
   * All registered handlers. The @Inject() decorator uses handlers internally to mark a property for injection.
   **/
  Container.handlers = [];
  /**  Global container instance. */
  Container.globalInstance = new ContainerInstance('default');
  /** Other containers created using Container.of method. */
  Container.instances = [];
  return Container;
}();

;// ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/decorators/service.decorator.js



function Service(optionsOrServiceIdentifier) {
  return function (targetConstructor) {
    var serviceMetadata = {
      id: targetConstructor,
      // TODO: Let's investigate why we receive Function type instead of a constructable.
      type: targetConstructor,
      factory: undefined,
      multiple: false,
      global: false,
      eager: false,
      transient: false,
      value: EMPTY_VALUE
    };
    if (optionsOrServiceIdentifier instanceof Token || typeof optionsOrServiceIdentifier === 'string') {
      /** We received a Token or string ID. */
      serviceMetadata.id = optionsOrServiceIdentifier;
    } else if (optionsOrServiceIdentifier) {
      /** We received a ServiceOptions object. */
      serviceMetadata.id = optionsOrServiceIdentifier.id || targetConstructor;
      serviceMetadata.factory = optionsOrServiceIdentifier.factory || undefined;
      serviceMetadata.multiple = optionsOrServiceIdentifier.multiple || false;
      serviceMetadata.global = optionsOrServiceIdentifier.global || false;
      serviceMetadata.eager = optionsOrServiceIdentifier.eager || false;
      serviceMetadata.transient = optionsOrServiceIdentifier.transient || false;
    }
    Container.set(serviceMetadata);
  };
}
;// ./src/services/index.ts


const services_Container = Container.of('default');
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/instance/ends-with.js
var ends_with = __webpack_require__(80857);
var ends_with_default = /*#__PURE__*/__webpack_require__.n(ends_with);
;// ./src/utils/hosts.ts

function isDomain(hostname, domain) {
  return hostname === domain || ends_with_default()(hostname).call(hostname, ".".concat(domain));
}
function isEh(hostname) {
  if (hostname === FORUM) return false;
  if (hostname === REPO) return false;
  return isDomain(hostname, EH);
}
function isUnion(hostname) {
  return isDomain(hostname, EXU);
}
function isEhGt(hostname) {
  return isDomain(hostname, EHGT);
}
function isEx(hostname) {
  return isDomain(hostname, EX) || isUnion(hostname);
}
function isRepo(hostname) {
  return isDomain(hostname, REPO);
}
function isHathNetwork(hostname) {
  return isDomain(hostname, HATH);
}
function isWiki(hostname) {
  return hostname === 'ehwiki.org';
}
function isValidHost(hostname) {
  if (!hostname) return false;
  return isEh(hostname) || isEx(hostname) || isHathNetwork(hostname) || isRepo(hostname) || isWiki(hostname);
}
const EX = 'exhentai.org';
const EH = 'e-hentai.org';
const EXU = 'exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion';
const EHGT = 'ehgt.org';
const REPO = 'repo.e-hentai.org';
const HATH = 'hath.network';
const FORUM = 'forums.e-hentai.org';
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/promise.js
var promise = __webpack_require__(72767);
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);
;// ./node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function tslib_es6_extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_es6_assign = function() {
  tslib_es6_assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return tslib_es6_assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function tslib_es6_spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const tslib_es6 = ({
  __extends: tslib_es6_extends,
  __assign: tslib_es6_assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays: tslib_es6_spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});

;// ./src/services/logger.ts


let Logger = class Logger {
  constructor() {
    this.prefix =  true ? '💉 脚本 ' : 0;
    this.log = console.log.bind(console, this.prefix);
    this.info = console.info.bind(console, this.prefix);
    this.warn = console.warn.bind(console, this.prefix);
    this.error = console.error.bind(console, this.prefix);
    this.debug = console.debug.bind(console, this.prefix);
    this.time = label => {
      const pLabel = "".concat(this.prefix, " ").concat(label);
      console.time(pLabel);
      return {
        label,
        log: (console.timeLog || console.log).bind(console, pLabel),
        end: console.timeEnd.bind(console, pLabel)
      };
    };
  }
};
Logger = __decorate([Service()], Logger);

;// ./src/utils/dom.ts



/** 网页加载后调用 */
function ready(callback) {
  const onError = ex => {
    const logger = Container.get(Logger);
    logger.error('执行文档加载回调失败', ex);
  };
  const f = () => {
    promise_default().resolve().then(callback).catch(onError);
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', f, {
      passive: true,
      once: true
    });
  } else {
    setTimeout(f);
  }
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js
var starts_with = __webpack_require__(68416);
var starts_with_default = /*#__PURE__*/__webpack_require__.n(starts_with);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js/global-this.js
var global_this = __webpack_require__(29922);
var global_this_default = /*#__PURE__*/__webpack_require__.n(global_this);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js
var instance_keys = __webpack_require__(68126);
var keys_default = /*#__PURE__*/__webpack_require__.n(instance_keys);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js
var instance_values = __webpack_require__(30328);
var values_default = /*#__PURE__*/__webpack_require__.n(instance_values);
;// ./node_modules/.pnpm/idb-keyval@6.2.2/node_modules/idb-keyval/dist/index.js
/* unused harmony import specifier */ var _Promise;

function promisifyRequest(request) {
  return new promise((resolve, reject) => {
    // @ts-ignore - file size hacks
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    // @ts-ignore - file size hacks
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  let dbp;
  const getDB = () => {
    if (dbp) return dbp;
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    dbp = promisifyRequest(request);
    dbp.then(db => {
      // It seems like Safari sometimes likes to just close the connection.
      // It's supposed to fire this event when that happens. Let's hope it does!
      db.onclose = () => dbp = undefined;
    }, () => {});
    return dbp;
  };
  return (txMode, callback) => getDB().then(db => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore('keyval-store', 'keyval');
  }
  return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function get(key) {
  let customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
  return customStore('readonly', store => promisifyRequest(store.get(key)));
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function set(key, value) {
  let customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetStore();
  return customStore('readwrite', store => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function setMany(entries) {
  let customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
  return customStore('readwrite', store => {
    entries.forEach(entry => store.put(entry[1], entry[0]));
    return promisifyRequest(store.transaction);
  });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function getMany(keys) {
  let customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
  return customStore('readonly', store => _Promise.all(keys.map(key => promisifyRequest(store.get(key)))));
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function update(key, updater) {
  let customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetStore();
  return customStore('readwrite', store =>
  // Need to create the promise manually.
  // If I try to chain promises, the transaction closes in browsers
  // that use a promise polyfill (IE10/11).
  new _Promise((resolve, reject) => {
    store.get(key).onsuccess = function () {
      try {
        store.put(updater(this.result), key);
        resolve(promisifyRequest(store.transaction));
      } catch (err) {
        reject(err);
      }
    };
  }));
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function del(key) {
  let customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
  return customStore('readwrite', store => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
/**
 * Delete multiple keys at once.
 *
 * @param keys List of keys to delete.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function delMany(keys) {
  let customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
  return customStore('readwrite', store => {
    keys.forEach(key => store.delete(key));
    return promisifyRequest(store.transaction);
  });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function clear() {
  let customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
  return customStore('readwrite', store => {
    store.clear();
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function () {
    if (!this.result) return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function keys() {
  let customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
  return customStore('readonly', store => {
    // Fast path for modern browsers
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, cursor => items.push(cursor.key)).then(() => items);
  });
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function values() {
  let customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
  return customStore('readonly', store => {
    // Fast path for modern browsers
    if (store.getAll) {
      return promisifyRequest(store.getAll());
    }
    const items = [];
    return eachCursor(store, cursor => items.push(cursor.value)).then(() => items);
  });
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function entries() {
  let customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
  return customStore('readonly', store => {
    // Fast path for modern browsers
    // (although, hopefully we'll get a simpler path some day)
    if (store.getAll && store.getAllKeys) {
      return _Promise.all([promisifyRequest(store.getAllKeys()), promisifyRequest(store.getAll())]).then(_ref => {
        let [keys, values] = _ref;
        return keys.map((key, i) => [key, values[i]]);
      });
    }
    const items = [];
    return customStore('readonly', store => eachCursor(store, cursor => items.push([cursor.key, cursor.value])).then(() => items));
  });
}

;// ./src/providers/user-script/storage.ts




const syncMark = '__sync__';
function parse(value) {
  if (value == null) return undefined;
  try {
    return JSON.parse(value);
  } catch (_unused) {
    return undefined;
  }
}
function serialize(value) {
  if (value === undefined) return undefined;
  try {
    return JSON.stringify(value);
  } catch (_unused2) {
    return undefined;
  }
}
class AsyncPolyfill {
  constructor() {
    this.listenerId = 1;
    this.listeners = new Map();
    this.store = createStore('EhSyringe', 'keyval');
  }
  async onAllStorageChange() {
    const values = new Map();
    for (const {
      name
    } of values_default()(_context = this.listeners).call(_context)) {
      var _context;
      if (!values.has(name)) {
        values.set(name, await this.get(name));
      }
    }
    for (const {
      name,
      listener
    } of values_default()(_context2 = this.listeners).call(_context2)) {
      var _context2;
      listener(name, undefined, values.get(name), false);
    }
  }
  onStorageChange(key, oldValue, value) {
    if (!key) {
      void this.onAllStorageChange();
      return;
    }
    for (const {
      name,
      listener
    } of values_default()(_context3 = this.listeners).call(_context3)) {
      var _context3;
      if (name !== key) continue;
      listener(name, oldValue, value, false);
    }
  }
  async get(key) {
    return await get(key, this.store);
  }
  async set(key, value) {
    const oldValue = await this.get(key);
    await set(key, value, this.store);
    this.onStorageChange(key, oldValue, value);
  }
  async delete(key) {
    const oldValue = await this.get(key);
    await del(key, this.store);
    this.onStorageChange(key, oldValue, undefined);
  }
  async keys() {
    const ks = await keys(this.store);
    return ks.filter(k => typeof k == 'string');
  }
  on(key, listener) {
    const id = this.listenerId++;
    this.listeners.set(id, {
      name: key,
      listener
    });
    return id;
  }
  off(key, id) {
    this.listeners.delete(id);
  }
}
class GmAsyncStorage {
  get(key) {
    return new (promise_default())((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(parse(GM_getValue(key)));
        } catch (ex) {
          reject(ex);
        }
      });
    });
  }
  set(key, value) {
    return new (promise_default())((resolve, reject) => {
      setTimeout(() => {
        try {
          GM_setValue(key, serialize(value));
          resolve();
        } catch (ex) {
          reject(ex);
        }
      });
    });
  }
  delete(key) {
    return new (promise_default())((resolve, reject) => {
      setTimeout(() => {
        try {
          GM_deleteValue(key);
          resolve();
        } catch (ex) {
          reject(ex);
        }
      });
    });
  }
  keys() {
    return new (promise_default())((resolve, reject) => {
      setTimeout(() => {
        try {
          const ks = GM_listValues();
          resolve(ks.filter(k => !starts_with_default()(k).call(k, syncMark)));
        } catch (ex) {
          reject(ex);
        }
      });
    });
  }
  on(key, listener) {
    return GM_addValueChangeListener(key, (key, ov, nv) => listener(key, parse(ov), parse(nv)));
  }
  off(key, id) {
    GM_removeValueChangeListener(id);
  }
}
const GM_ALL_DEFINED = typeof GM_getValue == 'function' && typeof GM_setValue == 'function' && typeof GM_deleteValue == 'function' && typeof GM_listValues == 'function' && typeof GM_addValueChangeListener == 'function' && typeof GM_removeValueChangeListener == 'function';
const storage = GM_ALL_DEFINED ? new GmAsyncStorage() : new AsyncPolyfill();
class SyncStorageBase {
  get(key) {
    const value = this.getRaw(this.KEY_PREFIX + key);
    return parse(value);
  }
  set(key, value) {
    this.setRaw(this.KEY_PREFIX + key, serialize(value));
  }
  delete(key) {
    this.setRaw(this.KEY_PREFIX + key, undefined);
  }
  keys() {
    const names = [];
    const prefix = this.KEY_PREFIX;
    for (const key of this.listRaw()) {
      if (!key) continue;
      if (starts_with_default()(key).call(key, prefix)) {
        names.push(key.slice(prefix.length));
      }
    }
    return names;
  }
}
class SyncPolyfill extends SyncStorageBase {
  constructor() {
    super(...arguments);
    this.KEY_PREFIX = 'EH_SYNC_POLYFILL_';
  }
  getRaw(key) {
    return localStorage.getItem(key);
  }
  setRaw(key, value) {
    if (value == null) {
      return localStorage.removeItem(key);
    }
    localStorage.setItem(key, value);
  }
  *listRaw() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) yield key;
    }
  }
}
class GMSyncStorage extends SyncStorageBase {
  constructor() {
    super(...arguments);
    this.KEY_PREFIX = syncMark;
  }
  getRaw(key) {
    return GM_getValue(key);
  }
  setRaw(key, value) {
    if (value == null) {
      return GM_deleteValue(key);
    }
    GM_setValue(key, value);
  }
  listRaw() {
    return GM_listValues();
  }
}
const GM_ALL_SYNC_DEFINED = typeof GM_getValue == 'function' && typeof GM_setValue == 'function' && typeof GM_deleteValue == 'function' && typeof GM_listValues == 'function';
const syncStorage = GM_ALL_SYNC_DEFINED ? new GMSyncStorage() : new SyncPolyfill();
;// ./src/services/storage.ts







var ImageLevel;
(function (ImageLevel) {
  ImageLevel[ImageLevel["hide"] = 0] = "hide";
  ImageLevel[ImageLevel["nonH"] = 1] = "nonH";
  ImageLevel[ImageLevel["r18"] = 2] = "r18";
  ImageLevel[ImageLevel["r18g"] = 3] = "r18g";
})(ImageLevel || (ImageLevel = {}));
let Storage = class Storage {
  constructor(logger) {
    this.logger = logger;
    this.defaults = {
      extensionCheck: 0,
      config: {
        translateUi: true,
        translateTag: true,
        translateTimestamp: true,
        showIntroduce: true,
        showIcon: true,
        introduceImageLevel: ImageLevel.r18g,
        autoUpdate: true,
        tagTip: true,
        overrideDbUrl: ''
      },
      database: undefined,
      databaseInfo: undefined,
      release: undefined,
      origin: 'https://e-hentai.org'
    };
    Object.defineProperty((global_this_default()), '__eh_storage__', {
      value: () => {
        (async _context => {
          const keys = await keys_default()(_context = this).call(_context);
          for (const key of keys) {
            console.log(key, await this.get(key));
          }
        })().catch(logger.error);
      }
    });
    this.migrate().catch(logger.error);
  }
  async get(key) {
    const value = await storage.get(key);
    if (value == null) return this.defaults[key];
    return value;
  }
  async set(key, value) {
    if (value == null) return this.delete(key);
    return storage.set(key, value);
  }
  async delete(key) {
    return await storage.delete(key);
  }
  async keys() {
    return await keys_default()(storage).call(storage);
  }
  on(key, listener) {
    return storage.on(key, listener);
  }
  off(key, listener) {
    return storage.off(key, listener);
  }
  async migrate() {
    var _context2;
    const keys = await keys_default()(_context2 = this).call(_context2);
    const keysInCurrentVersion = Object.keys(this.defaults);
    const deletes = keys.filter(k => !includes_default()(keysInCurrentVersion).call(keysInCurrentVersion, k));
    if (deletes.length === 0) return;
    this.logger.log("\u8FC1\u79FB\u5B58\u50A8\u7248\u672C\uFF0C\u5220\u9664 ", deletes);
    for (const key of deletes) {
      await this.delete(key);
    }
  }
};
Storage = __decorate([Service(), __metadata("design:paramtypes", [Logger])], Storage);

;// ./src/providers/common/messaging.ts


class Multicast {
  constructor(key) {
    this.key = key;
    this.listeners = new Set();
  }
  get size() {
    return this.listeners.size;
  }
  add(listener) {
    this.listeners.add(listener);
  }
  remove(listener) {
    return this.listeners.delete(listener);
  }
  async handle(request) {
    var _context;
    const promises = [...keys_default()(_context = this.listeners).call(_context)].map(listener => promise_default().resolve(listener(request)));
    let first, all;
    try {
      first = await promise_default().race(promises);
      all = await promise_default().all(promises);
      return first;
    } catch (error) {
      Object.defineProperty(error, 'request', {
        value: request,
        enumerable: true
      });
      if (first) Object.defineProperty(error, 'firstReply', {
        value: first,
        enumerable: true
      });
      if (all) Object.defineProperty(error, 'replies', {
        value: all,
        enumerable: true
      });
      throw error;
    }
  }
}
class Messaging {
  constructor() {
    this.handlers = new Map();
  }
  on(key, listener) {
    let handler = this.handlers.get(key);
    if (!handler) {
      handler = new Multicast(key);
      this.handlers.set(key, handler);
    }
    handler.add(listener);
    return {
      key,
      value: listener
    };
  }
  off(listener) {
    const handler = this.handlers.get(listener.key);
    if (!handler) return false;
    return handler.remove(listener.value);
  }
  async emit(key, args) {
    let broadcast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const handler = this.handlers.get(key);
    if (!handler || handler.size === 0) {
      if (broadcast) return promise_default().resolve(undefined);
      return promise_default().reject(new Error("\u6D88\u606F ".concat(key, " \u8FD8\u672A\u6CE8\u518C\u8FC7\u5904\u7406\u7A0B\u5E8F")));
    }
    const handles = handler.handle(args);
    if (broadcast) {
      try {
        return await handles;
      } catch (ex) {
        console.error(ex);
        return undefined;
      }
    }
    return handles;
  }
}
const messaging = new Messaging();
;// ./src/providers/user-script/messaging.ts

const messaging_messaging = new Messaging();
;// ./src/services/messaging.ts




let messaging_Messaging = class Messaging {
  constructor(logger) {
    this.logger = logger;
  }
  on(key, listener) {
    this.logger.log("\u76D1\u542C\u4E8B\u4EF6", key);
    return messaging_messaging.on(key, listener);
  }
  off(listener) {
    return messaging_messaging.off(listener);
  }
  emit(key, args) {
    let broadcast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return messaging_messaging.emit(key, args, broadcast);
  }
};
messaging_Messaging = __decorate([Service(), __metadata("design:paramtypes", [Logger])], messaging_Messaging);

// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85968);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.0/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(6529);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.0/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(44507);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(30672);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.0/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(32204);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.105.0/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(95385);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.3_webpack@5.105.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/.pnpm/less-loader@12.3.1_less@4.5.1_webpack@5.105.0/node_modules/less-loader/dist/cjs.js!./src/plugin/introduce/index.less
var introduce = __webpack_require__(12604);
;// ./src/plugin/introduce/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, ":root");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var introduce_update = injectStylesIntoStyleTag_default()(introduce/* default */.A, options);




       /* harmony default export */ const plugin_introduce = (introduce/* default */.A && introduce/* default */.A.locals ? introduce/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js
var trim = __webpack_require__(4298);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/.pnpm/escape-html@1.0.3/node_modules/escape-html/index.js
var escape_html = __webpack_require__(66321);
var escape_html_default = /*#__PURE__*/__webpack_require__.n(escape_html);
;// ./node_modules/.pnpm/emoji-regex@10.6.0/node_modules/emoji-regex/index.mjs
/* harmony default export */ const emoji_regex = (() => {
	// https://mths.be/emoji
	return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
});

;// ./src/services/tagging.ts






const emojiReg = emoji_regex();
const nsDic = {
  r: 'reclass',
  reclass: 'reclass',
  l: 'language',
  language: 'language',
  lang: 'language',
  loc: 'location',
  location: 'location',
  o: 'other',
  other: 'other',
  p: 'parody',
  parody: 'parody',
  series: 'parody',
  c: 'character',
  char: 'character',
  character: 'character',
  cos: 'cosplayer',
  coser: 'cosplayer',
  cosplayer: 'cosplayer',
  g: 'group',
  group: 'group',
  creator: 'group',
  circle: 'group',
  a: 'artist',
  artist: 'artist',
  m: 'male',
  male: 'male',
  f: 'female',
  female: 'female',
  x: 'mixed',
  mixed: 'mixed'
};
const shortNsDic = {
  rows: '',
  reclass: 'r',
  language: 'l',
  parody: 'p',
  character: 'c',
  group: 'g',
  artist: 'a',
  cosplayer: 'cos',
  male: 'm',
  female: 'f',
  mixed: 'x',
  other: 'o',
  location: 'loc',
  temp: ''
};
let Tagging = class Tagging {
  constructor() {
    this.suggestUrl = 'https://forums.e-hentai.org/index.php?showtopic=246656';
    this.namespaceTranslate = {
      rows: '行名',
      artist: '艺术家',
      cosplayer: 'Coser',
      parody: '原作',
      character: '角色',
      group: '团队',
      language: '语言',
      other: '其他',
      female: '女',
      male: '男',
      mixed: '混',
      location: '地点',
      reclass: '重新分类',
      temp: '临时'
    };
  }
  namespace(ns) {
    if (!ns) return 'temp';
    if (ns in nsDic) return nsDic[ns];
    ns = ns.toLowerCase();
    if (ns in nsDic) return nsDic[ns];
    ns = trim_default()(ns).call(ns);
    if (ns in nsDic) return nsDic[ns];
    ns = ns[0];
    if (ns in nsDic) return nsDic[ns];
    return 'temp';
  }
  ns(ns) {
    const fns = this.namespace(ns);
    return shortNsDic[fns];
  }
  removePara(name) {
    var _context;
    return trim_default()(_context = name.replace(/^<p>(.+?)<\/p>$/, '$1')).call(_context);
  }
  markImagesAndEmoji(text) {
    return text.replace(emojiReg, "<span ehs-emoji>$&</span>").replace(/<img(.*?)>/gi, "<img onerror=\"this.style.display='none'\" ehs-icon $1>");
  }
  removeImagesAndEmoji(text) {
    var _context2;
    return trim_default()(_context2 = text.replace(emojiReg, '').replace(/<img.*?>/gi, '')).call(_context2);
  }
  removeHtmlTags(text) {
    var _context3;
    return trim_default()(_context3 = text.replace(/<abbr title="(\w+:)?([^"]+)" ns="(\w+)">/gi, '($3:$2)').replace(/<(img|a).*?>/gi, '').replace(/<(p|strong|em|abbr)>/gi, '').replace(/<\/(a|p|strong|em|abbr)>/gi, '')).call(_context3);
  }
  isTagName(name) {
    if (!name || typeof name != 'string') return false;
    return /^[a-z0-9. -]+$/.test(name);
  }
  fullKey(tag) {
    const ns = 'namespace' in tag ? this.ns(tag.namespace) : tag.ns;
    const key = tag.key.toLowerCase();
    return ns ? "".concat(ns, ":").concat(key) : key;
  }
  searchTerm(tag) {
    const ns = 'namespace' in tag ? this.ns(tag.namespace) : tag.ns;
    const key = tag.key.toLowerCase();
    const nsP = ns ? "".concat(ns, ":") : '';
    const search = includes_default()(key).call(key, ' ') ? "\"".concat(key, "$\"") : "".concat(key, "$");
    return nsP + search;
  }
  editorUrl(tag) {
    const namespace = 'namespace' in tag ? this.namespace(tag.namespace) : this.namespace(tag.ns);
    const key = tag.key.toLowerCase();
    return "https://ehtt.vercel.app/edit/".concat(namespace, "/").concat(encodeURIComponent(key));
  }
  makeTagMatchHtml(suggestion) {
    let markTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mark';
    const tag = suggestion.tag;
    const cnNamespace = this.namespaceTranslate[this.namespace(tag.ns)];
    let cnNameHtml = '';
    let enNameHtml;
    if (tag.ns) {
      cnNameHtml += escape_html_default()(cnNamespace) + '：';
    }
    if (suggestion.match.cn) {
      const range = suggestion.match.cn;
      cnNameHtml += "".concat(escape_html_default()(tag.cn.slice(0, range.start)), "<").concat(markTag, ">").concat(escape_html_default()(tag.cn.slice(range.start, range.end)), "</").concat(markTag, ">").concat(escape_html_default()(tag.cn.slice(range.end)));
    } else {
      cnNameHtml += escape_html_default()(tag.cn);
    }
    if (suggestion.match.key) {
      const range = suggestion.match.key;
      enNameHtml = "".concat(escape_html_default()(tag.key.slice(0, range.start)), "<").concat(markTag, ">").concat(escape_html_default()(tag.key.slice(range.start, range.end)), "</").concat(markTag, ">").concat(escape_html_default()(tag.key.slice(range.end)));
    } else {
      enNameHtml = escape_html_default()(tag.key);
    }
    return {
      cn: cnNameHtml,
      en: enNameHtml
    };
  }
};
Tagging = __decorate([Service()], Tagging);

;// ./src/plugin/introduce/index.ts








let Introduce = class Introduce {
  constructor(logger, storage, messaging, tagging) {
    this.logger = logger;
    this.storage = storage;
    this.messaging = messaging;
    this.tagging = tagging;
    this.target = null;
    this.onclick = e => {
      var _target$getAttribute;
      const target = this.findTarget(e.target);
      if (!target) {
        return;
      }
      this.target = target;
      const isOpen = !!target.style.color;
      if (!isOpen) {
        this.closeIntroduceBox();
        return;
      }
      const m = /'(.*)'/gi.exec((_target$getAttribute = target.getAttribute('onclick')) !== null && _target$getAttribute !== void 0 ? _target$getAttribute : '');
      if (!(m !== null && m !== void 0 && m[1])) return;
      const m2 = m[1].split(':');
      let namespace = 'temp';
      let tag = '';
      if (m2.length === 1) {
        tag = m2[0];
      } else {
        namespace = m2.shift();
        tag = m2.join(':');
      }
      this.openIntroduceBox(namespace, tag, () => this.target !== target).catch(this.logger.error);
    };
    this.init().catch(logger.error);
  }
  async init() {
    const conf = await this.storage.get('config');
    if (!conf.showIntroduce) return;
    const tagList = document.querySelector('#taglist');
    this.tagList = tagList;
    const gridRight = document.querySelector('#gd5');
    if (!(tagList && gridRight)) return;
    this.logger.log('标签介绍');
    this.initIntroduceBox();
    gridRight.insertBefore(this.introduceBox, null);
    tagList.addEventListener('click', this.onclick);
  }
  initIntroduceBox() {
    this.introduceBox = document.createElement('div');
    this.introduceBox.id = 'ehs-introduce-box';
    this.introduceBox.addEventListener('click', ev => {
      let target = ev.target;
      if (target instanceof HTMLElement && target.classList.contains('ehs-close')) {
        const selectedTag = this.tagList.querySelector('[style*="color"]');
        if (selectedTag) {
          selectedTag.click();
        } else {
          this.closeIntroduceBox();
        }
        return;
      }
      while (target) {
        if (target.nodeName === 'A' && 'href' in target) break;
        target = target.parentNode;
      }
      if (target) {
        const a = target;
        ev.preventDefault();
        window.open(a.href, '_BLANK');
      }
    });
  }
  findTarget(node) {
    const isTarget = n => {
      var _context;
      return n.nodeType === Node.ELEMENT_NODE && n.nodeName === 'A' && starts_with_default()(_context = n.id).call(_context, 'ta_') && n.parentElement != null && (n.parentElement.classList.contains('gt') || n.parentElement.classList.contains('gtl') || n.parentElement.classList.contains('gtw'));
    };
    while (node) {
      if (isTarget(node)) return node;
      node = node.parentNode;
    }
    return null;
  }
  onImageError(ev) {
    const target = ev.target;
    // eslint-disable-next-line @typescript-eslint/unbound-method
    target.removeEventListener('error', this.onImageError);
    target.referrerPolicy = '';
  }
  async openIntroduceBox(namespace, key, canceled) {
    const timer = this.logger.time('获取标签介绍');
    const tagData = await this.messaging.emit('get-tag', this.tagging.fullKey({
      namespace,
      key
    }));
    timer.log(tagData);
    timer.end();
    if (canceled()) {
      return;
    }
    const editorUrl = this.tagging.editorUrl({
      namespace,
      key
    });
    if (tagData) {
      var _tagData$links;
      const tagEn = "".concat(this.tagging.namespace(tagData.ns), ":").concat(tagData.key);
      // language=HTML
      this.introduceBox.innerHTML = "\n            <div class=\"ehs-title\">\n                <div title=\"".concat("".concat(this.tagging.removeImagesAndEmoji(tagData.name), "\n").concat(tagEn), "\">\n                    <div class=\"ehs-cn\">", this.tagging.markImagesAndEmoji(tagData.name), "</div>\n                    <div class=\"ehs-en\">").concat(tagEn, "</div>\n                </div>\n                <span class=\"ehs-close\"></span>\n            </div>\n            <div class=\"ehs-content\">\n                ").concat(tagData.intro || "<div class=\"ehs-no-intro\">\n                        <h3>\u65E0\u4ECB\u7ECD</h3>\n                        <center><a href=\"".concat(editorUrl, "\" target=\"_blank\">\u63D0\u4F9B\u4ECB\u7ECD</a></center>\n                    </div> "), "\n            </div>\n            <div class=\"ehs-href\">").concat((_tagData$links = tagData.links) !== null && _tagData$links !== void 0 ? _tagData$links : '', "</div>");
    } else {
      // language=HTML
      this.introduceBox.innerHTML = "\n            <div class=\"ehs-title\">\n                <div title=\"".concat(namespace, ":").concat(key, "\">\n                    <div class=\"ehs-cn\">").concat(namespace, ":").concat(key, "</div>\n                    <div class=\"ehs-en\">\u8BE5\u6807\u7B7E\u5C1A\u672A\u7FFB\u8BD1</div>\n                </div>\n                <span class=\"ehs-close\"></span>\n            </div>\n            <div class=\"ehs-content\">\n                <div class=\"ehs-no-translation\">\n                    <h3>\u8BE5\u6807\u7B7E\u5C1A\u672A\u7FFB\u8BD1</h3>\n                ").concat(namespace === 'temp' ? "\n                    <p>\n                        \u8BE5\u6807\u7B7E\u5C1A\u672A\u6B63\u5F0F\u6DFB\u52A0\u81F3 EH \u6807\u7B7E\u7CFB\u7EDF\u3002\u5728\u63D0\u4F9B\u7FFB\u8BD1\u524D\uFF0C\u9700\u8981\u5728 <a href=\"".concat(this.tagging.suggestUrl, "\" target=\"_blank\">EH \u8BBA\u575B</a>\u53D1\u5E16\u5C06\u8BE5\u6807\u7B7E\u79FB\u52A8\u5230\u5408\u9002\u7684\u547D\u540D\u7A7A\u95F4\u3002\n                    </p>") : "\n                    <center>\n                        <a href=\"".concat(editorUrl, "\" target=\"_blank\">\u63D0\u4F9B\u7FFB\u8BD1</a>\n                    </center>"), "\n                </div>\n            </div>");
    }
    this.introduceBox.querySelectorAll('img').forEach(img => {
      img.referrerPolicy = 'no-referrer';
      // eslint-disable-next-line @typescript-eslint/unbound-method
      img.addEventListener('error', this.onImageError);
    });
  }
  closeIntroduceBox() {
    this.introduceBox.innerHTML = '';
  }
};
Introduce = __decorate([Service(), __metadata("design:paramtypes", [Logger, Storage, messaging_Messaging, Tagging])], Introduce);

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js
var sort = __webpack_require__(73442);
var sort_default = /*#__PURE__*/__webpack_require__.n(sort);
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = function isArrayLike(x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === 'function';
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/isPromise.js

function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  var _super = function _super(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js

var UnsubscriptionError = createErrorClass(function (_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
      return i + 1 + ") " + err.toString();
    }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
  };
});
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/Subscription.js





var Subscription = function () {
  function Subscription(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription.prototype.unsubscribe = function () {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription.prototype.add = function (teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription.prototype._hasParent = function (parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && includes_default()(_parentage).call(_parentage, parent);
  };
  Subscription.prototype._addParent = function (parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription.prototype._removeParent = function (parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription.prototype.remove = function (teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  };
  Subscription.EMPTY = function () {
    var empty = new Subscription();
    empty.closed = true;
    return empty;
  }();
  return Subscription;
}();

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/config.js
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js

var timeoutProvider = {
  setTimeout: function (_setTimeout) {
    function setTimeout(_x, _x2) {
      return _setTimeout.apply(this, arguments);
    }
    setTimeout.toString = function () {
      return _setTimeout.toString();
    };
    return setTimeout;
  }(function (handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  }),
  clearTimeout: function (_clearTimeout) {
    function clearTimeout(_x3) {
      return _clearTimeout.apply(this, arguments);
    }
    clearTimeout.toString = function () {
      return _clearTimeout.toString();
    };
    return clearTimeout;
  }(function (handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  }),
  delegate: undefined
};
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js


function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function () {
    var onUnhandledError = config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = function () {
  return createNotification('C', undefined, undefined);
}();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind: kind,
    value: value,
    error: error
  };
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/errorContext.js

var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      var _a = context,
        errorThrown = _a.errorThrown,
        error = _a.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/Subscriber.js









var Subscriber = function (_super) {
  tslib_es6_extends(Subscriber, _super);
  function Subscriber(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber.create = function (next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber.prototype.next = function (value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber.prototype.error = function (err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber.prototype.complete = function () {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };
  Subscriber.prototype._error = function (err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber.prototype._complete = function () {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber;
}(Subscription);

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function () {
  function ConsumerObserver(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver.prototype.next = function (value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver.prototype.error = function (err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver.prototype.complete = function () {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver;
}();
var SafeSubscriber = function (_super) {
  tslib_es6_extends(SafeSubscriber, _super);
  function SafeSubscriber(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function () {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber;
}(Subscriber);

function handleUnhandledError(error) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error);
  } else {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function () {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js
var reduce = __webpack_require__(11788);
var reduce_default = /*#__PURE__*/__webpack_require__.n(reduce);
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
  return x;
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/pipe.js


function pipe() {
  var fns = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return reduce_default()(fns).call(fns, function (prev, fn) {
      return fn(prev);
    }, input);
  };
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/Observable.js








var Observable = function () {
  function Observable(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };
  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function () {
      var _a = _this,
        operator = _a.operator,
        source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable.prototype.forEach = function (_next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function next(value) {
          try {
            _next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable.prototype._subscribe = function (subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable.prototype[observable] = function () {
    return this;
  };
  Observable.prototype.pipe = function () {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;
      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };
  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };
  return Observable;
}();

function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : (promise_default());
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js


function isInteropObservable(input) {
  return isFunction(input[observable]);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/symbol/async-iterator.js
var async_iterator = __webpack_require__(49166);
var async_iterator_default = /*#__PURE__*/__webpack_require__.n(async_iterator);
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js


function isAsyncIterable(obj) {
  return (async_iterator_default()) && isFunction(obj === null || obj === void 0 ? void 0 : obj[(async_iterator_default())]);
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/isIterable.js


function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js


function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1,, 9, 10]);
          _b.label = 2;
        case 2:
          if (false) // removed by dead control flow
{}
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done) return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js












function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function (subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function fromArrayLike(array) {
  return new Observable(function (subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function (subscriber) {
    promise.then(function (value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function (err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function (subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function (subscriber) {
    process(asyncIterable, subscriber).catch(function (err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a;
  return __awaiter(this, void 0, void 0, function () {
    var value, e_2_1;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = {
            error: e_2_1
          };
          return [3, 11];
        case 6:
          _b.trys.push([6,, 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2) throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/lift.js

function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return function (source) {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError('Unable to lift unknown Observable type');
  };
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js


function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function (_super) {
  tslib_es6_extends(OperatorSubscriber, _super);
  function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber.prototype.unsubscribe = function () {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  };
  return OperatorSubscriber;
}(Subscriber);

;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/map.js


function map(project, thisArg) {
  return operate(function (source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function (value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
  if (delay === void 0) {
    delay = 0;
  }
  if (repeat === void 0) {
    repeat = false;
  }
  var scheduleSubscription = scheduler.schedule(function () {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  var buffer = [];
  var active = 0;
  var index = 0;
  var isComplete = false;
  var checkComplete = function checkComplete() {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  var outerNext = function outerNext(value) {
    return active < concurrent ? _doInnerSub(value) : buffer.push(value);
  };
  var _doInnerSub = function doInnerSub(value) {
    expand && subscriber.next(value);
    active++;
    var innerComplete = false;
    innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function (innerValue) {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, function () {
      innerComplete = true;
    }, undefined, function () {
      if (innerComplete) {
        try {
          active--;
          var _loop_1 = function _loop_1() {
            var bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              executeSchedule(subscriber, innerSubScheduler, function () {
                return _doInnerSub(bufferedValue);
              });
            } else {
              _doInnerSub(bufferedValue);
            }
          };
          while (buffer.length && active < concurrent) {
            _loop_1();
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe(createOperatorSubscriber(subscriber, outerNext, function () {
    isComplete = true;
    checkComplete();
  }));
  return function () {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js





function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  if (isFunction(resultSelector)) {
    return mergeMap(function (a, i) {
      return map(function (b, ii) {
        return resultSelector(a, b, i, ii);
      })(innerFrom(project(a, i)));
    }, concurrent);
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }
  return operate(function (source, subscriber) {
    return mergeInternals(source, subscriber, project, concurrent);
  });
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js


var isArray = Array.isArray;
function callOrApply(fn, args) {
  return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return map(function (args) {
    return callOrApply(fn, args);
  });
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js







var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
  if (isFunction(options)) {
    resultSelector = options;
    options = undefined;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
  }
  var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function (methodName) {
      return function (handler) {
        return target[methodName](eventName, handler, options);
      };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2),
    add = _a[0],
    remove = _a[1];
  if (!add) {
    if (isArrayLike(target)) {
      return mergeMap(function (subTarget) {
        return fromEvent(subTarget, eventName, options);
      })(innerFrom(target));
    }
  }
  if (!add) {
    throw new TypeError('Invalid event target');
  }
  return new Observable(function (subscriber) {
    var handler = function handler() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return subscriber.next(1 < args.length ? args : args[0]);
    };
    add(handler);
    return function () {
      return remove(handler);
    };
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return function (methodName) {
    return function (handler) {
      return target[methodName](eventName, handler);
    };
  };
}
function isNodeStyleEventEmitter(target) {
  return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
  return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/filter.js


function filter(predicate, thisArg) {
  return operate(function (source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function (value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.3_webpack@5.105.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/.pnpm/less-loader@12.3.1_less@4.5.1_webpack@5.105.0/node_modules/less-loader/dist/cjs.js!./src/plugin/tag-tip/index.less
var tag_tip = __webpack_require__(47437);
;// ./src/plugin/tag-tip/index.less

      
      
      
      
      
      
      
      
      

var tag_tip_options = {};

tag_tip_options.styleTagTransform = (styleTagTransform_default());
tag_tip_options.setAttributes = (setAttributesWithoutAttributes_default());
tag_tip_options.insert = insertBySelector_default().bind(null, ":root");
tag_tip_options.domAPI = (styleDomAPI_default());
tag_tip_options.insertStyleElement = (insertStyleElement_default());

var tag_tip_update = injectStylesIntoStyleTag_default()(tag_tip/* default */.A, tag_tip_options);




       /* harmony default export */ const plugin_tag_tip = (tag_tip/* default */.A && tag_tip/* default */.A.locals ? tag_tip/* default */.A.locals : undefined);

;// ./src/plugin/tag-tip/index.ts













const SUGGEST_LIMIT = 100;
let TagTip = class TagTip {
  constructor(storage, logger, messaging, tagging) {
    this.storage = storage;
    this.logger = logger;
    this.messaging = messaging;
    this.tagging = tagging;
    this.selectedIndex = 0;
    this.delimiter = ' ';
    this.ctrlKey = false;
    this.disableExclusionMode = false;
    this.searchCache = ['', []];
    this.init().catch(logger.error);
  }
  async init() {
    var _context;
    const conf = await this.storage.get('config');
    if (!conf.tagTip) return;
    this.logger.log('标签提示');
    const searchInput = document.querySelector('#f_search, #newtagfield, [name=f_search]');
    if (!searchInput) return;
    this.disableExclusionMode = searchInput.id === 'newtagfield';
    this.delimiter = starts_with_default()(_context = location.pathname).call(_context, '/g/') ? ',' : ' ';
    this.inputElement = searchInput;
    this.inputElement.autocomplete = 'off';
    this.autoCompleteList = document.createElement('div');
    this.autoCompleteList.className = 'eh-syringe-lite-auto-complete-list eh-syringe-ignore';
    fromEvent(this.inputElement, 'keyup').pipe(filter(e => !new Set(['ArrowUp', 'ArrowDown', 'Enter', 'Meta', 'Control', 'Alt']).has(e.key)), map(() => this.inputElement.value.replace(/  +/gm, ' '))).subscribe(s => {
      this.search(s).catch(this.logger.error);
    });
    fromEvent(this.inputElement, 'keydown').subscribe(e => this.keydown(e));
    fromEvent(this.inputElement, 'keyup').subscribe(e => this.checkCtrl(e));
    fromEvent(this.autoCompleteList, 'click').subscribe(e => {
      this.inputElement.focus();
      e.preventDefault();
      e.stopPropagation();
    });
    fromEvent(this.inputElement, 'focus').subscribe(() => this.setListPosition());
    fromEvent(this.inputElement, 'pointerenter').subscribe(() => this.setListPosition());
    fromEvent(window, 'resize').subscribe(() => this.setListPosition());
    fromEvent(document, 'click').subscribe(() => {
      this.autoCompleteList.innerHTML = '';
    });
    document.body.appendChild(this.autoCompleteList);
    this.setListPosition();
  }
  async search(value) {
    this.inputElement.value = value;
    let result;
    if (this.searchCache[0] === value) {
      result = this.searchCache[1];
    } else {
      var _value$match;
      // [^\s,] 空白字符和逗号以外的字符 (用于支持逗号)
      // (?:"|$) 非捕获分组, 引号或文本结束  (用于匹配不完整的引号)
      // [^\s,]+:".+?(?:"|$)     NS:"ab cd"     NS:"ab c...
      // ".+?(?:"|$)]            "ab cd"        "ab c...
      // [^\s,]+:[^\s,]+         NS:abcd
      // [^\s,]+                 abcd
      const values = (_value$match = value.match(/([^\s,]+:".+?(?:"|$)|".+?(?:"|$)]|[^\s,]+:[^\s,]+|[^\s,]+)/gim)) !== null && _value$match !== void 0 ? _value$match : [];
      result = [];
      const used = new Set();
      await promise_default().all(values.map(async (v, i) => {
        const sv = values.slice(i);
        if (!sv) return;
        const svs = sv.join(this.delimiter);
        if (!svs || svs.replace(/\s+/, '').length === 0) return;
        const suggestions = await this.messaging.emit('suggest-tag', {
          term: svs,
          limit: SUGGEST_LIMIT
        });
        for (const suggestion of suggestions) {
          const {
            tag
          } = suggestion;
          if (used.has(this.tagging.fullKey(tag))) continue;
          used.add(this.tagging.fullKey(tag));
          result.push(suggestion);
        }
      }));
      if (values.length > 1) {
        // 整合了多个关键词的搜索结果，重新排序并限制数量
        sort_default()(result).call(result, (a, b) => b.score - a.score);
        result.splice(SUGGEST_LIMIT);
      }
      this.searchCache = [value, result];
    }
    this.autoCompleteList.innerHTML = '';
    for (const suggestion of result) {
      this.autoCompleteList.appendChild(this.tagElementItem(suggestion));
    }
    this.selectedIndex = -1;
    this.scrollList();
  }
  checkCtrl(e) {
    if (this.disableExclusionMode) return;
    this.ctrlKey = e.ctrlKey || e.metaKey;
    if (this.ctrlKey) {
      this.autoCompleteList.classList.add('exclude');
    } else {
      this.autoCompleteList.classList.remove('exclude');
    }
  }
  keydown(e) {
    this.checkCtrl(e);
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      if (e.key === 'ArrowUp') {
        this.selectedIndex--;
        if (this.selectedIndex < 0) {
          this.selectedIndex = this.autoCompleteList.children.length - 1;
        }
      } else {
        this.selectedIndex++;
        if (this.selectedIndex >= this.autoCompleteList.children.length) {
          this.selectedIndex = 0;
        }
      }
      const children = Array.from(this.autoCompleteList.children);
      children.forEach(element => {
        element.classList.remove('selected');
      });
      if (this.selectedIndex >= 0 && children[this.selectedIndex]) {
        children[this.selectedIndex].classList.add('selected');
      }
      e.preventDefault();
      e.stopPropagation();
      this.scrollList();
    } else if (e.key === 'Enter') {
      const children = Array.from(this.autoCompleteList.children);
      if (this.selectedIndex >= 0 && children[this.selectedIndex]) {
        children[this.selectedIndex].click();
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }
  scrollList() {
    if (this.selectedIndex < 0) {
      this.autoCompleteList.scrollTop = 0;
      return;
    }
    const current = this.autoCompleteList.children[this.selectedIndex];
    if (!current) return;
    current.scrollIntoView({
      block: 'nearest',
      behavior: 'instant'
    });
  }
  setListPosition() {
    const rect = this.inputElement.getBoundingClientRect();
    this.autoCompleteList.style.left = "".concat(rect.left + window.scrollX, "px");
    this.autoCompleteList.style.top = "".concat(rect.bottom + window.scrollY, "px");
    this.autoCompleteList.style.width = "".concat(rect.width, "px");
  }
  tagElementItem(suggestion) {
    const tag = suggestion.tag;
    const item = document.createElement('div');
    const cnName = document.createElement('span');
    cnName.className = 'auto-complete-text cn-name';
    const enName = document.createElement('span');
    enName.className = 'auto-complete-text en-name';
    const html = this.tagging.makeTagMatchHtml(suggestion, 'mark');
    cnName.innerHTML = html.cn;
    enName.innerHTML = html.en;
    item.insertBefore(cnName, null);
    item.insertBefore(enName, null);
    item.className = 'auto-complete-item';
    item.onclick = () => {
      var _context2;
      let length = suggestion.term.length;
      if (ends_with_default()(_context2 = this.inputElement.value).call(_context2, this.delimiter)) {
        length++;
      }
      const exclude = this.ctrlKey ? '-' : '';
      this.inputElement.value = "".concat(this.inputElement.value.slice(0, 0 - length)).concat(exclude).concat(this.tagging.searchTerm(tag)).concat(this.delimiter);
      this.autoCompleteList.innerHTML = '';
    };
    return item;
  }
};
TagTip = __decorate([Service(), __metadata("design:paramtypes", [Storage, Logger, messaging_Messaging, Tagging])], TagTip);

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/url.js
var core_js_stable_url = __webpack_require__(30211);
var url_default = /*#__PURE__*/__webpack_require__.n(core_js_stable_url);
;// ./src/services/ui-translation/helper.ts

const dataMaps = [];
function merge(regex, host, plainReplacements, regexReplacements) {
  var _context;
  const hosts = host ? sort_default()(_context = [...new Set(Array.isArray(host) ? host : [host])]).call(_context) : undefined;
  let map = dataMaps.find(d => JSON.stringify(d.hosts) === JSON.stringify(hosts) && d.regex.source === regex.source);
  if (!map) {
    map = {
      regex,
      hosts,
      plainReplacements: new Map(),
      regexReplacements: new Map()
    };
    dataMaps.push(map);
  }
  for (const key in plainReplacements) {
    const element = plainReplacements[key];
    map.plainReplacements.set(key, element);
  }
  if (regexReplacements) {
    for (const [k, v] of regexReplacements) {
      map.regexReplacements.set(k, v);
    }
  }
}
;// ./src/services/ui-translation/data/archiver.ts

merge(/^\/archiver\.php/, undefined, {
  'Current Funds:': '现有资金',
  'Estimated Size: \xA0 ': '预计大小：',
  'Download Cost: \xA0 ': '下载费用：',
  'Free!': '免费！',
  'Insufficient Funds': '余额不足',
  'Download Original Archive': '下载原始档案',
  'Download Resample Archive': '下载重采样档案',
  original: '原始',
  resample: '重采样',
  ' download of this archive on ': '档案下载，时间：',
  cancel: '取消',
  'Locating archive server and preparing file for download...': '定位归档服务器并准备下载文件...',
  '(this can take several minutes)': '(这可能需要几分钟时间)',
  'Please wait...': '请稍候...',
  Close: '取消',
  'H@H Downloader': 'H@H 下载器',
  'N/A': '不适用',
  Original: '原图',
  Free: '免费',
  'You must have a H@H client assigned to your account to use this feature.': '您必须拥有 H@H 客户端才能使用此功能',
  'Your H@H client appears to be offline.': '您的 H@H 客户端处于离线状态',
  'Turn it on, then try again.': '请启动 H@H 客户端后重试',
  'Downloads should start processing within a couple of minutes.': '下载会在几分钟内开始'
}, [[/^You unlocked an? $/, '已解锁'], [/^An original resolution/, '原始分辨率'], [/^A (\d+x) resolution/, '$1 分辨率'], [/ download has been queued for client $/, '的下载请求已添加到下载队列，目标客户端 ']]);
merge(/^\/archive\//, '*.hath.network', {
  'The file was successfully prepared, and is ready for download.': '文件已准备就绪，可供下载',
  'Click Here To Start Downloading': '点击此处开始下载',
  'You can also copy this link to a download manager.': '您也可以将链接复制到下载软件中',
  'The file is already being processed. I will now wait for this file to finish. Please contact staff if this does not resolve itself within a few minutes.': '该文件已在处理中。我将等待该文件完成。如果几分钟后问题未解决，请联系工作人员。',
  'Click here if your browser does not continue automatically': '如果您的浏览器没有自动继续，请点击此处'
});
;// ./src/services/ui-translation/data/bitcoin.ts

merge(/^\/bitcoin\.php/, undefined, {
  'Bitcoin Donation': '比特币捐赠',
  '\n\t\tBitcoin (BTC) and Bitcoin Cash (BCH) are decentralized virtual currencies. This page allows you to donate these coins from an exchange service or a local wallet, track the confirmation process of the transaction, and apply the donated coins as a USD donation or Adopt-a-Server slots. This is not a custodial service; all coins sent to these addresses are considered donated to this site and cannot be withdrawn. ': '\n\t\t比特币 (BTC) 和比特币现金 (BCH) 是去中心化的虚拟货币。本页面允许您从交易所或本地钱包捐赠并跟踪交易过程，并能够将捐赠的虚拟货币作为美元捐赠或领养服务器。这不是一个保管服务，所有发送到这些地址的虚拟货币都被认为是捐赠给本网站的，无法撤回。',
  'Read this thread for more information about donating and how to buy coins': '阅读此帖子以了解更多关于捐赠和如何购买虚拟货币的信息',
  'Bitcoin (BTC) transaction fees can be high and unpredictable at times. It is currently ': '比特币 (BTC) 的交易手续费有时会很高且不可预测。当前',
  estimated: '预估',
  'This is the lowest viable feerate currently required for a transaction to be mined, which is estimated by sampling the minimum feerate of transactions that would have been included in a block in the last hour, assuming an average distribution of blocks.': '这是当前交易被挖掘所需的最低可行费率，通过采样最近一小时内可能被包含在区块中的交易的最低费率来估算，假设区块的分布是平均的。',
  'average-sized': '常规金额',
  'An average one-input two-output native segwit (P2WPKH) transaction is around 140 vB. Batched transactions from exchanges could have a lower fee. Legacy transactions and transactions spending more than one input could have a higher fee.': '一个常规的单输入双输出原生隔离见证 (P2WPKH) 交易约为 140 vB。来自交易所的批量交易可能会有更低的费用。传统交易和消耗多个输入的交易可能会有更高的费用。',
  ' transaction. We recommend using Bitcoin Cash (BCH) whenever possible, especially for smaller amounts, since it is essentially free.': '交易。我们建议尽可能使用比特币现金 (BCH)，尤其是较小金额的交易，因为它的手续费基本上可忽略不计。',
  ' Bitcoin (BTC)': ' 比特币 (BTC)',
  ' Bitcoin Cash (BCH)': ' 比特币现金 (BCH)',
  'Generate an address first...': '请先生成地址',
  'Not Created Yet - Click To Generate': '未创建 - 点击生成',
  'Your Bitcoin (BTC) Donation Wallet Address': '您的比特币 (BTC) 捐赠钱包地址',
  'IMPORTANT: ONLY USE THIS ADDRESS FOR BITCOIN (BTC)': '重要提示：只能将此地址用于比特币 (BTC)',
  'ANY OTHER COINS SENT TO THIS ADDRESS WILL BE LOST': '发送到此地址的其他类型加密货币都将丢失',
  'Your Bitcoin Cash (BCH) Donation Wallet Address': '您的比特币现金 (BCH) 捐赠钱包地址',
  'If your wallet cannot send to this address, ': '如果您的钱包无法发送到此地址，请',
  'create a legacy address': '创建传统地址',
  'We automatically ': '当旧地址被使用时，我们会自动',
  'generate a new address': '生成一个新地址',
  ' when the old one is used. You will still be credited if you reuse recent addresses, but please use the currently displayed address whenever possible.': '。如果您重复使用最近的地址，仍然会被计入，但请尽可能使用当前显示的地址。',
  'You can only manually create a new address once every 24 hours.': '每 24 小时，您只能手动创建一次新地址。',
  'Send a Bitcoin (BTC) Wallet Address PM': '私信发送比特币 (BTC) 钱包地址',
  'Send a Bitcoin Cash (BCH) Wallet Address PM': '私信发送比特币现金 (BCH) 钱包地址',
  'You can use this form to send a private message from the gallery system with your wallet address. This guarantees that a given wallet address belongs to you and that it exists in the E-Hentai system.': '您可以通过此表单以图库系统 (Gallery System) 的名义发送一条包含钱包地址的私信。这样能够保证此钱包地址属于您，并存在于 E-Hentai 系统中。',
  'Member name: ': '收件人：',
  Send: '发送',
  'You already sent a wallet message to that member.': '您已经向此用户发送了包含钱包地址的私信。',
  'Member not found.': '未找到此用户。',
  'Recent Bitcoin (BTC) Donations': '最近的比特币 (BTC) 捐赠',
  'Recent Bitcoin Cash (BCH) Donations': '最近的比特币现金 (BCH) 捐赠',
  'New donations will typically show up here in less than two minutes. It will show as ': '新的捐赠通常会在两分钟内显示在这里，但在被纳入一个区块并达到两个确认之前会处于',
  ' until it is included in a block and reaches two confirmations. This usually takes less than an hour, but can take longer in some cases. When it has been marked as ': '状态。此状态一般不会超过一个小时，但在某些情况下可能会花费更长时间。只有当状态变更为',
  ', you still have to apply it below to make it take effect.': '时才能通过下方按钮完成捐赠。',
  'No transactions in the past year.': '在过去一年内没有交易',
  Pending: '待定',
  Confirmed: '已确认',
  'Refresh List': '刷新列表',
  'Unspent: ': '未使用：',
  'Total All-Time Donations: ': '捐赠总额：',
  'Total Adopt-a-Server Days: ': '领养服务器天数：',
  'Current Conversion Rate: ': '当前汇率：',
  'Apply BTC as Donation': '使用 BTC 捐赠',
  'Apply BCH as Donation': '使用 BCH 捐赠',
  'use max': '最大',
  'Apply Donation': '我要捐赠',
  'Apply BCH as Adopt-a-Server': '使用 BCH 领养服务器',
  'Apply BTC as Adopt-a-Server': '使用 BTC 领养服务器',
  'Select slot duration..': '选择时长..',
  '1 Month @ $10/month $10': '1 个月 @ $10/月 $10',
  '3 Month @ $9/month $27': '3 个月 @ $9/月 $27',
  '6 Month @ $8/month $48': '6 个月 @ $8/月 $48',
  '1 Year @ $7/month $84': '1 年 @ $7/月 $84',
  '2 Year @ $6/month $144': '2 年 @ $6/月 $144',
  '3 Year @ $5/month $180': '3 年 @ $5/月 $180',
  'Purchase Slots': '我要领养',
  'Donated coins are applied as their equivalent USD value at a time of your choosing, using the site rate which is calculated from recent exchange market value.': '捐赠的虚拟货币在您使用时会以最近的交易所市场价格作为网站的汇率转换为美元。',
  'The site rate will never drop sharply; it adjusts slowly over time if the exchange market value is higher than the site rate, or less than 90% of the site rate.': '网站的汇率永远不会急剧下降，只有当实际交易所价格高于网站汇率，或低于网站汇率的 90% 时，才会随着时间推移缓慢调整。',
  'The conversion rates right now are ': '当前汇率：',
  ' for Bitcoin, and ': ' (比特币) \xA0 ',
  ' for Bitcoin Cash.': ' (比特币现金)',
  'Donation Tier': '捐赠等级',
  'EXP Bonus': '经验加成',
  'Daily Bonus': '每日奖励',
  'Daily Hath': '每日 Hath',
  'Free Archives': '免费档案配额',
  'EXP Bonus: ': '经验加成：',
  ' \xA0 Free Archives: ': ' \xA0 免费档案配额：',
  'Daily Bonus: ': '每日奖励：',
  'You did not donate anything yet, but we still love you.': '您还没有捐赠，但我们仍然爱您。',
  'Bronze Star': '铜星',
  'Silver Star': '银星',
  'Gold Star': '金星',
  'Tri Star': '三星',
  'Quint Star': '五星',
  'Septua Star': '七星',
  'Honorary Catgirl': '荣誉猫娘',
  'Recent Spending History': '近期消费记录',
  'No coins have been applied recently': '近期没有使用此类虚拟货币',
  'Active + Recent Adopt-a-Server Slots': '近期服务器领养记录',
  'No slots have been adopted recently': '近期没有领养服务器'
}, [[/^Refunded (.*?) Hath/, '已退还 $1 Hath'], [/^(\$.*?) Donation$/, '捐赠 $1'], [/^A wallet address PM was sent to user (.+?) \(uid=(\d+)\)$/, '您的钱包地址已私信发送给 $1 (UID $2)。'], [/^Awarded for a total donation of (\$\d+).$/, '授予的捐赠总额为 $1。'], [/^(\d+) GB \/ week$/, '$1 GB / 周'], [/^Catgirl Lv.(\d)$/, '猫娘 Lv.$1'], [/^Insufficient (BCH|BTC) available.\s?/, '$1 余额不足。'], [/You have ([\d.]+) (BCH|BTC) pending, but these need to be confirmed first.$/, '您有 $1 $2 待确认，请等到确认完成后再操作。'], [/^ to at least ([\d.]+) sats\/vB, which is about \$([\d.]+) for an $/, '至少为 $1 sats/vB，约为 $$$2 每笔']]);
;// ./src/services/ui-translation/data/bounty.ts

merge(/^\/bounty(_post)?\.php/, undefined, {
  'Bounty List': '悬赏列表',
  'Most Wanted Standard Bounties': '热门标准悬赏',
  'Most Wanted Translation Bounties': '热门翻译悬赏',
  'Most Wanted Editing Bounties': '热门编辑悬赏',
  'Post New Bounty': '发布新悬赏',
  'Search Bounties': '搜索悬赏',
  'Bounty Type: ': '悬赏类型：',
  All: '全部',
  Standard: '标准',
  Translation: '翻译',
  Editing: '编辑',
  ' \xA0 Bounty Status: ': ' \xA0 悬赏状态：',
  'Last Updated': '最后更新',
  'Bounty Headline': '悬赏标题',
  'Bounty Type': '悬赏类型',
  'Bounty Status': '悬赏状态',
  'Total Bounty': '总赏金',
  'Posted By': '发布者',
  'Open/New': '开放/新创建',
  'Open/Accepted': '开放/已接受',
  'Closed/Reserved': '关闭/已保留',
  'Closed/Claimed': '关闭/已认领',
  'Closed/Completed': '关闭/已完成',
  'You are currently an Unranked Bounty Hunter.': '您当前是未评级赏金猎人。',
  'Bounty Poster:': '发布者：',
  'Posted Date:': '发布日期：',
  'Bounty Status:': '悬赏状态：',
  'Min Hunter Rank:': '最低等级要求：',
  Unranked: '未评级',
  'Current Reward:': '当前赏金：',
  '< Prev 10': '< 上一页',
  'Next 10 >': '下一页 >',
  'Bounty Headline:': '悬赏标题：',
  'A short one-liner consistently describing the bounty.': '一句话描述悬赏内容。',
  'This will appear on the Bounty Overview screen.': '它会显示在悬赏概览页面。',
  'Detailed Bounty Description:': '悬赏详情：',
  'Remember to be specific. Bounties like "Requesting ': '请注意要具体。悬赏如 “请求 ',
  ' Hentai" is not very specific, and any bounty claim featuring anything that matches would be accepted; bounties like "Any ': ' Hentai” 不是很具体，包含匹配内容的悬赏认领都可以被接受；悬赏如 “任何我没有的 ',
  ' Hentai I don\'t have" would require an actual list; and so on. If you have any minimum quality/resolution demands, make sure to include this as well.': ' Hentai” 需要一个确切的列表；以此类推。如果您有任何最低质量/分辨率要求，请务必包含在内。',
  'The more precise you can define your bounty, the higher the chance you will be satisfied with its result. Keep in mind that if your bounty is vague and someone technically fulfills it (as determined by a Bounty Moderator), your posted reward is forfeit.': '您的悬赏内容定义的越精确，您对其结果的满意度就会越高。请记住，如果您的悬赏内容含糊不清，而某人在技术上满足了它 (由悬赏版主裁定)，您发布的奖励会被没收。',
  'Wanted Poster:': '悬赏海报：',
  'You can optionally upload a thumbnail, cover page, an image from an incomplete collection, or any other relevant image to further specify the bounty. (JPG/PNG)': '您可以选择上传缩略图、封面、不完整合集的图像或任何其他相关的图像，以进一步指定悬赏。(JPG/PNG)',
  'Offered Reward:': '悬赏金额：',
  'The reward you offer for this bounty, in Credits and/or Hath. The minimum allowed is 25000 Credits or 5 Hath.': '您为此悬赏提供的赏金，以 Credits 和/或 Hath 计。最低要求 25000 Credits 或 5 Hath。',
  'Bounty Type:': '悬赏类型：',
  'If this bounty is for a translation or editing job, select the corresponding type and provide a link to the source material.': '如果此悬赏为翻译或编辑工作，请选择相应的类型并提供源材料的链接。',
  'Otherwise, select Standard.': '否则，请选择标准。',
  'Minimum Hunter Rank:': '最低等级要求：',
  'The minimum rank a Bounty Hunter needs to accept or claim this bounty.': '赏金猎人能够接受或认领此悬赏所需的最低等级。',
  'Accepted Delivery:': '交付方式：',
  'These are the delivery methods you accept for this bounty. If you only want galleries posted to E-Hentai Galleries, you do not need to change this.': '请选择您接受的交付方式。如果您只是希望将图库发布到 E-Hentai，则无需更改此设置。',
  'Posted to the E-Hentai Galleries System': '发布到 E-Hentai 图库系统',
  'Archive download at a file locker service': '通过文件保管服务下载归档文件',
  'BitTorrent download at a public tracker': '通过使用公共 tracker 的 BT 下载',
  'Other; specify in bounty description': '其他，请在悬赏描述中指定',
  'Please verify that the information is correct before you submit this bounty.': '在提交此悬赏之前，请确认信息正确。',
  'Post Bounty': '发布悬赏',
  'Bounty Posted By:': '发布者：',
  'Contact Poster': '联系发布者',
  Updated: '更新于',
  'Bounties that are ': '状态为 ',
  ' are open to be accepted and claimed. If you intent to fulfill a bounty within a reasonable amount of time, you can optionally ': ' 的悬赏可以被接受和认领。如果您打算在合理的时间内完成悬赏，可以先 ',
  accept: '接受',
  ' the bounty first. These expire after a month.': ' 悬赏，此状态会在一个月后过期。',
  'After a bounty has been ': '若悬赏被 ',
  claimed: '认领',
  ', the original poster of the bounty has seven days to accept or dispute it. If there is a dispute or the acceptance period expires, a Bounty Moderator will decide the outcome of the bounty.': '，悬赏发布者有七天时间来选择接受认领或提出质疑。如果出现争议或接受期限过期，将由悬赏版主裁定悬赏的结果。',
  'A rejected claim cannot be resubmitted, and will affect your rank.': '被拒绝的认领不能重新提交，并且会影响您的等级。',
  'You have not yet accepted or claimed this bounty.': '您尚未接受或认领此悬赏。',
  'You have accepted this bounty.': '您已接受此悬赏。',
  'You cannot post a blank accept/claim, or you do not have sufficient funds to claim the bounty.': '您不能发布空的接受/认领请求，或者您没有足够的资金来认领悬赏。',
  'Your rank (Unranked) is insufficient to accept this bounty.': '您的等级 (未评级) 不足以接受此悬赏。',
  'For accepting a bounty, you can enter a short comment here. For claiming a bounty, you must enter all the necessary details for where the bounty can be found.': '接受悬赏时，您可以在此处输入简短的评论。认领悬赏时，则必须提供悬赏所需的所有详细信息。',
  'If you intend to claim this bounty, make sure that all necessary URLs entered above are correct, and that they match the accepted delivery methods of this bounty. Do not, for instance, submit a link to a torrent file if that delivery method is not accepted. All information required to determine the validity of a claim MUST be posted in the claim itself.': '如果您准备认领此悬赏，请确保上方提供的所有必要 URL 都是正确的，并且与此悬赏的指定交付方式相匹配。例如，请不要在发布者不接受 BT 下载的情况下提供一个指向种子文件的链接。为保证认领的有效性，必须在认领请求中包含所有必要的信息。',
  'In order to claim a bounty, you have to post a deposit of 1000 credits. This is returned to you if the claim is accepted, but if the claim is found to be invalid, it will be forfeit.': '要认领悬赏，您必须支付 1000 Credits 的保证金。如果认领被接受，保证金将退还给您，但如果认领被判定无效，则会被没收。',
  'Accept Bounty': '接受悬赏',
  'Claim Bounty': '认领悬赏',
  'Withdraw Accept/Claim': '撤回接受/认领',
  'You can add additional rewards as long as the bounty has not been accepted or claimed. Rewards lock in after 15 minutes and can then only be rescinded after a month or if the bounty is cancelled. You will have no saying in whether a claim is accepted or not.': '只要悬赏未被认领，您就可以增加额外赏金。赏金会在 15 分钟后被锁定，只能在一个月后或悬赏被取消时才能撤回。您无权决定是否接受认领。',
  'You have ': '您拥有 ',
  '. Minimum is ': '。最低要求 ',
  ' or ': ' 或 ',
  '.': '。',
  'Submit Additional Reward': '提交额外赏金',
  'You must enter a minimum additional reward of 5000 C or 1 Hath.': '您必须输入最低额外赏金 (5000 C 或 1 Hath)。',
  'You can no longer add rewards for this bounty.\n\n\t\t': '您无法再为此悬赏增加赏金。',
  'Grant Date': '授予日期',
  Amount: '赏金',
  'Added By': '添加者',
  'Original Bounty': '初始赏金',
  'Claim Date': '认领日期',
  Status: '状态',
  'Bounty Hunter': '赏金猎人',
  Rating: '等级',
  'This bounty has not been accepted or claimed by anyone.': '此悬赏尚未被任何人接受或认领。',
  'Bounty Accepted': '悬赏接受',
  'Bounty Reserved': '悬赏保留',
  'Claim Pending': '认领待定',
  'Claim Disputed': '认领争议',
  'Claim Accepted': '认领接受',
  '\n\tn/t\n\t\n\t': '',
  // E-Hentai's bug
  'Comments from Bounty Poster:': '悬赏发布者评论：',
  '(No comment was given.)': '(未提供评论)',
  'This claim has been accepted, and the bounty has been closed.\n\t': '此认领已被接受，悬赏已关闭。',
  'This claim has been disputed, and is pending ruling by a Bounty Moderator.\n\t': '此认领存在争议，正在等待悬赏版主裁决。'
}, [[/^Showing /, '正在显示'], [/All Open Bounties$/, '所有未完成悬赏'], [/All Reserved Bounties$/, '所有已保留悬赏'], [/All Claimed Bounties$/, '所有已认领悬赏'], [/All Completed Bounties$/, '所有已完成悬赏'], [/Bounties Posted By Me$/, '我发布的悬赏'], [/Bounties Boosted By Me$/, '我加价的悬赏'], [/Bounties Accepted By Me$/, '我接受的悬赏'], [/Bounties Reserved For Me$/, '我保留的悬赏'], [/Bounties Claimed By Me$/, '我认领的悬赏'], [/Bounties Completed By Me$/, '我完成的悬赏'], [/^Rank ([A-Z])$/, '$1 级'], [/^Remaining Claim Dispute Time: /, '剩余认领争议时间：'], [/(\d+) days and (\d+) hours/, '$1 天 $2 小时']]);
;// ./src/services/ui-translation/data/common.ts

merge(/.*/, undefined, {
  'Front Page': '首页',
  Watched: '订阅',
  Popular: '热门',
  Torrents: '种子',
  Favorites: '收藏',
  'My ': '我的',
  Home: '主页',
  Uploads: '上传',
  Toplists: '排行',
  Bounties: '悬赏',
  News: '新闻',
  Forums: '论坛',
  Wiki: '维基',
  Overview: '概况',
  'My Stats': '我的统计',
  'My Settings': '我的设置',
  'My Tags': '我的标签',
  Stats: '统计',
  Settings: '设置',
  Tags: '标签',
  Donations: '捐赠',
  'Hath Exchange': 'Hath 交易',
  'GP Exchange': 'GP 交易',
  'Credit Log': 'Credit 记录',
  'Karma Log': 'Karma 记录',
  Front: '首页',
  LoFi: '低保真版',
  'Terms of Service': '服务条款',
  ToS: '服务条款',
  Advertise: '广告',
  Onion: '洋葱网址',
  'E-Hentai Galleries: The Free Hentai Doujinshi, Manga and Image Gallery System': 'E-Hentai: 一个免费的绅士同人志、漫画和图像的图库系统',
  'Now With Layers': '有了洋葱网址',
  Doujinshi: '同人志',
  Manga: '漫画',
  'Artist CG': '画师CG',
  'Game CG': '游戏CG',
  Western: '西方',
  'Non-H': '无H',
  'Image Set': '图集',
  'Asian Porn': '亚洲色情',
  Misc: '杂项',
  Private: '私有',
  'Search Keywords': '搜索关键词',
  Search: '搜索',
  Clear: '清除',
  'Show Advanced Options': '显示高级选项',
  'Hide Advanced Options': '隐藏高级选项',
  ' Browse Expunged Galleries': '只显示已删除的图库',
  ' Require Gallery Torrent': '只显示有种子的图库',
  'Between ': '介于 ',
  ' and ': ' 和 ',
  ' pages': ' 页',
  'Minimum Rating: ': '最低评分：',
  'Any Rating': '无限制',
  '2 Stars': '2 星',
  '3 Stars': '3 星',
  '4 Stars': '4 星',
  '5 Stars': '5 星',
  'Disable custom filters for:': '禁用自定义过滤器：',
  ' Language': ' 语言',
  ' Uploader': ' 上传者',
  ' Tags': ' 标签',
  'Show File Search': '显示文件搜索',
  'Hide File Search': '隐藏文件搜索',
  'Select a file to upload, then hit File Search. All public galleries containing this exact file will be displayed.': '请选择要搜索的图像文件后点击“文件搜索”。将列出包含此文件的所有公开图库。',
  'File Search': '文件搜索',
  'For color images, the system can also perform a similarity lookup to find resampled images.': '对于彩色图像，系统还可以执行相似性查询以找到重采样过的图像。',
  ' Use Similarity Scan': ' 使用相似性查询',
  ' Only Search Covers': ' 仅搜索封面',
  'The keyword ': '关键词 ',
  ' is short and will be searched as an exact tag only.': ' 太短，因此只会搜索精确匹配的标签。',
  'Some terms use unsupported syntax, are too short, or are otherwise not valid.': '某些关键词使用了不支持的语法、太短或无效。',
  'The provided date is invalid or outside the range of posted galleries.': '提供的日期无效或超出已发布图库的日期范围。',
  'The page range minimum cannot be above 1000.': '页数最小值至多为 1000。',
  'The page range maximum cannot be below 10.': '页数最大值至少为 10。',
  'Your page range filter is too narrow.': '页数范围差至少为 20，范围比至多为 0.8。',
  'You provided too many keywords. Use fewer keywords, or combine keywords with quotes.': '使用的关键词过多。请减少关键词或使用引号组合关键词。',
  'You provided too many keywords. Use fewer keywords, or combine keywords with quotes. (Ignored ': '使用的关键词过多。请减少关键词或使用引号组合关键词。(已忽略 ',
  'No hits found': '什么也没有',
  'No unfiltered results found.': '没有未过滤的结果',
  'No unfiltered results in this page range. Use less aggressive filters.': '在此页数范围内没有未过滤的结果。请使用更宽松的过滤器。',
  'Disable Filters': '禁用过滤器',
  '<< First': '<< 首页',
  '< Prev': '< 上一页',
  '< Jump': '< 跳页',
  '< Seek': '< 搜寻',
  'Jump/Seek': '跳页/搜寻',
  'Seek >': '搜寻 >',
  'Jump >': '跳页 >',
  'Next >': '下一页 >',
  'Last >>': '末页 >>',
  'date or offset': '日期或偏移量',
  'Enter a year or date in YYYY, (YY)YY-MM or (YY)YY-MM-DD format to seek to, or the number of days to jump backwards or forwards, or a number followed by w, m and y to jump weeks, months or years respectively.': '请输入要跳转的年份或日期，格式为 YYYY，(YY)YY-MM 或 (YY)YY-MM-DD；\n或者输入要向前或向后跳转的天数，输入数字后可以加 w，m，y 分别跳转周，月，年',
  'Set the date to seek from or to.': '设置要跳转的日期',
  'Use Date Selector': '日期选择器',
  Minimal: '最小化',
  'Minimal+': '最小化 + 关注标签',
  Compact: '紧凑 + 标签',
  Extended: '扩展',
  Thumbnail: '缩略图',
  Published: '发布时间',
  Title: '标题',
  Uploader: '上传者',
  'reclass:': '重新分类:',
  'language:': '语言:',
  'parody:': '原作:',
  'character:': '角色:',
  'group:': '社团:',
  'artist:': '艺术家:',
  'cosplayer:': 'Coser:',
  'female:': '女性:',
  'male:': '男性:',
  'mixed:': '混合:',
  'other:': '其他:',
  'location:': '地点:',
  'temp:': '临时:',
  '(Disowned)': '(已放弃)',
  'No torrents available': '无可用种子',
  'Show torrents': '查看种子',
  'It is the dawn of a new day!': '新的一天开始了！',
  'Reflecting on your journey so far, you find that you are a little wiser.': '回想一下你迄今为止的旅程，你发现你更聪明了。',
  'You gain ': '你获得了 ',
  ' EXP, ': ' 经验，',
  ' Credits, ': ' Credits，',
  ' Credits!': ' Credits！',
  ' Credits and ': ' Credits 和 ',
  ' GP!': ' GP！',
  ' GP and ': ' GP 和 ',
  ' Hath!': ' Hath！',
  'You have encountered a monster!': '你遇到了怪物！',
  'Click here to fight in the HentaiVerse.': '点击此处进入 HentaiVerse 战斗',
  'Favorites 0': '收藏夹 0',
  'Favorites 1': '收藏夹 1',
  'Favorites 2': '收藏夹 2',
  'Favorites 3': '收藏夹 3',
  'Favorites 4': '收藏夹 4',
  'Favorites 5': '收藏夹 5',
  'Favorites 6': '收藏夹 6',
  'Favorites 7': '收藏夹 7',
  'Favorites 8': '收藏夹 8',
  'Favorites 9': '收藏夹 9',
  'Create New': '新建',
  Rename: '重命名',
  Cancel: '取消',
  Close: '关闭',
  Confirm: '确定',
  Delete: '删除',
  Save: '保存',
  None: '无',
  Yes: '是',
  No: '否',
  'No (Private)': '否 (私有)',
  'No (Expunged)': '否 (已删除)',
  'No (Deleted)': '否 (已移除)',
  'No (Replaced)': '否 (已替换)',
  'The site is currently in Read Only/Failover Mode. Some functionality will not be available. Details may be available on ': '网站当前处于只读/故障转移模式，部分功能会不可用。详情请关注 ',
  'The site is currently in Read Only Mode. This page is therefore not available.': '网站当前处于只读模式，因此本页面不可用。',
  'This content is not available in Russia.RU': '此内容在俄罗斯 (RU) 不可用',
  // 洋葱网址登录页
  'user:': '用户：',
  'pass:': '密码：',
  'code:': '代码：',
  username: '用户名',
  password: '密码',
  CPTCA: '验证码',
  'Fuck Off': '刷新',
  'Log In': '登录',
  'You have to complete every field': '您必须填完每个字段',
  'Please try again': '请再试一次'
}, [[/^(\d+) pages?$/, '$1 页'], [/^Found about ([\d,]+) results?./, '找到约 $1 个结果。'], [/^Found ([\d,]+\+?) results?./, '找到 $1 个结果。'], [/^Found hundreds of results./, '找到数百结果。'], [/^Found thousands of results./, '找到数千结果。'], [/^Found many results./, '找到许多结果。'], [/\s?Filtered ([\d,]+) galler(ies|y) from this page.\s?/, '已从此页面过滤 $1 个结果。'], [/\s?Excluded ([\d,]+) galler(ies|y) from this page.\s?/, '已从此页面排除 $1 个结果。'], [/\s?Excluded ([\d,]+) galler(ies|y) and filtered ([\d,]+) galler(ies|y) from this page.\s?/, '已从此页面排除 $1 个结果，过滤 $3 个结果。'], [/^This IP address has been temporarily banned due to an excessive request rate. This probably means you are using automated mirroring\/harvesting software or share the IP address with someone who does. The ban expires in (\d+) hours and (\d+) minutes$/, '由于请求速率过高，此 IP 地址已被暂时封禁。这可能意味着您正在使用自动镜像/采集软件，或与某人共享 IP 地址。封禁将在 $1 小时 $2 分钟后解除。']]);
;// ./src/services/ui-translation/data/ehwiki.ts

// 提交此文件时请先登录到 EHWiki
// 并在 https://ehwiki.org/wiki/Special:Preferences#mw-htmlform-i18n 中设置界面语言为“中文（简体）”
// 不要翻译已经被 MediaWiki 翻译过的内容
merge(/.*/, 'ehwiki.org', {
  'external links': '外部链接',
  'E-Hentai Forums': 'E-Hentai 论坛'
}, []);
;// ./src/services/ui-translation/data/exchange.ts

merge(/^\/exchange\.php\?/, undefined, {
  'The Hath Exchange': 'Hath 交易',
  'The GP Exchange': 'GP 交易',
  'Last 8 Hours (Credits per 1000 GP)': '最近 8 小时 (Credits/kGP)',
  'Last 24 Hours (Credits per 1000 GP)': '最近 24 小时 (Credits/kGP)',
  'Last 8 Hours (Credits per Hath)': '最近 8 小时 (Credits/Hath)',
  'Last 24 Hours (Credits per Hath)': '最近 24 小时 (Credits/Hath)',
  'Buy Hath': '买进 Hath',
  'Sell Hath': '卖出 Hath',
  'Buy GP': '买进 GP',
  'Sell GP': '卖出 GP',
  'Update Bid!': '更新买单',
  'Update Ask!': '更新卖单',
  'Insufficient credits': 'Credits 不足',
  'Insufficient Hath': 'Hath 不足',
  'Insufficient GP': 'GP 不足',
  '\n\t\t\t\tCount: ': '数量：',
  ' Hath \xA0\n\t\t\t\tBid Price per Hath: ': ' Hath \xA0 买入单价：',
  ' Hath \xA0\n\t\t\t\tAsk Price per Hath: ': ' Hath \xA0 卖出单价：',
  'Buy Hath!': '买进 Hath',
  'Sell Hath!': '卖出 Hath',
  ' kGP \xA0\n\t\t\t\tBid Price per kGP: ': ' kGP \xA0 买入单价：',
  ' kGP \xA0\n\t\t\t\tAsk Price per kGP: ': ' kGP \xA0 卖出单价：',
  'Buy GP!': '买进 GP',
  'Sell GP!': '卖出 GP',
  'Active Orders': '当前挂单',
  'Recent Transactions': '最近成交',
  'Bid (Buyers)': '买单',
  'Ask (Sellers)': '卖单',
  Time: '时间',
  Seller: '卖家',
  Buyer: '买家',
  Volume: '成交量',
  'Unit Cost': '单价',
  High: '最高',
  Low: '最低',
  Avg: '平均',
  Vol: '成交'
}, [[/^Available: ([\d,]+) (\w+)$/, '可用：$1 $2']]);
;// ./src/services/ui-translation/data/favorites.ts

merge(/^\/favorites\.php/, undefined, {
  'Show All Favorites': '显示所有收藏夹',
  'Order: ': '排序：',
  'Published Time': '发布时间',
  'Favorited Time': '收藏时间',
  Favorited: '收藏时间',
  'Favorited:': '收藏于：',
  'Delete Selected': '删除选中收藏',
  'Change Category': '移动到'
}, [[/^Note: /, '备注：']]);
;// ./src/services/ui-translation/data/gallery.ts

merge(/^\/g\//, undefined, {
  'Contact Uploader': '联系上传者',
  'Posted:': '发布于：',
  'Parent:': '父级：',
  'Visible:': '显示：',
  'Language:': '语言：',
  'This gallery has been translated from the original language text.': '此图库已从原始语言翻译',
  'This gallery is a rewrite, which means that a new text has been made up based on the visual content, but with little regard to the original language text.': '此图库存在内容改写，这意味着根据视觉内容创作了新的文本，与原始文本关联不大',
  'File Size:': '文件大小：',
  'Length:': '页数：',
  'Favorited:': '收藏：',
  Never: '从未',
  Once: '1 次',
  'Rating:': '评分：',
  'Not Yet Rated': '还没有评分',
  'Thanks for rating!': '感谢评分！',
  'Rating failed.': '评分失败。',
  ' Add to Favorites': ' 添加到收藏夹',
  'A Quick Note About Tagging': '关于标签系统的简单说明',
  'While tagging is relatively straight-forward, there are a number of established guidelines that determine when adding a particular tag is proper and when it is not. Before you put any significant amount of effort into it, we therefore ask that you skim through the ': '虽然打标签相对简单，但有许多既定准则可以确定何时添加特定标签是正确的。因此，在您投入其中之前，我们要求您阅读',
  'Basic Tagging Guidelines': '基本标签指南',
  ' and ': '和',
  'Fetish Listing': '恋物标签列表',
  '. This will likely save both you and the tagging moderators from doing unnecessary work. In particular, you should note the following:': '。这能有效避免您和标签版主进行不必要的工作。特别需要注意以下几点：',
  '- These are galleries, not individual images. ': '● 这些是「图库」而非单张图像，',
  'Do not tag stuff that is only featured in a few images.': '请勿标记仅出现在少量图像中的内容。',
  '- If a tag is ambiguous or frequently misused, you may have to specify a ': '● 如果某个标签不明确或经常被误用，则可能需要指定',
  namespace: '命名空间',
  '; ': '，',
  'see the Wiki': '参见 Wiki',
  '.': '。',
  '- The ': '● 您对标签的影响',
  power: '权重',
  ' with which you can affect tagging is determined by a number of factors, such as your account age and whether or not you are active on the ': '取决于多种因素，例如您的账户资历、您是否活跃于',
  forums: '论坛等',
  '- The forums is also where ': '● 论坛也是',
  'everything about tagging is discussed': '讨论标签相关内容',
  '. If you have any comments, suggestions or questions about tagging, this is where you should take it.': '的地方。如果您对标签有任何意见、建议或问题，可以在这里讨论。',
  'Alright Already': '好的',
  'Vote Up': '顶',
  'Vote Down': '踩',
  'Withdraw Vote': '撤销投票',
  'Show Tagged Galleries': '含有此标签的图库',
  'Show Tag Definition': '显示标签定义',
  'Add New Tag': '添加新标签',
  'Enter new tags, separated with comma': '输入新标签，使用半角逗号分隔',
  Tag: '打标签',
  'No tags have been added for this gallery yet.': '当前图库还没有标签。',
  'This gallery has been replaced; tags can no longer be added on this version.': '当前图库已被替换，不允许在此版本添加新的标签。',
  'Report Gallery': '举报图库',
  'Archive Download': '归档下载',
  'Petition to Expunge': '申请删除',
  'Expunge Petition Sent': '已发送删除申请',
  'Show Expunge Log': '显示删除日志',
  'Petition to Rename': '申请重命名',
  'Rename Petition Sent': '已发送重命名申请',
  'Show Gallery Stats': '查看统计',
  'Multi-Page Viewer': '多页查看器',
  'There are newer versions of this gallery available:': '此图库有更新的版本可用：',
  'Back to Gallery': '返回图库',
  'Contact Poster': '联系评论者',
  'Uploader Comment': '上传者评论',
  'Score ': '分数 ',
  'Vote+': '顶',
  'Vote-': '踩',
  'Last edited on ': '最后编辑于 ',
  'click to show all': '显示全部',
  'Post New Comment': '发送新评论',
  'Enter your comments here, then hit Post Comment. If the last comment posted is yours, this will be appended to that post.': '在此处输入您的评论，然后点击发表评论。如果最后一条评论是您的，则新评论会被附加到最后一条评论下。',
  'Post Comment': '发表评论',
  'Your comment is too short.': '您的评论太短了。',
  Edit: '编辑',
  'Edit Comment': '编辑评论',
  'Gallery not found. If you just added this gallery, you may have to wait a short while before it becomes available.': '没有找到图库。如果您刚刚添加了此图库，可能需要等待一段时间后才能变得可用。',
  'This gallery has been removed or is unavailable.': '此图库已被删除或无法使用。',
  'You will be redirected to the front page momentarily.': '您将在几秒后返回首页。',
  '(Click here to continue)': '(点此继续)',
  'Please wait...': '请稍候...',
  'Sorry about that.': '非常抱歉。',
  'Content Warning': '内容警告',
  'This gallery has been flagged as ': '此图库已被标记为',
  'Offensive For Everyone': '“对所有人具有攻击性”',
  '. Due to its content, it should not be viewed by anyone.': '。基于其内容，任何人都不应观看。',
  '(And if you choose to ignore this warning, you lose all rights to complain about it.)': '(如果您选择无视这一警告，您就失去了所有投诉的权利)',
  'View Gallery': '浏览图库',
  'Get Me Outta Here': '带我离开这里',
  'Never Warn Me Again': '不再提醒'
}, [[/^Japanese\s*$/, '日语 \xA0'], [/^English\s*$/, '英语 \xA0'], [/^Chinese\s*$/, '汉语 \xA0'], [/^Dutch\s*$/, '荷兰语 \xA0'], [/^French\s*$/, '法语 \xA0'], [/^German\s*$/, '德语 \xA0'], [/^Hungarian\s*$/, '匈牙利语 \xA0'], [/^Italian\s*$/, '意大利语 \xA0'], [/^Korean\s*$/, '韩语 \xA0'], [/^Polish\s*$/, '波兰语 \xA0'], [/^Portuguese\s*$/, '葡萄牙语 \xA0'], [/^Russian\s*$/, '俄语 \xA0'], [/^Spanish\s*$/, '西班牙语 \xA0'], [/^Thai\s*$/, '泰语 \xA0'], [/^Vietnamese\s*$/, '越南语 \xA0'], [/^(\d+) times$/, '$1 次'], [/^Average: ([\d.]+)$/, '平均值：$1'], [/^Rate as ([\d.]+) stars?$/, '$1 星'], [/^\s*Add to Favorites\s*$/, ' 添加到收藏夹'], [/^Torrent Download \((\d+)\)$/, '种子下载 ($1)'], [/^, added (\d\d\d\d-\d\d-\d\d \d\d:\d\d)$/, '，更新于 $1'], [/^Showing ([\d,]+) - ([\d,]+) of ([\d,]+) images?$/, '$1 - $2，共 $3 张图像'], [/^Page (\d+): /, '第 $1 页：'], [/^Page (\d+)$/, '第 $1 页'], [/^Posted on (\d\d \w+ \d\d\d\d, \d\d:\d\d) by:\s*$/, '评论时间：$1 \xA0作者：'], [/^Posted on (\d\d \w+ \d\d\d\d, \d\d:\d\d)\s*/, '评论时间：$1'], [/^There (is|are) ([\d,]+) more comments? below the viewing threshold - $/, '还有 $2 条评论尚未显示 - '], [/^This gallery is unavailable due to a copyright claim by (.*)\.$/, '由于 $1 提出的版权要求，此图库无法使用']]);
merge(/^\/g\/\w+\/\w+\/.*act=expunge/, undefined, {
  'Submit New Expunge Petition': '提交新的删除申请',
  'Specify a valid objective reason why this gallery should be expunged.': '请说明申请删除此图库的客观原因。',
  ' This gallery is a duplicate of equal or lower quality of an earlier posted gallery.': '此图库是之前发布的图库的质量相同或较低的副本。',
  ' A newer higher-quality and clearly marked copy of this gallery has been uploaded.': '此图库的更高质量和标记清楚的副本已上传。',
  ' This gallery contains either illicit content like child porn or anything else forbidden by the ': '此图库包含非法内容，如儿童色情或其他列于',
  ', or otherwise falls under the ': '的禁止内容，或列于',
  'Expunge Guidelines': '删除指南',
  ' (specify below).': '的内容 (在下方详细描述)。',
  ' This gallery contains either illicit content like child porn or anything else that has been banned.': '此图库包含非法内容，如儿童色情或其他已被禁止的内容。',
  ' Content has been defaced by adding content-obstructing scanmarks, censorship or advertisements beyond what is present in the original artist release, or has been intentionally degraded to the point where legibility is an issue.': '图库内容被污损，添加了与内容无关的扫描水印、审查或广告，超出了原作者发布的内容或被故意降低画质，以至于影响了易读性。',
  'Enter a reason for this expunge here. Note that submitting petitions with subjective reasons along the line of "I hate this content/artist/uploader/etc" are NOT valid and can cause account penalties/restrictions.': '在此处输入删除的详细原因。请注意，“我讨厌此内容/艺术家/上传者”等主观理由是无效的，并且可能导致账户处罚/限制。',
  'Enter the URL of the conflicting gallery, if applicable.': '如有必要，在此处输入冲突图库的 URL。',
  'Create New Petition': '提交新申请',
  'Cancel Expunge Petition': '撤回删除申请',
  'You must specify a valid expunge type to start new expunge petition.': '您必须选择一个删除类型才能提交新的删除申请。',
  'You must provide a reason to start a new expunge petition.': '您必须提供一个理由才能提交新的删除申请。',
  'You must provide a link to the conflicting gallery to start a new expunge petition of this type.': '您必须提供冲突图库的链接才能提交此类型的删除申请。',
  'Pending Expunge Petition': '待处理的删除申请',
  'Active Expunge Petition': '完成的删除申请',
  'Rejected Expunge Petition': '否决的删除申请',
  'Active Expunge Petition (Pending Appeal)': '完成的删除申请 (申诉中)',
  'Revoked Expunge Petition': '撤销的删除申请',
  'Submitted:': '提交于：',
  'Expunge Type:': '删除类型：',
  Duplicate: '重复',
  Replaced: '已替换',
  Forbidden: '违规内容',
  Defaced: '污损',
  'Expunge Reason:': '删除原因：',
  'Conflict Gallery:': '冲突图库：',
  'Appeal Reason:': '申诉原因：',
  ', who added:': '，并评论',
  'Add a comment with this vote (optional)': '为投票添加一个评论 (可选)',
  'Vote +': '支持',
  'Vote -': '反对',
  'You have already voted ': '您已为此申请投出',
  FOR: '支持',
  AGAINST: '反对',
  ' this expunge petition.': '票',
  ' this appeal.': '票',
  'This petition will be ': '此申请将被',
  'This appeal will take effect in approximately ': '此申请将被撤销，除非在 ',
  ACTIVATED: '激活',
  REJECTED: '否决',
  REVOKED: '撤销',
  ' in approximately ': '，除非在 ',
  ' unless sufficiently upvoted.': ' 内有足够的支持票',
  ' unless sufficiently downvoted.': ' 内有足够的反对票',
  'This petition was ': '此申请已被',
  'This expunge petition is active and prevents the gallery from being listed by default.': '此删除申请已激活，图库已在列表中默认隐藏。',
  'If you have an objective reason for why this gallery should not have been expunged, you can initiate an appeal below.': '如果您有客观原因说明不应该删除此图库，可以在下方提出申诉。',
  'Appeals must not be submitted if the gallery should be expunged but the wrong expunge type was used.': '如果图库应该被删除但使用了错误的删除类型，则不得提交申诉。',
  'Note that submitting invalid appeals can lead to account restrictions/penalities.': '请注意，提交无效申诉可能会导致账户受到限制/处罚。',
  'Enter a valid reason for why this expunge petition should be revoked here.': '请在此处输入应撤销此删除申请的正当理由。',
  'Create New Appeal': '提交新申诉',
  'An appeal has been submitted for this expunge petition.': '已针对此删除申请提出申诉。',
  'You cannot currently start an expunge for this gallery.': '您目前无法为此图库提交删除申请。',
  'You cannot start additional expunges on this gallery.': '您无法为此图库提交更多删除申请。',
  'This petition is being processed and can no longer be voted on.': '此申请正在处理，无法继续投票。',
  'New expunges for this gallery can currently only be started by trusted users.': '目前只有可信用户能为此图库提交新的删除申请。',
  'If you believe that the gallery should be expunged, please make a post in the ': '如果您认为此图库应当被删除，请在 ',
  'Expunging, Appealing and Reverting Assistance': '删除、申诉和恢复帮助',
  ' thread.': ' 主题中发表帖子。'
}, [[/^(\d\d\d\d-\d\d-\d\d \d\d:\d\d) by (.*)$/, '$1 由 $2'], [/^on (\d\d\d\d-\d\d-\d\d \d\d:\d\d) by (.*)$/, '投票于 $1 由 $2'], [/^(\d+) minutes?$/, '$1 分钟'], [/^ on (\d\d\d\d-\d\d-\d\d \d\d:\d\d)$/, '，于 $1']]);
merge(/^\/g\/\w+\/\w+\/.*report=/, undefined, {
  'Report Type': '举报类型',
  '[Select a complaint type...]': '[请选择一个举报类型...]',
  Content: '内容',
  'DMCA/Copyright Infringement': 'DMCA / 侵犯版权',
  'Child Pornography': '儿童色情',
  'Other Illicit Content': '其他非法内容',
  Technical: '技术',
  'Excessive Updates': '频繁更新',
  'Reversion/Split/Undisown Request': '回退/拆分/恢复所有权请求',
  'If you log on with an account, we will remember your provided contact details.': '如果您使用账户登录，我们将记住您提供的联系信息。',
  'We remember and automatically fill in any previous contact details you have entered.': '我们会记住并自动填充您曾经输入的联系信息。',
  'Your email address': '您的电子邮件地址',
  'Please provide a working email address.': '请提供有效的电子邮件地址。',
  'Your full legal name': '您的全名',
  'Aliases and pseudonyms cannot be used.': '不能使用别名和假名。',
  "Copyright holder's full name": '版权所有者的全名',
  'Enter if you are not the copyright holder. You must be an authorized agent.': '如果您不是版权所有者，请输入。您必须是授权代理。',
  'Company Name': '公司名称',
  Optional: '可选',
  'Phone Number': '电话号码',
  Address: '地址',
  'Your residential home address': '您的住宅地址',
  City: '城市',
  'Your city of residence': '您居住的城市',
  'State / Province': '州 / 省',
  'Your state or province of residence, if applicable': '您居住的州或省，如果适用',
  Country: '国家',
  'Your country of residence': '您居住的国家',
  'Describe the nature of the infringement': '描述侵权性质',
  'Elaborate on why this gallery is infringing on your copyrighted work. Include links to where the original work can be purchased, or evidence of source material.': '详细说明为何此图库侵犯了您的版权。包括原作购买链接或源材料证据。',
  'Please elaborate on why this gallery infringes on your copyright. If this work is for sale, provide links to where it can be legally purchased.': '请详细说明为何此图库侵犯了您的版权。如果此作品正在出售，请提供可以合法购买的链接。',
  'Digital signature': '数字签名',
  'Enter your name to sign this submission': '输入您的姓名以签署此提交',
  Acknowledgement: '确认',
  "By submitting this form, you attest, under penalty of perjury, that you have a good faith belief that use of the material in this report is not authorized by the copyright owner, its agent, or the law; AND you are authorized to act on behalf of the copyright owner; AND you understand that you may be liable for any damages, including costs and attorneys' fees, if you knowingly materially misrepresent reported material.": '通过提交此表单，您声明，根据伪证处罚，您有充分的信心相信本报告中的材料未经版权所有者、其代理人或法律授权；并且您有权代表版权所有者行使权利；并且您了解，如果您故意提供错误的材料，您的利益可能会因此受到损害，包括支出和律师费。',
  'Send Report': '发送报告',
  'Report Details': '报告详情',
  'Please describe the illicit content of this gallery. Include the specific pages where the content in question can be found.': '请描述此图库的非法内容。包括可以找到有问题内容的特定页面。',
  'Details of illicit content and what pages you found it on. Using this form for copyright-related requests or anything else that is not actual illicit content can get you blocked from using this site.': '非法内容的详细信息以及发现位置。如果使用此表单进行与版权相关的请求或其他任何与实际非法内容无关的请求，可能会导致您无法继续使用本网站。',
  'Provide any relevant details. If the gallery has excessive updates that are not allowed under the community guidelines, it will be locked for further updates.': '提供任何相关细节。图库频繁更新不符合社区指南，会被锁定以防止继续更新。',
  'Please provide additional details.': '请提供详细信息。',
  'Provide any relevant details. If valid content has been removed from the gallery, it will be reverted. If valid content has been replaced with other valid content, it will be split into two separate galleries.': '提供任何相关细节。如果图库中的有效内容被删除，则会被恢复。如果有效内容被其他有效内容替换，将被拆分成两个单独的图库。'
}, []);
;// ./src/services/ui-translation/data/gallerypopups.ts

merge(/^\/gallerypopups\.php\?.*act=rename/, undefined, {
  'Uploader:': '上传者：',
  'Roman Script': '罗马音',
  'Japanese Script': '日文',
  'Not Set': '未设置',
  'Blank Vote': '空投票',
  ' New': ' 新',
  Submit: '提交'
});
merge(/^\/gallerypopups\.php\?.*act=addfav/, undefined, {
  'Choose a favorite category to save this gallery under. You can also add a note to it if you wish.': '请选择一个分类保存您的收藏，您也可以添加一些备注。',
  'Favorite Note (Max 200 Characters)': '收藏备注 (最多 200 字符)',
  'Add to Favorites': '添加到收藏',
  'Remove from Favorites': '从收藏中移除',
  'Apply Changes': '应用更改'
}, [[/(\d+) \/ (\d+) favorite note slots? used./, '已使用 $1 个备注，共 $2 个。']]);
;// ./src/services/ui-translation/data/hathperks.ts

merge(/^\/hathperks\.php/, undefined, {
  'By running the Hentai@Home client, you will over time gain special bonus points known as ': '通过运行 Hentai@Home 客户端，您会随着时间的推移获得特殊的奖励积分，即 ',
  '. These are rewards for people who help keeping this site free, fast and responsive by donating bandwidth and computer resources, and can be exchanged here for ': '。这是给予捐献带宽和计算机资源，帮助网站保持自由与快速的人的奖励，可以在本页面兑换 ',
  ', which grant beneficial effects on E-Hentai Galleries and in the HentaiVerse.': '，以提升 E-Hentai 和 HentaiVerse 体验。',
  'If running H@H is not an option, you can exchange Credits for Hath at the ': '如果您无法运行 H@H，可以在这里使用 Credits 交换 Hath：',
  'While the Hath Perks for the HentaiVerse cannot be obtained in any other way, most of the ones that are specific for Galleries will also get unlocked by making a donation on the ': '虽然用于 HentaiVerse 的 Hath Perks 不能通过其他方法获取，但关于图库的大部分 Hath Perks 还可以通过',
  'Donation Screen': '捐赠',
  '. These will be refunded if you buy them for Hath, and later make a qualifying donation. There is also an option to "adopt" H@H clients that will grant you Hath over time as if you were running it yourself.': '获取。如果您已经使用 Hath 购买，在达成符合条件的捐赠后将获得退款。此外还有一个“领养” H@H 客户端的选项，它会随着时间的推移而授予您 Hath，就好像自己运行它一样。',
  'You currently have ': '您现在拥有 ',
  ' Hath.': ' Hath。',
  ' Activated!': ' 已激活！',
  Description: '描述',
  Obtained: '已获得',
  Purchase: '购买',
  'Free with a $20 donation.': '捐赠 $20 免费解锁',
  'Free with a $50 donation.': '捐赠 $50 免费解锁',
  'Free with a $100 donation.': '捐赠 $100 免费解锁',
  'Ads-Be-Gone': '广告不见了',
  'Makes ads be gone.': '让广告消失。',
  'Source Nexus': '原始之力',
  'Unlocks the Original Images functionality on E-Hentai Galleries. This allows you to browse most files with the original, non-resampled version.': '解锁 E-Hentai 图库的原始图像功能，这允许您直接浏览大部分图像的原始非重采样版本。',
  'Multi-Page Viewer': '多页查看器',
  'Unlocks the Multi-Page Viewer function on E-Hentai Galleries. This allows you to view all images from a gallery on one page. (': '解锁 E-Hentai 图库的多页查看器功能，这允许您在单个页面上查看图库中的所有图像。(',
  demo: '演示',
  'More Thumbs': '更多缩略图',
  'Doubles the maximum number of thumbnail rows.': '将最大缩略图行数增加到 8。',
  'Thumbs Up': '超多缩略图',
  'Further increases the maximum number of thumbnail rows to 20.': '将最大缩略图行数增加到 20。',
  'All Thumbs': '全部缩略图',
  'Further increases the maximum number of thumbnail rows to 40.': '将最大缩略图行数增加到 40。',
  'More Pages': '更多页面',
  'Increases all limits on how many pages you can view by a factor of two.': '将图像限制变为原来的 2 倍。',
  'Lots of Pages': '超多页面',
  'Increases all limits on how many pages you can view by a factor of five.': '将图像限制变为原来的 5 倍。',
  'Too Many Pages': '全部页面',
  'Increases all limits on how many pages you can view by a factor of ten.': '将图像限制变为原来的 10 倍。',
  'More Favorite Notes I': '更多收藏备注 I',
  'Increases the number of favorite note slots to 10000.': '将收藏备注限制增加到 10000。',
  'More Favorite Notes II': '更多收藏备注 II',
  'Increases the number of favorite note slots to 25000.': '将收藏备注限制增加到 25000。',
  'Paging Enlargement I': '页面扩大 I',
  'Increases the number of results you can show per page on the index, search and torrent pages to 50.': '将索引、搜索和种子页面的结果数量变为 50。',
  'Paging Enlargement II': '页面扩大 II',
  'Increases the number of results you can show per page on the index, search and torrent pages to 100.': '将索引、搜索和种子页面的结果数量变为 100。',
  // https://ehwiki.org/wiki/Hath_Perks/Chinese
  'Postage Paid': '邮费已付',
  'You no longer have to pay postage or CoD fees on messages sent through MoogleMail.': '您使用莫古利邮局可免收邮费和货到付款手续费。',
  'Vigorous Vitality': '生机勃勃',
  'Increases your base health by 10%.': '增加您的基础生命值 10%。',
  'Effluent Ether': '溢流以太',
  'Increases your base mana by 10%.': '增加您的基础魔力值 10%。',
  'Suffusive Spirit': '心灵坚强',
  'Increases your base spirit by 10%.': '增加您的基础灵力值 10%。',
  'Resplendent Regeneration': '辉煌再起',
  'Increases your in-combat regeneration by 50%.': '增强您战斗中的再生能力 50%。',
  'Enigma Energizer': '谜之劲量',
  'Doubles the bonus from the riddlemaster, and increases duration to 50 turns.': '加倍御谜士的奖励，持续回合数增加至 50 回合。',
  'Yakety Sax': '叶克蒂·萨克斯',
  'Monsters will never catch you when fleeing.': '您逃跑时不会被怪物抓到。',
  'Soul Catcher': '灵魂捕手',
  'Get ten free soul fragments per day.': '每天可得到十片免费的灵魂碎片。',
  'These are added automatically if you have opened HV at some point during the past 30 days.': '如果您最近 30 天内还有开启游戏将会自动增加。',
  'Extra Strength Formula': '特强配方',
  'Happy Pills are twice as effective at improving monster morale.': '快乐药丸会加倍恢复怪物的士气值。',
  "That's Good Eatin'": '这倒是挺好吃的！',
  'Increases monster food recovery amount by 20%.': '增加怪物食物的饱足感 20%。',
  'Coupon Clipper': '食利者',
  '10% discount on all purchases at the Item Shop.': '在道具店的所有购物享 10% 折扣。',
  'Long Gone Before Daylight': '黎明之前',
  'The first energy drink used in a day gives twice the normal amount of stamina.': '每天的第一瓶能量饮料恢复量加倍。',
  'Dark Descent': '黑暗后裔',
  "Halve the required number of amnesia shards for reseting an item's potential.": '重置装备潜能的重铸碎片所需数量减半。',
  'Eminent Elementalist': '元素大师',
  'Increases effective Elemental Magic Proficiency by 10% of your natural base proficiency.': '您自身的基础元素魔法熟练度的 10% 会增加到有效熟练度里。',
  'Divine Warmage': '圣战法师',
  'Increases effective Divine Magic Proficiency by 10% of your natural base proficiency.': '您自身的基础神圣魔法熟练度的 10% 会增加到有效熟练度里。',
  'Death and Decay': '死亡凋零',
  'Increases effective Forbidden Magic Proficiency by 10% of your natural base proficiency.': '您自身的基础黑暗魔法熟练度的 10% 会增加到有效熟练度里。',
  'Evil Enchantress': '邪恶的女巫',
  'Increases effective Deprecating Magic Proficiency by 10% of your natural base proficiency.': '您自身的基础减益魔法熟练度的 10% 会增加到有效熟练度里。',
  'Force of Nature': '大自然的力量',
  'Increases effective Supportive Magic Proficiency by 10% of your natural base proficiency.': '您自身的基础增益魔法熟练度的 10% 会增加到有效熟练度里。',
  'Manehattan Project': '曼哈顿计划',
  'Significantly boosts the damage output of the Orbital Friendship Cannon.': '大幅提升「友情小马炮」的杀伤力。',
  'Follower of Snowflake': '雪花的信徒',
  'Displays your unyielding devotion to Snowflake, the Goddess of Loot and Harvest.': '雪花 ─ 专司战利品与收获的女神。宣示您对她不屈不挠的奉献精神。',
  'Thinking Cap': '深思',
  'Increases EXP gain by 25%. For calculation purposes, this bonus is added to the HentaiVerse training bonus.': '所有取得的经验值提升 25%。为计算方便，此奖励被合并到 HentaiVerse 训练奖励。',
  Mentats: '晶算师',
  'Increases this EXP bonus to 50%.': '提升经验值奖励至 50%。',
  'Learning Chip': '学习晶片',
  'Increases this EXP bonus to 75%.': '提升经验值奖励至 75%。',
  'Cybernetic Implants': '神经植入物',
  'Increases this EXP bonus to 100%.': '提升经验值奖励至 100%。',
  'Innate Arcana I': '天赋奥术 I',
  'Applies a 10% upkeep discount on autocast spells.': '维持自动施法所需魔力减少10%。',
  'Innate Arcana II': '天赋奥术 II',
  'Increases the upkeep discount on autocast spells to 20%.': '维持自动施法所需魔力减少20%。',
  'Innate Arcana III': '天赋奥术 III',
  'Increases the upkeep discount on autocast spells to 30%.': '维持自动施法所需魔力减少30%。',
  'Innate Arcana IV': '天赋奥术 IV',
  'Increases the upkeep discount on autocast spells to 40%.': '维持自动施法所需魔力减少40%。',
  'Innate Arcana V': '天赋奥术 V',
  'Increases the upkeep discount on autocast spells to 50%.': '维持自动施法所需魔力减少50%。',
  'Crystarium I': '水晶矿脉 I',
  'Whenever a monster drops a crystal in the HentaiVerse, you will receive an additional bonus crystal.': '在 HentaiVerse 里每当一只怪物掉落一颗水晶时，您将会再获得一颗水晶作为追加奖励。',
  'Crystarium II': '水晶矿脉 II',
  'Further increases the number of crystals received per drop to three.': '进一步提高水晶掉落数量至三倍。',
  'Crystarium III': '水晶矿脉 III',
  'Further increases the number of crystals received per drop to five.': '进一步提高水晶掉落数量至五倍。',
  'Crystarium IV': '水晶矿脉 IV',
  'Further increases the number of crystals received per drop to seven.': '进一步提高水晶掉落数量至七倍。',
  'Crystarium V': '水晶矿脉 V',
  'Further increases the number of crystals received per drop to ten.': '进一步提高水晶掉落数量至十倍。',
  'Tokenizer I': '令牌技师 I',
  'Doubles the chance of random mob token drops.': '打怪的令牌掉落率变成双倍。',
  'Tokenizer II': '令牌技师 II',
  'Triples the chance of random mob token drops.': '打怪的令牌掉落率变成三倍。',
  'Tokenizer III': '令牌技师 III',
  'Quadruples the chance of random mob token drops.': '打怪的令牌掉落率变成四倍。',
  'Hoarder I': '囤积者 I',
  'The first 200 equips placed in storage do not count towards your equipment limit.': '放置于仓库的前 200 件装备不计入您的装备数量限制。',
  'Hoarder II': '囤积者 II',
  'Increases the equipment storage allowance to 400 equips.': '将装备数量限制增加到 400。',
  'Hoarder III': '囤积者 III',
  'Increases the equipment storage allowance to 600 equips.': '将装备数量限制增加到 600。',
  'Hoarder IV': '囤积者 IV',
  'Increases the equipment storage allowance to 800 equips.': '将装备数量限制增加到 800。',
  'Hoarder V': '囤积者 V',
  'Increases the equipment storage allowance to 1000 equips.': '将装备数量限制增加到 1000。',
  'Repair Bear Mk.1': '修理熊 Mk.1',
  'The latest invention from Moogle Dynamics, the Repair Bear will follow you around and help you keep your equipment in good shape at all times. This reduces effective equipment wear by half.': '莫古利动力学的最新发明，修理熊会随侍在侧帮助您的装备随时保持良好状态。有效装备耗损程度将减少一半。',
  'Repair Bear Mk.2': '修理熊 Mk.2',
  'Further hones the skills of your Repair Bear, making it better at maintaining your equipment. Effective equipment wear is reduced to 25% of normal.': '进一步磨练您的修理熊的技巧，使它精于维护您的装备。有效装备耗损程度减少为正常值的 25%。',
  'Repair Bear Mk.3': '修理熊 Mk.3',
  'Trains your Repair Bear to the penultimate level, making those pesky forge visits (almost) a distant memory. Effective equipment wear is reduced to 10% of normal.': '将您的修理熊培训至完全体，让那些烦人的锻造次数 (几乎) 成为遥远的记忆。有效装备耗损程度减少为正常值的 10%。',
  'Repair Bear Mk.4': '修理熊 Mk.4',
  'The pinnacle of Repair Bear Technology, providing the ultimate in-the-field preventive equipment maintenance. Equipment wear is fully eliminated, and defeat durability loss is cut by half.': '修理熊科技的顶尖之作，提供这门领域最高端的预防性装备维护技术。装备耗损完全消除，被击倒时的耐久度损耗减半。',
  'Dæmon Duality I': '双重守护精灵 I',
  'Increases attack damage and magic damage by 10%.': '提升攻击伤害和魔法伤害各 10%。',
  'Dæmon Duality II': '双重守护精灵 II',
  'Increases attack damage and magic damage by 15%.': '提升攻击伤害和魔法伤害各 15%。',
  'Dæmon Duality III': '双重守护精灵 III',
  'Increases attack damage and magic damage by 20%.': '提升攻击伤害和魔法伤害各 20%。',
  'Dæmon Duality IV': '双重守护精灵 IV',
  'Increases attack damage and magic damage by 25%.': '提升攻击伤害和魔法伤害各 25%。',
  'Dæmon Duality V': '双重守护精灵 V',
  'Increases attack damage and magic damage by 30%.': '提升攻击伤害和魔法伤害各 30%。',
  'Dæmon Duality VI': '双重守护精灵 VI',
  'Increases attack damage and magic damage by 35%.': '提升攻击伤害和魔法伤害各 35%。',
  'Dæmon Duality VII': '双重守护精灵 VII',
  'Increases attack damage and magic damage by 40%.': '提升攻击伤害和魔法伤害各 40%。',
  'Dæmon Duality VIII': '双重守护精灵 VIII',
  'Increases attack damage and magic damage by 45%.': '提升攻击伤害和魔法伤害各 45%。',
  'Dæmon Duality IX': '双重守护精灵 IX',
  'Increases attack damage and magic damage by 50%.': '提升攻击伤害和魔法伤害各 50%。'
});
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js-pure@3.48.0/node_modules/core-js-pure/full/object/define-property.js
var define_property = __webpack_require__(73124);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js-pure@3.48.0/node_modules/core-js-pure/full/symbol/index.js
var symbol = __webpack_require__(14012);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js-pure@3.48.0/node_modules/core-js-pure/full/symbol/iterator.js
var symbol_iterator = __webpack_require__(26600);
;// ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js


function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof symbol && "symbol" == typeof symbol_iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof symbol && o.constructor === symbol && o !== symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js-pure@3.48.0/node_modules/core-js-pure/full/symbol/to-primitive.js
var to_primitive = __webpack_require__(12979);
;// ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/helpers/esm/toPrimitive.js


function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[to_primitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js


function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? define_property(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

;// ./src/services/ui-translation/data/_browsingcountry.ts
const BROWSING_COUNTRY = {
  'North America': 'North America (北美洲)',
  Afghanistan: 'Afghanistan (阿富汗)',
  'Aland Islands': 'Aland Islands (奥兰群岛)',
  Albania: 'Albania (阿尔巴尼亚)',
  Algeria: 'Algeria (阿尔及利亚)',
  'American Samoa': 'American Samoa (美属萨摩亚)',
  Andorra: 'Andorra (安道尔)',
  Angola: 'Angola (安哥拉)',
  Anguilla: 'Anguilla (安圭拉)',
  Antarctica: 'Antarctica (南极洲)',
  'Antigua and Barbuda': 'Antigua and Barbuda (安提瓜和巴布达)',
  Argentina: 'Argentina (阿根廷)',
  Armenia: 'Armenia (亚美尼亚)',
  Aruba: 'Aruba (阿鲁巴)',
  'Asia/Pacific Region': 'Asia/Pacific Region (亚太地区)',
  Australia: 'Australia (澳大利亚)',
  Austria: 'Austria (奥地利)',
  Azerbaijan: 'Azerbaijan (阿塞拜疆)',
  Bahamas: 'Bahamas (巴哈马)',
  Bahrain: 'Bahrain (巴林)',
  Bangladesh: 'Bangladesh (孟加拉国)',
  Barbados: 'Barbados (巴巴多斯)',
  Belarus: 'Belarus (白俄罗斯)',
  Belgium: 'Belgium (比利时)',
  Belize: 'Belize (伯利兹)',
  Benin: 'Benin (贝宁)',
  Bermuda: 'Bermuda (百慕大)',
  Bhutan: 'Bhutan (不丹)',
  Bolivia: 'Bolivia (玻利维亚)',
  'Bonaire Saint Eustatius and Saba': 'Bonaire Saint Eustatius and Saba (博内尔、圣尤斯特歇斯和萨巴)',
  'Bosnia and Herzegovina': 'Bosnia and Herzegovina (波斯尼亚和黑塞哥维那)',
  Botswana: 'Botswana (博茨瓦纳)',
  'Bouvet Island': 'Bouvet Island (布维岛)',
  Brazil: 'Brazil (巴西)',
  'British Indian Ocean Territory': 'British Indian Ocean Territory (英属印度洋领地)',
  'Brunei Darussalam': 'Brunei Darussalam (文莱)',
  Bulgaria: 'Bulgaria (保加利亚)',
  'Burkina Faso': 'Burkina Faso (布基纳法索)',
  Burundi: 'Burundi (布隆迪)',
  Cambodia: 'Cambodia (柬埔寨)',
  Cameroon: 'Cameroon (喀麦隆)',
  Canada: 'Canada (加拿大)',
  'Cape Verde': 'Cape Verde (佛得角)',
  'Cayman Islands': 'Cayman Islands (开曼群岛)',
  'Central African Republic': 'Central African Republic (中非共和国)',
  Chad: 'Chad (乍得)',
  Chile: 'Chile (智利)',
  China: 'China (中国大陆)',
  'Christmas Island': 'Christmas Island (圣诞岛)',
  'Cocos Islands': 'Cocos Islands (科科斯群岛)',
  Colombia: 'Colombia (哥伦比亚)',
  Comoros: 'Comoros (科摩罗)',
  Congo: 'Congo (刚果)',
  'Congo The Democratic Republic of the': 'Congo The Democratic Republic of the (刚果民主共和国)',
  'Cook Islands': 'Cook Islands (库克群岛)',
  'Costa Rica': 'Costa Rica (哥斯达黎加)',
  "Cote D'Ivoire": "Cote D'Ivoire (科特迪瓦)",
  Croatia: 'Croatia (克罗地亚)',
  Cuba: 'Cuba (古巴)',
  Curacao: 'Curacao (库拉索)',
  Cyprus: 'Cyprus (塞浦路斯)',
  'Czech Republic': 'Czech Republic (捷克共和国)',
  Denmark: 'Denmark (丹麦)',
  Djibouti: 'Djibouti (吉布提)',
  Dominica: 'Dominica (多米尼加)',
  'Dominican Republic': 'Dominican Republic (多米尼加共和国)',
  Ecuador: 'Ecuador (厄瓜多尔)',
  Egypt: 'Egypt (埃及)',
  'El Salvador': 'El Salvador (萨尔瓦多)',
  'Equatorial Guinea': 'Equatorial Guinea (赤道几内亚)',
  Eritrea: 'Eritrea (厄立特里亚)',
  Estonia: 'Estonia (爱沙尼亚)',
  Ethiopia: 'Ethiopia (埃塞俄比亚)',
  Europe: 'Europe (欧洲)',
  'Falkland Islands': 'Falkland Islands (马尔维纳斯群岛)',
  'Faroe Islands': 'Faroe Islands (法罗群岛)',
  Fiji: 'Fiji (斐济)',
  Finland: 'Finland (芬兰)',
  France: 'France (法国)',
  'French Guiana': 'French Guiana (法属圭亚那)',
  'French Polynesia': 'French Polynesia (法属波利尼西亚)',
  'French Southern Territories': 'French Southern Territories (法属南部领地)',
  Gabon: 'Gabon (加蓬)',
  Gambia: 'Gambia (冈比亚)',
  Georgia: 'Georgia (格鲁吉亚)',
  Germany: 'Germany (德国)',
  Ghana: 'Ghana (加纳)',
  Gibraltar: 'Gibraltar (直布罗陀)',
  Greece: 'Greece (希腊)',
  Greenland: 'Greenland (格陵兰)',
  Grenada: 'Grenada (格林纳达)',
  Guadeloupe: 'Guadeloupe (瓜德罗普)',
  Guam: 'Guam (关岛)',
  Guatemala: 'Guatemala (危地马拉)',
  Guernsey: 'Guernsey (根西岛)',
  Guinea: 'Guinea (几内亚)',
  'Guinea-Bissau': 'Guinea-Bissau (几内亚比绍)',
  Guyana: 'Guyana (圭亚那)',
  Haiti: 'Haiti (海地)',
  'Heard Island and McDonald Islands': 'Heard Island and McDonald Islands (赫德岛和麦克唐纳群岛)',
  'Holy See (Vatican City State)': 'Holy See (Vatican City State) (梵蒂冈)',
  Honduras: 'Honduras (洪都拉斯)',
  'Hong Kong': 'Hong Kong (香港特别行政区)',
  Hungary: 'Hungary (匈牙利)',
  Iceland: 'Iceland (冰岛)',
  India: 'India (印度)',
  Indonesia: 'Indonesia (印度尼西亚)',
  Iran: 'Iran (伊朗)',
  Iraq: 'Iraq (伊拉克)',
  Ireland: 'Ireland (爱尔兰)',
  'Isle of Man': 'Isle of Man (马恩岛)',
  Israel: 'Israel (以色列)',
  Italy: 'Italy (意大利)',
  Jamaica: 'Jamaica (牙买加)',
  Japan: 'Japan (日本)',
  Jersey: 'Jersey (泽西岛)',
  Jordan: 'Jordan (约旦)',
  Kazakhstan: 'Kazakhstan (哈萨克斯坦)',
  Kenya: 'Kenya (肯尼亚)',
  Kiribati: 'Kiribati (基里巴斯)',
  Kuwait: 'Kuwait (科威特)',
  Kyrgyzstan: 'Kyrgyzstan (吉尔吉斯斯坦)',
  "Lao People's Democratic Republic": "Lao People's Democratic Republic (老挝)",
  Latvia: 'Latvia (拉脱维亚)',
  Lebanon: 'Lebanon (黎巴嫩)',
  Lesotho: 'Lesotho (莱索托)',
  Liberia: 'Liberia (利比里亚)',
  Libya: 'Libya (利比亚)',
  Liechtenstein: 'Liechtenstein (列支敦士登)',
  Lithuania: 'Lithuania (立陶宛)',
  Luxembourg: 'Luxembourg (卢森堡)',
  Macau: 'Macau (澳门特别行政区)',
  Macedonia: 'Macedonia (马其顿)',
  Madagascar: 'Madagascar (马达加斯加)',
  Malawi: 'Malawi (马拉维)',
  Malaysia: 'Malaysia (马来西亚)',
  Maldives: 'Maldives (马尔代夫)',
  Mali: 'Mali (马里)',
  Malta: 'Malta (马耳他)',
  'Marshall Islands': 'Marshall Islands (马绍尔群岛)',
  Martinique: 'Martinique (马提尼克)',
  Mauritania: 'Mauritania (毛里塔尼亚)',
  Mauritius: 'Mauritius (毛里求斯)',
  Mayotte: 'Mayotte (马约特)',
  Mexico: 'Mexico (墨西哥)',
  Micronesia: 'Micronesia (密克罗尼西亚)',
  Moldova: 'Moldova (摩尔多瓦)',
  Monaco: 'Monaco (摩纳哥)',
  Mongolia: 'Mongolia (蒙古)',
  Montenegro: 'Montenegro (黑山)',
  Montserrat: 'Montserrat (蒙特塞拉特)',
  Morocco: 'Morocco (摩洛哥)',
  Mozambique: 'Mozambique (莫桑比克)',
  Myanmar: 'Myanmar (缅甸)',
  Namibia: 'Namibia (纳米比亚)',
  Nauru: 'Nauru (瑙鲁)',
  Nepal: 'Nepal (尼泊尔)',
  Netherlands: 'Netherlands (荷兰)',
  'New Caledonia': 'New Caledonia (新喀里多尼亚)',
  'New Zealand': 'New Zealand (新西兰)',
  Nicaragua: 'Nicaragua (尼加拉瓜)',
  Niger: 'Niger (尼日尔)',
  Nigeria: 'Nigeria (尼日利亚)',
  Niue: 'Niue (纽埃)',
  'Norfolk Island': 'Norfolk Island (诺福克岛)',
  'North Korea': 'North Korea (朝鲜)',
  'Northern Mariana Islands': 'Northern Mariana Islands (北马里亚纳群岛)',
  Norway: 'Norway (挪威)',
  Oman: 'Oman (阿曼)',
  Pakistan: 'Pakistan (巴基斯坦)',
  Palau: 'Palau (帕劳)',
  'Palestinian Territory': 'Palestinian Territory (巴勒斯坦)',
  Panama: 'Panama (巴拿马)',
  'Papua New Guinea': 'Papua New Guinea (巴布亚新几内亚)',
  Paraguay: 'Paraguay (巴拉圭)',
  Peru: 'Peru (秘鲁)',
  Philippines: 'Philippines (菲律宾)',
  'Pitcairn Islands': 'Pitcairn Islands (皮特凯恩群岛)',
  Poland: 'Poland (波兰)',
  Portugal: 'Portugal (葡萄牙)',
  'Puerto Rico': 'Puerto Rico (波多黎各)',
  Qatar: 'Qatar (卡塔尔)',
  Reunion: 'Reunion (留尼汪)',
  Romania: 'Romania (罗马尼亚)',
  'Russian Federation': 'Russian Federation (俄罗斯)',
  Rwanda: 'Rwanda (卢旺达)',
  'Saint Barthelemy': 'Saint Barthelemy (圣巴泰勒米)',
  'Saint Helena': 'Saint Helena (圣赫勒拿)',
  'Saint Kitts and Nevis': 'Saint Kitts and Nevis (圣基茨和尼维斯)',
  'Saint Lucia': 'Saint Lucia (圣卢西亚)',
  'Saint Martin': 'Saint Martin (圣马丁)',
  'Saint Pierre and Miquelon': 'Saint Pierre and Miquelon (圣皮埃尔和密克隆)',
  'Saint Vincent and the Grenadines': 'Saint Vincent and the Grenadines (圣文森特和格林纳丁斯)',
  Samoa: 'Samoa (萨摩亚)',
  'San Marino': 'San Marino (圣马力诺)',
  'Sao Tome and Principe': 'Sao Tome and Principe (圣多美和普林西比)',
  'Saudi Arabia': 'Saudi Arabia (沙特阿拉伯)',
  Senegal: 'Senegal (塞内加尔)',
  Serbia: 'Serbia (塞尔维亚)',
  Seychelles: 'Seychelles (塞舌尔)',
  'Sierra Leone': 'Sierra Leone (塞拉利昂)',
  Singapore: 'Singapore (新加坡)',
  'Sint Maarten': 'Sint Maarten (荷属圣马丁)',
  Slovakia: 'Slovakia (斯洛伐克)',
  Slovenia: 'Slovenia (斯洛文尼亚)',
  'Solomon Islands': 'Solomon Islands (所罗门群岛)',
  Somalia: 'Somalia (索马里)',
  'South Africa': 'South Africa (南非)',
  'South Georgia and the South Sandwich Islands': 'South Georgia and the South Sandwich Islands (南乔治亚岛和南桑威奇群岛)',
  'South Korea': 'South Korea (韩国)',
  'South Sudan': 'South Sudan (南苏丹)',
  Spain: 'Spain (西班牙)',
  'Sri Lanka': 'Sri Lanka (斯里兰卡)',
  Sudan: 'Sudan (苏丹)',
  Suriname: 'Suriname (苏里南)',
  'Svalbard and Jan Mayen': 'Svalbard and Jan Mayen (斯瓦尔巴和扬马延)',
  Swaziland: 'Swaziland (斯威士兰)',
  Sweden: 'Sweden (瑞典)',
  Switzerland: 'Switzerland (瑞士)',
  'Syrian Arab Republic': 'Syrian Arab Republic (叙利亚)',
  Taiwan: 'Taiwan (中国台湾)',
  Tajikistan: 'Tajikistan (塔吉克斯坦)',
  Tanzania: 'Tanzania (坦桑尼亚)',
  Thailand: 'Thailand (泰国)',
  'Timor-Leste': 'Timor-Leste (东帝汶)',
  Togo: 'Togo (多哥)',
  Tokelau: 'Tokelau (托克劳)',
  Tonga: 'Tonga (汤加)',
  'Trinidad and Tobago': 'Trinidad and Tobago (特立尼达和多巴哥)',
  Tunisia: 'Tunisia (突尼斯)',
  Turkey: 'Turkey (土耳其)',
  Turkmenistan: 'Turkmenistan (土库曼斯坦)',
  'Turks and Caicos Islands': 'Turks and Caicos Islands (特克斯和凯科斯群岛)',
  Tuvalu: 'Tuvalu (图瓦卢)',
  Uganda: 'Uganda (乌干达)',
  Ukraine: 'Ukraine (乌克兰)',
  'United Arab Emirates': 'United Arab Emirates (阿拉伯联合酋长国)',
  'United Kingdom': 'United Kingdom (英国)',
  'United States': 'United States (美国)',
  'United States Minor Outlying Islands': 'United States Minor Outlying Islands (美国本土外小岛屿)',
  Uruguay: 'Uruguay (乌拉圭)',
  Uzbekistan: 'Uzbekistan (乌兹别克斯坦)',
  Vanuatu: 'Vanuatu (瓦努阿图)',
  Venezuela: 'Venezuela (委内瑞拉)',
  Vietnam: 'Vietnam (越南)',
  'Virgin Islands British': 'Virgin Islands British (英属维尔京群岛)',
  'Virgin Islands U.S.': 'Virgin Islands U.S. (美属维尔京群岛)',
  'Wallis and Futuna': 'Wallis and Futuna (瓦利斯和富图纳)',
  'Western Sahara': 'Western Sahara (西撒哈拉)',
  Yemen: 'Yemen (也门)',
  Zambia: 'Zambia (赞比亚)',
  Zimbabwe: 'Zimbabwe (津巴布韦)'
};
;// ./src/services/ui-translation/data/hentaiathome.ts

function hentaiathome_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? hentaiathome_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : hentaiathome_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


merge(/^\/hentaiathome\.php\??$/, undefined, _objectSpread(_objectSpread({
  'Hentai@Home Clients': 'Hentai@Home 客户端',
  'H@H Region': 'H@H 地区',
  'Current Network Load': '当前网络负载',
  'Hits/sec': '命中/秒',
  Coverage: '覆盖率',
  'Hits/GB': '命中/GB',
  Quality: '质量',
  'North and South America': '北美洲和南美洲',
  'Europe and Africa': '欧洲和非洲',
  'Asia and Oceania': '亚洲和大洋洲',
  'Chinese Dominion': '中国大陆',
  Global: '全球',
  '\n\tHits/GB shows the current average number of hits per minute per gigabyte of allocated disk space for all online clients in the region.': '命中/GB 表示当前此区域所有在线客户端分配的每 GB 磁盘空间每分钟的平均命中次数。',
  '\n\tA high number indicates that clients are more needed in the region than other regions. A low number indicates oversaturation.\n': '较高的数值表明该地区对客户端的需求量比其他地区更高。较低的数值表明该地区已经趋于饱和。',
  'Your Active Clients': '您的活动客户端',
  'To add more clients, ': '要添加更多客户端，请',
  'PM Tenboro': '联系 Tenboro',
  '. Make sure to read the requirements first to make sure that you qualify. Include the system specifications and location the client will run at in the message, and specify whether it is a home connection or a VPS/Dedicated. Each client requires its own unique public IPv4 address to run, and must either be reachable directly from the internet, or have a port forwarded. These are technical requirements, and it is not possible to make any exceptions.': '。请务必先阅读要求以确保您符合资格。在消息中包含客户端的配置和地理位置，并说明它是家庭连接还是 VPS/独立服务器。每个客户端都需要拥有唯一的公共 IPv4 地址才能运行，并且必须可以直接从 Internet 访问，或者使用端口转发。这些都是技术要求，不可能有任何例外。',
  'Due to excess capacity, we are not taking new applications for Europe at the moment, with an exception for donators.': '由于资源过剩，我们暂时不接受欧洲地区的新申请，但捐赠者除外。',
  'If you want to run a client ': '如果您想在',
  'outside of Europe': '欧洲以外的地区',
  ', ': '运行客户端，请',
  '. Include the system specs, speedtest and location in the message.': '。在消息中包含系统配置、SpeedTest 结果和地理位置。',
  'The client will be locked to the provided location. Do not send PMs asking to run clients in Europe.': '客户端将被锁定在指定的地理位置。请勿发送私信要求在欧洲运行客户端。',
  Client: '客户端',
  Status: '状态',
  Created: '创建于',
  'Last Seen': '最后在线于',
  'Files Served': '提供的文件',
  'Client IP': '客户端 IP',
  Port: '端口',
  Version: '版本',
  'Max Speed': '最大速度',
  Trust: '信任',
  Hitrate: '命中率',
  Hathrate: 'Hath 产出率',
  Region: '地区',
  Online: '在线',
  Offline: '离线',
  'Not available when offline': '离线状态下不可用'
}, BROWSING_COUNTRY), {}, {
  'Apply for H@H participation': '参与申请 H@H',
  'For information on how to participate in the Hentai@Home Project, refer to the ': '有关如何参与 Hentai@Home 项目的信息，请参阅 ',
  'Hentai@Home Project FAQ': 'Hentai@Home 项目常见问题解答 (英文)',
  '. Read and understand the requirements BEFORE you submit an application. Your system and network speed must meet some minimum requirements to run H@H, and the client cannot be regularly shut down.': '。在提交申请之前，请确保您已阅读并理解要求。您的系统和网络速度必须满足一些最低要求才能运行 H@H，并且客户端不能经常关闭。',
  'If you have a headless server that cannot use the normal speedtest, use ': '如果您有一台无法使用寻常 SpeedTest 的无头服务器，请使用 ',
  ' instead.': ' 代替。',
  'Max Outgoing Speed': '最大出站速率',
  'The maximum outgoing speed you want to use for this client.': '此客户端允许的最大出站 (上传) 速度。',
  'This should be less than or equal to your connection speed.': '此速度应当小于等于您的连接速度。',
  'Disk Cache Size': '磁盘缓存大小',
  'The maximum allowed disk space for the image cache.': '允许缓存占用的最大磁盘空间。',
  'The allocated space must be reserved for H@H.': '分配的空间必须为 H@H 保留。',
  'Speed Test': '速度测试结果',
  'Go to ': '前往 ',
  ' and run a test against your closest server.': ' 并使用距离最近的服务器进行测试。',
  'After the test completes, paste the result URL here.': '测试完成后，将结果 URL 粘贴在此处。',
  'The resulting speedtest MUST show at least 80 Mbps upload ': '要求：至少 80 Mbps 上传速度 ',
  AND: '和',
  ' 80 Mbps download! Old tests will be rejected.': ' 80 Mbps 下载速度，使用旧的测试结果会被拒绝。',
  'The client MUST normally be running at all times. Clients with frequent/extensive downtime will be revoked.': '正常情况下客户端必须一直运行，经常/长时间离线的客户端会被吊销。',
  'BOTH measurements in my test above are at least 80 Mbps': '我的测速两个值均大于 80 Mbps',
  'This client will be hosted on a system that is usually running 24/7': '此客户端将托管在一台正常情况下 24 小时运行的系统上',
  'Submit Application': '提交申请',
  'Your application is pending. You can still make changes below if necessary.': '您的申请正在等待处理。如有必要，您仍可以在下方修改申请。',
  'If the auto-detected region is wrong, ': '如果自动检测的地区错误，请',
  ' to have an override applied. Include the correct country, client ID and IP address in your message, and ': '以进行更改。在消息中包含正确的国家/地区、客户端 ID 和 IP 地址，并',
  'make sure to keep your client running': '确保您的客户端保持运行',
  '. Having a client placed in the wrong region will cause a variety of issues, and makes it perform worse than it would otherwise do.': '。将客户端设置为错误的地区会导致各种问题，并使其性能表现不如预期。',
  'Free Archive Quota: ': '免费的存档配额：',
  ', measured in a 168-hour sliding window. Clients must be ': '，按照最近 168 小时的在线时间进行计算。客户端必须保持',
  healthy: '健康',
  ' and must have been running for more than 24 hours straight to qualify.': '并运行超过 24 小时才能获得资格。',
  'Client Download': '客户端下载',
  File: '文件',
  Size: '大小',
  'Source Code': '源代码',
  'You can find the current release notes ': '您可以在 ',
  here: '此处',
  '. You should verify that the size and cryptographic hash correspond to the files you download. Hentai@Home is an Open Source project released under the GNU General Public Licence v3. The source code and build scripts for Windows and Linux-like systems can be found above.': ' 找到当前版本的发行说明 (英文)。请验证您下载的文件的大小和哈希值与上方给出的数值相对应。Hentai@Home 是在 GNU 通用公共许可证 v3 下发布的开源项目。Windows 和类 Linux 系统的源代码和构建脚本可以在上面找到。',
  'Unfortunately, we cannot accept clients with less than 80 Mbit/s outgoing speed.': '抱歉，我们无法接受出站速率低于 80 Mbps 的客户端。',
  'Unfortunately, we cannot accept clients that are frequently offline.': '抱歉，我们无法接受经常离线的客户端。'
}), [[/^([\d.]+) \/ min$/, '$1 / 分钟'], [/^([\d.]+) \/ day$/, '$1 / 天'], [/^([\d.]+) ([KMGTP]B)\/hour$/, '$1 $2/小时'], [/^([\d.]+) ([KMGTP]B) per week$/, '每周 $1 $2'], [/^Must be at least ([\d.]+) ([KMGTP]B)\/s, which must be reserved for H@H.$/, '不小于 $1 $2/s，必须为 H@H 保留。'], [/^ Must be at least ([\d.]+) ([KMGTP]iB) but more is always better.$/, '至少为 $1 $2，但越多越好。'], [/^Max Burst Speed must be at least ([\d.]+) ([KMGTP]B)\/s.$/, '最大出站速率必须至少为 $1 $2/s。'], [/^Disk Space must be at least ([\d.]+) ([KMGTP]B).$/, '磁盘空间必须至少为 $1 $2。']]);
merge(/^\/hentaiathome\.php\?.*act=settings/, undefined, {
  'You cannot reset the ranges of a client that has been online in the last 24 hours. DO NOT RESET RANGES UNLESS YOU LOST YOUR CACHE.': '您无法重置过去 24 小时内在线的客户端的静态范围。除非您丢失了缓存，否则请不要重置范围。',
  'Client ID:': '客户端 ID：',
  'Client Key:': '客户端 Key：',
  'Current Value: ': '现值：',
  'New Value: ': '新值：',
  'Port for Incoming Connections': '监听端口',
  'Can be 443 (recommended) or most numbers between 1024 and 65534. This port must be opened in your firewall, and forwarded from any NAT-based cable/xDSL modems or routers you connect to the internet through.': '可以使用 443 (推荐) 或 1024~65534 的大部分端口。此端口必须在您的防火墙中打开，并经由您连接到 Internet 的任何基于 NAT 的电缆/xDSL 调制解调器或路由器转发。',
  'Note: The port cannot be changed while the client is running.': '注意：客户端运行时不能更改端口。',
  'Client Name': '客户端名称',
  'You can set a custom name for this client here. This will be used in the various listings this client appears in.': '您可以在这里为此客户端设置自定义名称。它会用于此客户端出现的各种列表中。',
  'Maximum Upload Rate': '最大上传速率',
  'Turning on the client-side speed limit makes the client enforce this as the maximum speed, which reduces the burstiness of the load. This will increase CPU usage and can reduce the performance of the client. You should only enable this if H@H noticeably affects your home network performance.': '打开客户端侧速度限制会使客户端以设置的最大速度运行，从而减少负载的突发性。但这会增加 CPU 使用率，降低客户端的性能。仅当 H@H 明显影响您的家庭网络性能时才应启用此功能。',
  'Clients cannot be assigned high-capacity ranges if set below 10 MB/s.': '如果设置低于 10 MB/s，则不会被分配到大容量范围。',
  ' KBytes/s': ' KB/s',
  ' Enable Client-Side Speed Limit (recommended only for home networks)': ' 启用客户端侧的速度限制 (仅建议家庭网络开启)',
  ' Confirm removing all assigned high-capacity ranges from this client if set below 10 MB/s': ' 如果低于10 MB/s，确认删除客户端中所有大容量范围',
  'Note: 1 KB/s or KBps (Kilo': '注意：1 KB/s 或 KBps (千',
  bytes: '字节',
  ' per Second) is equivalent to 8 Kb/s or Kbps (Kilo': '每秒) 相当于 8 Kb/s 或 Kbps (千',
  bits: '比特',
  ' per Second). Internet speeds are typically advertised as the latter (Mbps or Mbit/s), and this is also what Speedtest uses, so make sure you use the right one. Do not set this higher than the upload bandwidth of your internet connection.': '每秒)。Internet 速度通常被宣传为后者 (Mbps 或 Mbit/s)，Speedtest 也使用这种表示方式，因此请确保使用正确的速度。您不应将此设置为高于 Internet 连接的上行带宽。',
  'To reduce the upload rate for this client below this level, you must first shut it down, then check the "Remove static ranges if necessary" option.': '降低该客户端的上传速率需要先关闭客户端，然后勾选“必要时移除静态范围”选项。',
  'Maximum Disk Cache Size': '最大磁盘缓存大小',
  'How much disk space to reserve for this client. Must be at least 10 GiB, but the more you assign the better your client will perform. The reserved space must always be available.': '希望为此客户端保留多少磁盘空间。最少 10 GiB，但是保留的越多，客户端表现的越好。保留空间必须始终可用。',
  'Static Range allocation is limited to 1 per 250 MiB.': '静态范围分配限制为每 250 MiB 磁盘空间 1 组。',
  ' Verify cache integrity on next startup': ' 下次启动时验证缓存完整性',
  'To reduce the disk space for this client below this level, you must first shut it down, then check the "Remove static ranges if necessary" option.': '降低该客户端所需的磁盘空间需要先关闭客户端，然后勾选“必要时移除静态范围”选项。',
  'Advanced Settings': '高级设置',
  'The settings below are optional advanced settings.': '以下设置项为可选的高级设置',
  'Reset Client Key': '重置客户端 Key',
  'If you believe your client key has been compromised, you can reset the key by checking this box. You will have to re-enter the key the next time the client starts.': '如果您认为您的客户端 Key 已泄露，可以通过选中复选框来重置密钥。下次客户端启动时，您必须重新输入密钥。',
  ' Reset Client Key': ' 重置客户端 Key',
  'Monthly Data Transfer Target': '每月数据流量限制',
  Unlimited: '无限',
  ' GB per month': ' GB/月',
  'Static Range allocation is limited to 1 per 5 GB. Clients cannot be assigned high-capacity ranges if set below 5 TB/month.': '每 1 组静态范围至少 5 GB。如果设置低于 5 TB/月，则不会被分配到大容量范围。',
  'To reduce the monthly data transfer target for this client below this level, you must first shut it down, then check the "Remove static ranges if necessary" option.': '降低该客户端的每月数据流量限制需要先关闭客户端，然后勾选“必要时移除静态范围”选项。',
  'You need to check the confirmation box to confirm removing these ranges to set this.': '你需要勾选确认框，确认移除这些范围才能进行设置。',
  ' Confirm removing all assigned high-capacity ranges from this client if set below 5 TB/month': ' 如果低于5 TB/月，确认删除客户端中所有大容量范围',
  'Minimum Free Disk Space': '磁盘最小剩余空间',
  'Use Default': '默认',
  'If this value is set, the client will stop running if the free space on the disk decreases below this value. The client will exit if free space drops below 1 GiB even if this is not set.': '如果设置了此值，则当磁盘上的可用空间低于此值时，客户端会停止运行。即使未设置，当可用空间低于 1 GiB 时，客户端也会退出。',
  'Reset Static Ranges': '重置静态范围',
  'Your client will be assigned ranges of files to cache and serve. This toggle clears these ranges. ': '您的客户端会被分配到一段文件范围用于缓存和提供服务。此复选框用于重置这些范围。',
  'DO NOT DO THIS UNLESS YOU LOST YOUR CACHE. IT WILL NOT FIX OTHER CLIENT ISSUES. DOING THIS REGULARLY WILL REVOKE YOUR CLIENT.': '除非您丢失了缓存，否则不要执行此操作。它不会修复客户端的其他任何问题。定期执行此操作将吊销您的客户端。',
  'No ranges are assigned yet. The client must run for at least 24 hours continuously before any ranges are assigned.': '尚未分配任何范围。客户端必须连续运行至少 24 小时，才会分配范围。',
  'The following ranges are currently assigned: P1 = ': '当前分配的范围：P1 = ',
  ' Reset Static Ranges': ' 重置静态范围',
  'Warning: You should ': '警告：',
  never: '不要',
  ' reset your static ranges ': '重置您的静态范围，',
  unless: '除非',
  ' the cache has been deleted or is otherwise lost. But it should ': '缓存已被删除或以其他方式丢失。然而如果缓存因任何原因被清除，则',
  always: '必须',
  ' be reset if the cache has been cleared for whatever reason, or the client will encounter serious trust issues.': '重置静态范围，否则客户端将遇到严重的信任问题。',
  'Miscellaneous Toggles': '杂项开关',
  'Various toggles to optimize client behavior.': '用于优化客户端行为的各种开关。',
  ' Disable logging to disk. This will reduce disk activity by a small amount. Errors are still logged.': ' 停止向磁盘写入日志。启用后能轻微减少磁盘活动。错误仍会被记录。',
  ' Run in low-memory mode. This will somewhat reduce memory requirements, but will lead to increased disk activity.': ' 以低内存模式运行。启用后能在一定程度上减少内存占用，但会导致磁盘活动增加。',
  ' Use this client as your designated H@H Downloader. Only necessary if you have multiple clients.': ' 将此客户端用作指定的 H@H 下载器。仅当您有多个客户端时才需要。',
  'Changes will be applied within roughly two minutes. If you decrease the disk cache space, it will not take effect until next restart.': '更改将在大约两分钟内生效。如果减少了磁盘缓存空间，则需要重新启动才会生效。',
  ' Allow removing static ranges if necessary (client must be shut down)': '必要时允许移除静态范围 (需要重启客户端)',
  'Apply Settings': '应用设置',
  'Back to Overview': '返回总览'
}, [[/^This is the maximum speed the client can use to serve files, measured in kilobytes per second. Must be at least ([\d.]+) ([KMGTP]B)\/s. Actual utilization will be at most 80% of this over time.$/, '这是客户端可以用来提供文件的最大速度，以每秒千字节为单位。必须至少为 $1 $2/s。随着时间的推移，利用率最多会达到此值的 80%。'], [/^This client currently has ([\d.]+) static ranges assigned. Each requires at least 250 MiB of disk space, so you cannot reduce it below ([\d.]+) GiB without removing ranges.$/, '此客户端已分配 $1 组静态范围。每组需要至少 250 MiB 磁盘空间，所以您无法减少至低于 $2 GiB，除非移除静态范围。'], [/^This client currently has ([\d.]+) static ranges assigned. Each requires at least 5 KB\/s of upload rate, so you cannot reduce it below ([\d.]+) KB\/s without removing ranges.$/, '此客户端已分配 $1 组静态范围。每组需要至少 5 KB/s 上传速率，所以您无法减少至低于 $2 KB/s，除非移除静态范围。'], [/^This client currently has ([\d.]+) static ranges assigned. Each requires at least 5 GB of monthly data transfer, so you cannot reduce it below ([\d.]+) GB without removing ranges.$/, '此客户端已分配 $1 组静态范围。每组需要至少 5 GB 的每月数据流量，所以您无法减少至低于 $2 GB，除非移除静态范围。'], [/^This client currently has ([\d.]+) high-capacity ranges assigned. Clients with high-capacity ranges cannot have a data transfer limit set below ([\d.]+) TB\/month.$/, '此客户端已分配 $1 组大容量范围。已具有大容量范围的客户端，其每月数据流量限制不能设置为低于 $2 TB/月。'], [/^If you have a monthly data cap, you can provide it here. If the system detects that you are likely to exceed this target, it will reduce the priority of ranges on your client to reduce the load, but it is not guaranteed to stay below this value. Leave at 0 to limit with max speed alone. Must be at least ([\d.]+) GB if set.$/, '如果你有每月数据限额，请在此设置。如果系统检测到你可能超过此限额，它将会降低客户端上的静态范围的优先度，以降低网络负载，但并不能保证低于设定值。保留为 0 表示仅限制最大速度。最低限制为 $1 GB。'], [/^([\d.]+) GB per month$/, '$1 GB/月'], [/^([\d.]+) ([KMGTP]B)\/hour$/, '$1 $2/小时'], [/^([\d.]+) ([KMGTP]B)\/s$/, '$1 $2/s'], [/^Cannot set a larger Max Upload Rate than ([\d.]+) ([KMGTP]B)\/s \(([\d.]+) ([KMGTP]bit)\/s\).$/, '最大上传速率不能设置为超过 $1 $2B/s ($3 $4/s)。'], [/^Monthly Data Transfer Target must be at least ([\d.]+) ([KMGTP]B) if set\.$/, '如果设置，月数据传输目标必须至少为 $1 $2。'], [/^Disk Cache Size must be at least ([\d.]+) ([KMGTP]i?B)\.$/, '磁盘缓存大小必须至少为 $1 $2。']]);
;// ./src/services/ui-translation/data/home.ts

merge(/^\/home\.php/, undefined, {
  'Image Limits': '图像配额',
  'Due to widespread usage of bulk downloaders, high-resolution images can be limited.': '由于批量下载器的滥用，高分辨率图像可能会受到限制。',
  'You are currently at ': '当前：',
  ' towards your account limit of ': '，账户限制为 ',
  '.': '。',
  'You can reset your image quota by spending ': '重置配额花费：',
  ' GP.': ' GP。',
  'Reset Quota': '重置配额',
  'You are currently using IP-based limits. No restrictions are currently in effect.': '您当前使用的是基于 IP 的限制，目前没有任何限制生效。',
  'Due to a high request rate, your IP is currently restricted to lower-resolution images.': '由于请求频率过高，您的 IP 目前只能查看低分辨率图像。',
  'You can get a Bronze Star or the More Pages hathperk to tie image limits to your account.': '您可以通过捐赠铜星或解锁 Hath Perk:「更多页面」将图像配额绑定到您的账户。',
  'Alternatively, you can unlock a high-resolution quota for 24 hours by spending ': '或者，您可以花费 GP 来解锁 24 小时的高分辨率配额：',
  'Note that for the latter, clearing your cookies will revert you to IP-based limits.': '请注意：对于后者，清除 Cookie 将使您恢复到基于 IP 的限制。',
  'Unlock Quota': '解锁配额',
  EHTracker: 'EH 种子服务器',
  ' uploaded': '上传量',
  downloaded: '下载量',
  'up/down ratio': '分享率',
  'torrent completes': '完成种子',
  'gallery completes': '完成图库',
  seedmins: '做种时长',
  'Show My Torrents': '显示我的种子',
  'If you misplace any of your personalized torrents, hit the button below to reset your key.': '如果您错误地分发了私有种子，请点击下面的按钮重置您的 Key。',
  'This will immediately invalidate all of your personalized torrents in play.': '这会立即注销您全部的私有种子。',
  'Your current key is: ': '您当前的 Key 是：',
  'Reset Torrent Key': '重置种子 Key',
  'Total GP Gained': '获得的总 GP',
  'GP from gallery visits': 'GP 来自图库浏览',
  'GP from torrent completions': 'GP 来自种子完成',
  'GP from archive downloads': 'GP 来自存档下载',
  'GP from Hentai@Home': 'GP 来自 Hentai@Home',
  '\n\t\t\tYou are currently not featured on any toplists...\n\t\t': '您当前没有上榜...',
  'You are currently: ': '您现在是：',
  'on the ': ' (在',
  ' toplist': '榜)',
  'Moderation Power': '愿力',
  'Current Moderation Power': '当前愿力',
  Base: '基础',
  Awards: '奖励',
  Tagging: '打标签',
  Level: '等级',
  'Forum Activity': '论坛活跃',
  'Uploads/H@H': '上传 / H@H',
  'Account Age': '账户资历',
  '(capped to 25)': '(不超过 25)'
});
;// ./src/services/ui-translation/data/image.ts

merge(/^\/(s|mpv)\//, undefined, {
  'Show all galleries with this file': '显示所有包含此图像的图库',
  'Get forum image link': '生成用于论坛的图像链接',
  'Click here if the image fails loading': '重新加载图像',
  'Close Image Viewer': '关闭图像查看器',
  'Go Fullscreen - F11 or ESC to cancel': '全屏 - F11 或 ESC 退出',
  'Align Left, Scale Down Only': '左对齐，仅当图像大于浏览器宽度时缩放',
  'Align Center, Scale Down Only': '居中对齐，仅当图像大于浏览器宽度时缩放',
  'Align Center, Scale To Fit': '居中对齐，始终缩放图像以适应浏览器宽度',
  'Show Thumbnail Pane': '显示缩略图侧栏',
  'Hide Thumbnail Pane': '隐藏缩略图侧栏',
  'Reload broken image': '重新加载图像',
  'Open image in normal viewer': '在普通查看器中打开图像',
  'Show galleries with this image': '显示所有包含此图像的图库',
  'Get forum link to image': '生成用于论坛的图像链接'
}, [[/^Page (\d+) - /, '第 $1 页 - '], [/^Download original (.*?) source$/, '下载原图 ($1)'], [/^Download original (.*?)B$/, '下载原图 $1B']]);
;// ./src/services/ui-translation/data/karma.ts

merge(/^\/karma\.php/, undefined, {
  '\n\tYou are about to imbue ': '您将要赋予 ',
  ' with ': ' ',
  ' karma.': ' karma。',
  '\n\tIf you wish, you can leave a short message below.\n': '\n\t如果您愿意，可以在下方简短留言。\n',
  Imbue: '赋予',
  '\nYou cannot imbue yourself with Karma!\n': '您不能赋予自己 Karma！',
  'Please wait longer between karma imbue attempts.': '请在赋予 Karma 之间等待更长时间。',
  'You have imbued ': '你向 ',
  'Your Karma Influence Power has been drained, and is now ': '您的 Karma 影响力已消耗，现在为 ',
  '\nYou have imbued this member with karma too recently.': '您最近赋予过此用户 Karma。',
  'Time remaining before you can imbue this member again:': '距离下次可赋予此用户的时间为：'
}, [[/^ with ([\d.]+) points? of karma.$/, '赋予了 $1 点 Karma。'], [/^([\d.]+) days and ([\d.]+) hours$/, '$1 天 $2 小时'], [/^([\d.]+) hours and ([\d.]+) minutes$/, '$1 小时 $2 分钟'], [/^([\d.]+) days$/, '$1 天'], [/^([\d.]+) hours$/, '$1 小时'], [/^([\d.]+) minutes$/, '$1 分钟']]);
;// ./src/services/ui-translation/data/lofi.ts

merge(/^\/lofi\//, undefined, {
  '< Prev Page': '< 上一页',
  'Next Page >': '下一页 >',
  'E-Hentai Lo-Fi Galleries: The Mobile Hentai Experience': 'E-Hentai 低保真图库：移动 Hentai 体验',
  'Posted:': '发布：',
  'Category:': '类别：',
  'Tags:': '标签：',
  'Rating:': '评分：',
  'Go To First Page': '前往第一页',
  '\n\tImage Resolution: \xA0 ': '图像分辨率：',
  'Back to Gallery Page': '返回图库页',
  'Back to Front Page': '返回首页'
}, [[/^(\d\d\d\d-\d\d-\d\d \d\d:\d\d) by (.*)$/, '$1 \xA0 上传者：$2']]);
;// ./src/services/ui-translation/data/login.ts

merge(/^\/bounce_login\.php/, undefined, {
  'This page requires you to log on.': '此页面需要登录才能访问',
  'Login!': '登录',
  '\xA0or\xA0': ' 或 ',
  Register: '注册'
});
;// ./src/services/ui-translation/data/logs.ts

merge(/^\/logs\.php/, undefined, {
  Date: '日期',
  Amount: '金额',
  Information: '信息',
  'Total Karma: ': '总 Karma：',
  From: '来自',
  Topic: '主题',
  Comment: '附言',
  'Show Older >': '下一页 >'
});
;// ./src/services/ui-translation/data/mytags.ts

merge(/^\/mytags/, undefined, {
  'New Tagset': '新建标签集',
  ' Enable': ' 启用',
  '#default': '#默认',
  'Enter a single tag to flag, watch or hide': '输入要标记、关注或隐藏的标签',
  ' Watched': ' 关注',
  ' Hidden': ' 隐藏',
  'Action:': '操作：',
  'Delete Selected': '删除选中项',
  'Change Tagset:': '改变标签集：',
  'Confirm Delete': '确认删除',
  'Confirm Move': '确认移动',
  'Select All': '全选',
  'Enable flagging and watching for tags in this set': '启用此标签集中标签的标记和关注',
  'Watch galleries with this tag': '关注带有此标签的图库',
  'Hide galleries with this tag': '隐藏带有此标签的图库',
  'Default tag color for this tagset. Tags in this set that do not have a set flag color will use this color. A default color will be used if neither is set.': '此标签集的默认标签颜色。如果此标签集中的标签没有设置颜色，则使用此颜色。如果两者都没有设置，则使用默认颜色。',
  '(optional) The weight of this tag. This is used to order flagged tags if several are present, as well as calculating the contribution of this tag towards the soft tag filter and watching threshold.': '(可选) 此标签的权重。如果存在多个标签，则用于对标记的标签进行排序，同时也用于计算此标签对于软标签过滤器和订阅的权重。'
});
;// ./src/services/ui-translation/data/news.ts

merge(/^\/news\.php/, undefined, {
  'Site Status': '网站状态',
  'Lately we have been seeing a surge of old accounts with weak/compromised passwords being taken over by spammers, causing them to get banned.': '最近我们看到了大量旧账户被垃圾邮件发送者接管，这些账户的密码较弱或已被泄露，导致它们被封禁。',
  'If you still use a weak password or a password you ever used anywhere else, you need to change it as soon as possible.': '如果你仍在使用较弱的密码或曾在其他地方使用过的密码，你需要尽快更改它。',
  'We will ': '如果你忽略了这个警告并且发生了这种情况，我们将',
  not: '不',
  ' manually restore access to your account if you ignore this warning and it happens to you.': '会手动恢复你的账户访问权限。',
  'Scheduled Downtime & Maintenance': '计划停机和维护',
  'No maintenance is currently ongoing or scheduled.': '目前没有正在进行或计划中的维护。',
  'Automated Monitoring Status': '自动监控状态',
  'No server issues have been detected by the monitoring system.': '监控系统未检测到服务器问题。',
  'Site Changelog': '网站更新日志',
  'Changelogs: \xA0 ': '更新日志：',
  'Show Older News': '显示更早的新闻'
}, [[/^Last Monitoring Update: (\d\d\d\d-\d\d-\d\d \d\d:\d\d) UTC$/, '最后监控更新：$1 UTC'], [/^Show (\d+) comment(s)?$/, '显示 $1 条评论'], [/^Posted (.+?) UTC$/, '发布于 $1 UTC']]);
;// ./src/services/ui-translation/data/popular.ts

merge(/^\/popular/, undefined, {
  'Currently Popular Recent Galleries': '当下流行的新图库'
});
;// ./src/services/ui-translation/data/search.ts

merge(/^\/\?.*f_shash=.*$/, undefined, {
  'Showing galleries with file: ': '正在显示包含此文件的图库：',
  'Similarity Scan was disabled for this search. You must start a new search to alter this.': '在本次搜索中，相似性查询已禁用。要更改相似性查询设置，您必须重新搜索。',
  'Similarity Scan was enabled for this search. You must start a new search to alter this.': '在本次搜索中，相似性查询已启用。要更改相似性查询设置，您必须重新搜索。',
  'No file was uploaded, or the uploaded file was invalid.': '没有上传文件，或上传的文件无效',
  'The uploaded file was detected as monotone. Only exact file matches are displayed.': '上传的文件被检测为单色图，仅显示完全匹配的文件'
}, []);
;// ./src/services/ui-translation/data/stats.ts

merge(/^\/stats\.php/, undefined, {
  'Visitor Statistics': '访客统计',
  'Your galleries have had a total of ': '你的图库共计有 ',
  'This gallery has had a total of ': '此图库共计有 ',
  ' visit.': ' 名访客。',
  ' visits.': ' 名访客。',
  Ranking: '名次',
  Score: '分数',
  ' All-Time': '所有时间',
  ' Past Year': '年排行',
  ' Past Month': '月排行',
  ' Yesterday': '日排行',
  'Not in Top 1000': '1000 名以外',
  'Yearly Stats': '年度统计',
  Visits: '访问',
  Hits: '点击',
  'Last 12 Months': '最近 12 个月',
  Jan: '1 月',
  Feb: '2 月',
  Mar: '3 月',
  Apr: '4 月',
  May: '5 月',
  Jun: '6 月',
  Jul: '7 月',
  Aug: '8 月',
  Sep: '9 月',
  Oct: '10 月',
  Nov: '11 月',
  Dec: '12 月',
  'Daily Stats': '每日统计',
  '1st': '1 日',
  '2nd': '2 日',
  '3rd': '3 日',
  '4th': '4 日',
  '5th': '5 日',
  '6th': '6 日',
  '7th': '7 日',
  '8th': '8 日',
  '9th': '9 日',
  '10th': '10 日',
  '11th': '11 日',
  '12th': '12 日',
  '13th': '13 日',
  '14th': '14 日',
  '15th': '15 日',
  '16th': '16 日',
  '17th': '17 日',
  '18th': '18 日',
  '19th': '19 日',
  '20th': '20 日',
  '21st': '21 日',
  '22nd': '22 日',
  '23rd': '23 日',
  '24th': '24 日',
  '25th': '25 日',
  '26th': '26 日',
  '27th': '27 日',
  '28th': '28 日',
  '29th': '29 日',
  '30th': '30 日',
  '31st': '31 日',
  'The number of total visits on your galleries.': '图库总访问次数',
  'The number of total image accesses on your galleries.': '图库中图像访问次数',
  'Back to Gallery': '返回图库'
});
;// ./src/services/ui-translation/data/tagjustification.ts

merge(/^\/tagjustification\.php/, undefined, {
  '\nYou have no tags pending approval.\n\n': '您没有待审核的标签。',
  'New Tag Justification': '新建标签申请',
  'Make sure to provide a source for each requested tag whenever possible. ': '请尽可能地为每个申请的标签提供来源。',
  'Read this article on how to provide a good source.': '请阅读本文以了解如何提供良好的来源。',
  'If a source cannot be found, elaborate why you still think the tag should be added in the sources field.': '如果找不到来源，请在来源一栏中说明您认为应该添加此标签的理由。',
  'If you leave this page without providing the requested information, these tags will be deleted.': '如果您没有提供所需的信息就离开了页面，则添加的标签会被删除。',
  'You have provided justification for all of the added tags. You can now ': '您已经为所有添加的标签提供了理由。现在您可以 ',
  'return to the gallery': '返回图库',
  ' or close this page.': ' 或关闭此页面。',
  'My Pending Tag Requests': '我的待审核标签申请',
  'Gallery:': '图库：',
  'Tag Name:': '标签：',
  'Namespace:': '命名空间：',
  'Sources:': '来源：',
  'Describe the nature of this tag, and provide link(s) to parody/character reference, official artist/group/cosplayer profile, or anything else you may think is useful to help validate this tag.': '请描述此标签的性质，并提供原作/角色的参考来源、官方艺术家/社团/Coser 的主页地址，或其他任何您认为有助于验证此标签的链接。',
  'Comment:': '评论：',
  'Let us know what you changed with this update, or explain why you did not change anything.': '请告知您在此次更新中做了哪些修改，或者为什么没有做任何修改。',
  'Save Changes': '保存更改',
  'Tag Name': '标签',
  Namespace: '命名空间',
  Sources: '来源',
  'Last Updated': '最后更新',
  MISSING: '缺失',
  OK: '已提供'
}, [[/^You still need to provide sources for (\d+) tag. If you created it by mistake, write "created by mistake" in the sources field.$/, '您还需要为 $1 个标签提供来源。如果您是误添加的标签，请在来源一栏中填写 "created by mistake"。']]);
;// ./src/services/ui-translation/data/tools.ts

merge(/^\/tools\/track_expunge/, 'repo.e-hentai.org', {
  'Expunge Tracker': '删除追踪器',
  'State: \xA0 [': '状态： [',
  All: '全部',
  Expunged: '已删除',
  'Revoked/Rejected': '已撤销/已拒绝',
  'Pending All': '待处理',
  'Pending Expunge': '待删除',
  'Pending Appeal': '待申诉',
  'Type: \xA0 ': '类型： ',
  ' Forbidden': ' 违规内容',
  ' Duplicate': ' 重复',
  ' Replaced': ' 已替换',
  ' Defaced': ' 污损',
  ' \xA0 Involving UID: ': ' \xA0 包含 UID：',
  Go: '查询',
  '< Prev Page': '< 上一页',
  'Next Page >': '下一页 >',
  'There are no recent expunges matching this filter.': '没有符合条件的最近删除记录。',
  Active: '已生效',
  Rejected: '已拒绝',
  Revoked: '已撤销',
  'Pending Expunge (Activating)': '待删除 (生效中)',
  'Pending Expunge (Rejecting)': '待删除 (拒绝中)',
  'Pending Appeal (Activating)': '待申诉 (生效中)',
  'Pending Appeal (Rejecting)': '待申诉 (拒绝中)',
  'Expunge Submitted:': '删除提交时间：',
  'Appeal Submitted:': '申诉提交时间：',
  'Expunge Type:': '删除类型：',
  'Conflict Gallery:': '冲突图库：',
  'Expunge Activated:': '删除生效时间：',
  'Expunge Rejected:': '删除拒绝时间：',
  'Expunge Revoked:': '删除撤销时间：'
}, [[/^Forbidden \(([\d+-]+)\)$/, '违规内容 ($1)'], [/^Duplicate \(([\d+-]+)\)$/, '重复 ($1)'], [/^Replaced \(([\d+-]+)\)$/, '已替换 ($1)'], [/^Defaced \(([\d+-]+)\)$/, '污损 ($1)']]);
merge(/^\/tools\/track_rename/, 'repo.e-hentai.org', {
  'Rename Tracker': '重命名追踪器',
  '\nFilter: \xA0\n[': '状态： [',
  All: '全部',
  Renamed: '已重命名',
  Pending: '待处理',
  '] \xA0\nInvolving UID:\n': '] \xA0 包含 UID：',
  Go: '查询',
  '< Prev Page': '< 上一页',
  'Next Page >': '下一页 >',
  'No results found': '没有符合条件的记录。',
  'OrgE:': '原始英文标题：',
  'CurE:': '当前英文标题：',
  'OrgJ:': '原始日文标题：',
  'CurJ:': '当前日文标题：',
  '(blank)': '(空)',
  ' for ': ' 支持 ',
  'by ': '由 '
}, []);
merge(/^\/tools\/tagtrack/, 'repo.e-hentai.org', {
  'Tag Tracker': '标签追踪器',
  ' downed': ' 已清除',
  ' weak': ' 弱小',
  ' active': ' 活跃',
  ' solid': ' 确定',
  ' aged galleries': ' 老旧图库',
  'Only show galleries posted more than three days ago': '只显示三天前发布的图库',
  ' revived tags': ' 重生标签',
  'Only show revived tags': '只显示重生 (之前被清除但是再次出现) 的标签',
  ' exclude expunged': ' 排除已删除图库',
  'Exclude tags on expunged galleries': '排除已删除图库上的标签',
  ' exclude autotags': ' 排除自动标签',
  'Exclude tags placed by autotagger': '排除由系统自动标记的标签',
  'Tag/NS: ': '标签/命名空间：',
  'tag, tagid, or special:namespace': '标签、标签 ID 或 special:命名空间',
  Go: '查询',
  'Show Older >': '显示更早的 >',
  'There are no tags matching this filter.': '没有符合条件的标签。',
  '(Doujinshi) \xA0': '(同人志) \xA0',
  '(Manga) \xA0': '(漫画) \xA0',
  '(Artist CG) \xA0': '(画师CG) \xA0',
  '(Game CG) \xA0': '(游戏CG) \xA0',
  '(Western) \xA0': '(西方) \xA0',
  '(Non-H) \xA0': '(无H) \xA0',
  '(Image Set) \xA0': '(图集) \xA0',
  '(Misc) \xA0': '(杂项) \xA0',
  downed: '已清除',
  weak: '弱小',
  active: '活跃',
  SOLID: '确定'
}, []);
merge(/^\/tools\/taglist/, 'repo.e-hentai.org', {
  'Tagging data for user ': '',
  ' (uid=': ' 的标签数据 (UID = ',
  Started: '发起',
  Voted: '投票',
  January: '一月',
  February: '二月',
  March: '三月',
  April: '四月',
  May: '五月',
  June: '六月',
  July: '七月',
  August: '八月',
  September: '九月',
  October: '十月',
  November: '十一月',
  December: '十二月',
  Year: '年度',
  Total: '总计',
  'Show Older >': '显示更早的 >',
  'User has no recent tags on public galleries.': '用户最近没有在公开图库上标记过标签。',
  'Filter galleries with assessed bad tagvotes': '筛选具有不良标签投票的图库',
  'There are no recent tag votes assessed as bad.': '最近没有被评定为不良的标签投票。',
  'You have to provide a gid or uid': '您必须提供一个 gid 或 uid',
  'You do not have access to this function.': '您没有权限访问此功能'
}, [[/^User has (\d+) recent tags? on (\d+) public galler(ies|y).$/, '用户最近在 $2 个公开图库上标记了 $1 个标签。'], [/^Last bad tagvote assessed: /, '最近一次不良标签投票的时间：'], [/^Withdrawn bad tagvotes: /, '已撤回的不良标签投票：']]);
merge(/^\/tools\/tagapprove/, 'repo.e-hentai.org', {
  'Pending Tags': '待审核标签',
  'Approved Tags': '已批准标签',
  'Rejected Tags': '已拒绝标签',
  'There are no  tags of this type': '没有此类标签',
  namespace: '命名空间',
  gallery: '图库',
  creator: '创建者',
  'time created': '创建时间',
  'time updated': '更新时间',
  'time approved': '批准时间',
  'time rejected': '拒绝时间',
  '(missing)': '(缺失)',
  'Show Older >': '显示更早的 >',
  'Tag Name:': '标签名称：',
  'Namespace:': '命名空间：',
  'Tag Group:': '标签组：',
  'Created:': '创建时间：',
  'revision requested': '需要修改',
  'Updated:': '更新时间：',
  'First Tag:': '首次标记：',
  'Tagged On:': '标记次数：',
  'Sources:': '来源：',
  'Pending Moderator Approval': '待 MOD 审核',
  REJECTED: '已拒绝',
  APPROVED: '已批准',
  ' by ': ' 由 ',
  Comments: '评论',
  'There are currently no comments for this request': '当前没有评论',
  'If you have any (useful) information about this tag, you can submit it here.': '如果您有任何 (有用的) 关于此标签的信息，可以在此提交。',
  'Submit Comment': '提交评论',
  'Back to list': '返回列表',
  '(flagged for revision)': '(标记为需要修改)'
}, [[/^Tag Request #(\d+)$/, '标签申请 #$1'], [/ \(exists in $/, ' (已存在于 '], [/^(\d+) public galler(y|ies)$/, '$1 个公开图库'], [/^ on (\d\d\d\d-\d\d-\d\d \d\d:\d\d)$/, ' 于 $1'], [/^(\d\d\d\d-\d\d-\d\d \d\d:\d\d) by $/, '$1 由 ']]);
;// ./src/services/ui-translation/data/toplist.ts

merge(/^\/(toplist|home)\.php/, undefined, {
  'Galleries All-Time': '图库总排行',
  'Galleries Past Year': '图库年排行',
  'Galleries Past Month': '图库月排行',
  'Galleries Yesterday': '图库日排行',
  'Uploader All-Time': '上传总排行',
  'Uploader Past Year': '上传年排行',
  'Uploader Past Month': '上传月排行',
  'Uploader Yesterday': '上传日排行',
  'Tagging All-Time': '标签总排行',
  'Tagging Past Year': '标签年排行',
  'Tagging Past Month': '标签月排行',
  'Tagging Yesterday': '标签日排行',
  'Hentai@Home All-Time': 'Hentai@Home 总排行',
  'Hentai@Home Past Year': 'Hentai@Home 年排行',
  'Hentai@Home Past Month': 'Hentai@Home 月排行',
  'Hentai@Home Yesterday': 'Hentai@Home 日排行',
  'EHTracker All-Time': '做种总排行',
  'EHTracker Past Year': '做种年排行',
  'EHTracker Past Month': '做种月排行',
  'EHTracker Yesterday': '做种日排行',
  'Cleanup All-Time': '清理总排行',
  'Cleanup Past Year': '清理年排行',
  'Cleanup Past Month': '清理月排行',
  'Cleanup Yesterday': '清理日排行',
  'Rating & Reviewing All-Time': '评分 & 评论总排行',
  'Rating & Reviewing Past Year': '评分 & 评论年排行',
  'Rating & Reviewing Past Month': '评分 & 评论月排行',
  'Rating & Reviewing Yesterday': '评分 & 评论日排行'
});
merge(/^\/toplist\.php/, undefined, {
  'EHG Toplists': 'EHG 排行榜',
  'Gallery Toplists': '图库排行',
  'Uploader Toplists': '上传排行',
  'Tagging Toplists': '标签排行',
  'Hentai@Home Toplists': 'Hentai@Home 排行',
  'EHTracker Toplists': '做种排行',
  'Cleanup Toplists': '清理排行',
  'Rating & Reviewing Toplists': '评分 & 评论排行',
  'Error: Non-existing toplist.': '错误：排行榜不存在。'
});
merge(/^\/toplist\.php\?tl=1/, undefined, {
  Name: '标题'
});
merge(/^\/toplist\.php\?tl=[2-7]/, undefined, {
  Rank: '排名',
  Score: '得分',
  Name: '用户名'
});
;// ./src/services/ui-translation/data/torrents.ts

merge(/^\/(gallery)?torrents\.php/, undefined, {
  'Status: ': '状态：',
  All: '全部',
  Seeded: '有种',
  Unseeded: '无种',
  ' \xA0 \xA0 \xA0 \xA0 Show: ': ' |  显示：',
  'All Torrents': '全部种子',
  'Only My Torrents': '我的种子',
  'Search Torrents': '搜索种子',
  Added: '添加于',
  'Torrent Name': '种子名',
  Gallery: '图库 ID',
  Size: '文件大小',
  Seeds: '做种',
  Peers: '下载',
  DLs: '完成',
  'You cannot add torrents directly to this page. To upload torrents to this system, visit the torrent screen for a gallery.': '您无法直接将种子文件添加到此页面。要将种子文件上传到此系统，请在相应图库的种子页面上传。',
  'Posted:': '发布于：',
  'Size:': '文件大小：',
  'Seeds:': '做种：',
  'Peers:': '下载：',
  'Downloads:': '完成：',
  'Uploader:': '上传者：',
  Information: '信息',
  Modify: '修改',
  Expunged: '已删除',
  Comments: '备注',
  'There are no torrents for this gallery.': '当前图库还没有种子',
  'There are no up-to-date torrents for this gallery.': '当前图库没有最新的种子',
  'Outdated Torrents:': '过时种子：',
  'New Torrents:': '新种子：',
  '\n\t\tYou can add a torrent for this gallery by uploading it here. The maximum torrent file size is 10 MB.': '您可以在这里上传来为此图库添加种子。最大 Torrent 文件大小为 10 MB。',
  '\n\t\tIf you are creating the torrent yourself, set this as announce tracker: ': '如果您自己创建 Torrent，请将此地址设置为 Announce Tracker：',
  '\n\t\tNote that you have to download the finished torrent from this site after uploading for stats to be recorded.\n\t': '请注意，您必须在上传后从此站点下载已完成的种子，以便记录统计信息。',
  'Upload Torrent': '上传种子',
  'Close Window': '关闭窗口',
  'Delete Torrent': '删除种子',
  Posted: '发布于',
  DLers: '下载',
  Completes: '完成',
  'Personalized Torrent': '私有种子',
  '(Just For You - this makes sure to record your stats)\n': '(只属于您 - 确保记录您的下载统计信息)',
  'Redistributable Torrent': '可再分发种子',
  '(use if you want a file you can post or give to others)': '(如果您想再发布或提供给其他人使用)',
  'No comments were given for this torrent.': '此种子没有评论',
  'Vote to Expunge': '投票删除',
  'Back to Index': '返回',
  'Your torrent was successfully uploaded and processed.': '您的种子已上传并处理完毕。',
  'Note that you should now download and use the personalized torrent from this site to seed the torrent. If you do not use this torrent for seeding, it will not count against your uploading and seeding statistics.': '请注意：您现在需要下载并使用本页面提供的私有种子进行做种。若未使用此种子做种，您的上传与做种数据将不会计入统计。',
  'Change display name or comment for this torrent': '修改种子显示名称或备注',
  'Add more torrents or list torrents for this gallery.': '列出当前图库的种子或为当前图库上传更多种子',
  'The personalized torrent file will start downloading momentarily.': '私有种子即将开始下载',
  'Please wait...': '请稍侯...'
}, [[/^Showing ([\d,]+)-([\d,]+) of ([\d,]+)$/, '$1 - $2，共 $3 个结果'], [/^([\d,]+) torrents? (was|were) found for this gallery.$/, '找到了 $1 个种子。']]);
;// ./src/services/ui-translation/data/uconfig.ts

function uconfig_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function uconfig_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? uconfig_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : uconfig_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


merge(/^\/uconfig\.php/, undefined, uconfig_objectSpread(uconfig_objectSpread({
  'Selected Profile:': '当前配置：',
  'Delete Profile': '删除配置',
  'Set as Default': '设为默认',
  'Image Load Settings': '图像加载设置',
  'Do you wish to load images through the Hentai@Home Network, if available?': '如果可用，是否希望通过 Hentai@Home 网络加载图像？',
  ' Any client (Recommended)': ' 任意客户端 (推荐)',
  ' Default port clients only (Can be slower. Enable if behind firewall/proxy that blocks outgoing non-standard ports.)': ' 仅使用默认端口的客户端 (可能稍慢，当防火墙或代理阻止非标准端口的流量时启用此项)',
  ' No [Modern/HTTPS] (Donator only. You will not be able to browse as many pages. Recommended only if having severe problems.)': ' 否 [现代/HTTPS] (仅限捐赠者，配额消耗会加快，只有出现严重的问题时才启用)',
  ' No [Legacy/HTTP] (Donator only. May not work by default in modern browsers. Recommended for legacy/outdated browsers only.)': ' 否 [传统/HTTP] (仅限捐赠者，可能无法在现代浏览器中使用，只推荐在过时的浏览器中启用)',
  'You appear to be browsing the site from ': '看起来您正在 ',
  ' or use a VPN or proxy in this country, which means the site will try to load images from H@H clients in this general geographic region. If this is incorrect, or if you want to use a different region for any reason (like if you are using a split tunneling VPN), you can select a different country below.': ' 浏览此网页，或者使用了此处的 VPN/代理，这意味着网站会尝试通过此区域的 H@H 客户端加载图像。如果此结果不正确，或者您希望通过其他地区的 H@H 客户端加载图像 (例如您正在使用分割隧道 VPN)，可以在下方选择一个不同的区域。',
  '\n\t\tBrowsing Country: ': '浏览区域：',
  'Auto-Detect': '自动检测'
}, BROWSING_COUNTRY), {}, {
  'Image Size Settings': '图像大小设置',
  'Images are normally resampled to 1280 pixels (desktop) or 800 pixels (mobile) horizontal resolution for online viewing. You can select one of the following alternative resolutions. Note that legacy images will have horizontal resolutions of 780x / 1280x / 1600x / 2400x instead. (Resolutions above 1280x are restricted to accounts with any hath perk, a bronze star, or an UID below 3,000,000.)': '通常情况下，图像会被重采样到 1280 像素 (桌面端) 或 800 像素 (移动端) 宽度用于在线浏览，您也可以手动指定重采样分辨率。注意，旧图库的水平分辨率为 780x / 1280x / 1600x / 2400x。 (高于 1280 像素只提供给解锁过任意 Hath Perk、铜星或 UID 小于 3,000,000 的用户)',
  'Images are normally resampled to 1280 pixels (desktop) or 800 pixels (mobile) horizontal resolution for online viewing. You can select one of the following alternative resolutions. Note that legacy images will have horizontal resolutions of 780x / 1280x / 1600x / 2400x instead.': '通常情况下，图像会被重采样到 1280 像素 (桌面端) 或 800 像素 (移动端) 宽度用于在线浏览，您也可以手动指定重采样分辨率。注意，旧图库的水平分辨率为 780x / 1280x / 1600x / 2400x。',
  ' Auto': ' 自动',
  'Use original images instead of the resampled versions? Resampled images will still be used if you select a horizontal resolution different than "Auto" above and the image in question is wider, or if the original image is larger than 10 MiB (or 4 MiB for galleries older than one year).': '在阅读时优先加载原图而非重采样版本？当选择了“自动”以外的分辨率且原图宽度大于设定值，或原图大于 10 MiB (一年前发布的图库 4 MiB) 时，仍会加载重采样版本。',
  ' Prefer resampled images': ' 优先加载重采样版本',
  ' Prefer original images (requires the Source Nexus perk or a silver star)': ' 优先加载原图 (需要 Hath Perk:「原始之力」或银星)',
  ' Prefer original images': ' 优先加载原图',
  'While the site will automatically scale down images to fit your screen width, you can also manually restrict the maximum display size of an image. Like the automatic scaling, this does not resample the image, as the resizing is done browser-side. (0 = no limit)': '虽然图像会自动根据窗口缩小，您也可以手动指定最大显示大小。图像仅在浏览器端缩放，并没有被重新采样。(0 为不限制)',
  'Horizontal:': '宽/横向',
  'Vertical:': '高/纵向',
  ' pixels': ' px',
  'Gallery Name Display': '图库显示名称',
  'Many galleries have both an English/Romanized title and a title in Japanese script. Which gallery name would you like as default?': '许多图库都同时拥有英文/罗马音标题和日文标题，您希望默认显示哪一个？',
  ' Default Title': ' 默认标题 (英文/罗马音)',
  ' Japanese Title (if available)': ' 日文标题 (如果有)',
  'Archiver Settings': '归档设置',
  'The default behavior for the Archiver is to confirm the cost and selection for original or resampled archive, then present a link that can be clicked or copied elsewhere. You can change this behavior here.': '默认归档下载方式为手动选择原始或重采样画质，然后手动点击或复制下载链接。您可以在这里修改归档下载方式。',
  ' Manual Select, Manual Start (Default)': ' 手动选择，手动下载 (默认)',
  ' Manual Select, Auto Start': ' 手动选择，自动下载',
  ' Auto Select Original, Manual Start': ' 自动选择原始画质，手动下载',
  ' Auto Select Original, Auto Start': ' 自动选择原始画质，自动下载',
  ' Auto Select Resample, Manual Start': ' 自动选择重采样画质，手动下载',
  ' Auto Select Resample, Auto Start': ' 自动选择重采样画质，自动下载',
  'Front Page / Search Settings': '首页 / 搜索设置',
  'What categories would you like to show by default on the front page and in searches?': '您希望首页和搜索页面默认显示哪些类别？',
  'Which display mode would you like to use on the front and search pages?': '您希望首页和搜索页面使用哪种显示模式？',
  ' Minimal': ' 最小化',
  ' Minimal+': ' 最小化 + 关注标签',
  ' Compact': ' 紧凑 + 标签',
  ' Extended': ' 扩展',
  ' Thumbnail': ' 缩略图',
  'Which display style would you like for the search range indicator?': '您希望搜索范围指示器采用哪种显示样式？',
  ' Normal': ' 普通',
  ' Disabled': ' 禁用',
  'Optional UI Elements': '可选 UI 元素',
  'Some historic UI elements are now disabled by default. You can enable those here.': '一些历史 UI 元素现在默认禁用，您可以在这里重新启用它们。',
  ' Enable thumbnail selector on gallery screen': ' 在图库详情页启用缩略图选择器',
  'Here you can choose and rename your favorite categories.': '您可以在这里重命名您的收藏夹。',
  'Default sort order for galleries on your favorites page:': '收藏页面的默认排序方式？',
  ' By last gallery update time': ' 以图库最近更新时间排序',
  ' By favorited time': ' 以收藏时间排序',
  'Search Result Count': '搜索结果数',
  'How many results would you like per page for the index/search page and torrent search pages? (Hath Perk: Paging Enlargement Required)': '索引和搜索页面每页显示多少条数据？ (需要 Hath Perk:「页面扩大」)',
  ' 25 results': ' 25 个',
  ' 50 results': ' 50 个',
  ' 100 results': ' 100 个',
  'Thumbnail Settings': '缩略图设置',
  'How would you like the mouse-over thumbnails on the front page to load when using Minimal or Compact display mode?': '在最小化和紧凑列表模式下，您希望鼠标悬停缩略图何时加载？',
  ' On mouse-over (pages load faster, but there may be a slight delay before a thumb appears)': ' 鼠标悬停时 (页面加载快，缩略图加载有延迟)',
  ' On page load (pages take longer to load, but there is no delay for loading a thumb after the page has loaded)': ' 页面加载时 (页面加载时间更长，但是显示的时候无需等待)',
  'You can set a default thumbnail configuration for all galleries you visit.': '图库详情页缩略图设置。',
  'Size: ': '大小：',
  ' Small': ' 小图',
  'Rows:': '行数：',
  'Cover Scaling': '封面缩放',
  '%': ' %',
  'The cover size in gallery list views can be scaled to between 75% and 150% when using the Thumbnail or Extended display modes.': '在缩略图和扩展列表模式下，图库封面大小可以缩放为 75% 到 150% 之间的自定义值。',
  Ratings: '评分',
  'By default, galleries that you have rated will appear with red stars for ratings of 2 stars and below, green for ratings between 2.5 and 4 stars, and blue for ratings of 4.5 or 5 stars. You can customize this by entering your desired color combination below.': '默认情况下，您评为 2 星及以下的图库会显示为红星，2.5 ~ 4 星显示为绿星，4.5 ~ 5 星显示为蓝星。您可以将其设定为其他颜色组合。',
  'Each letter represents one star. The default RRGGB means R(ed) for the first and second star, G(reen) for the third and fourth, and B(lue) for the fifth. You can also use (Y)ellow for the normal stars. Any five-letter R/G/B/Y combo works.': '每个字母代表一颗星, 默认的 RRGGB 表示第一第二颗星显示为红色 R(ed)，第三第四颗星显示为绿色 G(reen)，第五颗星显示为蓝色 B(lue)。您也可以使用黄色 (Y)ellow。R/G/B/Y 中任何的五个字母组合都是有效的。',
  'Tag Watching Threshold': '标签订阅阈值',
  'Recently uploaded galleries will be included on the watched screen if it has at least one watched tag with positive weight, and the sum of weights on its watched tags add up to this value or higher. This threshold can be set between 0 and 9999.': '您可以将标签加入「我的标签」并设置一个正权重来关注它们。如果一个最近上传的图库所有已关注标签的权重之和大于等于设定值，则它会出现在「订阅」里。此值可以设定为 0 ~ 9999。',
  'Tag Filtering Threshold': '标签过滤阈值',
  'You can soft filter tags by adding them to ': '您可以将标签加入「',
  ' with a negative weight. If a gallery has tags that add up to weight below this value, it is filtered from view. This threshold can be set between 0 and -9999.': '」并设置一个负权重来软过滤它们。如果一个图库所有标签的权重之和小于设定值，则它会被过滤。此值可以设定为 0 ~ -9999。',
  'Show Filtered Removal Count': '显示过滤数量',
  'Show the "Your custom filters removed XX galleries from this page" readout?': '显示“您的过滤器已从此页面移除 XX 个结果”的消息？',
  ' Yes': ' 是',
  ' No': ' 否',
  'Excluded Languages': '排除语言',
  'If you wish to hide galleries in certain languages from the gallery list and searches, select them from the list below.': '如果您希望在图库列表和搜索结果中隐藏某些语言的图库，请从下面的列表中选择它们。',
  'Note that matching galleries will never appear regardless of your search query.': '请注意，无论搜索查询如何，匹配的图库都不会出现。',
  Original: '原始',
  Translated: '翻译',
  Rewrite: '改写',
  All: '所有',
  Japanese: '日语',
  English: '英语',
  Chinese: '汉语',
  Dutch: '荷兰语',
  French: '法语',
  German: '德语',
  Hungarian: '匈牙利语',
  Italian: '意大利语',
  Korean: '韩语',
  Polish: '波兰语',
  Portuguese: '葡萄牙语',
  Russian: '俄语',
  Spanish: '西班牙语',
  Thai: '泰语',
  Vietnamese: '越南语',
  'N/A': '无语言',
  Other: '其他',
  'Excluded Uploaders': '排除上传者',
  'If you wish to hide galleries from certain uploaders from the gallery list and searches, add them below. Put one username per line.': '如果您希望在图库列表和搜索结果中隐藏某些上传者上传的图库，请把他们的用户名填写在下方，每行一个。',
  'Note that galleries from these uploaders will never appear regardless of your search query.': '请注意，无论搜索查询如何，这些上传者上传的图库都不会出现。',
  'You are currently using ': '已使用 ',
  ' of ': '/',
  ' exclusion slots.\n': '。',
  'Viewport Override': '移动端虚拟宽度',
  px: ' px',
  'Allows you to override the virtual width of the site for mobile devices. This is normally determined automatically by your device based on its DPI. Sensible values at 100% thumbnail scale are between 640 and 1400.': '允许您覆盖移动设备的虚拟宽度，默认是根据 DPI 自动计算的，100% 缩略图比例下的合理值在 640 到 1400 之间。',
  'Gallery Comments': '图库评论',
  'Sort order for gallery comments:': '评论排序方式：',
  ' Oldest comments first': ' 最早的评论',
  ' Recent comments first': ' 最近的评论',
  ' By highest score': ' 分数最高',
  'Show gallery comment votes:': '显示评论投票数：',
  ' On score hover or click': ' 悬停或点击时',
  ' Always': ' 总是',
  'Gallery Tags': '图库标签',
  'Sort order for gallery tags:': '图库标签排序方式：',
  ' Alphabetical': ' 按字母排序',
  ' By tag power': ' 按标签权重',
  'Gallery Page Thumbnail Labeling': '图库缩略图标签',
  'Show label below gallery thumbnails:\n\t': '在图库详情页缩略图下方显示标签：',
  ' None': ' 无',
  ' Page Number Only': ' 仅页码',
  ' Page Number + Name': ' 页码 + 名称',
  'Multi-Page Viewer': '多页查看器',
  'Always use the Multi-Page Viewer? There will still be a link to manually start it if this is left disabled.': '总是使用多页查看器？禁用此选项时，仍可以手动启动多页查看器。',
  ' Nope': ' 否',
  ' Yup': ' 是',
  'Multi-Page Viewer Display Style:': '显示样式：',
  ' Align left; Only scale if image is larger than browser width': ' 左对齐；仅当图像大于浏览器宽度时缩放',
  ' Align center; Only scale if image is larger than browser width': ' 居中对齐；仅当图像大于浏览器宽度时缩放',
  ' Align center; Always scale images to fit browser width': ' 居中对齐；始终缩放图像以适应浏览器宽度',
  'Multi-Page Viewer Thumbnail Pane:': '显示缩略图侧栏：',
  ' Show': ' 显示',
  ' Hide': ' 隐藏',
  Apply: '应用',
  'Settings were updated': '设置更新完毕'
}), [[/ \(Default\)$/, ' (默认)']]);
;// ./src/services/ui-translation/data/upload.ts

const data = {
  'Gallery List': '图库列表',
  'Manage Folders': '管理文件夹',
  'Create Gallery': '创建图库',
  'Create New Gallery': '创建新图库',
  'Unpublished Galleries': '未发布图库',
  'Published Galleries': '已发布图库',
  'Empty Galleries': '空图库',
  'Gallery Name ': '图库名称',
  'Date Added ': '添加时间 ',
  Files: '文件数',
  'Public Category': '发布类别',
  'Available Actions': '操作',
  Expunged: '已删除',
  View: '查看',
  Manage: '管理',
  Publish: '发布',
  Disown: '脱离关系',
  'Manage Replacement': '管理新版本',
  'Collapse Open Folders': '折叠文件夹',
  '+ All': '+ 全选',
  '- All': '- 全不选',
  'Loading folder, please wait...': '正在加载文件夹，请稍候...',
  'Set public category for selected galleries: ': '设置选中的发布分类: ',
  'Move selected galleries to folder: ': '移动到文件夹: ',
  Go: '执行',
  'Folder Name': '文件夹名称',
  '(No folders have been added yet.)': '(尚未创建文件夹)',
  'Display Order': '显示顺序',
  'New folder name': '新文件夹名称',
  'Create Folder': '创建文件夹',
  'Save and Auto-Reorder': '保存并自动排序',
  'Save Changes': '保存更改',
  'Saving...': '保存中...',
  'New Gallery': '新图库',
  'Main Gallery Title': '主标题',
  'The main english or romanized title for this gallery.': '图库的主标题 (英文或罗马音)。',
  'Main gallery title (English Script)': '主标题 (英语)',
  'Japanese Script Title': '日文标题',
  'The original title in Japanese script, if applicable.': '原始的日文标题 (如果有)。',
  'Original gallery title (Japanese Script) (Optional)': '原始标题 (日语) (可选)',
  'Gallery Category': '图库分类',
  'The publicly listed category for this gallery.': '图库在公开列表中所属的分类。',
  '(Private / Unlisted)': '(私有 / 不公开)',
  'Gallery Language': '图库语言',
  'The primary language for this gallery. Can only be changed here for new unpublished galleries; set with tags for published/updated galleries.': '图库的主要语言。仅新建立且未发布的图库可更改此选项，已发布/已更新的图库需要通过标签系统更改。',
  Common: '常用',
  'Japanese / No Text': '日语 / 无字',
  Chinese: '汉语',
  English: '英语',
  French: '法语',
  Korean: '韩语',
  Portuguese: '葡萄牙语',
  Russian: '俄语',
  Spanish: '西班牙语',
  Textless: '无字',
  Speechless: '无言',
  'Text Cleaned': '文字清除',
  Others: '其他',
  Albanian: '阿尔巴尼亚语',
  Arabic: '阿拉伯语',
  Burmese: '缅甸语',
  Bulgarian: '保加利亚语',
  Catalan: '加泰罗尼亚语',
  Cebuano: '宿务语',
  Croatian: '克罗地亚语',
  Czech: '捷克语',
  Danish: '丹麦语',
  Dutch: '荷兰语',
  Esperanto: '世界语',
  Finnish: '芬兰语',
  German: '德语',
  Greek: '希腊语',
  Hindi: '印地语',
  Hungarian: '匈牙利语',
  Indonesian: '印尼语',
  Italian: '意大利语',
  Javanese: '爪哇语',
  Latin: '拉丁语',
  Norwegian: '挪威语',
  Persian: '波斯语',
  Polish: '波兰语',
  Romanian: '罗马尼亚语',
  Serbian: '塞尔维亚语',
  Slovak: '斯洛伐克语',
  Swedish: '瑞典语',
  Tagalog: '他加禄语',
  Thai: '泰国语',
  Turkish: '土耳其语',
  Ukrainian: '乌克兰语',
  Vietnamese: '越南语',
  'Official / Textless': '官方 / 无字',
  'This was officially published in this language, or the gallery has no text.': '官方发布于此语言，或者图库无字',
  Translated: '翻译',
  'This is a fan translation based on the original text.': '基于原始文字翻译',
  'By a proficient human translator (not machine translated)': '由熟练的译者翻译 (非机器翻译)',
  Rewrite: '改写',
  'This is a fan rewrite with new made-up text.': '使用新的文字改写',
  'Gallery Folder': '图库文件夹',
  'The folder this gallery will be displayed under in the uploader gallery list. This is only used to help you organize your gallery uploads.': '图库文件夹仅在上传者的图库列表中显示，仅用于帮助整理上传的图库。',
  Unsorted: '未分类',
  'or new folder: ': '或新建文件夹：',
  'Uploader Comment': '上传者评论',
  'Any comments or additional relevant information for this gallery. This will always show up as the topmost comment, and cannot be voted down.': '关于此图库的任何评论或其他相关信息。将始终显示在评论的最顶部，并且不能投票。',
  'You can write an optional uploader comment here.': '您可以在此处添加上传者评论。(可选)',
  'Date Added:': '添加时间：',
  'Not created yet': '尚未创建',
  'Date Posted:': '发布时间：',
  'Not published yet': '尚未发布',
  'Uploaded Files:': '上传文件数：',
  'Total Filesize:': '总文件大小：',
  '(empty)': '(空白)',
  'Parent Gallery:': '父级图库：',
  'Child Gallery:': '子图库：',
  'Expunged:': '删除：',
  'Visible:': '可见：',
  'No (Unpublished)': '否 (未发布)',
  'Show Public Gallery': '查看图库',
  'Show Gallery Stats': '查看统计',
  'Delete Gallery': '删除图库',
  'Disown Gallery': '脱离与图库的关系',
  'I have read and agree with the ': '我已阅读并同意',
  'Publish Gallery': '发布图库',
  'Upload Files': '上传文件',
  'Accepted Images: JPG and WebP < 20 MB, PNG < 50 MB, GIF < 10 MB. Accepted Archive Formats: ZIP. Max Resolution: 20000 x 20000.': '图像：JPG 和 WebP < 20 MB, PNG < 50 MB, GIF < 10 MB；归档：ZIP。最大分辨率：20000 x 20000。',
  'Max 2,000 files and 10 GB per gallery. Do not upload more than 500MB at a time, less if you have a slow connection.': '每个图库最多包含 2000 张图像或 10 GB。一次上传的大小不应超过 500 MB，如果连接速度较慢，可以尝试以更小归档上传。',
  'Start Upload': '开始上传',
  'Select one or more image or archive files and click Start Upload to add files to this gallery.': '选择一个或多个图像或归档文件，然后点击“开始上传”，以添加文件到此图库。',
  'Uploading...': '上传中...',
  'Starting upload...': '开始上传...',
  'Finished processing ': '已处理 ',
  ' of ': ' / ',
  'Processing...': '正在处理...',
  'Processing ': '正在处理 ',
  'Finishing backend sync...': '正在完成后端同步...',
  '\n\t\tNo files have been added yet\n\t\t': '尚未添加任何文件',
  'Added ': '已添加 ',
  'Revert Changes': '撤销更改',
  'Apply Changes': '应用更改',
  'Automatic Resorting': '自动排序',
  'Select a sorting method...': '选择排序方式...',
  'Remove Exact Duplicates': '删除完全重复的图像',
  'Natural Sort': '自然排序',
  'Lexical Sort': '字典排序',
  'Time Added (Recent First), then Natural Sort': '按添加时间 (最近的在前)，然后按自然排序',
  'Time Added (Recent Last), then Natural Sort': '按添加时间 (最近的在后)，然后按自然排序',
  'Time Added (Recent First), then Lexical Sort': '按添加时间 (最近的在前)，然后按字典排序',
  'Time Added (Recent Last), then Lexical Sort': '按添加时间 (最近的在后)，然后按字典排序',
  'Time Added (Recent First), then Current Order': '按添加时间 (最近的在前)，然后按当前顺序',
  'Time Added (Recent Last), then Current Order': '按添加时间 (最近的在后)，然后按当前顺序',
  'Perform Auto-Sort': '执行自动排序',
  'Natural Sort will sort filenames with numbers in natural ascending order (8, 9, 10, 11, 12) regardless of padding. This is the recommended auto-sorting method.': '自然排序将按数字递增顺序 (8, 9, 10, 11, 12) 排序此图库中的图像。这是推荐的自动排序方式。',
  'Lexical Sort will sort filenames with numbers in strict lexicographic order (1, 10, 11, 12, 2). Unless numbers are zero-padded, this can lead to unexpected results.': '字典排序将按字典顺序 (1, 10, 11, 12, 2) 排序此图库中的图像。若数字不包含前导 0，使用此方式会导致错误的结果。',
  'Time Added Sort will sort the pages based on the creation time of the gallery to which they were first added. For example, sorting by Time Added (Recent First) will sort any files that were added to the current gallery first, followed by the files first added to the previous version of the gallery, and so on.': '按添加时间排序将按照图像第一次添加到图库的时间进行排序。例如，按添加时间 (最近的在前) 排序将按照图像第一次添加到当前图库的时间进行排序，然后按照图像第一次添加到上一个版本图库的时间进行排序，以此类推。',
  'Note that you can always delete the updated gallery and start over if you make a mistake.': '请注意，如果您犯了错误，可以随时删除更新后的图库并重新开始。',
  'Please confirm that you wish to publish the gallery:': '请确认您希望发布图库：',
  'Doing so will lock it for new file additions and modifications. If you wish to add or replace files in this gallery later, a copy will be created for this purpose. Published galleries can no longer be deleted, but you can disown them after a week.': '发布后将锁定图库，不再允许添加或修改图像。如果您希望在发布后继续添加或替换图像，则需要创建一个图库的新副本。发布后的图库无法删除，但您可以在一周后与其脱离关系。',
  'The gallery was successfully published. It will take a few minutes before it becomes publicly listed.': '图库已成功发布，将在几分钟后被列入公共图库列表。',
  'You will be returned to the Management Interface momentarily.': '您将在几秒后返回管理界面。',
  '(Click here to continue)': '(点此继续)',
  'Please wait...': '请稍候...',
  'This gallery has been published, and images can therefore no longer be added, deleted or rearranged.': '此图库已经发布，因此不能再添加、删除或重新排序图像。',
  'You can create an editable copy of this gallery by clicking the button below. This new version will be linked in': '您可以通过点击下方的按钮来创建一个此图库的可编辑副本。新的副本',
  'as a child gallery of the currently published one, and will also link back to the old gallery as its parent.\n': '将作为子图库关联到当前图库，同时新图库也会将当前图库关联为父图库。',
  'The old gallery will remain until the new one is published. Updates that remove valid content will be reverted.': '旧图库将保留到新图库发布。恶意删除有效内容的更改会被还原。',
  'Create New Version': '创建新版本',
  'A new version of the gallery was successfully created. The previous version will remain publicly listed while you make updates to this version.': '新版本的图库已成功创建。旧版本将保留到新版本发布。',
  'To cancel and keep the previous version, simply delete this gallery.': '要取消并保留旧版本，只需删除此图库。',
  'You cannot unlock galleries this old. Please make a new one, then request to have this one expunged.': '您无法解锁如此老旧的图库。请创建一个新图库，然后请求删除此图库。',
  'Please confirm that you wish to delete this unpublished gallery.': '请确认您希望删除此未发布的图库。',
  'This action cannot be undone.': '此操作无法撤销。',
  'The gallery was successfully deleted.': '图库已成功删除。',
  'Please confirm that you wish to disown this gallery. You will no longer be publicly listed as the uploader unless the gallery was published in the last week, and you will not be able to make further changes to it.': '请确认您希望与此图库脱离关系。在一周后，您将不再被公开列为上传者。并且您将不能再对其进行修改。',
  'Gallery not found.': '图库未找到。',
  'Rate limitation for new posters is in effect. You have to wait a while before you can post more galleries.': '针对新上传者的图库发布速率限制已生效，您必须等待一段时间才能继续发布图库。',
  'You have exceeded your rate limit for posting galleries, and have to wait a while before you can post any more.': '您已超过了发布图库的速率限制，需要等待一段时间才能继续发布。',
  'This action cannot be done right now since another operation has locked this gallery. Please wait for this operation to finish.': '由于另一个操作已锁定此图库，此操作暂时无法执行。请等待操作完成。',
  'You cannot publish an empty gallery.': '您不能发布一个空图库',
  'You must agree with the Terms of Service to continue.': '您必须同意服务条款才能继续',
  'You must give the gallery a title to continue.': '您必须给图库命名才能继续',
  'Apply or revert the active reorder before continuing.': '您必须应用或还原当前的排序才能继续',
  Continue: '继续',
  'Some errors were encountered while adding files to the gallery.': '添加文件到图库时发生了一些错误。',
  'Please review the error log above.': '请查看上方的错误日志。'
};
const regexData = [[/^Uploading: (\d+)%$/, '上传中：$1%'], [/^ images? so far\.$/, ' 张图像。'], [/^ images? so far$/, ' 张图像'], [/^ new images? to the gallery. /, ' 张新图像。'], [/^ uploaded files?, added $/, ' 个文件，已添加 '], [/You have added a total of $/, '您目前总共添加了 '], [/^Category of (.*?) can no longer be changed.$/, '无法更改 $1 的分类。'], [/^The file (.*?) is corrupt, incomplete, too large, or not an accepted image file.$/, '文件 $1 损坏 / 不完整 / 过大或是不支持的图像文件。'], [/^Failed to add the file (.*?) to the gallery. This probably means an identical file with the same filename already exists.$/, '无法将文件 $1 添加到图库。这可能意味着具有相同文件名的相同文件已经存在。'], [/^The file (.*?) was generated by this system and has been replaced with the original copy.$/, '文件 $1 由本系统生成，已替换为原始副本。'], [/^The file (.*?) is too low resolution.$/, '文件 $1 分辨率过低。']];
merge(/^\/upld\//, undefined, data, regexData);
merge(/^\//, 'upld.e-hentai.org', data, regexData);
merge(/^\//, 'upload.e-hentai.org', data, regexData);
;// ./src/services/ui-translation/data/watched.ts

merge(/^\/watched/, undefined, {
  'Watched Tag Galleries': '关注的标签',
  'You do not have any watched tags. You can change your watched tags from ': '您还没有关注任何标签。可在此处修改关注的标签：'
}, [[/^Showing results for ([\d,]+) watched tags?$/, '关注的 $1 个标签的结果']]);
;// ./src/services/ui-translation/data/thirdparty/e-hentai-downloader.ts

// E-Hentai Downloader
merge(/^\/g\//, undefined, {
  'E-Hentai Downloader ': 'E-Hentai 下载器 ',
  'Image Limits: ': '图像配额：',
  '! Account Suspended !': '! 账户已被封禁 !',
  'Download Archive': '下载档案 ',
  ' Number Images': ' 图像编号',
  'Pages Range ': '页面范围 ',
  'File Name ': '文件名 ',
  'Path Name ': '文件夹名 ',
  Basic: '基本',
  Advanced: '高级',
  Feedback: '反馈',
  'Download ': '同时下载 ',
  ' images at the same time (≤ 5 is recommended)': ' 张图像 (建议 ≤5 张)',
  'Abort downloading current image after ': '无响应 ',
  ' second(s) (0 is never abort)': ' 秒后终止当前图像下载 (0 为永不终止)',
  ' Abort downloading current image if speed is less than ': ' 当速度低于 ',
  ' KB/s in ': ' KB/s，持续 ',
  ' second(s)': ' 秒后终止当前图像下载',
  'Skip current image after retried ': '重试 ',
  ' time(s)': ' 次后跳过当前图像',
  'Delay ': '延迟 ',
  ' second(s) before requesting next image': ' 秒后请求下一张图像',
  ' Number images (001：01.jpg, 002：01_theme.jpg, 003：02.jpg...) (Separator ': ' 使用数字编号图像 (如 001：01.jpg, 002：01_theme.jpg, 003：02.jpg...) (分隔符 ',
  ' Number images with original page number if pages range is set': ' 如果设置了页面范围，则使用原始页码对图像进行编号',
  ' Retry automatically when images download failed': ' 图像下载失败后自动重试',
  ' Get downloaded images automatically when canceled downloading': ' 取消下载时自动获取已下载完成的图像',
  'Set folder name as ': '将文件夹名称设置为 ',
  ' (if you don\'t want to create folder, use "': ' (如果不想创建文件夹请使用 "',
  'Set Zip file name as ': '将 Zip 文件名设置为 ',
  ' Show inputs to recheck file name and folder name before downloading': ' 显示文件名和文件夹名的输入框以供确认',
  ' Never show notification if torrents are available': ' 不显示有种子可用的提示',
  // Never: '从不', // 与页面中收藏 Never 从未 冲突。有好的冲突解决的方案时再修改。
  'When current tab is not focused': '当前标签页失去焦点时',
  Always: '总是',
  ' show download progress in title': ' 在标题栏中显示下载进度',
  ' Disable requesting and showing image limits': ' 不显示图像配额',
  ' Disable pre-calculating image limits cost': ' 不显示预计成本',
  ' Pin download actions box at the top of the page': ' 将下载操作框固定在页面顶部',
  '\t\t\t\t\t\t\t* Available templates: \t\t\t\t\t\t\t': ' * 可用模板： ',
  ' Gallery GID | \t\t\t\t\t\t\t': ' 图库 GID | ',
  ' Gallery token | \t\t\t\t\t\t\t': ' 图库 token | ',
  ' Gallery title': '图库标题',
  ' Gallery sub-title': '图库副标题',
  ' Gallery category': '图库分类',
  ' Gallery uploader': '图库上传者',
  'Set compression level as ': '压缩级别 ',
  ' (0 ~ 9, 0 is only store) ': ' (0 ~ 9, 0 为仅存储)',
  ' Stream files and create Zip with file descriptors ': ' 流式传输文件并使用文件描述符创建 Zip ',
  ' Force download resized image (never download original image) ': ' 强制下载重采样图像 (从不下载原图) ',
  ' Never get new image URL when failed to download image ': ' 图像下载失败时，不要获取新的图像地址 ',
  ' Never send "nl" GET parameter when getting new image URL ': ' 获取新图像地址时，不带 "nl" 参数 ',
  ' Never show warning if image limits will probably used out on starting download': ' 开始下载时不显示图像配额可能不足的警告',
  " Never show warning when it's in peak hours now ": ' 在高峰时段下载时不显示警告 ',
  ' Never show warning when downloading a large gallery (>= 300 MB) ': ' 下载大型图库时不显示警告 (≥ 300 MB) ',
  ' Use File System to handle large Zip file': ' 使用文件系统处理大型 Zip 文件，',
  'when gallery is larger than ': '如果图库大于 ',
  ' MB (0 is always)': ' MB (0 为总是使用) ',
  ' Play silent music during the process to avoid downloading freeze ': ' 在下载过程中播放无声音频，避免下载冻结 ',
  'Record and save gallery info as ': '将图库信息记录并保存为 ',
  'File info.txt': '文件 info.txt',
  'Zip comment': '压缩文件注释',
  '...which includes ': '...包括 ',
  'Title & Gallery Link': '标题和图库链接',
  Metadatas: '元数据',
  'Page Links': '页面链接',
  ' Replace forbidden characters with full-width characters instead of dash (-)': ' 使用全角字符替换禁用字符，而不是使用破折号 (-)',
  ' Force drop downloaded images data when pausing download': ' 暂停下载时强制中断并删除未下载完的图像',
  ' Save as CBZ (Comic book archive) file': ' 以 CBZ (漫画归档) 文件格式保存 ',
  ' Pass cookies manually when downloading images ': ' 下载图像时手动传递 cookie ',
  'Download original images from ': '下载原图，通过 ',
  'current origin': '当前站点',
  "\t\t\t\t\t\t\t(1) Higher compression level can get smaller file without lossing any data, but may takes more time. If you have a decent CPU you can set it higher, and if you're using macOS set it to at least 1.\t\t\t\t\t\t": ' (1) 更高的压缩级别可以获得更小的文件，但可能需要更长时间。如果您的 CPU 性能较好，可以将其设置得更高；如果您使用的是 macOS，请至少设置为 1。',
  '\t\t\t\t\t\t\t(2) This may reduce memory usage but some decompress softwares may not support the Zip file. See ': ' (2) 开启后可以减少内存占用，但部分解压软件可能不支持。查看 ',
  ' for more info.\t\t\t\t\t\t': ' 获取更多信息。',
  '\t\t\t\t\t\t\t(3) Enable these option will never let you to load from regular image server (or say force loaded from H@H). This may save your image viewing limits ': ' (3) 开启这些选项可能会阻止您从源图像服务器加载图像 (即强制从 H@H 加载)，可能可以节约您的图像配额 ',
  '(See wiki)': '(请看 wiki)',
  ', but may also cause some download problems, especially if your network cannot connect to specific H@H node.\t\t\t\t\t\t': '，但是可能也会导致一些下载问题，尤其是在您的网络无法连接到特定的 H@H 节点时。',
  '\t\t\t\t\t\t\t(4) If enabled you can save larger Zip files (probably ~1GB).\t\t\t\t\t\t': ' (4) 开启后可以保存更大的 Zip 文件 (约 ~1GB)',
  '\t\t\t\t\t\t\t(5) If enabled the script will play slient music to avoid downloading freeze when page is in background ': ' (5) 开启后脚本会播放无声音频以避免页面在后台时下载被冻结 ',
  '(See issue)': '(请看这里)',
  '. Only needed if you have the problem, because the audio-playing icon maybe annoying.\t\t\t\t\t\t': '。只有当您遇到相关问题时才需开启，因为音乐播放图标可能会很烦人。',
  'Comic book archive': '漫画归档 (CBZ)',
  ' is a file type to archive comic images, you can open it with some comic viewer like CDisplay/CDisplayEX, or just extract it as a Zip file. To keep the order of images, you can also enable numbering images.\t\t\t\t\t\t': ' 是一种归档漫画图像的文件类型，您可以使用 CDisplay/CDisplayEX 等漫画查看器打开它，或者直接将其视为 Zip 文件解压。为了保持图像的顺序，您还可以启用对图像进行编号。',
  "\t\t\t\t\t\t\t(7) If you cannot original images, but you've already logged in and your account is not blocked or used up your limits, it may caused by your cookies is not sent to the server. This feature may helps you to pass your current cookies to the download request, but please enable it ONLY if you cannot download any original images.\t\t\t\t\t\t": ' (7) 如果您无法下载原图，但是您已经登录并且您的账户没有被阻止或用完您的限制，这可能是因为您的 cookie 没有被发送到服务器。此功能可以帮助您将当前的 cookie 传递给下载请求，但只有当您无法下载任何原图时才应该启用它。',
  "\t\t\t\t\t\t\t(8) If you have already logged in, but the script detects that you're not logged in, you can enable this to skip login check. Please note that if you are not logged in actually, the script will not work as expect.\t\t\t\t\t\t": ' (8) 如果您已经登录，但脚本检测到您没有登录，您可以启用此功能以跳过登录检查。请注意，如果您实际没有登录，则脚本不会按预期工作。',
  '\t\t\t\t\t\t\t(9) If you have problem to download on the same site, like account session is misleading, you can force redirect original download link to another domain. Pass cookies manually may be needed.\t\t\t\t\t\t': ' (9) 如果您无法通过当前站点下载原图，例如账户会话异常，您可以强制将原始下载链接重定向到另一个域。可能需要同时开启手动传递 cookie。',
  "Peak Hours: It's in peak hours now, during peak hours, downloading original images of 90 days ago cost GPs": '高峰时段：现在是高峰时段，下载 90 天前的原图需要消耗 GP',
  'Ancient Gallery: Downloading original images of 1 year ago cost GPs': '久远图库：下载 1 年前的原图需要消耗 GP',
  'eg. -10,!8,12,14-20,!15-17,30-40/2,50-60/3,70-': '例如 -10,!8,12,14-20,!15-17,50-60/3,70-',
  'Download ranges of pages, split each range with comma (,)\rRanges prefixed with ! means negative range, pages in these range will be excluded\rExample: \r  -10:   Download from page 1 to 10\r  !8:   Exclude page 8\r  12:   Download page 12\r  14-20:   Download from page 14 to 20\r  15-17:   Exclude page 15 to 17\r  30-40/2:   Download each 2 pages in 30-40 (30, 32, 34, 36, 38, 40)\r  50-60/3:   Download each 3 pages in 50-60 (50, 53, 56, 59)\r  70-:   Download from page 70 to the last page\rPages range follows your order, a negative range can drop previous selected pages, the latter positive range can add it back\rExample: \r  !10-20:   Download every page except page 10 to 20\r  1-10,!1-8/2,!4,5:   Download page 1 to 10 but remove 1, 3, 5, 7 and 4, then add 5 back (2, 5, 6, 8, 9, 10)': '需要下载的页面范围，使用半角逗号 ( , ) 分隔\r在范围前添加半角叹号 ( ! ) 表示排除此范围不下载\r例如：\r  -10:       下载 1-10 页\r  !8:          排除第 8 页\r  12:         下载第 12 页\r  14-20:    下载 14-20 页\r  !15-17:   排除 15-17 页\r  50-60/3: 在 50-60 范围内每隔 3 页下载 (50, 53, 56, 59)\r  70-:        下载 70-最后一页\r页面范围遵循输入的顺序，排除范围可以删除前面选定的页面，后面的范围也可以将其添加回来\r例如：\r  !10-20:               下载除了 10-20 页外的所有页面\r  1-10,!1-8/2,!4,5: 下载 1-10 页，但排除 1, 3, 5, 7 和 4，然后将 5 添加回来 (2, 5, 6, 8, 9, 10)',
  'You can find GID and token at the address bar like this: exhentai.org/g/[GID]/[Token]/': '您可以在地址栏中找到 GID 和 token，如 exhentai.org/g/[GID]/[Token]/',
  'This title is the English title or Latin transliteration, you can find it as the first line of the title.': '此标题是英文标题或拉丁文音译，它是页面中第一行标题。',
  'This title is the original language title, you can find it as the second line of the title.': '此标题是原始标题，它是页面中第二行标题。',
  'This tag means the sort name of the gallery, and its output string is upper.': '此标记代表图库的分类名称，且输出的字符串为大写',
  'You can find it at the left of the gallery page.': '您可以在图库左侧找到它',
  'Pause (Downloading images will keep downloading)': '暂停 (下载中的图像会继续下载)',
  'Pause (Downloading images will be aborted)': '暂停 (下载中的图像会中断下载)',
  Resume: '继续',
  'Not download? Click here to download': '还未下载？点此开始',
  "If an error occured and script doesn't work, click ": '如果出现错误导致脚本无法工作，请点击 ',
  here: '此处',
  ' to force get your downloaded images.': ' 强制获取已下载的图像。',
  'Pages URL is MPV link': '页面 URL 是 MPV 链接',
  'MPV is available, use MPV to fetch all pages.': 'MPV 可用，通过 MPV 获取所有页面。',
  'Fetching Gallery Pages URL From MPV...': '从 MPV 获取图库页面 URL...',
  'Pending...': '等待中...',
  'Downloading...': '下载中...',
  'Succeed!': '成功！',
  'Auto Paused': '自动暂停',
  'Force Paused': '强制暂停',
  'Force Abort': '强制中止',
  'Fetch images failed.': '获取图像失败。',
  'Generating Zip file...': '生成 Zip 文件...',
  'Generating Blob object...': '生成 Blob 对象...',
  'Tags:': '标签：',
  'Uploader Comment:': '上传者评论：',
  'You have exceeded your image viewing limits, or you need GP to download.': '您已超出图像配额，或者需要 GP 才能下载。',
  'Reset Limits': '重置配额',
  'Continue Download': '继续下载',
  'Cancel Download': '取消下载'
}, [[/^Image Limits: (\d+)\/(\d+)$/, '图像配额：$1/$2'], [/^Estimated Costs: (\?\?\?|\d+|\d+ \+ \d+ GP)$/, '预计成本：$1'], [/^...or (\d+) \+ (\d+) GP if you don't have enough viewing limits.\n/, '...或者 $1 + $2 GP (如果您没有足够的图像配额)\n'], [/1 point per 0.1 MB since August 2019, less than 0.1 MB will also be counted.\nDuring peak hours, downloading original images will cost GPs.\nFor gallery uploaded 1 year ago, downloading original images will cost GPs since July 2023.\nThe GP cost is the same as resetting viewing limits.\nEstimated GP cost is a bit more than using offical archive download, in case the sum of each images will be larger than the packed.$/, '自 2019 年 8 月起，每 0.1 MB 消耗一点配额，不足 0.1 MB 也计算在内。\n高峰期下载原图将消耗 GP，自 2023 年 7 月起，下载 1 年前上传的图库\n原图也需要消耗 GP，数量与重置图像限制所需的相同。\nGP 成本预计会比直接使用官方归档下载略高，因为每张图像的体积总和比压缩包大。'], [/^ Force as logged in \(actual login state: (\w+?), uid: (-?\d+)\) $/, ' 强制登录 (实际登录状态: $1，uid: $2) '], [/^Total: (\d+) \| Downloading: (\d+) \| Succeed: (\d+) \| Failed: (\d+)$/, '总计：$1 | 下载中：$2 | 成功：$3 | 失败：$4'], [/^Start downloading at /, '下载开始于 '], [/^Finish downloading at /, '下载完成于 '], [/^Fetching Gallery Pages URL /, '获取图库页面 URL '], [/^Retrying /, '重试中 '], [/^Failed! /, '失败！'], [/^Category: /, '分类：'], [/^Uploader: /, '上传者：'], [/^Rating: /, '评分：']]);
;// ./src/services/ui-translation/data/thirdparty/ex-resurrect.ts

// ExResurrect
merge(/^\/g\//, undefined, {
  'Gallery Unavailable': '图库不可用',
  'Removal:': '移除：',
  'Custom Search': '自定义搜索',
  'Search by Name': '搜索名称',
  'Search by Full Name': '搜索全名',
  'Search by Name (nhentai.net)': '搜索名称 (nhentai.net)',
  'Search by Full Name (nhentai.net)': '搜索全名 (nhentai.net)',
  'Search by Name (hitomi.la)': '搜索名称 (hitomi.la)',
  'Search by Name (chaika)': '搜索名称 (chaika)',
  'Search by Full Name (chaika)': '搜索全名 (chaika)',
  'Search by URL (chaika)': '搜索 URL (chaika)',
  'Search by JP Title (DLsite)': '搜索日文标题 (DLsite)',
  'Possible Torrents:': '可能的种子：',
  "If the torrent link doesn't work, try the magnet link.": '如果种子链接无法使用，请尝试磁力链接。',
  'Magnet Link': '磁力链接'
}, [[/^Added (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})$/, '添加于 $1']]);
;// ./src/services/ui-translation/data.ts































;// ./src/services/ui-translation/index.ts







function hostMatches(hostname, hosts) {
  if (hosts == null) return true;
  for (const candidate of hosts) {
    if (hostname === candidate) return true;
    if (includes_default()(candidate).call(candidate, '*')) {
      const reg = new RegExp("^".concat(candidate.replace(/\\/g, '\\\\').replace(/\./g, '\\.').replace(/\*/g, '.*'), "$"));
      if (reg.test(hostname)) return true;
    }
  }
  return false;
}
let UiTranslation = class UiTranslation {
  constructor(logger) {
    this.logger = logger;
  }
  get() {
    let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location;
    const results = {
      plainReplacements: new Map(),
      regexReplacements: new Map()
    };
    if (!url || !isValidHost(url.hostname)) {
      return results;
    }
    const path = url.pathname + url.search;
    this.logger.log('获取 UI 翻译：', path);
    dataMaps.filter(d => d.regex.test(path) && hostMatches(location.hostname, d.hosts)).forEach(d => {
      for (const [k, v] of d.plainReplacements) {
        results.plainReplacements.set(k, v);
      }
      for (const [k, v] of d.regexReplacements) {
        results.regexReplacements.set(k, v);
      }
    });
    return results;
  }
};
UiTranslation = __decorate([Service(), __metadata("design:paramtypes", [Logger])], UiTranslation);

;// ./package.json
const package_namespaceObject = /*#__PURE__*/JSON.parse('{"name":"ehsyringe","displayName":"EhSyringe","version":"3.4.6","description":"E 站注射器，将中文翻译注入到 E 站体内。包含全站 UI 翻译和超过 37000 条标签翻译，标签数据库持续更新中。","author":"EhTagTranslation","repository":{"type":"git","url":"git+https://github.com/EhTagTranslation/EhSyringe.git"},"engines":{"node":"^22.11.0 || ^24.2.0"},"packageManager":"pnpm@10.29.1","license":"MIT","bugs":"https://github.com/EhTagTranslation/EhSyringe/issues","homepage":"https://github.com/EhTagTranslation/EhSyringe","type":"module","scripts":{"start:monkey":"webpack serve --mode=development --env type=user-script","start:ext":"webpack --mode=development --watch --env type=web-ext","start:chrome":"pnpm run start:ext --env vendor=chrome","start:firefox":"pnpm run start:ext --env vendor=firefox","build":"webpack --mode=production","build:monkey":"pnpm run build --env type=user-script","build:ext":"pnpm run build --env type=web-ext","build:chrome":"pnpm run build:ext --env vendor=chrome","build:firefox":"pnpm run build:ext --env vendor=firefox","pack:chrome":"crx pack dist --zip-output releases/ehsyringe.chrome.zip && crx pack dist -o releases/ehsyringe.chrome.crx","pack:firefox":"web-ext build -s dist -a releases -n ehsyringe.firefox.xpi -o && web-ext build -s dist -a releases -n ehsyringe.firefox.zip -o","lint":"eslint","format":"prettier --ignore-path .gitignore --write .","clean":"rimraf dist releases"},"devDependencies":{"@babel/core":"^7.29.0","@babel/plugin-transform-runtime":"^7.29.0","@babel/preset-env":"^7.29.0","@babel/runtime-corejs3":"^7.29.0","@eslint/js":"^9.39.2","@types/chrome":"^0.1.36","@types/escape-html":"^1.0.4","@types/node":"^25.2.2","@types/tampermonkey":"^5.0.5","@types/webextension-polyfill":"^0.12.4","@webextension-toolbox/webpack-webextension-plugin":"^3.3.1","babel-loader":"^10.0.0","copy-webpack-plugin":"^13.0.1","crx":"^5.0.1","css-loader":"^7.1.3","cssnano":"^7.1.2","eslint":"^9.39.2","eslint-config-prettier":"^10.1.8","execa":"^9.6.1","glob":"^13.0.1","html-webpack-plugin":"^5.6.6","less":"^4.5.1","less-loader":"^12.3.1","postcss":"^8.5.6","postcss-import":"^16.1.1","postcss-loader":"^8.2.0","postcss-preset-env":"^11.1.3","prettier":"^3.8.1","rimraf":"^6.1.2","semver":"^7.7.4","style-loader":"^4.0.0","ts-loader":"^9.5.4","tsconfig-paths-webpack-plugin":"^4.2.0","type-fest":"^5.4.3","typescript":"^5.9.3","typescript-eslint":"^8.54.0","web-ext":"^9.2.0","webpack":"^5.105.0","webpack-bundle-analyzer":"^5.2.0","webpack-cli":"^6.0.1","webpack-dev-server":"^5.2.3","yaml-loader":"^0.9.0"},"dependencies":{"core-js":"^3.48.0","emoji-regex":"^10.6.0","escape-html":"^1.0.3","idb-keyval":"^6.2.2","lit-html":"^3.3.2","rxjs":"^7.8.2","tslib":"^2.8.1","typedi":"^0.10.0","webextension-polyfill":"^0.12.0"}}');
;// ./src/info.ts

const packageJson = package_namespaceObject;
;// ./src/services/sync-storage.ts







let SyncStorage = class SyncStorage {
  constructor(logger, async) {
    this.logger = logger;
    this.async = async;
    this.defaults = {
      version: packageJson.version,
      databaseMap: undefined,
      databaseSha: undefined,
      config: this.async.defaults.config
    };
    const oldVer = this.get('version');
    if (packageJson.version !== oldVer) {
      this.migrate();
      this.set('version', packageJson.version);
    }
  }
  get(key) {
    const value = syncStorage.get(key);
    if (value == null) return this.defaults[key];
    return value;
  }
  set(key, value) {
    if (value == null) return this.delete(key);
    return syncStorage.set(key, value);
  }
  delete(key) {
    return syncStorage.delete(key);
  }
  keys() {
    return keys_default()(syncStorage).call(syncStorage);
  }
  migrate() {
    var _context;
    const keys = keys_default()(_context = this).call(_context);
    if (keys.length === 0) return;
    this.logger.log("\u8FC1\u79FB\u540C\u6B65\u5B58\u50A8\u7248\u672C\uFF0C\u5220\u9664 ", keys);
    for (const key of keys) {
      this.delete(key);
    }
  }
};
SyncStorage = __decorate([Service(), __metadata("design:paramtypes", [Logger, Storage])], SyncStorage);

;// ./src/services/date-time.ts

function date_time_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function date_time_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? date_time_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : date_time_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DateTime_1;


const base = {
  hourCycle: 'h23'
};
const timeFormatter = new Intl.DateTimeFormat(undefined, date_time_objectSpread({
  hour: 'numeric',
  minute: 'numeric'
}, base));
const timeWithSecondFormatter = new Intl.DateTimeFormat(undefined, date_time_objectSpread({
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}, base));
const dateTimeFormatter = new Intl.DateTimeFormat(undefined, date_time_objectSpread({
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}, base));
const dateTimeWithSecondFormatter = new Intl.DateTimeFormat(undefined, date_time_objectSpread({
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}, base));
const noYearDateTimeFormatter = new Intl.DateTimeFormat(undefined, date_time_objectSpread({
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}, base));
const noYearDateTimeWithSecondFormatter = new Intl.DateTimeFormat(undefined, date_time_objectSpread({
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}, base));
let DateTime = DateTime_1 = class DateTime {
  absolute(hisTime) {
    let withSecond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let nowTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
    const his = new Date(hisTime);
    const now = new Date(nowTime);
    if (his.getFullYear() === now.getFullYear()) {
      if (his.getMonth() === now.getMonth() && his.getDate() === now.getDate()) {
        return "\u4ECA\u5929 ".concat((withSecond ? timeWithSecondFormatter : timeFormatter).format(his));
      }
      return (withSecond ? noYearDateTimeWithSecondFormatter : noYearDateTimeFormatter).format(his);
    }
    return (withSecond ? dateTimeWithSecondFormatter : dateTimeFormatter).format(his);
  }
  relative(diffTime) {
    const nYear = diffTime / DateTime_1.year;
    const nMonth = diffTime / DateTime_1.month;
    const nDay = diffTime / DateTime_1.day;
    const nHour = diffTime / DateTime_1.hour;
    const nMin = diffTime / DateTime_1.minute;
    // Note: 一天前 不是 昨天，一年前 也不是 去年
    if (nYear >= 1) return "".concat(Math.floor(nYear), " \u5E74\u524D");else if (nMonth >= 1) return "".concat(Math.floor(nMonth), " \u4E2A\u6708\u524D");else if (nDay >= 1) return "".concat(Math.floor(nDay), " \u5929\u524D");else if (nHour >= 1) return "".concat(Math.floor(nHour), " \u5C0F\u65F6\u524D");else if (nMin >= 1) return "".concat(Math.floor(nMin), " \u5206\u949F\u524D");else if (nMin >= 0) return '刚刚';else if (nMin > -1) return '马上';else if (nHour > -1) return "".concat(Math.floor(-nMin), " \u5206\u949F\u540E");else if (nDay > -1) return "".concat(Math.floor(-nHour), " \u5C0F\u65F6\u540E");else if (nMonth > -1) return "".concat(Math.floor(-nDay), " \u5929\u540E");else if (nYear > -1) return "".concat(Math.floor(-nMonth), " \u4E2A\u6708\u540E");else return "".concat(Math.floor(-nYear), " \u5E74\u540E");
  }
  diff() {
    let hisTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let withSecond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let maxRelativeDiff = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DateTime_1.day * 7;
    let nowTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Date.now();
    hisTime = typeof hisTime === 'number' ? hisTime : hisTime.getTime();
    nowTime = typeof nowTime === 'number' ? nowTime : nowTime.getTime();
    if (!hisTime) return 'N/A';
    const diffTime = nowTime - hisTime;
    if (diffTime >= maxRelativeDiff) {
      return this.absolute(hisTime, withSecond, nowTime);
    } else {
      return this.relative(diffTime);
    }
  }
};
DateTime.second = 1000;
DateTime.minute = DateTime_1.second * 60;
DateTime.hour = DateTime_1.minute * 60;
DateTime.day = DateTime_1.hour * 24;
DateTime.month = DateTime_1.day * (365.25 / 12);
DateTime.year = DateTime_1.month * 12;
DateTime = DateTime_1 = __decorate([Service()], DateTime);

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.3_webpack@5.105.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/.pnpm/less-loader@12.3.1_less@4.5.1_webpack@5.105.0/node_modules/less-loader/dist/cjs.js!./src/plugin/syringe/index.less
var syringe = __webpack_require__(85588);
;// ./src/plugin/syringe/index.less

      
      
      
      
      
      
      
      
      

var syringe_options = {};

syringe_options.styleTagTransform = (styleTagTransform_default());
syringe_options.setAttributes = (setAttributesWithoutAttributes_default());
syringe_options.insert = insertBySelector_default().bind(null, ":root");
syringe_options.domAPI = (styleDomAPI_default());
syringe_options.insertStyleElement = (insertStyleElement_default());

var syringe_update = injectStylesIntoStyleTag_default()(syringe/* default */.A, syringe_options);




       /* harmony default export */ const plugin_syringe = (syringe/* default */.A && syringe/* default */.A.locals ? syringe/* default */.A.locals : undefined);

;// ./src/plugin/syringe/index.ts
















function isElement(node, nodeName) {
  return node instanceof HTMLElement && (nodeName == null || node.localName === nodeName);
}
function isText(node) {
  return (node === null || node === void 0 ? void 0 : node.nodeType) === Node.TEXT_NODE;
}
function childNodes(node) {
  const iterator = document.createNodeIterator(node);
  const nodes = [];
  let childNode = iterator.nextNode();
  while (childNode) {
    nodes.push(childNode);
    childNode = iterator.nextNode();
  }
  return nodes;
}
const skipNodeName = new Set(['TITLE', 'LINK', 'META', 'HEAD', 'SCRIPT', 'BR', 'HR', 'STYLE', 'MARK']);
const ignoreClassName = "eh-syringe-ignore";
const skipElementMatcher = ".".concat(ignoreClassName, ", .").concat(ignoreClassName, " *, [translate=no], [translate=no] :not([translate=yes])");
// 该方案同时在 V2、V3 和 UserScript 生效
// 注意 actualCode 是在事件回调内部运行的，要挂载变量需要显式写 `window.varName = xxx`
function codePatch(window) {
  window.addOnloadHook = function (callback) {
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      window.addEventListener('DOMContentLoaded', callback, {
        once: true
      });
    }
  };
  window.toggle_advsearch_pane = function toggle_advsearch_pane(b) {
    if (document.getElementById('advdiv').style.display === 'none') {
      window.show_advsearch_pane(b);
    } else {
      window.hide_advsearch_pane(b);
    }
  };
  window.toggle_filesearch_pane = function toggle_filesearch_pane(b) {
    if (document.getElementById('fsdiv').style.display === 'none') {
      window.show_filesearch_pane(b);
    } else {
      window.hide_filesearch_pane(b);
    }
  };
}
const WIKI_SEARCH_NS = ['loc', 'o', 'l', 'f', 'm', 'x', 'g', 'a', 'cos', 'p', 'c', 'r'];
const WIKI_NORMAL_TERM = new Set(['power', 'ban', 'bans', 'karma', 'banned', 'gallery', 'galleries', 'comment', 'comments', 'renaming', 'expunge', 'tag', 'archives', 'dawn', 'torrent', 'credits', 'bazaar', 'shrine', 'persona', 'contests', 'hath', 'deception', 'toplist', 'toplists', 'cosplay']);
class TagNodeRef {
  static attached(node) {
    const parentElement = isText(node) ? node.parentElement : node;
    if (!parentElement) return false;
    return parentElement.hasAttribute(this.ATTR);
  }
  static create(node, service) {
    var _node$textContent;
    const parentElement = isText(node) ? node.parentElement : node;
    if (!parentElement || parentElement.hasAttribute(this.ATTR)) {
      return true;
    }
    const aId = parentElement.id;
    const aTitle = parentElement.title;
    let fullKeyCandidate;
    if (aTitle) {
      let tag;
      if (includes_default()(aTitle).call(aTitle, ':')) {
        tag = aTitle.split(':');
      } else if (service.isWiki) {
        if (starts_with_default()(aTitle).call(aTitle, 'series ')) {
          var _context;
          tag = ['parody', trim_default()(_context = aTitle.slice('series '.length)).call(_context)];
        } else if (starts_with_default()(aTitle).call(aTitle, 'character ')) {
          var _context2;
          tag = ['character', trim_default()(_context2 = aTitle.slice('character '.length)).call(_context2)];
        } else if (starts_with_default()(aTitle).call(aTitle, 'artist ')) {
          var _context3;
          tag = ['artist', trim_default()(_context3 = aTitle.slice('artist '.length)).call(_context3)];
        } else if (starts_with_default()(aTitle).call(aTitle, 'group ')) {
          var _context4;
          tag = ['group', trim_default()(_context4 = aTitle.slice('group '.length)).call(_context4)];
        } else {
          tag = ['', aTitle];
        }
      } else {
        tag = ['', aTitle];
      }
      const [namespace, key] = tag;
      fullKeyCandidate = service.tagging.fullKey({
        namespace,
        key
      });
    } else if (aId) {
      let id = aId;
      if (starts_with_default()(id).call(id, 'ta_')) id = id.slice(3);
      const [namespace, key] = id.replace(/_/gi, ' ').split(':');
      fullKeyCandidate = key ? service.tagging.fullKey({
        namespace,
        key
      }) : service.tagging.fullKey({
        namespace: '',
        key: namespace
      });
    }
    if (!fullKeyCandidate) return false;
    const fullKey = fullKeyCandidate;
    const text = (_node$textContent = node.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : '';
    return new TagNodeRef(parentElement, fullKey, text, service);
  }
  constructor(node, fullKey, original, service) {
    this.node = node;
    this.fullKey = fullKey;
    this.original = original;
    this.service = service;
    node.setAttribute(TagNodeRef.ATTR, this.original);
    node.setAttribute('lang', 'en');
    Object.defineProperty(node, 'ehs', {
      value: this
    });
    if (!node.hasAttribute('title')) {
      node.title = this.fullKey;
    }
  }
  get alive() {
    return !!this.node.parentElement;
  }
  translate(tagMap) {
    var _context5, _context6;
    if (!this.alive) return true;
    if (!this.service.config.translateTag) {
      this.node.textContent = this.original;
      this.node.setAttribute('lang', 'en');
      return true;
    }
    if (!tagMap) {
      return false;
    }
    let value = tagMap[this.fullKey];
    if (!value && this.service.isWiki && !includes_default()(_context5 = this.fullKey).call(_context5, ':')) {
      for (const ns of WIKI_SEARCH_NS) {
        value = tagMap["".concat(ns, ":").concat(this.fullKey)];
        if (value) break;
      }
    }
    if (!value) {
      return false;
    }
    value = this.service.tagging.markImagesAndEmoji(value);
    if (includes_default()(_context6 = this.original).call(_context6, ':')) {
      const originalNs = this.original.split(':')[0];
      if (!originalNs) value = ":".concat(value);else value = "".concat(this.service.tagging.ns(originalNs), ":").concat(value);
    }
    this.node.innerHTML = value;
    this.node.setAttribute('lang', 'zh-hans');
    return true;
  }
}
TagNodeRef.ATTR = 'ehs-tag';
let Syringe = class Syringe {
  constructor(storage, uiTranslation, logger, messaging, tagging, time) {
    this.storage = storage;
    this.uiTranslation = uiTranslation;
    this.logger = logger;
    this.messaging = messaging;
    this.tagging = tagging;
    this.time = time;
    this.tags = [];
    this.documentEnd = false;
    this.config = this.getAndInitConfig();
    this.uiData = this.uiTranslation.get();
    this.isEx = isEx(location.hostname);
    this.isEh = isEh(location.hostname);
    this.isRepo = isRepo(location.hostname);
    this.isWiki = isWiki(location.hostname);
    storage.async.on('config', (k, ov, nv) => {
      if (nv) this.updateConfig(nv);
    });
    this.init();
  }
  translateTags(tagMap) {
    const tags = this.tags.filter(t => t.alive);
    this.tags = tags;
    tagMap !== null && tagMap !== void 0 ? tagMap : tagMap = this.tagMap;
    tagMap !== null && tagMap !== void 0 ? tagMap : tagMap = this.storage.get('databaseMap');
    this.tagMap = tagMap;
    tags.forEach(t => t.translate(tagMap));
  }
  updateConfig(config) {
    this.config = config;
    this.storage.set('config', config);
    this.setRootAttrs();
    this.translateTags();
  }
  getAndInitConfig() {
    this.storage.async.get('config').then(conf => {
      this.updateConfig(conf);
    }).catch(this.logger.error);
    return this.storage.get('config');
  }
  codePatch() {
    const {
      documentElement
    } = document;
    documentElement.setAttribute('onreset', ";(".concat(codePatch.toString(), ")(window); return false;"));
    documentElement.dispatchEvent(new Event('reset'));
    documentElement.removeAttribute('onreset');
  }
  onObserved(mutations) {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes') {
        this.translateNode(mutation.target);
        continue;
      }
      for (const node of mutation.addedNodes) {
        this.translateNode(node);
        if (this.documentEnd) {
          const nodes = childNodes(node);
          for (const childNode of nodes) {
            this.translateNode(childNode);
          }
        }
      }
    }
  }
  init() {
    ready(() => {
      var _this$observer$takeRe, _this$observer;
      this.onObserved((_this$observer$takeRe = (_this$observer = this.observer) === null || _this$observer === void 0 ? void 0 : _this$observer.takeRecords()) !== null && _this$observer$takeRe !== void 0 ? _this$observer$takeRe : []);
      this.codePatch();
      this.documentEnd = true;
    });
    this.setRootAttrs();
    const {
      body
    } = document;
    if (body) {
      const nodes = childNodes(body);
      this.logger.warn("\u6709 ".concat(nodes.length, " \u4E2A\u8282\u70B9\u5728\u6CE8\u5165\u524D\u52A0\u8F7D"), nodes);
      for (const node of nodes) {
        this.translateNode(node);
      }
    } else {
      this.logger.debug("\u6CA1\u6709\u8282\u70B9\u5728\u6CE8\u5165\u524D\u52A0\u8F7D");
    }
    this.observer = new MutationObserver(mutations => this.onObserved(mutations));
    this.observer.observe(document.documentElement, {
      attributeFilter: ['title', 'placeholder', 'label', 'value'],
      childList: true,
      subtree: true
    });
    this.updateTagMap();
    this.messaging.on('tag-updated', () => this.updateTagMap());
  }
  updateTagMap() {
    if (this.updatingTagMap) return;
    let updatingTagMap;
    updatingTagMap = (async () => {
      const timer = this.logger.time('获取替换数据');
      try {
        const currentSha = this.storage.get('databaseSha');
        const data = await this.messaging.emit('get-tag-map', {
          ifNotMatch: currentSha
        });
        if (data.map) {
          const tagMap = {};
          for (const key in data.map) {
            tagMap[key] = data.map[key].name;
          }
          this.translateTags(tagMap);
          this.storage.set('databaseMap', tagMap);
          this.storage.set('databaseSha', data.sha);
          this.logger.log('替换数据已更新', data.sha);
        } else {
          this.logger.log('替换数据已经最新', data.sha);
        }
      } catch (ex) {
        this.logger.error(ex);
      } finally {
        timer.end();
        if (this.updatingTagMap === updatingTagMap) {
          this.updatingTagMap = undefined;
          updatingTagMap = undefined;
        }
      }
    })();
    this.updatingTagMap = updatingTagMap;
  }
  setRootAttrs() {
    var _context7;
    const node = document.documentElement;
    if (!node) return;
    node.classList.remove(...[...values_default()(_context7 = node.classList).call(_context7)].filter(k => starts_with_default()(k).call(k, 'ehs')));
    node.classList.add('ehs-injected');
    if (this.isEx) {
      node.classList.add('ehs-ex');
    } else if (this.isEh) {
      node.classList.add('ehs-eh');
    } else if (this.isRepo) {
      node.classList.add('ehs-repo');
    } else if (this.isWiki) {
      node.classList.add('ehs-wiki');
    } else if ('matchMedia' in window) {
      const matchesDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (matchesDarkTheme) {
        node.classList.add('ehs-ex');
      } else {
        node.classList.add('ehs-eh');
      }
    }
    if (!this.config.showIcon) {
      node.classList.add('ehs-hide-icon');
    }
    if (this.config.translateTag) {
      node.classList.add('ehs-translate-tag');
    }
    if (this.config.translateUi) {
      node.setAttribute('lang', 'zh-hans');
    } else {
      node.setAttribute('lang', 'en');
    }
    node.classList.add("ehs-image-level-".concat(this.config.introduceImageLevel));
  }
  translateNode(node) {
    var _node$parentElement;
    const {
      nodeName
    } = node;
    if (!nodeName || skipNodeName.has(nodeName)) return;
    if (node.parentNode && skipNodeName.has(node.parentNode.nodeName)) return;
    if (isElement(node) ? node.matches(skipElementMatcher) : (_node$parentElement = node.parentElement) === null || _node$parentElement === void 0 ? void 0 : _node$parentElement.matches(skipElementMatcher)) {
      return;
    }
    const handled = this.translateTag(node);
    /* tag 处理过的ui不再处理*/
    if (!handled && (this.config.translateUi || this.config.translateTimestamp)) {
      this.translateUi(node);
    }
  }
  isTagContainer(node) {
    var _context8;
    if (!node) {
      return false;
    }
    if (isElement(node, 'a') && starts_with_default()(_context8 = node.href).call(_context8, 'https://e-hentai.org/tag/')) {
      var _node$textContent2;
      const url = new (url_default())(node.href);
      const urlTag = decodeURIComponent(url.pathname.split('/').pop()).replace(/_/g, ' ').replace(/\+/g, ' ');
      if (urlTag !== node.textContent) {
        return false;
      }
      node.title = (_node$textContent2 = node.textContent) !== null && _node$textContent2 !== void 0 ? _node$textContent2 : '';
      return true;
    }
    if (this.isWiki && (isElement(node, 'h1') && node.id === 'firstHeading' || isElement(node, 'a') && new (url_default())(node.href).hostname === 'ehwiki.org')) {
      var _context9, _context0;
      if (starts_with_default()(_context9 = node.className).call(_context9, 'oo-ui-')) {
        // 不翻译搜索框
        return false;
      }
      const tag = trim_default()(_context0 = (node.textContent || '').replace(/[\s\u200E\u200F]+/g, ' ')).call(_context0).toLowerCase();
      if (!this.tagging.isTagName(tag) || WIKI_NORMAL_TERM.has(tag)) {
        return false;
      }
      if (node.id === 'firstHeading') {
        node.title = tag;
        return true;
      }
      if (!('href' in node)) {
        return false;
      }
      const isWikiLink =
      // wiki 内部链接
      /^https?:\/\/ehwiki.org\/wiki\/[-+._A-Za-z0-9]+($|\?)/.test(node.href) ||
      // 指向不存在页面的链接
      node.classList.contains('new') && /^https?:\/\/ehwiki.org\/action\/edit\/[-+._A-Za-z0-9]+($|\?)/.test(node.href);
      if (!isWikiLink) return false;
      const url = new (url_default())(node.href);
      const urlTag = decodeURIComponent(url.pathname.split('/').pop()).replace(/_/g, ' ').replace(/\+/g, ' ').toLowerCase();
      if (urlTag !== tag) {
        return false;
      }
      node.title = tag;
      return true;
    }
    return node.classList.contains('gt') || node.classList.contains('gtl') || node.classList.contains('gtw');
  }
  translateTag(node) {
    const parentElement = node.parentElement;
    let ref;
    if ((parentElement === null || parentElement === void 0 ? void 0 : parentElement.id) === 'tagname_newtagcomplete-list' && isElement(node)) {
      // 翻译我的标签提示
      if (node.querySelector('.ehs-new-tag-complete-translate')) return false;
      const elTrans = document.createElement('span');
      const tag = node.getAttribute('data-value');
      if (!tag) return false;
      elTrans.id = tag;
      elTrans.classList.add('ehs-new-tag-complete-translate');
      node.appendChild(elTrans);
      ref = TagNodeRef.create(elTrans, this);
    } else if (!isText(node) || !parentElement) {
      return false;
    } else if (TagNodeRef.attached(node)) {
      return true;
    } else if (parentElement.nodeName === 'MARK' || parentElement.classList.contains('auto-complete-text')) {
      // 不翻译搜索提示的内容
      return true;
    } else if (!this.isTagContainer(parentElement) && !this.isTagContainer(parentElement === null || parentElement === void 0 ? void 0 : parentElement.parentElement)) {
      // 标签只翻译已知的位置
      return false;
    } else {
      ref = TagNodeRef.create(node, this);
    }
    if (typeof ref == 'boolean') return ref;
    ref.translate(this.tagMap);
    this.tags.push(ref);
    return true;
  }
  translateUiText(text) {
    let repText = text;
    if (this.config.translateUi) {
      const plain = this.uiData.plainReplacements.get(text);
      if (plain != null) return plain;
      for (const [k, v] of this.uiData.regexReplacements) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        repText = repText.replace(k, v);
      }
    }
    if (this.config.translateTimestamp &&
    // 快速判断是否有可能包含时间戳
    includes_default()(repText).call(repText, ':')) {
      repText = repText.replace(/(\d\d\d\d-[0-1][0-9]-[0-3][0-9] [0-2][0-9]:[0-5][0-9](:[0-5][0-9])?)( UTC)?/g, ($, t, seconds) => {
        const date = Date.parse(t + 'Z');
        if (!date) return $;
        if (seconds) return this.time.absolute(date, true);
        return this.time.diff(date, undefined, DateTime.hour);
      });
      repText = repText.replace(/([0-3][0-9]|[1-9]) (January|February|March|April|May|June|July|August|September|October|November|December) (\d\d\d\d), ([0-2][0-9]:[0-5][0-9])( UTC)?/gi, ($, d, m, y, t) => {
        const date = Date.parse("".concat(d, " ").concat(m, " ").concat(y, ", ").concat(t, " UTC"));
        if (!date) return $;
        return this.time.diff(date, undefined, DateTime.hour);
      });
      repText = repText.replace(/(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-3][0-9]|[1-9])(st|nd|rd|th) of (January|February|March|April|May|June|July|August|September|October|November|December) (\d\d\d\d), ([0-2][0-9]:[0-5][0-9])( UTC)?/gi, ($, _w, d, _do, m, y, t) => {
        const date = Date.parse("".concat(d, " ").concat(m, " ").concat(y, ", ").concat(t, " UTC"));
        if (!date) return $;
        return this.time.diff(date, undefined, DateTime.hour);
      });
    }
    if (repText !== text) return repText;
    return undefined;
  }
  translateUi(node) {
    var _node$parentElement2;
    if (isElement(node) && node.title && typeof node.title == 'string') {
      const translation = this.translateUiText(node.title);
      if (translation != null) {
        node.title = translation;
      }
    }
    if (isText(node)) {
      var _node$textContent3;
      const text = (_node$textContent3 = node.textContent) !== null && _node$textContent3 !== void 0 ? _node$textContent3 : '';
      const translation = this.translateUiText(text);
      if (translation != null) {
        node.textContent = translation;
      }
      return;
    }
    if (isElement(node, 'input') && (node.type === 'submit' || node.type === 'button' || node.type === 'reset')) {
      // 将 input[type=submit] 等按钮替换为 button[ehs-input]，避免 value 属性被翻译导致提交内容错误
      const translation = this.translateUiText(node.value);
      if (translation != null) {
        const button = document.createElement('button');
        for (const attr of node.attributes) {
          button.setAttribute(attr.name, attr.value);
        }
        button.setAttribute('ehs-input', '');
        button.textContent = translation;
        node.replaceWith(button);
        // 新元素的事件派发至原元素，兼容 MEMS
        button.addEventListener('click', e => {
          if (!node.dispatchEvent(new MouseEvent('click', e))) {
            e.preventDefault();
          }
        });
      }
      return;
    }
    if (isElement(node, 'button') && node.hasAttribute('ehs-input')) {
      // 响应 button[ehs-input] 的 value 变更
      const translation = this.translateUiText(node.value);
      node.textContent = translation !== null && translation !== void 0 ? translation : node.value;
      return;
    }
    if ((isElement(node, 'input') || isElement(node, 'textarea')) && node.placeholder) {
      const translation = this.translateUiText(node.placeholder);
      if (translation != null) {
        node.placeholder = translation;
      }
      return;
    }
    if (isElement(node, 'optgroup')) {
      const translation = this.translateUiText(node.label);
      if (translation != null) {
        node.label = translation;
      }
      return;
    }
    // 导航链接，一体化处理，不再处理文本节点（原文使用子元素和媒体查询实现页面宽度改变时文本自动更改为缩写）
    if (isElement(node, 'a') && (node === null || node === void 0 || (_node$parentElement2 = node.parentElement) === null || _node$parentElement2 === void 0 || (_node$parentElement2 = _node$parentElement2.parentElement) === null || _node$parentElement2 === void 0 ? void 0 : _node$parentElement2.id) === 'nb') {
      var _node$textContent4;
      const translation = this.translateUiText((_node$textContent4 = node.textContent) !== null && _node$textContent4 !== void 0 ? _node$textContent4 : '');
      if (translation != null) {
        node.textContent = translation;
      }
    }
    if (isElement(node, 'div') && node.className === 'd' && isElement(node.parentElement, 'body')) {
      // 兼容 ExResurrect
      this.cloneAndPrependElement(node);
    }
    if (isElement(node, 'select') && node.matches('.searchnav > div > :scope')) {
      // 兼容 MEMS
      this.cloneAndPrependElement(node);
    }
    if (isElement(node, 'p') && node.classList.contains('gpc')) {
      /* 兼容熊猫书签，单独处理页码，保留原页码 Element，防止熊猫书签取不到报错 */
      this.cloneAndPrependElement(node);
    }
    if (isElement(node, 'div') && node.id === 'gdd') {
      /* E-Hentai-Downloader 兼容处理 */
      this.cloneAndPrependElement(node.firstElementChild);
    }
  }
  cloneAndPrependElement(el, cloneNode) {
    const clone = cloneNode ? cloneNode(el) : el.cloneNode(true);
    clone.classList.add(ignoreClassName);
    clone.setAttribute('hidden', '');
    if (clone.id) clone.id = "ehs-clone-".concat(clone.id);
    clone.querySelectorAll('[id]').forEach(node => {
      node.id = "ehs-clone-".concat(node.id);
    });
    el.before(clone);
    return clone;
  }
};
Syringe = __decorate([Service(), __metadata("design:paramtypes", [SyncStorage, UiTranslation, Logger, messaging_Messaging, Tagging, DateTime])], Syringe);

;// ./src/plugin/auto-update.ts





let AutoUpdate = class AutoUpdate {
  constructor(logger, storage, messaging) {
    this.logger = logger;
    this.storage = storage;
    this.messaging = messaging;
    this.init().catch(logger.error);
  }
  async init() {
    this.messaging.emit('check-extension', undefined, true).catch(this.logger.error);
    const conf = await this.storage.get('config');
    if (!conf.autoUpdate) return;
    this.messaging.emit('update-database', {
      force: false
    }).catch(this.logger.error);
  }
};
AutoUpdate = __decorate([Service(), __metadata("design:paramtypes", [Logger, Storage, messaging_Messaging])], AutoUpdate);

;// ./src/providers/user-script/menu.ts





let MenuProvider = class MenuProvider {
  constructor(logger) {
    this.logger = logger;
    logger.warn("\u4E0D\u652F\u6301\u53F3\u952E\u83DC\u5355");
  }
  createMenu(_info) {
    return;
  }
};
MenuProvider = __decorate([Service(), __metadata("design:paramtypes", [Logger])], MenuProvider);
const provider = services_Container.get(MenuProvider);
const createMenu = provider.createMenu.bind(provider);
;// ./src/providers/user-script/utils.ts
const _notification = typeof GM_notification == 'function' ? GM_notification : function (detailsOrText, ondoneOrTitle, image, onclick) {
  var _notification$title, _notification$text, _notification$onclick, _notification$ondone;
  const notification = typeof detailsOrText == 'object' ? detailsOrText : {
    text: String(detailsOrText),
    image: image,
    onclick: onclick,
    highlight: false
  };
  notification.id = "".concat(Math.random() * 1000000000);
  if (typeof ondoneOrTitle == 'function') {
    notification.ondone = ondoneOrTitle;
  } else if (ondoneOrTitle) {
    notification.title = ondoneOrTitle;
  }
  alert("".concat((_notification$title = notification.title) !== null && _notification$title !== void 0 ? _notification$title : '', "\n\n").concat((_notification$text = notification.text) !== null && _notification$text !== void 0 ? _notification$text : ''));
  (_notification$onclick = notification.onclick) === null || _notification$onclick === void 0 || _notification$onclick.call(notification);
  (_notification$ondone = notification.ondone) === null || _notification$ondone === void 0 || _notification$ondone.call(notification, true);
};
const _openInTab = typeof GM_openInTab == 'function' ? GM_openInTab : function (url) {
  const opened = window.open(url);
  return {
    close() {
      var _this$onclose;
      opened === null || opened === void 0 || opened.close();
      (_this$onclose = this.onclose) === null || _this$onclose === void 0 || _this$onclose.call(this);
      this.closed = true;
    },
    closed: false
  };
};
function openInTab(url) {
  _openInTab(url, {
    active: true,
    insert: true,
    setParent: true
  });
}
function sendNotification(info) {
  _notification({
    text: info.message,
    title: info.title,
    onclick: info.action
  });
}
function setBadge(info) {
  const badge = document.getElementById('eh-syringe-popup-badge');
  if (badge) {
    if (info.text != null) {
      badge.innerText = info.text;
      badge.style.visibility = info.text ? 'visible' : 'hidden';
    }
    if (info.background != null) {
      badge.style.background = info.background;
    }
  }
}
;// ./src/plugin/tag-context-menu.ts






let TagContextMenu = class TagContextMenu {
  constructor(tagging) {
    this.tagging = tagging;
    this.documentUrlPatterns = ['*://exhentai.org/*', '*://exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*', '*://e-hentai.org/*', '*://*.exhentai.org/*', '*://*.exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*', '*://*.e-hentai.org/*'];
    this.title = '提交标签翻译';
    this.targetUrlPatterns = ['*://exhentai.org/tag/*', '*://exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/tag/*', '*://e-hentai.org/tag/*', '*://*.exhentai.org/tag/*', '*://*.exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/tag/*', '*://*.e-hentai.org/tag/*'];
    this.contexts = ['link'];
    this.onclick = info => {
      var _info$url, _info$url$split$pop$r, _info$url$split$pop, _seg$pop;
      if (!((_info$url = info.url) !== null && _info$url !== void 0 && includes_default()(_info$url).call(_info$url, '/tag/'))) {
        return;
      }
      const seg = (_info$url$split$pop$r = (_info$url$split$pop = info.url.split('/').pop()) === null || _info$url$split$pop === void 0 ? void 0 : _info$url$split$pop.replace(/\+/g, ' ').split(':')) !== null && _info$url$split$pop$r !== void 0 ? _info$url$split$pop$r : [];
      const namespace = seg.length <= 1 ? 'temp' : seg[0];
      const key = (_seg$pop = seg.pop()) !== null && _seg$pop !== void 0 ? _seg$pop : '';
      openInTab(this.tagging.editorUrl({
        namespace,
        key
      }));
    };
    this.init();
  }
  init() {
    createMenu(this);
  }
};
TagContextMenu = __decorate([Service(), __metadata("design:paramtypes", [Tagging])], TagContextMenu);

;// ./src/services/http.ts


let Http = class Http {
  async json(url) {
    let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    const res = await fetch(url, {
      method
    });
    return await res.json();
  }
  async download(url) {
    let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    let progress = arguments.length > 2 ? arguments[2] : undefined;
    let responseType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'arraybuffer';
    const res = await fetch(url, {
      method,
      redirect: 'follow',
      cache: 'no-cache'
    });
    if (res.status >= 300 || !res.body) {
      throw new Error("".concat(method, " ").concat(url, " ").concat(res.statusText, " (").concat(res.status, ")"));
    }
    const dataCache = [];
    let receivedSize = 0;
    const reader = res.body.getReader();
    for (;;) {
      const data = await reader.read();
      if (data.done) break;
      dataCache.push(data.value);
      receivedSize += data.value.byteLength;
      progress === null || progress === void 0 || progress(receivedSize);
    }
    const data = new Uint8Array(receivedSize);
    let pos = 0;
    for (const piece of dataCache) {
      data.set(piece, pos);
      pos += piece.byteLength;
    }
    if (responseType === 'arraybuffer') {
      return data.buffer;
    }
    return JSON.parse(new TextDecoder().decode(data));
  }
};
Http = __decorate([Service()], Http);

;// ./src/services/database.ts








let Database = class Database {
  constructor(http, storage, logger) {
    this.http = http;
    this.storage = storage;
    this.logger = logger;
  }
  async getLatestVersion() {
    const githubDownloadUrl = 'https://ehtt.fly.dev/octokit/release'; // 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
    const info = await this.http.json(githubDownloadUrl);
    if (!('target_commitish' in info)) {
      var _context;
      if (typeof info.message != 'string') {
        throw new Error('响应有误');
      }
      if (starts_with_default()(_context = info.message).call(_context, 'API rate limit exceeded')) {
        throw new Error('GitHub API 调用次数超过限制，请稍后再试');
      }
      throw new Error(info.message);
    }
    return info;
  }
  dataUrls(version) {
    const dataJson = /<!--([^]+?)-->/gi.exec(version.body);
    if (!dataJson) throw new Error("GitHub \u53D1\u5E03\u6570\u636E\u65E0\u6CD5\u89E3\u6790\uFF0C\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u63D2\u4EF6\u7248\u672C");
    try {
      const data = JSON.parse(dataJson[1]);
      const sha = data.mirror;
      if (typeof sha != 'string') throw new Error();
      return ["https://fastly.jsdelivr.net/gh/EhTagTranslation/Database@".concat(sha, "/db.html.json"), "https://gcore.jsdelivr.net/gh/EhTagTranslation/Database@".concat(sha, "/db.html.json"), "https://cdn.jsdelivr.net/gh/EhTagTranslation/Database@".concat(sha, "/db.html.json"), "https://testingcf.jsdelivr.net/gh/EhTagTranslation/Database@".concat(sha, "/db.html.json"), "https://test1.jsdelivr.net/gh/EhTagTranslation/Database@".concat(sha, "/db.html.json"), "https://originfastly.jsdelivr.net/gh/EhTagTranslation/Database@".concat(sha, "/db.html.json"), "https://cdn.statically.io/gh/EhTagTranslation/Database/".concat(sha, "/db.html.json"), "https://rawcdn.githack.com/EhTagTranslation/Database/".concat(sha, "/db.html.json")];
    } catch (_unused) {
      throw new Error("GitHub \u53D1\u5E03\u6570\u636E\u65E0\u6CD5\u89E3\u6790\uFF0C\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u63D2\u4EF6\u7248\u672C");
    }
  }
  async fetchData(version, total, url, progress) {
    try {
      var _result$head;
      const result = await this.http.download(url, 'GET', loaded => {
        if (total > 0) progress === null || progress === void 0 || progress(loaded / total);else progress === null || progress === void 0 || progress(0);
      }, 'json');
      if (!result || !Array.isArray(result.data) || result.data.some(item => item.data == null || typeof item.data !== 'object')) {
        throw new Error("\u4E0B\u8F7D\u7684\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E: ".concat(JSON.stringify(result)));
      }
      if (version && (result === null || result === void 0 || (_result$head = result.head) === null || _result$head === void 0 ? void 0 : _result$head.sha) !== version.target_commitish) {
        var _result$head2;
        throw new Error("\u7248\u672C\u4E0D\u5339\u914D: ".concat(result === null || result === void 0 || (_result$head2 = result.head) === null || _result$head2 === void 0 ? void 0 : _result$head2.sha, " !== ").concat(version.target_commitish));
      }
      this.logger.log("\u4ECE ".concat(url, " \u4E0B\u8F7D\u6210\u529F"));
      return result;
    } catch (ex) {
      this.logger.warn("\u5C1D\u8BD5\u4ECE ".concat(url, " \u4E0B\u8F7D\u5931\u8D25"), ex);
      throw new Error("\u4ECE ".concat(url, " \u4E0B\u8F7D\u5931\u8D25: ").concat(ex.message || String(ex)));
    }
  }
  async getOverride() {
    var _config$overrideDbUrl;
    const config = await this.storage.get('config');
    const url = config === null || config === void 0 || (_config$overrideDbUrl = config.overrideDbUrl) === null || _config$overrideDbUrl === void 0 ? void 0 : trim_default()(_config$overrideDbUrl).call(_config$overrideDbUrl);
    if (!url) {
      this.logger.debug("\u672A\u914D\u7F6E\u5916\u90E8\u6570\u636E\u5E93 URL");
      return undefined;
    }
    try {
      const u = new (url_default())(url);
      if (u.protocol !== 'http:' && u.protocol !== 'https:') {
        throw new Error('不支持的协议');
      }
    } catch (ex) {
      this.logger.error("\u65E0\u6548\u7684\u5916\u90E8\u6570\u636E\u5E93 URL ".concat(url, "\uFF1A").concat(ex.message || String(ex)));
    }
    this.logger.debug("\u4ECE URL ".concat(url, " \u52A0\u8F7D\u5916\u90E8\u6570\u636E\u5E93"));
    try {
      return await this.fetchData(undefined, 0, url, undefined);
    } catch (ex) {
      this.logger.error("\u52A0\u8F7D\u5916\u90E8\u6570\u636E\u5E93\u5931\u8D25\uFF1A".concat(ex.message || String(ex)));
      return undefined;
    }
  }
  async getData(version, progress) {
    const urls = this.dataUrls(version);
    const asset = version.assets.find(asset => asset.name === 'db.html.json');
    const total = asset != null ? asset.size : 0;
    const errors = [];
    const override = this.getOverride();
    let base;
    for (const url of urls) {
      try {
        base = await this.fetchData(version, total, url, progress);
        break;
      } catch (ex) {
        errors.push(ex);
      }
    }
    if (!base) {
      if (errors.length === 0) throw new Error('没有获取到有效的文件');
      const e = errors[errors.length - 1];
      Object.defineProperty(e, 'errors', {
        value: errors,
        enumerable: true
      });
      throw e;
    }
    return {
      base,
      override: await override
    };
  }
};
Database = __decorate([Service(), __metadata("design:paramtypes", [Http, Storage, Logger])], Database);

;// ./src/services/badge-loading.ts




let BadgeLoading = class BadgeLoading {
  constructor(logger) {
    this.logger = logger;
    this.loadingStrArr = [[''], ['⢎⠀', '⢆⡀', '⢄⡠', '⢀⡰', '⠀⡱', '⠈⠱', '⠊⠑', '⠎⠁'], ['    ', '·   ', ' ·  ', '  · ', '   ·']];
    this.frame = 0;
    this.index = 0;
    this.interval = undefined;
    this.text = '';
    this.loadingString = [''];
    this.color = '';
    this.extname = 'EhSyringe';
  }
  setColor() {
    let color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#4A90E2';
    setBadge({
      background: color
    });
  }
  setText(text) {
    setBadge({
      text
    });
  }
  set(text, color) {
    let loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (this.index !== loading) {
      this.index = loading;
      this.loadingString = this.loadingStrArr[this.index] || [''];
      this.frame = 0;
    }
    this.text = text;
    this.setColor(color);
    if (loading) {
      var _this$interval;
      (_this$interval = this.interval) !== null && _this$interval !== void 0 ? _this$interval : this.interval = setInterval(() => {
        this.setText("".concat(this.text).concat(this.loadingString[this.frame] || ''));
        this.frame++;
        if (!this.loadingString[this.frame]) {
          this.frame = 0;
        }
      }, 100);
    } else {
      this.frame = 0;
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = undefined;
      }
      this.setText(this.text);
    }
  }
};
BadgeLoading = __decorate([Service(), __metadata("design:paramtypes", [Logger])], BadgeLoading);

;// ./src/utils/promise.ts

function sleep(ms) {
  return new (promise_default())(resolve => setTimeout(resolve, ms));
}
;// ./src/utils/index.ts

;// ./src/plugin/database-updater.ts



function database_updater_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function database_updater_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? database_updater_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : database_updater_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }








const database_updater_defaultStatus = {
  run: false,
  progress: 0,
  info: '',
  complete: false,
  error: false
};
let DatabaseUpdater = class DatabaseUpdater {
  constructor(logger, messaging, storage, database, badge) {
    this.logger = logger;
    this.messaging = messaging;
    this.storage = storage;
    this.database = database;
    this.badge = badge;
    this._lastCheckData = {
      sha: '',
      check: 0,
      githubRelease: null
    };
    this.downloadStatus = database_updater_objectSpread({}, database_updater_defaultStatus);
    this.checked = false;
    this.messaging.on('update-database', async _ref => {
      var _context;
      let {
        force,
        recheck
      } = _ref;
      if (this.checked && !force) {
        this.logger.log('跳过');
        return undefined;
      }
      const version = await this.checkVersion(recheck);
      if (!(version !== null && version !== void 0 && version.sha)) {
        this.logger.log('没有数据库版本信息');
        return undefined;
      }
      if (force) {
        this.logger.log('强制更新', version);
      } else if (!starts_with_default()(_context = await this.messaging.emit('get-tag-sha', undefined)).call(_context, version.sha)) {
        this.logger.log('有新版本', version);
      } else {
        this.logger.log('没有新版本', version);
        return undefined;
      }
      await this.updating;
      const updating = this.update();
      this.updating = updating;
      const success = await updating;
      this.updating = undefined;
      if (success) {
        this.logger.log('有新版本并更新', version);
        return version;
      } else {
        this.logger.log('更新新版本失败', version);
        return undefined;
      }
    });
    this.messaging.on('check-database', async _ref2 => {
      let {
        force
      } = _ref2;
      return await this.checkVersion(force);
    });
    this.init().catch(logger.error);
  }
  async init() {
    const storage = await this.storage.get('release');
    if (storage && storage.check > this._lastCheckData.check) {
      assign_default()(this._lastCheckData, storage);
    }
  }
  get lastCheckData() {
    return this._lastCheckData;
  }
  set lastCheckData(value) {
    if (value && value.check > this.lastCheckData.check) {
      assign_default()(this._lastCheckData, value);
      this.storage.set('release', this._lastCheckData).catch(this.logger.error);
    }
  }
  async update() {
    // 重置下载状态
    this.initDownloadStatus();
    try {
      const {
        base,
        override
      } = await this.download();
      await this.messaging.emit('update-tag', {
        base,
        override
      });
      this.badge.set('OK', '#00C801');
      this.pushDownloadStatus({
        run: true,
        info: '更新完成',
        progress: 100,
        complete: true
      });
      void sleep(2500).then(() => {
        if (this.downloadStatus.complete) {
          this.badge.set('', '#4A90E2');
          this.initDownloadStatus();
        }
      });
      return true;
    } catch (err) {
      const e = err;
      this.logger.error(e);
      this.badge.set('ERR', '#C80000');
      this.pushDownloadStatus({
        run: false,
        error: true,
        info: e !== null && e !== void 0 && e.message ? e.message : '更新失败'
      });
      return false;
    }
  }
  initDownloadStatus() {
    this.downloadStatus = database_updater_objectSpread({}, database_updater_defaultStatus);
    void this.messaging.emit('updating-database', this.downloadStatus, true);
  }
  pushDownloadStatus() {
    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.downloadStatus = database_updater_objectSpread(database_updater_objectSpread({}, this.downloadStatus), data);
    void this.messaging.emit('updating-database', this.downloadStatus, true);
  }
  async checkVersion() {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (!force) {
      // 限制每 5 分钟最多请求 1 次
      const time = new Date().getTime();
      const lastCheckData = this.lastCheckData;
      if (time - lastCheckData.check <= 1000 * 60 * 5 && lastCheckData.githubRelease) {
        return lastCheckData;
      }
    }
    const info = await this.database.getLatestVersion();
    this.lastCheckData = {
      sha: info.target_commitish,
      githubRelease: info,
      check: Date.now()
    };
    this.checked = true;
    return this.lastCheckData;
  }
  async download() {
    var _checkData$githubRele;
    this.badge.set('', '#4A90E2', 2);
    this.pushDownloadStatus({
      run: true,
      info: '加载中'
    });
    const checkData = await this.checkVersion();
    if (!(checkData !== null && checkData !== void 0 && (_checkData$githubRele = checkData.githubRelease) !== null && _checkData$githubRele !== void 0 && _checkData$githubRele.target_commitish)) {
      this.logger.debug('checkData', checkData);
      throw new Error('无法获取版本信息');
    }
    const info = checkData.githubRelease;
    const timer = this.logger.time("\u5F00\u59CB\u4E0B\u8F7D");
    try {
      this.pushDownloadStatus({
        info: '0%',
        progress: 0
      });
      this.badge.set('0', '#4A90E2', 1);
      const data = await this.database.getData(info, progress => {
        const percent = Math.floor(progress * 100);
        this.pushDownloadStatus({
          info: "".concat(percent, "%"),
          progress: percent
        });
        this.badge.set(percent.toFixed(0), '#4A90E2', 1);
      });
      this.pushDownloadStatus({
        info: '下载完成',
        progress: 100
      });
      this.badge.set('100', '#4A90E2', 1);
      return database_updater_objectSpread({
        release: info
      }, data);
    } finally {
      timer.end();
    }
  }
};
DatabaseUpdater = __decorate([Service(), __metadata("design:paramtypes", [Logger, messaging_Messaging, Storage, Database, BadgeLoading])], DatabaseUpdater);

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/object/from-entries.js
var from_entries = __webpack_require__(23103);
var from_entries_default = /*#__PURE__*/__webpack_require__.n(from_entries);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/instance/flat-map.js
var flat_map = __webpack_require__(22074);
var flat_map_default = /*#__PURE__*/__webpack_require__.n(flat_map);
;// ./src/plugin/suggest/dict.yml
const dict_namespaceObject = /*#__PURE__*/JSON.parse('{"拂":["払"],"奸":["姦"],"爱":["愛"],"拔":["抜"],"罢":["罷"],"霸":["覇"],"败":["敗"],"拜":["拝"],"颁":["頒"],"饱":["飽"],"宝":["寶"],"报":["報"],"贝":["貝"],"备":["備"],"辈":["輩"],"笔":["筆"],"币":["幣"],"闭":["閉"],"边":["辺"],"编":["編"],"变":["変"],"标":["標"],"别":["別"],"宾":["賓"],"冰":["氷"],"并":["並","併"],"钵":["缽"],"补":["補"],"步":["歩"],"财":["財"],"参":["參"],"残":["殘"],"蚕":["蠶"],"惨":["慘"],"仓":["倉"],"藏":["蔵"],"册":["冊"],"侧":["側"],"测":["測"],"层":["層"],"插":["挿"],"查":["査"],"禅":["禪"],"产":["產","産"],"肠":["腸"],"偿":["償"],"场":["場"],"巢":["巣"],"车":["車"],"彻":["徹"],"陈":["陳"],"称":["稱"],"诚":["誠"],"乘":["乗"],"惩":["懲"],"吃":["喫"],"痴":["癡"],"迟":["遅"],"齿":["歯"],"耻":["恥"],"敕":["勅"],"冲":["沖","衝"],"虫":["蟲"],"铳":["銃"],"丑":["醜"],"础":["礎"],"处":["處","処"],"触":["觸"],"传":["伝"],"窗":["窓"],"创":["創"],"锤":["錘"],"纯":["純"],"词":["詞"],"辞":["辭"],"赐":["賜"],"从":["従"],"粹":["粋"],"错":["錯"],"达":["達"],"带":["帯"],"贷":["貸"],"担":["擔"],"单":["単"],"胆":["膽"],"诞":["誕"],"弹":["弾"],"当":["當"],"党":["黨"],"导":["導"],"岛":["島"],"盗":["盜"],"稻":["稲"],"德":["徳"],"灯":["燈"],"敌":["敵"],"递":["逓"],"缔":["締"],"点":["點"],"电":["電"],"钓":["釣"],"叠":["畳"],"顶":["頂"],"订":["訂"],"锭":["錠"],"东":["東"],"动":["動","働"],"冻":["凍"],"栋":["棟"],"斗":["闘"],"独":["獨"],"读":["読"],"笃":["篤"],"断":["斷"],"锻":["鍛"],"队":["隊"],"对":["対"],"钝":["鈍"],"夺":["奪"],"堕":["墮"],"额":["額"],"恶":["悪"],"饿":["餓"],"儿":["児"],"贰":["弐"],"发":["髪","発"],"罚":["罰"],"阀":["閥"],"烦":["煩"],"饭":["飯"],"范":["範"],"贩":["販"],"访":["訪"],"纺":["紡"],"飞":["飛"],"废":["廃"],"费":["費"],"纷":["紛"],"氛":["雰"],"坟":["墳"],"奋":["奮"],"愤":["憤"],"风":["風"],"缝":["縫"],"佛":["仏"],"肤":["膚"],"负":["負"],"妇":["婦"],"复":["複","復"],"赋":["賦"],"缚":["縛"],"该":["該"],"干":["幹","乾"],"绀":["紺"],"刚":["剛"],"纲":["綱"],"钢":["鋼"],"阁":["閣"],"个":["個","箇"],"给":["給"],"宫":["宮"],"贡":["貢"],"沟":["溝"],"构":["構"],"购":["購"],"谷":["穀"],"顾":["顧"],"挂":["掛"],"关":["関"],"观":["観"],"馆":["館"],"贯":["貫"],"惯":["慣"],"广":["広"],"归":["帰"],"规":["規"],"轨":["軌"],"贵":["貴"],"国":["國"],"果":["菓"],"过":["過"],"还":["還"],"汉":["漢"],"号":["號"],"贺":["賀"],"黑":["黒"],"红":["紅"],"后":["後"],"户":["戸"],"护":["護"],"华":["華"],"话":["話"],"怀":["懐"],"坏":["壊"],"欢":["歓"],"环":["環"],"缓":["緩"],"换":["換"],"唤":["喚"],"挥":["揮"],"辉":["輝"],"绘":["絵"],"贿":["賄"],"惠":["恵"],"货":["貨"],"获":["穫","獲"],"祸":["禍"],"击":["撃"],"饥":["飢"],"机":["機"],"鸡":["鶏"],"积":["積"],"级":["級"],"极":["極"],"几":["幾","机"],"计":["計"],"记":["記"],"纪":["紀"],"际":["際"],"剂":["剤"],"迹":["跡"],"济":["済"],"继":["継"],"绩":["績"],"假":["仮"],"价":["価"],"坚":["堅"],"间":["間"],"监":["監"],"茧":["繭"],"俭":["倹"],"检":["検"],"减":["減"],"简":["簡"],"见":["見"],"荐":["薦"],"剑":["剣"],"舰":["艦"],"渐":["漸"],"践":["踐"],"鉴":["鑑","鑑"],"将":["將"],"讲":["講"],"奖":["奨"],"纟":["糸"],"绞":["絞"],"矫":["矯"],"觉":["覚"],"较":["較"],"阶":["階"],"揭":["掲"],"节":["節"],"杰":["傑","傑"],"诘":["詰"],"洁":["潔"],"结":["結"],"届":["屆"],"紧":["緊"],"谨":["謹"],"尽":["盡"],"进":["進"],"经":["経"],"惊":["驚"],"鲸":["鯨"],"净":["浄"],"竞":["競"],"静":["靜"],"镜":["鏡"],"纠":["糾"],"举":["挙"],"剧":["劇"],"据":["據","拠"],"卷":["巻","巻"],"绢":["絹"],"决":["決"],"绝":["絶"],"军":["軍"],"开":["開"],"壳":["殻"],"渴":["渇"],"课":["課"],"垦":["墾"],"恳":["懇"],"库":["庫"],"夸":["誇"],"块":["塊"],"宽":["寛"],"况":["況"],"矿":["鉱"],"扩":["拡"],"来":["來"],"赖":["頼"],"濑":["瀬"],"栏":["欄"],"览":["覧"],"滥":["濫"],"劳":["労"],"乐":["楽"],"垒":["塁"],"泪":["涙"],"类":["類"],"离":["離"],"礼":["禮"],"里":["裡","裏"],"历":["歴","暦"],"丽":["麗"],"励":["勵"],"隶":["隸","隷"],"连":["連"],"练":["練"],"炼":["錬"],"恋":["戀"],"凉":["涼"],"粮":["糧"],"两":["両"],"疗":["療"],"猎":["猟"],"邻":["鄰","隣"],"临":["臨"],"赁":["賃"],"灵":["霊"],"铃":["鈴"],"龄":["齢"],"领":["領"],"泷":["滝"],"楼":["樓"],"炉":["爐"],"虏":["虜"],"陆":["陸"],"录":["録"],"乱":["亂"],"伦":["倫"],"轮":["輪"],"论":["論"],"罗":["羅"],"络":["絡"],"虑":["慮"],"绿":["緑"],"马":["馬"],"买":["買"],"麦":["麥"],"卖":["売"],"脉":["脈"],"蛮":["蠻"],"满":["満"],"猫":["貓"],"贸":["貿"],"没":["沒"],"每":["毎"],"门":["門"],"梦":["夢"],"绵":["綿"],"灭":["滅"],"鸣":["鳴"],"铭":["銘"],"默":["黙"],"谋":["謀"],"亩":["畝"],"纳":["納"],"难":["難"],"恼":["悩"],"脑":["脳"],"内":["內"],"拟":["擬"],"娘":["嬢"],"酿":["醸"],"鸟":["鳥"],"宁":["寧"],"农":["農"],"浓":["濃"],"诺":["諾"],"盘":["盤"],"赔":["賠"],"喷":["噴"],"贫":["貧"],"频":["頻"],"评":["評"],"扑":["撲"],"铺":["舗"],"仆":["僕"],"朴":["樸"],"谱":["譜"],"齐":["斉"],"骑":["騎"],"棋":["碁"],"启":["啓"],"气":["気"],"弃":["棄"],"迁":["遷"],"铅":["鉛"],"谦":["謙"],"钱":["銭"],"潜":["潛"],"浅":["淺"],"强":["強"],"缲":["繰"],"桥":["橋"],"窃":["竊"],"亲":["親"],"寝":["寢"],"轻":["軽"],"倾":["傾"],"请":["請"],"庆":["慶"],"穷":["窮"],"驱":["駆"],"圈":["圏"],"权":["権"],"劝":["勧"],"确":["確"],"壤":["壌"],"让":["譲"],"热":["熱"],"认":["認"],"荣":["栄"],"软":["軟"],"锐":["鋭"],"润":["潤"],"伞":["傘"],"丧":["喪"],"骚":["騒"],"扫":["掃"],"涩":["渋"],"杀":["殺"],"缮":["繕"],"伤":["傷"],"赏":["賞"],"烧":["焼"],"绍":["紹"],"舍":["舎","捨"],"设":["設"],"涉":["渉"],"摄":["摂"],"绅":["紳"],"审":["審"],"声":["聲"],"绳":["縄"],"圣":["聖"],"胜":["勝"],"剩":["剰"],"师":["師"],"诗":["詩"],"湿":["濕"],"时":["時"],"识":["識"],"实":["実"],"势":["勢"],"饰":["飾"],"试":["試"],"视":["視"],"适":["適"],"释":["釈"],"收":["収"],"寿":["壽"],"兽":["獣"],"书":["書"],"枢":["樞"],"疏":["疎"],"输":["輸"],"属":["屬"],"术":["術"],"树":["樹"],"数":["數"],"帅":["帥"],"双":["雙"],"税":["稅"],"顺":["順"],"说":["說","説"],"饲":["飼"],"讼":["訟"],"搜":["捜"],"诉":["訴"],"肃":["粛"],"随":["隨"],"髓":["髄"],"岁":["歳"],"碎":["砕"],"穗":["穂"],"孙":["孫"],"损":["損"],"缩":["縮"],"锁":["鎖"],"态":["態"],"坛":["壇"],"昙":["曇"],"谈":["談"],"叹":["歎","嘆"],"汤":["湯"],"讨":["討"],"腾":["騰"],"誊":["謄"],"题":["題"],"条":["條"],"调":["調"],"铁":["鐵","鉄"],"厅":["庁"],"听":["聴"],"铜":["銅"],"统":["統"],"头":["頭"],"图":["図"],"涂":["塗"],"团":["団"],"脱":["脫"],"驮":["駄"],"湾":["灣"],"顽":["頑"],"万":["萬"],"网":["網"],"为":["為"],"违":["違"],"围":["囲"],"维":["維"],"伟":["偉"],"伪":["偽"],"纬":["緯"],"卫":["衛"],"纹":["紋"],"闻":["聞"],"稳":["穏"],"问":["問"],"涡":["渦"],"污":["汚"],"无":["無"],"吴":["呉"],"务":["務"],"误":["誤"],"雾":["霧"],"溪":["渓","渓"],"习":["習"],"袭":["襲"],"玺":["璽"],"铣":["銑"],"戏":["戯"],"系":["係"],"细":["細"],"舄":["潟"],"辖":["轄"],"吓":["嚇"],"纤":["繊"],"鲜":["鮮"],"闲":["閑","閑"],"贤":["賢"],"显":["顕"],"险":["険"],"现":["現"],"宪":["憲"],"陷":["陥"],"缐":["線"],"乡":["郷"],"详":["詳"],"响":["響"],"项":["項"],"晓":["暁"],"笑":["咲"],"效":["効"],"协":["協"],"胁":["脅"],"写":["寫"],"谢":["謝"],"兴":["興"],"许":["許"],"叙":["敘"],"绪":["緒"],"续":["続"],"轩":["軒"],"悬":["懸"],"选":["選"],"勋":["勲"],"熏":["薫"],"寻":["尋"],"训":["訓"],"压":["圧"],"亚":["亜"],"烟":["煙"],"严":["厳"],"盐":["塩"],"颜":["顔"],"验":["験"],"扬":["揚"],"阳":["陽"],"养":["養"],"样":["様"],"窑":["窯"],"谣":["謡"],"摇":["揺"],"药":["薬"],"业":["業"],"叶":["葉"],"谒":["謁"],"壹":["壱"],"仪":["儀"],"遗":["遺"],"亿":["億"],"义":["義"],"忆":["憶"],"议":["議"],"异":["異"],"译":["訳"],"驿":["駅"],"阴":["陰"],"银":["銀"],"饮":["飲"],"隐":["隠"],"樱":["桜"],"萤":["蛍"],"营":["営"],"应":["応"],"拥":["擁"],"咏":["詠"],"踊":["踴"],"优":["優"],"忧":["憂"],"邮":["郵"],"犹":["猶"],"游":["遊"],"诱":["誘"],"余":["餘"],"鱼":["魚"],"娱":["娯"],"渔":["漁"],"与":["與"],"语":["語"],"狱":["獄"],"预":["預"],"谕":["諭"],"御":["禦"],"誉":["譽"],"园":["園"],"员":["員"],"缘":["縁"],"远":["遠"],"愿":["願"],"约":["約"],"阅":["閲"],"跃":["躍"],"云":["雲","伝"],"运":["運"],"韵":["韻"],"杂":["雑"],"灾":["災"],"载":["載"],"暂":["暫"],"赞":["贊","賛"],"脏":["臓"],"则":["則"],"责":["責"],"择":["択"],"泽":["沢"],"贼":["賊"],"增":["増"],"赠":["贈"],"札":["劄"],"诈":["詐"],"斋":["斎"],"债":["債"],"栈":["桟"],"战":["戦"],"张":["張"],"长":["長"],"帐":["帳"],"胀":["脹"],"诏":["詔"],"着":["著"],"贞":["貞"],"针":["針"],"侦":["偵"],"诊":["診"],"阵":["陣"],"镇":["鎮"],"争":["爭"],"证":["證","証"],"织":["織"],"执":["執"],"值":["値"],"职":["職"],"纸":["紙"],"质":["質"],"滞":["滯"],"终":["終"],"钟":["鐘"],"种":["種"],"冢":["塚"],"众":["眾","衆"],"轴":["軸"],"昼":["晝"],"诸":["諸"],"嘱":["囑"],"贮":["貯"],"驻":["駐"],"筑":["築"],"专":["専"],"转":["転"],"妆":["妝"],"庄":["荘"],"装":["裝"],"壮":["壯"],"状":["狀"],"坠":["墜"],"浊":["濁"],"咨":["諮"],"资":["資"],"姊":["姉"],"渍":["漬"],"总":["総"],"纵":["縦"],"组":["組"],"醉":["酔"],"闷":["悶"],"灌":["浣"],"仿":["倣"],"做":["作"],"划":["画"],"叛":["反"],"圆":["円"],"吊":["弔"],"雕":["彫"],"征":["徴"],"托":["託"],"采":["採"],"榨":["搾"],"拨":["発"],"升":["昇"],"晚":["晩"],"桌":["卓"],"沉":["沈"],"准":["準"],"泼":["発"],"滨":["浜"],"熔":["溶"],"牺":["犠"],"瓣":["弁"],"愈":["癒"],"炮":["砲"],"丝":["糸"],"线":["線"],"县":["県"],"缺":["欠"],"罐":["缶"],"艺":["芸"],"制":["製"],"志":["誌"],"讽":["風"],"丰":["豊"],"辨":["弁"],"辩":["弁"],"周":["週"],"醋":["酢"],"铸":["鋳"],"只":["隻"],"龙":["竜"]}');
;// ./src/plugin/suggest/dict.ts
var _context;



const CN2JP = Object.freeze(dict_namespaceObject);
const JP2CN = Object.freeze(from_entries_default()(flat_map_default()(_context = Object.entries(CN2JP)).call(_context, _ref => {
  let [k, v] = _ref;
  return v.map(vv => [vv, k]);
})));
/** 检查是否为 ASCII */
function isASCII(text) {
  for (let i = 0, n = text.length; i < n; i++) {
    if (text.charCodeAt(i) >= 0x80) return false;
  }
  return true;
}
/** 转为中文汉字 */
function toCN(text) {
  let ret = '';
  for (const ch of text) {
    ret += JP2CN[ch] || ch;
  }
  return ret;
}
const MAX_COMBINE = 16;
/** 转为日文汉字 */
function toJP(text) {
  let res = [''];
  for (const ch of text) {
    const jp = CN2JP[ch];
    let rep;
    if (jp) {
      if (jp.length > 1 && res.length < MAX_COMBINE) {
        const tmp = [];
        for (const r of res) {
          for (const j of jp) {
            tmp.push(r + j);
          }
        }
        res = tmp;
        continue;
      }
      rep = jp[0];
    } else {
      rep = ch;
    }
    for (let i = 0, n = res.length; i < n; i++) {
      res[i] += rep;
    }
  }
  return res;
}
;// ./src/plugin/suggest/index.ts








const NS_SCORE = Object.freeze({
  o: 10,
  loc: 9,
  f: 9,
  m: 8.5,
  x: 8,
  l: 2,
  a: 2.5,
  cos: 2.4,
  g: 2.2,
  p: 3.3,
  c: 2.8,
  r: 1,
  '': 0 // rows
});
/** 生成完成项 */
function markTag(tag, search, term) {
  let score = 0;
  const match = {};
  const {
    key,
    ns,
    cn,
    introSearch
  } = tag;
  const keyIdx = key.indexOf(search);
  if (keyIdx >= 0) {
    score += NS_SCORE[ns] * (search.length + 1) / key.length * (keyIdx === 0 ? 2 : 1);
    match.key = {
      start: keyIdx,
      end: keyIdx + search.length
    };
  }
  const name = cn.toLowerCase();
  const nameIdx = name.indexOf(search);
  if (nameIdx >= 0) {
    score += NS_SCORE[ns] * (search.length + 1) / name.length * (nameIdx === 0 ? 2 : 1);
    match.cn = {
      start: nameIdx,
      end: nameIdx + search.length
    };
  }
  if (introSearch) {
    const introIdx = introSearch.indexOf(search);
    if (introIdx >= 0) {
      score += NS_SCORE[ns] * (search.length + 1) / introSearch.length * 0.5;
    }
  }
  if (score === 0) return undefined;
  return {
    tag,
    term,
    match,
    score
  };
}
let Suggest = class Suggest {
  constructor(logger, messaging, tagging) {
    this.logger = logger;
    this.messaging = messaging;
    this.tagging = tagging;
    this.tagList = [];
    this.sha = '';
    messaging.on('suggest-tag', args => {
      return this.getSuggests(args.term, args.limit);
    });
    this.update().catch(logger.error);
  }
  async update() {
    const v = await this.messaging.emit('get-tag-map', {
      ifNotMatch: this.sha
    });
    if (v.map) this.tagList = Object.values(v.map);
    this.sha = v.sha;
  }
  async getSuggests(term) {
    let limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    if (!term) return [];
    await this.update();
    if (!this.tagList.length) return [];
    const timer = this.logger.time("\u641C\u7D22\uFF1A".concat(term));
    let sTerm = term.toLowerCase().normalize();
    const col = sTerm.indexOf(':');
    let tagList = this.tagList;
    if (col >= 1) {
      const ns = this.tagging.ns(sTerm.slice(0, col));
      if (ns) {
        sTerm = sTerm.slice(col + 1);
        tagList = tagList.filter(tag => tag.ns === ns);
      }
    }
    if (starts_with_default()(sTerm).call(sTerm, '"')) {
      sTerm = sTerm.slice(1);
    }
    const suggestions = [];
    let terms = [sTerm];
    if (!isASCII(sTerm)) {
      terms.push(toCN(sTerm), ...toJP(sTerm));
      terms = [...new Set(terms)];
    }
    const nTerms = terms.length;
    for (const tag of tagList) {
      for (let i = 0; i < nTerms; i++) {
        const st = markTag(tag, terms[i], term);
        if (st) {
          suggestions.push(st);
          break;
        }
      }
    }
    sort_default()(suggestions).call(suggestions, (st1, st2) => st2.score - st1.score);
    if (limit > 0 && suggestions.length > limit) {
      suggestions.length = limit;
    }
    this.logger.debug("\u641C\u7D22\uFF1A".concat(term, " (").concat(terms.join(', '), ")"), suggestions);
    timer.end();
    return suggestions;
  }
};
Suggest = __decorate([Service(), __metadata("design:paramtypes", [Logger, messaging_Messaging, Tagging])], Suggest);

;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js

var ObjectUnsubscribedError = createErrorClass(function (_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = 'ObjectUnsubscribedError';
    this.message = 'object unsubscribed';
  };
});
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/Subject.js






var Subject = function (_super) {
  tslib_es6_extends(Subject, _super);
  function Subject() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject.prototype._throwIfClosed = function () {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject.prototype.next = function (value) {
    var _this = this;
    errorContext(function () {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    });
  };
  Subject.prototype.error = function (err) {
    var _this = this;
    errorContext(function () {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject.prototype.complete = function () {
    var _this = this;
    errorContext(function () {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject.prototype.unsubscribe = function () {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject.prototype, "observed", {
    get: function get() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject.prototype._trySubscribe = function (subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject.prototype._subscribe = function (subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject.prototype._innerSubscribe = function (subscriber) {
    var _this = this;
    var _a = this,
      hasError = _a.hasError,
      isStopped = _a.isStopped,
      observers = _a.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function () {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject.prototype._checkFinalizedStatuses = function (subscriber) {
    var _a = this,
      hasError = _a.hasError,
      thrownError = _a.thrownError,
      isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject.prototype.asObservable = function () {
    var observable = new Observable();
    observable.source = this;
    return observable;
  };
  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject;
}(Observable);

var AnonymousSubject = function (_super) {
  tslib_es6_extends(AnonymousSubject, _super);
  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject.prototype.next = function (value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject.prototype.error = function (err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject.prototype.complete = function () {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject;
}(Subject);

;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js


var BehaviorSubject = function (_super) {
  tslib_es6_extends(BehaviorSubject, _super);
  function BehaviorSubject(_value) {
    var _this = _super.call(this) || this;
    _this._value = _value;
    return _this;
  }
  Object.defineProperty(BehaviorSubject.prototype, "value", {
    get: function get() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  });
  BehaviorSubject.prototype._subscribe = function (subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  };
  BehaviorSubject.prototype.getValue = function () {
    var _a = this,
      hasError = _a.hasError,
      thrownError = _a.thrownError,
      _value = _a._value;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  };
  BehaviorSubject.prototype.next = function (value) {
    _super.prototype.next.call(this, this._value = value);
  };
  return BehaviorSubject;
}(Subject);

;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/EmptyError.js

var EmptyError = createErrorClass(function (_super) {
  return function EmptyErrorImpl() {
    _super(this);
    this.name = 'EmptyError';
    this.message = 'no elements in sequence';
  };
});
;// ./node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/firstValueFrom.js



function firstValueFrom(source, config) {
  var hasConfig = typeof config === 'object';
  return new (promise_default())(function (resolve, reject) {
    var subscriber = new SafeSubscriber({
      next: function next(value) {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: function complete() {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}
;// ./src/plugin/tag-database.ts



function tag_database_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function tag_database_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? tag_database_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : tag_database_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }








/* 数据存储结构版本, 如果不同 系统会自动执行 storageTagData 重新构建数据*/
/* 注意这是本地数据结构, 主要用于 storageTagData内解析方法发生变化, 重新加载数据的, 与线上无关*/
const DATA_STRUCTURE_VERSION = 12;
let TagDatabase = class TagDatabase {
  get mapView() {
    return this.tagMap.pipe(filter(v => v != null));
  }
  constructor(storage, logger, messaging, tagging) {
    this.storage = storage;
    this.logger = logger;
    this.messaging = messaging;
    this.tagging = tagging;
    this.tagMap = new BehaviorSubject(undefined);
    messaging.on('get-tag', key => {
      return firstValueFrom(this.mapView.pipe(map(v => v.map[key])));
    });
    messaging.on('get-tag-map', _ref => {
      let {
        ifNotMatch
      } = _ref;
      return firstValueFrom(this.mapView.pipe(map(v => {
        if (ifNotMatch === v.sha) return {
          sha: v.sha,
          map: undefined
        };
        return {
          sha: v.sha,
          map: v.map
        };
      })));
    });
    messaging.on('get-tag-sha', () => {
      return firstValueFrom(this.mapView.pipe(map(v => v.sha)));
    });
    this.init().catch(logger.error);
  }
  async init() {
    const data = await this.storage.get('databaseInfo');
    const dataMap = await this.storage.get('database');
    this.messaging.on('update-tag', data => this.update(data.base, data.override));
    if ((data === null || data === void 0 ? void 0 : data.version) !== DATA_STRUCTURE_VERSION || !dataMap || !data.sha) {
      this.tagMap.next({
        sha: '',
        map: {}
      });
      const timer = this.logger.time('数据结构变化, 重新构建数据');
      await this.storage.migrate();
      await this.messaging.emit('update-database', {
        force: true
      });
      timer.end();
    } else {
      this.tagMap.next(tag_database_objectSpread(tag_database_objectSpread({}, data), {}, {
        map: dataMap
      }));
    }
    this.logger.log('标签数据库初始化完成');
    this.tagMap.subscribe({
      next: () => {
        void this.messaging.emit('tag-updated', undefined, true);
      }
    });
  }
  update(baseDB, overrideDb) {
    const timer = this.logger.time('构建数据');
    const sha = baseDB.head.sha + (overrideDb ? "+".concat(overrideDb.head.sha) : '');
    const map = {};
    const check = Date.now();
    const handleTag = (namespace, key, tag) => {
      if (typeof key != 'string') return;
      if (includes_default()(key).call(key, '_')) key = key.replace(/_/g, ' ');
      key = trim_default()(key).call(key);
      if (!key) return;
      const fullKey = this.tagging.fullKey({
        namespace,
        key
      });
      if (map[fullKey]) return;
      const name = this.tagging.removePara(tag.name) || key;
      const ehTag = {
        ns: this.tagging.ns(namespace),
        key,
        name: name,
        cn: this.tagging.removeImagesAndEmoji(name),
        intro: '',
        links: '',
        introSearch: ''
      };
      if (tag.intro) {
        ehTag.intro = tag.intro;
        ehTag.introSearch += '\0' + this.tagging.removeHtmlTags(tag.intro).toLowerCase();
      }
      if (tag.links) {
        ehTag.links = tag.links;
        ehTag.introSearch += '\0' + this.tagging.removeHtmlTags(tag.links).toLowerCase();
      }
      map[fullKey] = ehTag;
    };
    for (const baseNsData of baseDB.data) {
      const namespace = baseNsData.namespace;
      if (namespace === 'rows') continue;
      const overrideNsData = overrideDb === null || overrideDb === void 0 ? void 0 : overrideDb.data.find(ns => ns.namespace === namespace);
      for (const key in baseNsData.data) {
        const baseTag = baseNsData.data[key];
        const overrideTag = overrideNsData === null || overrideNsData === void 0 ? void 0 : overrideNsData.data[key];
        if (overrideTag) {
          handleTag(namespace, key, {
            name: overrideTag.name || baseTag.name,
            intro: overrideTag.intro || baseTag.intro,
            links: overrideTag.links || baseTag.links
          });
        } else {
          handleTag(namespace, key, baseTag);
        }
      }
      if (overrideNsData !== null && overrideNsData !== void 0 && overrideNsData.data) {
        for (const key in overrideNsData.data) {
          const overrideTag = overrideNsData.data[key];
          handleTag(namespace, key, overrideTag);
        }
      }
    }
    this.tagMap.next({
      map,
      sha
    });
    // 后台继续处理，直接返回
    this.storage.set('databaseInfo', {
      sha,
      check,
      version: DATA_STRUCTURE_VERSION
    }).catch(this.logger.error);
    this.storage.set('database', map).catch(this.logger.error);
    timer.end();
  }
};
TagDatabase = __decorate([Service(), __metadata("design:paramtypes", [Storage, Logger, messaging_Messaging, Tagging])], TagDatabase);

;// ./src/plugin/image-context-menu.ts






let ImageContextMenu = class ImageContextMenu {
  constructor() {
    this.documentUrlPatterns = ["*://".concat(EX, "/*"), "*://".concat(EXU, "/*"), "*://".concat(EH, "/*"), "*://*.".concat(EX, "/*"), "*://*.".concat(EXU, "/*"), "*://*.".concat(EH, "/*")];
    this.title = "\u663E\u793A\u6240\u6709\u5305\u542B\u6B64\u56FE\u50CF\u7684\u56FE\u5E93";
    this.targetUrlPatterns = ["*://".concat(EX, "/t/*.jpg"), "*://".concat(EXU, "/t/*.jpg"), "*://s.".concat(EX, "/t/*.jpg"), "*://s.".concat(EXU, "/t/*.jpg"), "*://".concat(EHGT, "/*.jpg"), "*://ul.".concat(EHGT, "/*.jpg"), "*://*.".concat(HATH, ":*/h/*"), "*://*.".concat(HATH, "/h/*")];
    this.contexts = ['image', 'link'];
    this.onclick = info => {
      if (!info.url) return;
      const url = new (url_default())(info.url);
      const match = /[a-f0-9]{40}/i.exec(url.pathname);
      if (!match) return;
      let base = "https://".concat(EX);
      if (isEhGt(url.hostname)) base = "https://".concat(EH);else if (isUnion(url.hostname)) base = "http://".concat(EXU);
      openInTab("".concat(base, "/?f_shash=").concat(match[0]));
    };
    this.init();
  }
  init() {
    createMenu(this);
  }
};
ImageContextMenu = __decorate([Service(), __metadata("design:paramtypes", [])], ImageContextMenu);

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/number/parse-float.js
var parse_float = __webpack_require__(73678);
var parse_float_default = /*#__PURE__*/__webpack_require__.n(parse_float);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js-pure@3.48.0/node_modules/core-js-pure/full/instance/slice.js
var slice = __webpack_require__(88249);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js-pure@3.48.0/node_modules/core-js-pure/full/object/freeze.js
var freeze = __webpack_require__(4512);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js-pure@3.48.0/node_modules/core-js-pure/full/object/define-properties.js
var define_properties = __webpack_require__(12484);
;// ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/helpers/esm/taggedTemplateLiteral.js



function _taggedTemplateLiteral(e, t) {
  return t || (t = slice(e).call(e, 0)), freeze(define_properties(e, {
    raw: {
      value: freeze(t)
    }
  }));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js
var parse_int = __webpack_require__(62285);
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/reflect/set.js
var reflect_set = __webpack_require__(32536);
var set_default = /*#__PURE__*/__webpack_require__.n(reflect_set);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime-corejs3@7.29.0/node_modules/@babel/runtime-corejs3/core-js-stable/weak-map.js
var weak_map = __webpack_require__(18479);
;// ./node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.js
var _t$litHtmlVersions;





/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = global_this,
  i = t => t,
  s = t.trustedTypes,
  e = s ? s.createPolicy("lit-html", {
    createHTML: t => t
  }) : void 0,
  h = "$lit$",
  o = "lit$".concat(Math.random().toFixed(9).slice(2), "$"),
  n = "?" + o,
  r = "<".concat(n, ">"),
  l = document,
  c = () => l.createComment(""),
  a = t => null === t || "object" != typeof t && "function" != typeof t,
  u = Array.isArray,
  d = t => u(t) || "function" == typeof (t === null || t === void 0 ? void 0 : t[Symbol.iterator]),
  f = "[ \t\n\f\r]",
  v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  _ = /-->/g,
  m = />/g,
  p = RegExp(">|".concat(f, "(?:([^\\s\"'>=/]+)(").concat(f, "*=").concat(f, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"), "g"),
  g = /'/g,
  $ = /"/g,
  y = /^(?:script|style|textarea|title)$/i,
  x = t => function (i) {
    for (var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      s[_key - 1] = arguments[_key];
    }
    return {
      _$litType$: t,
      strings: i,
      values: s
    };
  },
  b = x(1),
  w = x(2),
  T = x(3),
  E = Symbol.for("lit-noChange"),
  A = Symbol.for("lit-nothing"),
  C = new weak_map(),
  P = l.createTreeWalker(l, 129);
function V(t, i) {
  if (!u(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e ? e.createHTML(i) : i;
}
const N = (t, i) => {
  const s = t.length - 1,
    e = [];
  let n,
    l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "",
    c = v;
  for (let i = 0; i < s; i++) {
    var _context;
    const s = t[i];
    let a,
      u,
      d = -1,
      f = 0;
    for (; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);) f = c.lastIndex, c === v ? "!--" === u[1] ? c = _ : void 0 !== u[1] ? c = m : void 0 !== u[2] ? (y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = p) : void 0 !== u[3] && (c = p) : c === p ? ">" === u[0] ? (c = n !== null && n !== void 0 ? n : v, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? p : '"' === u[3] ? $ : g) : c === $ || c === g ? c = p : c === _ || c === m ? c = v : (c = p, n = void 0);
    const x = c === p && starts_with(_context = t[i + 1]).call(_context, "/>") ? " " : "";
    l += c === v ? s + r : d >= 0 ? (e.push(a), s.slice(0, d) + h + s.slice(d) + o + x) : s + o + (-2 === d ? i : x);
  }
  return [V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")), e];
};
class S {
  constructor(_ref, e) {
    let {
      strings: t,
      _$litType$: i
    } = _ref;
    let r;
    this.parts = [];
    let l = 0,
      a = 0;
    const u = t.length - 1,
      d = this.parts,
      [f, v] = N(t, i);
    if (this.el = S.createElement(f, e), P.currentNode = this.el.content, 2 === i || 3 === i) {
      const t = this.el.content.firstChild;
      t.replaceWith(...t.childNodes);
    }
    for (; null !== (r = P.nextNode()) && d.length < u;) {
      if (1 === r.nodeType) {
        if (r.hasAttributes()) for (const t of r.getAttributeNames()) if (ends_with(t).call(t, h)) {
          const i = v[a++],
            s = r.getAttribute(t).split(o),
            e = /([.?@])?(.*)/.exec(i);
          d.push({
            type: 1,
            index: l,
            name: e[2],
            strings: s,
            ctor: "." === e[1] ? I : "?" === e[1] ? L : "@" === e[1] ? z : H
          }), r.removeAttribute(t);
        } else starts_with(t).call(t, o) && (d.push({
          type: 6,
          index: l
        }), r.removeAttribute(t));
        if (y.test(r.tagName)) {
          const t = r.textContent.split(o),
            i = t.length - 1;
          if (i > 0) {
            r.textContent = s ? s.emptyScript : "";
            for (let s = 0; s < i; s++) r.append(t[s], c()), P.nextNode(), d.push({
              type: 2,
              index: ++l
            });
            r.append(t[i], c());
          }
        }
      } else if (8 === r.nodeType) if (r.data === n) d.push({
        type: 2,
        index: l
      });else {
        let t = -1;
        for (; -1 !== (t = r.data.indexOf(o, t + 1));) d.push({
          type: 7,
          index: l
        }), t += o.length - 1;
      }
      l++;
    }
  }
  static createElement(t, i) {
    const s = l.createElement("template");
    return s.innerHTML = t, s;
  }
}
function M(t, i) {
  var _s$_$Co, _h, _h2, _h2$_$AO, _s$_$Co2;
  let s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
  let e = arguments.length > 3 ? arguments[3] : undefined;
  if (i === E) return i;
  let h = void 0 !== e ? (_s$_$Co = s._$Co) === null || _s$_$Co === void 0 ? void 0 : _s$_$Co[e] : s._$Cl;
  const o = a(i) ? void 0 : i._$litDirective$;
  return ((_h = h) === null || _h === void 0 ? void 0 : _h.constructor) !== o && ((_h2 = h) !== null && _h2 !== void 0 && (_h2$_$AO = _h2._$AO) !== null && _h2$_$AO !== void 0 && _h2$_$AO.call(_h2, !1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? ((_s$_$Co2 = s._$Co) !== null && _s$_$Co2 !== void 0 ? _s$_$Co2 : s._$Co = [])[e] = h : s._$Cl = h), void 0 !== h && (i = M(t, h._$AS(t, instance_values(i)), h, e)), i;
}
class R {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var _t$creationScope;
    const {
        el: {
          content: i
        },
        parts: s
      } = this._$AD,
      e = ((_t$creationScope = t === null || t === void 0 ? void 0 : t.creationScope) !== null && _t$creationScope !== void 0 ? _t$creationScope : l).importNode(i, !0);
    P.currentNode = e;
    let h = P.nextNode(),
      o = 0,
      n = 0,
      r = s[0];
    for (; void 0 !== r;) {
      var _r;
      if (o === r.index) {
        let i;
        2 === r.type ? i = new k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new Z(h, this, t)), this._$AV.push(i), r = s[++n];
      }
      o !== ((_r = r) === null || _r === void 0 ? void 0 : _r.index) && (h = P.nextNode(), o++);
    }
    return P.currentNode = l, e;
  }
  p(t) {
    let i = 0;
    for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
}
class k {
  get _$AU() {
    var _this$_$AM$_$AU, _this$_$AM;
    return (_this$_$AM$_$AU = (_this$_$AM = this._$AM) === null || _this$_$AM === void 0 ? void 0 : _this$_$AM._$AU) !== null && _this$_$AM$_$AU !== void 0 ? _this$_$AM$_$AU : this._$Cv;
  }
  constructor(t, i, s, e) {
    var _e$isConnected;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = (_e$isConnected = e === null || e === void 0 ? void 0 : e.isConnected) !== null && _e$isConnected !== void 0 ? _e$isConnected : !0;
  }
  get parentNode() {
    var _t;
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === ((_t = t) === null || _t === void 0 ? void 0 : _t.nodeType) && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t) {
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
    t = M(this, t, i), a(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== E && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : d(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t : this.T(l.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var _this$_$AH;
    const {
        values: i,
        _$litType$: s
      } = t,
      e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = S.createElement(V(s.h, s.h[0]), this.options)), s);
    if (((_this$_$AH = this._$AH) === null || _this$_$AH === void 0 ? void 0 : _this$_$AH._$AD) === e) this._$AH.p(i);else {
      const t = new R(e, this),
        s = t.u(this.options);
      t.p(i), this.T(s), this._$AH = t;
    }
  }
  _$AC(t) {
    let i = C.get(t.strings);
    return void 0 === i && C.set(t.strings, i = new S(t)), i;
  }
  k(t) {
    u(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
      e = 0;
    for (const h of t) e === i.length ? i.push(s = new k(this.O(c()), this.O(c()), this, this.options)) : s = i[e], s._$AI(h), e++;
    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
  }
  _$AR() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._$AA.nextSibling;
    let s = arguments.length > 1 ? arguments[1] : undefined;
    for ((_this$_$AP = this._$AP) === null || _this$_$AP === void 0 ? void 0 : _this$_$AP.call(this, !1, !0, s); t !== this._$AB;) {
      var _this$_$AP;
      const s = i(t).nextSibling;
      i(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var _this$_$AP2;
    void 0 === this._$AM && (this._$Cv = t, (_this$_$AP2 = this._$AP) === null || _this$_$AP2 === void 0 ? void 0 : _this$_$AP2.call(this, t));
  }
}
class H {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, s, e, h) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = A;
  }
  _$AI(t) {
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
    let s = arguments.length > 2 ? arguments[2] : undefined;
    let e = arguments.length > 3 ? arguments[3] : undefined;
    const h = this.strings;
    let o = !1;
    if (void 0 === h) t = M(this, t, i, 0), o = !a(t) || t !== this._$AH && t !== E, o && (this._$AH = t);else {
      const e = t;
      let n, r;
      for (t = h[0], n = 0; n < h.length - 1; n++) r = M(this, e[s + n], i, n), r === E && (r = this._$AH[n]), o || (o = !a(r) || r !== this._$AH[n]), r === A ? t = A : t !== A && (t += (r !== null && r !== void 0 ? r : "") + h[n + 1]), this._$AH[n] = r;
    }
    o && !e && this.j(t);
  }
  j(t) {
    t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t !== null && t !== void 0 ? t : "");
  }
}
class I extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === A ? void 0 : t;
  }
}
class L extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== A);
  }
}
class z extends H {
  constructor(t, i, s, e, h) {
    super(t, i, s, e, h), this.type = 5;
  }
  _$AI(t) {
    var _M;
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
    if ((t = (_M = M(this, t, i, 0)) !== null && _M !== void 0 ? _M : A) === E) return;
    const s = this._$AH,
      e = t === A && s !== A || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive,
      h = t !== A && (s === A || e);
    e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var _this$options$host, _this$options;
    "function" == typeof this._$AH ? this._$AH.call((_this$options$host = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.host) !== null && _this$options$host !== void 0 ? _this$options$host : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Z {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    M(this, t);
  }
}
const j = {
    M: h,
    P: o,
    A: n,
    C: 1,
    L: N,
    R,
    D: d,
    V: M,
    I: k,
    H,
    N: L,
    U: z,
    B: I,
    F: Z
  },
  B = t.litHtmlPolyfillSupport;
B !== null && B !== void 0 && B(S, k), ((_t$litHtmlVersions = t.litHtmlVersions) !== null && _t$litHtmlVersions !== void 0 ? _t$litHtmlVersions : t.litHtmlVersions = []).push("3.3.2");
const D = (t, i, s) => {
  var _s$renderBefore;
  const e = (_s$renderBefore = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s$renderBefore !== void 0 ? _s$renderBefore : i;
  let h = e._$litPart$;
  if (void 0 === h) {
    var _s$renderBefore2;
    const t = (_s$renderBefore2 = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s$renderBefore2 !== void 0 ? _s$renderBefore2 : null;
    e._$litPart$ = h = new k(i.insertBefore(c(), t), t, void 0, s !== null && s !== void 0 ? s : {});
  }
  return h._$AI(t), h;
};

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.3_webpack@5.105.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/.pnpm/less-loader@12.3.1_less@4.5.1_webpack@5.105.0/node_modules/less-loader/dist/cjs.js!./src/plugin/popup/index.less
var popup = __webpack_require__(25483);
;// ./src/plugin/popup/index.less

      
      
      
      
      
      
      
      
      

var popup_options = {};

popup_options.styleTagTransform = (styleTagTransform_default());
popup_options.setAttributes = (setAttributesWithoutAttributes_default());
popup_options.insert = insertBySelector_default().bind(null, ":root");
popup_options.domAPI = (styleDomAPI_default());
popup_options.insertStyleElement = (insertStyleElement_default());

var popup_update = injectStylesIntoStyleTag_default()(popup/* default */.A, popup_options);




       /* harmony default export */ const plugin_popup = (popup/* default */.A && popup/* default */.A.locals ? popup/* default */.A.locals : undefined);

;// ./src/plugin/popup/index.ts


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;





function popup_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function popup_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? popup_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : popup_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }











let Popup = class Popup {
  constructor(logger, messaging, storage, time) {
    this.logger = logger;
    this.messaging = messaging;
    this.storage = storage;
    this.time = time;
    this.defaults = () => ({
      sha: '',
      info: '',
      updateTime: '',
      updateTimeFull: '',
      newSha: '',
      versionInfo: '',
      updateAvailable: false,
      updateButtonDisabled: false,
      showSettingPanel: false,
      progress: 0,
      animationState: 0,
      configValue: popup_objectSpread({}, this.configOriginal)
    });
    this.testAnimationIndex = 0;
    this.testAnimationList = [[1, 0], [1, 10], [1, 30], [1, 80], [1, 100], [2, 100], [2, 5], [1, 5], [0, 0]];
    this.openLink = ev => {
      if (ev.target instanceof HTMLAnchorElement) {
        const href = ev.target.href;
        if (href && !starts_with_default()(href).call(href, document.location.origin + document.location.pathname)) {
          ev.preventDefault();
          openInTab(href);
          this.provider.close();
        }
      }
    };
    this.downloadStatus = async data => {
      this.state.updateButtonDisabled = data.run;
      this.state.animationState = data.run ? 1 : 0;
      this.state.info = data.info;
      this.state.progress = data.progress || 0;
      if (data.complete) {
        await sleep(1000);
        this.state.progress = 100;
        this.state.animationState = 2;
        this.state.updateButtonDisabled = false;
        await this.checkVersion();
        await sleep(500);
        this.state.progress = 5;
        await sleep(500);
        this.state.animationState = 1;
      }
    };
  }
  async loadConfig() {
    this.configOriginal = popup_objectSpread(popup_objectSpread({}, this.storage.defaults.config), await this.storage.get('config'));
    this.state.configValue = popup_objectSpread({}, this.configOriginal);
  }
  testAnimation() {
    const a = this.testAnimationList[this.testAnimationIndex];
    this.testAnimationIndex++;
    if (!this.testAnimationList[this.testAnimationIndex]) {
      this.testAnimationIndex = 0;
    }
    this.state.animationState = a[0];
    this.state.progress = a[1];
  }
  async checkVersion() {
    var _await$this$storage$g;
    this.state.versionInfo = '检查中...';
    const currentSha = await this.messaging.emit('get-tag-sha', undefined);
    const updateTime = (_await$this$storage$g = await this.storage.get('databaseInfo')) === null || _await$this$storage$g === void 0 ? void 0 : _await$this$storage$g.check;
    this.state.sha = currentSha ? currentSha.slice(0, 7) : 'N/A';
    this.state.updateTime = updateTime ? this.time.diff(updateTime) : 'N/A';
    this.state.updateTimeFull = updateTime ? new Date(updateTime).toLocaleString() : 'N/A';
    try {
      const data = await this.messaging.emit('check-database', {
        force: true
      });
      this.logger.log('Release Data', data);
      const hasNewData = this.state.updateAvailable = !starts_with_default()(currentSha).call(currentSha, data.sha);
      if (hasNewData) {
        this.state.newSha = data.sha.slice(0, 7);
        this.state.versionInfo = "\u6709\u66F4\u65B0\uFF01";
      } else {
        this.state.versionInfo = '已是最新版本';
      }
    } catch (ex) {
      this.logger.error('获取失败', ex);
      const message = (ex instanceof Error ? ex.message : '未知错误') || '未知错误';
      this.state.versionInfo = "\u83B7\u53D6\u5931\u8D25\uFF1A".concat(message);
    }
  }
  async updateButtonClick() {
    this.state.updateButtonDisabled = true;
    await this.messaging.emit('update-database', {
      force: true,
      recheck: false
    });
  }
  logoTemplate() {
    let progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    const PushRodStyle = "transform: translate(".concat(progress / 400 * 70, "px, 0)");
    const EnemaStyle = "transform: scaleX(".concat(progress / 100, ")");
    return w(_templateObject || (_templateObject = _taggedTemplateLiteral(["<svg width=\"160\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">\n            <defs>\n                <clipPath id=\"clip\">\n                    <rect width=\"200\" height=\"200\" />\n                </clipPath>\n            </defs>\n            <g id=\"Syringe\" clip-path=\"url(#clip)\">\n                <g id=\"PushRod\" style=\"", "\">\n                    <g transform=\"translate(-39 -312)\">\n                        <g transform=\"translate(131 403)\" fill-bg stroke-accent stroke-width=\"6\">\n                            <rect width=\"78\" height=\"18\" rx=\"6\" stroke=\"none\" />\n                            <rect x=\"3\" y=\"3\" width=\"72\" height=\"12\" rx=\"3\" fill=\"none\" />\n                        </g>\n                        <g transform=\"translate(203 391)\" fill-bg stroke-accent stroke-width=\"6\">\n                            <rect width=\"18\" height=\"43\" rx=\"9\" stroke=\"none\" />\n                            <rect x=\"3\" y=\"3\" width=\"12\" height=\"37\" rx=\"6\" fill=\"none\" />\n                        </g>\n                    </g>\n                </g>\n                <g transform=\"translate(56 85)\" fill-bg stroke-accent stroke-width=\"6\">\n                    <rect width=\"83\" height=\"30\" rx=\"6\" stroke=\"none\" />\n                    <rect x=\"3\" y=\"3\" width=\"77\" height=\"24\" rx=\"3\" fill=\"none\" />\n                </g>\n                <g id=\"Enema\" style=\"", "\">\n                    <rect width=\"70\" height=\"27\" transform=\"translate(61 86)\" fill-sa />\n                </g>\n                <path\n                    id=\"Enema2\"\n                    d=\"M27.426,86.36s5.65.007,13.6.006S57.64,83.357,57.64,83.357L38.015,102.982,24.409,89.377l3.015-3.015Z\"\n                    transform=\"translate(107.906 10.036) rotate(45)\"\n                    fill-sa\n                />\n                <g transform=\"translate(-39 -312)\">\n                    <g transform=\"translate(95 397)\" fill=\"none\" stroke-accent stroke-width=\"6\">\n                        <rect width=\"83\" height=\"30\" rx=\"6\" stroke=\"none\" />\n                        <rect x=\"3\" y=\"3\" width=\"77\" height=\"24\" rx=\"3\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(82 403)\" fill-sa stroke-accent stroke-width=\"6\">\n                        <rect width=\"19\" height=\"18\" rx=\"6\" stroke=\"none\" />\n                        <rect x=\"3\" y=\"3\" width=\"13\" height=\"12\" rx=\"3\" fill=\"none\" />\n                    </g>\n                    <rect width=\"29\" height=\"6\" rx=\"3\" transform=\"translate(58 409)\" fill-accent />\n                    <g transform=\"translate(172 381)\" fill-bg stroke-accent stroke-width=\"6\">\n                        <rect width=\"18\" height=\"62\" rx=\"9\" stroke=\"none\" />\n                        <rect x=\"3\" y=\"3\" width=\"12\" height=\"56\" rx=\"6\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(119 398)\" fill-bg stroke-accent stroke-width=\"3\">\n                        <rect width=\"4\" height=\"11\" rx=\"2\" stroke=\"none\" />\n                        <rect x=\"1.5\" y=\"1.5\" width=\"1\" height=\"8\" rx=\"0.5\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(131 398)\" fill-bg stroke-accent stroke-width=\"3\">\n                        <rect width=\"4\" height=\"11\" rx=\"2\" stroke=\"none\" />\n                        <rect x=\"1.5\" y=\"1.5\" width=\"1\" height=\"8\" rx=\"0.5\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(144 398)\" fill-bg stroke-accent stroke-width=\"3\">\n                        <rect width=\"4\" height=\"11\" rx=\"2\" stroke=\"none\" />\n                        <rect x=\"1.5\" y=\"1.5\" width=\"1\" height=\"8\" rx=\"0.5\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(156 398)\" fill-bg stroke-accent stroke-width=\"3\">\n                        <rect width=\"4\" height=\"11\" rx=\"2\" stroke=\"none\" />\n                        <rect x=\"1.5\" y=\"1.5\" width=\"1\" height=\"8\" rx=\"0.5\" fill=\"none\" />\n                    </g>\n                </g>\n            </g>\n        </svg>"])), PushRodStyle, EnemaStyle);
  }
  changeConfigValue(key, value) {
    this.state.configValue = popup_objectSpread(popup_objectSpread({}, this.state.configValue), {}, {
      [key]: value
    });
  }
  changeConfigUnsaved() {
    if (!this.configOriginal) return false;
    const keys = [...Object.keys(this.configOriginal), ...Object.keys(this.state.configValue)];
    return keys.some(key => this.configOriginal[key] !== this.state.configValue[key]);
  }
  async saveConfig() {
    await this.storage.set('config', this.state.configValue);
    await this.loadConfig();
    await sleep(200);
    this.provider.close();
  }
  settingPanelTemplate() {
    const state = this.state;
    const checkboxList = [{
      key: 'translateUi',
      name: '翻译界面'
    }, {
      key: 'translateTag',
      name: '翻译标签'
    }, {
      key: 'translateTimestamp',
      name: '翻译时间戳'
    }, {
      key: 'showIntroduce',
      name: '标签介绍'
    }, {
      key: 'showIcon',
      name: '显示标签图标'
    }, {
      key: 'tagTip',
      name: '搜索提示'
    }, {
      key: 'autoUpdate',
      name: '自动更新'
    }];
    return b(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            <div id=\"ehs-setting-panel\" class=\"ehs-panel ", "\">\n                <div class=\"header\">\n                    <div>\u8BBE\u7F6E</div>\n                    <div class=\"cushion\"></div>\n                    <div>\n                        <a\n                            href=\"#\"\n                            @click=\"", "\"\n                            >\u2715</a\n                        >\n                    </div>\n                </div>\n                <form id=\"settingForm\" class=\"content\">\n                    ", "\n                    <div class=\"image-level\">\n                        <p class=\"range-title\">\n                            \u4ECB\u7ECD\u56FE\u7247:\n                            <span\n                                >", "</span\n                            >\n                        </p>\n                        <div class=\"range-box\">\n                            <input\n                                type=\"range\"\n                                min=\"0\"\n                                max=\"300\"\n                                @change=", "\n                                .value=\"", "\"\n                            />\n                        </div>\n                        <div class=\"range-label\" @click=\"", "\">\n                            <a href=\"#\" @click=\"", "\"\n                                >\u7981\u7528</a\n                            >\n                            <a href=\"#\" @click=\"", "\"\n                                >\u975EH</a\n                            >\n                            <a href=\"#\" @click=\"", "\"\n                                >R18</a\n                            >\n                            <a href=\"#\" @click=\"", "\"\n                                >R18G</a\n                            >\n                        </div>\n                    </div>\n                    <div class=\"override-db\">\n                        <label for=\"overrideDbUrl\">\u5916\u90E8\u6570\u636E\u5E93: </label>\n                        <input\n                            id=\"overrideDbUrl\"\n                            type=\"text\"\n                            pattern=\"https?://.+|\"\n                            value=\"", "\"\n                            placeholder=\"https://eg.com/data.html.json\"\n                            @change=\"", "\"\n                        />\n                    </div>\n                </form>\n                <button\n                    @click=\"", "\"\n                    class=\"action ", "\"\n                >\n                    \u4FDD\u5B58\n                </button>\n            </div>\n        "])), state.showSettingPanel ? 'ehs-show' : '', ev => {
      state.showSettingPanel = false;
      ev.preventDefault();
    }, checkboxList.map(item => b(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n                            <div class=\"checkbox-item\">\n                                <label>\n                                    <input\n                                        type=\"checkbox\"\n                                        @change=", "\n                                        ?checked=\"", "\"\n                                    />\n                                    ", "\n                                    <svg\n                                        class=\"", "\"\n                                        viewBox=\"0 0 100 100\"\n                                        xmlns=\"http://www.w3.org/2000/svg\"\n                                    >\n                                        <path d=\"M 10 10 L 90 90\"></path>\n                                        <path d=\"M 90 10 L 10 90\"></path>\n                                    </svg>\n                                </label>\n                            </div>\n                        "])), e => this.changeConfigValue(item.key, e.target.checked), this.state.configValue[item.key], item.name, this.state.configValue[item.key] ? 'checked' : '')), ['隐藏全部', '隐藏色情图片', '隐藏引起不适的图片', '全部显示'][state.configValue.introduceImageLevel], e => {
      const value = Math.round(parse_int_default()(e.target.value, 10) / 100);
      this.changeConfigValue('introduceImageLevel', value + 1);
      this.changeConfigValue('introduceImageLevel', value);
    }, String(state.configValue.introduceImageLevel * 100), ev => ev.preventDefault(), () => this.changeConfigValue('introduceImageLevel', ImageLevel.hide), () => this.changeConfigValue('introduceImageLevel', ImageLevel.nonH), () => this.changeConfigValue('introduceImageLevel', ImageLevel.r18), () => this.changeConfigValue('introduceImageLevel', ImageLevel.r18g), this.state.configValue.overrideDbUrl || '', e => {
      var _context;
      const el = e.target;
      const value = trim_default()(_context = String(el.value || '')).call(_context);
      el.value = value;
      let valid = true;
      if (value) {
        try {
          const u = new (url_default())(value);
          if (u.protocol !== 'http:' && u.protocol !== 'https:') {
            valid = false;
          }
        } catch (_unused) {
          valid = false;
        }
      }
      el.classList.toggle('invalid', !valid);
      if (valid) {
        this.changeConfigValue('overrideDbUrl', value);
      }
    }, async () => {
      await this.saveConfig();
    }, this.changeConfigUnsaved() ? 'primary' : '');
  }
  mainPanelTemplate() {
    const state = this.state;
    return b(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<div id=\"ehs-main-panel\" class=\"ehs-panel ", "\">\n            <div class=\"header\">\n                <div>\n                    <a href=\"", "\" class=\"monospace minor\">v", "</a>\n                </div>\n                <div class=\"cushion\"></div>\n                <div>\n                    <a\n                        id=\"settingSwitch\"\n                        href=\"#\"\n                        @click=\"", "\"\n                        >\u8BBE\u7F6E</a\n                    >\n                </div>\n            </div>\n            <div class=\"content\">\n                <div class=\"logo-box\" style=\"height: 205px;\">\n                    <div\n                        class=\"logo ", "\"\n                        @click=\"", "\"\n                    >\n                        ", "\n                    </div>\n                    <div id=\"info\">", "</div>\n                </div>\n                <table>\n                    <tr>\n                        <th>\u6807\u7B7E\u7248\u672C\uFF1A</th>\n                        <td>\n                            <a href=\"https://github.com/EhTagTranslation/Database/tree/", "\" class=\"monospace\"\n                                >", "</a\n                            >\n                        </td>\n                    </tr>\n                    <tr>\n                        <th>\u4E0A\u6B21\u66F4\u65B0\uFF1A</th>\n                        <td>\n                            <span>", "</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <th>\u66F4\u65B0\u68C0\u67E5\uFF1A</th>\n                        <td>\n                            <span class=\"", "\">\n                                ", "\n                                <a\n                                    class=\"monospace ", "\"\n                                    href=\"https://github.com/EhTagTranslation/Database/tree/", "\"\n                                >\n                                    ", "\n                                </a>\n                            </span>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <button\n                @click=\"", "\"\n                ?disabled=", "\n                class=\"action ", "\"\n                id=\"updateButton\"\n            >\n                \u66F4\u65B0\n            </button>\n        </div>"])), state.showSettingPanel ? 'ehs-hide' : '', packageJson.homepage, packageJson.version, ev => {
      state.showSettingPanel = true;
      ev.preventDefault();
    }, ['', 'prominent', 'prominent injection'][state.animationState] || '', () => {
      this.testAnimation();
    }, this.logoTemplate(state.progress), state.info, state.sha, state.sha || ' --- ', state.updateTime || ' --- ', state.updateAvailable ? 'hasNew' : '', state.versionInfo, state.updateAvailable ? '' : 'hidden', state.newSha, state.newSha || '', () => this.updateButtonClick(), state.updateButtonDisabled, state.updateAvailable ? 'primary' : '');
  }
  template() {
    const state = this.state;
    return b(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([" <div id=\"eh-syringe-popup-root\">\n            ", " ", "\n        </div>"])), this.mainPanelTemplate(), state.configValue ? this.settingPanelTemplate() : A);
  }
  mount(el, provider) {
    if (this.el != null) throw new Error('Injected twice');
    this.el = el;
    this.provider = provider;
    this.resetState();
    this.updateView();
    provider.onopen(() => this.onopen().catch(this.logger.error));
    provider.onclose(() => this.onclose());
  }
  resetState() {
    this.state = new Proxy(this.defaults(), {
      set: (target, key, value, receiver) => {
        const r = set_default()(target, key, value, receiver);
        this.updateView();
        return r;
      }
    });
  }
  async onopen() {
    var _this$downloadStatusS;
    this.resetState();
    await this.loadConfig();
    this.updateView();
    await sleep(0);
    await this.checkVersion();
    (_this$downloadStatusS = this.downloadStatusSub) !== null && _this$downloadStatusS !== void 0 ? _this$downloadStatusS : this.downloadStatusSub = this.messaging.on('updating-database', this.downloadStatus);
    this.el.addEventListener('click', this.openLink);
  }
  onclose() {
    if (this.downloadStatusSub) {
      this.messaging.off(this.downloadStatusSub);
      this.downloadStatusSub = undefined;
    }
    this.el.removeEventListener('click', this.openLink);
    this.state.showSettingPanel = false;
  }
  updateView() {
    D(this.template(), this.el);
  }
};
Popup = __decorate([Service(), __metadata("design:paramtypes", [Logger, messaging_Messaging, Storage, DateTime])], Popup);

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.3_webpack@5.105.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/.pnpm/less-loader@12.3.1_less@4.5.1_webpack@5.105.0/node_modules/less-loader/dist/cjs.js!./src/user-script/popup-host.less
var popup_host = __webpack_require__(17075);
;// ./src/user-script/popup-host.less

      
      
      
      
      
      
      
      
      

var popup_host_options = {};

popup_host_options.styleTagTransform = (styleTagTransform_default());
popup_host_options.setAttributes = (setAttributesWithoutAttributes_default());
popup_host_options.insert = insertBySelector_default().bind(null, ":root");
popup_host_options.domAPI = (styleDomAPI_default());
popup_host_options.insertStyleElement = (insertStyleElement_default());

var popup_host_update = injectStylesIntoStyleTag_default()(popup_host/* default */.A, popup_host_options);




       /* harmony default export */ const user_script_popup_host = (popup_host/* default */.A && popup_host/* default */.A.locals ? popup_host/* default */.A.locals : undefined);

;// ./src/user-script/popup-host.ts







function getNumber(key, defaultValue) {
  const value = localStorage.getItem(key);
  if (!value) return defaultValue;
  const parsed = parse_float_default()(value);
  if (Number.isNaN(parsed)) return defaultValue;
  return parsed;
}
function clamp(value, min, max) {
  if (value < min) value = min;else if (value > max) value = max;
  return value;
}
const clampX = value => clamp(value, 4, document.documentElement.clientWidth - 44);
const clampY = value => clamp(value, 4, document.documentElement.clientHeight - 44);
function dragButton(el, click) {
  const initX = clampX(getNumber("eh-popup-button-x", 0.02) * document.documentElement.clientWidth);
  const initY = clampY(getNumber("eh-popup-button-y", 0.02) * document.documentElement.clientHeight);
  // set the element's init position:
  el.style.bottom = "".concat(initY, "px");
  el.style.right = "".concat(initX, "px");
  let mouseX = 0,
    mouseY = 0,
    startX = 0,
    startY = 0;
  el.addEventListener('pointerdown', dragMouseDown, {
    passive: false
  });
  el.addEventListener('click', elementClick, {
    passive: false
  });
  let moved = false;
  function dragMouseDown(e) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    startX = mouseX = e.clientX;
    startY = mouseY = e.clientY;
    moved = false;
    document.addEventListener('pointerup', closeDragElement, {
      passive: false
    });
    document.addEventListener('pointermove', elementDrag, {
      passive: false
    });
  }
  function elementDrag(e) {
    e.preventDefault();
    const currentX = parse_float_default()(el.style.right);
    const currentY = parse_float_default()(el.style.bottom);
    // calculate the new cursor position:
    const diffX = mouseX - e.clientX;
    const diffY = mouseY - e.clientY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    const nextX = clampX(currentX + diffX);
    const nextY = clampY(currentY + diffY);
    // set the element's new position:
    el.style.right = "".concat(nextX, "px");
    el.style.bottom = "".concat(nextY, "px");
    if (Math.abs(mouseX - startX) + Math.abs(mouseY - startY) > 10) {
      moved = true;
    }
  }
  function closeDragElement(e) {
    e.preventDefault();
    // stop moving when mouse button is released:
    document.removeEventListener('pointerup', closeDragElement);
    document.removeEventListener('pointermove', elementDrag);
    const finalX = clampX(parse_float_default()(el.style.right));
    const finalY = clampY(parse_float_default()(el.style.bottom));
    el.style.right = "".concat(finalX, "px");
    el.style.bottom = "".concat(finalY, "px");
    localStorage.setItem("eh-popup-button-x", String(finalX / document.documentElement.clientWidth));
    localStorage.setItem("eh-popup-button-y", String(finalY / document.documentElement.clientHeight));
  }
  function elementClick(e) {
    if (moved) {
      moved = false;
      return;
    }
    click(e);
  }
}
function shouldShowPopup() {
  if (isHathNetwork(location.hostname)) return false;
  if (/^\/mpv\//i.test(location.pathname) || location.pathname === '/archiver.php' || location.pathname === '/gallerytorrents.php' || location.pathname === '/gallerypopups.php') return false;
  return true;
}
function createPopup() {
  if (!shouldShowPopup()) {
    return;
  }
  const button = document.body.appendChild(document.createElement('div'));
  button.id = 'eh-syringe-popup-button';
  button.title = packageJson.displayName;
  const badge = button.appendChild(document.createElement('div'));
  badge.id = 'eh-syringe-popup-badge';
  setBadge({
    text: ''
  });
  const popupBack = document.body.appendChild(document.createElement('div'));
  popupBack.id = 'eh-syringe-popup-back';
  popupBack.lang = 'zh-hans';
  const popup = popupBack.appendChild(document.createElement('div'));
  popup.id = 'eh-syringe-popup';
  const closeListeners = [];
  const openListeners = [];
  popupBack.classList.add('close');
  popupBack.ontransitionend = ev => {
    if (ev.target !== popupBack) return;
    if (popupBack.classList.contains('opening')) {
      popupBack.classList.remove('opening', 'close');
      popupBack.classList.add('open');
    }
    if (popupBack.classList.contains('closing')) {
      popupBack.classList.remove('closing', 'open');
      popupBack.classList.add('close');
      closeListeners.forEach(l => l());
    }
  };
  const open = () => {
    openListeners.forEach(l => l());
    popupBack.classList.add('opening');
  };
  const close = () => {
    popupBack.classList.add('closing');
  };
  services_Container.get(Popup).mount(popup, {
    close: close,
    onopen(listener) {
      openListeners.push(listener);
    },
    onclose(listener) {
      closeListeners.push(listener);
    }
  });
  popupBack.addEventListener('click', ev => {
    if (ev.target === popupBack && popupBack.classList.contains('open')) close();
  });
  dragButton(button, () => {
    if (popupBack.classList.contains('close')) open();
  });
}
;// ./src/user-script/index.ts













function main() {
  services_Container.get(DatabaseUpdater);
  services_Container.get(TagDatabase);
  services_Container.get(Syringe);
  function start() {
    services_Container.get(TagContextMenu);
    services_Container.get(ImageContextMenu);
    services_Container.get(Suggest);
    services_Container.get(AutoUpdate);
    services_Container.get(TagTip);
    services_Container.get(Introduce);
    createPopup();
  }
  ready(start);
}
// 为轻型用户脚本实现添加简单过滤
const LOADED_KEY = "EhTagTranslation:EhSyringeLoaded";
if (!(LOADED_KEY in window)) {
  Object.defineProperty(window, LOADED_KEY, {
    value: true
  });
  if (isValidHost(location.hostname)) {
    main();
  }
}
})();

/******/ })()
;
//# sourceMappingURL=https://github.com/EhTagTranslation/EhSyringe/releases/download/v3.4.6/ehsyringe.user.js.map