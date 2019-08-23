
class Log {
    readonly prefix = '💉 插件 ';
    readonly log: (message: string, ...optionalParams: any[]) => void = console.log.bind(console, this.prefix);
    readonly info: (message: string, ...optionalParams: any[]) => void = console.info.bind(console, this.prefix);
    readonly warn: (message: string, ...optionalParams: any[]) => void = console.warn.bind(console, this.prefix);
    readonly error: (message: string | Error, ...optionalParams: any[]) => void = console.error.bind(console, this.prefix);
    readonly debug: (message: any, ...optionalParams: any[]) => void = console.debug.bind(console, this.prefix);
}

export const logger = new Log();
