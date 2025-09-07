// @ts-check
import path from 'node:path';
import fs from 'node:fs';
import { glob } from 'glob';
import { execaCommandSync } from 'execa';
import semver from 'semver';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import { WebextensionPlugin } from '@webextension-toolbox/webpack-webextension-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import pkgJson from './package.json' with { type: 'json' };
import manifestJson from './manifest.json' with { type: 'json' };

const __dirname = import.meta.dirname;

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
                    test: /\.js$/,
                    include: /[/\\]node_modules[/\\]/,
                    exclude: [/[/\\]core-js(-pure)?[/\\]/],
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                sourceType: 'unambiguous',
                                presets: ['@babel/preset-env'],
                                plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
                            },
                        },
                    ],
                },
                {
                    test: /\.ts$/,
                    exclude: /[/\\]node_modules[/\\]/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                sourceType: 'unambiguous',
                                presets: ['@babel/preset-env'],
                                plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
                            },
                        },
                        'ts-loader',
                    ],
                },
                {
                    test: /\.less$/,
                    exclude: /[/\\]node_modules[/\\]/,
                    use: [...cssLoaders, 'less-loader'],
                },
                {
                    test: /\.css$/,
                    use: [...cssLoaders],
                },
                {
                    test: /\.ya?ml$/,
                    type: 'json',
                    use: [{ loader: 'yaml-loader', options: { asJSON: true } }],
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
        devtool: dev ? 'eval-source-map' : 'inline-source-map',
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
        fs.mkdirSync(outputPath, { recursive: true });

        if (devServer) {
            // 在 e 站使用调试功能需要连接 websocket 到 localhost，必须启用 HTTPS
            // 启用 chrome://flags/#allow-insecure-localhost
            config.devServer = {
                port: 48792,
                allowedHosts: manifestJson.host_permissions.map((h) =>
                    h.replace(/^\*:\/\/\*?/, '').replace(/\/\*?$/, ''),
                ),
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
        } else {
            config.devtool = false;
            config.plugins.push(
                new webpack.SourceMapDevToolPlugin({
                    publicPath: `${pkgJson.homepage}/releases/download/v${pkgJson.version}/`,
                    filename: '[file].map[query]',
                }),
            );
        }
        config.output = {
            path: outputPath,
            publicPath: '/',
            filename: (data) => fileName(data.chunk.name),
        };
        config.plugins.push(
            new webpack.BannerPlugin({
                banner: ({ filename, chunk }) => {
                    if (!filename.endsWith('.user.js')) {
                        return '';
                    }
                    const meta = {
                        name: pkgJson.displayName || pkgJson.name,
                        version: dev ? `${pkgJson.version}+build.${currentHEAD}` : pkgJson.version,
                        author: pkgJson.author,
                        description: pkgJson.description,
                        icon: `https://fastly.jsdelivr.net/gh/${repo}@${currentHEAD}/src/assets/logo.svg`,
                        license: pkgJson.license,
                        namespace: pkgJson.homepage,
                        homepage: pkgJson.homepage,
                        supportURL: pkgJson.bugs,
                        updateURL: `${fileHost}/${fileName(chunk.name, true)}`,
                        downloadURL: `${fileHost}/${fileName(chunk.name)}`,
                        compatible: ['firefox >= 60', 'edge >= 16', 'chrome >= 61', 'safari >= 11', 'opera >= 48'],
                        match: manifestJson.content_scripts[0].matches,
                        exclude: manifestJson.content_scripts[0].exclude_matches,
                        'run-at': 'document-start',
                        grant: [
                            'GM_deleteValue',
                            'GM_listValues',
                            'GM_setValue',
                            'GM_getValue',
                            'GM_addValueChangeListener',
                            'GM_removeValueChangeListener',
                            'GM_openInTab',
                            'GM_notification',
                        ],
                    };
                    let metaString = '// ==UserScript==\n';
                    for (const key of Object.keys(meta)) {
                        let value = meta[key];
                        if (Array.isArray(value)) {
                            value.forEach((v) => {
                                metaString += `// @${key.padEnd(12)} ${v}\n`;
                            });
                        } else {
                            metaString += `// @${key.padEnd(12)} ${value}\n`;
                        }
                    }
                    metaString += '// ==/UserScript==\n';
                    fs.writeFileSync(path.resolve(outputPath, fileName(chunk.name, true)), metaString, 'utf-8');
                    return metaString;
                },
                raw: true,
                entryOnly: true,
            }),
        );
    } else {
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
            new WebextensionPlugin({
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
