/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/11/17.
 */

'use strict';
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: ['whatwg-fetch', './app/index.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'data'),
    compress: true,
    port: 9000
  },
  devtool: "source-map",
  plugins: [HtmlWebpackPluginConfig]
};
