class ChromeMessage {

  send<T, U>(query: string, data?: T): Promise<U> {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({
        query,
        data,
      }, response => chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve(response));
    });
  }

  listener<T, U>(query: string, handler: (data: T) => U | Promise<U>): void {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (!('query' in request) || request.query !== query) {
        return;
      }
      const promise = handler(request.data);
      Promise.resolve(promise).then(data => sendResponse(data));
      return true;
    });
  }
}

export const chromeMessage = new ChromeMessage();
