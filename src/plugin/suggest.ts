import { Service } from 'typedi';
import { Logger } from 'services/logger';
import type { EHTNamespaceName, TagItem } from 'interface';
import { Messaging } from 'services/messaging';
import { Tagging } from 'services/tagging';

export interface Suggestion {
    tag: TagItem;
    score: number;
    term: string;

    match: {
        key?: { start: number; end: number };
        cn?: { start: number; end: number };
    };
}

@Service()
export class Suggest {
    constructor(readonly logger: Logger, readonly messaging: Messaging, readonly tagging: Tagging) {
        messaging.on('suggest-tag', (args) => {
            return this.getSuggests(args.term, args.limit);
        });
        this.update().catch(logger.error);
    }

    private async update(): Promise<void> {
        const v = await this.messaging.emit('get-tag-map', { ifNotMatch: this.sha });
        if (v.map) this.tagList = Object.values(v.map);
        this.sha = v.sha;
    }

    readonly nsScore: {
        [k in EHTNamespaceName]: number;
    } = {
        other: 10,
        female: 9,
        male: 8.5,
        mixed: 8,
        language: 2,
        artist: 2.5,
        cosplayer: 2.4,
        group: 2.2,
        parody: 3.3,
        character: 2.8,
        reclass: 1,
        rows: 0,
        temp: 0.1,
    };

    private tagList: TagItem[] = [];
    private sha = '';
    private markTag(tag: TagItem, search: string, term: string): Suggestion {
        let score = 0;
        const ns = this.tagging.namespace(tag.ns);
        const match: Suggestion['match'] = {};

        const key = tag.key;
        const keyIdx = tag.key.indexOf(search);
        if (keyIdx >= 0) {
            score += ((this.nsScore[ns] * (search.length + 1)) / key.length) * (keyIdx === 0 ? 2 : 1);
            match.key = { start: keyIdx, end: keyIdx + search.length };
        }

        const name = tag.cn.toLowerCase();
        const nameIdx = name.indexOf(search);
        if (nameIdx >= 0) {
            score += ((this.nsScore[ns] * (search.length + 1)) / name.length) * (nameIdx === 0 ? 2 : 1);
            match.cn = { start: nameIdx, end: nameIdx + search.length };
        }

        if (tag.introSearch) {
            const intro = tag.introSearch;
            const introIdx = intro.indexOf(search);
            if (introIdx >= 0) {
                score += ((this.nsScore[ns] * (search.length + 1)) / intro.length) * 0.5;
            }
        }

        return {
            tag,
            term,
            match,
            score,
        };
    }

    async getSuggests(term: string, limit = -1): Promise<Suggestion[]> {
        if (!term) return [];
        await this.update();
        if (!this.tagList.length) return [];

        const timer = this.logger.time(`搜索：${term}`);
        let sTerm = term.toLowerCase().normalize();
        const col = sTerm.indexOf(':');
        let tagList = this.tagList;
        if (col >= 1) {
            const ns = this.tagging.ns(sTerm.slice(0, col));
            if (ns) {
                sTerm = sTerm.slice(col + 1);
                // 如果是 f:"xxx 格式 移除掉引号
                if(sTerm.slice(0, 1) == '"') {
                    sTerm = sTerm.slice(1);
                }
                tagList = tagList.filter((tag) => tag.ns === ns);
            }
        }
        let suggestions = [];
        for (const tag of tagList) {
            const st = this.markTag(tag, sTerm, term);
            if (st.score > 0) suggestions.push(st);
        }
        suggestions.sort((st1, st2) => st2.score - st1.score);
        if (limit > 0) {
            suggestions = suggestions.slice(0, limit);
        }
        this.logger.debug(`搜索：${term}`, suggestions);
        timer.end();
        return suggestions;
    }
}
