import { merge } from '../helper';

merge(
    /^\/bitcoin\.php/,
    undefined,
    {
        'Bitcoin Donation': '比特币捐款',

        '\n\t\tBitcoin (BTC) and Bitcoin Cash (BCH) are decentralized virtual currencies. This page allows you to donate these coins from an exchange service or a local wallet, track the confirmation process of the transaction, and apply the donated coins as a USD donation or Adopt-a-Server slots. This is not a custodial service; all coins sent to these addresses are considered donated to this site and cannot be withdrawn. ':
            '\n\t\t比特币 (BTC) 和比特币现金 (BCH) 是去中心化的虚拟货币。本页面允许您从交易所或本地钱包捐赠并跟踪交易过程，并能够将捐赠的虚拟货币作为美元捐赠或领养服务器。这不是一个保管服务，所有发送到这些地址的虚拟货币都被认为是捐赠给本网站的，无法撤回。',
        'Read this thread for more information about donating and how to buy coins':
            '阅读此帖子以了解更多关于捐赠和如何购买虚拟货币的信息',

        ' Bitcoin (BTC)': ' 比特币 (BTC)',
        ' Bitcoin Cash (BCH)': ' 比特币现金 (BCH)',

        'Generate an address first...': '请先生成地址',
        'Not Created - Click To Generate': '未创建 - 点击生成',
        'Your Bitcoin (BTC) Donation Wallet Address': '您的比特币 (BTC) 捐赠钱包地址',
        'IMPORTANT: ONLY USE THIS ADDRESS FOR BITCOIN (BTC)': '重要提示：只能将此地址用于比特币 (BTC)',
        'OTHER CRYPTO SENT TO THIS ADDRESS WILL BE LOST': '发送到此地址的其他类型加密货币都将丢失',
        'Your Bitcoin Cash (BCH) Donation Wallet Address': '您的比特币现金 (BCH) 捐赠钱包地址',

        'If your wallet cannot send to this address, ': '如果您的钱包无法发送到此地址，请',
        'switch to legacy addresses': '切换到传统地址',
        'We automatically ': '当旧的地址被使用时，我们会自动',
        'generate a new address': '生成一个新的地址',
        ' when the old one is used. You will still be credited if you reuse recent addresses, but please use the currently displayed address whenever possible.':
            ' 。如果您重复使用最近的地址，仍然会被计入，但请尽可能使用当前显示的地址。',

        'You can only manually create a new address once every 24 hours.': '每 24 小时，您只能手动创建一次新地址。',

        'Send a Bitcoin (BTC) Wallet Address PM': '私信发送比特币 (BTC) 钱包地址',
        'Send a Bitcoin Cash (BCH) Wallet Address PM': '私信发送比特币现金 (BCH) 钱包地址',
        'You can use this form to send a private message from the gallery system with your wallet address. This guarantees that a given wallet address belongs to you and that it exists in the E-Hentai system.':
            '您可以通过此表单以图库系统 (Gallery System) 的名义发送一条包含钱包地址的私信。这样能够保证此钱包地址属于您，并存在于 E-Hentai 系统中。',
        'Member name: ': '收件人：',
        Send: '发送',
        'You already sent a wallet message to that member.': '您已经向此用户发送了包含钱包地址的私信。',
        'Member not found.': '未找到此用户。',

        'Recent Bitcoin (BTC) Donations': '最近的比特币 (BTC) 捐赠',
        'Recent Bitcoin Cash (BCH) Donations': '最近的比特币现金 (BCH) 捐赠',
        'New donations will typically show up here in less than two minutes.': '新的捐赠通常会在两分钟内显示在下方。',
        'It will show as ': '它们会被标记为 ',
        ' until it has been included in a block and has two confirmations. This typically takes less than an hour, but can take longer in some cases. When it has been marked as ':
            '，直到被纳入一个区块并达到两个确认。这通常不需要一小时，但在某些情况下可能会花费更长时间。只有当状态变更为 ',
        ', you can apply it below to make it take effect.': ' 时才可以通过下方按钮完成捐赠。',
        'No transactions in the past year.': '在过去一年中没有交易',
        Pending: '等待中',
        Accepted: '已接受',

        'Available To Apply: ': '可用余额：',
        ' \xA0 \xA0 \xA0 Donation Total: ': ' \xA0 \xA0 \xA0 总捐款额：',
        ' \xA0 \xA0 \xA0 Adopt-a-Server Days: ': ' \xA0 \xA0 \xA0 领养服务器天数：',

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

        'The donated coins are applied as the equivalent value in USD at the time of your choosing, using an inflated rate which is':
            '捐赠的虚拟货币在您使用时会以最近平均历史价格作为汇率转换为等值的美元。',
        'calculated from the recent average historic value. In order to minimize unexpected price fluctuations, the site rate will':
            '为减少意外的价格波动，网站的汇率永远不会急剧下降，',
        'never drop sharply, but adjusts slowly over time if the real-world rate is more than 10% below the site rate.':
            '但如果实际汇率比网站的低 10% 以上，则会随着时间推移缓慢调整。',
        'The conversion rates right now are ': '当前汇率：',
        ' for Bitcoin, and ': ' (比特币) \xA0 ',
        ' for Bitcoin Cash.': ' (比特币现金)',

        'Donation Level': '捐赠等级',
        'EXP Bonus': '经验加成',
        'Daily Bonus': '每日奖励',
        'Daily Hath': '每日 Hath',
        'Free Archives': '免费档案配额',
        'You did not donate anything yet, but we still love you.': '您还没有捐赠，但我们仍然爱您。',
        'Bronze Star': '铜星',
        'Silver Star': '银星',
        'Gold Star': '金星',
        'Tri Star': '三星',
        'Quint Star': '五星',
        'Septua Star': '七星',
        'Honorary Catgirl': '荣誉猫娘',

        'Bitcoin (BTC) Spending History': '比特币 (BTC) 消费历史',
        'Bitcoin Cash (BCH) Spending History': '比特币现金 (BCH) 消费历史',
        'No BCH have been applied yet.': '目前还没使用 BCH',
        'No BTC have been applied yet.': '目前还没使用 BTC',
        'Donation Log': '捐赠日志',
        'Adopt-a-Server Log': '服务器领养日志',
        'No adopted slots': '目前还没有领养',
    },
    [
        [/^Refunded (.*?) Hath/, '已退还 $1 Hath'],
        [/^(\$.*?) Donation$/, '捐赠 $1'],
        [/^A wallet address PM was sent to user (.+?) \(uid=(\d+)\)$/, '您的钱包地址已私信发送给 $1 (UID $2)。'],
        [/^Awarded for a total donation of (\$\d+).$/, '授予的总捐赠额为 $1。'],
        [/^(\d+) GB \/ week$/, '$1 GB / 周'],
        [/^Catgirl Lv.(\d)$/, '猫娘 Lv.$1'],
        [/^Insufficient (BCH|BTC) available.\s?/, '$1 余额不足。'],
        [/You have ([\d.]+) (BCH|BTC) pending, but these need to be confirmed first.$/, '您有 $1 $2 待确认，请等到确认完成后再操作。'],
    ],
);
