import { merge } from '../helper';

merge(
    /^\/g\//,
    undefined,
    {
        'No tags have been added for this gallery yet.': '当前图库还没有标签',

        'Report Gallery': '举报图库',
        'Archive Download': '存档下载',
        'Torrent Download': '种子下载',
        'Petition to Expunge': '申请删除',
        'Expunge Petition Sent': '删除请求已发送',
        'Show Expunge Log': '显示删除日志',
        'Petition to Rename': '申请重命名',
        'Rename Petition Sent': '已发送的重命名申请',
        'Show Gallery Stats': '查看统计',
        'Multi-Page Viewer': '多页查看器',

        ' Read Later': ' 稍后再读',
        ' Added to Read Later': ' 已添加到稍后再读',

        'Posted:': '发布于:',
        'Parent:': '父级:',
        None: '无',
        'Visible:': '显示:',
        Yes: '是',
        'No (Expunged)': '否（已删除）',
        'No (Replaced)': '否（已被替换）',
        'Language:': '语言:',
        'File Size:': '文件大小:',
        'Length:': '页数:',
        'Favorited:': '收藏:',
        'Rating:': '评分:',
        'Not Yet Rated': '还没有评分',
        'Average:': '平均:',
        ' Add to Favorites': ' 添加到收藏夹',

        'There are newer versions of this gallery available:': '此图库有更新的版本可用：',

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
        'Withdraw Vote': '撤销投票',

        'Vote Up': '顶',
        'Vote Down': '踩',

        'Show Tagged Galleries': '含有该标签的图库',
        'Show Tag Definition': '显示标签解释',
        'Add New Tag': '添加新标签',
        'Enter new tags, separated with comma': '输入新标签, 用逗号分隔',

        'Last edited on ': '最后编辑于 ',
        'Post New Comment': '发送新评论',
        'click to show all': '显示全部',

        'A Quick Note About Tagging': '关于标签系统的简单说明',
        'While tagging is relatively straight-forward, there are a number of established guidelines that determine when adding a particular tag is proper and when it is not. Before you put any significant amount of effort into it, we therefore ask that you skim through the ':
            '尽管标签相对简单明了，但是有许多已建立的准则可以确定何时添加特定标签是正确的。因此，在您投入其中之前，我们要求您阅读',
        'Basic Tagging Guidelines': '基本标签指南',
        ' and ': '和',
        'Fetish Listing': '恋物标签列表',
        '. This will likely save both you and the tagging moderators from doing unnecessary work. In particular, you should note the following:':
            '。这可以使您和标签管理员免于进行不必要的工作。特别要注意以下几点：',
        '- These are galleries, not individual images. ': '● 这些是图库，而不是单张图片。',
        'Do not tag stuff that is only featured in a few images.': '不要标记仅在少量图像中显示的内容。',
        '- If a tag is ambiguous or frequently misused, you may have to specify a ':
            '● 如果标签含糊不清或经常被滥用，则可能必须指定',
        namespace: '命名空间',
        '; ': '；',
        'see the Wiki': '参见 Wiki',
        '.': '。',
        '- The ': '● 您对标签的影响',
        power: '权重',
        ' with which you can affect tagging is determined by a number of factors, such as your account age and whether or not you are active on the ':
            '取决于多种因素，例如您的帐户资历以及您是否活跃在',
        forums: '论坛',
        '- The forums is also where ': '● 论坛也是',
        'everything about tagging is discussed': '讨论标签相关内容',
        '. If you have any comments, suggestions or questions about tagging, this is where you should take it.':
            '的地方。如果您对标签有任何意见、建议或问题，可在此处讨论。',
        'Alright Already': '好的',

        'Back to Gallery': '返回图库',
        'Report Type': '举报类型',
        '[Select a complaint type...]': '[请选择一个举报类型...]',
        'DMCA/Copyright Infringement': 'DMCA / 侵犯版权',
        'Child Pornography': '儿童色情',
        'Other Illicit Content': '其他非法内容',
        'Watched Tag Galleries': '标签订阅',
        'Content Warning': '内容警告',
        'This gallery has been flagged as ': '这幅画已被标记为',
        'Offensive For Everyone': '"对所有人具有攻击性"',
        '. Due to its content, it should not be viewed by anyone.': '。由于其内容，任何人都不应该观看。',
        '(And if you choose to ignore this warning, you lose all rights to complain about it.)':
            '(如果你选择无视这一警告，你就失去了所有投诉的权利。)',
        'View Gallery': '浏览图库',
        'Get Me Outta Here': '带我离开这里',
        'Never Warn Me Again': '不再提醒',
        'This gallery has been removed or is unavailable.': '该图库已被删除或无法使用。',
        'You will be redirected to the front page momentarily.': '即将跳转到首页。',
        '(Click here to continue)': '（点击这里继续）',
        'Please wait...': '请稍候...',
        'Gallery not found. If you just added this gallery, you may have to wait a short while before it becomes available.':
            '没有找到图库。如果你刚刚添加了这个图库，你可能需要等待一小段时间才会变得可用。',
        'Sorry about that.': '很抱歉。',
    },
    [
        [/^(\d+) times?$/, '$1 次'],
        [/Average: ([\d.]+)/, '平均值：$1'],
        [/Rate as ([\d.]+) stars?/, '$1 星'],
        [/Torrent Download \(\s*(\d+)\s*\)/, '种子下载（$1）'],
        [/^Posted on (.*?) by:\s*/, `评论时间：$1 \xA0作者：`],
        [/^Posted on (.*?)\s*/, `评论时间：$1`],
        [/^, added (.*?)$/, `，更新于 $1`],
        [/^There (is|are) ([\d,]+) more comments? below the viewing threshold - $/, '还有 $2 条评论尚未显示 - '],
        [
            /^This gallery is unavailable due to a copyright claim by (.*)\.$/,
            '由于 $1 提出的版权要求，这个画廊无法使用。',
        ],
    ],
);

// E-Hentai Downloader
merge(
    /^\/g\//,
    undefined,
    {
        'E-Hentai Downloader ': 'E-Hentai 下载器 ',
        'Download Archive': '下载档案 ',
        ' Number Images': ' 图像编号',
        'Pages Range ': '页面范围 ',
        'File Name ': '文件名 ',
        'Path Name ': '路径 ',
        Basic: '基本',
        Advanced: '高级',
        Feedback: '反馈',
        'Download ': '下载 ',
        ' images at the same time (≤ 5 is recommended)': '张在同一时间 (建议≤5张)',
        'Abort downloading current image after ': '无响应终止当前图片下载：',
        ' second(s) (0 is never abort)': ' 秒 (0为永不终止)',
        ' Abort downloading current image if speed is less than ': '当速度过慢终止当前图片下载：',
        ' KB/s in ': 'KB/s 持续',
        ' second(s)': ' 秒',

        'Skip current image after retried ': '重试n次后跳过当前图片：',
        ' time(s)': '次',

        'Set folder name as ': '设置文件夹名称为',
        ' (if you don\'t want to create folder, use "': ' (如果不想创建文件夹请使用',

        'Delay ': '延迟 ',
        ' second(s) before requesting next image': ' 秒后请求下一张图片',

        'Set compression level as ': '压缩级别',
        ' (0 ~ 9, 0 is only store, not recommended to enable)': ' (0 ~ 9, 0 为仅存储, 不建议开启)',
        " Never show warning when it's in peak hours now ": '不在高峰期是进行警告',
        ' Use File System to handle large Zip file': '使用文件系统处理大型zip文档',
        'when gallery is larger than ': ' 当图库储存大于',
        ' MB (0 is always)': ' MB (0为总是使用)',
        'Download original images from ': '下载原始图片，通过',
        'current origin': '当前站点',

        '\t\t\t\t\t\t\t(1) This may reduce memory usage but some decompress softwares may not support the Zip file. See ':
            ' (1) 开启压缩可以减少体积，但是可能部分解压软件无法支持. 查看 ',
        ' for more info.\t\t\t\t\t\t': ' 获取更多信息 ',
        '\t\t\t\t\t\t\t(2) Enable these options may save your image viewing limits ':
            ' (2) 开启这些选项可以节省您的浏览配额',

        ', but may also cause some download problems.\t\t\t\t\t\t': ', 但是可能导致一些在下载问题。',
        '\t\t\t\t\t\t\t(3) If enabled you can save larger Zip files (probably ~1GB).\t\t\t\t\t\t':
            ' (3) 开启后可以保存更大的Zip文件（约～1GB）',

        '\t\t\t\t\t\t\t(4) If enabled will play slient music to avoid downloading freeze when page is in background ':
            ' (4) 如果启用将播放无声音频以避免页面在后台时下载冻结',

        '. Only needed if you have the problem, because the audio-playing icon maybe annoying.\t\t\t\t\t\t':
            '。只有在你遇到相关问题是才需开启，因为音乐播放图标可能会很烦人。',

        ' is a file type to archive comic images, you can open it with some comic viewer like CDisplay/CDisplayEX, or just extract it as a Zip file. To keep the order of images, you can also enable numbering images.\t\t\t\t\t\t':
            '是一种存档漫画图像的文件类型，您可以使用 CDisplay/CDisplayEX 等漫画查看器打开它，或者将其解压缩为 Zip 文件。为了保持图像的顺序，您还可以启用对图像进行编号。',

        "\t\t\t\t\t\t\t(6) If you cannot original images, but you've already logged in and your account is not blocked or used up your limits, it may caused by your cookies is not sent to the server. This feature may helps you to pass your current cookies to the download request, but please enable it ONLY if you cannot download any original images.\t\t\t\t\t\t":
            ' (6) 如果您无法下载原始图像，但是您已经登录并且您的帐户没有被阻止或用完您的限制，这可能是由于您的cookie没有发送到服务器。此功能可以帮助您将当前的 cookie 传递给下载请求，但仅当您无法下载任何原始图像时才启用它。',
        "\t\t\t\t\t\t\t(7) If you have already logged in, but the script detects that you're not logged in, you can enable this to skip login check. Please note that if you are not logged in actually, the script will not work as expect.\t\t\t\t\t\t":
            ' (7) 如果您已经登录，但脚本检测到您没有登录，您可以启用此功能以跳过登录检查。请注意，如果您没有实际登录，脚本将不会像预期的那样工作。',
        // '\t\t\t\t\t\t\t(8) If you have problem to download on the same site, like account session is misleading, you can force redirect original download link to another domain. Pass cookies manually may be needed.\t\t\t\t\t\t':
        //     '？？？ 不理解',

        "\t\t\t\t\t\t\t* Available templates: \t\t\t\t\t\t\t": ' * 可用模板： ',
        ' Gallery GID | \t\t\t\t\t\t\t': ' 图库 GID | ',
        ' Gallery token | \t\t\t\t\t\t\t': ' 图库 token | ',
        ' Gallery title': '图库标题',
        ' Gallery sub-title': '图库副标题',
        ' Gallery category': '图库分类',
        ' Gallery uploader': '图库上传者',
        'You can find GID and token at the address bar like this: exhentai.org/g/[GID]/[Token]/':
            '你可以在地址栏中找到GID和token，比如：exhentai.org/g/[GID]/[Token]/',
        'This title is the English title or Latin transliteration, you can find it as the first line of the title.':
            '这个标题是英文标题或拉丁文音译，它是页面中第一行标题。',
        'This tag means the sort name of the gallery, and its output string is upper.':
            '此标记代表图库的分类名称，并且输出的字符串为大写',
        'You can find it at the left of the gallery page.': '可以在图库左侧找到它',

        'This title is the original language title, you can find it as the second line of the title.':
            '这个原始标题，它是页面中第二行标题。',

        ' Number images (001：01.jpg, 002：01_theme.jpg, 003：02.jpg...) (Separator ':
            ' 图像编号 (001：01.jpg, 002：01_theme.jpg, 003：02.jpg...) (分隔符 ',
        ' Number images with original page number if pages range is set':
            ' 如果设置了页面范围，则使用原始页码对图像进行编号',
        ' Retry automatically when images download failed': ' 图像下载失败后自动重试',
        ' Get downloaded images automatically when canceled downloading': ' 取消下载时自动获取下载的图像',
        'Set Zip file name as ': '将Zip文件名设置为 ',
        ' Show inputs to recheck file name and folder name before downloading':
            '下载前显示重新检查文件名和文件夹名的输入',
        ' Never show notification if torrents are available': ' 如果种子可用就不显示通知',
        ' show download progress in title': ' 在标题中显示下载进度',
        Never: '从不',
        Always: '总是',
        'When current tab is not focused': '当前标签页处于后台时',
        ' Disable requesting and showing image limits': ' 不显示图像限制',
        ' Disable pre-calculating image limits cost': ' 不显示估计所需成本',
        ' Stream files and create Zip with file descriptors ': ' 流式传输文件并使用文件描述符创建Zip ',
        ' Force download resized image (never download original image) ': ' 强制下载非原图(从不下载原始图像) ',
        ' Never get new image URL when failed to download image ': ' 下载图像失败时，不要获取新的图像网址 ',
        ' Never send "nl" GET parameter when getting new image URL ': ' 获取新图像网址时，不带上"nl"参数 ',
        ' Never show warning when downloading a large gallery (>= 300 MB) ': ' 下载大型画廊时从不显示警告(>= 300 MB) ',
        ' Play silent music during the process to avoid downloading freeze ':
            ' 在下载过程中播放无声音频，避免下载冻结 ',
        'Record and save gallery info as ': '将画廊信息记录并保存为',
        'File info.txt': '文件 info.txt',
        'Zip comment': 'Zip 评论',
        '...which includes ': '...包括 ',
        'Title & Gallery Link': '标题和画廊链接',
        Metadatas: '元数据',
        'Page Links': '页面链接',
        ' Replace forbidden characters with full-width characters instead of dash (-)':
            ' 用全角字符代替破折号(-)，替换禁用字符',
        ' Force drop downloaded images data when pausing download': ' 暂停下载时强制删除下载的图像数据',
        ' Save as CBZ (Comic book archive) file': ' 另存为CBZ(漫画档案)文件',
        ' Pass cookies manually when downloading images ': ' 下载图像时手动传递 cookie ',
        '(See issue)': '(请看这里)',
        'Comic book archive': '漫画档案（CBZ）',

        'eg. -10,12,14-20,27,30-40/2,50-60/3,70-': '例如：-10,12,14-20,27,30-40/2,50-60/3,70-',
        Save: '保存',
        Cancel: '取消',
    },
    [
        [/Image Limits: (\d+)\/(\d+)/, '图片配额：$1/$2'],
        [/Estimated Limits Cost: (\d+)/, '预计成本：$1'],
        [/ Force as logged in \(actual login state: yes, uid: (\d+)\) /, ' 强制登录(实际状态: 已登录，uid: $1) '],
        [/ Force as logged in \(actual login state: no, uid: (\d+)\) /, ' 强制登录(实际状态: 未登录，uid: $1) '],
    ],
);

merge(/^\/g\/\w+\/\w+\/.*act=expunge/, undefined, {
    'Submit New Expunge Petition': '提交新的删除申请',
    'Specify a valid objective reason why this gallery should be expunged.': '请说明要删除此库的客观原因。',
    ' None / Withdraw Petition.': '无 / 撤回删除申请。',
    ' This gallery is a duplicate of equal or lower quality of an earlier posted gallery.':
        '此图库是之前发布的图库的质量相同或较低的副本。',
    ' A newer higher-quality and clearly marked copy of this gallery has been uploaded.':
        '这个图库的更高质量和标记清楚的副本已上传。',
    ' This gallery contains either illicit content like child porn or anything else forbidden by the ':
        '这个图库包含非法内容，如儿童色情或其他列于',
    ', or otherwise falls under the ': '的禁止内容，或列于',
    'Expunge Guidelines': '删除指南',
    ' (specify below).': '的内容（在下方详细描述）。',
    ' This gallery contains either illicit content like child porn or anything else that has been banned.':
        '这个图库包含非法内容，如儿童色情或其他任何禁止的内容。',
    'Enter a reason for this expunge here. Note that submitting petitions with subjective reasons along the line of "I hate this content/artist/uploader/etc" are NOT valid and can cause account penalties/restrictions.':
        '在此处输入删除的详细原因。请注意，“我讨厌此内容/艺术家/上传者”等主观理由是无效的，并且可能导致帐户处罚/限制。',
    'Enter the URL of the conflicting gallery, if applicable.': '如有必要，在此处输入冲突图库的 URL。',
    'Enter an explanation for this expunge here. It should include the location of the duplicate or the specific rule being violated.':
        '请输入清除原因和备注。它应包括副本的位置或违反的特定规则。',
    'No expunge petitions have been filed for this gallery': '此图库尚未有删除申诉',
    'You must specify a valid expunge type to start new expunge petition.':
        '你必须选择一个删除类型来创建新的删除申请。',
    'You must provide a reason to start a new expunge petition.': '你必须提供一个理由来创建一个新的删除申请。',
    'Create New Petition': '提交新申请',
    Back: '返回',
});
