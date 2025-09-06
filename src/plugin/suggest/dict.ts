import dict from './dict.yml';

const CN2JP = Object.freeze(dict as Record<string, readonly string[]>);

const JP2CN = Object.freeze(Object.fromEntries(Object.entries(CN2JP).flatMap(([k, v]) => v.map((vv) => [vv, k]))));

/** 检查是否为 ASCII */
export function isASCII(text: string): boolean {
    for (let i = 0, n = text.length; i < n; i++) {
        if (text.charCodeAt(i) >= 0x80) return false;
    }
    return true;
}

/** 转为中文汉字 */
export function toCN(text: string): string {
    let ret = '';
    for (const ch of text) {
        ret += JP2CN[ch] || ch;
    }
    return ret;
}

const MAX_COMBINE = 16;
/** 转为日文汉字 */
export function toJP(text: string): string[] {
    let res = [''];
    for (const ch of text) {
        const jp = CN2JP[ch];
        let rep;
        if (jp) {
            if (jp.length > 1 && res.length < MAX_COMBINE) {
                const tmp: string[] = [];
                for (const r of res) {
                    for (const j of jp) {
                        tmp.push(r + j);
                    }
                }
                res = tmp;
                continue;
            }
            rep = jp[0];
        } else {
            rep = ch;
        }
        for (let i = 0, n = res.length; i < n; i++) {
            res[i] += rep;
        }
    }
    return res;
}
