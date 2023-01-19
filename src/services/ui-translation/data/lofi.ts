import { merge } from '../helper';

merge(
    /^\/lofi\//,
    undefined,
    {
        '< Prev Page': '< 上一页',
        'Next Page >': '下一页 >',

        'E-Hentai Lo-Fi Galleries: The Mobile Hentai Experience': 'E-Hentai 低保真图库：移动 Hentai 体验',

        'Posted:': '发布：',
        'Category:': '类别：',
        'Tags:': '标签：',
        'Rating:': '评分：',
        'Go To First Page': '前往第一页',

        '\n\tImage Resolution: \xA0 ': '图像分辨率：',

        'Back to Gallery Page': '返回图库页',
        'Back to Front Page': '返回首页',
    },
    [[/^(\d\d\d\d-\d\d-\d\d \d\d:\d\d) by (.*)$/, '$1 \xA0 上传者：$2']],
);
