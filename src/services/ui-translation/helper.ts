export type Replacer = string | ((match: string, ...captures: string[]) => string);

export interface Replacements {
    readonly plainReplacements: Map<string, string>;
    readonly regexReplacements: Map<RegExp, Replacer>;
}

export interface DataMap extends Replacements {
    readonly regex: RegExp;
    readonly hosts?: readonly string[];
}

export const dataMaps: DataMap[] = [];

export function merge(
    regex: RegExp,
    host: readonly string[] | string | undefined,
    plainReplacements: Record<string, string>,
    regexReplacements?: Array<[RegExp, Replacer]>,
): void {
    const hosts = host ? [...new Set(Array.isArray(host) ? host : [host])].sort() : undefined;
    let map = dataMaps.find(
        (d) => JSON.stringify(d.hosts) === JSON.stringify(hosts) && d.regex.source === regex.source,
    );
    if (!map) {
        map = {
            regex,
            hosts,
            plainReplacements: new Map<string, string>(),
            regexReplacements: new Map<RegExp, Replacer>(),
        };
        dataMaps.push(map);
    }
    for (const key in plainReplacements) {
        const element = plainReplacements[key];
        map.plainReplacements.set(key, element);
    }
    if (regexReplacements) {
        for (const [k, v] of regexReplacements) {
            map.regexReplacements.set(k, v);
        }
    }
}
