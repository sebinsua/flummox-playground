'use strict';
/* eslint no-underscore-dangle: 0 */

var fs = require('fs'),
    path = require('path');

var _ = require('lodash');

var CONFIG_PATH = '/etc/flummox-playground/config.json',
    defaultConfig = require('./default.json'),
    instanceConfig = fs.existsSync(CONFIG_PATH) ? require(CONFIG_PATH) : {},
    envConfig = _.pick(process.env, Object.keys(defaultConfig));

// The config is preferred in this order: envConfig > instanceConfig > defaultConfig.
var config = _.extend(defaultConfig, instanceConfig, envConfig);

module.exports = config;
