import { Observable } from 'rxjs';

import { namespaceTranslate } from '../data/namespace-translate';
import { TagItem } from '../interface';

import { update } from './update';

class OmniBox {
    constructor(tagList: Observable<TagItem[]>) {
        tagList.subscribe(data => this.tagList = data);
        chrome.omnibox.onInputChanged.addListener(this.onInputChanged);
        chrome.omnibox.onInputEntered.addListener(this.onInputEntered);
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
}

let instance: OmniBox;
function init(): boolean {
    if (!chrome.omnibox) {
        return false;
    }
    instance = new OmniBox(update.tagList);
    return true;
}

export const omnibox = init();
