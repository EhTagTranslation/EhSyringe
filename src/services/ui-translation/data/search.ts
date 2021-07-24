import { merge } from '../helper';

merge(
    /^\/\?.*f_shash=.*$/,
    undefined,
    {
        'No file was uploaded, or the uploaded file was invalid.': '没有上传文件，或上传的文件无效',
        'Showing results for file:': '正在显示以下文件的搜索结果：',
        'Similarity Scan was ': '在本次搜索中，相似性查询已',
        enabled: '启用',
        disabled: '禁用',
        ' for this search. You must start a new search to alter this.': '。要更改相似性查询设置，你必须重新搜索。',
        'Perform a new search': '重新搜索',
    },
    [],
);
