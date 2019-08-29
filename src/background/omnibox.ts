import { namespaceTranslate } from '../data/namespace-translate';
import { suggest } from '../tool/suggest';
import { escapeHtml } from '../tool/tool';

class OmniBox {
    constructor() {
        chrome.omnibox.onInputChanged.addListener(this.onInputChanged);
        chrome.omnibox.onInputEntered.addListener(this.onInputEntered);
    }

    readonly onInputChanged = (text: string, suggestCb: (suggestResults: chrome.omnibox.SuggestResult[]) => void) => {
        const data = suggest(text.trim(), 5)
            .map(suggestion => {
                const tag = suggestion.tag;
                const cnNamespace = namespaceTranslate[tag.namespace];
                let cnNameHtml = '';
                let enNameHtml;
                if (tag.namespace !== 'misc') {
                    cnNameHtml += escapeHtml(cnNamespace) + '：';
                }
                if (suggestion.match.name) {
                    const range = suggestion.match.name;
                    cnNameHtml += `${escapeHtml(tag.name.substring(0, range.start))}<match>${escapeHtml(tag.name.substr(range.start, range.length))}</match>${escapeHtml(tag.name.substr(range.start + range.length))}`;
                } else {
                    cnNameHtml += escapeHtml(tag.name);
                }
                if (suggestion.match.key) {
                    const range = suggestion.match.key;
                    enNameHtml = `${escapeHtml(tag.key.substring(0, range.start))}<match>${escapeHtml(tag.key.substr(range.start, range.length))}</match>${escapeHtml(tag.key.substr(range.start + range.length))}`;
                } else {
                    enNameHtml = escapeHtml(tag.key);
                }
                return {
                    content: tag.search,
                    description: `${cnNameHtml}<dim> - ${enNameHtml}</dim>`,
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
