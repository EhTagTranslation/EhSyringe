import { Service } from 'typedi';
import { Logger } from 'services/logger';
import type { EHTNamespaceNameShort, TagItem } from 'interface';
import { Messaging } from 'services/messaging';
import { Tagging } from 'services/tagging';
import { toCN, toJP, isASCII } from './dict';

export interface Suggestion {
    tag: TagItem;
    score: number;
    term: string;

    match: {
        key?: { start: number; end: number };
        cn?: { start: number; end: number };
    };
}

const NS_SCORE = Object.freeze({
    o: 10,
    loc: 9,
    f: 9,
    m: 8.5,
    x: 8,
    l: 2,
    a: 2.5,
    cos: 2.4,
    g: 2.2,
    p: 3.3,
    c: 2.8,
    r: 1,
    '': 0, // rows
} satisfies Record<EHTNamespaceNameShort, number>);

/** 生成完成项 */
function markTag(tag: TagItem, search: string, term: string): Suggestion | undefined {
    let score = 0;
    const match: Suggestion['match'] = {};

    const { key, ns, cn, introSearch } = tag;
    const keyIdx = key.indexOf(search);
    if (keyIdx >= 0) {
        score += ((NS_SCORE[ns] * (search.length + 1)) / key.length) * (keyIdx === 0 ? 2 : 1);
        match.key = { start: keyIdx, end: keyIdx + search.length };
    }

    const name = cn.toLowerCase();
    const nameIdx = name.indexOf(search);
    if (nameIdx >= 0) {
        score += ((NS_SCORE[ns] * (search.length + 1)) / name.length) * (nameIdx === 0 ? 2 : 1);
        match.cn = { start: nameIdx, end: nameIdx + search.length };
    }

    if (introSearch) {
        const introIdx = introSearch.indexOf(search);
        if (introIdx >= 0) {
            score += ((NS_SCORE[ns] * (search.length + 1)) / introSearch.length) * 0.5;
        }
    }

    if (score === 0) return undefined;
    return {
        tag,
        term,
        match,
        score,
    };
}

@Service()
export class Suggest {
    constructor(
        readonly logger: Logger,
        readonly messaging: Messaging,
        readonly tagging: Tagging,
    ) {
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

    private tagList: TagItem[] = [];
    private sha = '';

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
                tagList = tagList.filter((tag) => tag.ns === ns);
            }
        }

        if (sTerm.startsWith('"')) {
            sTerm = sTerm.slice(1);
        }

        const suggestions = [];
        let terms = [sTerm];
        if (!isASCII(sTerm)) {
            terms.push(toCN(sTerm), ...toJP(sTerm));
            terms = [...new Set(terms)];
        }
        const nTerms = terms.length;
        for (const tag of tagList) {
            for (let i = 0; i < nTerms; i++) {
                const st = markTag(tag, terms[i], term);
                if (st) {
                    suggestions.push(st);
                    break;
                }
            }
        }
        suggestions.sort((st1, st2) => st2.score - st1.score);
        if (limit > 0 && suggestions.length > limit) {
            suggestions.length = limit;
        }
        this.logger.debug(`搜索：${term} (${terms.join(', ')})`, suggestions);
        timer.end();
        return suggestions;
    }
}
