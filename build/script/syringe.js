/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/syringe.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/style/syringe.less":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--5-3!./src/style/syringe.less ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div.gt,div.gtl,td.tc{white-space:nowrap}div.gt,div.gtl{height:16px;line-height:16px}textarea[name=expungexpl]{display:block}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/data/ui-data.ts":
/*!*****************************!*\
  !*** ./src/data/ui-data.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.uiData = {
    'Report Gallery': '举报图库',
    'Archive Download': '存档下载',
    'Torrent Download': '种子下载',
    'Petition to Expunge': '申请删除',
    'Petition to Rename': '申请重命名',
    ' Read Later': ' 稍后再读',
    ' Added to Read Later': ' 已添加稍后再读',
    'language:': '语言:',
    'parody:': '原作:',
    'character:': '角色:',
    'group:': '社团:',
    'artist:': '作者:',
    'female:': '女性:',
    'male:': '男性:',
    'misc:': '其他:',
    'Posted:': '发布于:',
    'Parent:': '父级:',
    'Visible:': '显示:',
    'Language:': '语言:',
    'File Size:': '文件大小:',
    'Length:': '页数:',
    'Favorited:': '收藏:',
    'Rating:': '评分:',
    'Average:': '平均:',
    ' Add to Favorites': ' 添加到收藏夹',
    'Normal': '普通',
    'Large': '大图',
    ' Normal': '普通',
    ' Large': '大图',
    '4 rows': '4 行',
    '10 rows': '10 行',
    '20 rows': '20 行',
    '40 rows': '40 行',
    'Score ': '分数 ',
    'Uploader Comment': '上传者评论',
    'Vote+': '👍',
    'Vote-': '👎',
    'Vote Up': '👍',
    'Vote Down': '👎',
    'Show Tagged Galleries': '含有该标签的图库',
    'Show Tag Definition': '显示标签介绍',
    'Add New Tag': '添加新标签',
    'Post New Comment': '发送新的评论',
    'Front Page': '首页',
    'Front': '首',
    ' Page': '页',
    'Watched': '关注',
    'Popular': '流行',
    'Torrents': '种子',
    'Fav': '收',
    'orite': '藏夹',
    'Home': '首页',
    'Settings': '设置',
    'My ': '我的',
    'Uploads': '上传',
    'Toplists': '排行榜',
    'Bounties': '悬赏',
    'News': '新闻',
    'Forums': '论坛',
    'My Tags': '我的标签',
    'Wiki': '维基',
    'Doujinshi': '同人本',
    'Manga': '漫画',
    'Artist CG': '画师集',
    'Game CG': '游戏集',
    'Western': '西方',
    'Non-H': '非H',
    'Image Set': '图集',
    // 'Cosplay': '',
    'Asian Porn': '亚洲色情',
    'Misc': '其他',
    'Show Advanced Options': '显示高级选项',
    'Show File Search': '文件搜索',
    'E-Hentai Galleries: The Free Hentai Doujinshi, Manga and Image Gallery System': 'E-Hentai: 一个免费的绅士同人本、漫画和图片的图库系统',
    'Visit the E-Hentai Forums': '前往E-Hentai论坛',
    'Play the HentaiVerse Minigame': '玩HentaiVerse小游戏',
    'Lo-Fi Version': '低保真版本',
    'Please read the ': '请阅读',
    'Terms of Service': '服务条款',
    ' before participating with or uploading any content to this site.': '后再使用该网站或上传资源',
    'Enter new tags, separated with comma': '输入新标签, 用逗号分隔',
    'Search Keywords': '搜索关键词',
    ' Watched': ' 关注',
    ' Hidden': ' 隐藏',
    ' Enable': '启用',
    'Selected Profile:': '当前配置:',
    'Image Load Settings': '图片加载设置',
    'Do you wish to load images through the Hentai@Home Network, if available?': '如果可用，是否希望通过hentai@home网络加载图像？',
    ' Yes (Recommended)': ' 是 (推荐)',
    ' No (You will not be able to browse as many pages. Enable only if having problems.)': ' 否（您将无法同时浏览多个页面。只有出现问题时才启用。）',
    'Image Size Settings': '图片大小设置',
    'Normally, images are resampled to 1280 pixels of horizontal resolution for online viewing. You can alternatively select one of the following resample resolutions. To avoid murdering the staging servers, resolutions above 1280x are temporarily restricted to donators, people with any hath perk, and people with a UID below 3,000,000.': '通常情况，图像将重采样到1280像素宽度以用于在线浏览，您也可以选择以下重新采样分辨率。' +
        '但是为了避免负载过高，高于1280像素将只供给于赞助者、特殊贡献者，以及UID小于3,000,000的用户',
    "Gallery Name Display": "图库的名字显示",
    "Archiver Settings": "归档设置",
    "Front Page Settings": "首页设置",
    "Favorites": "收藏",
    "Ratings": "评分",
    "Tag Namespaces": "标签组",
    "Excluded Languages": "排除语言",
    "Search Result Count": "搜索结果数",
    "Thumbnail Settings": "缩略图设置",
    "Gallery Comments": "图库评论",
    "Gallery Tags": "图库标签",
    "Gallery Page Numbering": "图库页面页码",
    "Hentai@Home Local Network Host": "Hentai@Home本地网络服务器",
    'Horizontal:': '宽/横向',
    'Vertical:': '高/纵向',
    ' pixels': ' 像素',
    ' reclass': ' 重新分类',
    ' language': ' 语言',
    ' parody': ' 原作',
    ' character': ' 角色',
    ' group': ' 社团',
    ' artist': ' 作者',
    ' male': ' 男性',
    ' female': ' 女性',
    'Thumbnail Scaling': '缩略图缩放',
    'Thumbnails on the thumbnail and extended gallery list views can be scaled to a custom value between 75% and 150%.': '可以缩放为75%到150%之间的自定义值。',
    'Viewport Override': '移动端虚拟宽度',
    'Allows you to override the virtual width of the site for mobile devices. This is normally determined automatically by your device based on its DPI. Sensible values at 100% thumbnail scale are between 640 and 1400.': '允许你覆盖移动设备的虚拟宽度, 默认是根据DPI自动计算的, 100%缩略图比例下的合理值在640到1400之间',
    'Tag Filtering Threshold': '标签筛选阈值',
    'Tag Watching Threshold': '标签订阅阈值',
    'Excluded Uploaders': '屏蔽的上传者',
    'If you wish to hide galleries from certain uploaders from the gallery list and searches, add them below. Put one username per line.': '如果你希望再图库中和搜索中隐藏某个上传者的话,请把他们的用户名填写再下方,每行一个.',
    'Note that galleries from these uploaders will never appear regardless of your search query.': '注意: 无论你如何搜索, 这些上传者都不会出现.',
    "Many galleries have both an English/Romanized title and a title in Japanese script. Which gallery name would you like as default?": '很多图库都同时拥有英文或者日文标题，你想默认显示哪一个？',
    ' Default Title': '默认标题(英文)',
    ' Japanese Title (if available)': '日文标题(如果有)',
    'Each letter represents one star. The default RRGGB means R(ed) for the first and second star, G(reen) for the third and fourth, and B(lue) for the fifth. You can also use (Y)ellow for the normal stars. Any five-letter R/G/B/Y combo works.': '每一个字幕代表一颗星, 默认的RRGGB表示第一第二颗星显示为红色R(ed), 第三第四颗星现为是绿色G(reen),第五颗星显示为蓝色B(lue). 你可以使用黄色来表示普通的星,R/G/B/Y任何五个组合都是有效的.',
    "While the site will automatically scale down images to fit your screen width, you can also manually restrict the maximum display size of an image. Like the automatic scaling, this does not resample the image, as the resizing is done browser-side. (0 = no limit)": "虽然图片会自动根据窗口缩小，你也可以手动设置最大大小，图片并没有重新采样（0为不限制）",
    "The default behavior for the Archiver is to confirm the cost and selection for original or resampled archive, then present a link that can be clicked or copied elsewhere. You can change this behavior here.": "默认归档下载方式为手动选择(原画质或压缩画质),然后手动改复制或点击下载链接,你可以修改归档下载方式",
    "Which display mode would you like to use on the front and search pages?": "你想在搜索页面显示哪种样式?",
    "What categories would you like to show by default on the front page and in searches?": "你希望在首页上看到哪些类别?",
    "Here you can choose and rename your favorite categories.": "在这里你可以重命名你的收藏夹",
    "You can also select your default sort order for galleries on your favorites page. Note that favorites added prior to the March 2016 revamp did not store a timestamp, and will use the gallery posted time regardless of this setting.": "你也可以选择收藏夹中默认排序.请注意，2016年3月改版之前加入收藏夹的画册并未保存收藏时间，会以画册发布时间代替.",
    "If you want to exclude certain namespaces from a default tag search, you can check those below. Note that this does not prevent galleries with tags in these namespaces from appearing, it just makes it so that when searching tags, it will forego those namespaces.": "如果要从默认标签搜索中排除某些标签组，可以检查以下内容。 请注意，这不会阻止在这些标签组中的标签的展示区出现，它只是在搜索标签时排除这些标签组。",
    "If you wish to hide galleries in certain languages from the gallery list and searches, select them from the list below.": "如果您希望以图库列表中的某些语言隐藏图库并进行搜索，请从下面的列表中选择它们。",
    "Note that matching galleries will never appear regardless of your search query.": "请注意，无论搜索查询如何，匹配的图库都不会出现。",
    "How many results would you like per page for the index/search page and torrent search pages? (Hath Perk: Paging Enlargement Required)": "搜索页面每页显示多少条数据？ （Hath Perk：付费扩展）",
    "How would you like the mouse-over thumbnails on the front page to load when using List Mode?": "你希望鼠标悬停缩略图何时加载?",
    "You can set a default thumbnail configuration for all galleries you visit.": "图库页面缩略图设置",
    "Sort order for gallery comments:": "评论排序方式:",
    "Show gallery comment votes:": "显示评论投票数:",
    "Sort order for gallery tags:": "图库标签排序方式:",
    ["Show gallery page numbers:\n\t"]: "显示图库页码:\n\t",
    "This setting can be used if you have a H@H client running on your local network with the same public IP you browse the site with. Some routers are buggy and cannot route requests back to its own IP; this allows you to work around this problem.": "如果你本地安装了H@H客户端,本地ip与浏览网站的公共ip相同,一些路由器不支持回流导致无法访问到自己,你可以设置这里来解决",
    "If you are running the client on the same PC you browse from, use the loopback address (127.0.0.1:port). If the client is running on another computer on your network, use its local network IP. Some browser configurations prevent external web sites from accessing URLs with local network IPs, the site must then be whitelisted for this to work.": "如果在同一台电脑上访问网站和运行客户端，请使用本地回环地址(127.0.0.1:端口号). 如果客户端在网络上的其他计算机运行,请使用那台机器的内网ip. 某些浏览器的配置可能阻止外部网站访问本地网络,你必须将网站列入白名单才能工作.",
    " Manual Select, Manual Start (Default)": " 手动选择,手动下载 (默认)",
    " Manual Select, Auto Start": " 手动选择,自动下载",
    " Auto Select Original, Manual Start": " 自动选择原始画质,手动下载",
    " Auto Select Original, Auto Start": " 自动选择原始画质,自动下载",
    " Auto Select Resample, Manual Start": " 自动选择压缩画质,手动下载",
    " Auto Select Resample, Auto Start": " 自动选择压缩画质,自动下载",
    "List View": "列表视图",
    "Thumbnail View": "缩略图视图",
    " By last gallery update time": "以最新的画册更新时间排序",
    " By favorited time": "以收藏时间排序",
    " 25 results": "25个",
    " 50 results": "50个",
    " 100 results": "100个",
    " 200 results": "200个",
    " On mouse-over (pages load faster, but there may be a slight delay before a thumb appears)": "鼠标悬停时 (页面加载快,缩略图加载有延迟)",
    " On page load (pages take longer to load, but there is no delay for loading a thumb after the page has loaded)": "页面加载时 (页面加载时间更长,但是显示的时候无需等待)",
    " Oldest comments first": "最早的评论",
    " Recent comments first": "最新的评论",
    " By highest score": "分数最高",
    " On score hover or click": "悬停或点击时",
    " Always": "总是",
    " Alphabetical": "按字母排序",
    " By tag power": "按标签权重",
    " No": "否",
    " Yes": "是",
    "Size:": "大小:",
    "Rows:": "行数:",
    "pixels": "像素",
    "Original": "原始语言",
    "Translated": "翻译版",
    "Rewrite": "改编版",
    "All": "所有",
    "Japanese": "日文",
    "English": "英文",
    "Chinese": "中文",
    "Dutch": "荷兰语",
    "French": "法语",
    "German": "德语",
    "Hungarian": "匈牙利",
    "Italian": "意呆利",
    "Korean": "韩语",
    "Polish": "波兰语",
    "Portuguese": "葡萄牙语",
    "Russian": "俄语",
    "Spanish": "西班牙语",
    "Thai": "泰语",
    "Vietnamese": "越南语",
    "N/A": "无效",
    "Other": "其他",
    "Published Galleries": '发布图库',
    "Gallery Name ": '图库名称',
    'Date Added ': '添加时间 ',
    'Public Category': '发布类别',
    'Available Actions': '操作',
    'Files': '文件数',
    'Unsorted': '未分类',
    'Go To Gallery': '查看图库',
    'Stats': '统计',
    'Manage': '管理',
    'Collapse Open Folders': '折叠文件夹',
    'Set public category for selected galleries: ': '设置选中的发布分类: ',
    'Move selected galleries to folder: ': '移动到文件夹: ',
    'Create New Gallery': '创建新图库',
    'Manage Folders': '管理文件夹',
    'Gallery List': '图库列表',
    'Create Gallery': '创建图库',
    'My Galleries': '我的图库',
    'Main Gallery Title': '主标题',
    'The main english or romanized title for this gallery.': '这个图库的主标题, 英文或者罗马音',
    'Japanese Script Title': '日文标题',
    'The original title in Japanese script, if applicable.': '原始的日文标题(如果有)',
    'Gallery Folder': '图库文件夹',
    'The folder this gallery will be displayed under in the gallery list. This is only used to help you organize your gallery uploads.': '图库文件夹仅在我的图库列表中显示, 仅用于帮助整理上传的图库.',
    'Any comments or additional relevant information for this gallery. This will always show up as the topmost comment, and cannot be voted down.': '关于此图库的任何评论或其他相关信息。将始终显示在评论的最顶部，并且不能投票。',
    'or new folder: ': '新文件夹: ',
    'Date Added:': '添加时间:',
    'Date Posted:': '发布时间:',
    'Not created yet': '尚未创建',
    'Not published yet': '尚未发布',
    'Uploaded Files:': '上传文件数:',
    'Total Filesize:': '总体积:',
    'Parent Gallery:': '父级画廊:',
    'Child Gallery:': '子画廊:',
    'Expunged:': '删除:',
    'No (Unpublished)': 'No (尚未发布)',
    'Show Public Gallery': '查看图库',
    'Show Gallery Stats': '查看统计',
    'Delete Gallery': '删除图库',
    'Make this gallery publicly available as:': '将图库发布到:',
    'I have read and agree with the ': '我已阅读并同意',
    'Upload Files': '上传文件',
    'Select one or more image or archive files and click Start Upload to add files to this gallery.': '选择一个或多个图像或存档文件, 然后点击"开始上传",以添加文集到此库.',
    '\n\t\tNo files have been added yet\n\t\t': '尚未添加任何文件',
    'Folder Name': '文件夹名称',
    'Display Order': '显示顺序',
    '(No folders have been added yet.)': '（尚未添加文件夹）',
    'Use Posted': '发布时间',
    'Posted': '发布时间',
    'Use Favorited': '收藏时间',
    'Favorited': '收藏时间',
    'Search:': '搜索:',
    ' Name': ' 名称',
    ' Tags': ' 标签',
    ' Note': ' 备注',
    'Show All Favorites': '显示所有收藏夹',
    'Minimal': '最小化',
    'Minimal+': '最小化+关注标签',
    'Compact': '紧凑+标签',
    'Extended': '扩展',
    'Thumbnail': '缩略图',
    'Published': '发布时间',
    'Title': '标题',
    'Uploader': '上传者',
    'Search Gallery Name': '搜索名称',
    'Search Gallery Tags': '搜索标签',
    'Search Gallery Description': '搜索介绍',
    'Search Torrent Filenames': '搜素种子文件名',
    'Only Show Galleries With Torrents': '只显示有种子的图库',
    'Search Low-Power Tags': '搜索Low-Power标签',
    'Search Downvoted Tags': '搜索Downvoted标签',
    'Show Expunged Galleries': '显示已经删除的库',
    'Minimum Rating:': '最低评分',
    'Between ': '介于 ',
    ' and ': ' 和 ',
    ' pages': ' 页',
    // 'Hide Advanced Options': '隐藏高级选项',
    'Disable default filters for: ': '禁用默认筛选器',
    'Language': '语言',
    'Tags': '标签',
    '2 stars': '2星',
    '3 stars': '3星',
    '4 stars': '4星',
    '5 stars': '5星',
    'Status: ': '状态: ',
    'Seeded': '有种',
    'Unseeded': '无种',
    '         Show: ': ' |  显示: ',
    'All Torrents': '所有种子',
    'Only My Torrents': '只显示我的',
    '\nNote that you cannot add torrents directly to this page. To upload torrents to this system, visit the torrent screen for a gallery.\n': '注意:  你不能直接吧种子添加到此页面. 请在图库中上传.',
    'Added': '添加于',
    'Torrent Name': '种子名',
    'Gallery': '图库id',
    'Size': '体积',
    'Seeds': '种子',
    'Peers': '在线',
    'Seeds:': '种子:',
    'Peers:': '在线:',
    'DLers': '在线',
    'Downloads:': '已下载:',
    'Completes': '已下载',
    'DLs': '已下载',
    'Visitor Statistics': '访客统计',
    'Galleries All-Time': '所有时间',
    'Galleries Past Year': '过去一年',
    'Galleries Past Month': '过去一个月',
    'Galleries Yesterday': '昨天',
    'Not in top 1000': '1000名以外',
    'Ranking': '名次',
    'Score': '分数',
    'Visits': '访问',
    'Hits': '点击',
    'Yearly Stats': '年度统计',
    'Last 12 Months': '最近12个月',
    'Daily Stats': '每日统计',
    'The number of total visits on your galleries.': '您的图库总访问次数',
    'The number of total image accesses on your galleries.': '您图库中图片访问次数',
    'Back To Gallery': '返回图库',
    'Gallery Toplists': '图库排行',
    'Uploader Toplists': '上传者排行',
    'Uploader All-Time': '所有时间',
    'Uploader Past Year': '过去一年',
    'Uploader Past Month': '过去一个月',
    'Uploader Yesterday': '昨天',
    'Tagging Toplists': '标记者排行',
    'Tagging All-Time': '所有时间',
    'Tagging Past Year': '过去一年',
    'Tagging Past Month': '过去一个月',
    'Tagging Yesterday': '昨天',
    'Hentai@Home Toplists': 'Hentai@Home 排行',
    'Hentai@Home All-Time': '所有时间',
    'Hentai@Home Past Year': '过去一年',
    'Hentai@Home Past Month': '过去一个月',
    'Hentai@Home Yesterday': '昨天',
    'EHTracker Toplists': '做种排行',
    'EHTracker All-Time': '所有时间',
    'EHTracker Past Year': '过去一年',
    'EHTracker Past Month': '过去一个月',
    'EHTracker Yesterday': '昨天',
    'Rating & Reviewing Toplists': '打分&评论 排行',
    'Rating & Reviewing All-Time': '所有时间',
    'Rating & Reviewing Past Year': '过去一年',
    'Rating & Reviewing Past Month': '过去一个月',
    'Rating & Reviewing Yesterday': '昨天',
    'EHG Toplists': 'EHG 排行榜',
    ' toplist': '排行',
    'Image Limits': '图片限制',
    'You are currently: ': '你位于:',
    'on the ': ' 在 ',
    'Total GP Gained': '获得的总GP',
    'GP from gallery visits': 'GP 来自画廊浏览',
    'GP from torrent completions': 'GP 来自种子完成',
    'GP from archive downloads': 'GP 来自存档下载',
    'GP from Hentai@Home': 'GP 来自 Hentai@Home',
    ' uploaded': '已上传',
    'downloaded': '已下载',
    'up/down ratio': '分享比',
    'torrent completes': '完成种子',
    'gallery completes': '完成图库',
    'seedmins': '做种时长',
    'Show My Torrents': '显示我的种子',
    'If you misplace any of your personalized torrents, hit the button below to reset your key.': '如果你错误的分发了个性化种子,请点击下面的按钮重置您的KEY',
    'This will immediately invalidate all of your personalized torrents in play.': '这将立即注销您所有的个性化种子,会立即失效.',
    'Your current key is: ': '你当前的KEY是: ',
    'EHTracker': '种子追踪器',
    'Base': '基础',
    'Awards': '奖励',
    'Tagging': '打标签',
    'Level': '等级',
    'Donations': '捐赠',
    'Forum Activity': '论坛活跃',
    'Uploads/H@H': '上传/H@H',
    'Account Age': '账户年龄',
    '(capped to 25)': '(不超过25)',
    'Overview': '概况',
    'My Stats': '我的统计',
    'My Settings': '我的设置',
    'Hath Perks': 'Hath商店',
    'Hath Exchange': 'Hath交易',
    'GP Exchange': 'GP交易',
    // 'Credit Log': '信用记录',
    // 'Karma Log': 'Karma记录',
    'Apply Filter': '应用筛选',
    'Clear Filter': '清理筛选',
    'Estimated Size:   ': '预计大小:   ',
    'Download Cost:   ': '下载费用:   ',
    'Download Original Archive': '下载原始档案',
    'Download Resample Archive': '下载重采样档案',
    'No hits found': '什么也没有',
    'Uploader:': '上传者:',
    'New Torrents:': '新种子:',
    'Information': '信息',
    'Close Window': '关闭窗口',
    'Upload Torrent': '上传种子',
    "\n\t\tYou can add a torrent for this gallery by uploading it here. The maximum torrent file size is 10 MB.": '您可以在这里上传来为此库添加种子。最大Torrent文件大小为10MB。',
    "\n\t\tNote that you have to download the finished torrent from this site after uploading for stats to be recorded.\n\t": '请注意，您必须在上传后从该站点下载个性化种子，以便记录统计信息。',
    "\n\t\tIf you are creating the torrent yourself, set this as announce tracker: ": '如果您自己创建Torrent，请将其设置为AnnounceTracker：',
    "Personalized Torrent": '个性化种子',
    "Redistributable Torrent": '可再分发种子',
    "(Just For You - this makes sure to record your stats)\n": '(只属于你 - 确保记录你的下载统计信息)',
    "(use if you want a file you can post or give to others)": '(如果您想再发布或提供给其他人使用)',
    'Back to Index': '返回',
    'Vote to Expunge': '投票删除',
    'No comments were given for this torrent.': '没有对这个种子的评论',
    "Please choose a color to file this favorite gallery under. You can also add a note to it if you wish.": '请选择一个颜色标记你的收藏, 你也可以加一些备注.',
    "Favorite Note (Max 200 Characters)": "收藏备注 (最多200字符)",
    'Add to Favorites': '添加到收藏',
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
    'It is the dawn of a new day!': '新的一天开始了!',
    'Reflecting on your journey so far, you find that you are a little wiser.': '回想一下你迄今为止的旅程，你发现你更聪明了。',
    'You gain ': '你获得了 ',
    ' EXP, ': ' 经验, ',
    ' Credits!': ' Credits!',
    'Back to Gallery': '返回图库',
    'Report Type': '举报类型',
    '[Select a complaint type...]': '[请选择一个举报类型...]',
    'DMCA/Copyright Infringement': 'DMCA/侵犯版权',
    'Child Pornography': '儿童色情',
    'Other Illicit Content': '其他非法内容',
    'Specify an objective reason why you wish to expunge this gallery.': '请说明要删除此库的客观原因.',
    'None / Withdraw Petition.': '无 / 撤回删除申请.',
    // "This gallery is a duplicate of equal or lower quality of an earlier posted, clearly marked gallery.": 
    // '此图库是早期发布的，标记为图库的质量相同或较低的副本。',
    // "A newer higher-quality and clearly marked copy of this gallery has been uploaded.": 
    // "这个画廊的更高质量和清晰标记的副本已上传。",
    "This gallery contains either illicit content like child porn or anything else forbidden by the ": '这个画廊包含非法内容，如儿童色情片或其他任何禁止的内容, 参见',
    ", or otherwise falls under the ": ", 或者符合",
    'Expunge Guidelines': '清除指南',
    " (specify below).": ' (在下方说明).',
    'Show Expunge Log': '显示清除日志',
    "Enter an explanation for this expunge here. It should include the location of the duplicate or the specific rule being violated.": "请输入清除原因和备注。它应包括副本的位置或违反的特定规则。",
    "Roman Script": "罗马音",
    "Japanese Script": "日文",
    "Not Set": '未设置',
    "Blank Vote": '空投票',
    " New": ' 新',
    "Watched Tag Galleries": "标签订阅",
    "Currently Popular Recent Galleries": "目前最受欢迎的图库",
    "Search Favorites": "搜索收藏夹",
    "Clear": "清除",
    "Delete Favorites": "删除收藏",
    "Change Category": "移动到",
    "Confirm": "确定",
    "You are currently at ": "当前:",
    " towards a limit of ": ", 限制为",
    ". This regenerates at a rate of ": ", 每分钟回复",
    " per minute.": "点",
    "Reset Cost: ": "重置限制花费: ",
    "Reset Limit": "重置限制",
    "Reset Torrent Key": "重置种子Key",
    "Latest Site Status Updates": "最新网站状态",
    "Site Update Log": "网站更新日志",
};


/***/ }),

/***/ "./src/style/syringe.less":
/*!********************************!*\
  !*** ./src/style/syringe.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/less-loader/dist/cjs.js??ref--5-3!./syringe.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/style/syringe.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertInto":":root","hmr":true}

options.transform = transform
options.insertInto = ":root";

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/syringe.ts":
/*!************************!*\
  !*** ./src/syringe.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ui_data_1 = __webpack_require__(/*! ./data/ui-data */ "./src/data/ui-data.ts");
__webpack_require__(/*! ./style/syringe.less */ "./src/style/syringe.less");
const tag_data_1 = __webpack_require__(/*! ./tool/tag-data */ "./src/tool/tag-data.ts");
window.tagClear = () => {
    window.localStorage.removeItem('tag-list');
    window.localStorage.removeItem('tag-replace-data');
    chrome.storage.local.remove('TagDB');
};
window.tagDownload = () => {
    window.localStorage.removeItem('tag-list');
    window.localStorage.removeItem('tag-replace-data');
    chrome.storage.local.remove('TagDB');
    chrome.runtime.sendMessage({ contentScriptQuery: "get-tag-data" });
};
const { tagReplace } = tag_data_1.getTagData();
var documentEnd = false;
window.document.addEventListener('DOMContentLoaded', (e) => {
    documentEnd = true;
    console.log('translateNode timer', timer + 'ms');
});
let timer = 0;
const observer = new MutationObserver(function (mutations) {
    const s = new Date().getTime();
    for (let i in mutations) {
        for (let n in mutations[i].addedNodes) {
            const node1 = mutations[i].addedNodes[n];
            if (documentEnd) {
                if (node1.childNodes) {
                    let nodeIterator = document.createNodeIterator(node1);
                    let node;
                    while ((node = nodeIterator.nextNode())) {
                        translateNode(node);
                    }
                }
                else {
                    translateNode(node1);
                }
            }
            else {
                translateNode(node1);
            }
        }
    }
    timer += new Date().getTime() - s;
});
observer.observe(window.document, {
    attributes: true,
    childList: true,
    subtree: true
});
function translateNode(node) {
    if (node.nodeName === "BODY") {
        // node.parentElement.lang = "zh-CN";
        // node.parentElement.setAttribute('xml:lang', "zh-CN")
    }
    else if (node.nodeName === "#text") {
        if (node.parentElement) {
            if (node.parentElement.nodeName === 'MARK' ||
                node.parentElement.classList.contains("auto-complete-text")) {
                // 不翻译搜索提示的内容
                return;
            }
            // 标签只翻译已知的位置
            if ((node.parentElement.classList.contains("gt") ||
                node.parentElement.classList.contains("gtl") ||
                node.parentElement.classList.contains("gtw")) || (node.parentElement.parentElement && (node.parentElement.parentElement.classList.contains("gt") ||
                node.parentElement.parentElement.classList.contains("gtl") ||
                node.parentElement.parentElement.classList.contains("gtw")))) {
                if (tagReplace[node.textContent]) {
                    if (node.parentElement.hasAttribute('eh-syringe-original')) {
                        return;
                    }
                    node.parentElement.setAttribute('eh-syringe-original', node.textContent);
                    if (tagReplace[node.textContent] != node.textContent) {
                        node.parentElement.innerHTML = tagReplace[node.textContent];
                    }
                    else {
                        console.log('翻译内容相同', tagReplace[node.textContent]);
                    }
                    return;
                }
            }
        }
        if (ui_data_1.uiData[node.textContent]) {
            node.textContent = ui_data_1.uiData[node.textContent];
            return;
        }
        // if(tagReplace[node.textContent]) {
        //     node.textContent = tagReplace[node.textContent];
        //     return;
        // }
        let text = node.textContent;
        text = text.replace(/(\d+) pages/, '$1 页');
        text = text.replace(/Torrent Download \( (\d+) \)/, '种子下载 ( $1 )');
        text = text.replace(/Average: ([\d\.]+)/, '平均值: $1');
        text = text.replace(/Posted on (.*?) by:/, '评论时间:$1  作者:');
        text = text.replace(/Showing ([\d,]+) results/, '共 $1 个结果');
        text = text.replace(/Showing (\d+) - (\d+) of (\d+) images/, '第 $1 - $2 共 $3 张图片');
        text = text.replace(/Rate as ([\d\.]+) stars/, '$1星');
        text = text.replace(/([\d\.]+) torrent was found for this gallery./, '找到了$1个种子.');
        text = text.replace(/([\d\.]+) \/ ([\d\.]+) favorite note slots used./, '已经使用了$1个便签, 共$2个 ');
        text = text.replace(/Showing results for ([\d\.]+) watched tags/, '订阅的$1个标签的结果');
        if (node.textContent !== text) {
            node.textContent = text;
        }
    }
    else if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
        const input = node;
        if (ui_data_1.uiData[input.placeholder]) {
            input.placeholder = ui_data_1.uiData[input.placeholder];
            return;
        }
        if (input.type == "submit" || input.type == "button") {
            if (ui_data_1.uiData[input.value]) {
                input.value = ui_data_1.uiData[input.value];
                return;
            }
        }
    }
    else if (node.nodeName === 'OPTGROUP') {
        const element = node;
        if (ui_data_1.uiData[element.label]) {
            element.label = ui_data_1.uiData[element.label];
        }
    }
    else {
        if (node.nodeName === "A" &&
            node.parentElement &&
            node.parentElement.parentElement &&
            node.parentElement.parentElement.id === 'nb') {
            const a = node;
            console.log(node);
            if (ui_data_1.uiData[a.textContent]) {
                a.textContent = ui_data_1.uiData[a.textContent];
                return;
            }
        }
    }
}


/***/ }),

/***/ "./src/tool/tag-data.ts":
/*!******************************!*\
  !*** ./src/tool/tag-data.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
function getTagData() {
    if (window.tagListStorage && window.tagReplaceDataStorage) {
        return {
            tagList: window.tagListStorage,
            tagReplace: window.tagReplaceDataStorage
        };
    }
    console.time('localStorage getItem');
    const tagListStorage = window.localStorage.getItem('tag-list');
    const tagReplaceDataStorage = window.localStorage.getItem('tag-replace-data');
    if (tagListStorage && tagReplaceDataStorage) {
        window.tagListStorage = JSON.parse(tagListStorage);
        window.tagReplaceDataStorage = JSON.parse(tagReplaceDataStorage);
        return {
            tagList: window.tagListStorage,
            tagReplace: window.tagReplaceDataStorage
        };
    }
    console.timeEnd('localStorage getItem');
    chrome.storage.local.get((data) => {
        if ('tagList' in data && 'tagReplaceData' in data) {
            window.localStorage.setItem('tag-list', JSON.stringify(data.tagList));
            window.localStorage.setItem('tag-replace-data', JSON.stringify(data.tagReplaceData));
            window.location.reload();
        }
        else {
            chrome.runtime.sendMessage({ contentScriptQuery: "get-tag-data" });
        }
    });
    return {
        tagList: [],
        tagReplace: {}
    };
}
exports.getTagData = getTagData;


/***/ })

/******/ });
//# sourceMappingURL=syringe.js.map