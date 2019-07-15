import { TagItem, EHTDatabase, TagList } from "../interface";

interface TagData {tagList: TagItem[], tagReplace: { [key: string]: string}};

export function getTagData(): TagData | undefined {
    if((window as any).tagListStorage && (window as any).tagReplaceDataStorage) {
        return {
            tagList: (window as any).tagListStorage,
            tagReplace: (window as any).tagReplaceDataStorage
        };
    }

    console.time('localStorage getItem');
    const tagListStorage = window.localStorage.getItem('tag-list');
    const tagReplaceDataStorage = window.localStorage.getItem('tag-replace-data');
    if (tagListStorage && tagReplaceDataStorage) {
        (window as any).tagListStorage = JSON.parse(tagListStorage);
        (window as any).tagReplaceDataStorage = JSON.parse(tagReplaceDataStorage);
        return {
            tagList: (window as any).tagListStorage,
            tagReplace: (window as any).tagReplaceDataStorage
        };
    }
    console.timeEnd('localStorage getItem');
    chrome.storage.local.get((data) => {
        if (
            'tagList' in data && 'tagReplaceData' in data
        ) {
            window.localStorage.setItem('tag-list', JSON.stringify(data.tagList));
            window.localStorage.setItem('tag-replace-data', JSON.stringify(data.tagReplaceData));
            window.location.reload();
        }else {
            chrome.runtime.sendMessage({contentScriptQuery: "get-tag-data"})
        }
    });
    return {
        tagList: [],
        tagReplace: {}
    };
}




