import { Service } from 'typedi';
import { Logger } from 'services/logger';
import { EHTNamespaceName, TagItem, TagList } from 'interface';
import { TagDatabase } from 'background/tag-database';
import { messaging } from 'providers/messaging';

export interface Suggestion {
    tag: TagItem;
    score: number;
    term: string;

    match: {
        key?: { start: number; length: number };
        name?: { start: number; length: number };
    };
}

@Service()
export class Suggest {
    constructor(readonly tagDatabase: TagDatabase, readonly logger: Logger) {
        tagDatabase.tagList.subscribe((data) => (this.tagList = data));
        messaging.listen('suggest-tag', (args) => {
            return this.getSuggests(args.term, args.limit);
        });
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

    readonly nsDic: { [k: string]: EHTNamespaceName } = {
        r: 'reclass',
        reclass: 'reclass',
        l: 'language',
        language: 'language',
        lang: 'language',
        p: 'parody',
        parody: 'parody',
        series: 'parody',
        c: 'character',
        char: 'character',
        character: 'character',
        g: 'group',
        group: 'group',
        creator: 'group',
        circle: 'group',
        a: 'artist',
        artist: 'artist',
        m: 'male',
        male: 'male',
        f: 'female',
        female: 'female',
    };

    private tagList: TagList = [];
    private markTag(tag: TagItem, search: string, term: string): Suggestion {
        const key = tag.key;
        const name = tag.name.toLowerCase();
        const keyIdx = key.indexOf(search);
        const nameIdx = name.indexOf(search);
        let score = 0;
        const match: Suggestion['match'] = {};
        if (keyIdx >= 0) {
            score += ((this.nsScore[tag.namespace] * (search.length + 1)) / key.length) * (keyIdx === 0 ? 2 : 1);
            match.key = { start: keyIdx, length: search.length };
        }
        if (nameIdx >= 0) {
            score += ((this.nsScore[tag.namespace] * (search.length + 1)) / name.length) * (nameIdx === 0 ? 2 : 1);
            match.name = { start: nameIdx, length: search.length };
        }
        return {
            tag,
            term,
            match,
            score,
        };
    }

    getSuggests(term: string, limit = -1): Suggestion[] {
        if (!this.tagList.length || !term) {
            return [];
        }
        let sTerm = term.toLowerCase();
        const col = sTerm.indexOf(':');
        let tagList = this.tagList;
        if (col >= 1) {
            const ns = this.nsDic[sTerm.substr(0, col)];
            if (ns) {
                sTerm = sTerm.substr(col + 1);
                tagList = tagList.filter((tag) => tag.namespace === ns);
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
