import { merge } from '../helper';

merge(/^\/archiver\.php/, undefined, {
    'Current Funds:': '现有资金',
    'Estimated Size: \xA0 ': '预计大小： ',
    'Download Cost: \xA0 ': '下载费用： ',
    'Download Original Archive': '下载原始档案',
    'Download Resample Archive': '下载重采样档案',
    'H@H Downloader': 'H@H 下载器',
    Original: '原图',
    'Your H@H client appears to be offline.': '你的 H@H 客户端处于离线状态',
    'Turn it on, then try again.': '请启动 H@H 客户端后重试',
});
