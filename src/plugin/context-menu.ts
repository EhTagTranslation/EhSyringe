import { EHTNamespaceName } from '../interface';
import { getEditorUrl } from '../tool/tool';
import { Service } from 'services';
import { createMenu, Context, Menu, OnClickData } from 'providers/menu';
import { openInTab } from 'providers/utils';

@Service()
export class ContextMenu implements Menu {
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
    readonly title = '提交标签翻译';
    readonly targetUrlPatterns = [
        '*://exhentai.org/tag/*',
        '*://e-hentai.org/tag/*',
        '*://*.exhentai.org/tag/*',
        '*://*.e-hentai.org/tag/*',
    ];
    readonly contexts: Context[] = ['link'];

    readonly onclick = (info: OnClickData): void => {
        if (!info.url || !info.url.includes('/tag/')) {
            return;
        }
        const seg = info.url.split('/').pop()?.replace(/\+/g, ' ').split(':') ?? [];
        const namespace = seg.length <= 1 ? 'misc' : (seg[0] as EHTNamespaceName);
        const tag = seg.pop() ?? '';
        openInTab(getEditorUrl(namespace, tag));
    };
}
