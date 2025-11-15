import type { EHTDatabase, TagMap, TagItem, EHTTag, EHTNamespaceName } from '../interface';
import { Service } from 'typedi';
import { Storage } from 'services/storage';
import { Logger } from 'services/logger';
import { Messaging } from 'services/messaging';
import { Tagging } from 'services/tagging';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

/* 数据存储结构版本, 如果不同 系统会自动执行 storageTagData 重新构建数据*/
/* 注意这是本地数据结构, 主要用于 storageTagData内解析方法发生变化, 重新加载数据的, 与线上无关*/
const DATA_STRUCTURE_VERSION = 12;

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
        this.messaging.on('update-tag', (data) => this.update(data.base, data.override));
        if (data?.version !== DATA_STRUCTURE_VERSION || !dataMap || !data.sha) {
            this.tagMap.next({ sha: '', map: {} });
            const timer = this.logger.time('数据结构变化, 重新构建数据');
            await this.storage.migrate();
            await this.messaging.emit('update-database', { force: true });
            timer.end();
        } else {
            this.tagMap.next({ ...data, map: dataMap });
        }
        this.logger.log('标签数据库初始化完成');
        this.tagMap.subscribe({
            next: () => {
                void this.messaging.emit('tag-updated', undefined, true);
            },
        });
    }

    update(baseDB: EHTDatabase, overrideDb?: EHTDatabase): void {
        const timer = this.logger.time('构建数据');
        const sha = baseDB.head.sha + (overrideDb ? `+${overrideDb.head.sha}` : '');
        const map: TagMap = {};
        const check = Date.now();
        const handleTag = (namespace: EHTNamespaceName, key: string, tag: EHTTag): void => {
            if (typeof key != 'string') return;
            if (key.includes('_')) key = key.replace(/_/g, ' ');
            key = key.trim();
            if (!key) return;

            const fullKey = this.tagging.fullKey({ namespace, key });
            if (map[fullKey]) return;

            const name = this.tagging.removePara(tag.name) || key;
            const ehTag: TagItem = {
                ns: this.tagging.ns(namespace),
                key,
                name: name,
                cn: this.tagging.removeImagesAndEmoji(name),
                intro: '',
                links: '',
                introSearch: '',
            };
            if (tag.intro) {
                ehTag.intro = tag.intro;
                ehTag.introSearch += '\0' + this.tagging.removeHtmlTags(tag.intro).toLowerCase();
            }
            if (tag.links) {
                ehTag.links = tag.links;
                ehTag.introSearch += '\0' + this.tagging.removeHtmlTags(tag.links).toLowerCase();
            }
            map[fullKey] = ehTag;
        };
        for (const baseNsData of baseDB.data) {
            const namespace = baseNsData.namespace;
            if (namespace === 'rows') continue;
            const overrideNsData = overrideDb?.data.find((ns) => ns.namespace === namespace);
            for (const key in baseNsData.data) {
                const baseTag = baseNsData.data[key];
                const overrideTag = overrideNsData?.data[key];
                if (overrideTag) {
                    handleTag(namespace, key, {
                        name: overrideTag.name || baseTag.name,
                        intro: overrideTag.intro || baseTag.intro,
                        links: overrideTag.links || baseTag.links,
                    });
                } else {
                    handleTag(namespace, key, baseTag);
                }
            }
            if (overrideNsData?.data) {
                for (const key in overrideNsData.data) {
                    const overrideTag = overrideNsData.data[key];
                    handleTag(namespace, key, overrideTag);
                }
            }
        }
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
