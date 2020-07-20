import { merge } from '../helper';

merge(/^\/exchange\.php\?/, undefined, {
    'The Hath Exchange': 'Hath 交易',
    'The GP Exchange': 'GP 交易',

    'Last 8 Hours (per kGP)': '最近 8 小时（每 kGP）',
    'Last 24 Hours (per kGP)': '最近 24 小时（每 kGP）',
    'Last 8 Hours (per Hath)': '最近 8 小时（每 Hath）',
    'Last 24 Hours (per Hath)': '最近 24 小时（每 Hath）',

    'Buy Hath': '买进 Hath',
    'Sell Hath': '卖出 Hath',
    'Buy GP': '买进 GP',
    'Sell GP': '卖出 GP',

    '\n\t\t\t\tCount: ': '数量：',
    ' Hath \xA0\n\t\t\t\tBid Price/Hath: ': 'Hath \xA0 买入单价：',
    ' Hath \xA0\n\t\t\t\tAsk Price/Hath: ': 'Hath \xA0 卖出单价：',
    'Buy Hath!': '买进 Hath',
    'Sell Hath!': '卖出 Hath',
    ' kGP \xA0\n\t\t\t\tBid Price/kGP: ': 'kGP \xA0 买入单价：',
    ' kGP \xA0\n\t\t\t\tAsk Price/kGP: ': 'kGP \xA0 卖出单价：',
    'Buy GP!': '买进 GP',
    'Sell GP!': '卖出 GP',

    Spread: '挂单交易',
    'Recent Transactions': '最近成交',
    'Bid (Buyers)': '买单',
    'Ask (Sellers)': '卖单',
    Time: '时间',
    Seller: '卖家',
    Buyer: '买家',
    Volume: '成交量',
    'Unit Cost': '单价',
    High: '最高',
    Low: '最低',
    Avg: '平均',
    Vol: '成交',
});
