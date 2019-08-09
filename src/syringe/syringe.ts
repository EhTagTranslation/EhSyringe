import { uiData } from '../data/ui-data';
import './syringe.less';
import { getTagData } from '../tool/tag-data';

const {tagReplace} = getTagData();

(window as any).tagClear = () => {
  window.localStorage.removeItem('tag-list');
  window.localStorage.removeItem('tag-replace-data');
  window.localStorage.removeItem('tag-update-time');
  window.localStorage.removeItem('tag-sha');
  chrome.storage.local.remove('tagList');
  chrome.storage.local.remove('tagReplaceData');
  chrome.storage.local.remove('updateTime');
  chrome.storage.local.remove('tagDB');
  chrome.storage.local.remove('sha');
};

let documentEnd = false;
window.document.addEventListener('DOMContentLoaded', (e) => {
  documentEnd = true;
  console.log('translateNode timer', timer + 'ms');
});
let timer = 0;
const observer = new MutationObserver(function (mutations) {
  const s = new Date().getTime();

  for (let mutation of mutations) {
    for (let node1 of mutation.addedNodes) {
      if (documentEnd) {
        if (node1.childNodes) {
          let nodeIterator = document.createNodeIterator(node1);
          let node;
          while ((node = nodeIterator.nextNode())) {
            translateNode(node);
          }
        } else {
          translateNode(node1);
        }
      } else {
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

const skipNode: Set<string> = new Set(['TITLE', 'LINK', 'META', 'HEAD', 'SCRIPT', 'BR', 'HR', 'STYLE', 'MARK']);

function translateNode(node: Node) {
  if (!node.nodeName) {
    console.error('not nodeName', node);
    return;
  }
  if (skipNode.has(node.nodeName)) {
    return;
  }
  if(node.parentNode && skipNode.has(node.parentNode.nodeName)) {
    return;
  }

  if (node.nodeName === 'BODY') {
    // node.parentElement.lang = "zh-CN";
    // node.parentElement.setAttribute('xml:lang', "zh-CN")
    (node as HTMLElement).classList.add(location.host.indexOf('exhentai') === -1 ? 'eh' : 'ex');
  } else if (node.nodeName === '#text') {
    if (node.parentElement) {
      if (
        node.parentElement.nodeName === 'MARK' ||
        node.parentElement.classList.contains('auto-complete-text')
      ) {
        // 不翻译搜索提示的内容
        return;
      }

      // 标签只翻译已知的位置

      const p1 = (
        node.parentElement.classList.contains('gt') ||
        node.parentElement.classList.contains('gtl') ||
        node.parentElement.classList.contains('gtw')
      );
      const p2 = (
        node.parentElement.parentElement && (
          node.parentElement.parentElement.classList.contains('gt') ||
          node.parentElement.parentElement.classList.contains('gtl') ||
          node.parentElement.parentElement.classList.contains('gtw')
        )
      );


      if ( p1 || p2) {
        const parentElement = p2 ? node.parentElement.parentElement : node.parentElement;
        let value = '';
        let aId = parentElement.id;
        let aTitle = parentElement.title;


        if ((!value) && aTitle) {
          if(aTitle[0] == ':'){
            aTitle = aTitle.slice(1);
          }
          if (tagReplace[aTitle]) {
            value = tagReplace[aTitle];
          }
        }

        if( (!value) && aId) {
          aId = aId.replace('ta_', '');
          aId = aId.replace(/_/ig, ' ');
          if (tagReplace[aId]) {
            value = tagReplace[aId];
          }
        }


        // if(!value){
        //   if (tagReplace[node.textContent]) {
        //     value = tagReplace[node.textContent];
        //   }
        // }

        if (value) {
          if(node.textContent[1] === ':'){
            value = node.textContent[0] + ':' + value;
          }
          if (node.parentElement.hasAttribute('ehs-tag')) {
            return;
          }
          node.parentElement.setAttribute('ehs-tag', node.textContent);
          if (value != node.textContent) {
            node.parentElement.innerHTML = value;
          } else {
            console.log('翻译内容相同', value);
          }
          return;
        }
      }
    }

    if (uiData[node.textContent]) {
      node.textContent = uiData[node.textContent];
      return;
    }
    // if(tagReplace[node.textContent]) {
    //     node.textContent = tagReplace[node.textContent];
    //     return;
    // }

    let text = node.textContent;
    text = text.replace(/(\d+) pages/, '$1 页');
    text = text.replace(/Torrent Download \( (\d+) \)/, '种子下载 ( $1 )');
    text = text.replace(/Average: ([\d\.]+)/, '平均值: $1');
    text = text.replace(/Posted on (.*?) by:/, '评论时间:$1  作者:');
    text = text.replace(/Showing ([\d,]+) results/, '共 $1 个结果');
    text = text.replace(/Rate as ([\d\.]+) stars/, '$1星');
    text = text.replace(/([\d\.]+) torrent was found for this gallery./, '找到了$1个种子.');
    text = text.replace(/([\d\.]+) \/ ([\d\.]+) favorite note slots used./, '已经使用了$1个便签, 共$2个 ');
    text = text.replace(/Showing results for ([\d\.]+) watched tags/, '订阅的$1个标签的结果');

    if (node.textContent !== text) {
      node.textContent = text;
      return;
    }

  } else if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
    const input = (node as HTMLInputElement);
    if (uiData[input.placeholder]) {
      input.placeholder = uiData[input.placeholder];
      return;
    }
    if (input.type == 'submit' || input.type == 'button') {
      if (uiData[input.value]) {
        input.value = uiData[input.value];
        return;
      }
    }
  } else if (node.nodeName === 'OPTGROUP') {
    const element = node as HTMLOptGroupElement;
    if (uiData[element.label]) {
      element.label = uiData[element.label];
    }
  } else {
    if (
      node.nodeName === 'A' &&
      node.parentElement &&
      node.parentElement.parentElement &&
      node.parentElement.parentElement.id === 'nb') {
      const a = (node as HTMLElement);
      if (uiData[a.textContent]) {
        a.textContent = uiData[a.textContent];
        return;
      }
    }

    if (node.nodeName === 'P') {
      const element = node as HTMLParagraphElement;
      /* 兼容熊猫书签，单独处理页码，保留原页码Element，防止熊猫书签取不到报错*/
      if (element.classList.contains('gpc')) {
        let text = element.textContent;
        element.style.display = 'none';
        const p = document.createElement('p');
        p.textContent = text.replace(/Showing (\d+) - (\d+) of (\d+) images/, '第 $1 - $2 共 $3 张图片');
        p.className = 'gpc-translate';
        element.parentElement.insertBefore(p, element);
      }
    }

  }
}


