import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Service } from 'services';
import { Storage } from 'services/storage';
import { Logger } from 'services/logger';
import { Suggestion } from 'plugin/suggest';
import { Messaging } from 'services/messaging';
import { Tagging } from 'services/tagging';

import './index.less';

@Service()
export class TagTip {
    constructor(
        readonly storage: Storage,
        readonly logger: Logger,
        readonly messaging: Messaging,
        readonly tagging: Tagging,
    ) {
        this.init().catch(logger.error);
    }

    selectedIndex = 0;
    inputElement!: HTMLInputElement;
    autoCompleteList!: HTMLDivElement;
    delimiter = ' ';
    ctrlKey = false;



    private async init(): Promise<void> {
        const conf = await this.storage.get('config');
        if (!conf.tagTip) return;
        this.logger.log('标签提示');

        const searchInput: HTMLInputElement | null = document.querySelector('#f_search, #newtagfield, [name=f_search]');
        if (!searchInput) return;
        this.delimiter = location.pathname.startsWith('/g/') ? ',' : ' ';
        this.inputElement = searchInput;
        this.inputElement.autocomplete = 'off';
        this.autoCompleteList = document.createElement('div');
        this.autoCompleteList.className = 'eh-syringe-lite-auto-complete-list';

        fromEvent<KeyboardEvent>(this.inputElement, 'keyup')
            .pipe(
                filter((e) => !new Set(['ArrowUp', 'ArrowDown', 'Enter', 'Meta', 'Control', 'Alt']).has(e.key)),
                map(() => this.inputElement.value),
                // distinctUntilChanged()
            )
            .subscribe((s) => {
                this.search(s).catch(this.logger.error);
            });

        fromEvent<KeyboardEvent>(this.inputElement, 'keydown').subscribe((e) => this.keydown(e));
        fromEvent<KeyboardEvent>(this.inputElement, 'keyup').subscribe((e) => this.checkCtrl(e));

        fromEvent<MouseEvent>(this.autoCompleteList, 'click').subscribe((e) => {
            this.inputElement.focus();
            e.preventDefault();
            e.stopPropagation();
        });

        fromEvent(this.inputElement, 'focus').subscribe(() => this.setListPosition());

        fromEvent(window, 'resize').subscribe(() => this.setListPosition());
        fromEvent(window, 'scroll').subscribe(() => this.setListPosition());

        fromEvent(document, 'click').subscribe(() => {
            this.autoCompleteList.innerHTML = '';
        });

        document.body.insertBefore(this.autoCompleteList, null);
    }

    async search(value: string): Promise<void> {
        // todo: 增加自定义分隔符
        value = this.inputElement.value = value.replace(/  +/gm, ' ');
        const values = value.match(/(\S+:".+?"|".+?"|\S+:\S+|\S+)/gim) ?? [];
        const result: Suggestion[] = [];
        const used = new Set();
        await Promise.all(
            values.map(async (v, i) => {
                const sv = values.slice(i);
                if (sv.length) {
                    const svs = sv.join(' ');
                    if (!svs || svs.replace(/\s+/, '').length === 0) return;
                    const suggestions = await this.messaging.emit('suggest-tag', {
                        term: svs,
                        limit: 50,
                    });

                    suggestions.forEach((suggestion) => {
                        const tag = suggestion.tag;
                        if (used.has(this.tagging.fullKey(tag))) return;
                        used.add(this.tagging.fullKey(tag));
                        result.push(suggestion);
                    });
                }
            }),
        );
        this.autoCompleteList.innerHTML = '';
        result.slice(0, 50).forEach((tag) => {
            this.autoCompleteList.insertBefore(this.tagElementItem(tag), null);
        });
        this.selectedIndex = -1;
    }

    checkCtrl(e: KeyboardEvent): void {
        this.ctrlKey = e.ctrlKey || e.metaKey;
        if(this.ctrlKey) {
            this.autoCompleteList.classList.add('exclude')
        }else {
            this.autoCompleteList.classList.remove('exclude')
        }
    }

    keydown(e: KeyboardEvent): void {
        this.checkCtrl(e);
        this.ctrlKey == e.ctrlKey || e.metaKey;
        if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
            if (e.code === 'ArrowUp') {
                this.selectedIndex--;
                if (this.selectedIndex < 0) {
                    this.selectedIndex = this.autoCompleteList.children.length - 1;
                }
            } else {
                this.selectedIndex++;
                if (this.selectedIndex >= this.autoCompleteList.children.length) {
                    this.selectedIndex = 0;
                }
            }

            const children = Array.from(this.autoCompleteList.children);
            children.forEach((element) => {
                element.classList.remove('selected');
            });
            if (this.selectedIndex >= 0 && children[this.selectedIndex]) {
                children[this.selectedIndex].classList.add('selected');
            }
            e.preventDefault();
            e.stopPropagation();
        } else if (e.code === 'Enter') {
            const children = Array.from(this.autoCompleteList.children);
            if (this.selectedIndex >= 0 && children[this.selectedIndex]) {
                (children[this.selectedIndex] as HTMLAnchorElement).click();
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }

    setListPosition(): void {
        const rect = this.inputElement.getBoundingClientRect();
        this.autoCompleteList.style.left = `${rect.left}px`;
        this.autoCompleteList.style.top = `${rect.bottom}px`;
        this.autoCompleteList.style.minWidth = `${rect.width}px`;
    }

    tagElementItem(suggestion: Suggestion): HTMLDivElement {
        const tag = suggestion.tag;
        const item = document.createElement('div');
        const cnName = document.createElement('span');
        cnName.className = 'auto-complete-text cn-name';
        const enName = document.createElement('span');
        enName.className = 'auto-complete-text en-name';

        const html = this.tagging.makeTagMatchHtml(suggestion, 'mark');

        cnName.innerHTML = html.cn;
        enName.innerHTML = html.en;

        item.insertBefore(cnName, null);
        item.insertBefore(enName, null);

        item.className = 'auto-complete-item';

        item.onclick = () => {
            let length = suggestion.term.length;
            if (this.inputElement.value.endsWith(' ')) {
                length++;
            }
            const exclude = this.ctrlKey ? '-' : '';
            this.inputElement.value = `${this.inputElement.value.slice(0, 0 - length)}${exclude}${this.tagging.searchTerm(tag)} `;
            this.autoCompleteList.innerHTML = '';
        };
        return item;
    }
}
