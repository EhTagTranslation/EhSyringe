class ChromeMessage {

  send<T, U>(query: string, data?: T): Promise<U> {
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

  broadcast<T>(query: string, data?: T): void {
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

  listener<T, U>(query: string, handler: (data: T) => U | Promise<U>): void {
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
