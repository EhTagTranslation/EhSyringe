import { merge } from '../helper';

merge(
    /^\/\?.*f_shash=.*$/,
    undefined,
    {
        'Showing results for file:': '正在显示以下文件的搜索结果：',
        'Similarity Scan was disabled for this search. You must start a new search to alter this.':
            '在本次搜索中，相似性查询已禁用。要更改相似性查询设置，你必须重新搜索。',
        'Similarity Scan was enabled for this search. You must start a new search to alter this.':
            '在本次搜索中，相似性查询已启用。要更改相似性查询设置，你必须重新搜索。',
        'No file was uploaded, or the uploaded file was invalid.': '没有上传文件，或上传的文件无效',
        'The uploaded file was detected as monotone. Only exact file matches are displayed.':
            '上传的文件被检测为单色图，仅显示完全匹配的文件',
    },
    [],
);
