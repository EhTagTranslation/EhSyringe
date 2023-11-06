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
        'Path Name ': '文件夹名 ',

        Basic: '基本',
        Advanced: '高级',
        Feedback: '反馈',

        'Download ': '同时下载 ',
        ' images at the same time (≤ 5 is recommended)': ' 张图像 (建议 ≤5 张)',
        'Abort downloading current image after ': '无响应 ',
        ' second(s) (0 is never abort)': ' 秒后终止当前图像下载 (0 为永不终止)',
        ' Abort downloading current image if speed is less than ': ' 当速度低于 ',
        ' KB/s in ': ' KB/s，持续 ',
        ' second(s)': ' 秒后终止当前图像下载',
        'Skip current image after retried ': '重试 ',
        ' time(s)': ' 次后跳过当前图像',
        'Delay ': '延迟 ',
        ' second(s) before requesting next image': ' 秒后请求下一张图像',
        ' Number images (001：01.jpg, 002：01_theme.jpg, 003：02.jpg...) (Separator ':
            ' 使用数字编号图像 (如 001：01.jpg, 002：01_theme.jpg, 003：02.jpg...) (分隔符 ',
        ' Number images with original page number if pages range is set':
            ' 如果设置了页面范围，则使用原始页码对图像进行编号',
        ' Retry automatically when images download failed': ' 图像下载失败后自动重试',
        ' Get downloaded images automatically when canceled downloading': ' 取消下载时自动获取已下载完成的图像',
        'Set folder name as ': '将文件夹名称设置为 ',
        ' (if you don\'t want to create folder, use "': ' (如果不想创建文件夹请使用 "',
        'Set Zip file name as ': '将 Zip 文件名设置为 ',
        ' Show inputs to recheck file name and folder name before downloading': ' 显示文件名和文件夹名的输入框以供确认',
        ' Never show notification if torrents are available': ' 不显示有种子可用的提示',
        // Never: '从不', // 与页面中收藏 Never 从未 冲突。有好的冲突解决的方案时再修改。
        'When current tab is not focused': '当前标签页失去焦点时',
        Always: '总是',
        ' show download progress in title': ' 在标题栏中显示下载进度',
        ' Disable requesting and showing image limits': ' 不显示图像配额',
        ' Disable pre-calculating image limits cost': ' 不显示预计成本',
        ' Pin download actions box at the top of the page': ' 将下载操作框固定在页面顶部',

        '\t\t\t\t\t\t\t* Available templates: \t\t\t\t\t\t\t': ' * 可用模板： ',
        ' Gallery GID | \t\t\t\t\t\t\t': ' 图库 GID | ',
        ' Gallery token | \t\t\t\t\t\t\t': ' 图库 token | ',
        ' Gallery title': '图库标题',
        ' Gallery sub-title': '图库副标题',
        ' Gallery category': '图库分类',
        ' Gallery uploader': '图库上传者',

        'Set compression level as ': '压缩级别 ',
        ' (0 ~ 9, 0 is only store) ': ' (0 ~ 9, 0 为仅存储)',
        ' Stream files and create Zip with file descriptors ': ' 流式传输文件并使用文件描述符创建 Zip ',
        ' Force download resized image (never download original image) ': ' 强制下载重采样图像 (从不下载原图) ',
        ' Never get new image URL when failed to download image ': ' 图像下载失败时，不要获取新的图像地址 ',
        ' Never send "nl" GET parameter when getting new image URL ': ' 获取新图像地址时，不带 "nl" 参数 ',
        ' Never show warning if image limits will probably used out on starting download': ' 开始下载时不显示图像配额可能不足的警告',
        " Never show warning when it's in peak hours now ": ' 在高峰时段下载时不显示警告 ',
        ' Never show warning when downloading a large gallery (>= 300 MB) ': ' 下载大型图库时不显示警告 (≥ 300 MB) ',
        ' Use File System to handle large Zip file': ' 使用文件系统处理大型 Zip 文件，',
        'when gallery is larger than ': '如果图库大于 ',
        ' MB (0 is always)': ' MB (0 为总是使用) ',
        ' Play silent music during the process to avoid downloading freeze ':
            ' 在下载过程中播放无声音频，避免下载冻结 ',
        'Record and save gallery info as ': '将图库信息记录并保存为 ',
        'File info.txt': '文件 info.txt',
        'Zip comment': '压缩文件注释',
        '...which includes ': '...包括 ',
        'Title & Gallery Link': '标题和图库链接',
        Metadatas: '元数据',
        'Page Links': '页面链接',
        ' Replace forbidden characters with full-width characters instead of dash (-)':
            ' 使用全角字符替换禁用字符，而不是使用破折号 (-)',
        ' Force drop downloaded images data when pausing download': ' 暂停下载时强制中断并删除未下载完的图像',
        ' Save as CBZ (Comic book archive) file': ' 以 CBZ (漫画归档) 文件格式保存 ',
        ' Pass cookies manually when downloading images ': ' 下载图像时手动传递 cookie ',
        'Download original images from ': '下载原图，通过 ',
        'current origin': '当前站点',

        "\t\t\t\t\t\t\t(1) Higher compression level can get smaller file without lossing any data, but may takes more time. If you have a decent CPU you can set it higher, and if you're using macOS set it to at least 1.\t\t\t\t\t\t":
            ' (1) 更高的压缩级别可以获得更小的文件，但可能需要更长时间。如果您的 CPU 性能较好，可以将其设置得更高；如果您使用的是 macOS，请至少设置为 1。',

        '\t\t\t\t\t\t\t(2) This may reduce memory usage but some decompress softwares may not support the Zip file. See ':
            ' (2) 开启后可以减少内存占用，但部分解压软件可能不支持。查看 ',
        ' for more info.\t\t\t\t\t\t': ' 获取更多信息。',

        '\t\t\t\t\t\t\t(3) Enable these option will never let you to load from regular image server (or say force loaded from H@H). This may save your image viewing limits ':
            ' (3) 开启这些选项可能会阻止您从源图像服务器加载图像 (即强制从 H@H 加载)，可能可以节约您的图像配额 ',
        '(See wiki)': '(请看 wiki)',
        ', but may also cause some download problems, especially if your network cannot connect to specific H@H node.\t\t\t\t\t\t':
            '，但是可能也会导致一些下载问题，尤其是在您的网络无法连接到特定的 H@H 节点时。',

        '\t\t\t\t\t\t\t(4) If enabled you can save larger Zip files (probably ~1GB).\t\t\t\t\t\t':
            ' (4) 开启后可以保存更大的 Zip 文件 (约 ~1GB)',

        '\t\t\t\t\t\t\t(5) If enabled the script will play slient music to avoid downloading freeze when page is in background ':
            ' (5) 开启后脚本会播放无声音频以避免页面在后台时下载被冻结 ',
        '(See issue)': '(请看这里)',
        '. Only needed if you have the problem, because the audio-playing icon maybe annoying.\t\t\t\t\t\t':
            '。只有当您遇到相关问题时才需开启，因为音乐播放图标可能会很烦人。',

        'Comic book archive': '漫画归档 (CBZ)',
        ' is a file type to archive comic images, you can open it with some comic viewer like CDisplay/CDisplayEX, or just extract it as a Zip file. To keep the order of images, you can also enable numbering images.\t\t\t\t\t\t':
            ' 是一种归档漫画图像的文件类型，您可以使用 CDisplay/CDisplayEX 等漫画查看器打开它，或者直接将其视为 Zip 文件解压。为了保持图像的顺序，您还可以启用对图像进行编号。',

        "\t\t\t\t\t\t\t(7) If you cannot original images, but you've already logged in and your account is not blocked or used up your limits, it may caused by your cookies is not sent to the server. This feature may helps you to pass your current cookies to the download request, but please enable it ONLY if you cannot download any original images.\t\t\t\t\t\t":
            ' (7) 如果您无法下载原图，但是您已经登录并且您的帐户没有被阻止或用完您的限制，这可能是因为您的 cookie 没有被发送到服务器。此功能可以帮助您将当前的 cookie 传递给下载请求，但只有当您无法下载任何原图时才应该启用它。',

        "\t\t\t\t\t\t\t(8) If you have already logged in, but the script detects that you're not logged in, you can enable this to skip login check. Please note that if you are not logged in actually, the script will not work as expect.\t\t\t\t\t\t":
            ' (8) 如果您已经登录，但脚本检测到您没有登录，您可以启用此功能以跳过登录检查。请注意，如果您实际没有登录，则脚本不会按预期工作。',

        '\t\t\t\t\t\t\t(9) If you have problem to download on the same site, like account session is misleading, you can force redirect original download link to another domain. Pass cookies manually may be needed.\t\t\t\t\t\t':
            ' (9) 如果您无法通过当前站点下载原图，例如账户会话异常，您可以强制将原始下载链接重定向到另一个域。可能需要同时开启手动传递 cookie。',

        "Peak Hours: It's in peak hours now, during peak hours, downloading original images of 90 days ago cost GPs":
            '高峰时段：现在是高峰时段，下载 90 天前的原图需要消耗 GP',
        'Ancient Gallery: Downloading original images of 1 year ago cost GPs': '久远图库：下载 1 年前的原图需要消耗 GP',
        'eg. -10,!8,12,14-20,!15-17,30-40/2,50-60/3,70-': '例如 -10,!8,12,14-20,!15-17,50-60/3,70-',
        'Download ranges of pages, split each range with comma (,)\rRanges prefixed with ! means negative range, pages in these range will be excluded\rExample: \r  -10:   Download from page 1 to 10\r  !8:   Exclude page 8\r  12:   Download page 12\r  14-20:   Download from page 14 to 20\r  15-17:   Exclude page 15 to 17\r  30-40/2:   Download each 2 pages in 30-40 (30, 32, 34, 36, 38, 40)\r  50-60/3:   Download each 3 pages in 50-60 (50, 53, 56, 59)\r  70-:   Download from page 70 to the last page\rPages range follows your order, a negative range can drop previous selected pages, the latter positive range can add it back\rExample: \r  !10-20:   Download every page except page 10 to 20\r  1-10,!1-8/2,!4,5:   Download page 1 to 10 but remove 1, 3, 5, 7 and 4, then add 5 back (2, 5, 6, 8, 9, 10)':
            '需要下载的页面范围，使用半角逗号 ( , ) 分隔\r在范围前添加半角叹号 ( ! ) 表示排除此范围不下载\r例如：\r  -10:       下载 1-10 页\r  !8:          排除第 8 页\r  12:         下载第 12 页\r  14-20:    下载 14-20 页\r  !15-17:   排除 15-17 页\r  50-60/3: 在 50-60 范围内每隔 3 页下载 (50, 53, 56, 59)\r  70-:        下载 70-最后一页\r页面范围遵循输入的顺序，排除范围可以删除前面选定的页面，后面的范围也可以将其添加回来\r例如：\r  !10-20:               下载除了 10-20 页外的所有页面\r  1-10,!1-8/2,!4,5: 下载 1-10 页，但排除 1, 3, 5, 7 和 4，然后将 5 添加回来 (2, 5, 6, 8, 9, 10)',

        'You can find GID and token at the address bar like this: exhentai.org/g/[GID]/[Token]/':
            '您可以在地址栏中找到 GID 和 token，如 exhentai.org/g/[GID]/[Token]/',
        'This title is the English title or Latin transliteration, you can find it as the first line of the title.':
            '此标题是英文标题或拉丁文音译，它是页面中第一行标题。',
        'This title is the original language title, you can find it as the second line of the title.':
            '此标题是原始标题，它是页面中第二行标题。',
        'This tag means the sort name of the gallery, and its output string is upper.':
            '此标记代表图库的分类名称，且输出的字符串为大写',
        'You can find it at the left of the gallery page.': '您可以在图库左侧找到它',

        'Pause (Downloading images will keep downloading)': '暂停 (下载中的图像会继续下载)',
        'Pause (Downloading images will be aborted)': '暂停 (下载中的图像会中断下载)',
        Resume: '继续',
        'Not download? Click here to download': '还未下载？点此开始',

        "If an error occured and script doesn't work, click ": '如果出现错误导致脚本无法工作，请点击 ',
        here: '此处',
        ' to force get your downloaded images.': ' 强制获取已下载的图像。',
        'Pages URL is MPV link': '页面 URL 是 MPV 链接',
        'Fetching Gallery Pages URL From MPV...': '从 MPV 获取图库页面 URL...',
        'Pending...': '等待中...',
        'Downloading...': '下载中...',
        'Succeed!': '成功！',
        'Force Paused': '强制暂停',
        'Force Abort': '强制中止',
        'Fetch images failed.': '获取图像失败。',
        'Generating Zip file...': '生成 Zip 文件...',
        'Generating Blob object...': '生成 Blob 对象...',
        'Tags:': '标签：',
        'Uploader Comment:': '上传者评论：',
    },
    [
        [/^Image Limits: (\d+)\/(\d+)$/, '图像配额：$1/$2'],
        [/^Estimated Costs: (\d+)$/, '预计成本：$1'],
        [
            /^...or (\d+) \+ (\d+) GP if you don't have enough viewing limits.\n/,
            '...或者 $1 + $2 GP (如果您没有足够的图像配额)\r',
        ],
        [
            /1 point per 0.1 MB since August 2019, less than 0.1 MB will also be counted.\nDuring peak hours, downloading original images will cost GPs.\nFor gallery uploaded 1 year ago, downloading original images will cost GPs since July 2023.\nThe GP cost is the same as resetting viewing limits.\nEstimated GP cost is a bit more than using offical archive download, in case the sum of each images will be larger than the packed.$/,
            '自 2019 年 8 月起，每 0.1 MB 消耗一点配额，不足 0.1 MB 也计算在内。\r高峰期下载原图将消耗 GP，自 2023 年 7 月起，下载 1 年前上传的图库\r原图也需要消耗 GP，数量与重置图像限制所需的相同。\rGP 成本预计会比直接使用官方归档下载略高，因为每张图像的体积总和比压缩包大。',
        ],
        [
            /^ Force as logged in \(actual login state: (\w+?), uid: (-?\d+)\) $/,
            ' 强制登录 (实际登录状态: $1，uid: $2) ',
        ],
        [
            /^Total: (\d+) \| Downloading: (\d+) \| Succeed: (\d+) \| Failed: (\d+)$/,
            '总计：$1 | 下载中：$2 | 成功：$3 | 失败：$4',
        ],
        [/^Start downloading at /, '下载开始于 '],
        [/^Finish downloading at /, '下载完成于 '],
        [/^Fetching Gallery Pages URL /, '获取图库页面 URL '],
        [/^Retrying /, '重试中 '],
        [/^Failed! /, '失败！'],
        [/^Category: /, '分类：'],
        [/^Uploader: /, '上传者：'],
        [/^Rating: /, '评分：'],
    ],
);
