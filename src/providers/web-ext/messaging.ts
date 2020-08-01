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

    private async remoteHandle(key: string, args: unknown): Promise<Res> {
        try {
            const req: Req = { key, args };
            const response = (await browser.runtime.sendMessage(req)) as Res;
            if (!response) {
                const error = new Error(chrome.runtime.lastError?.message ?? '消息发送失败');
                Object.defineProperties(error, {
                    request: { value: req },
                });
                return { handlers: -1, error };
            } else {
                return response;
            }
        } catch (ex) {
            return { handlers: -1, error: ex as unknown };
        }
    }

    async emit(key: string, args: unknown, broadcast = false): Promise<unknown> {
        const localSize = this.handlers.get(key)?.size ?? 0;
        const localHandled = localSize > 0 ? super.emit(key, args, broadcast) : false;
        const remoteHandled = this.remoteHandle(key, args);
        const rr = await remoteHandled;
        let lr: unknown;
        let le: Error | undefined;
        if (localHandled) {
            try {
                lr = await localHandled;
            } catch (ex) {
                le = ex as Error;
            }
        }
        if (broadcast) {
            if (localHandled) {
                return lr ?? rr.data;
            }
            return rr.data;
        } else {
            if (le) throw le;
            if (rr.error && rr.handlers < 0) console.debug(key, args, rr.error);
            if (rr.error && rr.handlers > 0) throw rr.error;
            if (localHandled) {
                return lr ?? rr.data;
            }
            if (rr.handlers <= 0) {
                const err = new Error(`无法处理事件 ${key}`);
                Reflect.set(err, 'localResponse', lr);
                Reflect.set(err, 'remoteResponse', rr);
            }
            return rr.data;
        }
    }
}

export const messaging = new MessagingCross();
