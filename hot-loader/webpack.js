'use strict';

require('babel/register')({
  optional: ['es7.asyncFunctions']
});

require('../shared/init');

require('./webpack-server');
