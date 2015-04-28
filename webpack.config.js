'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './client/app',
    './scss/app'
  ],
  output: {
    path: path.join(__dirname, '/public/js/'),
    filename: 'app.min.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })/*,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    })*/
  ],
  resolve: {
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel?optional[]=es7.asyncFunctions,optional[]=runtime'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style!css!sass' },
    ]
  }
};
