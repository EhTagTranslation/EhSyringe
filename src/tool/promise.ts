
export function promisify<TArgs, TResult>(fn: ((args: TArgs, callback: ((result: TResult) => void)) => void), args: TArgs): Promise<TResult>;
export function promisify<TResult>(fn: (callback: ((result: TResult) => void)) => void): Promise<TResult>;
export function promisify<TArgs>(fn: (args: TArgs, callback: (() => void)) => void, args: TArgs): Promise<void>;

export function promisify(fn: any, ...args: any[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        fn(...args, (result: any) => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }
            return resolve(result);
        });
    });
}

export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
