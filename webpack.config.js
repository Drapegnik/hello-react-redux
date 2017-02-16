/**
 * Created by Drapegnik on 03.02.17.
 */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loaders: ['react-hot-loader', 'babel-loader', 'eslint-loader'],
      include: path.join(__dirname, 'src'),
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css-loader?module!cssnext-loader'),
    }],
  },
};
