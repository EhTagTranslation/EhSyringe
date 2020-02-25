const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { WebExtWebpackPlugin } = require('webext-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

const plugins = [];

const pack = process.argv.indexOf('--pack') > 0;
const firefox = process.argv.indexOf('--firefox') > 0;
const android = process.argv.indexOf('--android') > 0;
const nodb = process.argv.indexOf('--no-db') > 0;

if (firefox || android) {
    const webextRunParams = android ? ({
        browserConsole: false,
        target: 'firefox-android',
        adbDevice: '696ea70c',
    }) : ({
        browserConsole: false,
        firefox: 'firefoxdeveloperedition',
        startUrl: ['about:debugging#addons', 'https://e-hentai.org']
    });
    plugins.push(
        new WebExtWebpackPlugin({
            build: {
                artifactsDir: 'artifacts',
                overwriteDest: true
            },
            run: webextRunParams
        })
    )
}

if (pack) {
    plugins.push(
        new ZipPlugin({
            exclude: /^\.\./,
            path: path.resolve(__dirname, 'release'),
            pathMapper: p => p.replace(/\.firefox\.([^\.]*)$/i, '.$1'),
            filename: 'EhSyringe.firefox'
        }));
    plugins.push(
        new ZipPlugin({
            exclude: /^\.\./,
            path: path.resolve(__dirname, 'release'),
            pathMapper: p => { console.log(p); return p.replace(/\.chrome\.([^\.]*)$/i, '.$1') },
            filename: 'EhSyringe.chrome',
            pathPrefix: 'EhSyringe'
        }));
}

function transformManifest(content, isChrome) {
    const data = require("./package.json");
    const manifest = JSON.parse(content.toString());
    if (isChrome) {
        manifest.applications = undefined;
    }
    return Buffer.from(JSON.stringify(manifest, (k, v) => {
        if (k.startsWith('$'))
            return undefined;
        if (typeof v !== 'string')
            return v;
        return v.replace(/\${([\w\$_]+)}/g, (_, key) => data[key]);
    }));
}

const copyPatterns = [
    { from: 'src/assets', to: 'assets' },
    { from: 'src/template', to: 'template' },
];

if (pack) {
    copyPatterns.push(
        {
            from: 'src/manifest.json', to: 'manifest.firefox.json',
            transform: content => transformManifest(content, false),
        },
        {
            from: 'src/manifest.json', to: 'manifest.chrome.json',
            transform: content => transformManifest(content, true),
        });
} else {
    copyPatterns.push({
        from: 'src/manifest.json', to: 'manifest.json',
        transform: content => transformManifest(content, !(firefox || android)),
    })
}

if (nodb) {
    copyPatterns.push({
        from: 'tools/tag-empty.db', to: 'assets/tag.db'
    });
}

module.exports = {
    entry: {
        'background': path.resolve(__dirname, 'src/background/index.ts'),
        'main': path.resolve(__dirname, 'src/main.ts'),
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
                            insert: ':root'
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
                            insert: ':root'
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
        new CopyPlugin(copyPatterns),
        ...plugins,
    ],
    devtool: 'source-map',
};
