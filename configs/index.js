"use strict";;
const env = process.env.NODE_ENV || 'local';
const defaultConfig = require(`./${env}`);

module.exports = defaultConfig;
