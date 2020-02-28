
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
    fullKey: string;
}

export type TagList = TagItem[];
export interface TagReplace { [key: string]: string; }

export interface Suggestion {
    tag: TagItem;
    score: number;
    term: string;

    match: {
        key?: { start: number; length: number };
        name?: { start: number; length: number };
    };
}

export interface GithubRelease {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  author: Author;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: Asset[];
  tarball_url: string;
  zipball_url: string;
  body: string;
}

interface Asset {
  url: string;
  id: number;
  node_id: string;
  name: string;
  label: string;
  uploader: Author;
  content_type: string;
  state: string;
  size: number;
  download_count: number;
  created_at: string;
  updated_at: string;
  browser_download_url: string;
}

interface Author {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface ReleaseCheckData {
    old: string;
    oldLink: string;
    new: string;
    newLink: string;
    timestamp: number;
    githubRelease: GithubRelease;
}

export interface DownloadStatus {
    run: boolean;
    progress: number;
    info: string;
    complete: boolean;
    error: boolean;
}
