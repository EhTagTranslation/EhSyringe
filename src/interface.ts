import { Opaque } from 'type-fest';

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

export type EHTNamespaceName =
    | 'rows'
    | 'reclass'
    | 'language'
    | 'parody'
    | 'character'
    | 'group'
    | 'artist'
    | 'male'
    | 'female'
    | 'misc';

export interface EHTNamespace {
    namespace: EHTNamespaceName;
    count: number;
    data: { [tag: string]: EHTTag };
}

export interface EHTTag {
    name: string;
    intro: string;
    links: string;
}

export interface TagItem extends EHTTag {
    search: string;
    namespace: EHTNamespaceName;
    key: string;
    /** 标准格式标签，使用单字母命名空间名称，misc 省略 */
    fullKey: string;
}

export interface TagMap {
    [fullKey: string]: TagItem | undefined;
}

export interface GithubRelease {
    url: string;
    html_url: string;
    id: number;
    tag_name: string;
    target_commitish: string;
    name: string;
    prerelease: boolean;
    created_at: string;
    published_at: string;
    body: string;
}

export interface ReleaseCheckData {
    old: string;
    new: string;
    timestamp: number;
    githubRelease: GithubRelease | null;
}

export interface DownloadStatus {
    run: boolean;
    progress: number;
    info: string;
    complete: boolean;
    error: boolean;
}
