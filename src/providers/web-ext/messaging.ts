import { Messaging as Interface, MessageMap } from '../common/messaging';
import { Container, Service } from 'services';
import { Logger } from 'services/logger';
export * from '../common/messaging';

interface Req {
    key: keyof MessageMap;
    args: unknown;
}

type Res = { data: unknown } | { error: unknown };

@Service()
class Messaging implements Interface {
    constructor(readonly logger: Logger) {}

    listen<K extends keyof MessageMap>(
        key: K,
        listener: (args: MessageMap[K][0]) => Promise<MessageMap[K][1]> | MessageMap[K][1],
    ): void {
        this.logger.log('注册事件', key);
        chrome.runtime.onMessage.addListener((request: Req, sender, sendResponse) => {
            if (!('key' in request) || request.key !== key) {
                return;
            }
            const promise = listener(request.args as MessageMap[K][0]);
            Promise.resolve(promise)
                .then((data) => sendResponse({ data } as Res))
                .catch((error: unknown) => sendResponse({ error } as Res));
        });
    }
    emit<K extends keyof MessageMap>(key: K, args: MessageMap[K][0]): Promise<MessageMap[K][1]> {
        return new Promise((resolve, reject) => {
            const req: Req = {
                key,
                args,
            };
            chrome.runtime.sendMessage(req, (response: Res) => {
                if (!response) {
                    reject(chrome.runtime.lastError);
                } else if ('error' in response) {
                    reject(response.error);
                } else {
                    resolve(response.data as MessageMap[K][1]);
                }
            });
        });
    }
}

export const messaging = Container.get(Messaging);
