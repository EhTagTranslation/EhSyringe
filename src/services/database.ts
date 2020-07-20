import { Service } from '.';
import { GithubRelease, EHTDatabase } from 'interface';
import { Http } from './http';

@Service()
export class Database {
    constructor(readonly http: Http) {}
    async getLatestVersion(): Promise<GithubRelease> {
        const githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
        const info = this.http.json<GithubRelease>(githubDownloadUrl);
        return info;
    }

    async getData(version: GithubRelease): Promise<EHTDatabase> {
        const sha = version.target_commitish;
        return await this.http.json<EHTDatabase>(
            `https://cdn.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@${sha}/db.raw.json`,
        );
    }
}
