import escapeHtml from 'escape-html';
import { EHTNamespaceName } from '../interface';
import { Suggestion } from 'plugin/suggest';

export const namespaceTranslate: Record<EHTNamespaceName, string> = {
    rows: '行名',
    artist: '艺术家',
    parody: '原作',
    character: '角色',
    group: '团队',
    language: '语言',
    female: '女',
    male: '男',
    reclass: '重新分类',
    misc: '杂项',
};

export function makeTagMatchHtml(suggestion: Suggestion, markTag = 'mark'): { en: string; cn: string } {
    const tag = suggestion.tag;
    const cnNamespace = namespaceTranslate[tag.namespace];
    let cnNameHtml = '';
    let enNameHtml;
    if (tag.namespace !== 'misc') {
        cnNameHtml += escapeHtml(cnNamespace) + '：';
    }
    if (suggestion.match.cleanName) {
        const range = suggestion.match.cleanName;
        cnNameHtml += `${escapeHtml(tag.cleanName.substring(0, range.start))}<${markTag}>${escapeHtml(
            tag.cleanName.substr(range.start, range.length),
        )}</${markTag}>${escapeHtml(tag.cleanName.substr(range.start + range.length))}`;
    } else {
        cnNameHtml += escapeHtml(tag.cleanName);
    }
    if (suggestion.match.key) {
        const range = suggestion.match.key;
        enNameHtml = `${escapeHtml(tag.key.substring(0, range.start))}<${markTag}>${escapeHtml(
            tag.key.substr(range.start, range.length),
        )}</${markTag}>${escapeHtml(tag.key.substr(range.start + range.length))}`;
    } else {
        enNameHtml = escapeHtml(tag.key);
    }
    return {
        cn: cnNameHtml,
        en: enNameHtml,
    };
}
