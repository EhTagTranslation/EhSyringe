export const REGEX = Symbol('location regex');
export const HOST = Symbol('host string');

export interface DataMap {
    readonly [REGEX]: RegExp;
    readonly [HOST]?: readonly string[];
    readonly [key: string]: string;
}

export const dataMaps = new Array<DataMap>();

export function merge(regex: RegExp, host: readonly string[] | string | undefined, data: Record<string, string>): void {
    const hosts = host ? [...new Set(Array.isArray(host) ? host : [host])].sort() : undefined;
    let map = dataMaps.find(
        (d) => JSON.stringify(d[HOST]) === JSON.stringify(hosts) && d[REGEX].source === regex.source,
    );
    if (!map) {
        map = {
            [REGEX]: regex,
            [HOST]: hosts,
        };
        dataMaps.push(map);
    }
    Object.assign(map, data);
}
