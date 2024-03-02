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

        '\n\tNetwork Load shows how much bandwidth is currently being used. This includes requests served by H@H and the image servers.':
            '当前网络负载 显示当前使用的带宽量，这包括 H@H 服务的请求以及来自图像服务器的直接请求。',
        '\n\tCoverage shows the average number of times a file range is found within a region, indicating the total available storage capacity.':
            '覆盖率 表示此区域内一组文件的平均存在次数，代表着总可用存储量。',
        '\n\tHits/GB shows the average number of hits per minute per gigabyte of allocated disk space for all online clients in the region.':
            '命中/GB 表示此区域所有在线客户端分配的每 GB 磁盘空间每分钟的平均命中次数。',

        'Your Active Clients': '您的活动客户端',
        'To add more clients, ': '要添加更多客户端，请',
        'PM Tenboro': '联系 Tenboro',
        '. Make sure to read the requirements first to make sure that you qualify. Include the system specifications and location the client will run at in the message, and specify whether it is a home connection or a VPS/Dedicated. Each client requires its own unique public IPv4 address to run, and must either be reachable directly from the internet, or have a port forwarded. These are technical requirements, and it is not possible to make any exceptions.':
            '。请务必先阅读要求以确保您符合资格。在消息中包含客户端的配置和地理位置，并说明它是家庭连接还是 VPS/独立服务器。每个客户端都需要拥有唯一的公共 IPv4 地址才能运行，并且必须可以直接从 Internet 访问，或者使用端口转发。这些都是技术要求，不可能有任何例外。',

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
        'For information on how to participate in the Hentai@Home Project, refer to the ':
            '有关如何参与 Hentai@Home 项目的信息，请参阅 ',
        'Hentai@Home Project FAQ': 'Hentai@Home 项目常见问题解答 (英文)',
        '. Read and understand the requirements BEFORE you submit an application. Your system and network speed must meet some minimum requirements to run H@H, and the client cannot be regularly shut down.':
            '。在提交申请之前，请确保您已阅读并理解要求。您的系统和网络速度必须满足一些最低要求才能运行 H@H，并且客户端不能经常关闭。',
        'If you have a headless server that cannot use the normal speedtest, use ':
            '如果您有一台无法使用寻常 SpeedTest 的无头服务器，请使用 ',
        ' instead.': ' 代替。',
        'Max Outgoing Speed': '最大出站速率',
        'The maximum outgoing speed you want to use for this client.': '此客户端允许的最大出站 (上传) 速度。',
        'This should be less than or equal to your connection speed.': '此速度应当小于等于您的连接速度。',
        'Disk Cache Size': '磁盘缓存大小',
        'The maximum allowed disk space for the image cache.': '允许缓存占用的最大磁盘空间。',
        'The allocated space must be reserved for H@H.': '分配的空间必须为 H@H 保留。',
        'Speed Test': '速度测试结果',
        'Go to ': '前往 ',
        ' and run a test against your closest server.': ' 并使用距离最近的服务器进行测试。',
        'After the test completes, paste the result URL here.': '测试完成后，将结果 URL 粘贴在此处。',
        'The resulting speedtest MUST show at least 80 Mbps upload ': '要求：至少 80 Mbps 上传速度 ',
        AND: '和',
        ' 80 Mbps download! Old tests will be rejected.': ' 80 Mbps 下载速度，使用旧的测试结果会被拒绝。',
        'The client MUST normally be running at all times. Clients with frequent/extensive downtime will be revoked.':
            '正常情况下客户端必须一直运行，经常/长时间离线的客户端会被吊销。',
        'BOTH measurements in my test above are at least 80 Mbps': '我的测速两个值均大于 80 Mbps',
        'This client will be hosted on a system that is usually running 24/7':
            '此客户端将托管在一台正常情况下 24 小时运行的系统上',
        'Submit Application': '提交申请',

        'If the auto-detected country is wrong, contact Tenboro to have an override applied. Include the correct country, client ID and IP address in your message, and ':
            '如果自动检测的国家/地区错误，请联系 Tenboro 以进行更改。在消息中包含正确的国家/地区、客户端 ID 和 IP 地址，并',
        'make sure to keep your client running': '确保您的客户端保持运行',
        '. Having the client set to the wrong country will make it perform worse than it would otherwise do. If the country is shown in ':
            '。位于错误的国家/地区的客户端的性能表现将不如预期。如果国家/地区显示为 ',
        red: '红色',
        ' that means it appears to be located outside of its home region, and ':
            '，则意味着它似乎位于其所在地区之外，',
        'will not be assigned new ranges nor gain any hath': '不会再被分配新的范围，也不会获得 Hath',
        '. Contact Tenboro if you need to change the home region.': '。如果您需要更改所在地区，请联系 Tenboro。',

        'Free Archive Quota: ': '免费的存档配额：',
        ', measured in a 168-hour sliding window. Clients must be ':
            '，按照最近 168 小时的在线时间进行计算。客户端必须保持',
        healthy: '健康',
        ' and must have been running for more than 24 hours straight to qualify.': '并运行超过 24 小时才能获得资格。',

        'Client Download': '客户端下载',
        File: '文件',
        Size: '大小',
        'Source Code': '源代码',
        'You can find the current release notes ': '您可以在 ',
        here: '此处',
        '. You should verify that the size and cryptographic hash correspond to the files you download. Hentai@Home is an Open Source project released under the GNU General Public Licence v3. The source code and build scripts for Windows and Linux-like systems can be found above.':
            ' 找到当前版本的发行说明 (英文)。请验证您下载的文件的大小和哈希值与上方给出的数值相对应。Hentai@Home 是在 GNU 通用公共许可证 v3 下发布的开源项目。Windows 和类 Linux 系统的源代码和构建脚本可以在上面找到。',

        'Unfortunately, we cannot accept clients with less than 80 Mbit/s outgoing speed.':
            '抱歉，我们无法接受出站速率低于 80 Mbps 的客户端。',
        'Unfortunately, we cannot accept clients that are frequently offline.': '抱歉，我们无法接受经常离线的客户端。',
    },
    [
        [/^([\d.]+) \/ min$/, '$1 / 分钟'],
        [/^([\d.]+) \/ day$/, '$1 / 天'],
        [/^([\d.]+) ([KMGTP]B)\/hour$/, '$1 $2/小时'],
        [/^([\d.]+) ([KMGTP]B) per week$/, '每周 $1 $2'],
        [
            /^Must be at least ([\d.]+) ([KMGTP]B)\/s, which must be reserved for H@H.$/,
            '不小于 $1 $2/s，必须为 H@H 保留。',
        ],
        [/^ Must be at least ([\d.]+) ([KMGTP]iB) but more is always better.$/, '至少为 $1 $2，但越多越好。'],
        [/^Max Burst Speed must be at least ([\d.]+) ([KMGTP]B)\/s.$/, '最大出站速率必须至少为 $1 $2/s。'],
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
        'Static Range allocation is limited to 1 per 5 KB/s. Clients cannot be assigned high-capacity ranges if set below 10 MB/s.':
            '每 1 组静态范围至少 5 KB/s。如果设置低于 10 MB/s，则不会被分配到大容量范围。',
        ' KBytes/s': ' KB/s',
        ' Enable Client-Side Speed Limit (recommended only for home networks)':
            ' 启用客户端侧的速度限制 (仅建议家庭网络开启)',
        ' Confirm removing all assigned high-capacity ranges from this client if set below 10 MB/s':
            ' 如果低于10 MB/s，确认删除客户端中所有大容量范围',
        'Note: 1 KB/s or KBps (Kilo': '注意：1 KB/s 或 KBps (千',
        bytes: '字节',
        ' per Second) is equivalent to 8 Kb/s or Kbps (Kilo': '每秒) 相当于 8 Kb/s 或 Kbps (千',
        bits: '比特',
        ' per Second). Internet speeds are typically advertised as the latter (Mbps or Mbit/s), and this is also what Speedtest uses, so make sure you use the right one. Do not set this higher than the upload bandwidth of your internet connection.':
            '每秒)。Internet 速度通常被宣传为后者 (Mbps 或 Mbit/s)，Speedtest 也使用这种表示方式，因此请确保使用正确的速度。您不应将此设置为高于 Internet 连接的上行带宽。',
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
        'Static Range allocation is limited to 1 per 5 GB. Clients cannot be assigned high-capacity ranges if set below 5 TB/month.':
            '每 1 组静态范围至少 5 GB。如果设置低于 5 TB/月，则不会被分配到大容量范围。',
        'To reduce the monthly data transfer target for this client below this level, you must first shut it down, then check the "Remove static ranges if necessary" option.':
            '降低该客户端的每月数据流量限制需要先关闭客户端，然后勾选“必要时移除静态范围”选项。',
        ' Confirm removing all assigned high-capacity ranges from this client if set below 5 TB/month':
            ' 如果低于5 TB/月，确认删除客户端中所有大容量范围',

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
        ' static range(s) assigned.': ' 组静态范围。',
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
            '必要时允许移除静态范围 (需要重启客户端)',
        'Apply Settings': '应用设置',
        'Back to Overview': '返回总览',
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
