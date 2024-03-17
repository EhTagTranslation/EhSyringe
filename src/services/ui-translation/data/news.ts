import { merge } from '../helper';

merge(
    /^\/news\.php/,
    undefined,
    {
        'Site Status': '网站状态',

        'Lately we have been seeing a surge of old accounts with weak/compromised passwords being taken over by spammers, causing them to get banned.':
            '最近我们看到了大量旧账户被垃圾邮件发送者接管，这些账户的密码较弱或已被泄露，导致它们被封禁。',
        'If you still use a weak password or a password you ever used anywhere else, you need to change it as soon as possible.':
            '如果你仍在使用较弱的密码或曾在其他地方使用过的密码，你需要尽快更改它。',
        'We will ': '如果你忽略了这个警告并且发生了这种情况，我们将',
        not: '不',
        ' manually restore access to your account if you ignore this warning and it happens to you.':
            '会手动恢复你的账户访问权限。',

        'Scheduled Downtime & Maintenance': '计划停机和维护',
        'No maintenance is currently ongoing or scheduled.': '目前没有正在进行或计划中的维护。',

        'Automated Monitoring Status': '自动监控状态',
        'No server issues have been detected by the monitoring system.': '监控系统未检测到服务器问题。',

        'Site Changelog': '网站更新日志',
        'Changelogs: \xA0 ': '更新日志：',

        'Show Older News': '显示更早的新闻',
    },
    [
        [/^Last Monitoring Update: (\d\d\d\d-\d\d-\d\d \d\d:\d\d) UTC$/, '最后监控更新：$1 UTC'],
        [/^Show (\d+) comment(s)?$/, '显示 $1 条评论'],
        [/^Posted (.+?) UTC$/, '发布于 $1 UTC'],
    ],
);
