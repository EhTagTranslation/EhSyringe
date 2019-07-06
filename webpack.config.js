const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'syringe': path.resolve(__dirname, 'src/syringe.ts'),
    'tag-tip': path.resolve(__dirname, 'src/tag-tip.ts'),
    'background': path.resolve(__dirname, 'src/background.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'build/script'),
    filename: '[name].js'
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
        exclude : '/node_modules',
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
                    require('autoprefixer')(),
                    require('cssnano')()
                  ]
                }
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    // new copyWebpackPlugin([{
    //   form: 'src/assets',
    //   to: 'build/assets',
    // }])
  ],
  devtool: 'source-map',
};