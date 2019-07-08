import * as pako from "pako";
import { EHTDatabase } from "./interface";

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
      console.log('set data');
      chrome.storage.local.set({ waitingForProcessing: data });
    })
  }
})