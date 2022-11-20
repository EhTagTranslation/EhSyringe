import { Service } from '.';
export type Progress = (loaded: number) => void;

@Service()
export class Http {
    async json<T>(url: string, method = 'GET'): Promise<T> {
        const res = await fetch(url, { method });
        return (await res.json()) as T;
    }
    download(url: string, method?: string, progress?: Progress, responseType?: 'arraybuffer'): Promise<ArrayBuffer>;
    download<T>(url: string, method?: string, progress?: Progress, responseType?: 'json'): Promise<T>;
    async download(
        url: string,
        method = 'GET',
        progress?: Progress,
        responseType: 'json' | 'arraybuffer' = 'arraybuffer',
    ): Promise<unknown> {
        const res = await fetch(url, { method, redirect: 'follow', cache: 'no-cache' });
        if (res.status >= 300 || !res.body) {
            throw new Error(`${method} ${url} ${res.statusText} (${res.status})`);
        }
        const dataCache = [];
        let receivedSize = 0;
        const reader = res.body.getReader();
        for (;;) {
            const data = await reader.read();
            if (data.done) break;
            dataCache.push(data.value);
            receivedSize += data.value.byteLength;
            progress?.(receivedSize);
        }

        const data = new Uint8Array(receivedSize);
        let pos = 0;
        for (const piece of dataCache) {
            data.set(piece, pos);
            pos += piece.byteLength;
        }
        if (responseType === 'arraybuffer') {
            return data.buffer;
        }
        return JSON.parse(new TextDecoder().decode(data)) as unknown;
    }
}
