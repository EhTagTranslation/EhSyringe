const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WebExtensionPlugin = require('webpack-webextension-plugin');
const webpack = require('webpack');
const WebpackUserScript = require('webpack-userscript');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { argv } = require('yargs');
const glob = require('glob');
const execa = require('execa');

const dev = argv.mode === 'development';
/** @type {import('type-fest').PackageJson} */
const pkgJson = require('./package.json');

let type = '';

/** @type {webpack.Configuration} */
const config = {
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
    performance: {
        maxEntrypointSize: 2 * 1024 ** 2,
        maxAssetSize: 2 * 1024 ** 2,
    },
    devtool: dev ? 'inline-source-map' : 'source-map',
};

if (argv.userScript) {
    type = 'user-script';
    config.entry = path.resolve(__dirname, 'src/user-script.ts');
    const currentHEAD = execa.commandSync('git rev-parse HEAD').stdout.trim();
    config.plugins.push(
        new WebpackUserScript({
            headers: {
                name: String(pkgJson.displayName || pkgJson.name),
                namespace: pkgJson.homepage,
                match: ['*://e-hentai.org/*', '*://*.e-hentai.org/*', '*://exhentai.org/*', '*://*.exhentai.org/*'],
                icon: `${pkgJson.homepage}/raw/${currentHEAD}/src/assets/logo.svg`,
                updateURL: `${pkgJson.homepage}/releases/latest/download/${pkgJson.name}.meta.js`,
                downloadURL: `${pkgJson.homepage}/releases/latest/download/${pkgJson.name}.user.js`,
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
            },
        }),
    );
    config.output = {
        path: path.resolve(__dirname, 'releases'),
        filename: `${pkgJson.name}.user.js`,
    };
} else {
    type = 'web-ext';
    config.entry = glob.sync('src/web-ext/**/*.ts').reduce(function (obj, el) {
        obj[path.parse(el).name] = path.resolve(__dirname, el);
        return obj;
    }, {});
    config.output = {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script/[name].js',
    };
    const vendor = argv.vender ? String(argv.vender) : undefined;
    config.plugins.push(
        new CopyPlugin({
            patterns: [{ from: 'src/assets', to: 'assets' }],
        }),
        new WebExtensionPlugin({
            vendor,
            manifestDefaults: {
                name: pkgJson.displayName,
                short_name: pkgJson.displayName,
                description: pkgJson.description,
                author: pkgJson.author,
                version: pkgJson.version,
                homepage_url: pkgJson.homepage,
            },
        }),
    );
}

module.exports = config;
