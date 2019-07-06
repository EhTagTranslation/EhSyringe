import { fromEvent } from 'rxjs';
import { TagList, TagItem } from './interface';
import './style/tag-tip.less';
import { namespaceTranslate } from './data/namespace-translate';
import {distinctUntilChanged, map} from 'rxjs/internal/operators';


// test to shoukan;
const FSearchInput: HTMLInputElement = document.querySelector('#f_search');
const tagList: TagList = (window as any).tagList

interface SearchTagItem extends TagItem{
  input: string,
}

var selectedIndex = 0;
console.log('tag-tip');
document.querySelectorAll('input').forEach(v => {
  v.autocomplete = 'off';
})

const autoCompleteList = document.createElement('div');
autoCompleteList.className = 'eh-syringe-lite-auto-complete-list'
autoCompleteList.hidden = true;
document.body.insertBefore(autoCompleteList, null);

function tagElementItem(tag: SearchTagItem): HTMLDivElement {
  const item = document.createElement('div');
  const cnName = document.createElement('span');
  cnName.className = 'cn-name';
  const enName = document.createElement('span');
  enName.className = 'en-name';
  const cnNamespace = namespaceTranslate[tag.namespace];
  let cnNameHtml = '';
  let enNameHtml = tag.search;
  if (tag.namespace !== 'misc') {
    cnNameHtml += cnNamespace + ':';
  }
  cnNameHtml += tag.name;
  cnNameHtml = cnNameHtml.replace(tag.input, `<mark>${tag.input}</mark>`);
  enNameHtml = enNameHtml.replace(tag.input, `<mark>${tag.input}</mark>`);

  cnName.innerHTML = cnNameHtml;
  enName.innerHTML = enNameHtml;

  item.insertBefore(cnName, null);
  item.insertBefore(enName, null);

  item.className = 'auto-complete-item';

  item.onclick = () => {
    FSearchInput.value = FSearchInput.value.slice(0, 0-tag.input.length) + tag.search + ' ';
    autoCompleteList.innerHTML = '';
  }
  return item
}

if (FSearchInput) {
  fromEvent(FSearchInput, 'keyup').pipe(
    map(() => FSearchInput.value),
    distinctUntilChanged()
  ).subscribe(value => {
    const values = value.split(' ');
    let result: SearchTagItem[] = [];
    const used = new Set();
    values.forEach((v, i) => {
      const sv = values.slice(i);
      if (sv.length) {
        const svs = sv.join(' ');
        tagList.filter(v => {
          if(v.search.indexOf(svs) !== -1){
            return true;
          }
          if(v.name.indexOf(svs) !== -1){
            return true;
          }
        }).forEach(tag => {
          if(used.has(tag.search))return;
          used.add(tag.search);
          result.push({
            ...tag,
            input: svs,
          });
        })
        if(result.length >= 50){
          result;
        }
      }
    });
    autoCompleteList.innerHTML = '';
    result.slice(0, 50).forEach(tag => {
      autoCompleteList.insertBefore(tagElementItem(tag), null);
    })
    selectedIndex = -1;
  })
  fromEvent(FSearchInput, 'keydown').subscribe((e: KeyboardEvent) => {
    if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {

      console.log(e.code, selectedIndex, autoCompleteList.children.length)
      if(e.code === 'ArrowUp'){
        selectedIndex --;
        if(selectedIndex < 0) {
          console.log('to end')
          selectedIndex = autoCompleteList.children.length - 1
        }
      } else {
        selectedIndex ++
        if(selectedIndex >= autoCompleteList.children.length) {
          console.log('to start')
          selectedIndex = 0
        }
      }

      const children = Array.from(autoCompleteList.children);
      children.forEach(element => {
        element.classList.remove('selected');
      });
      if(selectedIndex >= 0 && children[selectedIndex]){
        children[selectedIndex].classList.add('selected');
      }
      e.preventDefault();
      e.stopPropagation();
    }else if(e.code === 'Enter') {

      const children = Array.from(autoCompleteList.children);
      if(selectedIndex >= 0 && children[selectedIndex]){
        (children[selectedIndex] as any).click();
        e.preventDefault();
        e.stopPropagation();
      }
    
    }
  });



  fromEvent(autoCompleteList, 'click').subscribe(e => {
    FSearchInput.focus();
  });

  fromEvent(FSearchInput, 'focus').subscribe(e => {
    console.log('focus', e);
    autoCompleteList.hidden = false;
    const element = e.target as HTMLInputElement;
    console.log('element', element);
    const rect = element.getBoundingClientRect();
    autoCompleteList.style.left = `${rect.left}px`;
    autoCompleteList.style.top = `${rect.bottom}px`;
    autoCompleteList.style.minWidth = `${rect.width}px`;
  });

  fromEvent(FSearchInput, 'blur').subscribe(e => {
    // hiddenList();
  });

}
var hiddenTimer =0;
