import { merge } from '../helper';

merge(/^\/logs\.php/, undefined, {
    Date: '日期',
    Amount: '金额',
    Information: '信息',
    'Total Karma: ': '总 Karma：',
    From: '来自',
    Topic: '主题',
    Comment: '附言',
    'Show Older >': '下一页 >',
});
