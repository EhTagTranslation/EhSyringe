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
    | 'cosplayer'
    | 'male'
    | 'female'
    | 'mixed'
    | 'other'
    | 'temp';

export type EHTNamespaceNameShort = '' | 'r' | 'l' | 'p' | 'c' | 'g' | 'a' | 'cos' | 'm' | 'f' | 'x' | 'o';

export interface EHTNamespace {
    namespace: EHTNamespaceName;
    count: number;
    data: Record<string, EHTTag>;
}

export interface EHTTag {
    name: string;
    intro?: string;
    links?: string;
}

export interface TagItem extends EHTTag {
    /** 单字母表示的命名空间 */
    ns: EHTNamespaceNameShort;
    key: string;
    /** 去除 emoji 和图片等的名称 */
    cn: string;
    /** 用于搜索的简介 */
    introSearch?: string;
}

export type TagMap = Record<string, TagItem>;

export interface GitHubAsset {
    url: string;
    id: number;
    node_id: string;
    name: string;
    label: string;
    size: number;
    download_count: number;
    created_at: string;
    updated_at: string;
    browser_download_url: string;
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
    assets: GitHubAsset[];
}
