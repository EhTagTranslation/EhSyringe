import type { TagItem, EHTDatabase, TagMap } from 'interface';
import type { Suggestion } from 'plugin/suggest';
import { Service } from 'typedi';
import { Logger } from './logger';
import { messaging } from 'providers/messaging';
import type { DownloadStatus, ReleaseCheckData } from 'plugin/database-updater';
import type { MessageListener } from 'providers/common/messaging';

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
    'check-database': [{ force: boolean }, ReleaseCheckData];
    'update-database': [{ force?: boolean; recheck?: boolean }, ReleaseCheckData | undefined];
    'update-tag': [EHTDatabase, void];
    'tag-updated': [void, void];
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
        this.logger.log(`监听事件`, key);
        return messaging.on(key, listener as (args: unknown) => Promise<Res<K>> | Res<K>);
    }
    off(listener: MessageListener): boolean {
        return messaging.off(listener);
    }
    emit<K extends MessageKey>(key: K, args: Req<K>, broadcast = false): Promise<Res<K>> {
        return messaging.emit(key, args, broadcast) as Promise<Res<K>>;
    }
}
