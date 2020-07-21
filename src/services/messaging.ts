import { TagItem, EHTDatabase, TagMap } from 'interface';
import { Suggestion } from 'plugin/suggest';
import { Service } from 'typedi';
import { Logger } from './logger';
import { messaging } from 'providers/messaging';
import { DownloadStatus } from 'plugin/database-updater';
import { MessageListener } from 'providers/common/messaging';

export interface MessageMap {
    'get-tag': [string, TagItem | undefined];
    'get-tag-map': [{ ifNotMatch?: string }, { map: TagMap | undefined; sha: string }];
    'get-tag-sha': [void, string];
    'suggest-tag': [
        {
            term: string;
            limit?: number;
        },
        Suggestion[],
    ];
    'check-database': [{ force: boolean }, { sha: string; oldSha: string }];
    'update-database': [{ force?: boolean; recheck?: boolean }, boolean];
    'update-tag': [EHTDatabase, void];
    'updating-database': [DownloadStatus, void];
    'check-extension': [void, boolean];
}

export type MessageKey = keyof MessageMap;

type Req<T extends MessageKey> = MessageMap[T][0];
type Res<T extends MessageKey> = MessageMap[T][1];

@Service()
export class Messaging {
    constructor(readonly logger: Logger) {}
    on<K extends MessageKey>(key: K, listener: (args: Req<K>) => Promise<Res<K>> | Res<K>): MessageListener {
        this.logger.log(`注册事件`, key);
        return messaging.on(key, listener as (args: unknown) => Promise<Res<K>> | Res<K>);
    }
    off(listener: MessageListener): void {
        return messaging.off(listener);
    }
    emit<K extends MessageKey>(key: K, args: Req<K>): Promise<Res<K>> {
        return messaging.emit(key, args) as Promise<Res<K>>;
    }
}
