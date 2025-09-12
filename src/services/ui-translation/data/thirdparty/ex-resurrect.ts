import { merge } from '../../helper';

// ExResurrect
merge(
    /^\/g\//,
    undefined,
    {
        'Gallery Unavailable': '图库不可用',
        'Removal:': '移除：',

        'Custom Search': '自定义搜索',

        'Search by Name': '搜索名称',
        'Search by Full Name': '搜索全名',
        'Search by Name (nhentai.net)': '搜索名称 (nhentai.net)',
        'Search by Full Name (nhentai.net)': '搜索全名 (nhentai.net)',
        'Search by Name (hitomi.la)': '搜索名称 (hitomi.la)',
        'Search by Name (chaika)': '搜索名称 (chaika)',
        'Search by Full Name (chaika)': '搜索全名 (chaika)',
        'Search by URL (chaika)': '搜索 URL (chaika)',
        'Search by JP Title (DLsite)': '搜索日文标题 (DLsite)',

        'Possible Torrents:': '可能的种子：',
        "If the torrent link doesn't work, try the magnet link.": '如果种子链接无法使用，请尝试磁力链接。',
        'Magnet Link': '磁力链接',
    },
    [[/^Added (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})$/, '添加于 $1']],
);
