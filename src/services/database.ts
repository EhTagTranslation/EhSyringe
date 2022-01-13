import { Service } from '.';
import type { GithubRelease, EHTDatabase } from 'interface';
import { Http, Progress } from './http';
import { Logger } from './logger';

@Service()
export class Database {
    constructor(readonly http: Http, readonly logger: Logger) {}
    async getLatestVersion(): Promise<GithubRelease> {
        const githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
        const info = this.http.json<GithubRelease>(githubDownloadUrl);
        return info;
    }

    private dataUrls(version: GithubRelease): string[] {
        const dataJson = /<!--((.|\s)+?)-->/gi.exec(version.body);
        if (!dataJson) throw new Error(`GitHub 发布数据无法解析，可能需要更新插件版本`);
        try {
            const data = JSON.parse(dataJson[1]) as Record<string, string>;
            const sha = data.mirror;
            if (typeof sha != 'string') throw new Error();
            return [
                `https://cdn.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@${sha}/db.html.json`,
                `https://gitcdn.xyz/cdn/EhTagTranslation/DatabaseReleases/${sha}/db.html.json`,
                `https://rawcdn.githack.com/EhTagTranslation/DatabaseReleases/${sha}/db.html.json`,
                `https://cdn.statically.io/gh/EhTagTranslation/DatabaseReleases/${sha}/db.html.json`,
            ];
        } catch {
            throw new Error(`GitHub 发布数据无法解析，可能需要更新插件版本`);
        }
    }

    async getData(version: GithubRelease, progress?: (p: number) => void): Promise<EHTDatabase> {
        const urls = this.dataUrls(version);
        const asset = version.assets.find((asset) => asset.name === 'db.html.json');
        const errors: Error[] = [];
        for (const url of urls) {
            try {
                const result = await this.http.download<EHTDatabase>(
                    url,
                    'GET',
                    (ev) => {
                        const total = ev.lengthComputable ? ev.total : asset != null ? asset.size : 0;
                        if (total > 0) progress?.(ev.loaded / total);
                        else progress?.(0);
                    },
                    'json',
                );
                if (result?.head?.sha === version.target_commitish && result?.data) {
                    this.logger.log(`从 ${url} 下载成功`);
                    return result;
                }
            } catch (ex) {
                errors.push(ex as Error);
                this.logger.warn(`尝试从 ${url} 下载失败`, ex);
            }
        }
        if (errors.length === 0) throw new Error('没有获取到有效的文件');
        const e = errors[errors.length - 1];
        Object.defineProperty(e, 'errors', {
            value: errors,
            enumerable: true,
        });
        throw e;
    }
}
