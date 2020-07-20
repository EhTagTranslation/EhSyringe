const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WebExtensionPlugin = require('webpack-webextension-plugin');
const webpack = require('webpack');
const WebpackUserscript = require('webpack-userscript');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { argv } = require('yargs');

/** @type { ConstructorParameters< CopyPlugin>[0]['patterns'][number][] } */
const copyPatterns = [
    { from: 'src/assets', to: 'assets' },
    { from: 'src/template', to: 'template' },
];

/** @type {webpack.Configuration} */
const config = {
    entry: {
        background: path.resolve(__dirname, 'src/background/index.ts'),
        main: path.resolve(__dirname, 'src/main.ts'),
        popup: path.resolve(__dirname, 'src/popup/popup.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script/[name].js',
    },
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
                    loader: 'file-loader',
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
    plugins: [new CopyPlugin({ patterns: copyPatterns })],
    devtool: 'source-map',
    performance: {
        maxAssetSize: 1024 ** 2,
    },
};

if (argv.userScript) {
    config.plugins.push(
        new WebpackUserscript({
            headers: {
                version: `[version]`,
            },
        }),
    );
    config.output = {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].user.js',
    };
} else {
    /** @type {import('type-fest').PackageJson} */
    const pkgJson = require('./package.json');
    const vendor = argv.webExtVendor ? String(argv.webExtVendor) : undefined;
    config.plugins.push(
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
