import { Service } from 'typedi';
import type { EHTNamespaceName, EHTNamespaceNameShort } from 'interface';
import type { Suggestion } from 'plugin/suggest';
import escapeHtml from 'escape-html';
import emojiRegex from 'emoji-regex';

const emojiReg = emojiRegex();
const nsDic: { [k: string]: EHTNamespaceName } = {
    r: 'reclass',
    reclass: 'reclass',

    l: 'language',
    language: 'language',
    lang: 'language',

    o: 'other',
    other: 'other',

    p: 'parody',
    parody: 'parody',
    series: 'parody',

    c: 'character',
    char: 'character',
    character: 'character',

    cos: 'cosplayer',
    coser: 'cosplayer',
    cosplayer: 'cosplayer',

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

    x: 'mixed',
    mixed: 'mixed',
};
const shortNsDic: Record<EHTNamespaceName, EHTNamespaceNameShort> = {
    rows: '',
    reclass: 'r',
    language: 'l',
    parody: 'p',
    character: 'c',
    group: 'g',
    artist: 'a',
    cosplayer: 'cos',
    male: 'm',
    female: 'f',
    mixed: 'x',
    other: 'o',
    temp: '',
};
@Service()
export class Tagging {
    namespace(ns: string): EHTNamespaceName {
        if (!ns) return 'temp';
        if (ns in nsDic) return nsDic[ns];
        ns = ns.toLowerCase();
        if (ns in nsDic) return nsDic[ns];
        ns = ns.trim();
        if (ns in nsDic) return nsDic[ns];
        ns = ns[0];
        if (ns in nsDic) return nsDic[ns];
        return 'temp';
    }
    ns(ns: string): EHTNamespaceNameShort {
        const fns = this.namespace(ns);
        return shortNsDic[fns];
    }

    removePara(name: string): string {
        return name.replace(/^<p>(.+?)<\/p>$/, '$1').trim();
    }
    markImagesAndEmoji(name: string): string {
        return name
            .replace(emojiReg, `<span ehs-emoji>$&</span>`)
            .replace(/<img(.*?)>/gi, `<img onerror="this.style.display='none'" ehs-icon $1>`);
    }
    removeImagesAndEmoji(name: string): string {
        return name
            .replace(emojiReg, '')
            .replace(/<img.*?>/gi, '')
            .trim();
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
        return `https://ehtt.vercel.app/edit/${namespace}/${encodeURIComponent(key)}`;
    }

    readonly suggestUrl = 'https://forums.e-hentai.org/index.php?showtopic=246656';

    readonly namespaceTranslate: Record<EHTNamespaceName, string> = {
        rows: '行名',
        artist: '艺术家',
        cosplayer: '偶像',
        parody: '原作',
        character: '角色',
        group: '团队',
        language: '语言',
        other: '其他',
        female: '女',
        male: '男',
        mixed: '混',
        reclass: '重新分类',
        temp: '临时',
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
