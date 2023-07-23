import { merge } from '../helper';

const data = {
    'Gallery List': '图库列表',
    'Manage Folders': '管理文件夹',
    'Create Gallery': '创建图库',
    'Create New Gallery': '创建新图库',

    'Unpublished Galleries': '未发布图库',
    'Published Galleries': '已发布图库',
    'Empty Galleries': '空图库',
    'Gallery Name ': '图库名称',
    'Date Added ': '添加时间 ',
    Files: '文件数',
    'Public Category': '发布类别',
    'Available Actions': '操作',
    View: '查看',
    Manage: '管理',
    Publish: '发布',
    Disown: '脱离关系',
    'Collapse Open Folders': '折叠文件夹',
    '+ All': '+ 全选',
    '- All': '- 全不选',
    'Loading folder, please wait...': '正在加载文件夹，请稍候...',
    'Set public category for selected galleries: ': '设置选中的发布分类: ',
    'Move selected galleries to folder: ': '移动到文件夹: ',
    Go: '执行',

    'Folder Name': '文件夹名称',
    '(No folders have been added yet.)': '(尚未创建文件夹)',
    'Display Order': '显示顺序',
    Delete: '删除',
    'New folder name': '新文件夹名称',
    'Create Folder': '创建文件夹',
    'Save and Auto-Reorder': '保存并自动排序',
    'Save Changes': '保存更改',
    'Saving...': '保存中...',

    'New Gallery': '新图库',

    'Main Gallery Title': '主标题',
    'The main english or romanized title for this gallery.': '图库的主标题 (英文或罗马音)。',
    'Main gallery title (English Script)': '主标题 (英语)',

    'Japanese Script Title': '日文标题',
    'The original title in Japanese script, if applicable.': '原始的日文标题 (如果有)。',
    'Original gallery title (Japanese Script) (Optional)': '原始标题 (日语) (可选)',

    'Gallery Category': '图库分类',
    'The publicly listed category for this gallery.': '图库在公开列表中所属的分类。',
    '(Private / Unlisted)': '(私有 / 不公开)',

    'Gallery Language': '图库语言',
    'The primary language for this gallery. Can only be changed here for new unpublished galleries; set with tags for published/updated galleries.':
        '图库的主要语言。仅新建立且未发布的图库可更改此选项，已发布/已更新的图库需要通过标签系统更改。',
    Common: '常用',
    'Japanese / No Text': '日语 / 无字',
    Chinese: '汉语',
    English: '英语',
    French: '法语',
    Korean: '韩语',
    Portuguese: '葡萄牙语',
    Russian: '俄语',
    Spanish: '西班牙语',
    Textless: '无字',
    Speechless: '无言',
    'Text Cleaned': '文字清除',
    Others: '其他',
    Albanian: '阿尔巴尼亚语',
    Arabic: '阿拉伯语',
    Bulgarian: '保加利亚语',
    Catalan: '加泰罗尼亚语',
    Cebuano: '宿务语',
    Croatian: '克罗地亚语',
    Czech: '捷克语',
    Danish: '丹麦语',
    Dutch: '荷兰语',
    Esperanto: '世界语',
    Finnish: '芬兰语',
    German: '德语',
    Greek: '希腊语',
    Hindi: '印地语',
    Hungarian: '匈牙利语',
    Indonesian: '印尼语',
    Italian: '意大利语',
    Javanese: '爪哇语',
    Latin: '拉丁语',
    Norwegian: '挪威语',
    Persian: '波斯语',
    Polish: '波兰语',
    Romanian: '罗马尼亚语',
    Serbian: '塞尔维亚语',
    Slovak: '斯洛伐克语',
    Swedish: '瑞典语',
    Tagalog: '他加禄语',
    Thai: '泰国语',
    Turkish: '土耳其语',
    Ukrainian: '乌克兰语',
    Vietnamese: '越南语',
    'Official / Textless': '官方 / 无字',
    'This was officially published in this language, or the gallery has no text.': '官方发布于此语言，或者图库无字',
    Translated: '翻译',
    'This is a fan translation based on the original text.': '基于原始文字翻译',
    Rewrite: '改写',
    'This is a fan rewrite with new made-up text.': '使用新的文字改写',

    'Gallery Folder': '图库文件夹',
    'The folder this gallery will be displayed under in the uploader gallery list. This is only used to help you organize your gallery uploads.':
        '图库文件夹仅在上传者的图库列表中显示，仅用于帮助整理上传的图库。',
    Unsorted: '未分类',
    'or new folder: ': '或新建文件夹：',

    'Uploader Comment': '上传者评论',
    'Any comments or additional relevant information for this gallery. This will always show up as the topmost comment, and cannot be voted down.':
        '关于此图库的任何评论或其他相关信息。将始终显示在评论的最顶部，并且不能投票。',
    'You can write an optional uploader comment here.': '您可以在此处添加上传者评论。(可选)',

    'Date Added:': '添加时间：',
    'Not created yet': '尚未创建',
    'Date Posted:': '发布时间：',
    'Not published yet': '尚未发布',
    'Uploaded Files:': '上传文件数：',
    'Total Filesize:': '总文件大小：',
    '(empty)': '(空白)',
    'Parent Gallery:': '父级图库：',
    'Child Gallery:': '子图库：',
    'Expunged:': '删除：',
    'Visible:': '可见：',
    'No (Unpublished)': '否 (未发布)',
    'Show Public Gallery': '查看图库',
    'Show Gallery Stats': '查看统计',
    'Delete Gallery': '删除图库',
    'Disown Gallery': '脱离与图库的关系',

    'I have read and agree with the ': '我已阅读并同意',
    'Publish Gallery': '发布图库',

    'Upload Files': '上传文件',
    'Accepted Images: JPG < 20 MB, PNG < 50 MB, GIF < 10 MB. Accepted Archive Formats: ZIP. Max Resolution: 20000 x 20000.':
        '图像：JPG < 20 MB, PNG < 50 MB, GIF < 10 MB；归档：ZIP。最大分辨率：20000 x 20000。',
    'Max 2,000 files and 10 GB per gallery. Do not upload more than 500MB at a time, less if you have a slow connection.':
        '每个图库最多包含 2000 张图像或 10 GB。一次上传的大小不应超过 500 MB，如果连接速度较慢，可以尝试以更小归档上传。',
    'Start Upload': '开始上传',
    'Select one or more image or archive files and click Start Upload to add files to this gallery.':
        '选择一个或多个图像或归档文件，然后点击“开始上传”，以添加文件到此图库。',
    'Uploading...': '上传中...',
    'Starting upload...': '开始上传...',
    'Finished processing ': '已处理 ',
    ' of ': ' / ',
    'Processing...': '正在处理...',
    'Processing ': '正在处理 ',
    'Finishing backend sync...': '正在完成后端同步...',
    '\n\t\tNo files have been added yet\n\t\t': '尚未添加任何文件',
    'Added ': '已添加 ',
    'Revert Changes': '撤销更改',
    'Apply Changes': '应用更改',

    'Automatic Resorting': '自动排序',
    'Select a sorting method...': '选择排序方式...',
    'Remove Exact Duplicates': '删除完全重复的图像',
    'Natural Sort': '自然排序',
    'Lexical Sort': '字典排序',
    'Time Added (Recent First), then Natural Sort': '按添加时间 (最近的在前)，然后按自然排序',
    'Time Added (Recent Last), then Natural Sort': '按添加时间 (最近的在后)，然后按自然排序',
    'Time Added (Recent First), then Lexical Sort': '按添加时间 (最近的在前)，然后按字典排序',
    'Time Added (Recent Last), then Lexical Sort': '按添加时间 (最近的在后)，然后按字典排序',
    'Time Added (Recent First), then Current Order': '按添加时间 (最近的在前)，然后按当前顺序',
    'Time Added (Recent Last), then Current Order': '按添加时间 (最近的在后)，然后按当前顺序',
    'Perform Auto-Sort': '执行自动排序',
    'Natural Sort will sort filenames with numbers in natural ascending order (8, 9, 10, 11, 12) regardless of padding. This is the recommended auto-sorting method.':
        '自然排序将按数字递增顺序 (8, 9, 10, 11, 12) 排序此图库中的图像。这是推荐的自动排序方式。',
    'Lexical Sort will sort filenames with numbers in strict lexicographic order (1, 10, 11, 12, 2). Unless numbers are zero-padded, this can lead to unexpected results.':
        '字典排序将按字典顺序 (1, 10, 11, 12, 2) 排序此图库中的图像。若数字不包含前导 0，使用此方式会导致错误的结果。',
    'Time Added Sort will sort the pages based on the creation time of the gallery to which they were first added. For example, sorting by Time Added (Recent First) will sort any files that were added to the current gallery first, followed by the files first added to the previous version of the gallery, and so on.':
        '按添加时间排序将按照图像第一次添加到图库的时间进行排序。例如，按添加时间 (最近的在前) 排序将按照图像第一次添加到当前图库的时间进行排序，然后按照图像第一次添加到上一个版本图库的时间进行排序，以此类推。',
    'Note that you can always delete the updated gallery and start over if you make a mistake.':
        '请注意，如果您犯了错误，可以随时删除更新后的图库并重新开始。',

    'Please confirm that you wish to publish the gallery:': '请确认您希望发布图库：',
    'Doing so will lock it for new file additions and modifications. If you wish to add or replace files in this gallery later, a copy will be created for this purpose. Published galleries can no longer be deleted, but you can disown them after a week.':
        '发布后将锁定图库，不再允许添加或修改图像。如果您希望在发布后继续添加或替换图像，则需要创建一个图库的新副本。发布后的图库无法删除，但您可以在一周后与其脱离关系。',
    'The gallery was successfully published. It will take a few minutes before it becomes publicly listed.':
        '图库已成功发布，将在几分钟后被列入公共图库列表。',
    'You will be returned to the Management Interface momentarily.': '您将在几秒后返回管理界面。',
    '(Click here to continue)': '(点此继续)',
    'Please wait...': '请稍候...',

    'This gallery has been published, and images can therefore no longer be added, deleted or rearranged.':
        '此图库已经发布，因此不能再添加、删除或重新排序图像。',
    'You can create an editable copy of this gallery by clicking the button below. This new version will be linked in':
        '您可以通过点击下方的按钮来创建一个此图库的可编辑副本。新的副本',
    'as a child gallery of the currently published one, and will also link back to the old gallery as its parent.\n':
        '将作为子图库关联到当前图库，同时新图库也会将当前图库关联为父图库。',
    'The old gallery will remain until the new one is published. Updates that remove valid content will be reverted.':
        '旧图库将保留到新图库发布。恶意删除有效内容的更改会被还原。',
    'Create New Version': '创建新版本',

    'A new version of the gallery was successfully created. The previous version will remain publicly listed while you make updates to this version.':
        '新版本的图库已成功创建。旧版本将保留到新版本发布。',
    'To cancel and keep the previous version, simply delete this gallery.': '要取消并保留旧版本，只需删除此图库。',

    'Please confirm that you wish to delete this unpublished gallery.': '请确认您希望删除此未发布的图库。',
    'This action cannot be undone.': '此操作无法撤销。',
    'The gallery was successfully deleted.': '图库已成功删除。',

    'Please confirm that you wish to disown this gallery. You will no longer be publicly listed as the uploader unless the gallery was published in the last week, and you will not be able to make further changes to it.':
        '请确认您希望与此图库脱离关系。在一周后，您将不再被公开列为上传者。并且您将不能再对其进行修改。',

    'Gallery not found.': '图库未找到。',
    'Rate limitation for new posters is in effect. You have to wait a while before you can post more galleries.':
        '针对新上传者的图库发布速率限制已生效，您必须等待一段时间才能继续发布图库。',
    'You cannot publish an empty gallery.': '您不能发布一个空图库',
    'You must agree with the Terms of Service to continue.': '您必须同意服务条款才能继续',
    'You must give the gallery a title to continue.': '您必须给图库命名才能继续',
    'Apply or revert the active reorder before continuing.': '您必须应用或还原当前的排序才能继续',
};

const regexData: Array<[RegExp, string]> = [
    [/^Uploading: (\d+)%$/, '上传中：$1%'],
    [/^ images? so far\.$/, ' 张图像。'],
    [/^ images? so far$/, ' 张图像'],
    [/^ new images? to the gallery. /, ' 张新图像。'],
    [/^ uploaded files?, added $/, ' 个文件，已添加 '],
    [/You have added a total of $/, '您目前总共添加了 '],
    [/^Category of (.*?) can no longer be changed.$/, '无法更改 $1 的分类。'],
];

merge(/^\/upld\//, undefined, data, regexData);
merge(/^\//, 'upld.e-hentai.org', data, regexData);
merge(/^\//, 'upload.e-hentai.org', data, regexData);
