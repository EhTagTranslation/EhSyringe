import { merge } from '../helper';

merge(
    /^\/hentaiathome\.php\??$/,
    undefined,
    {
        'Hentai@Home Clients': 'Hentai@Home 客户端',
        'H@H Region': 'H@H 地区',
        'Current Network Load': '当前网络负载',
        'H@H Miss%': 'H@H 丢包率%',
        'Coverage': '覆盖率',
        'Hits/GB': '点击/GB',
        'Quality': '质量',
        'North and South America': '北美洲和南美洲',
        'Europe and Africa': '欧洲和非洲',
        'Asia and Oceania': '亚洲和大洋洲',
        'Global': '全球',

        'Current Network Load shows how much raw bandwidth is currently used to serve images.': '当前网络负载显示当前用于提供图像的原始带宽量。',
        ' This includes requests served by H@H as well as direct requests from the image servers.': '这包括 H@H 服务的请求以及来自图像服务器的直接请求。',
        'H@H Miss% shows the percentage of requests for the region that would have gone to a H@H client if one was available, but where no client was ready to serve the request.': 'H@H 丢包率%显示［如果该区域有一个 H@H 客户端可用，请求将会发送到 H@H 客户端，但没有客户端能为该请求提供服务］的百分比。',
        'Coverage denotes the average number of times a static file range partition can be found within a given region, indicating the total available storage capacity.': '覆盖率可以理解为［在该区域内，一组文件的平均存在次数］，代表着总可用存储容量。',
        'Hits/GB shows the average number of hits per minute per gigabyte of allocated disk space for all online clients in the region for the last 24 hours.': '点击/GB 显示过去 24 小时内该地区所有在线客户端分配的每 GB 磁盘空间每分钟的平均点击次数。',

        'Your Active Clients': '您的活动客户端'


    },
    [],
);

merge(
    /^\/hentaiathome\.php\?.*act=settings/,
    undefined,
    {

    },
    []
);

merge(
    /^\/hentaiathome\.php\?.*act=schedule/,
    undefined,
    {

    },
    [

    [
        /All schedule times are in UTC\. As a reference, the current UTC time is (.*?)\./,
        (s, t) => `所有计划时间均为 UTC。作为参考，现在的 UTC 时间是 ${t.replace(/\s/g, '\xA0')}。`,
    ],

    ]
);
