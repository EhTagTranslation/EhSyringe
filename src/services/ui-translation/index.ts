import { logger } from 'tool/log';
import { dataMaps, REGEX, HOST } from './helper';
import { Service } from 'typedi';
import './data';

@Service()
export class UiTranslation {
    get(url: URL | Location = location): Record<string, string> {
        if (!url || !(url.host.endsWith('e-hentai.org') || url.host.endsWith('exhentai.org'))) {
            return {};
        }
        const path = url.pathname + url.search;
        logger.log('获取 UI 翻译：', path);
        const results: { [key: string]: string } = {};
        Object.assign(
            results,
            ...dataMaps.filter((d) => d[REGEX].test(path) && (d[HOST]?.includes(location.host) ?? true)),
        );
        return results;
    }
}
