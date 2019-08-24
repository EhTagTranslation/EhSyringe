
const cacheRoot: { [key: string]: any } = {};

export function load<T>(key: string): T | undefined {
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
    cacheRoot[key] = value;
    window.localStorage.setItem(`EhSyringe.${key}`, JSON.stringify(value));
}
