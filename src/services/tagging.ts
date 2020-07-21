import { Service } from 'typedi';
import { EHTNamespaceName, EHTNamespaceNameShort } from 'interface';
import { Suggestion } from 'plugin/suggest';
import escapeHtml from 'escape-html';
@Service()
export class Tagging {
    readonly nsDic: { [k: string]: EHTNamespaceName } = {
        '': 'misc',
        misc: 'misc',
        miscellaneous: 'misc',
        r: 'reclass',
        reclass: 'reclass',
        l: 'language',
        language: 'language',
        lang: 'language',
        p: 'parody',
        parody: 'parody',
        series: 'parody',
        c: 'character',
        char: 'character',
        character: 'character',
        g: 'group',
        group: 'group',
        creator: 'group',
        circle: 'group',
        a: 'artist',
        artist: 'artist',
        m: 'male',
        male: 'male',
        f: 'female',
        female: 'female',
    };

    namespace(ns: string): EHTNamespaceName {
        if (!ns) return 'misc';
        if (ns in this.nsDic) return this.nsDic[ns];
        ns = ns.toLowerCase();
        if (ns in this.nsDic) return this.nsDic[ns];
        ns = ns.trim();
        if (ns in this.nsDic) return this.nsDic[ns];
        ns = ns[0];
        if (ns in this.nsDic) return this.nsDic[ns];
        return 'misc';
    }
    ns(ns: string): EHTNamespaceNameShort {
        const fns = this.namespace(ns);
        if (fns === 'misc') return '';
        return fns[0] as EHTNamespaceNameShort;
    }

    fullKey(tag: { namespace: string; key: string } | { ns: EHTNamespaceNameShort; key: string }): string {
        const ns = 'namespace' in tag ? this.ns(tag.namespace) : tag.ns;
        const key = tag.key.toLowerCase();
        return ns ? `${ns}:${key}` : key;
    }

    searchTerm(tag: { namespace: string; key: string } | { ns: EHTNamespaceNameShort; key: string }): string {
        const ns = 'namespace' in tag ? this.ns(tag.namespace) : tag.ns;
        const key = tag.key.toLowerCase();
        const nsP = ns ? `${ns}:` : '';
        const search = key.includes(' ') ? `"${key}$"` : `${key}$`;
        return nsP + search;
    }

    editorUrl(tag: { namespace: string; key: string } | { ns: EHTNamespaceNameShort; key: string }): string {
        const namespace = 'namespace' in tag ? this.namespace(tag.namespace) : this.namespace(tag.ns);
        const key = tag.key.toLowerCase();
        return `https://ehtt.now.sh/edit/${namespace}/${encodeURIComponent(key)}`;
    }

    readonly namespaceTranslate: Record<EHTNamespaceName, string> = {
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

    makeTagMatchHtml(suggestion: Suggestion, markTag = 'mark'): { en: string; cn: string } {
        const tag = suggestion.tag;
        const cnNamespace = this.namespaceTranslate[this.namespace(tag.ns)];
        let cnNameHtml = '';
        let enNameHtml;
        if (tag.ns) {
            cnNameHtml += escapeHtml(cnNamespace) + '：';
        }
        if (suggestion.match.cn) {
            const range = suggestion.match.cn;
            cnNameHtml += `${escapeHtml(tag.cn.slice(0, range.start))}<${markTag}>${escapeHtml(
                tag.cn.slice(range.start, range.end),
            )}</${markTag}>${escapeHtml(tag.cn.slice(range.end))}`;
        } else {
            cnNameHtml += escapeHtml(tag.cn);
        }
        if (suggestion.match.key) {
            const range = suggestion.match.key;
            enNameHtml = `${escapeHtml(tag.key.slice(0, range.start))}<${markTag}>${escapeHtml(
                tag.key.slice(range.start, range.end),
            )}</${markTag}>${escapeHtml(tag.key.slice(range.end))}`;
        } else {
            enNameHtml = escapeHtml(tag.key);
        }
        return {
            cn: cnNameHtml,
            en: enNameHtml,
        };
    }
}
