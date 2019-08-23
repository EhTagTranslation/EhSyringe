
export interface EHTDatabase {
    head: {
        author: {
            name: string;
            email: string;
            when: string;
        };
        committer: {
            name: string;
            email: string;
            when: string;
        };
        sha: string;
        message: string;
    };
    version: number;
    repo: string;
    data: EHTNamespace[];
}

export interface EHTNamespace {
    namespace: string;
    count: number;
    data: { [tag: string]: EHTTag };
}

export interface EHTTag {
    name: string;
    intro: string;
    links: string;
}

export interface TagItem {
    search: string;
    namespace: string;
    key: string;
    name: string;
    intro: string;
    links: string;
}

export type TagList = TagItem[];

export interface SearchTagItem extends TagItem {
    input: string;
}

export interface ReleaseCheckData {
    old: string;
    new: string;
    newLink: string;
}

export interface DownloadStatus {
    run: boolean;
    progress: number;
    info: string;
    complete: boolean;
    error: boolean;
}
