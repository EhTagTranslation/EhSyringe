import { TagItem } from "./interface";

export function getTagData(): TagItem[]{
    const tagList = window.localStorage.getItem('tag-list');

    if (tagList) {
        return JSON.parse(tagList);
    }
    let notification = new Notification('下载翻译数据中', {
        body: '找不到本地数据'
    })

    const namespaceOrder = ['female','language','misc', 'male','artist', 'group', 'parody', 'character', 'reclass'];

    

    console.log('sendMessage', chrome.runtime.sendMessage({contentScriptQuery: "get-tag-data"}));
    // fetch(href)
    // .then(r => {
    //     return r.text();
    // })
    // .then(data => {

    //     console.log('data', data);

    //     // chrome.notifications.create('tag-nodata', {
    //     //     title: '加载完毕,请刷新页面',
    //     //     contextMessage: '找不到本地数据',
    //     // })
    // })

    return [];
}