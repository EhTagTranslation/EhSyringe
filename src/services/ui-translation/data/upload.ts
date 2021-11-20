import { merge } from '../helper';

const data = {
    'Published Galleries': '发布图库',
    'Empty Galleries': '空图库',
    'Unpublished Galleries': '未发布的图库',
    'Gallery Name ': '图库名称',
    'Date Added ': '添加时间 ',
    'Public Category': '发布类别',
    'Available Actions': '操作',
    Files: '文件数',
    Unsorted: '未分类',

    'Go To Gallery': '查看图库',
    Stats: '统计',
    Manage: '管理',
    Publish: '发布',
    'Collapse Open Folders': '折叠文件夹',

    'Set public category for selected galleries: ': '设置选中的发布分类: ',
    'Move selected galleries to folder: ': '移动到文件夹: ',

    'Create New Gallery': '创建新图库',
    'Manage Folders': '管理文件夹',
    'Gallery List': '图库列表',
    'Create Gallery': '创建图库',
    'My Galleries': '我的图库',

    'Main Gallery Title': '主标题',
    'The main english or romanized title for this gallery.': '这个图库的主标题, 英文或者罗马音',
    'Japanese Script Title': '日文标题',
    'The original title in Japanese script, if applicable.': '原始的日文标题（如果有）',
    'Gallery Folder': '图库文件夹',
    'The folder this gallery will be displayed under in the uploader gallery list. This is only used to help you organize your gallery uploads.':
        '图库文件夹仅在上传者的图库列表中显示，仅用于帮助整理上传的图库.',
    'or new folder: ': '或新建文件夹：',
    'Uploader Comment': '上传者评论',
    'Any comments or additional relevant information for this gallery. This will always show up as the topmost comment, and cannot be voted down.':
        '关于此图库的任何评论或其他相关信息。将始终显示在评论的最顶部，并且不能投票。',

    'Date Added:': '添加时间：',
    'Date Posted:': '发布时间：',
    'Not created yet': '尚未创建',
    'Not published yet': '尚未发布',
    'Uploaded Files:': '上传文件数：',
    'Total Filesize:': '总文件大小：',
    'Parent Gallery:': '父级图库：',
    'Child Gallery:': '子图库：',
    'Expunged:': '删除：',
    'Visible:': '可见：',
    'No (Unpublished)': '否 (尚未发布)',
    'Show Public Gallery': '查看图库',
    'Show Gallery Stats': '查看统计',
    'Delete Gallery': '删除图库',

    'Make this gallery publicly available as:': '将图库发布到：',
    'I have read and agree with the ': '我已阅读并同意',

    'Upload Files': '上传文件',
    'Accepted Images: JPG < 20 MB, PNG < 50 MB, GIF < 10 MB. Accepted Archive Formats: ZIP. Max Resolution: 20000 x 20000.':
        '图像：JPG < 20 MB, PNG < 50 MB, GIF < 10 MB；归档：ZIP。最大分辨率：20000 x 20000。',
    'Max 2,000 files and 10 GB per gallery. Do not upload more than 500MB at a time, less if you have a slow connection.':
        '每个图库最多包含 2000 张图片或 10GB。一次上传的大小不应超过 500MB，如果连接速度较慢，可以尝试以更小归档上传。',
    'Start Upload': '开始上传',
    'Select one or more image or archive files and click Start Upload to add files to this gallery.':
        '选择一个或多个图像或归档文件，然后点击“开始上传”，以添加文件到此图库。',
    '\n\t\tNo files have been added yet\n\t\t': '尚未添加任何文件',
    'You have added a total of ': '你目前添加了 ',
    ' image so far.': ' 张图片。',
    'Revert All Changes': '撤销所有更改',
    'Apply with Standard Sort': '使用标准排序',
    'Apply with Natural Sort': '使用自然排序',
    'Apply with Current Ordering': '使用当前顺序',
    'Using Standard Sort will reorder the gallery with numbers in lexicographic order (1, 10, 11, 12, 2). Unless numbers are zero-padded, this can lead to unexpected results.':
        '使用标准排序将按字典顺序（1, 10, 11, 12, 2）排序此图库中的图片。如果数字不包含前导 0，此操作将导致错误的结果。',
    'Using Natural Sort will reorder the gallery with numbers in natural ascending order (8, 9, 10, 11, 12) regardless of whether they are padded or not.':
        '使用自然排序将按数字递增顺序（8, 9, 10, 11, 12）排序此图库中的图片，不论是否存在前导 0。',

    'Publish Gallery': '发布图库',

    'Folder Name': '文件夹名称',
    'Display Order': '显示顺序',
    '(No folders have been added yet.)': '（尚未添加文件夹）',
    'Create Folder': '创建文件夹',
    'Save and Auto-Reorder': '保存并自动排序',
    'Save Changes': '保存更改',
    Delete: '删除',
    Cancel: '取消',
    'New folder name': '新文件夹名称',

    'Please confirm that you wish to delete the gallery:': '请确认要删除以下图库',
    'Gallery not found.': '图库未找到。',
    'You do not have access to change that item.': '你没有更改此条目的权限',
};

merge(/^\/upld\//, undefined, data);
merge(/^\//, 'upld.e-hentai.org', data);
