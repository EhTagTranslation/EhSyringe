import { Logger } from './logger';
import { Service } from 'typedi';
import { setBadge } from 'providers/utils';

@Service()
export class BadgeLoading {
    constructor(readonly logger: Logger) {}

    readonly loadingStrArr = [
        [''],
        ['⢎⠀', '⢆⡀', '⢄⡠', '⢀⡰', '⠀⡱', '⠈⠱', '⠊⠑', '⠎⠁'],
        ['    ', '·   ', ' ·  ', '  · ', '   ·'],
    ];

    frame = 0;
    index = 0;
    interval?: ReturnType<typeof setTimeout> = undefined;
    text = '';
    loadingString: string[] = [''];
    color = '';

    extname = 'EhSyringe';

    private setColor(color = '#4A90E2'): void {
        setBadge({ background: color });
    }

    private setText(text: string): void {
        setBadge({ text });
    }

    set(text: string, color?: string, loading = 0): void {
        if (this.index !== loading) {
            this.index = loading;
            this.loadingString = this.loadingStrArr[this.index] || [''];
            this.frame = 0;
        }
        this.text = text;
        this.setColor(color);
        if (loading) {
            if (!this.interval) {
                this.interval = setInterval(() => {
                    this.setText(`${this.text}${this.loadingString[this.frame] || ''}`);
                    this.frame++;
                    if (!this.loadingString[this.frame]) {
                        this.frame = 0;
                    }
                }, 100);
            }
        } else {
            this.frame = 0;
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = undefined;
            }
            this.setText(this.text);
        }
    }
}
