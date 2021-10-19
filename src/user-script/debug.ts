declare const userScriptMainSource: string;

const request = new XMLHttpRequest();
request.open('GET', userScriptMainSource, false);
request.send(null);
if (request.status === 200) {
    eval(request.responseText);
}

export {};
