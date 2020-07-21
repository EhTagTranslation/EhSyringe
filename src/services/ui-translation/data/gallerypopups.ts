import { merge } from '../helper';

merge(/^\/gallerypopups\.php\?.*act=expunge/, undefined, {
    'Specify an objective reason why you wish to expunge this gallery.': '请说明要删除此库的客观原因。',
    'None / Withdraw Petition.': '无 / 撤回删除申请。',
    'This gallery is a duplicate of equal or lower quality of an earlier posted, clearly marked gallery.':
        '此图库是早期发布的标记清楚的图库的质量相同或较低的副本。',
    'A newer higher-quality and clearly marked copy of this gallery has been uploaded.':
        '这个图库的更高质量和标记清楚的副本已上传。',
    'This gallery contains either illicit content like child porn or anything else forbidden by the ':
        '这个图库包含非法内容，如儿童色情或其他任何',
    ', or otherwise falls under the ': '禁止的内容，或者符合',
    'Expunge Guidelines': '删除指南',
    ' (specify below).': '（在下方说明）。',
    'Show Expunge Log': '显示删除日志',
    'Enter an explanation for this expunge here. It should include the location of the duplicate or the specific rule being violated.':
        '请输入清除原因和备注。它应包括副本的位置或违反的特定规则。',
    'No expunge petitions have been filed for this gallery': '此图库尚未有删除申诉',
    Back: '返回',
});

merge(/^\/gallerypopups\.php\?.*act=rename/, undefined, {
    'Uploader:': '上传者：',
    'Roman Script': '罗马音',
    'Japanese Script': '日文',
    'Not Set': '未设置',
    'Blank Vote': '空投票',
    ' New': ' 新',
    Submit: '提交',
});

merge(/^\/gallerypopups\.php\?.*act=addfav/, undefined, {
    'Please choose a color to file this favorite gallery under. You can also add a note to it if you wish.':
        '请选择一个颜色标记你的收藏，你也可以加一些备注。',
    'Favorite Note (Max 200 Characters)': '收藏备注（最多 200 字符）',
    'Add to Favorites': '添加到收藏',
    'Remove from Favorites': '从收藏中移除',
    'Apply Changes': '应用更改',
});
