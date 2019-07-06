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
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onload = function(data) {
      loadLock = false;
      console.log('onload', data)
    }
    xhr.onerror = function() {
      loadLock = false;
    }
    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        var percent = Math.round((event.loaded / event.total) * 100)
        console.log(percent)
      };
    }
    xhr.send();
    return true;
  }
})