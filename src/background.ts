import * as pako from "pako";
import { EHTDatabase, TagList } from "./interface";
import { BadgeLoading } from './tool/badge-loading';
import { chromeMessage } from './tool/chrome-message';
import { mdImg2HtmlImg } from "./tool/tool";
import { namespaceTranslate } from "./data/namespace-translate";
var badge = new BadgeLoading();
var lastCheck = 0;
var lastCheckData: any;
var TagList: TagList = [];
var loadLock = false;

var downloadStatus = {
  run: false,
  progress: 0,
  info: '',
  complete: false,
  error: false,
};

function pushDownloadStatus(data: any = {}) {
  downloadStatus = {
    ...downloadStatus,
    ...data,
  };
  chrome.runtime.sendMessage({cmd: 'downloadStatus', data: downloadStatus});
}

async function download(): Promise<EHTDatabase> {
  return new Promise<EHTDatabase>(async (resolve, reject) => {
    if (loadLock) {
      return false;
    }
    loadLock = true;
    badge.set('', "#4A90E2", 2);
    pushDownloadStatus({run: true, info: '加载中'});
    const githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
    const info = await (await fetch(githubDownloadUrl)).json();
    if (!(info && info.assets)) {
      reject(new Error('无法获取版本信息'));
      loadLock = false;
      return;
    }
    const asset = info.assets.find((i: any) => i.name === 'db.raw.json.gz');
    const url = asset && asset.browser_download_url || '';
    if (!url) {
      reject(new Error('无法获取下载地址'));
      loadLock = false;
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.responseType = "arraybuffer";
    xhr.onload = function () {
      loadLock = false;
      try {
        const data = JSON.parse(pako.ungzip(xhr.response, { to: "string" }));
        loadLock = false;
        resolve(data as EHTDatabase);
        pushDownloadStatus({info: '下载完成', progress: 100});
        badge.set('100', "#4A90E2", 1);
      } catch (e) {
        reject(new Error('数据无法解析'));
        badge.set('Err', "#C80000");
      }
    }
    xhr.onerror = (e) => {
      loadLock = false;
      badge.set('ERR', "#C80000");
      reject(e);
    }
    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        pushDownloadStatus({info: Math.floor(percent) + '%', progress: Math.floor(percent)});
        badge.set(percent.toFixed(0), "#4A90E2", 1);
      }
    }
    xhr.send();
    pushDownloadStatus({info: '0%', progress: 0});
    badge.set('0', "#4A90E2", 1);
  })
}

chromeMessage.listener('get-tag-data', (data, callback) => {

  // 重置状态
  downloadStatus = {
    run: false,
    progress: 0,
    info: '',
    complete: false,
    error: false,
  };

  download().then(data => {
    storageTagData(data).then(() => {
      callback();
    })
  }, (err: Error) => {
    console.error(err);
    pushDownloadStatus({run: false, error: true, info: (err && err.message) ? err.message : '更新失败'});
  })
});

chromeMessage.listener('check-version', (data, callback) => {
  checkVersion().then(value => {
    callback(value);
  })
});

// 如果沒有數據自動加載本地數據
chrome.storage.local.get((data) => {
  if (!('tagList' in data && 'tagReplaceData' in data)) {
    const dbUrl = chrome.runtime.getURL('assets/tag.db');
    fetch(dbUrl).then(r => r.text()).then(text => {
      const data = JSON.parse(text);
      storageTagData(data)
    })
  }
  if ('tagList' in data) {
    TagList = data.tagList;
  }
})

function storageTagData(tagDB: EHTDatabase): Promise<any> {
  return new Promise(resolve => {
    const namespaceOrder = ['female', 'language', 'misc', 'male', 'artist', 'group', 'parody', 'character', 'reclass'];
    const tagReplaceData: { [key: string]: string } = {};
    const tagList: TagList = [];
    tagDB.data.sort((a, b) => {
      return namespaceOrder.indexOf(a.namespace) - namespaceOrder.indexOf(b.namespace);
    })
    tagDB.data.forEach(space => {
      const namespace = space.namespace;
      if (namespace === 'rows') return;
      for (let key in space.data) {
        const t = space.data[key];
        let search = ``;
        if (namespace !== 'misc') {
          search += namespace + ':';
        }
        if (key.indexOf(' ') !== -1) {
          search += `"${key}$"`;
        } else {
          search += key + '$';
        }

        const name = mdImg2HtmlImg(t.name, 1);
        tagList.push({
          ...t,
          name: name,
          intro: mdImg2HtmlImg(t.intro, 3),
          key,
          namespace,
          search,
        })
        tagReplaceData[namespace + ':' + key] = name;
        if (namespace === 'misc') {
          tagReplaceData[key] = name;
        }
      }
    });
    chrome.storage.local.set({
      tagDB,
      tagList,
      tagReplaceData,
      updateTime: new Date().getTime(),
      sha: tagDB.head.sha,
    }, () => {
      resolve();
      badge.set('OK', "#00C801");
      pushDownloadStatus({run: true, info:'更新完成', progress: 100, complete: true});
      setTimeout(() => {
        badge.set('');
        pushDownloadStatus({run: false, info:'更新完成', progress: 0, complete: false});
      }, 2500)
    });
    TagList = tagList;
  })
}

if (chrome.contextMenus) {
  chrome.contextMenus.create(
    {
      documentUrlPatterns: ["*://exhentai.org/*", "*://e-hentai.org/*", "*://*.exhentai.org/*", "*://*.e-hentai.org/*"],
      title: '提交标签翻译',
      targetUrlPatterns: ["*://exhentai.org/tag/*", "*://e-hentai.org/tag/*", "*://*.exhentai.org/tag/*", "*://*.e-hentai.org/tag/*"],
      contexts: ['link'],
      onclick(info, tab) {
        if (/\/tag\//.test(info.linkUrl)) {
          const s = info.linkUrl.replace('+', ' ').split('/')
          const s2 = s[s.length - 1].split(':')
          const namespace = s2.length == 1 ? 'misc' : s2[0];
          const tag = s2.length == 1 ? s2[0] : s2[1];
          const editorUlr = `https://ehtagtranslation.github.io/Editor/edit/${encodeURIComponent(namespace)}/${encodeURIComponent(tag)}`;
          chrome.tabs.create({
            url: editorUlr,
          })
        }
      }
    }, () => {
    }
  )
}

if (chrome.omnibox) {
  chrome.omnibox.onInputChanged.addListener(
    function (text, suggest) {
      if (TagList.length) {
        const data = TagList.filter(v => v.search.indexOf(text) !== -1 || v.name.indexOf(text) !== -1).slice(0, 5).map(tag => {
          const cnNamespace = namespaceTranslate[tag.namespace];
          let cnNameHtml = '';
          let enNameHtml = tag.search;
          if (tag.namespace !== 'misc') {
            cnNameHtml += cnNamespace + ':';
          }
          cnNameHtml += tag.name;
          return {
            content: enNameHtml,
            description: cnNameHtml,
          }
        })
        suggest(data);
      }
    });

  chrome.omnibox.onInputEntered.addListener(
    function (text) {
      chrome.tabs.create({
        url: `https://e-hentai.org/?f_search=${encodeURIComponent(text)}`,
      });
    });
}

async function checkVersion() {
  const time = new Date().getTime();
  // 限制每分钟最多请求1次
  const { sha } = await new Promise((resolve) => chrome.storage.local.get(resolve));
  if ((time - lastCheck <= 1000 * 60) && lastCheckData) {
    return {
      new: (lastCheckData && lastCheckData.new) ? lastCheckData.new : '',
      old: sha,
    };
  }
  lastCheck = time;
  const githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
  const info = await (await fetch(githubDownloadUrl)).json();

  if (!(info && info.target_commitish)) {
    return null;
  }
  lastCheckData = {
    old: sha,
    new: info.target_commitish,
  };
  return lastCheckData;
}
