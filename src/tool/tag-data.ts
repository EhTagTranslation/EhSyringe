import { browser } from 'webextension-polyfill-ts';

import { TagItem } from '../interface';

import { logger } from './log';
import { load, save } from './storage';
import { dateDiff } from './tool';

interface TagReplace { [key: string]: string; }
type TagList = TagItem[]
interface TagData { tagList: TagList; tagReplace: TagReplace; }

async function loadPluginData(): Promise<void> {
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
    const tagList = load<TagList>('tag-list');
    const tagReplace = load<TagReplace>('tag-replace-data');
    const tagUpdateTime = load<number>('tag-update-time') || 0;
    const tagSha = load<string>('tag-sha');

    if (firstcall) {
        firstcall = false;
        logger.log('TAG 最后更新时间: ',
            tagUpdateTime ? dateDiff(new Date(tagUpdateTime)) : '',
            tagUpdateTime ? new Date(tagUpdateTime) : '不可用'
        );
        logger.log('TAG SHA: ', tagSha ? tagSha : '不可用');
        loadPluginData().catch(logger.error);
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
