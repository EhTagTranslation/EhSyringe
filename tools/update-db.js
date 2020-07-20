/* eslint-disable */

const fetch = require('node-fetch');
const pako = require('pako');
const fs = require('fs');
const path = require('path');

async function download() {
    const githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
    const info = await (await fetch(githubDownloadUrl)).json();
    const asset = info.assets.find((i) => i.name === 'db.html.json.gz');
    const url = (asset && asset.browser_download_url) || '';
    if (!url) {
        throw new Error('地址未找到');
    }

    console.log(`加载 ${url}`);
    const data = await fetch(url);
    return await data.buffer();
}

download()
    .then((data) => {
        fs.writeFileSync('./src/resources/tag.db', data);
    })
    .catch(console.error);
