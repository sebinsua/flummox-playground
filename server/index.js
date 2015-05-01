#!/usr/bin/env node

require('babel/register')({
  optional: ['es7.asyncFunctions']
});

// require('../shared/init');

var app = require('./app');

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('App started listening on port ' + port);
});
