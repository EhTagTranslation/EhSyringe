export type Context = 'link' | 'image';

export interface OnClickData {
    url?: string;
}

export interface Menu {
    title: string;
    targetUrlPatterns: string[];
    contexts: Context[];

    onclick: (info: OnClickData) => unknown;
}
