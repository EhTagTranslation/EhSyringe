const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'syringe': path.resolve(__dirname, 'src/syringe.ts'),
        'background': path.resolve(__dirname, 'src/background.ts'),
        'tag-tip': path.resolve(__dirname, 'src/plugin/tag-tip/tag-tip.ts'),
        'introduce': path.resolve(__dirname, 'src/plugin/introduce/introduce.ts'),
    'popup': path.resolve(__dirname, 'src/popup.ts'),},
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
                                require('postcss-import')({root: loader.resourcePath}),
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
                                require('postcss-import')({root: loader.resourcePath}),
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
            {from: 'src/assets', to: 'assets'},{ from: 'src/template', to: 'template'},
            {from: 'src/manifest.json', to: 'manifest.json'},
            {
                from: 'src/data/tag.db.json',
                to: 'assets/tag.db',
            },
        ]),
        new ZipPlugin({
            filename: "../release/eh-syringe.zip",
            exclude: [/\.js\.map$/],
        })
        //
        // new FileManagerPlugin({
        //     onEnd: {
        //         copy: [
        //             { source: 'src/assets', destination: 'dist/assets' },
        //         ],
        //         mkdir: [
        //             'release'
        //         ],
        //         archive: [
        //
        //
        //         ]
        //     }
        // })
    ],
    devtool: 'source-map',
};

