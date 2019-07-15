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
    console.log('translateNode timer', timer + 'ms');
})
let timer = 0;
const observer = new MutationObserver(function(mutations) {
    const s = new Date().getTime();
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
    timer += new Date().getTime() - s;
});
observer.observe(window.document, {
    attributes: true,
    childList: true,
    subtree: true
});

function translateNode(node: Node){
    if (node.nodeName === "BODY") {
        // node.parentElement.lang = "zh-CN";
        // node.parentElement.setAttribute('xml:lang', "zh-CN")
    } else if (node.nodeName === "#text"){
        if(node.parentElement) {
            if(
                node.parentElement.nodeName === 'MARK' ||
                node.parentElement.classList.contains("auto-complete-text")
                ){
                // 不翻译搜索提示的内容
                return;
            }
            
        // 标签只翻译已知的位置
        if( (
            node.parentElement.classList.contains("gt") ||
            node.parentElement.classList.contains("gtl") ||
            node.parentElement.classList.contains("gtw")
            ) || (
                node.parentElement.parentElement && (
                    node.parentElement.parentElement.classList.contains("gt") || 
                    node.parentElement.parentElement.classList.contains("gtl") ||
                    node.parentElement.parentElement.classList.contains("gtw")
                )
            ) ) {
                if(tagReplace[node.textContent]){
                    if(node.parentElement.hasAttribute('eh-syringe-original')){
                        return;
                    }
                    node.parentElement.setAttribute('eh-syringe-original', node.textContent);
                    if(tagReplace[node.textContent] != node.textContent){
                        node.parentElement.innerHTML = tagReplace[node.textContent];
                    } else {
                        console.log('翻译内容相同', tagReplace[node.textContent]);
                    }
                    return;
                }
            }
        }



        if(uiData[node.textContent]){
            node.textContent = uiData[node.textContent];
            return;
        }
        // if(tagReplace[node.textContent]) {
        //     node.textContent = tagReplace[node.textContent];
        //     return;
        // }
        
        let text = node.textContent;
        text = text.replace(/(\d+) pages/, '$1 页')
        text = text.replace(/Torrent Download \( (\d+) \)/, '种子下载 ( $1 )')
        text = text.replace(/Average: ([\d\.]+)/, '平均值: $1')
        text = text.replace(/Posted on (.*?) by:/, '评论时间:$1  作者:')
        text = text.replace(/Showing ([\d,]+) results/, '共 $1 个结果')
        text = text.replace(/Showing (\d+) - (\d+) of (\d+) images/, '第 $1 - $2 共 $3 张图片')
        text = text.replace(/Rate as ([\d\.]+) stars/, '$1星');
        text = text.replace(/([\d\.]+) torrent was found for this gallery./, '找到了$1个种子.')
        text = text.replace(/([\d\.]+) \/ ([\d\.]+) favorite note slots used./, '已经使用了$1个便签, 共$2个 ')
        text = text.replace(/Showing results for ([\d\.]+) watched tags/, '订阅的$1个标签的结果')

        
        if(node.textContent !== text){
            node.textContent = text;
        }

    } else if(node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
        const input = (node as HTMLInputElement);
        if(uiData[input.placeholder]){
            input.placeholder = uiData[input.placeholder];
            return;
        }
        if(input.type == "submit" || input.type == "button") {
            if(uiData[input.value]){
                input.value = uiData[input.value];
                return;
            }
        }
    } else if(node.nodeName === 'OPTGROUP') {
        const element = node as HTMLOptGroupElement;
        if(uiData[element.label]){
            element.label = uiData[element.label];
        }
    } else {
        if (
            node.nodeName === "A" &&
            node.parentElement &&
            node.parentElement.parentElement &&
            node.parentElement.parentElement.id === 'nb' ){
            const a = (node as HTMLElement);
            console.log(node)
            if(uiData[a.textContent]){
                a.textContent = uiData[a.textContent];
                return;
            }
        }
    }
}


