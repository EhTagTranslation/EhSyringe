import { Observable } from 'rxjs';

import { background } from '../background';
import { EHTNamespaceName, TagItem, TagList } from '../interface';

class Suggest {
    constructor(tagList: Observable<TagList>) {
        tagList.subscribe(data => this.tagList = data);
    }

    readonly nsScore: {
        [k in EHTNamespaceName]: number;
    } = {
            rows: 10,
            female: 5,
            male: 4.995,
            misc: 4.5,
            language: 1,
            artist: 3,
            group: 2.5,
            parody: 4,
            character: 3.5,
            reclass: 1,
        };

    private tagList: TagList;
    private getScore(tag: TagItem, term: string): number {
        const str = tag.name;
        if (str.includes(term)) {
            const score = this.nsScore[tag.namespace] * term.length / str.length;
            if (str.startsWith(term)) {
                return score * 2;
            }
            return score;
        } else {
            return 0;
        }
    }

    getSuggests(term: string, limit: number): TagList {
        if (!this.tagList.length || !term) {
            return [];
        }
        return this.tagList
            .map(tag => ({ tag, score: this.getScore(tag, term) }))
            .filter(st => st.score > 0)
            .sort((st1, st2) => st1.score - st2.score)
            .map(st => st.tag)
            .slice(0, limit);
    }
}

const instance = new Suggest(background.update.tagList);

export const suggest = (term: string, limit: number) => instance.getSuggests(term, limit);
