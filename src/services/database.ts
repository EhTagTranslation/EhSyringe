import { Service } from '.';
import { GithubRelease, EHTDatabase } from 'interface';
import { Http, Progress } from './http';

@Service()
export class Database {
    constructor(readonly http: Http) {}
    async getLatestVersion(): Promise<GithubRelease> {
        const githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
        const info = this.http.json<GithubRelease>(githubDownloadUrl);
        return info;
    }

    async getData(version: GithubRelease, progress?: Progress): Promise<EHTDatabase> {
        const dataJson = /<!--(.+?)-->/gis.exec(version.body);
        if (!dataJson) throw new Error(`GitHub 发布数据无法解析，可能需要更新插件版本`);
        try {
            const data = JSON.parse(dataJson[1]) as Record<string, string>;
            const sha = data.mirror;
            if (typeof sha != 'string') throw new Error();
            return this.http.download<EHTDatabase>(
                `https://cdn.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@${sha}/db.html.json`,
                'GET',
                progress,
                'json',
            );
        } catch {
            throw new Error(`GitHub 发布数据无法解析，可能需要更新插件版本`);
        }
    }
}
