import { TagList, TagItem, TagReplace } from 'interface';
import { Suggestion } from 'plugin/suggest';

export interface MessageMap {
    'get-tag-list': [string | null, TagList | TagItem | undefined];
    'get-tag-replace': [string | null, TagReplace | string];
    'suggest-tag': [
        {
            term: string;
            limit?: number;
        },
        Suggestion[],
    ];
}

export interface Messaging {
    listen<K extends keyof MessageMap>(
        key: K,
        listener: (args: MessageMap[K][0]) => Promise<MessageMap[K][1]> | MessageMap[K][1],
    ): void;
    emit<K extends keyof MessageMap>(key: K, args: MessageMap[K][0]): Promise<MessageMap[K][1]>;
}
