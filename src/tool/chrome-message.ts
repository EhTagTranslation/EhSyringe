class ChromeMessage {

  callbackMap: {[key: string]: (data: any) => any} = {};

  constructor(){
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if('callback' in request){
        const key = request.callback;
        console.log('callback', key);
        if(this.callbackMap[key]){
          this.callbackMap[key](request.data)
        }
      }
    })
  }

  send(query: string, data?: any, callback?: (data: any) => any ){
    const key = `${new Date().getTime()}${Math.floor(Math.random() * 10000)}`;
    chrome.runtime.sendMessage({
      query,
      data,
      callbackKey: key,
    });
    if(callback) {
      this.callbackMap[key] = callback;
    }
  }

  listener(query: string, handle: (data: any, callback: (data?: any) => any) => any){
    console.log('listener', query, handle)
    chrome.runtime.onMessage.addListener((request) => {
      console.log('onMessage', request)
      if('query' in request && request.query === query){
        handle(request.data, (value) => {
          console.log('handle callback',request.callbackKey , value);
          if(request.callbackKey){
            chrome.runtime.sendMessage({callback: request.callbackKey, data: value});
          }
        })
      }
    })
  }

}
export const chromeMessage = new ChromeMessage();
