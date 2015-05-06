/* eslint-env node */
'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var assetsPath = path.join(__dirname, '/public/assets/');

module.exports = {
  colors: true,
  progress: true,
  devtool: 'source-map',
  entry: {
    'app': [
      './client',
      './scss/app.scss'
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name].min.js',
    publicPath: '/assets/'
  },
  plugins: [
    new ExtractTextPlugin('[name].min.css'),

    new webpack.NormalModuleReplacementPlugin(/get-instance-config/, process.cwd() + '/client/mocks/return-empty-object.js'),

    new webpack.DefinePlugin({
      'process.env.BROWSER': JSON.stringify(true),
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },      
      { test: /\.jsx?$/, loaders: ['babel?externalHelpers&optional[]=es7.asyncFunctions,optional[]=runtime'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true') }
    ]
  }
};
