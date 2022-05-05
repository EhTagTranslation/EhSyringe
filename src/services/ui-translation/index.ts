import { Logger } from 'services/logger';
import { isValidHost } from 'utils/hosts';
import { dataMaps, Replacements, Replacer } from './helper';
import { Service } from '..';
import './data';

function hostMatches(hostname: string, hosts: readonly string[] | undefined): boolean {
    if (hosts == null) return true;
    for (const candidate of hosts) {
        if (hostname === candidate) return true;
        if (candidate.includes('*')) {
            const reg = new RegExp(`^${candidate.replace(/\./g, '\\.').replace(/\*/g, '.*')}$`);
            if (reg.test(hostname)) return true;
        }
    }
    return false;
}

@Service()
export class UiTranslation {
    constructor(readonly logger: Logger) {}
    get(url: URL | Location = location): Replacements {
        const results: Replacements = {
            plainReplacements: new Map<string, string>(),
            regexReplacements: new Map<RegExp, Replacer>(),
        };
        if (!url || !isValidHost(url.hostname)) {
            return results;
        }
        const path = url.pathname + url.search;
        this.logger.log('获取 UI 翻译：', path);
        dataMaps
            .filter((d) => d.regex.test(path) && hostMatches(location.hostname, d.hosts))
            .forEach((d) => {
                for (const [k, v] of d.plainReplacements) {
                    results.plainReplacements.set(k, v);
                }
                for (const [k, v] of d.regexReplacements) {
                    results.regexReplacements.set(k, v);
                }
            });
        return results;
    }
}
