import { EHTDatabase, TagMap, TagItem } from '../interface';
import { Service } from 'typedi';
import { Storage } from 'services/storage';
import { Logger } from 'services/logger';
import { Messaging } from 'services/messaging';
import { Tagging } from 'services/tagging';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

/* 数据存储结构版本, 如果不同 系统会自动执行 storageTagData 重新构建数据*/
/* 注意这是本地数据结构, 主要用于 storageTagData内解析方法发生变化, 重新加载数据的, 与线上无关*/
const DATA_STRUCTURE_VERSION = 10;

interface Data {
    map: TagMap;
    sha: string;
}

@Service()
export class TagDatabase {
    private readonly tagMap = new BehaviorSubject<Data | undefined>(undefined);
    get mapView(): Observable<Data> {
        return this.tagMap.pipe(filter((v): v is Data => v != null));
    }

    constructor(
        readonly storage: Storage,
        readonly logger: Logger,
        readonly messaging: Messaging,
        readonly tagging: Tagging,
    ) {
        messaging.on('get-tag', (key) => {
            return firstValueFrom(this.mapView.pipe(map((v) => v.map[key])));
        });
        messaging.on('get-tag-map', ({ ifNotMatch }) => {
            return firstValueFrom(
                this.mapView.pipe(
                    map((v) => {
                        if (ifNotMatch === v.sha) return { sha: v.sha, map: undefined };
                        return { sha: v.sha, map: v.map };
                    }),
                ),
            );
        });
        messaging.on('get-tag-sha', () => {
            return firstValueFrom(this.mapView.pipe(map((v) => v.sha)));
        });
        this.init().catch(logger.error);
    }

    private async init(): Promise<void> {
        const data = await this.storage.get('databaseInfo');
        const dataMap = await this.storage.get('database');
        this.messaging.on('update-tag', (data) => this.update(data));
        if (!data || data.version !== DATA_STRUCTURE_VERSION || !dataMap || !data.sha) {
            this.tagMap.next({ sha: '', map: {} });
            const timer = this.logger.time('数据结构变化, 重新构建数据');
            await this.storage.migrate();
            await this.messaging.emit('update-database', { force: true });
            timer.end();
        } else {
            this.tagMap.next({ ...data, map: dataMap });
        }
        this.logger.log('标签数据库初始化完成');
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

                const fullKey = this.tagging.fullKey({ namespace, key });
                const name = this.tagging.removePara(t.name);
                const ehTag: TagItem = {
                    ns: this.tagging.ns(namespace),
                    key,
                    name: name,
                    cn: this.tagging.removeImagesAndEmoji(name),
                };
                if (t.intro) ehTag.intro = t.intro;
                if (t.links) ehTag.links = t.links;
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
