"use strict";;
const env = process.env.NODE_ENV || 'production';
const defaultConfig = require(`./${env}`);

module.exports = defaultConfig;
