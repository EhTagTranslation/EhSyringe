import { Service } from '.';
import type { GithubRelease, EHTDatabase } from 'interface';
import { Http } from './http';
import { Logger } from './logger';
import { Storage } from './storage';

@Service()
export class Database {
    constructor(
        readonly http: Http,
        readonly storage: Storage,
        readonly logger: Logger,
    ) {}
    async getLatestVersion(): Promise<GithubRelease> {
        const githubDownloadUrl = 'https://ehtt.fly.dev/octokit/release'; // 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
        const info = await this.http.json<GithubRelease | { message: string }>(githubDownloadUrl);
        if (!('target_commitish' in info)) {
            if (typeof info.message != 'string') {
                throw new Error('响应有误');
            }
            if (info.message.startsWith('API rate limit exceeded')) {
                throw new Error('GitHub API 调用次数超过限制，请稍后再试');
            }
            throw new Error(info.message);
        }
        return info;
    }

    private dataUrls(version: GithubRelease): string[] {
        const dataJson = /<!--(.+?)-->/gis.exec(version.body);
        if (!dataJson) throw new Error(`GitHub 发布数据无法解析，可能需要更新插件版本`);
        try {
            const data = JSON.parse(dataJson[1]) as Record<string, string>;
            const sha = data.mirror;
            if (typeof sha != 'string') throw new Error();
            return [
                `https://fastly.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@${sha}/db.html.json`,
                `https://gcore.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@${sha}/db.html.json`,
                `https://cdn.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@${sha}/db.html.json`,
                `https://testingcf.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@${sha}/db.html.json`,
                `https://test1.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@${sha}/db.html.json`,
                `https://originfastly.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@${sha}/db.html.json`,
                `https://cdn.statically.io/gh/EhTagTranslation/DatabaseReleases/${sha}/db.html.json`,
                `https://rawcdn.githack.com/EhTagTranslation/DatabaseReleases/${sha}/db.html.json`,
            ];
        } catch {
            throw new Error(`GitHub 发布数据无法解析，可能需要更新插件版本`);
        }
    }

    private async fetchData(
        version: GithubRelease | undefined,
        total: number,
        url: string,
        progress?: (p: number) => void,
    ): Promise<EHTDatabase> {
        try {
            const result = await this.http.download<EHTDatabase | undefined>(
                url,
                'GET',
                (loaded) => {
                    if (total > 0) progress?.(loaded / total);
                    else progress?.(0);
                },
                'json',
            );
            if (
                !result ||
                !Array.isArray(result.data) ||
                result.data.some((item) => item.data == null || typeof item.data !== 'object')
            ) {
                throw new Error(`下载的数据格式不正确: ${JSON.stringify(result)}`);
            }
            if (version && result?.head?.sha !== version.target_commitish) {
                throw new Error(`版本不匹配: ${result?.head?.sha} !== ${version.target_commitish}`);
            }
            this.logger.log(`从 ${url} 下载成功`);
            return result;
        } catch (ex) {
            this.logger.warn(`尝试从 ${url} 下载失败`, ex);
            throw new Error(`从 ${url} 下载失败: ${(ex as Error).message || String(ex)}`);
        }
    }

    private async getOverride(): Promise<EHTDatabase | undefined> {
        const config = await this.storage.get('config');
        const url = config?.overrideDbUrl?.trim();
        if (!url) {
            this.logger.debug(`未配置外部数据库 URL`);
            return undefined;
        }
        try {
            const u = new URL(url);
            if (u.protocol !== 'http:' && u.protocol !== 'https:') {
                throw new Error('不支持的协议');
            }
        } catch (ex) {
            this.logger.error(`无效的外部数据库 URL ${url}：${(ex as Error).message || String(ex)}`);
        }
        this.logger.debug(`从 URL ${url} 加载外部数据库`);
        try {
            return await this.fetchData(undefined, 0, url, undefined);
        } catch (ex) {
            this.logger.error(`加载外部数据库失败：${(ex as Error).message || String(ex)}`);
            return undefined;
        }
    }

    async getData(
        version: GithubRelease,
        progress?: (p: number) => void,
    ): Promise<{ base: EHTDatabase; override?: EHTDatabase }> {
        const urls = this.dataUrls(version);
        const asset = version.assets.find((asset) => asset.name === 'db.html.json');
        const total = asset != null ? asset.size : 0;
        const errors: Error[] = [];
        const override = this.getOverride();
        let base;
        for (const url of urls) {
            try {
                base = await this.fetchData(version, total, url, progress);
                break;
            } catch (ex) {
                errors.push(ex as Error);
            }
        }
        if (!base) {
            if (errors.length === 0) throw new Error('没有获取到有效的文件');
            const e = errors[errors.length - 1];
            Object.defineProperty(e, 'errors', {
                value: errors,
                enumerable: true,
            });
            throw e;
        }
        return {
            base,
            override: await override,
        };
    }
}
