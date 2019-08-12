import { EHTDatabase, TagItem, TagList } from '../interface';
import { chromeMessage } from './chrome-message';

interface TagData { tagList: TagItem[]; tagReplace: { [key: string]: string }; }

export function getTagData(): TagData | undefined {
    if ((window as any).tagListStorage && (window as any).tagReplaceDataStorage) {
        return {
            tagList: (window as any).tagListStorage,
            tagReplace: (window as any).tagReplaceDataStorage,
        };
    }

    const tagListStorage = window.localStorage.getItem('tag-list');
    const tagReplaceDataStorage = window.localStorage.getItem('tag-replace-data');
    const tagUpdateTime = parseInt(window.localStorage.getItem('tag-update-time'), 10) || 0;
    const tagSha = window.localStorage.getItem('tag-sha');

    console.info('💉 TAG最后更新时间: ', tagUpdateTime ? new Date(tagUpdateTime) : '不可用');
    console.info('💉 TAG-SHA: ', tagSha ? tagSha : '不可用');

    chrome.storage.local.get((data) => {
        if (
            'tagList' in data &&
            'tagReplaceData' in data &&
            'updateTime' in data
        ) {
            if (tagUpdateTime !== data.updateTime) {
                window.localStorage.setItem('tag-list', JSON.stringify(data.tagList));
                window.localStorage.setItem('tag-replace-data', JSON.stringify(data.tagReplaceData));
                window.localStorage.setItem('tag-update-time', data.updateTime);
                window.localStorage.setItem('tag-sha', data.sha);
                window.location.reload();
            }
        } else {
            // chromeMessage.send()
        }
    });

    if (tagListStorage && tagReplaceDataStorage) {
        (window as any).tagListStorage = JSON.parse(tagListStorage);
        (window as any).tagReplaceDataStorage = JSON.parse(tagReplaceDataStorage);
        return {
            tagList: (window as any).tagListStorage,
            tagReplace: (window as any).tagReplaceDataStorage
        };
    }
    return {
        tagList: [],
        tagReplace: {}
    };
}
