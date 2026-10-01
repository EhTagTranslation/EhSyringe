import type { Menu } from '../common/menu';
import { Service } from 'typedi';
import { Container } from 'services';
import './menu.less';
export * from '../common/menu';

function matchesUrlPatterns(url: string, patterns: readonly string[]): boolean {
    return patterns.some((pattern) => {
        const source = pattern
            .split('*')
            .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .join('.*');
        return new RegExp('^' + source + '$').test(url);
    });
}

@Service()
class MenuProvider {
    private readonly menus: Menu[] = [];
    private closeMenu?: () => void;

    handleEvent(ev: PointerEvent): void {
        this.closeMenu?.();
        if (!(ev.target instanceof Element)) return;

        const image = ev.target.closest('img');
        const link = ev.target.closest('a[href]');
        const items = this.menus.flatMap((info) => {
            const urls = [
                ...(info.contexts.includes('image') && image ? [image.currentSrc || image.src] : []),
                ...(info.contexts.includes('link') && link instanceof HTMLAnchorElement ? [link.href] : []),
            ];
            const url = urls.find((url) => matchesUrlPatterns(url, info.targetUrlPatterns));
            return url ? [{ info, url }] : [];
        });
        if (items.length === 0) return;

        ev.preventDefault();
        const menu = document.createElement('div');
        menu.className = 'ehs-context-menu';
        menu.setAttribute('role', 'menu');

        const controller = new AbortController();
        const close = (): void => {
            menu.remove();
            controller.abort();
            this.closeMenu = undefined;
        };
        this.closeMenu = close;
        for (const { info, url } of items) {
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = info.title;
            button.setAttribute('role', 'menuitem');
            button.addEventListener('click', () => {
                close();
                info.onclick({ url });
            });
            menu.append(button);
        }

        document.body.append(menu);
        menu.style.left = `${Math.max(0, Math.min(ev.clientX, window.innerWidth - menu.offsetWidth))}px`;
        menu.style.top = `${Math.max(0, Math.min(ev.clientY, window.innerHeight - menu.offsetHeight))}px`;
        const options = { capture: true, signal: controller.signal };
        document.addEventListener(
            'pointerdown',
            (event) => {
                if (!(event.target instanceof Node) || !menu.contains(event.target)) close();
            },
            options,
        );
        document.addEventListener(
            'keydown',
            (event) => {
                if (event.key === 'Escape') close();
            },
            options,
        );
        document.addEventListener('scroll', close, options);
        window.addEventListener(
            'blur',
            (event) => {
                if (event.target === window) close();
            },
            options,
        );
        menu.querySelector('button')?.focus({ preventScroll: true });
    }

    createMenu(info: Menu): void {
        if (!matchesUrlPatterns(location.href, info.documentUrlPatterns)) {
            return;
        }
        document.addEventListener('contextmenu', this);
        this.menus.push(info);
    }
}

const provider = Container.get(MenuProvider);
export const createMenu = provider.createMenu.bind(provider);
