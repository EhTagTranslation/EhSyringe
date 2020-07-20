const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WebExtensionPlugin = require('webpack-webextension-plugin');
const webpack = require('webpack');
const WebpackUserScript = require('webpack-userscript');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { argv } = require('yargs');
const glob = require('glob');
const fs = require('fs');
const url = require('url');

/** @type {import('type-fest').PackageJson} */
const pkgJson = require('./package.json');

let type = '';

/** @type {webpack.Configuration} */
const config = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                include: [path.resolve(__dirname, 'src/resources')],
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[folder]/[name].[hash:8].[ext]',
                    },
                },
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
            if (req.startsWith('./interface/') || req.includes('providers/interface/')) {
                return;
            }
            req = req.replace('providers/', `providers/${type}/`);
            resource.request = req;
        }),
    ],
    devtool: 'inline-source-map',
    performance: {
        maxEntrypointSize: 2 * 1024 ** 2,
        maxAssetSize: 2 * 1024 ** 2,
    },
};

if (argv.userScript) {
    type = 'user-script';
    config.entry = path.resolve(__dirname, 'src/user-script.ts');
    config.plugins.push(
        new WebpackUserScript({
            headers: {
                name: String(pkgJson.displayName || pkgJson.name),
                namespace: `https://github.com/EhTagTranslation/`,
                match: ['*://e-hentai.org/*', '*://*/e-hentai.org/*', '*://exhentai.org/*', '*://*/exhentai.org/*'],
                icon:
                    'data:image/svg+xml;base64,' +
                    fs.readFileSync(path.resolve(__dirname, 'src/assets/logo.svg')).toString('base64'),
                updateURL: url.resolve(pkgJson.homepage, `releases/latest/download/${pkgJson.name}.meta.js`),
                downloadURL: url.resolve(pkgJson.homepage, `releases/latest/download/${pkgJson.name}.user.js`),
                'run-at': 'document-start',
                grant: [
                    'GM_addStyle',
                    'GM_deleteValue',
                    'GM_listValues',
                    'GM_setValue',
                    'GM_getValue',
                    'GM_log',
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
            patterns: [
                { from: 'src/assets', to: 'assets' },
                { from: 'src/template', to: 'template' },
            ],
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
