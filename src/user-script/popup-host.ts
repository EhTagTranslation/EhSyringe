import { Container } from 'services';
import { Popup } from 'plugin/popup';
import { packageJson } from 'info';
import { setBadge } from 'providers/utils';

import './popup-host.less';

function getNumber(key: string, defaultValue: number): number {
    const value = localStorage.getItem(key);
    if (!value) return defaultValue;
    const parsed = Number.parseFloat(value);
    if (Number.isNaN(parsed)) return defaultValue;
    return parsed;
}

function clamp(value: number, min: number, max: number): number {
    if (value < min) value = min;
    else if (value > max) value = max;
    return value;
}

const clampX = (value: number): number => clamp(value, 4, document.body.clientWidth - 44);
const clampY = (value: number): number => clamp(value, 4, document.body.clientHeight - 44);

function dragButton(el: HTMLElement, click: (e: MouseEvent) => void): void {
    const initX = clampX(getNumber(`eh-popup-button-x`, 0.02) * document.body.clientWidth);
    const initY = clampY(getNumber(`eh-popup-button-y`, 0.02) * document.body.clientHeight);

    // set the element's init position:
    el.style.bottom = `${initY}px`;
    el.style.right = `${initX}px`;

    let mouseX = 0,
        mouseY = 0;

    el.addEventListener('mousedown', dragMouseDown, { passive: false });
    el.addEventListener('click', elementClick, { passive: false });

    let moved = false;

    function dragMouseDown(e: MouseEvent): void {
        e.preventDefault();
        // get the mouse cursor position at startup:
        mouseX = e.clientX;
        mouseY = e.clientY;
        moved = false;
        document.addEventListener('mouseup', closeDragElement, { passive: true });
        document.addEventListener('mousemove', elementDrag, { passive: false });
    }

    function elementDrag(e: MouseEvent): void {
        e.preventDefault();
        const currentX = Number.parseFloat(el.style.right);
        const currentY = Number.parseFloat(el.style.bottom);
        // calculate the new cursor position:
        const diffX = mouseX - e.clientX;
        const diffY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;

        const nextX = clampX(currentX + diffX);
        const nextY = clampY(currentY + diffY);
        // set the element's new position:
        el.style.right = `${nextX}px`;
        el.style.bottom = `${nextY}px`;
        moved = true;
    }

    function closeDragElement(e: MouseEvent): void {
        e.preventDefault();
        // stop moving when mouse button is released:
        document.removeEventListener('mouseup', closeDragElement);
        document.removeEventListener('mousemove', elementDrag);
        const finalX = clampX(Number.parseFloat(el.style.right));
        const finalY = clampY(Number.parseFloat(el.style.bottom));
        el.style.right = `${finalX}px`;
        el.style.bottom = `${finalY}px`;
        localStorage.setItem(`eh-popup-button-x`, String(finalX / document.body.clientWidth));
        localStorage.setItem(`eh-popup-button-y`, String(finalY / document.body.clientHeight));
    }

    function elementClick(e: MouseEvent): void {
        if (moved) {
            moved = false;
            return;
        }
        click(e);
    }
}

export function createPopup(): void {
    const button = document.body.appendChild(document.createElement('div'));
    button.id = 'eh-syringe-popup-button';
    button.title = packageJson.displayName;
    const badge = button.appendChild(document.createElement('div'));
    badge.id = 'eh-syringe-popup-badge';
    setBadge({ text: '' });
    const popupBack = document.body.appendChild(document.createElement('div'));
    popupBack.id = 'eh-syringe-popup-back';
    popupBack.lang = 'cmn-Hans';
    const popup = popupBack.appendChild(document.createElement('div'));
    popup.id = 'eh-syringe-popup';

    const closeListeners = new Array<() => unknown>();
    const openListeners = new Array<() => unknown>();
    popupBack.classList.add('close');
    popupBack.ontransitionend = (ev) => {
        if (ev.target !== popupBack) return;
        if (popupBack.classList.contains('opening')) {
            popupBack.classList.remove('opening', 'close');
            popupBack.classList.add('open');
        }
        if (popupBack.classList.contains('closing')) {
            popupBack.classList.remove('closing', 'open');
            popupBack.classList.add('close');
            closeListeners.forEach((l) => l());
        }
    };
    const open = (): void => {
        openListeners.forEach((l) => l());
        popupBack.classList.add('opening');
    };
    const close = (): void => {
        popupBack.classList.add('closing');
    };
    Container.get(Popup).mount(popup, {
        close: close,
        onopen(listener) {
            openListeners.push(listener);
        },
        onclose(listener) {
            closeListeners.push(listener);
        },
    });
    popupBack.addEventListener('click', (ev) => {
        if (ev.target === popupBack && popupBack.classList.contains('open')) close();
    });
    dragButton(button, () => {
        if (popupBack.classList.contains('close')) open();
    });
}
