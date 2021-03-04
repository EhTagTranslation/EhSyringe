import { Logger } from 'services/logger';
import { dataMaps, Replacements, Replacer } from './helper';
import { Service } from '..';
import './data';

@Service()
export class UiTranslation {
    constructor(readonly logger: Logger) {}
    get(url: URL | Location = location): Replacements {
        const results: Replacements = {
            plainReplacements: new Map<string, string>(),
            regexReplacements: new Map<RegExp, Replacer>(),
        };
        if (!url || !(url.host.endsWith('e-hentai.org') || url.host.endsWith('exhentai.org'))) {
            return results;
        }
        const path = url.pathname + url.search;
        this.logger.log('获取 UI 翻译：', path);
        dataMaps
            .filter((d) => d.regex.test(path) && (d.hosts?.includes(location.host) ?? true))
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
