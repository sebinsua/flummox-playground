/* eslint-env node */
'use strict';

var webpack = require('webpack');
var path = require('path');

var assetsPath = path.join(__dirname, '/public/assets/');

var HOST = 'localhost';
var PORT = 8081;

module.exports = {
  watch: true,
  colors: true,
  progress: true,
  devtool: 'cheap-inline-source-map',
  entry: {
    'app': [
      'webpack-dev-server/client?http://' + HOST + ':' + PORT,
      'webpack/hot/only-dev-server',
      './client',
      './scss/app.scss'
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name].js',
    publicPath: 'http://' + HOST + ':' + PORT + '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env.BROWSER': JSON.stringify(true),
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?externalHelpers&optional[]=es7.asyncFunctions,optional[]=runtime'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true' }
    ]
  }
};
