const trim = (s: string): string => s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

export function mdImg2HtmlImg(mdText: string, max: number = Infinity): string {
    let n = 0;
    return mdText.replace(/\!\[(.*?)\]\((.*?)\)/igm, function (text, alt, href, index) {
        n++;
        if (max >= n) {
            let h = trim(href);
            if (h.slice(0, 1) === '#') {
                h = h.replace(/#(\S*)\s+(['"])(.*?)\2/igm, (_, state, __, url) => {
                    state = state || 'R18';
                    if (state === '#') state = 'R18G';
                    url = url.replace('"', '%22');
                    return `<img src="${url}" nsfw="${state}">`;
                });
                if (h.startsWith('<img ')) {
                    return h;
                }
            }
            h = h.replace('"', '%22');
            return `<img src="${h}">`;
        } else {
            return '';
        }
    });
}
