import { Service } from '.';

const base: Record<string, unknown> = {
    hourCycle: 'h23',
};

const dateFormatter = new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    ...base,
});

const timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    ...base,
});

const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    ...base,
});

const noYearDateTimeFormatter = new Intl.DateTimeFormat(undefined, {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    ...base,
});

@Service()
export class DateTime {
    static readonly second = 1000;
    static readonly minute = DateTime.second * 60;
    static readonly hour = DateTime.minute * 60;
    static readonly day = DateTime.hour * 24;
    static readonly month = DateTime.day * (365.25 / 12);
    static readonly year = DateTime.month * 12;
    diff(hisTime: Date | number = 0, nowTime: Date | number = Date.now(), maxRelativeDiff = DateTime.day * 7): string {
        hisTime = typeof hisTime === 'number' ? hisTime : hisTime.getTime();
        nowTime = typeof nowTime === 'number' ? nowTime : nowTime.getTime();
        if (!hisTime) return 'N/A';

        const diffValue = nowTime - hisTime;

        if (diffValue >= maxRelativeDiff) {
            const his = new Date(hisTime);
            const now = new Date(nowTime);
            if (dateFormatter.format(his) === dateFormatter.format(now)) {
                return `今天 ${timeFormatter.format(his)}`;
            }
            if (his.getFullYear() === now.getFullYear()) {
                return noYearDateTimeFormatter.format(his);
            }
            return dateTimeFormatter.format(his);
        }

        const nYear = diffValue / DateTime.year;
        const nMonth = diffValue / DateTime.month;
        const nDay = diffValue / DateTime.day;
        const nHour = diffValue / DateTime.hour;
        const nMin = diffValue / DateTime.minute;

        if (nYear >= 1) return `${Math.floor(nYear)} 年前`;
        else if (nMonth >= 1) return `${Math.floor(nMonth)} 个月前`;
        else if (nDay >= 1) return `${Math.floor(nDay)} 天前`;
        else if (nHour >= 1) return `${Math.floor(nHour)} 小时前`;
        else if (nMin >= 1) return `${Math.floor(nMin)} 分钟前`;
        else return '刚刚';
    }
}
