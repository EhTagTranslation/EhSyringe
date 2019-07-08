import { TagItem, EHTDatabase, TagList } from "./interface";

interface TagData {tagList: TagItem[], tagReplace: { [key: string]: string}};

const trim = (s: string): string => s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
const namespaceOrder = ['female','language','misc', 'male','artist', 'group', 'parody', 'character', 'reclass'];


export function getTagData(): TagData | undefined {
    if((window as any).tagListStorage && (window as any).tagReplaceDataStorage) {
        return {
            tagList: (window as any).tagListStorage,
            tagReplace: (window as any).tagReplaceDataStorage
        };
    }

    const tagListStorage = window.localStorage.getItem('tag-list');
    const tagReplaceDataStorage = window.localStorage.getItem('tag-replace-data');
    if (tagListStorage && tagReplaceDataStorage) {
        (window as any).tagListStorage = JSON.parse(tagListStorage);
        (window as any).tagReplaceDataStorage = JSON.parse(tagReplaceDataStorage);
        return {
            tagList: (window as any).tagListStorage,
            tagReplace: (window as any).tagReplaceDataStorage
        };
    }
    chrome.storage.local.get((data) => {
        if ('waitingForProcessing' in data) {
            const tagDb: EHTDatabase = data['waitingForProcessing'] as EHTDatabase;
            const tagReplaceData: {[key: string]: string} = {};
            const tagList: TagList = [];
            tagDb.data.sort((a,b) => {
                return namespaceOrder.indexOf(a.namespace) - namespaceOrder.indexOf(b.namespace);
            })
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
                        search += `"${key}$"`;
                    } else {
                        search += key + '$';
                    }
            
                    tagList.push({
                        ...t,
                        name: mdImg2HtmlImg(t.name, 1),
                        intro: mdImg2HtmlImg(t.intro),
                        key,
                        namespace,
                        search,
                    })
                    
                    tagReplaceData[key] = mdImg2HtmlImg(t.name, 1);
                    tagReplaceData[namespace[0] + ':' + key] = namespace[0] + ':' + mdImg2HtmlImg(t.name, 1);
                }
            });
            
            window.localStorage.setItem('tag-list', JSON.stringify(tagList));
            window.localStorage.setItem('tag-replace-data', JSON.stringify(tagReplaceData));
            window.location.reload();

        }else {
            chrome.runtime.sendMessage({contentScriptQuery: "get-tag-data"})
        }
    });
    return {
        tagList: [],
        tagReplace: {}
    };
}


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
            return `<img src="${h}">`;
        }else{
            return "";
        }
    });
}



