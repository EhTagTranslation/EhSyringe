const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { WebExtWebpackPlugin } = require('webext-webpack-plugin');

const webextRunParams = (process.argv.indexOf('--android') > 0) ? ({
    browserConsole: false,
    target: 'firefox-android',
    adbDevice: '696ea70c',
}) : ({
    browserConsole: false,
    startUrl: ['about:debugging#addons', 'https://e-hentai.org']
});

module.exports = {
    entry: {
        'background': path.resolve(__dirname, 'src/background.ts'),
        'document-end': path.resolve(__dirname, 'src/document-end.ts'),
        'document-start': path.resolve(__dirname, 'src/document-start.ts'),
        'popup': path.resolve(__dirname, 'src/popup/popup.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                exclude: '/node_modules',
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insertInto: ':root'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('postcss-cssnext')(),
                                require('autoprefixer')(),
                                require('cssnano')()
                            ]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insertInto: ':root'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('postcss-cssnext')(),
                                require('cssnano')()
                            ]
                        }
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CopyPlugin([
            { from: 'src/assets', to: 'assets' }, { from: 'src/template', to: 'template' },
            { from: 'src/manifest.json', to: 'manifest.json' },
            {
                from: 'src/data/tag.db.json',
                to: 'assets/tag.db',
            },
        ]),
        new WebExtWebpackPlugin({
            build: {
                artifactsDir: 'artifacts',
                overwriteDest: true
            },
            run: webextRunParams
        })
    ],
    devtool: 'source-map',
};
