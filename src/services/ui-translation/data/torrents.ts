import { merge } from '../helper';

merge(
    /^\/(gallery)?torrents\.php/,
    undefined,
    {
        'Status: ': '状态：',
        All: '全部',
        Seeded: '有种',
        Unseeded: '无种',
        ' \xA0 \xA0 \xA0 \xA0 Show: ': ' |  显示：',
        'All Torrents': '全部种子',
        'Only My Torrents': '我的种子',
        'Search Torrents': '搜索种子',

        Added: '添加于',
        'Torrent Name': '种子名',
        Gallery: '图库 ID',
        Size: '文件大小',
        Seeds: '做种',
        Peers: '下载',
        DLs: '完成',

        'You cannot add torrents directly to this page. To upload torrents to this system, visit the torrent screen for a gallery.':
            '您无法直接将种子文件添加到此页面。要将种子文件上传到此系统，请在相应图库的种子页面上传。',

        'Posted:': '发布于：',
        'Size:': '文件大小：',
        'Seeds:': '做种：',
        'Peers:': '下载：',
        'Downloads:': '完成：',
        'Uploader:': '上传者：',
        Information: '信息',
        Expunged: '已删除',

        'There are no torrents for this gallery.': '当前图库还没有种子',
        'There are no up-to-date torrents for this gallery.': '当前图库没有最新的种子',
        'Outdated Torrents:': '过时种子：',
        'New Torrents:': '新种子：',
        '\n\t\tYou can add a torrent for this gallery by uploading it here. The maximum torrent file size is 10 MB.':
            '您可以在这里上传来为此图库添加种子。最大 Torrent 文件大小为 10 MB。',
        '\n\t\tIf you are creating the torrent yourself, set this as announce tracker: ':
            '如果您自己创建 Torrent，请将此地址设置为 Announce Tracker：',
        '\n\t\tNote that you have to download the finished torrent from this site after uploading for stats to be recorded.\n\t':
            '请注意，您必须在上传后从此站点下载已完成的种子，以便记录统计信息。',
        'Upload Torrent': '上传种子',
        'Close Window': '关闭窗口',

        Posted: '发布于',
        DLers: '下载',
        Completes: '完成',
        'Personalized Torrent': '私有种子',
        '(Just For You - this makes sure to record your stats)\n': '(只属于您 - 确保记录您的下载统计信息)',
        'Redistributable Torrent': '可再分发种子',
        '(use if you want a file you can post or give to others)': '(如果您想再发布或提供给其他人使用)',
        'No comments were given for this torrent.': '此种子没有评论',
        'Vote to Expunge': '投票删除',
        'Back to Index': '返回',
    },
    [
        [/^Showing ([\d,]+)-([\d,]+) of ([\d,]+)$/, '$1 - $2，共 $3 个结果'],
        [/^([\d,]+) torrents? (was|were) found for this gallery.$/, '找到了 $1 个种子。'],
    ],
);
