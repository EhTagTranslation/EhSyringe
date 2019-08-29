import { namespaceTranslate } from '../data/namespace-translate';
import { suggest } from '../tool/suggest';

class OmniBox {
    constructor() {
        chrome.omnibox.onInputChanged.addListener(this.onInputChanged);
        chrome.omnibox.onInputEntered.addListener(this.onInputEntered);
    }

    readonly onInputChanged = (text: string, suggestCb: (suggestResults: chrome.omnibox.SuggestResult[]) => void) => {
        const data = suggest(text.trim(), 5)
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

        suggestCb(data);
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
    instance = new OmniBox();
    return true;
}

export const omnibox = init();
