import { merge } from '../helper';

merge(
    /^\/hentaiathome\.php\??$/,
    undefined,
    {
        'Hentai@Home Clients': 'Hentai@Home 客户端',

        'H@H Region': 'H@H 地区',
        'Current Network Load': '当前网络负载',
        'Hits/sec': '命中/秒',
        Coverage: '覆盖率',
        'Hits/GB': '命中/GB',
        Quality: '质量',
        'North and South America': '北美洲和南美洲',
        'Europe and Africa': '欧洲和非洲',
        'Asia and Oceania': '亚洲和大洋洲',
        'Chinese Dominion': '中国大陆',
        Global: '全球',

        '\n\tCurrent Network Load shows how much raw bandwidth is currently used to serve images. This includes requests served by H@H as well as direct requests from the image servers.':
            '当前网络负载显示当前用于提供图像的原始带宽量。这包括 H@H 服务的请求以及来自图像服务器的直接请求。',
        '\n\tH@H Miss% shows the percentage of requests for the region that would have gone to a H@H client if one was available, but where no client was ready to serve the request.':
            'H@H 缓存未命中% 显示此区域没有 H@H 客户端能为 H@H 请求提供服务的百分比。',
        '\n\tCoverage denotes the average number of times a static file range partition can be found within a given region, indicating the total available storage capacity.':
            '覆盖率表示此区域内一组文件的平均存在次数，代表着总可用存储量。',
        '\n\tHits/GB shows the average number of hits per minute per gigabyte of allocated disk space for all online clients in the region for the last 24 hours.':
            '命中/GB 显示过去 24 小时内此区域所有在线客户端分配的每 GB 磁盘空间每分钟的平均命中次数。',

        'Your Active Clients': '您的活动客户端',
        'To add more clients, ': '要添加更多客户端，请',
        'PM Tenboro': '联系 Tenboro',
        '. Make sure to read the requirements first to make sure that you qualify. Include the specs for the client in the message, and specify whether it is a home connection or a VPS/Dedicated. Each client requires its own unique public IPv4 address to run, and must either be reachable directly from the internet, or have a port forwarded. These are technical requirements, and it is not possible to make any exceptions.':
            '。请务必先阅读要求以确保您符合资格。在消息中包含客户端的规格，并说明它是家庭连接还是 VPS/独立服务器。每个客户端都需要拥有唯一的公共 IPv4 地址才能运行，并且必须可以直接从 Internet 访问，或者使用端口转发。这些都是技术要求，不可能有任何例外。',

        Client: '客户端',
        Status: '状态',
        Created: '创建于',
        'Last Seen': '最后在线于',
        'Files Served': '提供的文件',
        'Client IP': '客户端 IP',
        Port: '端口',
        Version: '版本',
        'Max Speed': '最大速度',
        Trust: '信任',
        Hitrate: '命中率',
        Hathrate: 'Hath 产出率',
        Country: '国家/地区',

        Online: '在线',
        Offline: '离线',
        'Not available when offline': '离线状态下不可用',

        'Apply for H@H participation': '参与申请 H@H',
        'For information on how to participate in the Hentai@Home Project, please refer to the ':
            '有关如何参与 Hentai@Home 项目的信息，请参阅 ',
        'Hentai@Home Project FAQ': 'Hentai@Home 项目常见问题解答 (英文)',
        '. Make sure that you have read and understand this BEFORE you submit an application. If you need to add more than one client, or if you have a headless server that cannot run SpeedTest, you have to ':
            '。在提交申请之前，请确保您已阅读并理解此内容。如果您需要添加多个客户端，或者您有一台无法运行 SpeedTest 的无头服务器，则必须',
        '. Otherwise, use the form below.': '。否则，请使用下面的表格。',
        'Max Outgoing Speed': '最大出站速率',
        'The maximum outgoing speed you want to use for this client.': '此客户端允许的最大出站 (上传) 速度。',
        'This should be less than or equal to your connection speed.': '此速度应当小于等于您的连接速度。',
        'Max Transfer per Hour': '每小时最大传输量',
        'The maximum total outgoing data transfer the client can use per hour.':
            '客户端每小时可使用的最大传出数据总量。',
        ' MB/hour': ' MB/小时',
        'Disk Cache Size': '磁盘缓存大小',
        'The maximum allowed disk space usage for the image cache.': '允许缓存占用的最大磁盘空间。',
        'Speed Test': '速度测试结果',
        'Go to ': '前往 ',
        ' and run a test against your closest server. After the test completes, paste the result URL here.\n\t\t\t':
            ' 使用距离最近的测速服务器进行测试。将测速结果 URL 粘贴在此处。',
        'AT LEAST 80 Mbit/s UPLOAD ': '要求：至少 80 Mbps 上传速度 ',
        AND: '和',
        ' 80 Mbit/s DOWNLOAD speed required.': ' 80 Mbps 下载速度',
        'Submit Application': '提交申请',
        'If this is a headless server that cannot run speedtest, contact ':
            '如果是一台无法运行 SpeedTest 的无头服务器，请联系 ',
        'BOTH measurements in my test above are at least 80 Mbit/s *': '我的测速两个值均大于 80 Mbps *',
        'This client will be run on a computer/server that is online 24/7 **':
            '此客户端将在一台 24 小时在线的计算机/服务器上运行 **',
        'If your connection speed is below the requirement, the resources taken up by tracking the client outweight those saved by having it in the network.':
            '如果链接速度低于要求，追踪客户端所消耗的资源将超过您客户端的贡献。',
        'This does not mean that you cannot restart the computer for updates or turn it off when you go on a vacation. It does however mean that if you shut it down at night, running H@H is not possible.':
            '您可以重启计算机进行系统更新，或者在去度假时关闭它。但是如果您每晚都需要关闭它，那它不适合运行 H@H。',

        'If the auto-detected country is wrong, contact Tenboro to have an override applied. Include the correct country, client ID and IP address in your message, and ':
            '如果自动检测的国家/地区错误，请联系 Tenboro 以进行更改。在消息中包含正确的国家/地区、客户端 ID 和 IP 地址，并',
        'make sure to keep your client running': '确保您的客户端保持运行',
        '. Having the client set to the wrong country will make it perform worse than it would otherwise do. If the country is shown in ':
            '。位于错误的国家/地区的客户端的性能表现将不如预期。如果国家/地区显示为 ',
        'red': '红色',
        ' that means it has been moved outside of its home region and will not be assigned new ranges. Contact Tenboro if you need to change the home region.':
            '，则意味着它已被迁移出其所在地区，不会再被分配新的范围。如果您需要更改所在地区，请联系 Tenboro。',

        'Free Archive Quota: ': '免费的存档配额：',
        ', measured in a 168-hour sliding window. Clients must be ':
            '，按照最近 168 小时的在线时间进行计算。客户端必须保持',
        healthy: '健康',
        ' and must have been running for more than 24 hours straight to qualify.': '并运行超过 24 小时才能获得资格。',

        'Client Download': '客户端下载',
        'The current version of Hentai@Home is ': 'Hentai@Home 的当前版本是',
        '. You can find the release notes for this version ': '。此版本的发行说明见',
        here: '发行说明 (英文)',

        File: '文件',
        Size: '大小',
        'Source Code': '源代码',

        'Please verify that the size and cryptographic hashes correspond to the file you download. For more information about file validation, see these links: ':
            '请验证您下载的文件的大小和哈希值与上方给出的数值相对应。有关文件验证的更多信息，请参阅以下链接 (英文)：',
        'Hentai@Home is an Open Source project released under the GNU General Public Licence v3. The source code and build scripts for Windows and Linux-like systems can be found above.':
            'Hentai@Home 是在 GNU 通用公共许可证 v3 下发布的开源项目。Windows 和类 Linux 系统的源代码和构建脚本可以在上面找到。',

        'Unfortunately, we cannot accept clients with less than 80 Mbit/s outgoing speed.':
            '抱歉，我们无法接受出站速率低于 80 Mbps 的客户端。',
        'Unfortunately, we cannot accept clients that are frequently offline.': '抱歉，我们无法接受经常离线的客户端。',
    },
    [
        [/^([\d.]+) \/ min$/, '$1 / 分钟'],
        [/^([\d.]+) \/ day$/, '$1 / 天'],
        [/^([\d.]+) ([KMGTP]B)\/hour$/, '$1 $2/小时'],
        [/^([\d.]+) ([KMGTP]B) per week$/, '每周 $1 $2'],
        [/^Must be at least ([\d.]+) ([KMGTP]B)\/s$/, '不小于 $1 $2/s'],
        [/^Must be at least ([\d.]+) ([KMGTP]B)\/hour, or 0 for unlimited.$/, '必须至少为 $1 $2/小时，填 0 表示无限制'],
        [
            /^ Must be at least ([\d.]+) ([KMGTP]B). More is better, but space must be dedicated.$/,
            '至少为 $1 $2。越多越好，但空间必须专用。',
        ],
        [/^Max Burst Speed must be at least ([\d.]+) ([KMGTP]B)\/s.$/, '最大出站速率必须至少为 $1 $2/s。'],
        [/^Transfer Limit must be 0 or at least ([\d.]+) ([KMGTP]B)\/hour.$/, '传输量必须至少为 $1 $2/小时。'],
        [/^Disk Space must be at least ([\d.]+) ([KMGTP]B).$/, '磁盘空间必须至少为 $1 $2。'],
    ],
);

merge(
    /^\/hentaiathome\.php\?.*act=settings/,
    undefined,
    {
        'Client ID:': '客户端 ID：',
        'Client Key:': '客户端 Key：',

        'Current Value: ': '现值：',
        'New Value: ': '新值：',

        'Port for Incoming Connections': '监听端口',
        'Can be 443 (recommended) or most numbers between 1024 and 65534. This port must be opened in your firewall, and forwarded from any NAT-based cable/xDSL modems or routers you connect to the internet through.':
            '可以使用 443 (推荐) 或 1024~65534 的大部分端口。此端口必须在您的防火墙中打开，并经由您连接到 Internet 的任何基于 NAT 的电缆/xDSL 调制解调器或路由器转发。',
        'Note: The port cannot be changed while the client is running.': '注意：客户端运行时不能更改端口。',

        'Client Name': '客户端名称',
        'You can set a custom name for this client here. This will be used in the various listings this client appears in.':
            '您可以在这里为此客户端设置自定义名称。它会用于此客户端出现的各种列表中。',

        'Maximum Upload Rate': '最大上传速率',
        'Turning on the client-side speed limit makes the client enforce this as the maximum speed, which reduces the burstiness of the load. This will increase CPU usage and can reduce the performance of the client. You should only enable this if H@H noticeably affects your home network performance.':
            '打开客户端侧速度限制会使客户端以设置的最大速度运行，从而减少负载的突发性。但这会增加 CPU 使用率，降低客户端的性能。仅当 H@H 明显影响您的家庭网络性能时才应启用此功能。',
        'Static Range allocation is limited to 1 per 5 KB/s.': '每 1 组静态范围至少 5 KB/s。',
        ' KBytes/s': ' KB/s',
        ' Enable Client-Side Speed Limit (recommended only for home networks)':
            ' 启用客户端侧的速度限制 (仅建议家庭网络开启)',
        'Note: 1 KB/s or KBps (Kilo': '注意：1 KB/s 或 KBps (千',
        bytes: '字节',
        ' per Second) is equivalent to 8 Kb/s or Kbps (Kilo': '每秒) 相当于 8 Kb/s 或 Kbps (千',
        bits: '比特',
        ' per Second). Internet speeds are typically advertised as the latter (Mbps or Mbit/s), and this is also what Speedtest uses, so make sure you use the right one. Do not set this higher than the upload bandwidth of your internet connection.':
            '每秒)。Internet 速度通常被宣传为后者（Mbps 或 Mbit/s），Speedtest也使用这种表示方式，因此请确保使用正确的速度。您不应将此设置为高于 Internet 连接的上行带宽。',
        'To reduce the upload rate for this client below this level, you must first shut it down, then check the "Remove static ranges if necessary" option.':
            '降低该客户端的上传速率需要先关闭客户端，然后勾选“必要时移除静态范围”选项。',

        'Maximum Disk Cache Size': '最大磁盘缓存大小',
        'How much disk space to reserve for this client. Must be at least 10 GiB, but the more you assign the better your client will perform. The reserved space must always be available.':
            '希望为此客户端保留多少磁盘空间。最少 10 GiB，但是保留的越多，客户端表现的越好。保留空间必须始终可用。',
        'Static Range allocation is limited to 1 per 250 MiB.': '静态范围分配限制为每 250 MiB 磁盘空间 1 组。',
        ' Verify cache integrity on next startup': ' 下次启动时验证缓存完整性',
        'To reduce the disk space for this client below this level, you must first shut it down, then check the "Remove static ranges if necessary" option.':
            '降低该客户端所需的磁盘空间需要先关闭客户端，然后勾选“必要时移除静态范围”选项。',

        'Advanced Settings': '高级设置',
        'The settings below are optional advanced settings.': '以下设置项为可选的高级设置',

        'Reset Client Key': '重置客户端 Key',
        'If you believe your client key has been compromised, you can reset the key by checking this box. You will have to re-enter the key the next time the client starts.':
            '如果您认为您的客户端 Key 已泄露，可以通过选中复选框来重置密钥。下次客户端启动时，您必须重新输入密钥。',
        ' Reset Client Key': ' 重置客户端 Key',

        'Monthly Data Transfer Target': '每月数据流量限制',
        Unlimited: '无限',
        ' GB per month': ' GB 每月',
        'If you have a monthly data cap, you can provide it here. If the system detects that you are likely to exceed this target, it will reduce the priority of ranges on your client to reduce the load, but it is not guaranteed to stay below this value. Leave at 0 to limit with max speed alone. Must be at least 1000 GB if set.':
            '如果你有每月数据限额，请在此设置。如果系统检测到你可能超过此限额，它将会降低客户端上的静态范围的优先度，以降低网络负载，但并不能保证低于设定值。保留为 0 表示仅限制最大速度。最低限制为 1000 GB。',
        'Static Range allocation is limited to 1 per 5 GB.': '每 1 组静态范围至少 5 GB。',
        'To reduce the monthly data transfer target for this client below this level, you must first shut it down, then check the "Remove static ranges if necessary" option.':
            '降低该客户端的每月数据流量限制需要先关闭客户端，然后勾选“必要时移除静态范围”选项。',

        'Minimum Free Disk Space': '磁盘最小剩余空间',
        'Use Default': '默认',
        'If this value is set, the client will stop running if the free space on the disk decreases below this value. The client will exit if free space drops below 1 GiB even if this is not set.':
            '如果设置了此值，则当磁盘上的可用空间低于此值时，客户端会停止运行。即使未设置，当可用空间低于 1 GiB 时，客户端也会退出。',

        'Reset Static Ranges': '重置静态范围',
        'Your client will be assigned ranges of files to cache and serve. This toggle clears these ranges. ':
            '您的客户端会被分配到一段文件范围用于缓存和提供服务。此复选框用于重置这些范围。',
        'DO NOT DO THIS UNLESS YOU LOST YOUR CACHE. IT WILL NOT FIX OTHER CLIENT ISSUES. DOING THIS REGULARLY WILL REVOKE YOUR CLIENT.':
            '除非您丢失了缓存，否则不要执行此操作。它不会修复客户端的其他任何问题。定期执行此操作将吊销您的客户端。',
        'This client currently has ': '此客户端当前被分配了 ',
        ' Reset Static Ranges': ' 重置静态范围',
        'Warning: You should ': '警告：',
        never: '不要',
        ' reset your static ranges ': '重置您的静态范围，',
        unless: '除非',
        ' the cache has been deleted or is otherwise lost. It should ':
            '缓存已被删除或以其他方式丢失。如果缓存因任何原因被清除，则',
        always: '必须',
        ' be reset if the cache has been cleared for whatever reason, or the client will encounter serious trust issues.':
            '重置静态范围，否则客户端将遇到严重的信任问题。',

        'Miscellaneous Toggles': '杂项开关',
        'Various toggles to optimize client behavior.': '用于优化客户端行为的各种开关。',
        ' Disable logging to disk. This will reduce disk activity by a small amount. Errors are still logged.':
            ' 停止向磁盘写入日志。启用后能轻微减少磁盘活动。错误仍会被记录。',
        ' Run in low-memory mode. This will somewhat reduce memory requirements, but will lead to increased disk activity.':
            ' 以低内存模式运行。启用后能在一定程度上减少内存占用，但会导致磁盘活动增加。',
        ' Use this client as your designated H@H Downloader. Only necessary if you have multiple clients.':
            ' 将此客户端用作指定的 H@H 下载器。仅当您有多个客户端时才需要。',

        'Changes will be applied within roughly two minutes. If you decrease the disk cache space, it will not take effect until next restart.':
            '更改将在大约两分钟内生效。如果减少了磁盘缓存空间，则需要重新启动才会生效。',
        ' Allow removing static ranges if necessary (client must be shut down)':
            '必要时允许移除静态范围（需要重启客户端）',
        'Apply Settings': '应用设置',
        '[Back to Overview]': '[返回总览]',
    },
    [
        [
            /^This is the maximum speed the client can use to serve files, measured in kilobytes per second. Must be at least ([\d.]+) ([KMGTP]B)\/s. Actual utilization will be at most 80% of this over time.$/,
            '这是客户端可以用来提供文件的最大速度，以每秒千字节为单位。必须至少为 $1 $2/s。随着时间的推移，利用率最多会达到此值的 80%。',
        ],
        [
            /^This client currently has ([\d.]+) static ranges assigned. Each requires at least 250 MiB of disk space, so you cannot reduce it below ([\d.]+) GiB without removing ranges.$/,
            '此客户端已分配 $1 组静态范围。每组需要至少 250 MiB 磁盘空间，所以您无法减少至低于 $2 GiB，除非移除静态范围。',
        ],
        [
            /^This client currently has ([\d.]+) static ranges assigned. Each requires at least 5 KB\/s of upload rate, so you cannot reduce it below ([\d.]+) KB\/s without removing ranges.$/,
            '此客户端已分配 $1 组静态范围。每组需要至少 5 KB/s 上传速率，所以您无法减少至低于 $2 KB/s，除非移除静态范围。',
        ],
        [
            /^This client currently has ([\d.]+) static ranges assigned. Each requires at least 5 GB of monthly data transfer, so you cannot reduce it below ([\d.]+) GB without removing ranges.$/,
            '此客户端已分配 $1 组静态范围。每组需要至少 5 GB 的每月数据流量，所以您无法减少至低于 $2 GB，除非移除静态范围。',
        ],
        [/^ static range\(s\) assigned: P(\d+) = $/, ' 组静态范围：P$1 = '],
        [/^([\d.]+) ([KMGTP]B)\/hour$/, '$1 $2/小时'],
        [/^([\d.]+) ([KMGTP]B)\/s$/, '$1 $2/s'],
    ],
);
