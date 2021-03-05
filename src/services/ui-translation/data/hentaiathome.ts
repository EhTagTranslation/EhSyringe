import { merge } from '../helper';

merge(
    /^\/hentaiathome\.php/,
    undefined,
    {
        'Hentai@Home Clients': 'Hentai@Home 客户端',
    },
    [
        [
            /All schedule times are in UTC\. As a reference, the current UTC time is (.*?)\./,
            (s, t) => `所有计划时间均为 UTC。作为参考，现在的 UTC 时间是 ${t.replace(/\s/g, '\xA0')}。`,
        ],
    ],
);
