import './popup.less';
import { chromeMessage } from '../tool/chrome-message';
import { Config, ConfigData } from '../tool/config-manage';
import { dateDiff } from '../tool/tool';
import { html, render, svg, nothing } from 'lit-html';

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

interface PopupState {
  sha: string;
  updateTime: string;
  updateTimeFull: string;
  extensionVersion: string;
  shaRef: string;
  newSha: string;
  versionInfo: string;
  updateAvailable: boolean;
  updateButtonDisabled: boolean;
  showSettingPanel: boolean;
  progress: number,
  animationState: number,
  info: string;
  configValue?: ConfigData;
}

class Popup {

  constructor() {
    this._update();
    this.getVersion();
    this.checkVersion().then();
    this.loadConfig().then();
    chrome.management.getSelf(data => {
      this.state.extensionVersion = `${data.version}`;
    });
    chrome.runtime.onMessage.addListener((request) => {
      if ('cmd' in request && request.cmd == 'downloadStatus') {
        this.downloadStatus(request.data).then();
      }
    });
  }

  private _state: PopupState = {
    sha: '',
    info: '',
    updateTime: '',
    updateTimeFull: '',
    extensionVersion: '',
    shaRef: '',
    newSha: '',
    versionInfo: '',
    updateAvailable: false,
    updateButtonDisabled: false,
    showSettingPanel: false,
    progress: 0,
    animationState: 0,
    configValue: null,
  };
  private state: PopupState = new Proxy(this._state, {
    set: (target, key, value, receiver) => {
      const r = Reflect.set(target, key, value, receiver);
      this._update();
      return r;
    }
  });

  private configOriginal: ConfigData;

  private testAnimationIndex: number = 0;
  private testAnimationList: [number, number][] = [
    [1, 0],
    [1, 10],
    [1, 30],
    [1, 80],
    [1, 100],
    [2, 100],
    [2, 5],
    [1, 5],
    [0, 0],
  ];

  async loadConfig() {
    this.configOriginal = await Config.get();
    this.state.configValue = {...this.configOriginal};
  }

  testAnimation() {
    const a = this.testAnimationList[this.testAnimationIndex];
    this.testAnimationIndex++;
    if (!this.testAnimationList[this.testAnimationIndex]) {
      this.testAnimationIndex = 0;
    }
    this.state.animationState = a[0];
    this.state.progress = a[1];
  }

  getVersion() {
    chrome.storage.local.get((data) => {
      this.state.sha = data.sha ? data.sha.slice(0, 6) : 'N/A';
      this.state.shaRef = data.releaseLink || '';
      this.state.updateTime = data.updateTime ? dateDiff(data.updateTime) : 'N/A';
      this.state.updateTimeFull = new Date(data.updateTime).toLocaleString();
    });
  }

  async checkVersion() {
    this.state.versionInfo = '检查中...';
    const data: any = await chromeMessage.send('check-version', {});
    console.log(data);
    if (data && data.new) {
      const hasNewData = this.state.updateAvailable = data.new !== data.old;
      if (hasNewData) {
        this.state.newSha = data.new.slice(0, 6);
        this.state.versionInfo = `有更新！`;
      } else {
        this.state.versionInfo = '已是最新版本';
      }
    } else {
      this.state.versionInfo = '获取失败';
    }
  }

  openLink(url: string) {
    chrome.tabs.create({url: url});
  }

  async downloadStatus(data: any) {
    this.state.updateButtonDisabled = data.run;
    this.state.animationState = data.run ? 1 : 0;
    this.state.info = data.info;
    this.state.progress = data.progress || 0;
    if (data.complete) {
      await sleep(1000);
      this.state.progress = 100;
      this.state.animationState = 2;

      await sleep(500);
      this.state.progress = 5;

      await sleep(500);
      this.state.animationState = 1;
    }
  }

  private updateButtonClick = async () => {
    this.state.updateButtonDisabled = true;
    await chromeMessage.send('get-tag-data', {});
    setTimeout(() => {
      this.state.updateButtonDisabled = false;
      this.getVersion();
      this.checkVersion().then();
    }, 1000);
  };

  _logoTemplate(progress = 0) {

    const PushRodStyle = `transform: translate(${(progress / 400) * 70}px, 0)`;
    const EnemaStyle = `transform: scaleX(${progress / 100})`;

    return svg`
    <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <defs>
          <clipPath id="clip">
              <rect width="200" height="200"/>
          </clipPath>
      </defs>
      <g clip-path="url(#clip)">
          <g id="PushRod" style="${PushRodStyle}">
              <g transform="translate(-39 -312)">
                  <g transform="translate(131 403)" fill="#fff" stroke="#7836a0" stroke-width="6">
                      <rect width="78" height="18" rx="6" stroke="none"/>
                      <rect x="3" y="3" width="72" height="12" rx="3" fill="none"/>
                  </g>
                  <g transform="translate(203 391)" fill="#fff" stroke="#7836a0" stroke-width="6">
                      <rect width="18" height="43" rx="9" stroke="none"/>
                      <rect x="3" y="3" width="12" height="37" rx="6" fill="none"/>
                  </g>
              </g>
          </g>
          <g transform="translate(56 85)" fill="#fff" stroke="#7836a0" stroke-width="6">
              <rect width="83" height="30" rx="6" stroke="none"/>
              <rect x="3" y="3" width="77" height="24" rx="3" fill="none"/>
          </g>
          <g id="Enema" style="${EnemaStyle}">
              <rect width="70" height="27" transform="translate(61 86)" fill="#fdbdf1"/>
          </g>
          <path id="Enema2" d="M27.426,86.36s5.65.007,13.6.006S57.64,83.357,57.64,83.357L38.015,102.982,24.409,89.377l3.015-3.015Z" transform="translate(107.906 10.036) rotate(45)" fill="#fdbdf1"/>
          <g transform="translate(-39 -312)">
              <g transform="translate(95 397)" fill="none" stroke="#7836a0" stroke-width="6">
                  <rect width="83" height="30" rx="6" stroke="none"/>
                  <rect x="3" y="3" width="77" height="24" rx="3" fill="none"/>
              </g>
              <g transform="translate(82 403)" fill="#fdbdf1" stroke="#7836a0" stroke-width="6">
                  <rect width="19" height="18" rx="6" stroke="none"/>
                  <rect x="3" y="3" width="13" height="12" rx="3" fill="none"/>
              </g>
              <rect width="29" height="6" rx="3" transform="translate(58 409)" fill="#7836a0"/>
              <g transform="translate(172 381)" fill="#fff" stroke="#7836a0" stroke-width="6">
                  <rect width="18" height="62" rx="9" stroke="none"/>
                  <rect x="3" y="3" width="12" height="56" rx="6" fill="none"/>
              </g>
              <g transform="translate(119 398)" fill="#fff" stroke="#7836a0" stroke-width="3">
                  <rect width="4" height="11" rx="2" stroke="none"/>
                  <rect x="1.5" y="1.5" width="1" height="8" rx="0.5" fill="none"/>
              </g>
              <g transform="translate(131 398)" fill="#fff" stroke="#7836a0" stroke-width="3">
                  <rect width="4" height="11" rx="2" stroke="none"/>
                  <rect x="1.5" y="1.5" width="1" height="8" rx="0.5" fill="none"/>
              </g>
              <g transform="translate(144 398)" fill="#fff" stroke="#7836a0" stroke-width="3">
                  <rect width="4" height="11" rx="2" stroke="none"/>
                  <rect x="1.5" y="1.5" width="1" height="8" rx="0.5" fill="none"/>
              </g>
              <g transform="translate(156 398)" fill="#fff" stroke="#7836a0" stroke-width="3">
                  <rect width="4" height="11" rx="2" stroke="none"/>
                  <rect x="1.5" y="1.5" width="1" height="8" rx="0.5" fill="none"/>
              </g>
          </g>
      </g>
  </svg>`;
  }

  changeConfigValue(key: string, value: any) {
    if(key === 'introduceImageLevel'){
      this.state.configValue = {
        ...this.state.configValue,
        introduceImageLevel: value,
      };
    }
    this.state.configValue = {
      ...this.state.configValue,
      [key]: value,
    };
  }

  changeConfigUnsaved(): boolean {
    const keys = [
      ...Object.keys(this.configOriginal),
      ...Object.keys(this.state.configValue),
    ];
    return !keys.every(key => (this.configOriginal as any)[key] === (this.state.configValue as any)[key]);
  }

  async saveConfig(){
    await Config.set(this.state.configValue);
    await this.loadConfig();
  }

  _settingPanelTemplate() {
    const state = this.state;

    const checkboxList: { key: string, name: string }[] = [
      {key: 'translateUI', name: '翻译界面'},
      {key: 'translateTag', name: '翻译标签'},
      {key: 'showIntroduce', name: '标签介绍'},
      {key: 'showIcon', name: '显示标签图标'},
      {key: 'tagTip', name: '搜索提示'},
      {key: 'autoUpdate', name: '自动更新'},
    ];

    return html`
    <div id="settingPanel" class="${state.showSettingPanel ? 'open' : nothing}" >
    <div class="form">
      <form id="settingForm">
        ${checkboxList.map(item => html`
          <div class="checkbox-item">
            <label>
                <input type="checkbox" @change=${(e: Event) => this.changeConfigValue(item.key, (e.target as HTMLInputElement).checked)} ?checked="${(this.state.configValue as any)[item.key]}">
                ${item.name}
                <svg class="${(this.state.configValue as any)[item.key] ? 'checked' : ''}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 10 10 L 90 90"></path>
                    <path d="M 90 10 L 10 90"></path>
                </svg>
            </label>
          </div>
        `)}
        
        <div class="image-level">
          <div class="range-box">
            <input type="range" min="0" max="300" @change=${(e: Event) => this.changeConfigValue('introduceImageLevel', Math.round(parseInt((e.target as HTMLInputElement).value, 10) / 100))} .value="${state.configValue.introduceImageLevel * 100}"/>
          </div>
          <div class="range-label">
            <a href="#" @click="${() => this.changeConfigValue('introduceImageLevel', 0)}">禁用</a>
            <a href="#" @click="${() => this.changeConfigValue('introduceImageLevel', 1)}">G</a>
            <a href="#" @click="${() => this.changeConfigValue('introduceImageLevel', 2)}">R</a>
            <a href="#" @click="${() => this.changeConfigValue('introduceImageLevel', 3)}">RG</a>
          </div>
        </div>
        
        <pre>${JSON.stringify(this.state.configValue, null, 2)}</pre>
      </form>
    </div>
    <div class="submit-button">
      <button @click="${() => this.saveConfig()}" class="big-button ${this.changeConfigUnsaved() ? 'primary': nothing}">保存</button>
    </div>
</div>
    `;
  }

  _template() {
    const state = this.state;
    return html`
<div style="max-width: 400px; min-width: 200px; margin: auto;">
    <div class="logo-box" style="height: 205px;">
        <div class="logo ${[nothing, 'prominent', 'prominent injection'][state.animationState] || nothing}"
        @click="${() => {
      this.testAnimation();
    }}">
            ${this._logoTemplate(state.progress)}
        </div>
        <div id="info">${state.info}</div>
    </div>
    <table>
        <tr>
            <th class="no-select">TAG版本：</th>
            <td><a id="sha" class="monospace">${state.sha || ' --- '}</a></td>
        </tr>
        <tr>
            <th class="no-select">上次更新：</th>
            <td><span id="updateTime" class="monospace">${state.updateTime || ' --- '}</span></td>
        </tr>
        <tr>
            <th class="no-select">更新检查：</th>
            <td><span id="checkVersion" class="monospace ${state.updateAvailable ? 'hasNew' : nothing}"><a>${state.newSha}</a></span> ${state.versionInfo}</td>
        </tr>
    </table>
    <button @click="${() => this.updateButtonClick()}" ?disabled=${state.updateButtonDisabled} class="big-button ${state.updateAvailable ? 'primary' : nothing}" id="updateButton">更新</button>
    <div class="foot-buttons">
        <div>
            <a id="settingSwitch" href="#" @click="${() => state.showSettingPanel = !state.showSettingPanel}">设置</a>
        </div>
        <div class="cushion"></div>
        <div>
            <a href="#" @click="${() => {
      this.openLink('https://github.com/EhTagTranslation/EhSyringe');
    }}" id="extensionVersion" class="monospace">V${state.extensionVersion}</a>
        </div>
    </div>
</div>
${state.configValue ? this._settingPanelTemplate() : nothing}`;
  }

  _update() {
    render(this._template(), document.body);
  }
}

window.onload = () => new Popup();
