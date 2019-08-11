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
                    return `<img src="${url}" nsfw="${state}" onerror="this.style.display = 'none'">`;
                });
                if (h.startsWith('<img ')) {
                    return h;
                }
            }
            h = h.replace('"', '%22');
            return `<img src="${h}" onerror="this.style.display = 'none'">`;
        } else {
            return '';
        }
    });
}

export function dateDiff(hisTime: Date, nowTime?: Date) {
    if (!arguments.length) return '';
    let arg = arguments,
      now = arg[1] ? arg[1] : new Date().getTime(),
      diffValue = now - arg[0],
      result = '',

      minute = 1000 * 60,
      hour = minute * 60,
      day = hour * 24,
      month = day * 30,
      year = month * 12,

      _year = diffValue / year,
      _month = diffValue / month,
      _week = diffValue / (7 * day),
      _day = diffValue / day,
      _hour = diffValue / hour,
      _min = diffValue / minute;

    if (_year >= 1) result = Math.floor(_year) + "年前";
    else if (_month >= 1) result = Math.floor(_month) + "个月前";
    else if (_week >= 1) result = Math.floor(_week) + "周前";
    else if (_day >= 1) result = Math.floor(_day) + "天前";
    else if (_hour >= 1) result = Math.floor(_hour) + "个小时前";
    else if (_min >= 1) result = Math.floor(_min) + "分钟前";
    else result = "刚刚";
    return result;
}
