
interface Timer {
    readonly label: string;
    log(...optionalParams: any[]): void;
    end(): void;
}

class Log {
    readonly prefix = '💉 插件 ';
    readonly log: (message: string, ...optionalParams: any[]) => void = console.log.bind(console, this.prefix);
    readonly info: (message: string, ...optionalParams: any[]) => void = console.info.bind(console, this.prefix);
    readonly warn: (message: string, ...optionalParams: any[]) => void = console.warn.bind(console, this.prefix);
    readonly error: (message: string | Error, ...optionalParams: any[]) => void = console.error.bind(console, this.prefix);
    readonly debug: (message: any, ...optionalParams: any[]) => void = console.debug.bind(console, this.prefix);
    readonly time = (label: string) => {
        const plabel = `${this.prefix} ${label}`;
        console.time(plabel);
        return {
            label,
            log: (console.timeLog || console.log).bind(console, plabel),
            end: console.timeEnd.bind(console, plabel),
        } as Timer;
    }
}

export const logger = new Log();
