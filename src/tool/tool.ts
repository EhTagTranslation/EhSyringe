const trim = (s: string): string => s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');


export function mdImg2HtmlImg(mdText: string,max: number = Infinity){
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
