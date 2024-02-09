import { merge } from '../helper';

merge(/^\/mytags/, undefined, {
    'New Tagset': '新建标签集',
    ' Enable': ' 启用',
    '#default': '#默认',
    'Enter a single tag to flag, watch or hide': '输入要标记、关注或隐藏的标签',
    ' Watched': ' 关注',
    ' Hidden': ' 隐藏',
    'Action:': '操作：',
    'Delete Selected': '删除选中项',
    'Change Tagset:': '改变标签集：',
    'Confirm Delete': '确认删除',
    'Confirm Move': '确认移动',
    'Select All': '全选',
    'Enable flagging and watching for tags in this set': '启用此标签集中标签的标记和关注',
    'Watch galleries with this tag': '关注带有此标签的图库',
    'Hide galleries with this tag': '隐藏带有此标签的图库',
    'Default tag color for this tagset. Tags in this set that do not have a set flag color will use this color. A default color will be used if neither is set.':
        '此标签集的默认标签颜色。如果此标签集中的标签没有设置颜色，则使用此颜色。如果两者都没有设置，则使用默认颜色。',
    '(optional) The weight of this tag. This is used to order flagged tags if several are present, as well as calculating the contribution of this tag towards the soft tag filter and watching threshold.':
        '(可选) 此标签的权重。如果存在多个标签，则用于对标记的标签进行排序，同时也用于计算此标签对于软标签过滤器和订阅的权重。',
});
