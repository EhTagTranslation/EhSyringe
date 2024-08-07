import { merge } from '../helper';

merge(
    /^\/tagjustification\.php/,
    undefined,
    {
        '\nYou have no tags pending approval.\n\n': '您没有待审核的标签。',

        'New Tag Justification': '新建标签申请',
        'Make sure to provide a source for each requested tag whenever possible. ':
            '请尽可能地为每个申请的标签提供来源。',
        'Read this article on how to provide a good source.': '请阅读本文以了解如何提供良好的来源。',
        'If a source cannot be found, elaborate why you still think the tag should be added in the sources field.':
            '如果找不到来源，请在来源一栏中说明您认为应该添加此标签的理由。',
        'If you leave this page without providing the requested information, these tags will be deleted.':
            '如果您没有提供所需的信息就离开了页面，则添加的标签会被删除。',
        'You have provided justification for all of the added tags. You can now ':
            '您已经为所有添加的标签提供了理由。现在您可以 ',
        'return to the gallery': '返回图库',
        ' or close this page.': ' 或关闭此页面。',
        'My Pending Tag Requests': '我的待审核标签申请',
        'Gallery:': '图库：',
        'Tag Name:': '标签：',
        'Namespace:': '命名空间：',
        'Sources:': '来源：',
        'Describe the nature of this tag, and provide link(s) to parody/character reference, official artist/group/cosplayer profile, or anything else you may think is useful to help validate this tag.':
            '请描述此标签的性质，并提供原作/角色的参考来源、官方艺术家/社团/Coser 的主页地址，或其他任何您认为有助于验证此标签的链接。',
        'Comment:': '评论：',
        'Let us know what you changed with this update, or explain why you did not change anything.':
            '请告知您在此次更新中做了哪些修改，或者为什么没有做任何修改。',
        'Save Changes': '保存更改',

        'Tag Name': '标签',
        Namespace: '命名空间',
        Sources: '来源',
        'Last Updated': '最后更新',
        MISSING: '缺失',
        OK: '已提供',
    },
    [
        [
            /^You still need to provide sources for (\d+) tag. If you created it by mistake, write "created by mistake" in the sources field.$/,
            '您还需要为 $1 个标签提供来源。如果您是误添加的标签，请在来源一栏中填写 "created by mistake"。',
        ],
    ],
);
