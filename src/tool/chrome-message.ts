import { Suggestion, TagList, TagReplace, TagItem } from '../interface';

import { logger } from './log';

interface MessageMap {
    'get-taglist': [string | null, TagList | TagItem | undefined];
    'get-tagreplace': [string | null, TagReplace | string];
    'auto-update': [boolean, boolean];
    'ext-update': [void, void];
    'suggest-tag': [
        {
            term: string;
            limit?: number;
        },
        Suggestion[],
    ];
}

type MessageHandler<Q extends keyof MessageMap> = (
    data: MessageMap[Q][0],
) => MessageMap[Q][1] | PromiseLike<MessageMap[Q][1]>;

class ChromeMessage {
    send<Q extends keyof MessageMap>(query: Q, data: MessageMap[Q][0]): Promise<MessageMap[Q][1]> {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage(
                {
                    query,
                    data,
                },
                (response) => {
                    if (!response) {
                        reject(chrome.runtime.lastError);
                    } else if (response.error) {
                        reject(response.error);
                    } else {
                        resolve(response.data);
                    }
                },
            );
        });
    }

    broadcast<Q extends keyof MessageMap>(query: Q, data?: MessageMap[Q][0]): void {
        chrome.runtime.sendMessage(
            {
                query,
                data,
            },
            (response) => {
                // ignore last error
                const _ = chrome.runtime.lastError;
                if (response?.error) {
                    throw response.error;
                }
            },
        );
    }

    listener<Q extends keyof MessageMap>(query: Q, handler: MessageHandler<Q>): void {
        logger.log('注册事件', query);
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (!('query' in request) || request.query !== query) {
                return;
            }
            const promise = handler(request.data);
            Promise.resolve(promise)
                .then((data) => sendResponse({ data }))
                .catch((error) => sendResponse({ error }));
            return true;
        });
    }
}

export const chromeMessage = new ChromeMessage();
