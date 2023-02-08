import { merge } from '../helper';

merge(
    /^\/watched/,
    undefined,
    {
        'Watched Tag Galleries': '关注的标签',
        'You do not have any watched tags. You can change your watched tags from ':
            '您还没有关注任何标签。可在此处修改关注的标签：',
    },
    [[/^Showing results for ([\d,]+) watched tags?$/, '关注的 $1 个标签的结果']],
);
