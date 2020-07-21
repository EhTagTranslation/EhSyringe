import { Logger } from 'services/logger';
import { dataMaps, REGEX, HOST } from './helper';
import { Service } from '..';
import './data';

@Service()
export class UiTranslation {
    constructor(readonly logger: Logger) {}
    get(url: URL | Location = location): Record<string, string> {
        if (!url || !(url.host.endsWith('e-hentai.org') || url.host.endsWith('exhentai.org'))) {
            return {};
        }
        const path = url.pathname + url.search;
        this.logger.log('获取 UI 翻译：', path);
        const results: { [key: string]: string } = {};
        Object.assign(
            results,
            ...dataMaps.filter((d) => d[REGEX].test(path) && (d[HOST]?.includes(location.host) ?? true)),
        );
        return results;
    }
}
