import { Observable } from 'rxjs';

import { namespaceTranslate } from '../data/namespace-translate';
import { TagItem } from '../interface';

export class OmniBox {

    constructor(tagList: Observable<TagItem[]>) {
        tagList.subscribe(data => this.tagList = data);
    }

    private tagList: TagItem[];

    readonly onInputChanged = (text: string, suggest: (suggestResults: chrome.omnibox.SuggestResult[]) => void) => {
        if (!this.tagList.length) {
            return;
        }
        const data = this.tagList
            .filter(tag => tag.search.indexOf(text) !== -1 || tag.name.indexOf(text) !== -1)
            .slice(0, 5)
            .map(tag => {
                const cnNamespace = namespaceTranslate[tag.namespace];
                let cnNameHtml = '';
                const enNameHtml = tag.search;
                if (tag.namespace !== 'misc') {
                    cnNameHtml += cnNamespace + ':';
                }
                cnNameHtml += tag.name;
                return {
                    content: enNameHtml,
                    description: cnNameHtml,
                };
            });

        suggest(data);
    }
    readonly onInputEntered = (text: string) => {
        chrome.tabs.create({
            url: `https://e-hentai.org/?f_search=${encodeURIComponent(text)}`,
        });
    }

    static init(tagList: Observable<TagItem[]>): boolean {
        if (!chrome.omnibox) {
            return false;
        }
        const omnibox = new OmniBox(tagList);
        chrome.omnibox.onInputChanged.addListener(omnibox.onInputChanged);
        chrome.omnibox.onInputEntered.addListener(omnibox.onInputEntered);
        return true;
    }
}
