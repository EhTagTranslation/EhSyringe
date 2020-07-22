import { Menu, Context } from '../common/menu';
import icon from 'assets/logo.svg';
import { Service } from 'typedi';
import { Logger } from 'services/logger';
import { Container } from 'services';
export * from '../common/menu';

type MenuInfo = {
    menu: Menu;
    patterns: RegExp[];
    el: HTMLElement;
};

const supported = 'contextMenu' in document.documentElement && 'HTMLMenuItemElement' in window;

@Service()
class MenuProvider {
    constructor(readonly logger: Logger) {
        if (!supported) {
            logger.warn(`不支持右键菜单`);
        }
    }

    init(): HTMLMenuElement {
        if (this.menu) return this.menu;
        const id = `user-script-menu-${Math.floor(Math.random() * 100000)}`;
        const body = document.body;
        const menu = body.appendChild(document.createElement('menu'));
        menu.id = id;
        menu.setAttribute('type', 'context');

        const matcher = (context: Context, url?: string): MenuInfo[] => {
            if (!url) return [];
            return this.infoLists.filter(
                (info) => info.menu.contexts.includes(context) && info.patterns.some((p) => p.test(url)),
            );
        };

        body.addEventListener(
            'contextmenu',
            (ev) => {
                const node = ev.target as Element;
                let showMenu: MenuInfo[] | undefined;
                if (node.nodeName === 'IMG') {
                    this.url = node.getAttribute('src') ?? undefined;
                    showMenu = matcher('image', this.url);
                } else if (node.nodeName === 'A') {
                    this.url = node.getAttribute('href') ?? undefined;
                    showMenu = matcher('link', this.url);
                }
                if (showMenu && showMenu.length > 0) {
                    body.setAttribute('contextmenu', id);
                    while (menu.firstChild) {
                        menu.firstChild.remove();
                    }
                    showMenu.forEach((menuItem) => {
                        menu.appendChild(menuItem.el);
                    });
                } else {
                    body.removeAttribute('contextmenu');
                }
            },
            false,
        );
        return (this.menu = menu);
    }

    readonly infoLists = new Array<MenuInfo>();

    menu?: HTMLMenuElement;

    url: string | undefined;

    createMenu(info: Menu): void {
        if (!supported) return;
        const menu = this.init();

        const patterns = info.targetUrlPatterns.map(
            (p) => new RegExp(`^${p.replace(/[*]/g, '.*').replace(/[?]/g, '.')}$`, 'is'),
        );
        const el = menu.appendChild(document.createElement('menuitem'));
        el.setAttribute('label', info.title);
        el.setAttribute('icon', icon);
        el.style.visibility = 'hidden';
        el.addEventListener(
            'click',
            () => {
                info.onclick({ url: this.url });
            },
            false,
        );

        this.infoLists.push({
            menu: info,
            patterns,
            el,
        });
    }
}

const provider = Container.get(MenuProvider);
export const createMenu = provider.createMenu.bind(provider);
