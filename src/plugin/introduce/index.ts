import type { EHTNamespaceName } from 'interface';
import { Service } from 'services';
import { Logger } from 'services/logger';
import { Storage } from 'services/storage';
import { Messaging } from 'services/messaging';

import './index.less';
import { Tagging } from 'services/tagging';

@Service()
export class Introduce {
    constructor(
        readonly logger: Logger,
        readonly storage: Storage,
        readonly messaging: Messaging,
        readonly tagging: Tagging,
    ) {
        this.init().catch(logger.error);
    }
    async init(): Promise<void> {
        const conf = await this.storage.get('config');
        if (!conf.showIntroduce) return;

        const tagList = document.querySelector('#taglist') as HTMLDivElement;
        this.tagList = tagList;
        const gridRight = document.querySelector('#gd5');

        if (!(tagList && gridRight)) return;

        this.logger.log('标签介绍');
        this.initIntroduceBox();
        gridRight.insertBefore(this.introduceBox, null);

        tagList.addEventListener('click', this.onclick);
    }

    private initIntroduceBox(): void {
        this.introduceBox = document.createElement('div');
        this.introduceBox.id = 'ehs-introduce-box';
        this.introduceBox.addEventListener('click', (ev) => {
            let target = ev.target as Node | null;

            if (target instanceof HTMLElement && target.classList.contains('ehs-close')) {
                const selectedTag = this.tagList.querySelector('[style*="color"]') as HTMLElement;
                if (selectedTag) {
                    selectedTag.click();
                } else {
                    this.closeIntroduceBox();
                }
                return;
            }

            while (target) {
                if (target.nodeName === 'A' && 'href' in target) break;
                target = target.parentNode;
            }
            if (target) {
                const a = target as HTMLAnchorElement;
                ev.preventDefault();
                window.open(a.href, '_BLANK');
            }
        });
    }

    private introduceBox!: HTMLDivElement;
    private tagList!: HTMLDivElement;

    private target: HTMLAnchorElement | null = null;

    private findTarget(node: Node | null): HTMLAnchorElement | null {
        const isTarget = (n: Node): n is HTMLAnchorElement =>
            n.nodeType === Node.ELEMENT_NODE &&
            n.nodeName === 'A' &&
            (n as HTMLElement).id.startsWith('ta_') &&
            n.parentElement != null &&
            (n.parentElement.classList.contains('gt') ||
                n.parentElement.classList.contains('gtl') ||
                n.parentElement.classList.contains('gtw'));
        while (node) {
            if (isTarget(node)) return node;
            node = node.parentNode;
        }
        return null;
    }

    private onImageError(ev: Event): void {
        const target = ev.target as HTMLImageElement;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        target.removeEventListener('error', this.onImageError);
        target.referrerPolicy = '';
    }

    async openIntroduceBox(namespace: EHTNamespaceName, key: string, canceled: () => boolean): Promise<void> {
        const timer = this.logger.time('获取标签介绍');
        const tagData = await this.messaging.emit('get-tag', this.tagging.fullKey({ namespace, key }));
        timer.log(tagData);
        timer.end();

        if (canceled()) {
            return;
        }
        const editorUrl = this.tagging.editorUrl({ namespace, key });
        if (tagData) {
            const tagEn = `${this.tagging.namespace(tagData.ns)}:${tagData.key}`;
            // language=HTML
            this.introduceBox.innerHTML = `
            <div class="ehs-title">
                <div title=${`${this.tagging.removeImagesAndEmoji(tagData.name)}\n${tagEn}`}>
                    <div class="ehs-cn">${this.tagging.markImagesAndEmoji(tagData.name)}</div>
                    <div class="ehs-en">${tagEn}</div>
                </div>
                <span class="ehs-close">×</span>
            </div>
            <div class="ehs-content">
                ${
                    tagData.intro
                        ? tagData.intro
                        : `
                    <div class="ehs-no-intro">
                        <h3>无介绍</h3>
                        <center><a href="${editorUrl}" target="_blank">提供介绍</a></center>
                    </div> `
                }
            </div>
            <div class="ehs-href">${tagData.links ?? ''}</div>`;
        } else {
            // language=HTML
            this.introduceBox.innerHTML = `
            <div class="ehs-title">
                <div title="${namespace}:${key}">
                    <div class="ehs-cn">${namespace}:${key}</div>
                    <div class="ehs-en">该标签尚未翻译</div>
                </div>
                <span class="ehs-close">×</span>
            </div>
            <div class="ehs-content">
                <div class="ehs-no-translation">
                    <h3>该标签尚未翻译</h3>
                ${
                    namespace === 'temp'
                        ? `
                    <p>
                        该标签尚未正式添加至 EH 标签系统。在提供翻译前，需要在 <a href="${this.tagging.suggestUrl}" target="_blank">EH 论坛</a>发帖将该标签移动到合适的命名空间。
                    </p>`
                        : `
                    <center>
                        <a href="${editorUrl}" target="_blank">提供翻译</a>
                    </center>`
                }
                </div>
            </div>`;
        }

        this.introduceBox.querySelectorAll('img').forEach((img) => {
            img.referrerPolicy = 'no-referrer';
            // eslint-disable-next-line @typescript-eslint/unbound-method
            img.addEventListener('error', this.onImageError);
        });
    }

    closeIntroduceBox(): void {
        this.introduceBox.innerHTML = '';
    }

    readonly onclick = (e: MouseEvent): void => {
        const target = this.findTarget(e.target as Node);
        if (!target) {
            return;
        }
        this.target = target;
        const isOpen = !!target.style.color;
        if (!isOpen) {
            this.closeIntroduceBox();
            return;
        }
        const m = /'(.*)'/gi.exec(target.getAttribute('onclick') ?? '');
        if (!m?.[1]) return;
        const m2 = m[1].split(':');
        let namespace: EHTNamespaceName = 'temp';
        let tag = '';
        if (m2.length === 1) {
            tag = m2[0];
        } else {
            namespace = m2.shift() as EHTNamespaceName;
            tag = m2.join(':');
        }

        this.openIntroduceBox(namespace, tag, () => this.target !== target).catch(this.logger.error);
    };
}
