import { merge } from '../helper';

merge(/^\/favorites\.php/, undefined, {
    'Search:': '搜索:',
    ' Name': ' 名称',
    ' Tags': ' 标签',
    ' Note': ' 备注',

    '\n\t\tOrder: \xA0': '排序：',
    'Use Posted': '发布时间',
    'Use Favorited': '收藏时间',
    'Show All Favorites': '显示所有收藏夹',

    'Search Favorites': '搜索收藏夹',
    'Delete Favorites': '删除收藏',
    'Change Category': '移动到',
});
