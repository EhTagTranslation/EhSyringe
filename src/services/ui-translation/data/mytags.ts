import { merge } from '../helper';

merge(/^\/mytags/, undefined, {
    'Enter a single tag to flag, watch or hide': '输入要标记、关注或隐藏的标签',
    ' Watched': ' 关注',
    ' Hidden': ' 隐藏',
    ' Enable': '启用',
    'Action:': '操作：',
    Save: '保存',
    '#default': '#默认',
    'Select All': '全选',
    'Delete Selected': '删除选中项',
    'Confirm Delete': '确认删除',
});
