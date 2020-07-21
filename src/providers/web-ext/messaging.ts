import { Messaging as Interface, MessageListener } from '../common/messaging';

interface Req {
    key: string;
    args: unknown;
}

type Res = { data: unknown } | { error: unknown };
type Listener = (request: Req, sender: unknown, sendResponse: (res: Res) => void) => void;

class Messaging implements Interface {
    on(key: string, listener: (args: unknown) => Promise<unknown> | unknown): MessageListener {
        const l: Listener = (request, sender, sendResponse) => {
            if (request.key !== key) return;
            const promise = listener(request.args);
            Promise.resolve(promise)
                .then((data) => sendResponse({ data }))
                .catch((error: unknown) => sendResponse({ error }));
        };
        chrome.runtime.onMessage.addListener(l);
        return (l as unknown) as MessageListener;
    }
    off(listener: MessageListener): void {
        chrome.runtime.onMessage.removeListener((listener as unknown) as Listener);
    }
    emit(key: string, args: unknown): Promise<unknown> {
        const req: Req = { key, args };
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage(req, (response: Res) => {
                if (!response) {
                    reject(chrome.runtime.lastError);
                } else if ('error' in response) {
                    reject(response.error);
                } else {
                    resolve(response.data);
                }
            });
        });
    }
}

export const messaging = new Messaging();
