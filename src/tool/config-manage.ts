
export interface ConfigData {
  translateUI: boolean;
  translateTag: boolean;
  showIntroduce: boolean;
  showIcon: boolean;
  introduceImageLevel: number; // 0:hide, 1:non-h 2: R18 3: R18G
  autoUpdate: boolean;
  tagTip: boolean;
}

class ConfigManage {


  DefaultValue: ConfigData = {
    translateUI: true,
    translateTag: true,
    showIntroduce: true,
    showIcon: true,
    introduceImageLevel: 3,
    autoUpdate: false, // 默认不开启自动更新
    tagTip: true,
  };

  syncGet(): ConfigData {
    if('EHSConfig' in window){
      return window['EHSConfig']
    }

    const string = window.localStorage.getItem('ehs-config');
    if(!string){
      return {...this.DefaultValue}
    }
    try {
      const data = JSON.parse(string);
      (window as any).EHSConfig = this.fixData(data);
      return this.fixData(data);
    } catch (e) {
      console.error(e);
      return {...this.DefaultValue}
    }
  }

  async synchro(): Promise<boolean> {
    const oldConfig = window.localStorage.getItem('ehs-config');
    const newConfig = JSON.stringify(await this.get());
    if(oldConfig != newConfig){
      window.localStorage.setItem('ehs-config', newConfig);
      return true;
    }
    return false;
  }

  get(): Promise<ConfigData> {
    return new Promise(resolve => {
      chrome.storage.local.get(['config'],(data) => {
        const config = data.config || {...this.DefaultValue};
        resolve(this.fixData(config));
      })
    })
  }

  set(data: Partial<ConfigData>): Promise<void> {
    return new Promise(async (resolve) => {
      const config = await this.get();
      const newConfig = {
        ...config,
        ...data,
      };
      chrome.storage.local.set({
        config: newConfig,
      } , resolve)
    })
  }

  fixData(data: any): ConfigData {
    const DefaultValue: any = this.DefaultValue;
    for(let key in DefaultValue){
      if(!DefaultValue.hasOwnProperty(key)) continue;
      if(typeof data[key] === 'undefined'){
        data[key] = DefaultValue[key];
      }
    }
    return data;
  }

}

export const Config = new ConfigManage();
