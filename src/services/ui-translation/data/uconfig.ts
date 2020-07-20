import { merge } from '../helper';

merge(/^\/uconfig\.php/, undefined, {
    'Selected Profile:': '当前配置：',
    'Settings were updated': '设置更新完毕',
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
});
