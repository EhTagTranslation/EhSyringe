import { Menu } from '../common/menu';
import escapeHtml from 'escape-html';
import icon from 'assets/logo.svg';
export * from '../common/menu';

const supported = 'contextMenu' in document.documentElement && 'HTMLMenuItemElement' in window;

export function createMenu(info: Menu): void {
    if (!supported) return;

    let url: string | undefined;
    const id = `user-script-menu-${Math.floor(Math.random() * 100000)}`;

    const body = document.body;
    body.addEventListener(
        'contextmenu',
        (ev) => {
            const node = ev.target as Element;
            if (node.nodeName === 'IMG' && info.contexts.includes('image')) {
                url = node.getAttribute('src') ?? undefined;
                body.setAttribute('contextmenu', id);
            } else if (node.nodeName === 'A' && info.contexts.includes('link')) {
                url = node.getAttribute('href') ?? undefined;
                body.setAttribute('contextmenu', id);
            } else {
                body.removeAttribute('contextmenu');
            }
        },
        false,
    );

    const menu = body.appendChild(document.createElement('menu'));
    menu.outerHTML = `
    <menu id="${id}" type="context">
        <menuitem label="${escapeHtml(info.title)}"
                  icon="${escapeHtml(icon)}"></menuitem>
    </menu>`;

    document.querySelector(`#${id} menuitem`)?.addEventListener(
        'click',
        () => {
            info.onclick({ url });
        },
        false,
    );
}
