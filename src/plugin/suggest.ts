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
        female: 5,
        male: 4.995,
        misc: 4.5,
        language: 1,
        artist: 3,
        group: 2.5,
        parody: 4,
        character: 3.5,
        reclass: 1,
        rows: 0,
    };

    private tagList: TagItem[] = [];
    private sha = '';
    private markTag(tag: TagItem, search: string, term: string): Suggestion {
        const key = tag.key;
        const cn = tag.cn.toLowerCase();
        const keyIdx = key.indexOf(search);
        const nameIdx = cn.indexOf(search);
        const ns = this.tagging.namespace(tag.ns);
        let score = 0;
        const match: Suggestion['match'] = {};
        if (keyIdx >= 0) {
            score += ((this.nsScore[ns] * (search.length + 1)) / key.length) * (keyIdx === 0 ? 2 : 1);
            match.key = { start: keyIdx, end: keyIdx + search.length };
        }
        if (nameIdx >= 0) {
            score += ((this.nsScore[ns] * (search.length + 1)) / cn.length) * (nameIdx === 0 ? 2 : 1);
            match.cn = { start: nameIdx, end: nameIdx + search.length };
        }
        return {
            tag,
            term,
            match,
            score,
        };
    }

    async getSuggests(term: string, limit = -1): Promise<Suggestion[]> {
        await this.update();
        if (!this.tagList.length || !term) {
            return [];
        }
        let sTerm = term.toLowerCase();
        const col = sTerm.indexOf(':');
        let tagList = this.tagList;
        if (col >= 1) {
            const ns = this.tagging.ns(sTerm.slice(0, col));
            if (ns) {
                sTerm = sTerm.slice(col + 1);
                tagList = tagList.filter((tag) => tag.ns === ns);
            }
        }
        let suggestions = tagList.map((tag) => this.markTag(tag, sTerm, term)).filter((st) => st.score > 0);
        if (term) {
            suggestions = suggestions.sort((st1, st2) => st2.score - st1.score);
        }
        if (limit > 0) {
            suggestions = suggestions.slice(0, limit);
        }
        return suggestions;
    }
}
