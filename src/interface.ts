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

export type EHTNamespaceNameShort = '' | 'r' | 'l' | 'p' | 'c' | 'g' | 'a' | 'm' | 'f';

export interface EHTNamespace {
    namespace: EHTNamespaceName;
    count: number;
    data: { [tag: string]: EHTTag };
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
}

export interface TagMap {
    [fullKey: string]: TagItem;
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
