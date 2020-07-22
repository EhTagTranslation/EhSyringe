import './polyfills';
import { Popup } from 'plugin/popup';
import { Container } from 'services';

window.onload = () =>
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
