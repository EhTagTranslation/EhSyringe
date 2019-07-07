var loadLock = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('onMessage', request)
  if (request.contentScriptQuery == "get-tag-data") {
    if (loadLock) {
      return false;
    }
    var url = "https://github.com/EhTagTranslation/Database/releases/download/CI-build-84/db.raw.json";
    console.log('加载');
    loadLock = true;

    // type, iconUrl, title and message

    chrome.notifications.onClicked.addListener((notificationId: string, buttonIndex?: number) => {
      console.log(notificationId, buttonIndex);
      
    })

    chrome.notifications.create("eh-tag-download", {
      title: '数据下载中',
      message: `连接中...`,
      type: 'progress',
      iconUrl: chrome.runtime.getURL('assets/logo128.png'),
      progress: 0,
      buttons: [
        {title: '取消下载'}
      ]
    })

    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onload = function(data) {
      loadLock = false;
      console.log('onload', data);
      chrome.notifications.update("eh-tag-download", {
        title: '下载完毕',
        message: `请刷新页面`,
        progress: 100,
      })
    }
    xhr.onerror = (e) => {
      loadLock = false;
      console.error(e);
      chrome.notifications.update("eh-tag-download", {
        title: '下载失败',
        message: `请重试`,
      })
    }
    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        var percent = Math.round((event.loaded / event.total) * 100)
        chrome.notifications.update("eh-tag-download", {
          title: '数据下载中',
          message: `下载中: ${percent}%`,
          progress: percent,
        })
      };
    }
    xhr.send();
    return true;
  }
})