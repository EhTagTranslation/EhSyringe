import emojiRegex from 'emoji-regex';
import { EHTDatabase, TagMap } from '../interface';
import { Service } from 'typedi';
import { Storage } from 'services/storage';
import { Logger } from 'services/logger';
import { Messaging } from 'services/messaging';
import { Tagging } from 'services/tagging';

const emojiReg = emojiRegex();
/* 数据存储结构版本, 如果不同 系统会自动执行 storageTagData 重新构建数据*/
/* 注意这是本地数据结构, 主要用于 storageTagData内解析方法发生变化, 重新加载数据的, 与线上无关*/
const DATA_STRUCTURE_VERSION = 7;

@Service()
export class TagDatabase {
    tagMap: TagMap = {};
    sha = '0000000000000000000000000000000000000000';

    constructor(
        readonly storage: Storage,
        readonly logger: Logger,
        readonly messaging: Messaging,
        readonly tagging: Tagging,
    ) {
        messaging.on('get-tag', (key) => {
            return this.tagMap[key];
        });
        messaging.on('get-tag-map', ({ ifNotMatch }) => {
            if (ifNotMatch === this.sha) return { sha: this.sha, map: undefined };
            return { sha: this.sha, map: this.tagMap };
        });
        messaging.on('get-tag-sha', () => {
            return this.sha;
        });
        this.init().catch(logger.error);
    }

    private async init(): Promise<void> {
        const data = await this.storage.get('database');
        this.messaging.on('update-tag', (data) => this.update(data));
        if (!data || data.version !== DATA_STRUCTURE_VERSION || !data.map || !data.sha) {
            const timer = this.logger.time('数据结构变化, 重新构建数据');
            await this.storage.migrate();
            await this.messaging.emit('update-database', { force: true });
            timer.end();
        } else {
            this.sha = data.sha;
            this.tagMap = data.map;
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
                map[fullKey] = {
                    ...t,
                    name: dirtyName,
                    cn: cleanName,
                    key,
                    ns: this.tagging.ns(namespace),
                };
            }
        });
        this.tagMap = map;
        this.sha = sha;
        timer.end();

        // 后台继续处理，直接返回
        this.storage
            .set('database', {
                sha,
                map,
                check,
                version: DATA_STRUCTURE_VERSION,
            })
            .catch(this.logger.error);
    }
}
