import { merge } from '../helper';

merge(
    /^\/tools\/track_expunge/,
    'repo.e-hentai.org',
    {
        'Expunge Tracker': '删除追踪器',

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
        'Conflict Gallery:': '冲突图库：',
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
    /^\/tools\/track_rename/,
    'repo.e-hentai.org',
    {
        'Rename Tracker': '重命名追踪器',

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
    /^\/tools\/tagtrack/,
    'repo.e-hentai.org',
    {
        'Tag Tracker': '标签追踪器',

        ' downed': ' 已清除',
        ' weak': ' 弱小',
        ' active': ' 活跃',
        ' solid': ' 确定',
        ' aged galleries': ' 老旧图库',
        'Only show galleries posted more than three days ago': '只显示三天前发布的图库',
        ' revived tags': ' 重生标签',
        'Only show revived tags': '只显示重生 (之前被清除但是再次出现) 的标签',
        ' exclude expunged': ' 排除已删除图库',
        'Exclude tags on expunged galleries': '排除已删除图库上的标签',
        ' exclude autotags': ' 排除自动标签',
        'Exclude tags placed by autotagger': '排除由系统自动标记的标签',

        'Tag/NS: ': '标签/命名空间：',
        'tag, tagid, or special:namespace': '标签、标签 ID 或 special:命名空间',
        Go: '查询',

        'Show Older >': '显示更早的 >',
        'There are no tags matching this filter.': '没有符合条件的标签。',

        '(Doujinshi) \xA0': '(同人志) \xA0',
        '(Manga) \xA0': '(漫画) \xA0',
        '(Artist CG) \xA0': '(画师CG) \xA0',
        '(Game CG) \xA0': '(游戏CG) \xA0',
        '(Western) \xA0': '(西方) \xA0',
        '(Non-H) \xA0': '(无H) \xA0',
        '(Image Set) \xA0': '(图集) \xA0',
        '(Misc) \xA0': '(杂项) \xA0',

        downed: '已清除',
        weak: '弱小',
        active: '活跃',
        SOLID: '确定',
    },
    [],
);

merge(
    /^\/tools\/taglist/,
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

        'Show Older >': '显示更早的 >',

        'User has no recent tags on public galleries.': '用户最近没有在公开图库上标记过标签。',
        'Filter galleries with assessed bad tagvotes': '筛选具有不良标签投票的图库',
        'There are no recent tag votes assessed as bad.': '最近没有被评定为不良的标签投票。',

        'You have to provide a gid or uid': '您必须提供一个 gid 或 uid',
        'You do not have access to this function.': '您没有权限访问此功能',
    },
    [
        [
            /^User has (\d+) recent tags? on (\d+) public galler(ies|y).$/,
            '用户最近在 $2 个公开图库上标记了 $1 个标签。',
        ],
        [/^Last bad tagvote assessed: /, '最近一次不良标签投票的时间：'],
    ],
);

merge(
    /^\/tools\/tagapprove/,
    'repo.e-hentai.org',
    {
        'Pending Tags': '待审核标签',
        'Approved Tags': '已批准标签',
        'Rejected Tags': '已拒绝标签',

        'There are no  tags of this type': '没有此类标签',

        namespace: '命名空间',
        gallery: '图库',
        creator: '创建者',
        'time created': '创建时间',
        'time updated': '更新时间',
        'time approved': '批准时间',
        'time rejected': '拒绝时间',
        '(missing)': '(缺失)',
        'Show Older >': '显示更早的 >',

        'Tag Name:': '标签名称：',
        'Namespace:': '命名空间：',
        'Tag Group:': '标签组：',
        'Created:': '创建时间：',
        'revision requested': '需要修改',
        'Updated:': '更新时间：',
        'First Tag:': '首次标记：',
        'Tagged On:': '标记次数：',
        'Sources:': '来源：',
        'Pending Moderator Approval': '待 MOD 审核',
        REJECTED: '已拒绝',
        APPROVED: '已批准',
        ' by ': ' 由 ',

        Comments: '评论',
        'There are currently no comments for this request': '当前没有评论',
        'If you have any (useful) information about this tag, you can submit it here.':
            '如果您有任何 (有用的) 关于此标签的信息，可以在此提交。',
        'Submit Comment': '提交评论',
        'Back to list': '返回列表',

        '(flagged for revision)': '(标记为需要修改)',
    },
    [
        [/^Tag Request #(\d+)$/, '标签申请 #$1'],
        [/ \(exists in $/, ' (已存在于 '],
        [/^(\d+) public galler(y|ies)$/, '$1 个公开图库'],
        [/^ on (\d\d\d\d-\d\d-\d\d \d\d:\d\d)$/, ' 于 $1'],
        [/^(\d\d\d\d-\d\d-\d\d \d\d:\d\d) by $/, '$1 由 '],
    ],
);
