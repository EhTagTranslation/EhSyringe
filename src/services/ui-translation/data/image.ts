import { merge } from '../helper';

merge(
    /^\/s\//,
    undefined,
    {
        'Show all galleries with this file': '显示所有包含此图片的图库',
        'Generate a static forum image link': '生成用于论坛的图片链接',
        'Click here if the image fails loading': '重新加载图片',
    },
    [[/Download original (.*?) source/, '下载原图（$1）']],
);
