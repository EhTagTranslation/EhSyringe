import { uiData } from './data/ui-data';
import { EHTDatabase, TagList } from './interface';
import './style/syringe.less';
import { getTagData } from './tag-data';


(window as any).tagClear = () => {
    window.localStorage.removeItem('tag-list');
    window.localStorage.removeItem('tag-replace-data');
    chrome.storage.local.remove('waitingForProcessing');
}

(window as any).tagDownload = () => {
    window.localStorage.removeItem('tag-list');
    window.localStorage.removeItem('tag-replace-data');
    chrome.storage.local.remove('waitingForProcessing');
    chrome.runtime.sendMessage({contentScriptQuery: "get-tag-data"})
}


const {tagReplace} = getTagData();

var documentEnd = false;
window.document.addEventListener('DOMContentLoaded', (e) => {
    documentEnd = true;
})

const observer = new MutationObserver(function(mutations) {
    for(let i in mutations){
        for(let n in mutations[i].addedNodes){
            const node1 = mutations[i].addedNodes[n];
            if(documentEnd){
                if(node1.childNodes){
                    let nodeIterator = document.createNodeIterator(node1);
                    let node;
                    while((node = nodeIterator.nextNode())){
                        translateNode(node);
                    }
                } else {
                    translateNode(node1)
                }
            }else {
                translateNode(node1);
            }
        }
    }
});
observer.observe(window.document, {
    attributes: true,
    childList: true,
    subtree: true
});

function translateNode(node: Node){
    if (node.nodeName === "#text"){
        if(uiData[node.textContent]){
            node.textContent = uiData[node.textContent];
            return;
        }
        if(tagReplace[node.textContent]) {
            node.textContent = tagReplace[node.textContent];
            return;
        }
        node.textContent = node.textContent.replace(/(\d+) pages/, '$1 页')
        node.textContent = node.textContent.replace(/Torrent Download \( (\d+) \)/, '种子下载 ( $1 )')
        node.textContent = node.textContent.replace(/Average: ([\d\.]+)/, '平均值: $1')
        node.textContent = node.textContent.replace(/Posted on (.*?) by:/, '评论时间:$1  作者:')
        node.textContent = node.textContent.replace(/Showing ([\d,]+) results/, '共 $1 个结果')
        node.textContent = node.textContent.replace(/Showing (\d+) - (\d+) of (\d+) images/, '第 $1 - $2 共 $3 张图片')
        node.textContent = node.textContent.replace(/Rate as ([\d\.]+) stars/, '$1星')
    } else if(node.nodeName === 'INPUT') {
        if(uiData[(node as HTMLInputElement).placeholder]){
            (node as HTMLInputElement).placeholder = uiData[(node as HTMLInputElement).placeholder];
            return;
        }
    }
}


