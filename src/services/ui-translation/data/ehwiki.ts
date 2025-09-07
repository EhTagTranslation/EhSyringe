import { merge } from '../helper';

// 提交此文件时请先登录到 EHWiki
// 并在 https://ehwiki.org/wiki/Special:Preferences#mw-htmlform-i18n 中设置界面语言为“中文（简体）”
// 不要翻译已经被 MediaWiki 翻译过的内容

merge(
    /.*/,
    'ehwiki.org',
    {
        'external links': '外部链接',
        'E-Hentai Forums': 'E-Hentai 论坛',
    },
    [],
);
