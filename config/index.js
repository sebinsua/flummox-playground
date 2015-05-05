/* eslint no-underscore-dangle: 0 */

import _ from 'lodash';

const defaultConfig = require('./default.json');
const instanceConfig = require('./get-instance-config');
const envConfig = _.pick(process.env, Object.keys(defaultConfig));

// The config is preferred in this order: envConfig > instanceConfig > defaultConfig.
const config = _.extend(defaultConfig, instanceConfig, envConfig);

export default config;
