import emojiRegex from 'emoji-regex';
import { EHTDatabase, TagMap, TagItem } from '../interface';
import { Service } from 'typedi';
import { Storage } from 'services/storage';
import { Logger } from 'services/logger';
import { Messaging } from 'services/messaging';
import { Tagging } from 'services/tagging';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

const emojiReg = emojiRegex();
/* 数据存储结构版本, 如果不同 系统会自动执行 storageTagData 重新构建数据*/
/* 注意这是本地数据结构, 主要用于 storageTagData内解析方法发生变化, 重新加载数据的, 与线上无关*/
const DATA_STRUCTURE_VERSION = 7;

interface Data {
    map: TagMap;
    sha: string;
}

@Service()
export class TagDatabase {
    private readonly tagMap = new BehaviorSubject<Data | undefined>(undefined);
    get mapView(): Observable<Data> {
        return this.tagMap.pipe(first((v): v is Data => v != null));
    }

    constructor(
        readonly storage: Storage,
        readonly logger: Logger,
        readonly messaging: Messaging,
        readonly tagging: Tagging,
    ) {
        messaging.on('get-tag', (key) => {
            return this.mapView.pipe(map((v) => v.map[key])).toPromise();
        });
        messaging.on('get-tag-map', ({ ifNotMatch }) => {
            return this.mapView
                .pipe(
                    map((v) => {
                        if (ifNotMatch === v.sha) return { sha: v.sha, map: undefined };
                        return { sha: v.sha, map: v.map };
                    }),
                )
                .toPromise();
        });
        messaging.on('get-tag-sha', () => {
            return this.mapView.pipe(map((v) => v.sha)).toPromise();
        });
        this.init().catch(logger.error);
    }

    private async init(): Promise<void> {
        const data = await this.storage.get('databaseInfo');
        const dataMap = await this.storage.get('database');
        this.messaging.on('update-tag', (data) => this.update(data));
        if (!data || data.version !== DATA_STRUCTURE_VERSION || !dataMap || !data.sha) {
            const timer = this.logger.time('数据结构变化, 重新构建数据');
            await this.storage.migrate();
            await this.messaging.emit('update-database', { force: true });
            timer.end();
        } else {
            this.tagMap.next({ ...data, map: dataMap });
        }
    }

    update(tagDB: EHTDatabase): void {
        const timer = this.logger.time('构建数据');
        const sha = tagDB.head.sha;
        const map: TagMap = {};
        const check = Date.now();
        tagDB.data.forEach((nsData) => {
            const namespace = nsData.namespace;
            if (namespace === 'rows') return;
            for (const key in nsData.data) {
                const t = nsData.data[key];

                const name = t.name.replace(/^<p>(.+?)<\/p>$/, '$1').trim();
                const cleanName = name
                    .replace(emojiReg, '')
                    .replace(/<img.*?>/gi, '')
                    .trim();
                const dirtyName = name
                    .replace(emojiReg, '<span class="ehs-emoji">$&</span>')
                    .replace(/<img(.*?)>/gi, '<img class="ehs-icon" $1>');

                const fullKey = this.tagging.fullKey({ namespace, key });
                const ehTag: TagItem = {
                    ...t,
                    name: dirtyName,
                    cn: cleanName,
                    key,
                    ns: this.tagging.ns(namespace),
                };
                map[fullKey] = ehTag;
            }
        });
        this.tagMap.next({ map, sha });

        // 后台继续处理，直接返回
        this.storage
            .set('databaseInfo', {
                sha,
                check,
                version: DATA_STRUCTURE_VERSION,
            })
            .catch(this.logger.error);
        this.storage.set('database', map).catch(this.logger.error);
        timer.end();
    }
}
