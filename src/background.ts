import * as pako from "pako";
import { EHTDatabase, TagList } from "./interface";
import { mdImg2HtmlImg } from "./tool/tool";
import { namespaceTranslate } from "./data/namespace-translate";

var TagList: TagList = [];

var loadLock = false;
async function download (): Promise<EHTDatabase>{
  return new Promise<EHTDatabase>(async (resolve, reject) =>  {
    if (loadLock) {
      return false;
    }
    badge.set('', "#4A90E2", 2);

    const githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
    const info = await (await fetch(githubDownloadUrl)).json();
    const asset = info.assets.find((i:any) => i.name === 'db.raw.json.gz');
    const url = asset && asset.browser_download_url || '';
    if (!url) {
      console.error('地址未找到', url);
    }

    console.log('加载');
    loadLock = true;

    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = "arraybuffer";
    xhr.onload = function() {
      loadLock = false;
      try {
         const data = JSON.parse(pako.ungzip(xhr.response, {to: "string"}));
         resolve(data as EHTDatabase);
         badge.set('100', "#4A90E2", 1);
      } catch (e) {
        reject();
        badge.set('Err', "#C80000");
      }
    }
    xhr.onerror = (e) => {
      loadLock = false;
      console.error(e);
      badge.set('ERR', "#C80000");
      reject();
    }
    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        var percent = Math.round((event.loaded / event.total) * 100)
        console.log(percent);
        badge.set(percent.toFixed(0), "#4A90E2", 1);
      };
    }
    xhr.send();
    badge.set('0', "#4A90E2", 1);
  })
}
(globalThis as any).test = download;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('onMessage', request)
  if (request.contentScriptQuery == "get-tag-data") {
    download().then(data => {
      storageTagData(data)
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
    tagReplaceData,
    updateTime: new Date().getTime(),
    sha: tagDB.head.sha,
  },() => {
    badge.set('OK', "#00C801");
    setTimeout(() => {
      badge.set('');
    }, 2000)
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
      url: `https://e-hentai.org/?f_search=${encodeURIComponent(text)}`,
    })
  });


class BadgeLoading {
  loadingStrArr = [
    [''],
    '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'.split(''),
    "▹▹▹▹|▸▹▹▹|▹▸▹▹|▹▹▸▹|▹▹▹▸".split("|"),
  ];

  frame = 0;
  index = 0;
  interval = 0;
  text = '';
  loadingString: string[] = [''];

  set(text: string, color: string = '', loading = 0) {
    if(this.index != loading) {
      this.index = loading;
      this.loadingString = this.loadingStrArr[this.index] || [''];
      this.frame = 0;
    }
    this.text = text;
    if (color) {
      chrome.browserAction.setBadgeBackgroundColor({color});
    }
    if(loading){
      if(!this.interval){
        this.interval = setInterval(() => {
          console.log('interval', this.interval)
          const text = this.text + (this.loadingString[this.frame] || '');
          chrome.browserAction.setBadgeText({text});
          this.frame ++;
          if(!this.loadingString[this.frame]){
            this.frame = 0;
          }
        }, 100);
      }
    } else {
      this.frame = 0;
      if(this.interval){
        clearInterval(this.interval);
      }
      chrome.browserAction.setBadgeText({text: this.text})
    }
  }
}
const badge = new BadgeLoading();






