import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Service } from 'services';
import { Storage } from 'services/storage';
import { Logger } from 'services/logger';
import type { Suggestion } from 'plugin/suggest';
import { Messaging } from 'services/messaging';
import { Tagging } from 'services/tagging';

import './index.less';

const SUGGEST_LIMIT = 100;

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
    disableExclusionMode = false;

    private async init(): Promise<void> {
        const conf = await this.storage.get('config');
        if (!conf.tagTip) return;
        this.logger.log('标签提示');

        const searchInput: HTMLInputElement | null = document.querySelector('#f_search, #newtagfield, [name=f_search]');
        if (!searchInput) return;
        this.disableExclusionMode = searchInput.id === 'newtagfield';
        this.delimiter = location.pathname.startsWith('/g/') ? ',' : ' ';
        this.inputElement = searchInput;
        this.inputElement.autocomplete = 'off';
        this.autoCompleteList = document.createElement('div');
        this.autoCompleteList.className = 'eh-syringe-lite-auto-complete-list eh-syringe-ignore';

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
        fromEvent(this.inputElement, 'pointerenter').subscribe(() => this.setListPosition());

        fromEvent(window, 'resize').subscribe(() => this.setListPosition());

        fromEvent(document, 'click').subscribe(() => {
            this.autoCompleteList.innerHTML = '';
        });

        document.body.appendChild(this.autoCompleteList);
        this.setListPosition();
    }

    async search(value: string): Promise<void> {
        value = this.inputElement.value = value.replace(/  +/gm, ' ');

        // [^\s,] 空白字符和逗号以外的字符 (用于支持逗号)
        // (?:"|$) 非捕获分组, 引号或文本结束  (用于匹配不完整的引号)

        // [^\s,]+:".+?(?:"|$)     NS:"ab cd"     NS:"ab c...
        // ".+?(?:"|$)]            "ab cd"        "ab c...
        // [^\s,]+:[^\s,]+         NS:abcd
        // [^\s,]+                 abcd

        const values = value.match(/([^\s,]+:".+?(?:"|$)|".+?(?:"|$)]|[^\s,]+:[^\s,]+|[^\s,]+)/gim) ?? [];
        const result: Suggestion[] = [];
        const used = new Set();
        await Promise.all(
            values.map(async (v, i) => {
                const sv = values.slice(i);
                if (!sv) return;

                const svs = sv.join(this.delimiter);
                if (!svs || svs.replace(/\s+/, '').length === 0) return;

                const suggestions = await this.messaging.emit('suggest-tag', {
                    term: svs,
                    limit: SUGGEST_LIMIT,
                });

                for (const suggestion of suggestions) {
                    const { tag } = suggestion;
                    if (used.has(this.tagging.fullKey(tag))) continue;
                    used.add(this.tagging.fullKey(tag));
                    result.push(suggestion);
                }
            }),
        );
        if (values.length > 1) {
            // 整合了多个关键词的搜索结果，重新排序并限制数量
            result.sort((a, b) => b.score - a.score);
            result.splice(SUGGEST_LIMIT);
        }
        this.autoCompleteList.innerHTML = '';
        for (const suggestion of result) {
            this.autoCompleteList.appendChild(this.tagElementItem(suggestion));
        }
        this.selectedIndex = -1;
        this.scrollList();
    }

    checkCtrl(e: KeyboardEvent): void {
        if (this.disableExclusionMode) return;
        this.ctrlKey = e.ctrlKey || e.metaKey;
        if (this.ctrlKey) {
            this.autoCompleteList.classList.add('exclude');
        } else {
            this.autoCompleteList.classList.remove('exclude');
        }
    }

    keydown(e: KeyboardEvent): void {
        this.checkCtrl(e);
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            if (e.key === 'ArrowUp') {
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
            this.scrollList();
        } else if (e.key === 'Enter') {
            const children = Array.from(this.autoCompleteList.children);
            if (this.selectedIndex >= 0 && children[this.selectedIndex]) {
                (children[this.selectedIndex] as HTMLAnchorElement).click();
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }

    scrollList(): void {
        if (this.selectedIndex < 0) {
            this.autoCompleteList.scrollTop = 0;
            return;
        }
        const current = this.autoCompleteList.children[this.selectedIndex];
        if (!current) return;
        current.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    }

    setListPosition(): void {
        const rect = this.inputElement.getBoundingClientRect();
        this.autoCompleteList.style.left = `${rect.left + window.scrollX}px`;
        this.autoCompleteList.style.top = `${rect.bottom + window.scrollY}px`;
        this.autoCompleteList.style.width = `${rect.width}px`;
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
            if (this.inputElement.value.endsWith(this.delimiter)) {
                length++;
            }
            const exclude = this.ctrlKey ? '-' : '';
            this.inputElement.value = `${this.inputElement.value.slice(
                0,
                0 - length,
            )}${exclude}${this.tagging.searchTerm(tag)}${this.delimiter}`;
            this.autoCompleteList.innerHTML = '';
        };
        return item;
    }
}
