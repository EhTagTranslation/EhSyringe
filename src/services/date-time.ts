import { Service } from '.';

const base: Intl.DateTimeFormatOptions = {
    hourCycle: 'h23',
};

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

    absolute(hisTime: number, nowTime: number = Date.now()): string {
        const his = new Date(hisTime);
        const now = new Date(nowTime);
        if (his.getFullYear() === now.getFullYear()) {
            if (his.getMonth() === now.getMonth() && his.getDate() === now.getDate()) {
                return `今天 ${timeFormatter.format(his)}`;
            }
            return noYearDateTimeFormatter.format(his);
        }
        return dateTimeFormatter.format(his);
    }

    relative(diffTime: number): string {
        const nYear = diffTime / DateTime.year;
        const nMonth = diffTime / DateTime.month;
        const nDay = diffTime / DateTime.day;
        const nHour = diffTime / DateTime.hour;
        const nMin = diffTime / DateTime.minute;

        // Note: 一天前 不是 昨天，一年前 也不是 去年
        if (nYear >= 1) return `${Math.floor(nYear)} 年前`;
        else if (nMonth >= 1) return `${Math.floor(nMonth)} 个月前`;
        else if (nDay >= 1) return `${Math.floor(nDay)} 天前`;
        else if (nHour >= 1) return `${Math.floor(nHour)} 小时前`;
        else if (nMin >= 1) return `${Math.floor(nMin)} 分钟前`;
        else if (nMin >= 0) return '刚刚';
        else if (nMin > -1) return '马上';
        else if (nHour > -1) return `${Math.floor(-nMin)} 分钟后`;
        else if (nDay > -1) return `${Math.floor(-nHour)} 小时后`;
        else if (nMonth > -1) return `${Math.floor(-nDay)} 天后`;
        else if (nYear > -1) return `${Math.floor(-nMonth)} 个月后`;
        else return `${Math.floor(-nYear)} 年后`;
    }

    diff(hisTime: Date | number = 0, nowTime: Date | number = Date.now(), maxRelativeDiff = DateTime.day * 7): string {
        hisTime = typeof hisTime === 'number' ? hisTime : hisTime.getTime();
        nowTime = typeof nowTime === 'number' ? nowTime : nowTime.getTime();
        if (!hisTime) return 'N/A';

        const diffTime = nowTime - hisTime;

        if (diffTime >= maxRelativeDiff) {
            return this.absolute(hisTime, nowTime);
        } else {
            return this.relative(diffTime);
        }
    }
}
