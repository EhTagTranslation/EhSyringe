import { Service } from 'services';

interface Timer {
    readonly label: string;
    log(...optionalParams: unknown[]): void;
    end(): void;
}

@Service()
export class Logger {
    readonly prefix = __type === 'user-script' ? '💉 脚本 ' : '💉 插件 ';
    readonly log: (message: string, ...optionalParams: unknown[]) => void = console.log.bind(console, this.prefix);
    readonly info: (message: string, ...optionalParams: unknown[]) => void = console.info.bind(console, this.prefix);
    readonly warn: (message: string, ...optionalParams: unknown[]) => void = console.warn.bind(console, this.prefix);
    readonly error: (message: unknown, ...optionalParams: unknown[]) => void = console.error.bind(console, this.prefix);
    readonly debug: (message: unknown, ...optionalParams: unknown[]) => void = console.debug.bind(console, this.prefix);
    readonly time = (label: string): Timer => {
        const pLabel = `${this.prefix} ${label}`;
        console.time(pLabel);
        return {
            label,
            log: (console.timeLog || console.log).bind(console, pLabel),
            end: console.timeEnd.bind(console, pLabel),
        } as Timer;
    };
}
