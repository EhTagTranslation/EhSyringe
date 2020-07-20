import { Service } from 'typedi';

@Service()
export class Http {
    async json<T>(url: string): Promise<T> {
        const res = await fetch(url);
        return (await res.json()) as T;
    }
}
