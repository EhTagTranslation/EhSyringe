import { Messaging as Interface } from '../common/messaging';

interface Req {
    key: string;
    args: unknown;
}

type Res = { data: unknown } | { error: unknown };

class Messaging implements Interface {
    listen(key: string, listener: (args: unknown) => Promise<unknown> | unknown): void {
        chrome.runtime.onMessage.addListener((request: Req, sender, sendResponse: (res: Res) => void) => {
            if (request.key !== key) return;
            const promise = listener(request.args);
            Promise.resolve(promise)
                .then((data) => sendResponse({ data }))
                .catch((error: unknown) => sendResponse({ error }));
        });
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
