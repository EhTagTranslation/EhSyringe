import './polyfills';
import './popup.less';
import { Popup } from 'plugin/popup';
import { Container } from 'services';
import { isEh, isEx, isRepo } from 'utils/hosts';

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
    const currentHost = (current?.[0]?.url && new URL(current[0].url).hostname) ?? '';

    if (isEx(currentHost)) {
        document.documentElement.classList.add('ehs-ex');
    } else if (isEh(currentHost)) {
        document.documentElement.classList.add('ehs-eh');
    } else if (isRepo(currentHost)) {
        document.documentElement.classList.add('ehs-repo');
    } else if ('matchMedia' in window) {
        const matchesDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (matchesDarkTheme) {
            document.documentElement.classList.add('ehs-ex');
        } else {
            document.documentElement.classList.add('ehs-eh');
        }
    }
})().catch(console.error);
