import { merge } from '../helper';

merge(
    /^\/hentaiathome\.php\??$/,
    undefined,
    {
        'Hentai@Home Clients': 'Hentai@Home 客户端',

        'H@H Region': 'H@H 地区',
        'Current Network Load': '当前网络负载',
        'H@H Miss%': 'H@H 缓存未命中%',
        Coverage: '覆盖率',
        'Hits/GB': '点击/GB',
        Quality: '质量',
        'North and South America': '北美洲和南美洲',
        'Europe and Africa': '欧洲和非洲',
        'Asia and Oceania': '亚洲和大洋洲',
        Global: '全球',

        '\n\tCurrent Network Load shows how much raw bandwidth is currently used to serve images. This includes requests served by H@H as well as direct requests from the image servers.':
            '当前网络负载显示当前用于提供图像的原始带宽量。这包括 H@H 服务的请求以及来自图像服务器的直接请求。',
        '\n\tH@H Miss% shows the percentage of requests for the region that would have gone to a H@H client if one was available, but where no client was ready to serve the request.':
            'H@H 缓存未命中% 显示此区域没有 H@H 客户端能为 H@H 请求提供服务的百分比。',
        '\n\tCoverage denotes the average number of times a static file range partition can be found within a given region, indicating the total available storage capacity.':
            '覆盖率表示此区域内一组文件的平均存在次数，代表着总可用存储量。',
        '\n\tHits/GB shows the average number of hits per minute per gigabyte of allocated disk space for all online clients in the region for the last 24 hours.':
            '点击/GB 显示过去 24 小时内此区域所有在线客户端分配的每 GB 磁盘空间每分钟的平均点击次数。',

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
        Hitrate: '点击率',
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
            '使用距离最近的测速服务器进行测试。将测速结果 URL 粘贴在此处。\n\t\t\t',
        'AT LEAST 80 Mbit/s UPLOAD ': '要求：至少 80 Mbps 上传速度 ',
        AND: '和',
        ' DOWNLOAD speed required.': ' 下载速度',
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

        'If the auto-detected country is wrong, contact Tenboro to have an override applied. Include the correct country, client ID and IP address in your message, and make sure to keep your client running. Having the client set to the wrong country will make it perform worse than it would otherwise do.':
            '如果自动检测的国家/地区错误，请联系 Tenboro 以进行更改。在消息中包含正确的国家/地区、客户端 ID 和 IP 地址，并确保您的客户端保持运行。位于错误的国家/地区的客户端的性能表现将不如预期。',

        'Free Archive Quota: ': '免费的存档配额：',
        ', measured in a 168-hour sliding window. The cap is updated once every hour. Clients must have been running for more than 24 hours with a hitrate above 1 to qualify.':
            '，按照最近 168 小时的在线时间进行计算。上限每小时更新一次。客户端必须保持运行超过 24 小时且点击率高于 1 才能获得资格。',

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
        'Client ID#:': '客户端 ID：',
        'Client Key:': '客户端 Key：',

        'Current Value: ': '现值：',
        'New Value: ': '新值：',

        'Port for Incoming Connections': '监听端口',
        'Can be 443 (recommended) or most numbers between 1024 and 65534.':
            '可以使用 443 (推荐) 或 1024~65534 的大部分端口。',
        'This port must be opened in your firewall, and forwarded from any NAT-based cable/xDSL modems or routers you connect to the internet through.':
            '此端口必须在您的防火墙中打开，并经由您连接到 Internet 的任何基于 NAT 的电缆/xDSL 调制解调器或路由器转发。',
        'Note: The port cannot be changed while the client is running.': '注意：客户端运行时不能更改端口。',

        'Client Name': '客户端名称',
        'You can set a custom name for this client here. This will be used in the various listings this client appears in.':
            '您可以在这里为此客户端设置自定义名称。它会用于此客户端出现的各种列表中。',

        'Maximum Upload Rate': '最大上传速率',
        'Actual utilization will generally reach at most 80% of this over time, less if you also set an hourly limit below.':
            '随着时间的推移，实际利用率最多将达到此值的 80%，除非您还在下方设置了每小时限制。',
        'Turning on the client-side speed limit makes the client enforce this as the maximum speed, which reduces the burstiness of the load. This will however increase CPU usage and can affect the performance of the client. Intended for home networks; you should enable this if H@H noticeably affects your network performance.':
            '打开客户端侧速度限制会使客户端以设置的最大速度运行，从而减少负载的突发性。但这会增加 CPU 使用率，并可能影响客户端性能。此选项适用于家庭网络，如果 H@H 显著影响您的网络性能，则应启用此功能。',
        ' KBytes/s': ' KB/s',
        ' Enable Client-Side Speed Limit (recommended for home networks)': ' 启用客户端侧速度限制 (家庭网络建议开启)',
        'Note: 1 KB/s or KBps (Kilo Bytes per Second) is equivalent to 8 Kb/s or Kbps (Kilo Bits per Second). Internet speeds are typically advertised as the latter, so make sure you use the right one. Do not set this higher than the upload bandwidth of your internet connection.':
            '注意：1 KB/s 或 KBps (千字节每秒) 相当于 8 Kb/s 或 Kbps (千比特每秒)。Internet 速度通常被宣传为后者，因此请确保使用正确的速度。您不应将此设置为高于 Internet 连接的上行带宽。',

        'Maximum Disk Cache Size': '最大磁盘缓存大小',
        'How much disk space to reserve for this client. Must be at least 10 GiB, but the more you assign the better your client will perform. The reserved space must always be available.':
            '希望为此客户端保留多少磁盘空间。最少 10 GiB，但是保留的越多，客户端表现得更好。保留空间必须始终可用。',
        'Static Range allocation is limited to 1 per 250 MiB of disk space.':
            '静态范围分配限制为每 250 MiB 磁盘空间 1 组。',
        ' Verify cache integrity on next startup': ' 下次启动时验证缓存完整性',
        ' Remove static ranges if necessary': ' 如有必要，删除静态范围',

        'Advanced Settings': '高级设置',
        'The settings below are optional advanced settings.': '以下设置项为可选的高级设置',

        'Reset Client Key': '重置客户端 Key',
        'If you believe your client key has been compromised, you can reset the key by checking this box. You will have to re-enter the key the next time the client starts.':
            '如果您认为您的客户端 Key 已泄露，可以通过选中复选框来重置密钥。下次客户端启动时，您必须重新输入密钥。',
        ' Reset Client Key': ' 重置客户端 Key',

        'Hourly Bandwidth Limit': '每小时流量限制',
        'Not Set': '未设置',
        ' MBytes/hour': ' MB/小时',

        'Minimum space to leave on disk': '最小磁盘预留空间',
        'If this value is set, the client will stop running if the free space on the disk decreases below this value. The client will exit if free space drops below 1 GiB even if this is not set.':
            '如果设置了此值，则当磁盘上的可用空间低于此值时，客户端会停止运行。即使未设置，当可用空间低于 1 GiB 时，客户端也会退出。',

        Scheduler: '运行计划',
        'The scheduler allows you to specify periods of time where the client is operating with lower speed limits.':
            '运行计划允许您指定客户端以较低速度限制运行的时间段。',
        'Click here to modify the schedule of this client': '修改此客户端的运行计划',

        'Static Ranges': '静态范围',
        'Your client will be assigned ranges of files to cache and serve. This toggle clears these ranges. ':
            '您的客户端会被分配到一段文件范围用于缓存和提供服务。此复选框用于重置这些范围。',
        'DO NOT DO THIS UNLESS YOU LOST YOUR CACHE. IT WILL NOT FIX OTHER CLIENT ISSUES. DOING THIS REGULARLY WILL REVOKE YOUR CLIENT.':
            '除非您丢失了缓存，否则不要执行此操作。它不会修复客户端的其他任何问题。定期执行此操作将吊销您的客户端。',
        'This client currently has ': '此客户端当前被分配了 ',
        ' static range(s) assigned:': ' 组静态范围：',
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

        '\n\t\tChanges will be applied within roughly two minutes. Changes to disk space will not take effect until next restart.\n\t\t':
            '更改将在大约两分钟内生效。对磁盘空间的更改将在下次重新启动时生效。',
        'Apply Settings': '应用设置',
        '[Back to Overview]': '[返回总览]',
    },
    [
        [
            /^This is the maximum speed the client can use to serve files, measured in kilobytes per second. Must be at least ([\d.]+) ([KMGTP]B)\/s$/,
            '这是客户端可以用来提供文件的最大速度，以每秒千字节为单位。必须至少为 $1 $2/s。',
        ],
        [
            /^This must be at least ([\d.]+) ([KMGTP]B)\. We recommend at least 1 GB disk per 25 KByte\/s bandwidth, or 5 GB for every MBit\/s, but more is always better.$/,
            '至少为 $1 $2。我们建议为每 25 KB/s 带宽保留至少 1 GB 磁盘，或每 Mbps 带宽 5 GB 磁盘，但越多越好。',
        ],
        [
            /^The number of megabytes this client is allowed to send every hour. Leave at 0 to limit with max speed alone. Must be at least ([\d.]+) ([KMGTP]B) if set.$/,
            '此客户端每小时允许发送的最大数据量。保留为 0 表示仅限制最大速度。若设置，则必须至少为 $1 $2。',
        ],
        [/^([\d.]+) ([KMGTP]B)\/hour$/, '$1 $2/小时'],
        [/^([\d.]+) ([KMGTP]B)\/s$/, '$1 $2/s'],
    ],
);

merge(
    /^\/hentaiathome\.php\?.*act=schedule/,
    undefined,
    {
        'The scheduler allows you to specify periods of time where the client is operating with lower speed limits. The speed limit cannot be set higher than the default entry. To change the default entry, alter the Maximum Burst Speed on the Settings page.':
            '运行计划允许您指定客户端以较低速度限制运行的时间段。速度限制不能高于默认规则。要更改默认规则，请更改设置页面上的“最大并发速率”。',
        'To add a new scheduling entry, simply use the row at the bottom. Enter the required values and make sure that Active is checked, then hit Apply Schedule. Repeat to add more than one entry. You can have up to 9 entries per client, excluding the default entry. In case of overlap, the schedule with the highest granularity will always be applied.':
            '要添加新的规则，只需使用最后一行。输入所需的值并确保选中“启用”，然后点击“保存运行计划”。重复以上步骤以添加多个规则。在默认规则之外，每个客户端最多可以有 9 个规则。在重叠的情况下，将始终应用具有最高粒度的规则。',
        Active: '启用',
        Mon: '一',
        Tue: '二',
        Wed: '三',
        Thu: '四',
        Fri: '五',
        Sat: '六',
        Sun: '日',
        'Start Hour': '开始时间',
        'End Hour': '结束时间',
        'Burst Speed': '并发速率',

        'Delete Rule': '删除规则',
        'Add Rule': '添加规则',
        'Save Schedule': '保存运行计划',

        '[Back to Settings]': '[返回设置]',
    },
    [
        [/^Modify Schedule for Client (\d+) \((.*?)\)$/, '修改客户端 $1 ($2) 的运行计划'],
        [
            /^All schedule times are in UTC. As a reference, the current UTC time is (.*?)\.$/,
            (s, t) => `所有计划时间均为 UTC。作为参考，现在的 UTC 时间是 ${t.replace(/\s/g, '\xA0')}。`,
        ],
    ],
);
