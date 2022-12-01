import { merge } from '../helper';

merge(/^\/mytags/, undefined, {
    'New Tagset': '新建标签集',
    ' Enable': '启用',
    '#default': '#默认',
    Save: '保存',
    'Enter a single tag to flag, watch or hide': '输入要标记、关注或隐藏的标签',
    ' Watched': ' 关注',
    ' Hidden': ' 隐藏',
    'Action:': '操作：',
    'Delete Selected': '删除选中项',
    'Confirm Delete': '确认删除',
});
