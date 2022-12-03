import './polyfills';
import { Popup } from 'plugin/popup';
import { Container } from 'services';
import { isEh, isEx } from 'utils/hosts';

(async () => {
    const popup = Container.get(Popup);
    popup.mount(document.body, {
        onclose(listener) {
            window.addEventListener('unload', listener);
        },
        onopen(listener) {
            listener();
        },
        close() {
            window.close();
        },
    });

    const current = await browser.tabs.query({ active: true });
    const currentHost = (current && current.length >= 1 && current[0].url && new URL(current[0].url).hostname) || '';

    if (isEx(currentHost)) {
        document.body.classList.add('ex');
    } else if (isEh(currentHost)) {
        document.body.classList.add('eh');
    } else if ('matchMedia' in window) {
        const matchesDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (matchesDarkTheme) {
            document.body.classList.add('ex');
        } else {
            document.body.classList.add('eh');
        }
    }
})().catch(console.error);
