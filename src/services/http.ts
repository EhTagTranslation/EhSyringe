import { Service } from '.';
export type Progress = (ev: ProgressEvent) => void;

@Service()
export class Http {
    async json<T>(url: string, method = 'GET'): Promise<T> {
        const res = await fetch(url, { method });
        return (await res.json()) as T;
    }
    download(url: string, method?: string, progress?: Progress, responseType?: 'arraybuffer'): Promise<ArrayBuffer>;
    download<T>(url: string, method?: string, progress?: Progress, responseType?: 'json'): Promise<T>;
    download(
        url: string,
        method = 'GET',
        progress?: Progress,
        responseType: 'json' | 'arraybuffer' = 'arraybuffer',
    ): Promise<unknown> {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.responseType = responseType;
            xhr.onload = () => {
                if (xhr.status >= 300) {
                    reject(new Error(`${method} ${url} ${xhr.statusText} (${xhr.status})`));
                } else if (xhr.response instanceof ArrayBuffer && responseType === 'arraybuffer') {
                    resolve(xhr.response);
                } else if (responseType === 'json') {
                    resolve(xhr.response);
                } else {
                    reject(new Error('数据无法解析'));
                }
            };
            xhr.onerror = () => {
                reject('加载失败');
            };
            if (progress) xhr.onprogress = progress;
            xhr.send();
        });
    }
}
