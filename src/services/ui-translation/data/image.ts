import { merge } from '../helper';

merge(
    /^\/(s|mpv)\//,
    undefined,
    {
        'Show all galleries with this file': '显示所有包含此图像的图库',
        'Generate a static forum image link': '生成用于论坛的图像链接',
        'Click here if the image fails loading': '重新加载图像',

        'Close Image Viewer': '关闭图像查看器',
        'Go Fullscreen - F11 or ESC to cancel': '全屏 - F11 或 ESC 退出',
        'Align Left, Scale Down Only': '左对齐，仅当图像大于浏览器宽度时缩放',
        'Align Center, Scale Down Only': '居中对齐，仅当图像大于浏览器宽度时缩放',
        'Align Center, Scale To Fit': '居中对齐，始终缩放图像以适应浏览器宽度',
        'Show Thumbnail Pane': '显示缩略图侧栏',
        'Hide Thumbnail Pane': '隐藏缩略图侧栏',
        'Reload broken image': '重新加载图像',
        'Open image in normal viewer': '在普通查看器中打开图像',
        'Show galleries with this image': '显示所有包含此图像的图库',
        'Get forum link to image': '生成用于论坛的图像链接',
    },
    [[/^Download original (.*?) source$/, '下载原图 ($1)']],
);
