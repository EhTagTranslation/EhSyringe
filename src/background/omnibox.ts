import { makeTagMatchHtml } from '../tool/tool';

import { suggest } from './suggest';

class OmniBox {
    constructor() {
        chrome.omnibox.onInputChanged.addListener(this.onInputChanged);
        chrome.omnibox.onInputEntered.addListener(this.onInputEntered);
    }

    readonly onInputChanged = async (text: string, suggestCb: (suggestResults: chrome.omnibox.SuggestResult[]) => void) => {
        if (!suggest) {
            return;
        }
        const suggestions = suggest(text.trim(), 5);
        const data = suggestions
            .map(suggestion => {
                const html = makeTagMatchHtml(suggestion, 'match');
                return {
                    content: suggestion.tag.search,
                    description: `${html.cn}<dim> - ${html.en}</dim>`,
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
