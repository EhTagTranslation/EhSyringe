import { merge } from '../helper';

merge(
    /^\/bitcoin\.php/,
    undefined,
    {
        'Bitcoin Donation': '比特币捐款',

        '\n\t\tBitcoin (BTC) and Bitcoin Cash (BCH) are decentralized virtual currencies. This page allows you to donate these coins from an exchange service or a local wallet, track the confirmation process of the transaction, and apply the donated coins as a USD donation or Adopt-a-Server slots. This is not a custodial service; all coins sent to these addresses are considered donated to this site and cannot be withdrawn. ':
            '\n\t\t比特币（BTC）和比特币现金（BCH）是去中心化的虚拟货币。这个页面允许你从交易所或本地钱包捐赠并跟踪交易过程，并将捐赠的虚拟货币作为美元捐赠或领养服务器。这不是一个保管服务；所有发送到这些地址的虚拟货币都被认为是捐赠给本网站的，不能撤回。',
        'Read this thread for more information about donating and how to buy coins':
            '阅读帖子，了解更多关于捐赠和如何购买虚拟货币的信息',

        ' Bitcoin (BTC)': ' 比特币（BTC）',
        ' Bitcoin Cash (BCH)': ' 比特币现金（BCH）',

        'Generate an address first...': '请先生成地址',
        'Your Bitcoin (BTC) Donation Wallet Address': '您的比特币（BTC）捐赠钱包地址',
        'IMPORTANT: ONLY USE THIS ADDRESS FOR BITCOIN (BTC)': '重要提示：仅将此地址用于比特币（BTC）',
        'BITCOIN CASH (BCH) SENT TO THIS ADDRESS WILL BE LOST': '发送到此地址的比特币现金（BCH）将丢失 ',
        'Your Bitcoin Cash (BCH) Donation Wallet Address': '你的比特币现金（BCH）捐赠钱包地址',

        'If your wallet cannot send to this address, ': '如果您的钱包无法发送到此地址，',
        'switch to legacy addresses': '切换到旧地址',
        'We automatically ': '当旧的地址被使用时，我们会自动',
        'generate a new address': '生成一个新的地址',
        ' when the old one is used. You will still be credited if you reuse recent addresses, but please use the currently displayed address whenever possible.':
            ' 。如果你重复使用之前的地址，仍然会被计入，但请尽可能使用当前显示的地址。',

        'You can only manually create a new address once every 24 hours.': '每 24 小时，您只能手动创建一次新地址。',

        'Send a Bitcoin (BTC) Wallet Address PM': '私信发送比特币（BTC）钱包地址',
        'Send a Bitcoin Cash (BCH) Wallet Address PM': '私信发送比特币现金（BCH）钱包地址',
        'You can use this form to send a private message from the gallery system with your wallet address. This guarantees that a given wallet address belongs to you and that it exists in the E-Hentai system.':
            '你可以使用这个表单，以图库系统（Gallery System）的名义发送一条包含钱包地址的私信。这保证了该钱包地址属于你，并且存在于 E-Hentai 系统中。',
        'Member name: ': '收件人：',
        Send: '发送',
        'You already sent a wallet message to that member.': '你已经向该用户发送了包含钱包地址的私信',
        'Member not found.': '用户未找到',

        'Recent Bitcoin (BTC) Transactions': '最近的比特币（BTC）交易',
        'Recent Bitcoin Cash (BCH) Transactions': '最近的比特币现金（BCH）交易',
        'Transactions will typically show up here in less than two minutes.': '交易通常会在两分钟内显示在这里。',
        'They are then ': '然后它们会被',
        ' until they are included in a block and reach two confirmations. This typically takes less than an hour.':
            '直到他们被纳入一个区块并达到两个确认。通常需要不到一个小时。',
        'No transactions in the past year.': '在过去一年中没有交易',
        Pending: '等待',
        Accepted: '已接受',

        'Available To Apply: ': '可用余额：',
        '       Donation Total: ': '       总捐款额：',
        '       Adopt-a-Server Days: ': '       领养服务器天数：',

        'Current Conversion Rate: ': '当前汇率：',

        'Apply BTC as Donation': '使用 BTC 捐款',
        'Apply BCH as Donation': '使用 BCH 捐款',
        'Apply Donation': '我要捐款',

        'Apply BCH as Adopt-a-Server': '使用 BCH 领养服务器',
        'Apply BTC as Adopt-a-Server': '使用 BTC 领养服务器',
        'Select slot duration..': '选择时长..',
        '1 Month @ $10/month $10': '1 个月 @ $10/月 $10',
        '3 Month @ $9/month $27': '3 个月 @ $9/月 $27',
        '6 Month @ $8/month $48': '6 个月 @ $8/月 $48',
        '1 Year @ $7/month $84': '1 年 @ $7/月 $84',
        '2 Year @ $6/month $144': '2 年 @ $6/月 $144',
        '3 Year @ $5/month $180': '3 年 @ $5/月 $180',
        'Apply Slot': '我要领养',

        'The donated coins are applied as the equivalent value in USD at the time of your choosing, using an inflated rate which is':
            '捐赠的虚拟货币在您使用的时候会被等值的转换为美元，',
        'calculated from the recent average historic value. In order to minimize unexpected price fluctuations, the site rate will':
            '根据最近平均历史价格作为汇率，以减少意外的价格波动，',
        'never drop sharply, but adjusts slowly over time if the real-world rate is more than 10% below the site rate.':
            '如果现实世界的汇率比网站的低 10% 以上，网站的汇率不会急剧下降，会随着时间的推移缓慢调整。',
        'The conversion rates right now are ': '现在的汇率是：',
        ' for Bitcoin, and ': '（比特币 BTC） ',
        ' for Bitcoin Cash.': '（比特币现金 BCH）',

        'Donation Level': '捐赠等级',
        'EXP Bonus': '经验加成',
        'Daily Bonus': '每日奖金',
        'Daily Hath': '每日 Hath',
        'Free Archives': '免费档案配额',
        None: '无',
        'You did not donate anything yet, but we still love you.': '你还没有捐赠，但我们仍然爱你。',
        'Bronze Star': '铜星',
        'Awarded for a total donation of $20.': '授予的总捐赠额为 $20',
        '5 GB / week': '5 GB / 周',
        'Silver Star': '银星',
        'Awarded for a total donation of $50.': '授予的总捐赠额为 $50',
        '10 GB / week': '10 GB / 周',
        'Gold Star': '金星',
        'Awarded for a total donation of $100.': '授予的总捐赠额为 $100',
        '20 GB / week': '20 GB / 周',
        'Tri Star': '三星',
        'Awarded for a total donation of $300.': '授予的总捐赠额为 $300',
        '40 GB / week': '40 GB / 周',
        'Quint Star': '五星',
        'Awarded for a total donation of $500.': '授予的总捐赠额为 $500',
        '60 GB / week': '60 GB / 周',
        'Septua Star': '七星',
        'Awarded for a total donation of $700.': '授予的总捐赠额为 $700',
        '80 GB / week': '80 GB / 周',
        'Honorary Catgirl': '荣誉猫娘',
        'Awarded for a total donation of $1000.': '授予的总捐赠额为 $1000',
        '100 GB / week': '100 GB / 周',

        'Bitcoin (BTC) Spending History': '比特币（BTC）的消费历史',
        'Bitcoin Cash (BCH) Spending History': '比特币现金（BCH）的消费历史',
        'No BCH have been applied yet.': '目前还没使用 BCH。',
        'No BTC have been applied yet.': '目前还没使用 BTC。',
        'Donation Log': '捐赠日志',
        'Adopt-a-Server Log': '领养服务器日志',
        'No adopted slots': '目前没有使用',
        'Not Created - Click To Generate': '未创建 - 点击生成',
    },
    [
        [/Refunded (.*?) Hath/, '退还 $1 Hath'],
        [/^(\$.*?) Donation/, '捐赠 $1'],
        [/^A wallet address PM was sent to user (.+?) \(uid=(\d+)\)$/, '你的钱包地址已私信发送给 $1（UID $2）'],
    ],
);
