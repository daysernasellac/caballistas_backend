'use-strict';

const _ = require('lodash'); 
const env = process.env.NODE_ENV || 'local';
const env_config = require(`./${env}`);
let defaultConfig = { env }

module.exports = _.merge(defaultConfig, env_config);
