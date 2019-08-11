export class BadgeLoading {

  constructor() {
    chrome.management.getSelf(data => {
      this.extname = data.name || this.extname;
    });
  }

  loadingStrArr = [
    [''],
    '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'.split(''),
    "    |·   | ·  |  · |   ·".split("|"),
  ];

  frame = 0;
  index = 0;
  interval?: ReturnType<typeof setTimeout> = undefined;
  text = '';
  loadingString: string[] = [''];
  color = '';

  extname = 'EhSyringe';

  private setColor(color: string): void {
    if(!color)color = "#4A90E2";
    if (this.color !== color) {
      this.color = color;
      if (chrome.browserAction.setBadgeBackgroundColor) {
        chrome.browserAction.setBadgeBackgroundColor({ color });
      }
    }
  }

  private setText(text: string): void {
    if (chrome.browserAction.setBadgeText) {
      chrome.browserAction.setBadgeText({ text });
    } else {
      const title = text ? `${this.extname} (${text})` : this.extname;
      chrome.browserAction.setTitle({ title });
    }
  }

  set(text: string, color: string = '', loading: number = 0): void {
    if (this.index !== loading) {
      this.index = loading;
      this.loadingString = this.loadingStrArr[this.index] || [''];
      this.frame = 0;
    }
    this.text = text;
    this.setColor(color);
    if (loading) {
      if (!this.interval) {
        this.interval = setInterval(() => {
          this.setText(`${this.text}${this.loadingString[this.frame] || ''}`);
          this.frame++;
          if (!this.loadingString[this.frame]) {
            this.frame = 0;
          }
        }, 100);
      }
    } else {
      this.frame = 0;
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = undefined;
      }
      this.setText(this.text);
    }
  }
}
