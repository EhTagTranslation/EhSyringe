import { browser } from 'webextension-polyfill-ts';
import { makeTagMatchHtml } from 'utils';
import { Service } from 'typedi';
import { Logger } from 'services/logger';
import { openInTab } from 'providers/utils';
import { Messaging } from 'services/messaging';

@Service()
export class OmniBox {
    constructor(readonly logger: Logger, readonly messaging: Messaging) {
        if (!chrome.omnibox) {
            logger.info('不支持 Omnibox');
            return;
        }
        this.init();
    }

    private init(): void {
        chrome.omnibox.onInputChanged.addListener(this.onInputChanged);
        chrome.omnibox.onInputEntered.addListener(this.onInputEntered);
        chrome.omnibox.onInputStarted.addListener(() => {
            this.onInputStarted().catch(this.logger.error);
        });
    }

    origin = 'https://e-hentai.org';

    readonly onInputStarted = async (): Promise<void> => {
        const tabs = await browser.tabs.query({
            url: ['*://exhentai.org/*', '*://e-hentai.org/*'],
        });
        const tab = tabs.find((t) => t.active) ?? tabs[0];
        if (tab?.url) {
            this.origin = new URL(tab.url).origin;
        } else {
            this.origin = 'https://e-hentai.org';
        }
    };

    readonly onInputChanged = (
        text: string,
        suggestCb: (suggestResults: chrome.omnibox.SuggestResult[]) => void,
    ): void => {
        this.messaging
            .emit('suggest-tag', { term: text.trim(), limit: 5 })
            .then((suggestions) => {
                const data = suggestions.map((suggestion) => {
                    const html = makeTagMatchHtml(suggestion, 'match');
                    return {
                        content: suggestion.tag.search,
                        description: `${html.cn}<dim> - ${html.en}</dim>`,
                    };
                });
                suggestCb(data);
            })
            .catch(this.logger.error);
    };

    readonly onInputEntered = (text: string): void => {
        openInTab(`${this.origin}/?f_search=${encodeURIComponent(text)}`);
    };
}
