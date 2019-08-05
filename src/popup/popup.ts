const progress = document.querySelector('#progress') as HTMLProgressElement;
const updateButton = document.querySelector('#updateButton') as HTMLButtonElement;

updateButton.onclick = () => {
  console.log('updateButton click')
  chrome.runtime.sendMessage({contentScriptQuery: "get-tag-data"})
};
chrome.runtime.onMessage.addListener((msg) => {
  console.log('msg', msg);
})
