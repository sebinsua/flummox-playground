'use strict';
/* eslint no-underscore-dangle: 0 */

// import fs from 'mz/fs';

import _ from 'lodash';

// const CONFIG_PATH = '/etc/flummox-playground/config.json';

const defaultConfig = require('./default.json');
// const instanceConfig = fs.existsSync(CONFIG_PATH) ? require(CONFIG_PATH) : {};
const envConfig = _.pick(process.env, Object.keys(defaultConfig));

// The config is preferred in this order: envConfig > instanceConfig > defaultConfig.
const config = _.extend(defaultConfig,/* instanceConfig,*/ envConfig);

export default config;
