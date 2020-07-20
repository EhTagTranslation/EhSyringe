export function downloadFile(url: string, method = 'GET', progress: (ev: ProgressEvent) => void): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'arraybuffer';
        xhr.onload = () => {
            if (xhr.response instanceof ArrayBuffer) {
                resolve(xhr.response);
            } else {
                reject(new Error('数据无法解析'));
            }
        };
        xhr.onerror = () => {
            reject('加载失败');
        };
        xhr.onprogress = progress;
        xhr.send();
    });
}
