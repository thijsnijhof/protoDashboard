'use strict';

var path = require('path');
var utils = require('./utils');
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// require('!style-loader!css-loader!./styles.css')
// import 'css-loader'
// import 'style-loader'

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: ['file-loader']
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('test')]
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: [/* 'style-loader' */'css-loader', 'to-string-loader']
      })
      // test: /\.css$/,
      // loader: 'css-loader!style-loader'

    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      use: ['file-loader']
    }]
  },
  plugins: [new ExtractTextPlugin('styles.css')]
};

if (process.env.NODE_ENV === 'test') {
  //  exclude npm deps from test bundle
  module.exports.externals = [require('webpack-node-externals')()];
  //  use inline source map so it works with mocha webpack
  module.exports.devtool = 'inline-cheap-module-source-map';
}
//# sourceMappingURL=webpack.base.conf.js.map