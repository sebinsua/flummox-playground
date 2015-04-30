/* eslint-env node */
'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  watch: true,
  colors: true,
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './client/app',
    './scss/app'
  ],
  output: {
    path: path.join(__dirname, '/public/js/'),
    filename: 'app.js',
    publicPath: 'http://localhost:8081/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL)
    })
  ],
  resolve: {
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?externalHelpers&optional=es7.asyncFunctions'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  }
};
