import './popup.less';
import { chromeMessage } from '../tool/chrome-message';
import {dateDiff} from "../tool/tool";

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function elementBinding<T = any>(selectors: string, attribute?: string) {
  return function (target: any, name: any) {
    let element = document.querySelector(selectors) as any;
    Object.defineProperty(target, name, {
      get() {
        return element ? element[attribute] : null;
      },
      set(v: T) {
        if(!element) element = document.querySelector(selectors) as any;
        if(element)element[attribute] = v;
      },
      enumerable: true
    })
  }
}

function element(selectors: string) {
  return function (target: any, name: any) {
    let element = document.querySelector(selectors) as any;
    Object.defineProperty(target, name, {
      get() {
        if(!element) element = document.querySelector(selectors) as any;
        if(element)return element;
      } ,
      enumerable: true
    })
  }
}

function elementListener(selectors: string, eventName: string) {
  return function (target: any, name: any) {
    let value = target[name];
    Object.defineProperty(target, name, {
      get() {
        return value
      },
      set(v) {
        value = v;
        const element = document.querySelector(selectors) as HTMLElement;
        if(element){
          element.addEventListener(eventName, value);
        }
      },
      enumerable: true
    })
  }
}

class Popup {
  private testAnimationIndex: number = 0;
  private testAnimationList : [string, number][] = [
    ['prominent', 0],
    ['prominent', 10],
    ['prominent', 30],
    ['prominent', 80],
    ['prominent', 100],
    ['prominent injection', 100],
    ['prominent injection', 5],
    ['prominent', 5],
    ['', 0],
  ];

  constructor () {

    this.getVersion();
    this.checkVersion().then();

    chrome.management.getSelf(data => {
      document.title = data.name;
      this.extensionVersion = `V${data.version}`;
    });
    chrome.runtime.onMessage.addListener((request) => {
      if('cmd' in request && request.cmd == 'downloadStatus'){
        this.downloadStatus(request.data).then();
      }
    });

  }

  @element('#checkVersion')
  private checkVersionElement: HTMLElement;

  @element('.logo')
  private logoElement: HTMLElement;

  @element('#PushRod')
  private PushRod:SVGGElement;

  @element('#Enema')
  private Enema:SVGRectElement;

  @element('#settingPanel')
  private settingPanelElement: HTMLDivElement;

  @element('#updateButton')
  private updateButtonElement: HTMLButtonElement;

  @elementBinding('#sha', 'textContent')
  private sha = '';

  @elementBinding('#updateTime', 'textContent')
  private updateTime = '';

  @elementBinding('#info', 'textContent')
  private info = '';

  @elementBinding('#extensionVersion', 'textContent')
  private extensionVersion = '';

  @elementListener('#updateButton', 'click')
  private updateButtonClick = async () => {
    this.updateButtonDisabled = true;
    await chromeMessage.send("get-tag-data", {});
    setTimeout(() => {
      this.updateButtonDisabled = false;
      this.getVersion();
      this.checkVersion().then();
    }, 1000)
  };

  @elementListener('#settingSwitch', 'click')
  private settingSwitchClick = () => {
    this.settingPanelElement.classList.toggle('open');
  };

  // 只是动画测试 可以点着玩
  @elementListener('.logo', 'click')
  private logoClick = () => {
    const a = this.testAnimationList[this.testAnimationIndex];
    this.testAnimationIndex++;
    if(!this.testAnimationList[this.testAnimationIndex]){
      this.testAnimationIndex = 0;
    }
    this.logoElement.className = 'logo ' + a[0];
    this.setProgress(a[1])
  };

  @elementBinding('#info', 'disabled')
  private updateButtonDisabled: boolean;

  async downloadStatus(data: any) {
    let className = ['logo'];
    if(data.run){
      className.push('prominent');
    }
    this.info = data.info;
    this.setProgress(data.progress || 0);
    this.logoElement.className = className.join(' ');

    if (data.complete){

      await sleep(1000);
      className.push('injection');
      this.setProgress(100);
      this.logoElement.className = className.join(' ');

      await sleep(500);
      this.setProgress(5);

      await sleep(500);
      className.pop();
      this.logoElement.className = className.join(' ');
    }
  }

  setProgress(p: number) {
    const maxWidth = 70;
    this.PushRod.style.transform = `translate(${((p / 400) * maxWidth).toFixed(2)}px, 0)`;
    this.Enema.style.transform = `scaleX(${p/100})`;
    // this.Enema.setAttribute('width',((p / 100) * maxWidth).toFixed(2));
  }


  async checkVersion() {
    this.checkVersionElement.textContent = '检查中...';
    const data = await chromeMessage.send("check-version", {});
    console.log(data);
    if (data && data.new) {
      const hasNewData = data.new !== data.old;
      this.checkVersionElement.textContent = hasNewData ? data.new.slice(0, 6) + ' 有更新!' : '已是最新版本';
      if (hasNewData) {
        this.checkVersionElement.classList.add('hasNew');
        this.updateButtonElement.classList.add('primary');
        this.updateButtonElement.textContent = '更新';
      } else {
        this.checkVersionElement.classList.remove('hasNew');
        this.updateButtonElement.classList.remove('primary');
        this.updateButtonElement.textContent = '更新';
      }
    } else {
      this.checkVersionElement.textContent = '获取失败';
    }
  }

  getVersion() {
    chrome.storage.local.get((data) => {
      this.sha = data.sha ? data.sha.slice(0, 6) : 'N/A';
      this.updateTime = data.updateTime ? dateDiff(data.updateTime) : 'N/A';
      // updateTime.title = new Date(data.updateTime).toLocaleString();
    });
  }

}

window.onload = () => new Popup();
