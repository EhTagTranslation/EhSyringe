import './polyfills';
import { Popup } from 'plugin/popup';
import { Container } from 'services';

(async () => {
    const current = await browser.tabs.query({ active: true });
    if (current && current.length >= 1 && current[0].url && new URL(current[0].url).hostname.includes('exhentai')) {
        document.body.classList.add('ex');
    }
    Container.get(Popup).mount(document.body, {
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
})().catch(console.error);
