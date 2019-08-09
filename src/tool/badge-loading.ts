export class BadgeLoading {
  loadingStrArr = [
    [''],
    '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'.split(''),
    // "▹▹▹▹|▸▹▹▹|▹▸▹▹|▹▹▸▹|▹▹▹▸".split("|"),
    "    |·   | ·  |  · |   ·".split("|"),
  ];

  frame = 0;
  index = 0;
  interval = 0;
  text = '';
  loadingString: string[] = [''];
  color = '';

  set(text: string, color: string = '', loading = 0) {
    if(this.index != loading) {
      this.index = loading;
      this.loadingString = this.loadingStrArr[this.index] || [''];
      this.frame = 0;
    }
    this.text = text;
    if (this.color != color) {
      this.color = color;
      chrome.browserAction.setBadgeBackgroundColor({color});
    }
    if(loading){
      if(!this.interval){
        this.interval = setInterval(() => {
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
        this.interval = 0;
      }
      chrome.browserAction.setBadgeText({text: this.text})
    }
  }
}
