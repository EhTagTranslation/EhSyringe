const fetch = require('node-fetch');
const pako = require('pako');
const fs = require('fs');
const path = require('path');

async function download() {
  const githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
  const info = await (await fetch(githubDownloadUrl)).json();
  const asset = info.assets.find(i => i.name === 'db.raw.json.gz');
  const url = asset && asset.browser_download_url || '';
  if (!url) {
    throw new Error('地址未找到')
  }

  console.log(`加载 ${url}`);
  const data = await fetch(url);
  return pako.ungzip(await data.buffer(), { to: "string" });
}

download().then(data => {
  fs.writeFileSync("./src/data/tag.db.json", data)
});
