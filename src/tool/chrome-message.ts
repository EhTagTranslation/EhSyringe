import { DownloadStatus, ReleaseCheckData } from '../background';

interface RequestMap {
  'check-version': void;
  'get-tag-data': void;
  'downloadStatus': DownloadStatus;
}
interface ResponseMap {
  'check-version': ReleaseCheckData;
  'get-tag-data': void;
  'downloadStatus': void;
}

class ChromeMessage {

  send<Q extends (keyof RequestMap) & (keyof ResponseMap)>(query: Q, data: RequestMap[Q]): Promise<ResponseMap[Q]> {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({
        query,
        data,
      }, response => {
        if (!response) {
          reject(chrome.runtime.lastError);
        } else if (response.error) {
          reject(response.error);
        } else {
          resolve(response.data);
        }
      });
    });
  }

  broadcast<Q extends (keyof RequestMap)>(query: Q, data?: RequestMap[Q]): void {
    chrome.runtime.sendMessage({
      query,
      data,
    }, response => {
      // check last error
      const _ = chrome.runtime.lastError;
      if (response && response.error) {
        throw response.error;
      }
    });
  }

  listener<Q extends (keyof RequestMap) & (keyof ResponseMap)>(query: Q, handler: (data: RequestMap[Q]) => ResponseMap[Q] | PromiseLike<ResponseMap[Q]>): void {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (!('query' in request) || request.query !== query) {
        return;
      }
      const promise = handler(request.data);
      Promise.resolve(promise).then(data => sendResponse({ data })).catch(error => sendResponse({ error }));
      return true;
    });
  }
}

export const chromeMessage = new ChromeMessage();
