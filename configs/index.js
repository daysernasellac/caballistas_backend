"use strict";;
const env = process.env.NODE_ENV || 'production';
const defaultConfig = require(`./${env}`);
console.log(process.env.NODE_ENV);
module.exports = defaultConfig;
