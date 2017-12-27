const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { resolve, posix } = require('path')

const {
  banner,
  filename,
  version,
  vueLoaders
} = require('./utils')

const plugins = [
  new webpack.DefinePlugin({
    '__VERSION__': JSON.stringify(version),
    'process.env.NODE_ENV': '"test"'
  }),
  new webpack.BannerPlugin({ banner, raw: true, entryOnly: true }),
  new ExtractTextPlugin({
    filename: `${filename}.css`,
    // Don't extract css in test mode
    disable: /^(common|test)$/.test(process.env.NODE_ENV)
  })
]

module.exports = {
  output: {
    path: resolve(__dirname, '../dist'),
    filename: `${filename}.common.js`
  },
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.vue', 'scss'],
    alias: {
      'src': resolve(__dirname, '../src'),
      '@': resolve(__dirname, '../src'),
      '$': resolve(__dirname, '../src/components'),
      '#': resolve(__dirname, '../src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: vueLoaders,
          postcss: [require('postcss-cssnext')()]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve(__dirname, '../src'), resolve(__dirname, '../test')]
      },
      {
        test: /\.woff2$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: posix.join('bg-theme-assets', '[name].[ext]'),
          mimetype: 'font-woff2'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: posix.join('bg-theme-assets', '[name].[ext]')
        }
      },
    ]
  },
  plugins
}
