const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const WebExtensionPlugin = require('webpack-webextension-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackUserScript = require('webpack-userscript');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { argv } = require('yargs');
const glob = require('glob');
const execa = require('execa');
const semver = require('semver');
/** @type { import('./src/info').packageJson & import('type-fest').PackageJson } */
const pkgJson = require('./package.json');

const dev = (Array.isArray(argv.mode) ? argv.mode.pop() : argv.mode) === 'development';
const devServer = !!process.env.WEBPACK_DEV_SERVER;
const version = semver.parse(pkgJson.version);
const repo = new URL(pkgJson.homepage).pathname.replace(/(^\/|\/$)/g, '');
pkgJson.homepage = pkgJson.homepage.replace(/\/$/, '');
version.prerelease = version.build = [];

/** @type {'user-script' | 'web-ext'} */
let type;

/** @type {webpack.Configuration} */
const config = {
    mode: dev ? 'development' : 'production',
    module: {
        rules: [
            {
                include: [path.resolve(__dirname, 'src/resources'), path.resolve(__dirname, 'src/assets')],
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[folder]/[name].[hash:8].[ext]',
                    },
                },
            },
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: dev
                            ? path.resolve(__dirname, 'tsconfig.json')
                            : path.resolve(__dirname, 'tsconfig.build.json'),
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                exclude: '/node_modules',
                use: [
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
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('postcss-cssnext')(),
                                require('autoprefixer')(),
                                require('cssnano')(),
                            ],
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
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
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('postcss-cssnext')(),
                                require('cssnano')(),
                            ],
                        },
                    },
                ],
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
    ],
    performance: false,
    devtool: dev ? 'eval-source-map' : 'source-map',
    devServer: {
        // 在 e 站使用调试功能需要连接 websocket 到 localhost，必须启用 HTTPS
        // 启用 chrome://flags/#allow-insecure-localhost
        https: true,
        port: 48792,
        writeToDisk: true,
        allowedHosts: ['.e-hentai.org', '.exhentai.org'],
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    optimization: {},
};

if (argv.analyze) {
    config.plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
        }),
    );
}

if (argv.userScript) {
    type = 'user-script';

    // 外部脚本
    config.externals = {
        rxjs: 'rxjs',
        'rxjs/operators': ['rxjs', 'operators'],
    };
    const externalUrls = [
        `https://unpkg.com/core-js-bundle@${pkgJson.dependencies['core-js']}/minified.js`,
        `https://unpkg.com/rxjs@${pkgJson.dependencies['rxjs']}/bundles/rxjs.umd.min.js`,
    ];

    config.optimization.minimize = false;
    const currentHEAD = execa.commandSync('git rev-parse HEAD').stdout.trim();
    const fileHost = devServer
        ? `${config.devServer.https ? 'https' : 'http'}://localhost:${config.devServer.port || 8080}`
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

    config.entry = { main: path.resolve(__dirname, 'src/user-script/index.ts') };
    if (dev) {
        config.entry.debug = path.resolve(__dirname, 'src/user-script/debug.ts');
        config.plugins.push(
            new webpack.DefinePlugin({
                userScriptMainSource: JSON.stringify(`${fileHost}/${fileName('main')}`),
            }),
        );
    }
    config.output = {
        path: path.resolve(__dirname, 'releases'),
        filename: (data) => fileName(data.chunk.name),
    };
    config.plugins.push(
        new WebpackUserScript({
            headers: (data) => ({
                name: pkgJson.displayName || pkgJson.name,
                namespace: pkgJson.homepage,
                version: dev ? `[version]+build.[buildTime].[buildNo]` : `[version]`,
                license: pkgJson.license,
                compatible: ['firefox >= 60', 'edge >= 16', 'chrome >= 61', 'safari >= 11', 'opera >= 48'],
                match: ['*://e-hentai.org/*', '*://*.e-hentai.org/*', '*://exhentai.org/*', '*://*.exhentai.org/*'],
                icon: `https://cdn.jsdelivr.net/gh/${repo}@${currentHEAD}/src/assets/logo.svg`,
                updateURL: `${fileHost}/${fileName(data.chunkName, true)}`,
                downloadURL: `${fileHost}/${fileName(data.chunkName)}`,
                'run-at': 'document-start',
                require: externalUrls,
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
    type = 'web-ext';
    config.optimization.splitChunks = {
        name: 'vendor',
        chunks: 'all',
    };
    config.devtool = 'inline-source-map';
    config.entry = glob.sync('src/web-ext/**/*.ts').reduce(function (obj, el) {
        const name = path.parse(el).name;
        if (name !== 'polyfills') obj[name] = path.resolve(__dirname, el);
        return obj;
    }, {});
    config.output = {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script/[name].js',
    };
    const vendor = argv.vendor ? String(argv.vendor) : undefined;
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

config.devServer.contentBase = config.output.path;

module.exports = () => config;
