import escapeHtml from 'escape-html';

export interface Popup {
    set(scriptUri: string): Promise<void>;
}

export function htmlUri(scriptUri: string): string {
    const doc = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>EhSyringe</title>
        <script src="${escapeHtml(scriptUri)}"></script>
    </head>
    <body></body>
</html>
`;
    return `data:text/html;charset=utf-8,${encodeURIComponent(doc)}`;
}
