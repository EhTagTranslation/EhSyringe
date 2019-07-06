import { tagDb } from './data/tag-db';
import { uiData } from './data/ui-data';
import { EHTDatabase, TagList } from './interface';
import './style/syringe.less';
import { getTagData } from './tag-data';


getTagData();

const trim = (s: string): string => s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
const tagList: TagList = [];

const namespaceOrder = ['female','language','misc', 'male','artist', 'group', 'parody', 'character', 'reclass'];

const tagReplaceData: {[key: string]: string} = {};

tagDb.data.sort((a,b) => {
    return namespaceOrder.indexOf(a.namespace) - namespaceOrder.indexOf(b.namespace);
})

function mdImg2HtmlImg(mdText: string,max: number = Infinity){
    var n = 0;
    return mdText.replace(/\!\[(.*?)\]\((.*?)\)/igm, function (text,alt,href,index) {
        n++;
        if( max >= n){
            var h = trim(href);
            if(h.slice(0,1) == "#"){
                h = h.replace(/# +\\?['"](.*?)\\?['"]/igm,"$1");
            }else if(h.slice(h.length-1,h.length).toLowerCase() == 'h'){
                h = h.slice(0,-1);
            }
            h = h.replace('http://', 'https://');
            return `<img src="${h}">`;
        }else{
            return "";
        }
    });
}

tagDb.data.forEach(space => {
    const namespace = space.namespace;
    if(namespace === 'rows') return;
    for(let key in space.data){
        const t = space.data[key];
        let search = ``;
        if (namespace !== 'misc') {
            search += namespace + ':';
        }
        if (key.indexOf(' ') !== -1) {
            search += `"${key}"`;
        } else {
            search += key;
        }

        tagList.push({
            ...t,
            name: mdImg2HtmlImg(t.name, 0),
            key,
            namespace,
            search,
        })

        
        tagReplaceData[key] = t.name;
        tagReplaceData[namespace[0] + ':' + key] = namespace[0] + ':' + t.name;
    }
});



(window as any).tagList = tagList;

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
        if(tagReplaceData[node.textContent]) {
            node.textContent = tagReplaceData[node.textContent];
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


