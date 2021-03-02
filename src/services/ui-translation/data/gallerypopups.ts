import { merge } from '../helper';


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
