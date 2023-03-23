import { Service } from 'services';
import { createMenu, type Context, type Menu, type OnClickData } from 'providers/menu';
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
        '*://exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*',
        '*://e-hentai.org/*',
        '*://*.exhentai.org/*',
        '*://*.exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*',
        '*://*.e-hentai.org/*',
    ];
    readonly title = '显示所有包含此图像的图库';
    readonly targetUrlPatterns = [
        '*://exhentai.org/t/*.jpg',
        '*://exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/t/*.jpg',
        '*://ehgt.org/*.jpg',
        '*://ul.ehgt.org/*.jpg',
        '*://*.hath.network:*/h/*',
        '*://*.hath.network/h/*',
    ];
    readonly contexts: Context[] = ['image', 'link'];

    readonly onclick = (info: OnClickData): void => {
        if (!info.url) return;
        const url = new URL(info.url);
        const match = /[a-f0-9]{40}/i.exec(url.pathname);
        if (!match) return;
        let base = 'https://exhentai.org';
        if (url.hostname.includes('ehgt.org')) base = 'https://e-hentai.org';
        else if (url.hostname.includes('exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion'))
            base = 'http://exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion';
        openInTab(`${base}/?f_shash=${match[0]}`);
    };
}
