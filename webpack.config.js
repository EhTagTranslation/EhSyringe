import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { execaCommandSync } from 'execa';
import semver from 'semver';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import _WebExtensionPlugin from '@webextension-toolbox/webpack-webextension-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackUserScript from 'webpack-userscript';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

/** @type {typeof _WebExtensionPlugin} */
const WebExtensionPlugin = _WebExtensionPlugin.default;

const __dirname = path.resolve(fileURLToPath(import.meta.url), '../');

/** @type { import('./src/info') & import('type-fest').PackageJson } */
const pkgJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, './package.json')));
const manifestJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, './manifest.json')));

/** @type {webpack.RuleSetUseItem[]} */
const cssLoaders = [
    {
        loader: 'style-loader',
        options: {
            insert: ':root',
        },
    },
    {
        loader: 'css-loader',
        options: {
            importLoaders: 1,
        },
    },
    {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: ['postcss-import', 'postcss-preset-env', 'cssnano'],
            },
        },
    },
];

export default async (env = {}, argv = {}) => {
    const dev = argv.mode === 'development';
    const devServer = !!env.WEBPACK_SERVE;
    const version = semver.parse(pkgJson.version);
    const repo = new URL(pkgJson.homepage).pathname.replace(/(^\/|\/$)/g, '');
    pkgJson.homepage = pkgJson.homepage.replace(/\/$/, '');
    version.prerelease = version.build = [];

    /** @type {'user-script' | 'web-ext'} */
    const type = env.type;

    /** @type {webpack.Configuration} */
    const config = {
        mode: dev ? 'development' : 'production',
        module: {
            rules: [
                {
                    include: [path.resolve(__dirname, 'src/assets')],
                    type: 'asset',
                },
                {
                    test: /\.ts$/,
                    exclude: '/node_modules',
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: ['@babel/plugin-transform-runtime'],
                            },
                        },
                        'ts-loader',
                    ],
                },
                {
                    test: /\.less$/,
                    exclude: '/node_modules',
                    use: [...cssLoaders, 'less-loader'],
                },
                {
                    test: /\.css$/,
                    use: [...cssLoaders],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            plugins: [new TsconfigPathsPlugin()],
        },
        plugins: [
            new webpack.NormalModuleReplacementPlugin(/providers\/(.+)$/, (resource) => {
                /** @type {string} */
                let req = resource.request;
                if (req.startsWith('providers/common/') || req.startsWith(`providers/${type}/`)) {
                    return;
                }
                req = req.replace('providers/', `providers/${type}/`);
                resource.request = req;
            }),
            new webpack.DefinePlugin({
                __type: JSON.stringify(type),
            }),
        ],
        performance: false,
        devtool: dev ? 'eval-source-map' : 'source-map',
        optimization: {},
    };

    if (env.analyze) {
        config.plugins.push(
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
            }),
        );
    }

    if (type === 'user-script') {
        const outputPath = path.resolve(__dirname, 'releases');

        if (devServer) {
            // 在 e 站使用调试功能需要连接 websocket 到 localhost，必须启用 HTTPS
            // 启用 chrome://flags/#allow-insecure-localhost
            config.devServer = {
                port: 48792,
                allowedHosts: [
                    '.e-hentai.org',
                    '.exhentai.org',
                    '.hath.network',
                    '.exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion',
                ],
                liveReload: false,
                hot: false,
                static: {
                    directory: outputPath,
                },
                devMiddleware: {
                    writeToDisk: true,
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Private-Network': 'true',
                },
                client: {
                    webSocketURL: 'ws://localhost:48792/ws',
                },
            };
        }

        config.optimization.minimize = false;
        const currentHEAD = execaCommandSync('git rev-parse HEAD').stdout.trim();
        const fileHost = devServer
            ? `${config.devServer.https ? 'https' : 'http'}://${config.devServer.host || 'localhost'}:${
                  config.devServer.port || 8080
              }`
            : `${pkgJson.homepage}/releases/latest/download`;
        /**
         * @param {string} chunkName
         * @param {boolean} meta
         */
        const fileName = (chunkName, meta = false) => {
            const name = chunkName === 'main' ? `${pkgJson.name}` : `${pkgJson.name}.${chunkName}`;
            const ext = meta ? 'meta' : 'user';
            return `${name}.${ext}.js`;
        };

        config.entry = {
            main: [
                path.resolve(__dirname, 'src/user-script/polyfills.ts'),
                path.resolve(__dirname, 'src/user-script/index.ts'),
            ],
        };
        if (dev) {
            config.entry.debug = path.resolve(__dirname, 'src/user-script/debug.ts');
            config.plugins.push(
                new webpack.DefinePlugin({
                    userScriptMainSource: JSON.stringify(`${fileHost}/${fileName('main')}`),
                }),
            );
        }
        config.output = {
            path: outputPath,
            publicPath: '/',
            filename: (data) => fileName(data.chunk.name),
        };
        config.plugins.push(
            new WebpackUserScript({
                headers: (data) => ({
                    name: pkgJson.displayName || pkgJson.name,
                    description: manifestJson.description,
                    namespace: pkgJson.homepage,
                    version: dev ? `[version]+build.[buildTime].[buildNo]` : `[version]`,
                    license: pkgJson.license,
                    compatible: ['firefox >= 60', 'edge >= 16', 'chrome >= 61', 'safari >= 11', 'opera >= 48'],
                    match: manifestJson.content_scripts[0].matches,
                    exclude: manifestJson.content_scripts[0].exclude_matches,
                    icon: `https://fastly.jsdelivr.net/gh/${repo}@${currentHEAD}/src/assets/logo.svg`,
                    updateURL: `${fileHost}/${fileName(data.chunkName, true)}`,
                    downloadURL: `${fileHost}/${fileName(data.chunkName)}`,
                    'run-at': 'document-start',
                    grant: [
                        'unsafeWindow',
                        'GM_deleteValue',
                        'GM_listValues',
                        'GM_setValue',
                        'GM_getValue',
                        'GM_addValueChangeListener',
                        'GM_removeValueChangeListener',
                        'GM_openInTab',
                        'GM_notification',
                    ],
                }),
                proxyScript: { enable: false },
            }),
        );
    } else {
        config.devtool = 'inline-source-map';
        config.entry = (await glob('src/web-ext/**/*.ts')).reduce(function (obj, el) {
            const name = path.parse(el).name;
            if (name !== 'polyfills') obj[name] = path.resolve(__dirname, el);
            return obj;
        }, {});
        config.output = {
            path: path.resolve(__dirname, 'dist'),
            filename: 'script/[name].js',
            publicPath: '/',
        };
        const vendor = env.vendor ? String(env.vendor) : undefined;
        config.plugins.push(
            new CopyPlugin({
                patterns: [{ from: 'src/assets', to: 'assets' }],
            }),
            new HtmlWebpackPlugin({
                title: pkgJson.displayName,
                filename: 'assets/popup.html',
                template: 'src/web-ext/popup.html',
                chunks: ['popup'],
            }),
            new WebExtensionPlugin({
                vendor,
                manifestDefaults: {
                    name: pkgJson.displayName,
                    short_name: pkgJson.displayName,
                    description: pkgJson.description,
                    author: pkgJson.author,
                    version: version.format(),
                    homepage_url: pkgJson.homepage,
                },
            }),
        );
    }

    return config;
};
