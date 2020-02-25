import { EHTNamespaceName } from '../../interface';
import { chromeMessage } from '../../tool/chrome-message';
import { config, ConfigData } from '../../tool/config-manage';
import { logger } from '../../tool/log';
import { getEditorUrl, getFullKey } from '../../tool/tool';

import './introduce.less';

class Introduce {
    constructor() {
        this.introduceBox = document.createElement('div')
        this.introduceBox.id = 'ehs-introduce-box';
    }

    async init() {
        const conf = await config.get();
        if (!conf.showIntroduce) return;

        const taglist = document.querySelector('#taglist');
        const gright = document.querySelector('#gright');

        if (!(taglist && gright)) return;

        logger.log('标签介绍');
        gright.insertBefore(this.introduceBox, null);

        taglist.addEventListener('click', this.onclick);
    }

    readonly introduceBox: HTMLDivElement;
    readonly config: ConfigData;

    target: HTMLAnchorElement;

    private findTarget(node: Node) {
        const isTarget = (n: Node): n is HTMLAnchorElement =>
            n.nodeType === Node.ELEMENT_NODE && n.nodeName === 'A'
            && (n as HTMLElement).id.startsWith('ta_')
            && n.parentElement
            && (
                n.parentElement.classList.contains('gt') ||
                n.parentElement.classList.contains('gtl') ||
                n.parentElement.classList.contains('gtw')
            );
        while (node) {
            if (isTarget(node)) return node;
            node = node.parentNode;
        }
        return null;
    }

    readonly onclick = async (e: MouseEvent) => {
        const target = this.findTarget(e.target as Node);
        if (!target) {
            return;
        }
        this.target = target;
        const isOpen = !!target.style.color;
        if (!isOpen) {
            this.introduceBox.innerHTML = '';
            return;
        }
        const m = /'(.*)'/ig.exec(target.getAttribute('onclick'));
        if (!(m && m[1])) return;
        const m2 = m[1].split(':');
        let namespace: EHTNamespaceName = 'misc';
        let tag = '';
        if (m2.length === 1) {
            tag = m2[0];
        } else {
            namespace = m2.shift() as EHTNamespaceName;
            tag = m2.join(':');
        }
        const timer = logger.time('获取标签介绍');
        const tagData = await chromeMessage.send('get-taglist', getFullKey(namespace, tag));
        timer.log(tagData);
        timer.end();

        if (this.target !== target) {
            return;
        }
        if (tagData && !Array.isArray(tagData)) {
            // language=HTML
            this.introduceBox.innerHTML = `
            <div class="ehs-title">
                <div>
                    <div class="ehs-cn">${tagData.name}</div>
                    <div class="ehs-en">${tagData.namespace}:${tagData.key}</div>
                </div>
                <span class="ehs-close" onclick="document.querySelector('#ehs-introduce-box').innerHTML = '';">×</span>
            </div>
            <div class="ehs-content">
                ${tagData.intro || `
                <div class="ehs-no-intro">无介绍</div>
                `}
            </div>
            <div class="ehs-href">${tagData.links}</div>`;
        } else {
            const editorUrl = getEditorUrl(namespace, tag);
            // language=HTML
            this.introduceBox.innerHTML = `
            <div class="ehs-title">
                <div>
                    <div class="ehs-cn">${namespace}:${tag}</div>
                    <div class="ehs-en">该标签尚未翻译</div>
                </div>
                <span class="ehs-close" onclick="document.querySelector('#ehs-introduce-box').innerHTML = '';">×</span>
            </div>
            <div class="ehs-content">
                <div class="ehs-no-translation">
                    <div class="text">
                        该标签尚未翻译
                    </div>
                    <div class="button">
                        <a href="${editorUrl}" target="_blank">提供翻译</a>
                    </div>
                </div>
            </div>`;
        }
    }
}

export const introduceInit = () => new Introduce().init();
