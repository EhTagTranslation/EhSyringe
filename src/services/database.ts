import { Service } from '.';
import { GithubRelease, EHTDatabase } from 'interface';
import { Http, Progress } from './http';
import { downloadFile } from 'utils';

@Service()
export class Database {
    constructor(readonly http: Http) {}
    async getLatestVersion(): Promise<GithubRelease> {
        const githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
        const info = this.http.json<GithubRelease>(githubDownloadUrl);
        return info;
    }

    async getData(version: GithubRelease, progress?: Progress): Promise<EHTDatabase> {
        const sha = version.target_commitish;
        return await this.http.download<EHTDatabase>(
            `https://cdn.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@${sha}/db.raw.json`,
            'GET',
            progress,
            'json',
        );
    }
}
