import * as pako from "pako";
import { EHTDatabase, TagList } from "./interface";
import { mdImg2HtmlImg } from "./tool/tool";
import { namespaceTranslate } from "./data/namespace-translate";


var TagList: TagList = [];


var loadLock = false;
async function download (): Promise<EHTDatabase>{
  return new Promise<EHTDatabase>((resolve, reject) => {
    if (loadLock) {
      return false;
    }
    var url = "https://github.com/EhTagTranslation/Database/releases/download/CI-build-84/db.raw.json.gz";
    console.log('加载');
    loadLock = true;
    chrome.notifications.clear("eh-tag-download");
    chrome.notifications.clear("eh-tag-download-done");
    
    chrome.notifications.create("eh-tag-download", {
      title: '数据下载中',
      message: `连接中...`,
      type: 'progress',
      iconUrl: chrome.runtime.getURL('assets/logo128.png'),
      progress: 0,
    })
  
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = "arraybuffer";
    xhr.onload = function() {
      loadLock = false;
      try {
         const data = JSON.parse(pako.ungzip(xhr.response, {to: "string"}));
         resolve(data as EHTDatabase);
         setTimeout(() => {
          chrome.notifications.clear("eh-tag-download");
          chrome.notifications.create("eh-tag-download-done", {
            title: '下载完毕',
            message: `请刷新页面`,
            type: 'progress',
            iconUrl: chrome.runtime.getURL('assets/logo128.png'),
            progress: 100,
          })
        }, 100);
      
      } catch (e) {
        reject();
        chrome.notifications.update("eh-tag-download", {
          title: '解析失败',
          message: `请重试`,
        })
      }
      
    }
    xhr.onerror = (e) => {
      loadLock = false;
      console.error(e);
      reject();
      chrome.notifications.update("eh-tag-download", {
        title: '下载失败',
        message: `请重试`,
      })
    }
    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        var percent = Math.round((event.loaded / event.total) * 100)
        console.log(percent);
        chrome.notifications.update("eh-tag-download", {
          title: '数据下载中',
          message: `下载中: ${percent}%`,
          progress: percent,
        })
      };
    }
    xhr.send();
  })
}
(globalThis as any).test = download;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('onMessage', request)
  if (request.contentScriptQuery == "get-tag-data") {
    download().then(data => {
      storageTagData(data)
      // chrome.storage.local.set({ TagDB: data });
    })
  }
})

// 如果沒有數據自動加載本地數據
chrome.storage.local.get((data) => {
  if (!('tagDB' in data)) {
    const dbUrl = chrome.runtime.getURL('assets/tag.db');
    fetch(dbUrl).then(r => r.text()).then(taxt=> {
      const data = JSON.parse(taxt);
      storageTagData(data)
    })
  }

  if('tagList' in data){
    TagList = data.tagList;
  }
})


function storageTagData(tagDB: EHTDatabase){
  const namespaceOrder = ['female','language','misc', 'male','artist', 'group', 'parody', 'character', 'reclass'];
  const tagReplaceData: {[key: string]: string} = {};
  const tagList: TagList = [];
  tagDB.data.sort((a,b) => {
      return namespaceOrder.indexOf(a.namespace) - namespaceOrder.indexOf(b.namespace);
  })
  tagDB.data.forEach(space => {
      const namespace = space.namespace;
      if(namespace === 'rows') return;
      for(let key in space.data){
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
              intro: mdImg2HtmlImg(t.intro),
              key,
              namespace,
              search,
          })
          
          tagReplaceData[key] = name;
          tagReplaceData[namespace[0] + ':' + key] = namespace[0] + ':' + name;
      }
  });
  chrome.storage.local.set({
    tagDB,
    tagList,
    tagReplaceData
  });
  TagList = tagList;
}


chrome.contextMenus.create(
  {
    documentUrlPatterns: ["*://exhentai.org/*", "*://e-hentai.org/*", "*://*.exhentai.org/*", "*://*.e-hentai.org/*"],
    title: '提交标签翻译',
    targetUrlPatterns: ["*://exhentai.org/tag/*", "*://e-hentai.org/tag/*", "*://*.exhentai.org/tag/*", "*://*.e-hentai.org/tag/*"],
    contexts: ['link'],
    onclick(info, tab) {
      if(/\/tag\//.test(info.linkUrl)){
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
    console.log('???')
  }
)



chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    if(TagList.length){
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
  function(text) {
    chrome.tabs.create({
      url: `https://exhentai.org/?f_search=${encodeURIComponent(text)}`,
    })
  });
