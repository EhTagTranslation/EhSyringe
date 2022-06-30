import { merge } from '../helper';

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

        // todo: 没能完全理解
        // '\t\t\t\t\t\t\t(8) If you have problem to download on the same site, like account session is misleading, you can force redirect original download link to another domain. Pass cookies manually may be needed.\t\t\t\t\t\t':
        //     '',

        '\t\t\t\t\t\t\t* Available templates: \t\t\t\t\t\t\t': ' * 可用模板： ',
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
        ' show download progress in title': ' 在标签栏中显示下载进度',
        // Never: '从不', // 与页面中收藏 Never 从未 冲突。有好的冲突解决的方案时再修改。
        Always: '总是',
        'When current tab is not focused': '当前标签页处于后台时',
        ' Disable requesting and showing image limits': ' 不显示图像限制',
        ' Disable pre-calculating image limits cost': ' 不显示估计所需成本',
        ' Stream files and create Zip with file descriptors ': ' 流式传输文件并使用文件描述符创建Zip ',
        ' Force download resized image (never download original image) ': ' 强制下载非原图(从不下载原始图像) ',
        ' Never get new image URL when failed to download image ': ' 下载图像失败时，不要获取新的图像网址 ',
        ' Never send "nl" GET parameter when getting new image URL ': ' 获取新图像网址时，不带上"nl"参数 ',
        ' Never show warning when downloading a large gallery (>= 300 MB) ': ' 下载大型图库时从不显示警告(>= 300 MB) ',
        ' Play silent music during the process to avoid downloading freeze ':
            ' 在下载过程中播放无声音频，避免下载冻结 ',
        'Record and save gallery info as ': '将图库信息记录并保存为',
        'File info.txt': '文件 info.txt',
        'Zip comment': 'Zip 评论',
        '...which includes ': '...包括 ',
        'Title & Gallery Link': '标题和图库链接',
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

        // todo: 替换元素的 title, 可能由于有换行的原因, 目前无法正确替换
        // "1 point per 0.1 MB since August 2019, less than 0.1 MB will also be counted.\nDuring peak hours, downloading original images will cost GPs. The GP cost is the same as resetting viewing limits.\nEstimated GP cost is a bit more than using offical archive download, in case the sum of each images will be larger than the packed.":
        //     '自2019年8月起，1 point 每 0.1 MB，不足 0.1 MB 也计算在内。\n高峰期下载原始图像将消费GP，GP成本与重置查看限制相同。\n预计GP成本比使用官方存档下载略高，因为每个图像的总和会比打包更大。',

        Save: '保存',
        Cancel: '取消',
    },
    [
        [/Image Limits: (\d+)\/(\d+)/, '图片配额：$1/$2'],
        [/Estimated Limits Cost: (\d+)/, '预计成本：$1'],
        [/ Force as logged in \(actual login state: (\w+?), uid: (\d+)\) /, ' 强制登录(实际登录状态: $1，uid: $2) '],
    ],
);
