
const trim = (s) => s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

const tagData = {};
tagDb.data.forEach(space => {
    const namespace = space.namespace;
    for(let key in space.data){
        const t = space.data[key];
        tagData[key] = t.name;
        tagData[namespace[0] + ':' + key] = namespace[0] + ':' + t.name;
    }
})

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

// let nodeIterator = document.createNodeIterator(window.document);
// let node;
// while((node = nodeIterator.nextNode())){
//     translateNode(node);
// }



function translateNode(node){
    if (node.nodeName === "#text"){
        if(uiData[node.textContent]){
            node.textContent = uiData[node.textContent];
            return;
        }
        if(tagData[node.textContent]) {
            node.textContent = tagData[node.textContent];
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
        if(uiData[node.placeholder]){
            node.placeholder = uiData[node.placeholder];
            return;
        }
    }
}
