import { TagList, TagItem, TagReplace } from 'interface';
import { Suggestion } from 'plugin/suggest';
import { Service } from 'typedi';
import { Logger } from './logger';
import { messaging } from 'providers/messaging';

export interface MessageMap {
    'get-tag': [string, TagItem | undefined];
    'get-tag-map': [{ ifNotMatch: string }, TagMap];
    'suggest-tag': [
        {
            term: string;
            limit?: number;
        },
        Suggestion[],
    ];
    'update-database': [{ force: boolean }, boolean];
    'update-extension': [void, boolean];
}

export type MessageKey = keyof MessageMap;

type Req<T extends MessageKey> = MessageMap[T][0];
type Res<T extends MessageKey> = MessageMap[T][1];

@Service()
export class Messaging {
    constructor(readonly logger: Logger) {}
    listen<K extends MessageKey>(key: K, listener: (args: Req<K>) => Promise<Res<K>> | Res<K>): void {
        this.logger.log(`注册事件`, key);
        messaging.listen(key, listener as (args: unknown) => Promise<Res<K>> | Res<K>);
    }
    emit<K extends MessageKey>(key: K, args: Req<K>): Promise<Res<K>> {
        return messaging.emit(key, args) as Promise<Res<K>>;
    }
}
