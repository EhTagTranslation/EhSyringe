

import { fromEvent } from 'rxjs';


console.log('tag-tip');
document.querySelectorAll('input').forEach(v => {
  v.autocomplete = 'off';
})

const FSearchInput: HTMLInputElement = document.querySelector('#f_search');
if (FSearchInput) {
  fromEvent(FSearchInput, 'keyup').subscribe(e => {
    console.log('keyup', e, FSearchInput.value);
  })
}
