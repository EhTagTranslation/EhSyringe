import { html, nothing, render, svg, type SVGTemplateResult, type TemplateResult } from 'lit-html';
import { sleep } from 'utils';
import { Service } from 'typedi';
import { Logger } from 'services/logger';
import { type ConfigData, Storage, ImageLevel } from 'services/storage';
import { Messaging } from 'services/messaging';
import { DateTime } from 'services/date-time';
import { openInTab } from 'providers/utils';
import type { DownloadStatus } from 'plugin/database-updater';
import { packageJson } from 'info';
import type { MessageListener } from 'providers/common/messaging';

import './index.less';

export interface PopupProvider {
    close(): void;
    onclose(listener: () => unknown): void;
    onopen(listener: () => unknown): void;
}

interface PopupState {
    sha: string;
    updateTime: string;
    updateTimeFull: string;
    newSha: string;
    versionInfo: string;
    updateAvailable: boolean;
    updateButtonDisabled: boolean;
    showSettingPanel: boolean;
    progress: number;
    animationState: number;
    info: string;
    configValue: ConfigData;
}

@Service()
export class Popup {
    constructor(
        readonly logger: Logger,
        readonly messaging: Messaging,
        readonly storage: Storage,
        readonly time: DateTime,
    ) {}

    private configOriginal!: ConfigData;

    defaults = (): PopupState => ({
        sha: '',
        info: '',
        updateTime: '',
        updateTimeFull: '',
        newSha: '',
        versionInfo: '',
        updateAvailable: false,
        updateButtonDisabled: false,
        showSettingPanel: false,
        progress: 0,
        animationState: 0,
        configValue: { ...this.configOriginal },
    });
    private state!: PopupState;

    private testAnimationIndex = 0;
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

    async loadConfig(): Promise<void> {
        this.configOriginal = { ...this.storage.defaults.config, ...(await this.storage.get('config')) };
        this.state.configValue = { ...this.configOriginal };
    }

    testAnimation(): void {
        const a = this.testAnimationList[this.testAnimationIndex];
        this.testAnimationIndex++;
        if (!this.testAnimationList[this.testAnimationIndex]) {
            this.testAnimationIndex = 0;
        }
        this.state.animationState = a[0];
        this.state.progress = a[1];
    }

    async checkVersion(): Promise<void> {
        this.state.versionInfo = '检查中...';

        const currentSha = await this.messaging.emit('get-tag-sha', undefined);
        const updateTime = (await this.storage.get('databaseInfo'))?.check;
        this.state.sha = currentSha ? currentSha.slice(0, 7) : 'N/A';
        this.state.updateTime = updateTime ? this.time.diff(updateTime) : 'N/A';
        this.state.updateTimeFull = updateTime ? new Date(updateTime).toLocaleString() : 'N/A';
        try {
            const data = await this.messaging.emit('check-database', { force: true });
            this.logger.log('Release Data', data);
            const hasNewData = (this.state.updateAvailable = !currentSha.startsWith(data.sha));
            if (hasNewData) {
                this.state.newSha = data.sha.slice(0, 7);
                this.state.versionInfo = `有更新！`;
            } else {
                this.state.versionInfo = '已是最新版本';
            }
        } catch (ex) {
            this.logger.error('获取失败', ex);
            const message = (ex instanceof Error ? ex.message : '未知错误') || '未知错误';
            this.state.versionInfo = `获取失败：${message}`;
        }
    }

    private openLink = (ev: MouseEvent): void => {
        if (ev.target instanceof HTMLAnchorElement) {
            const href = ev.target.href;
            if (href && !href.startsWith(document.location.origin + document.location.pathname)) {
                ev.preventDefault();
                openInTab(href);
                this.provider.close();
            }
        }
    };

    private downloadStatus = async (data: DownloadStatus): Promise<void> => {
        this.state.updateButtonDisabled = data.run;
        this.state.animationState = data.run ? 1 : 0;
        this.state.info = data.info;
        this.state.progress = data.progress || 0;
        if (data.complete) {
            await sleep(1000);
            this.state.progress = 100;
            this.state.animationState = 2;
            this.state.updateButtonDisabled = false;
            await this.checkVersion();

            await sleep(500);
            this.state.progress = 5;

            await sleep(500);
            this.state.animationState = 1;
        }
    };

    private async updateButtonClick(): Promise<void> {
        this.state.updateButtonDisabled = true;
        await this.messaging.emit('update-database', { force: true, recheck: false });
    }

    private logoTemplate(progress = 0): SVGTemplateResult {
        const PushRodStyle = `transform: translate(${(progress / 400) * 70}px, 0)`;
        const EnemaStyle = `transform: scaleX(${progress / 100})`;
        return svg`<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <defs>
                <clipPath id="clip">
                    <rect width="200" height="200" />
                </clipPath>
            </defs>
            <g id="Syringe" clip-path="url(#clip)">
                <g id="PushRod" style="${PushRodStyle}">
                    <g transform="translate(-39 -312)">
                        <g transform="translate(131 403)" fill-bg stroke-accent stroke-width="6">
                            <rect width="78" height="18" rx="6" stroke="none" />
                            <rect x="3" y="3" width="72" height="12" rx="3" fill="none" />
                        </g>
                        <g transform="translate(203 391)" fill-bg stroke-accent stroke-width="6">
                            <rect width="18" height="43" rx="9" stroke="none" />
                            <rect x="3" y="3" width="12" height="37" rx="6" fill="none" />
                        </g>
                    </g>
                </g>
                <g transform="translate(56 85)" fill-bg stroke-accent stroke-width="6">
                    <rect width="83" height="30" rx="6" stroke="none" />
                    <rect x="3" y="3" width="77" height="24" rx="3" fill="none" />
                </g>
                <g id="Enema" style="${EnemaStyle}">
                    <rect width="70" height="27" transform="translate(61 86)" fill-sa />
                </g>
                <path
                    id="Enema2"
                    d="M27.426,86.36s5.65.007,13.6.006S57.64,83.357,57.64,83.357L38.015,102.982,24.409,89.377l3.015-3.015Z"
                    transform="translate(107.906 10.036) rotate(45)"
                    fill-sa
                />
                <g transform="translate(-39 -312)">
                    <g transform="translate(95 397)" fill="none" stroke-accent stroke-width="6">
                        <rect width="83" height="30" rx="6" stroke="none" />
                        <rect x="3" y="3" width="77" height="24" rx="3" fill="none" />
                    </g>
                    <g transform="translate(82 403)" fill-sa stroke-accent stroke-width="6">
                        <rect width="19" height="18" rx="6" stroke="none" />
                        <rect x="3" y="3" width="13" height="12" rx="3" fill="none" />
                    </g>
                    <rect width="29" height="6" rx="3" transform="translate(58 409)" fill-accent />
                    <g transform="translate(172 381)" fill-bg stroke-accent stroke-width="6">
                        <rect width="18" height="62" rx="9" stroke="none" />
                        <rect x="3" y="3" width="12" height="56" rx="6" fill="none" />
                    </g>
                    <g transform="translate(119 398)" fill-bg stroke-accent stroke-width="3">
                        <rect width="4" height="11" rx="2" stroke="none" />
                        <rect x="1.5" y="1.5" width="1" height="8" rx="0.5" fill="none" />
                    </g>
                    <g transform="translate(131 398)" fill-bg stroke-accent stroke-width="3">
                        <rect width="4" height="11" rx="2" stroke="none" />
                        <rect x="1.5" y="1.5" width="1" height="8" rx="0.5" fill="none" />
                    </g>
                    <g transform="translate(144 398)" fill-bg stroke-accent stroke-width="3">
                        <rect width="4" height="11" rx="2" stroke="none" />
                        <rect x="1.5" y="1.5" width="1" height="8" rx="0.5" fill="none" />
                    </g>
                    <g transform="translate(156 398)" fill-bg stroke-accent stroke-width="3">
                        <rect width="4" height="11" rx="2" stroke="none" />
                        <rect x="1.5" y="1.5" width="1" height="8" rx="0.5" fill="none" />
                    </g>
                </g>
            </g>
        </svg>`;
    }

    private changeConfigValue<T extends keyof ConfigData>(key: T, value: ConfigData[T]): void {
        this.state.configValue = {
            ...this.state.configValue,
            [key]: value,
        };
    }

    private changeConfigUnsaved(): boolean {
        if (!this.configOriginal) return false;
        const keys = [...Object.keys(this.configOriginal), ...Object.keys(this.state.configValue)] as Array<
            keyof ConfigData
        >;
        return keys.some((key) => this.configOriginal[key] !== this.state.configValue[key]);
    }

    async saveConfig(): Promise<void> {
        await this.storage.set('config', this.state.configValue);
        await this.loadConfig();
        await sleep(200);
        this.provider.close();
    }

    private settingPanelTemplate(): TemplateResult {
        const state = this.state;

        const checkboxList: Array<{ key: keyof ConfigData; name: string }> = [
            { key: 'translateUi', name: '翻译界面' },
            { key: 'translateTag', name: '翻译标签' },
            { key: 'translateTimestamp', name: '翻译时间戳' },
            { key: 'showIntroduce', name: '标签介绍' },
            { key: 'showIcon', name: '显示标签图标' },
            { key: 'tagTip', name: '搜索提示' },
            { key: 'autoUpdate', name: '自动更新' },
        ];
        return html`
            <div id="ehs-setting-panel" class="ehs-panel ${state.showSettingPanel ? 'ehs-show' : ''}">
                <div class="header">
                    <div>设置</div>
                    <div class="cushion"></div>
                    <div>
                        <a
                            href="#"
                            @click="${(ev: Event) => {
                                state.showSettingPanel = false;
                                ev.preventDefault();
                            }}"
                            >✕</a
                        >
                    </div>
                </div>
                <form id="settingForm" class="content">
                    ${checkboxList.map(
                        (item) => html`
                            <div class="checkbox-item">
                                <label>
                                    <input
                                        type="checkbox"
                                        @change=${(e: Event) =>
                                            this.changeConfigValue(item.key, (e.target as HTMLInputElement).checked)}
                                        ?checked="${this.state.configValue[item.key] as boolean}"
                                    />
                                    ${item.name}
                                    <svg
                                        class="${this.state.configValue[item.key] ? 'checked' : ''}"
                                        viewBox="0 0 100 100"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M 10 10 L 90 90"></path>
                                        <path d="M 90 10 L 10 90"></path>
                                    </svg>
                                </label>
                            </div>
                        `,
                    )}
                    <div class="image-level">
                        <p class="range-title">
                            介绍图片:
                            <span
                                >${['隐藏全部', '隐藏色情图片', '隐藏引起不适的图片', '全部显示'][
                                    state.configValue.introduceImageLevel
                                ]}</span
                            >
                        </p>
                        <div class="range-box">
                            <input
                                type="range"
                                min="0"
                                max="300"
                                @change=${(e: Event) => {
                                    const value = Math.round(parseInt((e.target as HTMLInputElement).value, 10) / 100);
                                    this.changeConfigValue('introduceImageLevel', value + 1);
                                    this.changeConfigValue('introduceImageLevel', value);
                                }}
                                .value="${String(state.configValue.introduceImageLevel * 100)}"
                            />
                        </div>
                        <div class="range-label" @click="${(ev: Event) => ev.preventDefault()}">
                            <a href="#" @click="${() => this.changeConfigValue('introduceImageLevel', ImageLevel.hide)}"
                                >禁用</a
                            >
                            <a href="#" @click="${() => this.changeConfigValue('introduceImageLevel', ImageLevel.nonH)}"
                                >非H</a
                            >
                            <a href="#" @click="${() => this.changeConfigValue('introduceImageLevel', ImageLevel.r18)}"
                                >R18</a
                            >
                            <a href="#" @click="${() => this.changeConfigValue('introduceImageLevel', ImageLevel.r18g)}"
                                >R18G</a
                            >
                        </div>
                    </div>
                    <div class="override-db">
                        <label for="overrideDbUrl">外部数据库: </label>
                        <input
                            id="overrideDbUrl"
                            type="text"
                            pattern="https?://.+|"
                            value="${this.state.configValue.overrideDbUrl || ''}"
                            placeholder="https://eg.com/data.html.json"
                            @change="${(e: Event) => {
                                const el = e.target as HTMLInputElement;
                                const value = String(el.value || '').trim();
                                el.value = value;
                                let valid = true;
                                if (value) {
                                    try {
                                        const u = new URL(value);
                                        if (u.protocol !== 'http:' && u.protocol !== 'https:') {
                                            valid = false;
                                        }
                                    } catch {
                                        valid = false;
                                    }
                                }
                                el.classList.toggle('invalid', !valid);
                                if (valid) {
                                    this.changeConfigValue('overrideDbUrl', value);
                                }
                            }}"
                        />
                    </div>
                </form>
                <button
                    @click="${async () => {
                        await this.saveConfig();
                    }}"
                    class="action ${this.changeConfigUnsaved() ? 'primary' : ''}"
                >
                    保存
                </button>
            </div>
        `;
    }

    private mainPanelTemplate(): TemplateResult {
        const state = this.state;
        return html`<div id="ehs-main-panel" class="ehs-panel ${state.showSettingPanel ? 'ehs-hide' : ''}">
            <div class="header">
                <div>
                    <a href="${packageJson.homepage}" class="monospace minor">v${packageJson.version}</a>
                </div>
                <div class="cushion"></div>
                <div>
                    <a
                        id="settingSwitch"
                        href="#"
                        @click="${(ev: Event) => {
                            state.showSettingPanel = true;
                            ev.preventDefault();
                        }}"
                        >设置</a
                    >
                </div>
            </div>
            <div class="content">
                <div class="logo-box" style="height: 205px;">
                    <div
                        class="logo ${['', 'prominent', 'prominent injection'][state.animationState] || ''}"
                        @click="${() => {
                            this.testAnimation();
                        }}"
                    >
                        ${this.logoTemplate(state.progress)}
                    </div>
                    <div id="info">${state.info}</div>
                </div>
                <table>
                    <tr>
                        <th>标签版本：</th>
                        <td>
                            <a href="https://github.com/EhTagTranslation/Database/tree/${state.sha}" class="monospace"
                                >${state.sha || ' --- '}</a
                            >
                        </td>
                    </tr>
                    <tr>
                        <th>上次更新：</th>
                        <td>
                            <span>${state.updateTime || ' --- '}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>更新检查：</th>
                        <td>
                            <span class="${state.updateAvailable ? 'hasNew' : ''}">
                                ${state.versionInfo}
                                <a
                                    class="monospace ${state.updateAvailable ? '' : 'hidden'}"
                                    href="https://github.com/EhTagTranslation/Database/tree/${state.newSha}"
                                >
                                    ${state.newSha || ''}
                                </a>
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
            <button
                @click="${() => this.updateButtonClick()}"
                ?disabled=${state.updateButtonDisabled}
                class="action ${state.updateAvailable ? 'primary' : ''}"
                id="updateButton"
            >
                更新
            </button>
        </div>`;
    }

    private template(): TemplateResult {
        const state = this.state;
        return html` <div id="eh-syringe-popup-root">
            ${this.mainPanelTemplate()} ${state.configValue ? this.settingPanelTemplate() : nothing}
        </div>`;
    }

    private el!: HTMLElement;
    private provider!: PopupProvider;
    private downloadStatusSub?: MessageListener<'updating-database', DownloadStatus, void>;
    mount(el: HTMLElement, provider: PopupProvider): void {
        if (this.el != null) throw new Error('Injected twice');
        this.el = el;
        this.provider = provider;
        this.resetState();
        this.updateView();
        provider.onopen(() => this.onopen().catch(this.logger.error));
        provider.onclose(() => this.onclose());
    }

    private resetState(): void {
        this.state = new Proxy(this.defaults(), {
            set: (target, key, value, receiver) => {
                const r = Reflect.set(target, key, value, receiver);
                this.updateView();
                return r;
            },
        });
    }

    private async onopen(): Promise<void> {
        this.resetState();
        await this.loadConfig();
        this.updateView();
        await sleep(0);
        await this.checkVersion();
        this.downloadStatusSub ??= this.messaging.on('updating-database', this.downloadStatus);
        this.el.addEventListener('click', this.openLink);
    }

    private onclose(): void {
        if (this.downloadStatusSub) {
            this.messaging.off(this.downloadStatusSub);
            this.downloadStatusSub = undefined;
        }
        this.el.removeEventListener('click', this.openLink);
        this.state.showSettingPanel = false;
    }

    private updateView(): void {
        render(this.template(), this.el);
    }
}
