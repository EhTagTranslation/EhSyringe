import { uiData } from '../data/ui-data';
import './syringe.less';
import { getTagData } from '../tool/tag-data';
import {Config} from "../tool/config-manage";
Config.synchro();
const config = Config.syncGet();

/* 有可能会有性能问题, 开的页面多了不知道会是什么效果*/
chrome.storage.onChanged.addListener(changes => {
  console.log('changes', changes);
  if('config' in changes && changes.config.newValue){
    window.localStorage.setItem('ehs-config', JSON.stringify(changes.config.newValue));
  }
/*
  if('tagList' in changes && changes.tagList.newValue){
    window.localStorage.setItem('tag-list', JSON.stringify(changes.tagList.newValue));
    (window as any).tagListStorage = changes.tagList.newValue
  }
  if('tagReplaceData' in changes && changes.tagReplaceData.newValue){
    window.localStorage.setItem('tag-replace-data', JSON.stringify(changes.tagReplaceData.newValue));
    (window as any).tagReplaceDataStorage = changes.tagReplaceData.newValue
  }

  if('updateTime' in changes && changes.updateTime.newValue){
    window.localStorage.setItem('tag-update-time', changes.updateTime.newValue);
  }

  if('sha' in changes && changes.sha.newValue){
    window.localStorage.setItem('tag-sha', changes.sha.newValue);
  }*/
});

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

class Syringe {
  tagReplace = getTagData().tagReplace;
  documentEnd = false;
  skipNode: Set<string> = new Set(['TITLE', 'LINK', 'META', 'HEAD', 'SCRIPT', 'BR', 'HR', 'STYLE', 'MARK']);

  constructor(){
    window.document.addEventListener('DOMContentLoaded', (e) => {
      this.documentEnd = true;
    });
    const observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        for (let node1 of mutation.addedNodes) {
          this.translateNode(node1);
          if (this.documentEnd) {
            if (node1.childNodes) {
              let nodeIterator = document.createNodeIterator(node1);
              let node;
              while ((node = nodeIterator.nextNode())) {
                this.translateNode(node);
              }
            }
          }
        }
      }
    });
    observer.observe(window.document, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }

  translateNode(node: Node) {
    if (
      (!node.nodeName) ||
      this.skipNode.has(node.nodeName) ||
      (node.parentNode && this.skipNode.has(node.parentNode.nodeName))
    ) { return; }

    if (node.nodeName === 'BODY') {
      const body = (node as HTMLBodyElement);
      body.classList.add(location.host.indexOf('exhentai') === -1 ? 'eh' : 'ex');
      if(!config.showIcon){ body.classList.add('ehs-hide-icon') }
      body.classList.add(`ehs-image-level-${config.introduceImageLevel}`);
    }

    let handled = false;
    if (config.translateTag){
      handled = this.translateTag(node);
    }
    /* tag 处理过的ui不再处理*/
    if (config.translateUI && !handled) {
      this.translateUi(node);
    }

  }

  translateTag(node: Node): boolean {
    if (node.nodeName === '#text') {
      if (node.parentElement) {
        if (
          node.parentElement.nodeName === 'MARK' ||
          node.parentElement.classList.contains('auto-complete-text')
        ) {
          // 不翻译搜索提示的内容
          return true;
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
          const parentElement = node.parentElement;

          let value = '';
          let aId = parentElement.id;
          let aTitle = parentElement.title;


          if ((!value) && aTitle) {
            if(aTitle[0] == ':'){
              aTitle = aTitle.slice(1);
            }
            if (this.tagReplace[aTitle]) {
              value = this.tagReplace[aTitle];
            }
          }

          if( (!value) && aId) {
            aId = aId.replace('ta_', '');
            aId = aId.replace(/_/ig, ' ');
            if (this.tagReplace[aId]) {
              value = this.tagReplace[aId];
            }
          }

          if (value) {
            if(node.textContent[1] === ':'){
              value = node.textContent[0] + ':' + value;
            }
            if (node.parentElement.hasAttribute('ehs-tag')) {
              return true;
            }
            node.parentElement.setAttribute('ehs-tag', node.textContent);
            if (value != node.textContent) {
              node.parentElement.innerHTML = value;
            } else {
              console.log('翻译内容相同', value);
            }
            return true;
          }
        }
      }
    }
    return false;
  }

  translateUi(node: Node) {
    if (node.nodeName === '#text') {
      if (uiData[node.textContent]) {
        node.textContent = uiData[node.textContent];
        return;
      }
      let text = node.textContent;
      text = text.replace(/(\d+) pages?/, '$1 页');
      text = text.replace(/Torrent Download \( (\d+) \)/, '种子下载（$1）');
      text = text.replace(/Average: ([\d\.]+)/, '平均值：$1');
      text = text.replace(/Posted on (.*?) by:\s*/, (_, t) => `评论时间：${new Date(t).toLocaleString()} \xA0作者：`);
      text = text.replace(/Showing ([\d,]+) results?\. Your filters excluded ([\d,]+) galler(ies|y) from this page/, '共 $1 个结果，你的过滤器已从此页面移除 $2 个结果。');
      text = text.replace(/Showing ([\d,]+) results?/, '共 $1 个结果');
      text = text.replace(/Rate as ([\d\.]+) stars?/, '$1 星');
      text = text.replace(/([\d,]+) torrent was found for this gallery./, '找到了 $1 个种子。');
      text = text.replace(/([\d,]+) \/ ([\d,]+) favorite note slots? used./, '已经使用了 $1 个便签，共 $2 个。');
      text = text.replace(/Showing results for ([\d,]+) watched tags?/, '订阅的 $1 个标签的结果');
      text = text.replace(/Showing ([\d,]+)-([\d,]+) of ([\d,]+)/, '$1 - $2，共 $3 个结果');
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
    }


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
        const text = element.textContent;
        element.style.display = 'none';
        const p = document.createElement('p');
        p.textContent = text.replace(/Showing (\d+) - (\d+) of (\d+) images/, '$1 - $2，共 $3 张图片');
        p.className = 'gpc-translate';
        element.parentElement.insertBefore(p, element);
      }
    }

    if (node.nodeName === 'DIV') {
      const element = node as HTMLDivElement;
      /* E-Hentai-Downloader 兼容处理 */
      if (element.id === 'gdd') {
        const div = document.createElement('div');
        div.textContent = element.textContent;
        div.style.display = 'none';
        element.insertBefore(div, null)
      }

      /* 熊猫书签 兼容处理 2 */
      if(
        element.parentElement &&
        element.parentElement.id === 'gdo4' &&
        element.classList.contains('ths') &&
        element.classList.contains('nosel')
      ){
        const div = document.createElement('div');
        div.textContent = element.textContent;
        div.style.display = 'none';
        div.className = 'ths';
        element.parentElement.insertBefore(div, element)
      }
    }

  }
}

if(config.translateTag || config.translateUI){
  new Syringe();
}



