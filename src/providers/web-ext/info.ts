import { browser, Management } from 'webextension-polyfill-ts';

let info: Management.ExtensionInfo;

export async function extInfo(): Promise<Management.ExtensionInfo> {
    if (info) return info;
    info = await browser.management.getSelf();
    return info;
}
