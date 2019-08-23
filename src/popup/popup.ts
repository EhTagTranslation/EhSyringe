
import { html, nothing, render, svg } from 'lit-html';
import { DownloadStatus, ReleaseCheckData } from '../interface';
import { chromeMessage } from '../tool/chrome-message';
import { config, ConfigData } from '../tool/config-manage';
import { sleep } from '../tool/promise';
import { dateDiff } from '../tool/tool';

import './popup.less';
import { browser } from 'webextension-polyfill-ts';
import { logger } from '../tool/log';

interface PopupState {
    sha: string;
    updateTime: string;
    updateTimeFull: string;
    extensionVersion: string;
    shaRef: string;
    newSha: string;
    newShaRef: string;
    versionInfo: string;
    updateAvailable: boolean;
    updateButtonDisabled: boolean;
    showSettingPanel: boolean;
    progress: number;
    animationState: number;
    info: string;
    configValue?: ConfigData;
}

class Popup {

    constructor() {
        window.addEventListener('click', this.openLink);
        this._update();
        this.getVersion().catch(logger.error);
        this.checkVersion().catch(logger.error);
        this.loadConfig().catch(logger.error);
        browser.management.getSelf().then(data => {
            this.state.extensionVersion = `${data.version}`;
        }).catch(logger.error);
        chromeMessage.listener('downloadStatus', data => this.downloadStatus(data as DownloadStatus));
    }

    private readonly _state: PopupState = {
        sha: '',
        shaRef: '',
        info: '',
        updateTime: '',
        updateTimeFull: '',
        extensionVersion: '',
        newSha: '',
        newShaRef: '',
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
    private testAnimationList: Array<[number, number]> = [
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
        this.configOriginal = await config.get();
        this.state.configValue = { ...this.configOriginal };
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

    async getVersion() {
        const data = await browser.storage.local.get(['sha', 'releaseLink', 'updateTime']);
        this.state.sha = data.sha ? data.sha.slice(0, 6) : 'N/A';
        this.state.shaRef = data.releaseLink || '';
        this.state.updateTime = data.updateTime ? dateDiff(data.updateTime) : 'N/A';
        this.state.updateTimeFull = new Date(data.updateTime).toLocaleString();
    }

    async checkVersion() {
        this.state.versionInfo = '检查中...';
        const data = await chromeMessage.send('check-version', void 0);
        logger.log('Release Data', data);
        if (data && data.new) {
            const hasNewData = this.state.updateAvailable = data.new !== data.old;
            if (hasNewData) {
                this.state.newSha = data.new.slice(0, 6);
                this.state.newShaRef = data.newLink;
                this.state.versionInfo = `有更新！`;
            } else {
                this.state.versionInfo = '已是最新版本';
            }
        } else {
            this.state.versionInfo = '获取失败';
        }
    }

    async openLink(ev: MouseEvent): Promise<void> {
        if (ev.target instanceof HTMLAnchorElement) {
            const href = ev.target.href;
            if (href && !href.startsWith(document.location.origin + document.location.pathname)) {
                ev.preventDefault();
                await browser.tabs.create({ url: href });
                window.close();
            }
        }
    }

    async downloadStatus(data: DownloadStatus): Promise<void> {
        this.state.updateButtonDisabled = data.run;
        this.state.animationState = data.run ? 1 : 0;
        this.state.info = data.info;
        this.state.progress = data.progress || 0;
        if (data.complete) {
            await sleep(1000);
            this.state.progress = 100;
            this.state.animationState = 2;
            this.state.updateButtonDisabled = false;
            await this.getVersion();
            await this.checkVersion();

            await sleep(500);
            this.state.progress = 5;

            await sleep(500);
            this.state.animationState = 1;
        }
    }

    private updateButtonClick = () => {
        this.state.updateButtonDisabled = true;
        chromeMessage.send('get-tag-data', void 0).catch(logger.error);
    }

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
        if (key === 'introduceImageLevel') {
            this.state.configValue = {
                ...this.state.configValue,
                introduceImageLevel: value - 1,
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

    async saveConfig() {
        await config.set(this.state.configValue);
        await this.loadConfig();
        await sleep(200);
        const tabs = await browser.tabs.query({ active: true });
        if (tabs && tabs.length) {
            const ehtabs = tabs.filter(v => v.url && (/(\/\/|\.)(e-|ex)hentai\.org/i).test(v.url));
            logger.log('Reload tabs', ehtabs);
            ehtabs.forEach(v => chrome.tabs.reload(v.id));
        }
        window.close();
    }

    _settingPanelTemplate() {
        const state = this.state;

        const checkboxList: Array<{ key: string, name: string }> = [
            { key: 'translateUI', name: '翻译界面' },
            { key: 'translateTag', name: '翻译标签' },
            { key: 'showIntroduce', name: '标签介绍' },
            { key: 'showIcon', name: '显示标签图标' },
            { key: 'tagTip', name: '搜索提示' },
            { key: 'autoUpdate', name: '自动更新' },
        ];

        return html`
    <div id="settingPanel" class="${state.showSettingPanel ? 'open' : ''}" >
    <div class="close"><a @click="${() => this.state.showSettingPanel = false}" href="#">×</a></div>
    <div class="form">
      <form id="settingForm">
        <h3 style="margin-top: 0">设置</h3>
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
        <p class="checkbox-item">介绍图片: <span>${['禁用', '隐藏色情图片', '隐藏引起不适的图片', '全部显示'][state.configValue.introduceImageLevel]}</span></p>
        <div class="image-level">
          <div class="range-box">
            <input type="range" min="0" max="300"
            @change=${(e: Event) => this.changeConfigValue('introduceImageLevel', Math.round(parseInt((e.target as HTMLInputElement).value, 10) / 100))}
            .value="${state.configValue.introduceImageLevel * 100}"/>
          </div>
          <div class="range-label">
            <a href="#" @click="${() => this.changeConfigValue('introduceImageLevel', 0)}">禁用</a>
            <a href="#" @click="${() => this.changeConfigValue('introduceImageLevel', 1)}">非H</a>
            <a href="#" @click="${() => this.changeConfigValue('introduceImageLevel', 2)}">R18</a>
            <a href="#" @click="${() => this.changeConfigValue('introduceImageLevel', 3)}">R18G</a>
          </div>
        </div>
      </form>
    </div>
    <div class="submit-button">
      <button @click="${async () => { await this.saveConfig(); }}" class="big-button ${this.changeConfigUnsaved() ? 'primary' : ''}">保存</button>
    </div>
</div>
    `;
    }

    _template() {
        const state = this.state;
        return html`
<div class="popup-root ${state.showSettingPanel ? 'hide' : ''}">
    <div class="head-buttons">
        <div>
           <a href="https://github.com/EhTagTranslation/EhSyringe" id="extensionVersion" class="monospace">V${state.extensionVersion}</a>
        </div>
        <div class="cushion"></div>
        <div>
          <a id="settingSwitch" href="#" @click="${() => state.showSettingPanel = !state.showSettingPanel}">设置</a>
        </div>
    </div>
<!--
<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M867.421947 451.006196c-0.204677-16.169498-11.973616-29.678193-27.938437-32.134319l-45.438337-7.061363-12.38297-23.742554 26.198681-43.596242c7.675395-12.792325 5.8333-29.268839-4.605237-40.014391L721.487108 220.027983c-10.847891-11.257246-27.73376-13.406356-41.037777-5.219268l-44.721967 27.426744-20.058365-11.871277-12.178293-50.35059c-3.581851-14.941435-16.78353-25.482311-32.134319-25.482311L452.643614 154.531281c-15.35079 0-28.552469 10.540875-32.134319 25.482311L408.331001 230.261843l-20.058365 11.871277-44.721967-27.324405c-13.304018-8.187088-30.189886-6.037977-41.037777 5.219268l-81.563862 84.327004c-10.438537 10.745553-12.280632 27.222067-4.605237 40.014391l26.198681 43.596242-12.38297 23.742554-45.438337 7.061363c-15.964821 2.456126-27.73376 16.06716-27.938437 32.134319l-1.842095 114.619228c-0.204677 13.918049 8.391765 26.608035 21.388767 31.520288l54.853488 20.672397 8.494104 19.034979-28.245453 42.777533c-8.698781 13.201679-6.856686 30.803918 4.502898 41.856486l84.838697 83.098941c11.154907 10.847891 28.552469 12.485309 41.54947 3.888867l40.8331-27.222067 22.61683 10.23386 7.982411 49.634219c2.558465 15.862483 15.964821 27.631421 32.031981 27.631421l132.835499 0c16.06716 0 29.575854-11.768939 32.031981-27.631421l7.982411-49.838897 22.61683-10.23386 40.8331 27.222067c12.894663 8.596442 30.394563 6.959025 41.54947-3.888867l84.838697-83.098941c11.359584-11.052568 13.201679-28.654807 4.502898-41.856486l-28.245453-42.777533 8.494104-19.034979 54.853488-20.672397c12.997002-4.912253 21.593444-17.602239 21.388767-31.520288L867.421947 451.006196zM772.34939 577.394363c-8.187088 3.070158-14.941435 9.415151-18.523286 17.4999l-13.201679 29.575854c-4.605237 10.438537-3.684189 22.309814 2.558465 31.724965l26.505697 40.014391-70.920648 69.385569-38.274635-25.482311c-9.619828-6.344993-21.593444-7.368379-32.031981-2.558465L593.973216 753.212073c-10.131521 4.605237-17.192884 13.611033-19.034979 24.561263l-7.368379 46.052369L456.430142 823.825705l-7.368379-46.052369c-1.739756-10.95023-8.801119-20.160704-19.034979-24.76594l-34.488107-15.555467c-10.438537-4.809914-22.514491-3.786528-32.031981 2.660804l-38.274635 25.482311-70.920648-69.385569 26.505697-40.014391c6.242654-9.51749 7.26604-21.388767 2.558465-31.724965L270.173896 594.894263c-3.581851-7.982411-10.336198-14.327404-18.523286-17.4999l-51.680991-19.444333 1.535079-96.198281 41.447132-6.447332c10.336198-1.637418 19.341995-8.084749 24.254247-17.397561l18.318609-34.9998c5.321607-10.131521 4.912253-22.514491-0.921047-32.338997l-24.868279-41.447132 68.56686-70.818309 42.675195 26.096342c10.438537 6.447332 23.537877 6.54967 34.078753 0.307016l30.59924-18.011593c7.675395-4.502898 13.304018-12.178293 15.35079-20.877074l11.154907-46.154707 99.984809 0 11.154907 46.154707c2.046772 8.596442 7.675395 16.271837 15.35079 20.774735l30.59924 18.113932c10.540875 6.242654 23.640216 6.140316 34.078753-0.307016l42.675195-26.096342 68.56686 70.818309L739.498701 370.465721c-5.935639 9.824505-6.242654 22.207476-0.921047 32.338997l18.318609 34.9998c4.809914 9.210474 13.918049 15.760144 24.254247 17.397561l41.447132 6.447332 1.535079 96.198281L772.34939 577.394363z" p-id="2031"></path><path d="M512 407.614631c-57.514291 0-104.385369 46.871077-104.385369 104.385369 0 57.514291 46.871077 104.385369 104.385369 104.385369 57.514291 0 104.385369-46.871077 104.385369-104.385369C616.385369 454.485709 569.61663 407.614631 512 407.614631zM512 571.356386c-32.748351 0-59.356386-26.608035-59.356386-59.356386 0-32.748351 26.608035-59.356386 59.356386-59.356386 32.748351 0 59.356386 26.608035 59.356386 59.356386C571.356386 544.748351 544.748351 571.356386 512 571.356386z" p-id="2032"></path></svg>
-->

    <div class="logo-box" style="height: 205px;">
        <div class="logo ${['', 'prominent', 'prominent injection'][state.animationState] || ''}"
        @click="${() => {
                this.testAnimation();
            }}">
          ${this._logoTemplate(state.progress)}
        </div>
        <div id="info">${state.info}</div>
    </div>
    <div class="content">
      <table>
        <tr>
          <th>TAG版本：</th>
          <td><a href="${state.shaRef}" class="monospace">${state.sha || ' --- '}</a></td>
        </tr>
        <tr>
          <th>上次更新：</th>
          <td><span class="monospace">${state.updateTime || ' --- '}</span></td>
        </tr>
        <tr>
          <th>更新检查：</th>
          <td><span class="monospace ${state.updateAvailable ? 'hasNew' : ''}"><a  class="${state.updateAvailable ? '' : 'hidden'}" href="${state.newShaRef}">${state.newSha || ''}</a></span> ${state.versionInfo}</td>
        </tr>
      </table>
      <button @click="${() => this.updateButtonClick()}" ?disabled=${state.updateButtonDisabled} class="big-button ${state.updateAvailable ? 'primary' : ''}" id="updateButton">更新</button>
    </div>

</div>
${state.configValue ? this._settingPanelTemplate() : nothing}`;
    }

    _update() {
        render(this._template(), document.body);
    }
}

window.onload = () => new Popup();
