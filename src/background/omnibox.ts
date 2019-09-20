import { browser } from 'webextension-polyfill-ts';

import { makeTagMatchHtml } from '../tool/tool';

import { suggest } from './suggest';

class OmniBox {
    constructor() {
        chrome.omnibox.onInputChanged.addListener(this.onInputChanged);
        chrome.omnibox.onInputEntered.addListener(this.onInputEntered);
        chrome.omnibox.onInputStarted.addListener(this.onInputStarted);
    }

    origin: string = 'https://e-hentai.org';

    readonly onInputStarted = async () => {
        const tabs = await browser.tabs.query({
            url: [
                '*://exhentai.org/*',
                '*://e-hentai.org/*',
            ]
        });
        const tab = tabs.find(t => t.active) || tabs[0];
        if (tab) {
            this.origin = new URL(tab.url).origin;
        } else {
            this.origin = 'https://e-hentai.org';
        }
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
            url: `${this.origin}/?f_search=${encodeURIComponent(text)}`,
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
