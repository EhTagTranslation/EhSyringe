import { merge } from '../helper';

merge(
    /^\/hentaiathome\.php\??$/,
    undefined,
    {
        'Hentai@Home Clients': 'Hentai@Home 客户端',
        'H@H Region': 'H@H 地区',
        'Current Network Load': '当前网络负载',
        'H@H Miss%': 'H@H 丢包率%',
        'Coverage': '覆盖率',
        'Hits/GB': '点击/GB',
        'Quality': '质量',
        'North and South America': '北美洲和南美洲',
        'Europe and Africa': '欧洲和非洲',
        'Asia and Oceania': '亚洲和大洋洲',
        'Global': '全球',

        'Current Network Load shows how much raw bandwidth is currently used to serve images.': '当前网络负载显示当前用于提供图像的原始带宽量。',
        ' This includes requests served by H@H as well as direct requests from the image servers.': '这包括 H@H 服务的请求以及来自图像服务器的直接请求。',
        'H@H Miss% shows the percentage of requests for the region that would have gone to a H@H client if one was available, but where no client was ready to serve the request.': 'H@H 丢包率%显示［如果该区域有一个 H@H 客户端可用，请求将会发送到 H@H 客户端，但没有客户端能为该请求提供服务］的百分比。',
        'Coverage denotes the average number of times a static file range partition can be found within a given region, indicating the total available storage capacity.': '覆盖率可以理解为［在该区域内，一组文件的平均存在次数］，代表着总可用存储容量。',
        'Hits/GB shows the average number of hits per minute per gigabyte of allocated disk space for all online clients in the region for the last 24 hours.': '点击/GB 显示过去 24 小时内该地区所有在线客户端分配的每 GB 磁盘空间每分钟的平均点击次数。',

        'Your Active Clients': '您的活动客户端',
        'To add more clients,': '要添加更多客户端，请',
        'PM Tenboro': '联系 Tenboro',
        '. Make sure to read the requirements first to make sure that you qualify.': '。请务必先阅读要求以确保您符合资格。',
        ' Include the specs for the client in the message, and specify whether it is a home connection or a VPS/Dedicated.': '在消息中包含客户端的规格，并指定它是家庭连接还是 VPS/独立服务器。',
        ' Each client requires its own unique public IPv4 address to run, and must either be reachable directly from the Internet, or have a port forwarded.': '每个客户端都需要拥有唯一的公共 IPv4 地址才能运行，并且必须可以直接从 Internet 访问，或者使用端口转发。',
        ' These are technical requirements, and it is not possible to make any exceptions.': '这些都是技术要求，不可能有任何例外。',

        'Client': '客户端',
        'Status': '状态',
        'Created': '创建于',
        'Last Seen': '最后在线于',
        'Files Served': '提供的文件',
        'Client IP': '客户端 IP',
        'Port': '端口',
        'Version': '版本',
        'Max Speed': '最大速度',
        'Trust': '信任',
        'Hitrate': '点击率',
        'Hathrate': 'Hath 产出率',
        'Country': '国家/地区',
        'Online': '在线',
        'Offline': '离线',
        'min': '分钟',
        'day': '天',

        'If the auto-detected country is wrong, contact Tenboro to have an override applied.': '如果自动检测的国家/地区错误，请联系 Tenboro 以进行更改。',
        ' Include the correct country, client ID and IP address in your message, and make sure to keep your client running.': '在消息中包含正确的国家/地区、客户端 ID 和 IP 地址，并确保您的客户端保持运行。',
        'Having the client set to the wrong country will make it perform worse than it would otherwise do.': '位于错误的国家/地区的客户端的性能表现将不如预期。',
        'Free Archive Quota:': '免费的存档配额',
        'per week': '每周',
        ', measured in a 168-hour sliding window.': '，按照最近 168 小时的在线时间进行计算',
        ' The cap is updated once every hour.': '上限每小时更新一次。',
        ' Clients must have been running for more than 24 hours with a hitrate above 1 to qualify.': '客户端必须保持运行超过 24 小时且点击率高于 1 才能获得资格。',

        'Client Download': '客户端下载',
        'The current version of Hentai@Home is': 'Hentai@Home 的当前版本是',
        '. You can find the release notes for this version ': '。发行说明可以在这里找到（英文） ',
        'here': '>>这里<<',
        'File': '文件',
        'Size': '大小',
        'Please verify that the size and cryptographic hashes correspond to the file you download.': '请验证您下载的文件的大小和哈希值与上方给出的数值相对应。',
        ' For more information about file validation, see these links:': '有关文件验证的更多信息，请参阅以下链接（英文）：',
        'Hentai@Home is an Open Source project released under the GNU General Public Licence v3.': 'Hentai@Home 是在 GNU 通用公共许可证 v3 下发布的开源项目。',
        ' The source code and build scripts for Windows and Linux-like systems can be found above.': 'Windows 和类 Linux 系统的源代码和构建脚本可以在上面找到。'
    },
    [],
);

merge(/^\/hentaiathome\.php\?.*act=settings/, undefined, {}, []);

merge(/^\/hentaiathome\.php\?.*act=schedule/, undefined, {}, [
    [
        /All schedule times are in UTC\. As a reference, the current UTC time is (.*?)\./,
        (s, t) => `所有计划时间均为 UTC。作为参考，现在的 UTC 时间是 ${t.replace(/\s/g, '\xA0')}。`,
    ],

    ]);
