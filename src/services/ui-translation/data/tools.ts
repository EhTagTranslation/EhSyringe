import { merge } from '../helper';

merge(
    /^\/tools\.php\?.*act=track_expunge/,
    'repo.e-hentai.org',
    {
        'State: \xA0 [': '状态： [',
        All: '全部',
        Expunged: '已删除',
        'Revoked/Rejected': '已撤销/已拒绝',
        'Pending All': '待处理',
        'Pending Expunge': '待删除',
        'Pending Appeal': '待申诉',

        'Type: \xA0 ': '类型： ',
        ' Forbidden': ' 违规内容',
        ' Duplicate': ' 重复',
        ' Replaced': ' 已替换',
        ' Defaced': ' 污损',
        ' \xA0 Involving UID: ': ' \xA0 包含 UID：',
        Go: '查询',

        '< Prev Page': '< 上一页',
        'Next Page >': '下一页 >',
        'There are no recent expunges matching this filter.': '没有符合条件的最近删除记录。',

        Active: '已生效',
        Rejected: '已拒绝',
        Revoked: '已撤销',
        'Pending Expunge (Activating)': '待删除 (生效中)',
        'Pending Expunge (Rejecting)': '待删除 (拒绝中)',
        'Pending Appeal (Activating)': '待申诉 (生效中)',
        'Pending Appeal (Rejecting)': '待申诉 (拒绝中)',
        'Expunge Submitted:': '删除提交时间：',
        'Appeal Submitted:': '申诉提交时间：',
        'Expunge Type:': '删除类型：',
        'Conflict Gallery:': '冲突画廊：',
        'Expunge Activated:': '删除生效时间：',
        'Expunge Rejected:': '删除拒绝时间：',
        'Expunge Revoked:': '删除撤销时间：',
    },
    [
        [/^Forbidden \(([\d+-]+)\)$/, '违规内容 ($1)'],
        [/^Duplicate \(([\d+-]+)\)$/, '重复 ($1)'],
        [/^Replaced \(([\d+-]+)\)$/, '已替换 ($1)'],
        [/^Defaced \(([\d+-]+)\)$/, '污损 ($1)'],
    ],
);

merge(
    /^\/tools\.php\?.*act=track_rename/,
    'repo.e-hentai.org',
    {
        '\nFilter: \xA0\n[': '状态： [',
        All: '全部',
        Renamed: '已重命名',
        Pending: '待处理',
        '] \xA0\nInvolving UID:\n': '] \xA0 包含 UID：',
        Go: '查询',

        '< Prev Page': '< 上一页',
        'Next Page >': '下一页 >',
        'No results found': '没有符合条件的记录。',

        'OrgE:': '原始英文标题：',
        'CurE:': '当前英文标题：',
        'OrgJ:': '原始日文标题：',
        'CurJ:': '当前日文标题：',
        '(blank)': '(空)',
        ' for ': ' 支持 ',
        'by ': '由 ',
    },
    [],
);

merge(
    /^\/tools\.php\?.*act=taglist/,
    'repo.e-hentai.org',
    {
        'Tagging data for user ': '',
        ' (uid=': ' 的标签数据 (UID = ',

        Started: '发起',
        Voted: '投票',
        January: '一月',
        February: '二月',
        March: '三月',
        April: '四月',
        May: '五月',
        June: '六月',
        July: '七月',
        August: '八月',
        September: '九月',
        October: '十月',
        November: '十一月',
        December: '十二月',
        Year: '年度',
        Total: '总计',

        Tag: '标签',
        Score: '权重',
        Gallery: '画廊',
        Timestamp: '时间',
    },
    [
        [/Showing (\d+) recent tags:/, '最近 $1 个标签：'],
    ],
);