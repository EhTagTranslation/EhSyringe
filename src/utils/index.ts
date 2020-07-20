import { EHTNamespaceName } from '../interface';
export * from './date-diff';
export * from './download-file';
export * from './make-tag-match-html';

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
