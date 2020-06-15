import { logger } from '../tool/log';

const regex = Symbol('location regex');
const host = Symbol('host string');

interface DataMap {
    readonly [regex]: RegExp;
    readonly [host]?: string;
    readonly [key: string]: string;
}

const uiData: readonly DataMap[] = [
    {
        [regex]: /.*/,
        'Report Gallery': '举报图库',
        'Archive Download': '存档下载',
        'Torrent Download': '种子下载',
        'Petition to Expunge': '申请删除',
        'Petition to Rename': '申请重命名',
        'Rename Petition Sent': '已发送的重命名申请',
        'Show Gallery Stats': '查看统计',
        'Multi-Page Viewer': '多页查看器',

        ' Read Later': ' 稍后再读',
        ' Added to Read Later': ' 已添加到稍后再读',

        'language:': '语言:',
        'parody:': '原作:',
        'character:': '角色:',
        'group:': '社团:',
        'artist:': '作者:',
        'female:': '女性:',
        'male:': '男性:',
        'misc:': '杂项:',
        'reclass:': '重分类:',

        'Posted:': '发布于:',
        'Parent:': '父级:',
        'Visible:': '显示:',
        'Language:': '语言:',
        'File Size:': '文件大小:',
        'Length:': '页数:',
        'Favorited:': '收藏:',
        'Rating:': '评分:',
        'Average:': '平均:',
        ' Add to Favorites': ' 添加到收藏夹',
        Normal: '普通',
        Large: '大图',
        ' Normal': '普通',
        ' Large': '大图',

        '4 rows': '4 行',
        '10 rows': '10 行',
        '20 rows': '20 行',
        '40 rows': '40 行',

        'Score ': '分数 ',
        'Uploader Comment': '上传者评论',

        'Vote+': '顶',
        'Vote-': '踩',

        'Vote Up': '顶',
        'Vote Down': '踩',

        'Show Tagged Galleries': '含有该标签的图库',
        'Show Tag Definition': '显示标签解释',
        'Add New Tag': '添加新标签',

        'Post New Comment': '发送新评论',

        'Front Page': '首页',

        Watched: '关注',
        Popular: '流行',
        Torrents: '种子',
        Home: '首页',

        Settings: '设置',
        'My ': '我的',
        'My Home': '我的首页',
        Favorites: '收藏',
        Uploads: '上传',
        Toplists: '排行榜',
        Bounties: '悬赏',
        News: '新闻',
        Forums: '论坛',
        Wiki: '维基',

        Doujinshi: '同人志',
        Manga: '漫画',
        'Artist CG': '画师CG',
        'Artist CG Sets': '画师CG集',
        'Game CG': '游戏CG',
        'Game CG Sets': '游戏CG集',
        Western: '西方',
        'Non-H': '无H',
        'Image Set': '图集',
        'Image Sets': '图集',
        // 'Cosplay': '',
        'Asian Porn': '亚洲色情',
        Misc: '杂项',

        'Show Advanced Options': '显示高级选项',
        'Show File Search': '文件搜索',
        'E-Hentai Galleries: The Free Hentai Doujinshi, Manga and Image Gallery System':
            'E-Hentai: 一个免费的绅士同人志、漫画和图片的图库系统',
        'Visit the E-Hentai Forums': '前往 E-Hentai 论坛',
        'Play the HentaiVerse Minigame': '玩 HentaiVerse 小游戏',
        'Lo-Fi Version': '低保真版',
        'Please read the ': '请阅读',
        'Terms of Service': '服务条款',
        ' before participating with or uploading any content to this site.': '后再使用该网站或上传资源。',

        'Enter new tags, separated with comma': '输入新标签, 用逗号分隔',
        'Search Keywords': '搜索关键词',

        'Enter a single tag to flag, watch or hide': '输入要标记、关注或隐藏的标签',
        ' Watched': ' 关注',
        ' Hidden': ' 隐藏',
        ' Enable': '启用',
        'Action:': '操作：',
        Save: '保存',
        '#default': '#默认',
        'Select All': '全选',
        'Delete Selected': '删除选中项',
        'Confirm Delete': '确认删除',

        'Japanese \xA0': '日文 \xA0',
        'English \xA0': '英文 \xA0',
        'Chinese \xA0': '中文 \xA0',
        'Dutch \xA0': '荷兰语 \xA0',
        'French \xA0': '法语 \xA0',
        'German \xA0': '德语 \xA0',
        'Hungarian \xA0': '匈牙利 \xA0',
        'Italian \xA0': '意呆利 \xA0',
        'Korean \xA0': '韩语 \xA0',
        'Polish \xA0': '波兰语 \xA0',
        'Portuguese \xA0': '葡萄牙语 \xA0',
        'Russian \xA0': '俄语 \xA0',
        'Spanish \xA0': '西班牙语 \xA0',
        'Thai \xA0': '泰语 \xA0',
        'Vietnamese \xA0': '越南语 \xA0',
        'Use Posted': '发布时间',
        Posted: '发布时间',
        'Use Favorited': '收藏时间',
        Favorited: '收藏时间',
        'Search:': '搜索:',
        ' Name': ' 名称',
        ' Tags': ' 标签',
        ' Note': ' 备注',
        'Show All Favorites': '显示所有收藏夹',
        Minimal: '最小化',
        'Minimal+': '最小化 + 关注标签',
        Compact: '紧凑 + 标签',
        Extended: '扩展',
        Thumbnail: '缩略图',

        Published: '发布时间',
        Title: '标题',
        Uploader: '上传者',

        'Search Gallery Name': '搜索名称',
        'Search Gallery Tags': '搜索标签',
        'Search Gallery Description': '搜索描述',
        'Search Torrent Filenames': '搜素种子文件名',
        'Only Show Galleries With Torrents': '只显示有种子的图库',
        'Search Low-Power Tags': '搜索低权重标签',
        'Search Downvoted Tags': '搜索投票移除了的标签',
        'Show Expunged Galleries': '显示已删除的库',
        'Minimum Rating:': '最低评分',
        'Between ': '介于 ',
        ' and ': ' 和 ',
        ' pages': ' 页',
        // 'Hide Advanced Options': '隐藏高级选项',
        'Disable default filters for: ': '禁用默认筛选器',
        Language: '语言',
        Tags: '标签',

        '2 stars': '2 星',
        '3 stars': '3 星',
        '4 stars': '4 星',
        '5 stars': '5 星',

        'Status: ': '状态：',
        Seeded: '有种',
        Unseeded: '没种',
        ' \xA0 \xA0 \xA0 \xA0 Show: ': ' |  显示：',
        'All Torrents': '所有种子',
        'Only My Torrents': '我的种子',
        '\nNote that you cannot add torrents directly to this page. To upload torrents to this system, visit the torrent screen for a gallery.\n':
            '注意：你不能直接把种子添加到此页面。请在图库中上传。',
        'Search Torrents': '搜索种子',

        Added: '添加于',
        'Torrent Name': '种子名',
        Gallery: '图库 ID',
        Size: '体积',
        Seeds: '做种',
        Peers: '下载',
        'Seeds:': '做种：',
        'Peers:': '下载：',
        DLers: '下载',
        'Downloads:': '完成：',
        Completes: '完成',
        DLs: '完成',

        Overview: '概况',
        'My Stats': '我的统计',
        'My Settings': '我的设置',
        'My Tags': '我的标签',
        Donations: '捐赠',
        'Hath Exchange': 'Hath 交易',
        'GP Exchange': 'GP 交易',
        'Credit Log': 'Credit 记录',
        'Karma Log': 'Karma 记录',
        'Apply Filter': '应用筛选',
        'Clear Filter': '清理筛选',
        'Estimated Size:   ': '预计大小:   ',
        'Download Cost:   ': '下载费用:   ',
        'Download Original Archive': '下载原始档案',
        'Download Resample Archive': '下载重采样档案',
        'No hits found': '什么也没有',
        'No unfiltered results in this page range. You either requested an invalid page or used too aggressive filters.':
            '在此页面范围内没有未被过滤的结果。你的过滤设置可能过于激进。',
        'Uploader:': '上传者:',
        'New Torrents:': '新种子:',
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

        'Favorites 0': '收藏夹 0',
        'Favorites 1': '收藏夹 1',
        'Favorites 2': '收藏夹 2',
        'Favorites 3': '收藏夹 3',
        'Favorites 4': '收藏夹 4',
        'Favorites 5': '收藏夹 5',
        'Favorites 6': '收藏夹 6',
        'Favorites 7': '收藏夹 7',
        'Favorites 8': '收藏夹 8',
        'Favorites 9': '收藏夹 9',

        'It is the dawn of a new day!': '新的一天开始了！',
        'Reflecting on your journey so far, you find that you are a little wiser.':
            '回想一下你迄今为止的旅程，你发现你更聪明了。',
        'You gain ': '你获得了 ',
        ' EXP, ': ' 经验, ',
        ' Credits!': ' Credits!',
        'Back to Gallery': '返回图库',
        'Report Type': '举报类型',
        '[Select a complaint type...]': '[请选择一个举报类型...]',
        'DMCA/Copyright Infringement': 'DMCA / 侵犯版权',
        'Child Pornography': '儿童色情',
        'Other Illicit Content': '其他非法内容',
        'Watched Tag Galleries': '标签订阅',
        'Currently Popular Recent Galleries': '目前最受欢迎的图库',
        'Search Favorites': '搜索收藏夹',
        Clear: '清除',
        'Delete Favorites': '删除收藏',
        'Change Category': '移动到',
        Confirm: '确定',

        ' Minimal': ' 最小化',
        ' Minimal+': ' 最小化 + 关注标签',
        ' Compact': ' 紧凑 + 标签',
        ' Extended': ' 扩展',
        ' Thumbnail': ' 缩略图',

        Rename: '重命名',
        'Create New': '新建',
        Description: '描述',

        'You have encountered a monster!': '你遇到了怪物！',
        'Click here to fight in the HentaiVerse.': '点击这里进入 HentaiVerse 战斗',

        'If you want to combine a file search with a category/keyword search, upload the file first.':
            '如果要将文件和类别、关键词结合搜索，请先上传文件。',
        'Select a file to upload, then hit File Search. All public galleries containing this exact file will be displayed.':
            '选择要搜索的图片文件,点击“文件搜索”。将显示包含此文件的所有公开图库。',
        'For color images, the system can also perform a similarity lookup to find resampled images.':
            '对于彩色图片，系统还可以执行相似性查询以找到重采样过的图片。',
        'Use Similarity Scan': '使用相似性查询',
        'Only Search Covers': '仅搜索封面',
        'Show Expunged': '显示被删除的图库',
        'File Search': '文件搜索',

        'There are newer versions of this gallery available:': '此库有更新的版本可用：',
        'Next Page >': '下一页 >',

        'Show all galleries with this file': '显示所有包含此图片的图库',
        'Generate a static forum image link': '生成用于论坛的图片链接',
        'Click here if the image fails loading': '重新加载图片',
    },
    {
        [regex]: /.*/,
        [host]: 'upload.e-hentai.org',

        'Published Galleries': '发布图库',
        'Empty Galleries': '空图库',
        'Unpublished Galleries': '未发布的图库',
        'Gallery Name ': '图库名称',
        'Date Added ': '添加时间 ',
        'Public Category': '发布类别',
        'Available Actions': '操作',
        Files: '文件数',
        Unsorted: '未分类',

        'Go To Gallery': '查看图库',
        Stats: '统计',
        Manage: '管理',
        Publish: '发布',
        'Collapse Open Folders': '折叠文件夹',

        'Set public category for selected galleries: ': '设置选中的发布分类: ',
        'Move selected galleries to folder: ': '移动到文件夹: ',

        'Create New Gallery': '创建新图库',
        'Manage Folders': '管理文件夹',
        'Gallery List': '图库列表',
        'Create Gallery': '创建图库',
        'My Galleries': '我的图库',

        'Main Gallery Title': '主标题',
        'The main english or romanized title for this gallery.': '这个图库的主标题, 英文或者罗马音',
        'Japanese Script Title': '日文标题',
        'The original title in Japanese script, if applicable.': '原始的日文标题（如果有）',

        'Gallery Folder': '图库文件夹',
        'The folder this gallery will be displayed under in the gallery list. This is only used to help you organize your gallery uploads.':
            '图库文件夹仅在我的图库列表中显示，仅用于帮助整理上传的图库.',

        'Any comments or additional relevant information for this gallery. This will always show up as the topmost comment, and cannot be voted down.':
            '关于此图库的任何评论或其他相关信息。将始终显示在评论的最顶部，并且不能投票。',

        'or new folder: ': '或新建文件夹：',

        'Date Added:': '添加时间：',
        'Date Posted:': '发布时间：',
        'Not created yet': '尚未创建',
        'Not published yet': '尚未发布',
        'Uploaded Files:': '上传文件数：',
        'Total Filesize:': '总体积：',
        'Parent Gallery:': '父级图库：',
        'Child Gallery:': '子图库：',
        'Expunged:': '删除：',
        'No (Unpublished)': 'No (尚未发布)',
        'Show Public Gallery': '查看图库',
        'Show Gallery Stats': '查看统计',
        'Delete Gallery': '删除图库',

        'Make this gallery publicly available as:': '将图库发布到：',

        'I have read and agree with the ': '我已阅读并同意',
        'Publish Gallery': '发布图库',
        'Upload Files': '上传文件',
        'Start Upload': '开始上传',
        'Select one or more image or archive files and click Start Upload to add files to this gallery.':
            '选择一个或多个图像或存档文件，然后点击“开始上传”，以添加文件到此图库。',
        '\n\t\tNo files have been added yet\n\t\t': '尚未添加任何文件',
        'Folder Name': '文件夹名称',
        'Display Order': '显示顺序',
        '(No folders have been added yet.)': '（尚未添加文件夹）',
        'Create Folder': '创建文件夹',
        'Save and Auto-Reorder': '保存并自动排序',
        'Save Changes': '保存更改',
        Delete: '删除',
        'New folder name': '新文件夹名称',
    },
    {
        [regex]: /^\/exchange\.php\?/,
        'The Hath Exchange': 'Hath 交易',
        'The GP Exchange': 'GP 交易',
        'Last 8 Hours (per kGP)': '最近 8 小时（每 kGP）',
        'Last 24 Hours (per kGP)': '最近 24 小时（每 kGP）',
        'Last 8 Hours (per Hath)': '最近 8 小时（每 Hath）',
        'Last 24 Hours (per Hath)': '最近 24 小时（每 Hath）',
        'Buy Hath': '购买 Hath',
        'Sell Hath': '卖出 Hath',
        'Buy GP': '购买 GP',
        'Sell GP': '卖出 GP',
        Spread: '挂单交易',
        'Recent Transactions': '最近成交',
        'Bid (Buyers)': '买单',
        'Ask (Sellers)': '卖单',
        Time: '时间',
        Seller: '卖家',
        Buyer: '买家',
        Volume: '成交量',
        'Unit Cost': '单价',
        High: '最高',
        Low: '最低',
        Avg: '平均',
        Vol: '成交',
    },
    {
        [regex]: /^\/hathperks\.php/,

        'By running the Hentai@Home client, you will over time gain special bonus points known as ':
            '通过运行 Hentai@Home 客户端，您将随着时间的推移获得特殊的奖励积分，即 ',
        '. These are rewards for people who help keeping this site free, fast and responsive by donating bandwidth and computer resources, and can be exchanged here for ':
            '。这是给予捐献带宽和计算机资源，帮助网站保持自由与快速的奖励，可以在这里交换 ',
        ', which grant beneficial effects on E-Hentai Galleries and in the HentaiVerse.':
            '，这对 E-Hentai 和 HentaiVerse 产生了有益的影响。',

        'If running H@H is not an option, you can also you can exchange Credits for Hath at the ':
            '如果你不能运行 H@H，你可以在这里用 Credits 交换 Hath：',

        'While the Hath Perks for the HentaiVerse cannot be obtained in any other way, most of the ones that are specific for Galleries will also get unlocked by making a donation on the ':
            '尽管用于 HentaiVerse 游戏的 Hath Perks 不能用其他方法获取，但关于图库的大部分  Hath Perks 也可以通过',
        'Donation Screen': '捐赠',
        '. These will be refunded if you buy them for Hath, and later make a qualifying donation. There is also an option to "adopt" H@H clients that will grant you Hath over time as if you were running it yourself.':
            '获取。如果您已经用 Hath 购买，在符合条件的捐赠后将获得退款。还有一个“领养” H@H 客户端的选项，它会随着时间的推移而授予您 Hath，就好像您自己运行它一样。',

        'You currently have ': '你现在拥有 ',
        ' Hath.': ' Hath。',

        Description: '描述',
        Obtained: '已获得',
        Purchase: '购买',

        'Free with a $20 donation.': '捐赠 $20 免费解锁',
        'Free with a $50 donation.': '捐赠 $50 免费解锁',
        'Free with a $100 donation.': '捐赠 $100 免费解锁',

        'Ads-Be-Gone': '广告不见了',
        'Unlocks the display ads toggle for E-Hentai Galleries on the User Settings page. This will allow you to browse E-Hentai Galleries sans ads, and still retain your conscience.':
            '移除 E-Hentai 的广告，不需要昧着良心使用广告屏蔽插件。',

        'Source Nexus': '原始之力',
        'Unlocks the Original Images functionality on E-Hentai Galleries. This allows you to browse the original, non-resampled version of a gallery directly.':
            '解锁 E-Hentai 图库的原始图像功能。这允许您直接浏览图库的原始非重采样版本。',

        'Multi-Page Viewer': '多页查看器',
        'Unlocks the Multi-Page Viewer function on E-Hentai Galleries. This allows you to view all images from a gallery on one page. (':
            '解锁 E-Hentai 图库的多页查看器功能。这允许您在一个页面上查看库中的所有图像。（',
        demo: '演示',
        ')': '）',

        'More Thumbs': '更多的缩略图',
        'Increases the maximum number of thumbnail rows to 10.': '将最大缩略图行数增加到 10。',
        'Thumbs Up': '超多的缩略图',
        'Further increases the maximum number of thumbnail rows to 20.': '将最大缩略图行数增加到 20。',
        'All Thumbs': '全部的缩略图',
        'Further increases the maximum number of thumbnail rows to 40.': '将最大缩略图行数增加到 40。',

        'More Pages': '更多页面',
        'Increases all limits on how many pages you can view by a factor of two.': '将图片限制变为原来的 2 倍。',
        'Lots of Pages': '超多页面',
        'Increases all limits on how many pages you can view by a factor of five.': '将图片限制变为原来的 5 倍。',
        'Too Many Pages': '全部页面',
        'Increases all limits on how many pages you can view by a factor of ten.': '将图片限制变为原来的 10 倍。',

        'More Favorite Notes I': '更多收藏便签 I',
        'Increases the number of favorite note slots to 10000.': '将收藏便签限制增加到 10000。',
        'More Favorite Notes II': '更多收藏便签 II',
        'Increases the number of favorite note slots to 25000.': '将收藏便签限制增加到 25000。',

        'Paging Enlargement I': '页面扩大 I',
        'Increases the number of results you can show per page on the index, search and torrent pages to 50.':
            '将主页、搜索和种子页面的结果数量变为 50。',
        'Paging Enlargement II': '页面扩大 II',
        'Increases the number of results you can show per page on the index, search and torrent pages to 100.':
            '将主页、搜索和种子页面的结果数量变为 100。',
        'Paging Enlargement III': '页面扩大 III',
        'Increases the number of results you can show per page on the index, search and torrent pages to 200.':
            '将主页、搜索和种子页面的结果数量变为 200。',
    },
    {
        [regex]: /^\/gallerypopups\.php\?.*act=expunge/,
        'Specify an objective reason why you wish to expunge this gallery.': '请说明要删除此库的客观原因。',
        'None / Withdraw Petition.': '无 / 撤回删除申请。',
        'This gallery is a duplicate of equal or lower quality of an earlier posted, clearly marked gallery.':
            '此图库是早期发布的标记清楚的图库的质量相同或较低的副本。',
        'A newer higher-quality and clearly marked copy of this gallery has been uploaded.':
            '这个图库的更高质量和标记清楚的副本已上传。',
        'This gallery contains either illicit content like child porn or anything else forbidden by the ':
            '这个图库包含非法内容，如儿童色情或其他任何',
        ', or otherwise falls under the ': '禁止的内容，或者符合',
        'Expunge Guidelines': '删除指南',
        ' (specify below).': '（在下方说明）。',
        'Show Expunge Log': '显示删除日志',
        'Enter an explanation for this expunge here. It should include the location of the duplicate or the specific rule being violated.':
            '请输入清除原因和备注。它应包括副本的位置或违反的特定规则。',
        'No expunge petitions have been filed for this gallery': '尚未对此图库提出删除申诉',
        Back: '返回',
    },
    {
        [regex]: /^\/gallerypopups\.php\?.*act=rename/,
        'Roman Script': '罗马音',
        'Japanese Script': '日文',
        'Not Set': '未设置',
        'Blank Vote': '空投票',
        ' New': ' 新',
        Submit: '提交',
    },
    {
        [regex]: /^\/gallerypopups\.php\?.*act=addfav/,
        'Please choose a color to file this favorite gallery under. You can also add a note to it if you wish.':
            '请选择一个颜色标记你的收藏，你也可以加一些备注。',
        'Favorite Note (Max 200 Characters)': '收藏备注（最多 200 字符）',
        'Add to Favorites': '添加到收藏',
        'Remove from Favorites': '从收藏中移除',
        'Apply Changes': '应用更改',
    },
    {
        [regex]: /^\/stats\.php/,
        'Visitor Statistics': '访客统计',
        'This gallery has had a total of ': '此图库共计有 ',
        ' visit(s).': ' 名访客。',
        'Galleries All-Time': '所有时间',
        'Galleries Past Year': '年排行',
        'Galleries Past Month': '月排行',
        'Galleries Yesterday': '日排行',
        'Not in top 1000': '1000 名以外',
        Ranking: '名次',
        Score: '分数',
        Visits: '访问',
        Hits: '点击',
        'Yearly Stats': '年度统计',
        'Last 12 Months': '最近 12 个月',
        'Daily Stats': '每日统计',
        'The number of total visits on your galleries.': '图库总访问次数',
        'The number of total image accesses on your galleries.': '图库中图片访问次数',
        'Back To Gallery': '返回图库',
        Jan: '1 月',
        Feb: '2 月',
        Mar: '3 月',
        Apr: '4 月',
        May: '5 月',
        Jun: '6 月',
        Jul: '7 月',
        Aug: '8 月',
        Sep: '9 月',
        Oct: '10 月',
        Nov: '11 月',
        Dec: '12 月',
        '1st': '1 日',
        '2nd': '2 日',
        '3rd': '3 日',
        '4th': '4 日',
        '5th': '5 日',
        '6th': '6 日',
        '7th': '7 日',
        '8th': '8 日',
        '9th': '9 日',
        '10th': '10 日',
        '11th': '11 日',
        '12th': '12 日',
        '13th': '13 日',
        '14th': '14 日',
        '15th': '15 日',
        '16th': '16 日',
        '17th': '17 日',
        '18th': '18 日',
        '19th': '19 日',
        '20th': '20 日',
        '21st': '21 日',
        '22nd': '22 日',
        '23rd': '23 日',
        '24th': '24 日',
        '25th': '25 日',
        '26th': '26 日',
        '27th': '27 日',
        '28th': '28 日',
        '29th': '29 日',
        '30th': '30 日',
        '31st': '31 日',
    },
    {
        [regex]: /^\/toplist\.php/,

        'EHG Toplists': 'EHG 排行榜',

        'Gallery Toplists': '图库排行',
        'Galleries All-Time': '总排行',
        'Galleries Past Year': '年排行',
        'Galleries Past Month': '月排行',
        'Galleries Yesterday': '日排行',

        'Uploader Toplists': '上传排行',
        'Uploader All-Time': '总排行',
        'Uploader Past Year': '年排行',
        'Uploader Past Month': '月排行',
        'Uploader Yesterday': '日排行',

        'Tagging Toplists': '标签排行',
        'Tagging All-Time': '总排行',
        'Tagging Past Year': '年排行',
        'Tagging Past Month': '月排行',
        'Tagging Yesterday': '日排行',

        'Hentai@Home Toplists': 'Hentai@Home 排行',
        'Hentai@Home All-Time': '总排行',
        'Hentai@Home Past Year': '年排行',
        'Hentai@Home Past Month': '月排行',
        'Hentai@Home Yesterday': '日排行',

        'EHTracker Toplists': '做种排行',
        'EHTracker All-Time': '总排行',
        'EHTracker Past Year': '年排行',
        'EHTracker Past Month': '月排行',
        'EHTracker Yesterday': '日排行',

        'Cleanup Toplists': '清理排行',
        'Cleanup All-Time': '总排行',
        'Cleanup Past Year': '年排行',
        'Cleanup Past Month': '月排行',
        'Cleanup Yesterday': '日排行',

        'Rating & Reviewing Toplists': '打分 & 评论排行',
        'Rating & Reviewing All-Time': '总排行',
        'Rating & Reviewing Past Year': '年排行',
        'Rating & Reviewing Past Month': '月排行',
        'Rating & Reviewing Yesterday': '日排行',
    },
    {
        [regex]: /^\/bounce_login\.php/,
        'This page requires you to log on.': '此页面需要登录才能访问',
        'User:': '用户：',
        'Pass:': '密码：',
        'Login!': '登录',
        '\xA0or\xA0': '或',
        Register: '注册',
    },
    {
        [regex]: /^\/logs\.php/,
        Date: '日期',
        Amount: '金额',
        Information: '信息',
        'Total Karma: ': '总 Karma：',
        From: '来自',
        Topic: '主题',
        Comment: '附言',
    },
    {
        [regex]: /^\/home\.php/,

        'Image Limits': '图片限制',
        'You are currently at ': '当前：',
        ' towards a limit of ': '，限制为 ',
        '. This regenerates at a rate of ': '，每分钟回复 ',
        ' per minute.': ' 点',
        'Reset Cost: ': '重置限制花费：',
        'Reset Limit': '重置限制',

        EHTracker: 'EH 种子服务器',
        ' uploaded': '上传量',
        downloaded: '下载量',
        'up/down ratio': '分享率',
        'torrent completes': '完成种子',
        'gallery completes': '完成图库',
        seedmins: '做种时长',
        'Show My Torrents': '显示我的种子',
        'If you misplace any of your personalized torrents, hit the button below to reset your key.':
            '如果你错误的分发了个性化种子，请点击下面的按钮重置你的 KEY。',
        'This will immediately invalidate all of your personalized torrents in play.':
            '这将立即注销你所有的个性化种子。',
        'Your current key is: ': '你当前的 KEY 是：',
        'Reset Torrent Key': '重置种子 KEY',

        'Total GP Gained': '获得的总 GP',
        'GP from gallery visits': 'GP 来自图库浏览',
        'GP from torrent completions': 'GP 来自种子完成',
        'GP from archive downloads': 'GP 来自存档下载',
        'GP from Hentai@Home': 'GP 来自 Hentai@Home',

        Toplists: '排行榜',
        '\n\t\t\tYou are currently not featured on any toplists...\n\t\t': '您当前没有上榜……',
        'You are currently: ': '你现在是：',
        ' toplist': '榜）',
        'on the ': '（在',

        'Galleries All-Time': '图库总排行',
        'Galleries Past Year': '图库年排行',
        'Galleries Past Month': '图库月排行',
        'Galleries Yesterday': '图库日排行',

        'Uploader All-Time': '上传总排行',
        'Uploader Past Year': '上传年排行',
        'Uploader Past Month': '上传月排行',
        'Uploader Yesterday': '上传日排行',

        'Tagging All-Time': '标签总排行',
        'Tagging Past Year': '标签年排行',
        'Tagging Past Month': '标签月排行',
        'Tagging Yesterday': '标签日排行',

        'Hentai@Home All-Time': 'Hentai@Home 总排行',
        'Hentai@Home Past Year': 'Hentai@Home 年排行',
        'Hentai@Home Past Month': 'Hentai@Home 月排行',
        'Hentai@Home Yesterday': 'Hentai@Home 日排行',

        'EHTracker All-Time': '做种总排行',
        'EHTracker Past Year': '做种年排行',
        'EHTracker Past Month': '做种月排行',
        'EHTracker Yesterday': '做种日排行',

        'Cleanup All-Time': '清理总排行',
        'Cleanup Past Year': '清理年排行',
        'Cleanup Past Month': '清理月排行',
        'Cleanup Yesterday': '清理日排行',

        'Rating & Reviewing All-Time': '打分 & 评论总排行',
        'Rating & Reviewing Past Year': '打分 & 评论年排行',
        'Rating & Reviewing Past Month': '打分 & 评论月排行',
        'Rating & Reviewing Yesterday': '打分 & 评论日排行',

        'Moderation Power': '愿力',
        'Current Moderation Power': '当前愿力',
        Base: '基础',
        Awards: '奖励',
        Tagging: '打标签',
        Level: '等级',
        Donations: '捐赠',
        'Forum Activity': '论坛活跃',
        'Uploads/H@H': '上传 / H@H',
        'Account Age': '账户资历',
        '(capped to 25)': '（不超过 25）',
    },
    {
        [regex]: /^\/news\.php/,

        'Latest Site Status Updates': '最新网站状态',
        'Site Update Log': '网站更新日志',
        'You can follow ': '你可以',
        'follow us on Twitter': '在推特上关注我们',
        ' to receive these site status updates if the site is ever unavailable.':
            '以便于在网站不可用时获取网站状态信息。 ',
    },
    {
        [regex]: /^\/uconfig\.php/,

        'Selected Profile:': '当前配置：',
        Rename: '重命名',
        'Create New': '新建',
        'Delete Profile': '删除配置',
        'Set as Default': '设为默认',
        Apply: '应用',

        ' Auto': '自动',
        ' No': '否',
        ' Yes': '是',
        ' Nope': ' 否',
        ' Yup': ' 是',
        ' Always': '总是',

        'Image Load Settings': '图片加载设置',
        'Do you wish to load images through the Hentai@Home Network, if available?':
            '如果可用，是否希望通过 Hentai@Home 网络加载图像？',
        ' Any client (Recommended)': ' 所有客户端（推荐）',
        ' Default port clients only (Can be slower. Enable if behind firewall/proxy that blocks outgoing non-standard ports.)':
            ' 仅使用默认端口的客户端（可能稍慢。当防火墙或代理阻止非标准接口的流量时启用此项。）',
        ' No (Donator only. You will not be able to browse as many pages, enable only if having severe problems.)':
            ' 否（仅限赞助者。配额消耗会加快，只有出现问题时才启用。）',

        'Image Size Settings': '图片大小设置',
        'Normally, images are resampled to 1280 pixels of horizontal resolution for online viewing. You can alternatively select one of the following resample resolutions. To avoid murdering the staging servers, resolutions above 1280x are temporarily restricted to donators, people with any hath perk, and people with a UID below 3,000,000.':
            '通常情况，图像将重采样到 1280 像素宽度以用于在线浏览，您也可以选择以下重新采样分辨率。' +
            '但是为了避免负载过高，高于 1280 像素将只供给于赞助者、特殊贡献者，以及 UID 小于 3,000,000 的用户。',
        'While the site will automatically scale down images to fit your screen width, you can also manually restrict the maximum display size of an image. Like the automatic scaling, this does not resample the image, as the resizing is done browser-side. (0 = no limit)':
            '虽然图片会自动根据窗口缩小，你也可以手动设置最大大小，图片并没有重新采样（0 为不限制）',
        'Horizontal:': '宽/横向',
        'Vertical:': '高/纵向',
        ' pixels': ' 像素',

        'Gallery Name Display': '图库的名字显示',
        'Many galleries have both an English/Romanized title and a title in Japanese script. Which gallery name would you like as default?':
            '很多图库都同时拥有英文或者日文标题，你想默认显示哪一个？',
        ' Default Title': '默认标题（英文）',
        ' Japanese Title (if available)': '日文标题（如果有）',

        'Archiver Settings': '归档设置',
        'The default behavior for the Archiver is to confirm the cost and selection for original or resampled archive, then present a link that can be clicked or copied elsewhere. You can change this behavior here.':
            '默认归档下载方式为手动选择（原画质或压缩画质），然后手动复制或点击下载链接。你可以修改归档下载方式。',
        ' Manual Select, Manual Start (Default)': ' 手动选择，手动下载（默认）',
        ' Manual Select, Auto Start': ' 手动选择，自动下载',
        ' Auto Select Original, Manual Start': ' 自动选择原始画质，手动下载',
        ' Auto Select Original, Auto Start': ' 自动选择原始画质，自动下载',
        ' Auto Select Resample, Manual Start': ' 自动选择压缩画质，手动下载',
        ' Auto Select Resample, Auto Start': ' 自动选择压缩画质，自动下载',

        'Front Page Settings': '首页设置',
        'Which display mode would you like to use on the front and search pages?': '你想在搜索页面显示哪种样式？',
        'What categories would you like to show by default on the front page and in searches?':
            '你希望在首页上看到哪些类别？',

        Favorites: '收藏',
        'Here you can choose and rename your favorite categories.': '在这里你可以重命名你的收藏夹。',
        'You can also select your default sort order for galleries on your favorites page. Note that favorites added prior to the March 2016 revamp did not store a timestamp, and will use the gallery posted time regardless of this setting.':
            '你也可以选择收藏夹中默认排序。请注意，2016 年 3 月改版之前加入收藏夹的图库并未保存收藏时间，会以图库发布时间代替。',
        ' By last gallery update time': '以最新的图库更新时间排序',
        ' By favorited time': '以收藏时间排序',

        Ratings: '评分',
        'By default, galleries that you have rated will appear with red stars for ratings of 2 stars and below, green for ratings between 2.5 and 4 stars, and blue for ratings of 4.5 or 5 stars. You can customize this by entering your desired color combination below.':
            '默认设置下，你评为 2 星及以下的图库显示为红星，2.5 ~ 4 星显示为绿星，4.5 ~ 5 星显示为蓝星。你可以将其设定为其他颜色组合。',
        'Each letter represents one star. The default RRGGB means R(ed) for the first and second star, G(reen) for the third and fourth, and B(lue) for the fifth. You can also use (Y)ellow for the normal stars. Any five-letter R/G/B/Y combo works.':
            '每一个字幕代表一颗星, 默认的 RRGGB 表示第一第二颗星显示为红色 R(ed)，第三第四颗星显示是绿色 G(reen)，第五颗星显示为蓝色 B(lue)。你也可以使用黄色 (Y)ellow，R/G/B/Y 任何五个组合都是有效的。',

        'Tag Namespaces': '标签组',
        'If you want to exclude certain namespaces from a default tag search, you can check those below. Note that this does not prevent galleries with tags in these namespaces from appearing, it just makes it so that when searching tags, it will forego those namespaces.':
            '如果要从默认标签搜索中排除某些标签组，可以检查以下内容。请注意，这不会阻止在这些标签组中的标签的展示区出现，它只是在搜索标签时排除这些标签组。',
        ' reclass': ' 重新分类',
        ' language': ' 语言',
        ' parody': ' 原作',
        ' character': ' 角色',
        ' group': ' 社团',
        ' artist': ' 作者',
        ' male': ' 男性',
        ' female': ' 女性',

        'Tag Filtering Threshold': '标签筛选阈值',
        'You can soft filter tags by adding them to ': '你可以通过将标签加入「',
        ' with a negative weight. If a gallery has tags that add up to weight below this value, it is filtered from view. This threshold can be set between 0 and -9999.':
            '」并设置一个负权重来软过滤它们。如果一个作品所有的标签权重之和低于设定值，此作品将从视图中被过滤。这个值可以设定为 0 ~ -9999。',

        'Tag Watching Threshold': '标签订阅阈值',
        'Recently uploaded galleries will be included on the watched screen if it has at least one watched tag with positive weight, and the sum of weights on its watched tags add up to this value or higher. This threshold can be set between 0 and 9999.':
            '你可以通过将标签加入「我的标签」并设置一个正权重来关注它们。如果一个最近上传的作品所有标签的权重之和高于设定值，则它将会被包含在「关注」里。这个值可以设定为 0 ~ 9999。',

        'Excluded Languages': '排除语言',
        'If you wish to hide galleries in certain languages from the gallery list and searches, select them from the list below.':
            '如果您希望以图库列表中的某些语言隐藏图库并进行搜索，请从下面的列表中选择它们。',
        'Note that matching galleries will never appear regardless of your search query.':
            '请注意，无论搜索查询如何，匹配的图库都不会出现。',
        Original: '原始语言',
        Translated: '翻译版',
        Rewrite: '改编版',
        All: '所有',
        Japanese: '日文',
        English: '英文',
        Chinese: '中文',
        Dutch: '荷兰语',
        French: '法语',
        German: '德语',
        Hungarian: '匈牙利',
        Italian: '意呆利',
        Korean: '韩语',
        Polish: '波兰语',
        Portuguese: '葡萄牙语',
        Russian: '俄语',
        Spanish: '西班牙语',
        Thai: '泰语',
        Vietnamese: '越南语',
        'N/A': '无效',
        Other: '其他',

        'Excluded Uploaders': '屏蔽的上传者',
        'If you wish to hide galleries from certain uploaders from the gallery list and searches, add them below. Put one username per line.':
            '如果你希望在图库中和搜索中隐藏某个上传者的话，请把他们的用户名填写在下方，每行一个。',
        'Note that galleries from these uploaders will never appear regardless of your search query.':
            '注意：无论你如何搜索，这些上传者都不会出现。',
        'You are currently using ': '已使用 ',
        ' of ': '/',
        ' exclusion slots.\n': '。',

        'Search Result Count': '搜索结果数',
        'How many results would you like per page for the index/search page and torrent search pages? (Hath Perk: Paging Enlargement Required)':
            '搜索页面每页显示多少条数据？（Hath Perk：需要「页面扩大」）',
        ' 25 results': '25 个',
        ' 50 results': '50 个',
        ' 100 results': '100 个',
        ' 200 results': '200 个',

        'Thumbnail Settings': '缩略图设置',
        'How would you like the mouse-over thumbnails on the front page to load when using List Mode?':
            '你希望鼠标悬停缩略图何时加载？',
        ' On mouse-over (pages load faster, but there may be a slight delay before a thumb appears)':
            '鼠标悬停时 (页面加载快，缩略图加载有延迟)',
        ' On page load (pages take longer to load, but there is no delay for loading a thumb after the page has loaded)':
            '页面加载时 (页面加载时间更长，但是显示的时候无需等待)',
        'You can set a default thumbnail configuration for all galleries you visit.': '图库页面缩略图设置。',
        'Size: ': '大小：',
        'Rows:': '行数：',

        'Thumbnail Scaling': '缩略图缩放',
        'Thumbnails on the thumbnail and extended gallery list views can be scaled to a custom value between 75% and 150%.':
            '缩略图和扩展模式下的图库列表缩略图可以缩放为 75% 到 150% 之间的自定义值。',

        'Viewport Override': '移动端虚拟宽度',
        'Allows you to override the virtual width of the site for mobile devices. This is normally determined automatically by your device based on its DPI. Sensible values at 100% thumbnail scale are between 640 and 1400.':
            '允许你覆盖移动设备的虚拟宽度，默认是根据 DPI 自动计算的，100% 缩略图比例下的合理值在 640 到 1400 之间。',

        'Gallery Comments': '图库评论',
        'Sort order for gallery comments:': '评论排序方式：',
        ' Oldest comments first': '最早的评论',
        ' Recent comments first': '最新的评论',
        ' By highest score': '分数最高',
        'Show gallery comment votes:': '显示评论投票数：',
        ' On score hover or click': '悬停或点击时',

        'Gallery Tags': '图库标签',
        'Sort order for gallery tags:': '图库标签排序方式：',
        ' Alphabetical': '按字母排序',
        ' By tag power': '按标签权重',

        'Gallery Page Numbering': '图库页面页码',
        'Show gallery page numbers:\n\t': '显示图库页码：\n\t',

        'Hentai@Home Local Network Host': 'Hentai@Home 本地网络服务器',
        'This setting can be used if you have a H@H client running on your local network with the same public IP you browse the site with. Some routers are buggy and cannot route requests back to its own IP; this allows you to work around this problem.':
            '如果你本地安装了 H@H 客户端，本地 IP 与浏览网站的公共 IP 相同，一些路由器不支持回流导致无法访问到自己，你可以设置这里来解决。',
        'If you are running the client on the same PC you browse from, use the loopback address (127.0.0.1:port). If the client is running on another computer on your network, use its local network IP. Some browser configurations prevent external web sites from accessing URLs with local network IPs, the site must then be whitelisted for this to work.':
            '如果在同一台电脑上访问网站和运行客户端，请使用本地回环地址(127.0.0.1:端口号)。如果客户端在网络上的其他计算机运行，请使用那台机器的内网 IP。某些浏览器的配置可能阻止外部网站访问本地网络，你必须将网站列入白名单才能工作。',

        'Original Images': '原始图像',
        'Use original images instead of the resampled versions where applicable?':
            '当可用的时候，使用原始图像代替压缩过的版本？',
        ' Yup, I can take it': '好的，我可以接受更多的配额消耗',

        'Multi-Page Viewer': '多页查看器',
        'Always use the Multi-Page Viewer? There will still be a link to manually start it if this is left disabled.':
            '总是使用多页查看器？禁用此选项时，仍可以手动启动多页查看器。',
        'Multi-Page Viewer Display Style:': '显示样式：',
        ' Align left; Only scale if image is larger than browser width': '左对齐；仅当图像大于浏览器宽度时缩放',
        ' Align center; Only scale if image is larger than browser width': '居中对齐；仅当图像大于浏览器宽度时缩放',
        ' Align center; Always scale images to fit browser width': '居中对齐；始终缩放图像以适应浏览器宽度',
        'Multi-Page Viewer Thumbnail Pane:': '显示缩略图侧栏：',
        ' Show': ' 显示',
        ' Hide': ' 隐藏',
    },
];

export function getUiData(): { readonly [key: string]: string } {
    if (!location || !(location.host.endsWith('e-hentai.org') || location.host.endsWith('exhentai.org'))) {
        return {};
    }
    const path = location.pathname + location.search;
    logger.log('获取 UI 翻译：', path);
    const results: { [key: string]: string } = {};
    uiData
        .filter((d) => d[regex].test(path) && (!d[host] || location.host === d[host]))
        .forEach((d) => {
            for (const key in d) {
                results[key] = d[key];
            }
        });
    return results;
}
