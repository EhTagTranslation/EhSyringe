import { EHTNamespaceName } from '../interface';
import { Service } from 'services';
import { createMenu, Context, Menu, OnClickData } from 'providers/menu';
import { openInTab } from 'providers/utils';

@Service()
export class ImageContextMenu implements Menu {
    constructor() {
        this.init();
    }

    private init(): void {
        createMenu(this);
    }
    readonly documentUrlPatterns = [
        '*://exhentai.org/*',
        '*://e-hentai.org/*',
        '*://*.exhentai.org/*',
        '*://*.e-hentai.org/*',
    ];
    readonly title = '显示所有包含此图片的图库';
    readonly targetUrlPatterns = [
        '*://exhentai.org/t/*.jpg',
        '*://ehgt.org/*.jpg',
        '*://ul.ehgt.org/*.jpg',
        '*://*.hath.network:*/h/*',
        '*://*.hath.network/h/*',
    ];
    readonly contexts: Context[] = ['image', 'link'];

    readonly onclick = (info: OnClickData): void => {
        const url = info.url ?? '';
        const match = /[a-f0-9]{40}/i.exec(url);
        if (!match) return;
        openInTab(`https://exhentai.org/?f_shash=${match[0]}`);
    };
}
