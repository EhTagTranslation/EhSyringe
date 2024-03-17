import { merge } from '../helper';

merge(
    /^\/archiver\.php/,
    undefined,
    {
        'Current Funds:': '现有资金',
        'Estimated Size: \xA0 ': '预计大小：',
        'Download Cost: \xA0 ': '下载费用：',
        'Free!': '免费！',
        'Insufficient Funds': '余额不足',
        'Download Original Archive': '下载原始档案',
        'Download Resample Archive': '下载重采样档案',
        original: '原始',
        resample: '重采样',
        ' download of this archive on ': '档案下载，时间：',
        cancel: '取消',

        'Locating archive server and preparing file for download...': '定位归档服务器并准备下载文件...',
        '(this can take several minutes)': '(这可能需要几分钟时间)',
        'Please wait...': '请稍候...',
        Close: '取消',

        'The file is already being processed. I will now wait for this file to finish. Please contact staff if this does not resolve itself within a few minutes.':
            '该文件已在处理中。我将等待该文件完成。如果几分钟后问题未解决，请联系工作人员。',
        'Click here if your browser does not continue automatically': '如果您的浏览器没有自动继续，请点击此处',

        'H@H Downloader': 'H@H 下载器',
        'N/A': '不适用',
        Original: '原图',
        Free: '免费',

        'You must have a H@H client assigned to your account to use this feature.':
            '您必须拥有 H@H 客户端才能使用此功能',
        'Your H@H client appears to be offline.': '您的 H@H 客户端处于离线状态',
        'Turn it on, then try again.': '请启动 H@H 客户端后重试',
        'Downloads should start processing within a couple of minutes.': '下载会在几分钟内开始',
    },
    [
        [/^You unlocked an? $/, '已解锁'],
        [/^An original resolution/, '原始分辨率'],
        [/^A (\d+x) resolution/, '$1 分辨率'],
        [/ download has been queued for client $/, '的下载请求已添加到下载队列，目标客户端 '],
    ],
);

merge(/^\/archive\//, '*.hath.network', {
    'The file was successfully prepared, and is ready for download.': '文件已准备就绪，可供下载',
    'Click Here To Start Downloading': '点击此处开始下载',
    'You can also copy this link to a download manager.': '您也可以将链接复制到下载软件中',
});
