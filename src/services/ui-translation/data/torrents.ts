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
        '\nNote that you cannot add torrents directly to this page. To upload torrents to this system, visit the torrent screen for a gallery.\n':
            '注意：你不能直接把种子添加到此页面。请在图库中上传。',
        'Search Torrents': '搜索种子',
        'Advanced Gallery/Torrent Search': '高级图库和种子搜索',

        Added: '添加于',
        'Posted:': '发布于：',
        'Torrent Name': '种子名',
        Gallery: '图库 ID',
        Size: '文件大小',
        'Size:': '文件大小：',
        Seeds: '做种',
        Peers: '下载',
        'Seeds:': '做种：',
        'Peers:': '下载：',
        DLers: '下载',
        'Downloads:': '完成：',
        Completes: '完成',
        DLs: '完成',

        '0 torrents were found for this gallery.': '当前图库还没有种子',
        'Uploader:': '上传者：',
        'New Torrents:': '新种子：',
        Information: '信息',
        'Close Window': '关闭窗口',
        'Upload Torrent': '上传种子',
        '\n\t\tYou can add a torrent for this gallery by uploading it here. The maximum torrent file size is 10 MB.':
            '您可以在这里上传来为此库添加种子。最大 Torrent 文件大小为 10MB。',
        '\n\t\tNote that you have to download the finished torrent from this site after uploading for stats to be recorded.\n\t':
            '请注意，您必须在上传后从该站点下载私有种子，以便记录统计信息。',
        '\n\t\tIf you are creating the torrent yourself, set this as announce tracker: ':
            '如果您自己创建 Torrent，请将其设置为 AnnounceTracker：',
        'Personalized Torrent': '私有种子',
        'Redistributable Torrent': '可再分发种子',
        '(Just For You - this makes sure to record your stats)\n': '(只属于你 - 确保记录你的下载统计信息)',
        '(use if you want a file you can post or give to others)': '(如果您想再发布或提供给其他人使用)',
        'Back to Index': '返回',
        'Vote to Expunge': '投票删除',
        'No comments were given for this torrent.': '这个种子没有评论',
    },
    [[/([\d,]+) torrents? (was|were) found for this gallery\./, '找到了 $1 个种子。']],
);
