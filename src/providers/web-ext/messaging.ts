import { Messaging } from '../common/messaging';

type Res = { handlers: number; data?: unknown; error?: unknown };
type Req = { key: string; args: unknown };

class MessagingCross extends Messaging {
    constructor() {
        super();
        chrome.runtime.onMessage.addListener((request: Req, _: unknown, sendResponse: (res: Res) => void) => {
            const handlers = this.handlers.get(request.key);
            if (!handlers || handlers.size === 0) {
                sendResponse({ handlers: 0, data: undefined });
                return;
            }
            handlers
                .handle(request.args)
                .then((res) => {
                    sendResponse({ handlers: handlers.size, data: res });
                })
                .catch((error: unknown) => {
                    sendResponse({ handlers: handlers.size, error });
                });
            return true;
        });
    }
    async emit(key: string, args: unknown, broadcast = false): Promise<unknown> {
        const localSize = this.handlers.get(key)?.size ?? 0;
        const localHandled = localSize > 0 ? super.emit(key, args, broadcast) : Promise.resolve();
        const remoteHandled = new Promise<Res>((resolve) => {
            const req: Req = { key, args };
            chrome.runtime.sendMessage(req, (response: Res) => {
                if (!response) {
                    const error = new Error(chrome.runtime.lastError?.message ?? '消息发送失败');
                    Object.defineProperties(error, {
                        request: { value: req },
                    });
                    resolve({ handlers: -1, error });
                } else {
                    resolve(response);
                }
            });
        });
        const rr = await remoteHandled;
        let lr: unknown;
        let le: Error | undefined;
        try {
            lr = await localHandled;
        } catch (ex) {
            le = ex as Error;
        }
        if (broadcast) {
            return lr ?? rr.data;
        } else {
            if (le) throw le;
            if (rr.error && rr.handlers < 0) console.error(key, args, rr.error);
            if (rr.error && rr.handlers > 0) throw rr.error;
            return lr ?? rr.data;
        }
    }
}

export const messaging = new MessagingCross();
