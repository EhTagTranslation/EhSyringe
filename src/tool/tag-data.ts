import { browser } from 'webextension-polyfill-ts';
import { TagItem } from '../interface';
import { dateDiff } from './tool';


interface TagData { tagList: TagItem[]; tagReplace: { [key: string]: string }; }

function getCacheRoot() {
    let cacheRoot = (window as any).EhSCache;
    if (!cacheRoot) {
        cacheRoot = (window as any).EhSCache = {};
    }
    return cacheRoot;
}

function load(key: string) {
    const cacheRoot = getCacheRoot();
    if (cacheRoot[key]) {
        return cacheRoot[key];
    }
    const storageValue = window.localStorage.getItem(`EhSyringe.${key}`);
    if (typeof (storageValue) === 'string') {
        return cacheRoot[key] = JSON.parse(storageValue);
    }
    return undefined;
}

function save(key: string, value: any) {
    const cacheRoot = getCacheRoot();
    cacheRoot[key] = value;
    window.localStorage.setItem(`EhSyringe.${key}`, JSON.stringify(value));
}

async function loadPluginData() {
    const data = await browser.storage.local.get(['tagList', 'tagReplaceData', 'updateTime', 'sha']);
    if (!(data.updateTime && data.tagReplaceData && data.tagList && data.sha)) {
        return;
    }
    if (load('tag-update-time') === data.updateTime) {
        return;
    }
    save('tag-list', data.tagList);
    save('tag-replace-data', data.tagReplaceData);
    save('tag-update-time', data.updateTime);
    save('tag-sha', data.sha);
    window.location.reload();
}

let firstcall = true;

export function getTagData(): TagData {
    const tagList = load('tag-list');
    const tagReplace = load('tag-replace-data');
    const tagUpdateTime = load('tag-update-time') || 0;
    const tagSha = load('tag-sha');

    if (firstcall) {
        firstcall = false;
        console.info('💉 TAG最后更新时间: ',
            tagUpdateTime ? dateDiff(new Date(tagUpdateTime)) : '',
            tagUpdateTime ? new Date(tagUpdateTime) : '不可用'
        );
        console.info('💉 TAG-SHA: ', tagSha ? tagSha : '不可用');
        loadPluginData().catch(console.error);
    }

    if (tagList && tagReplace) {
        return {
            tagList,
            tagReplace,
        };
    }

    return {
        tagList: [],
        tagReplace: {}
    };
}
