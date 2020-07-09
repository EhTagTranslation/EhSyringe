const cacheRoot: Record<string, unknown> = {};

function makeStorageKey(key: string): string {
    return `EhSyringe.${key}`;
}

export function load<T>(key: string): T | undefined {
    if (cacheRoot[key]) {
        return cacheRoot[key] as T;
    }
    const storageValue = window.localStorage.getItem(makeStorageKey(key));
    if (typeof storageValue === 'string') {
        try {
            return (cacheRoot[key] = JSON.parse(storageValue) as T);
        } catch {
            window.localStorage.removeItem(makeStorageKey(key));
        }
    }
    return undefined;
}

export function save<T>(key: string, value: T): void {
    cacheRoot[key] = value;
    window.localStorage.setItem(makeStorageKey(key), JSON.stringify(value));
}
