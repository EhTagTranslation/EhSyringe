import { Service } from 'services';
import { createMenu, type Context, type Menu, type OnClickData } from 'providers/menu';
import { openInTab } from 'providers/utils';
import { EH, EHGT, EX, EXU, HATH, isEhGt, isUnion } from 'utils/hosts';

@Service()
export class ImageContextMenu implements Menu {
    constructor() {
        this.init();
    }

    private init(): void {
        createMenu(this);
    }
    readonly documentUrlPatterns = [
        `*://${EX}/*`,
        `*://${EXU}/*`,
        `*://${EH}/*`,
        `*://*.${EX}/*`,
        `*://*.${EXU}/*`,
        `*://*.${EH}/*`,
    ];
    readonly title = `显示所有包含此图像的图库`;
    readonly targetUrlPatterns = [
        `*://${EX}/t/*.jpg`,
        `*://${EXU}/t/*.jpg`,
        `*://${EHGT}/*.jpg`,
        `*://ul.${EHGT}/*.jpg`,
        `*://*.${HATH}:*/h/*`,
        `*://*.${HATH}/h/*`,
    ];
    readonly contexts: Context[] = ['image', 'link'];

    readonly onclick = (info: OnClickData): void => {
        if (!info.url) return;
        const url = new URL(info.url);
        const match = /[a-f0-9]{40}/i.exec(url.pathname);
        if (!match) return;
        let base = `https://${EX}`;
        if (isEhGt(url.hostname)) base = `https://${EH}`;
        else if (isUnion(url.hostname)) base = `http://${EXU}`;
        openInTab(`${base}/?f_shash=${match[0]}`);
    };
}
