import { namespaceTranslate } from '../translation/namespace';
import { EHTNamespaceName, Suggestion } from '../interface';

export function dateDiff(hisTime: Date | number = 0, nowTime: Date | number = new Date()): string {
    hisTime = typeof hisTime === 'number' ? hisTime : hisTime.getTime();
    nowTime = typeof nowTime === 'number' ? nowTime : nowTime.getTime();
    if (!hisTime) return 'N/A';

    const diffValue = nowTime - hisTime;

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12;

    const _year = diffValue / year;
    const _month = diffValue / month;
    const _week = diffValue / (day * 7);
    const _day = diffValue / day;
    const _hour = diffValue / hour;
    const _min = diffValue / minute;

    let result = '';

    if (_year >= 1) result = Math.floor(_year) + ' 年前';
    else if (_month >= 1) result = Math.floor(_month) + ' 个月前';
    else if (_week >= 1) result = Math.floor(_week) + ' 周前';
    else if (_day >= 1) result = Math.floor(_day) + ' 天前';
    else if (_hour >= 1) result = Math.floor(_hour) + ' 个小时前';
    else if (_min >= 1) result = Math.floor(_min) + ' 分钟前';
    else result = '刚刚';
    return result;
}

export function escapeHtml(unsafe: string): string {
    return (unsafe || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

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

export function getFullKey(namespace: EHTNamespaceName, key: string): string {
    return namespace === 'misc' ? key : `${namespace}:${key.toLowerCase()}`;
}

export function getSearchTerm(namespace: EHTNamespaceName, key: string): string {
    const ns = namespace === 'misc' ? '' : namespace + ':';
    const search = key.includes(' ') ? `"${key.toLowerCase()}$"` : `${key.toLowerCase()}$`;
    return ns + search;
}

export function getEditorUrl(namespace: EHTNamespaceName, key: string): string {
    return `https://ehtt.now.sh/edit/${encodeURIComponent(namespace || 'misc')}/${encodeURIComponent(key)}`;
}

export function downloadFile(url: string, method = 'GET', progress: (ev: ProgressEvent) => void): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'arraybuffer';
        xhr.onload = () => {
            if (xhr.response instanceof ArrayBuffer) {
                resolve(xhr.response);
            } else {
                reject(new Error('数据无法解析'));
            }
        };
        xhr.onerror = () => {
            reject('加载失败');
        };
        xhr.onprogress = progress;
        xhr.send();
    });
}
