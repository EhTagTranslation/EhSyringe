import { merge } from '../helper';

merge(
    /^\/favorites\.php/,
    undefined,
    {
        'Show All Favorites': '显示所有收藏夹',

        'Order: ': '排序：',
        'Published Time': '发布时间',
        'Favorited Time': '收藏时间',

        Favorited: '收藏时间',
        'Favorited:': '收藏于：',

        'Delete Selected': '删除选中收藏',
        'Change Category': '移动到',
    },
    [[/^Note: /, '备注：']],
);
