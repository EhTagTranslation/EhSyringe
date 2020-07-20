import { namespaceTranslate } from '../translation/namespace';
import { Suggestion } from '../interface';
import escapeHtml from 'escape-html';

export function makeTagMatchHtml(suggestion: Suggestion, markTag = 'mark'): { en: string; cn: string } {
    const tag = suggestion.tag;
    const cnNamespace = namespaceTranslate[tag.namespace];
    let cnNameHtml = '';
    let enNameHtml;
    if (tag.namespace !== 'misc') {
        cnNameHtml += escapeHtml(cnNamespace) + '：';
    }
    if (suggestion.match.name) {
        const range = suggestion.match.name;
        cnNameHtml += `${escapeHtml(tag.name.substring(0, range.start))}<${markTag}>${escapeHtml(
            tag.name.substr(range.start, range.length),
        )}</${markTag}>${escapeHtml(tag.name.substr(range.start + range.length))}`;
    } else {
        cnNameHtml += escapeHtml(tag.name);
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
