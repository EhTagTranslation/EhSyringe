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

    if (_year >= 1) result = `${Math.floor(_year)} 年前`;
    else if (_month >= 1) result = `${Math.floor(_month)} 个月前`;
    else if (_week >= 1) result = `${Math.floor(_week)} 周前`;
    else if (_day >= 1) result = `${Math.floor(_day)} 天前`;
    else if (_hour >= 1) result = `${Math.floor(_hour)} 小时前`;
    else if (_min >= 1) result = `${Math.floor(_min)} 分钟前`;
    else result = '刚刚';
    return result;
}
