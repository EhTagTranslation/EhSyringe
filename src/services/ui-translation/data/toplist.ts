import { merge } from '../helper';

merge(/^\/(toplist|home)\.php/, undefined, {
    'Galleries All-Time': '图库总排行',
    'Galleries Past Year': '图库年排行',
    'Galleries Past Month': '图库月排行',
    'Galleries Yesterday': '图库日排行',

    'Uploader All-Time': '上传总排行',
    'Uploader Past Year': '上传年排行',
    'Uploader Past Month': '上传月排行',
    'Uploader Yesterday': '上传日排行',

    'Tagging All-Time': '标签总排行',
    'Tagging Past Year': '标签年排行',
    'Tagging Past Month': '标签月排行',
    'Tagging Yesterday': '标签日排行',

    'Hentai@Home All-Time': 'Hentai@Home 总排行',
    'Hentai@Home Past Year': 'Hentai@Home 年排行',
    'Hentai@Home Past Month': 'Hentai@Home 月排行',
    'Hentai@Home Yesterday': 'Hentai@Home 日排行',

    'EHTracker All-Time': '做种总排行',
    'EHTracker Past Year': '做种年排行',
    'EHTracker Past Month': '做种月排行',
    'EHTracker Yesterday': '做种日排行',

    'Cleanup All-Time': '清理总排行',
    'Cleanup Past Year': '清理年排行',
    'Cleanup Past Month': '清理月排行',
    'Cleanup Yesterday': '清理日排行',

    'Rating & Reviewing All-Time': '评分 & 评论总排行',
    'Rating & Reviewing Past Year': '评分 & 评论年排行',
    'Rating & Reviewing Past Month': '评分 & 评论月排行',
    'Rating & Reviewing Yesterday': '评分 & 评论日排行',
});

merge(/^\/toplist\.php/, undefined, {
    'EHG Toplists': 'EHG 排行榜',
    'Gallery Toplists': '图库排行',
    'Uploader Toplists': '上传排行',
    'Tagging Toplists': '标签排行',
    'Hentai@Home Toplists': 'Hentai@Home 排行',
    'EHTracker Toplists': '做种排行',
    'Cleanup Toplists': '清理排行',
    'Rating & Reviewing Toplists': '评分 & 评论排行',
});

merge(/^\/toplist\.php\?tl=1/, undefined, {
    Published: '发布时间',
    Name: '标题',
    Uploader: '上传者',
});

merge(/^\/toplist\.php\?tl=[2-7]/, undefined, {
    Rank: '排名',
    Score: '得分',
    Name: '用户名',
});
