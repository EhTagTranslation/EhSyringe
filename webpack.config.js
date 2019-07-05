const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'syringe': path.resolve(__dirname, 'src/syringe.ts'),
    'tag-tip': path.resolve(__dirname, 'src/tag-tip.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'build/script'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
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
          'css-loader'
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