export type Context = 'link' | 'image';

export interface OnClickData {
    url?: string;
}

export interface Menu {
    title: string;
    targetUrlPatterns: string[];
    contexts: [Context, ...Context[]];

    onclick: (info: OnClickData) => unknown;
}
