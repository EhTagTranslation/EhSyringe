
function getCacheRoot(): { [key: string]: any } {
    let cacheRoot = (window as any).EhSCache;
    if (!cacheRoot) {
        cacheRoot = (window as any).EhSCache = {};
    }
    return cacheRoot;
}

export function load<T>(key: string): T | undefined {
    const cacheRoot = getCacheRoot();
    if (cacheRoot[key]) {
        return cacheRoot[key];
    }
    const storageValue = window.localStorage.getItem(`EhSyringe.${key}`);
    if (typeof (storageValue) === 'string') {
        return cacheRoot[key] = JSON.parse(storageValue);
    }
    return undefined;
}

export function save<T>(key: string, value: T): void {
    const cacheRoot = getCacheRoot();
    cacheRoot[key] = value;
    window.localStorage.setItem(`EhSyringe.${key}`, JSON.stringify(value));
}
