'use strict';
const { Pool } = require('pg');
const config = require('../configs/index'); 

const dbPool = new Pool(config.database);
console.log(dbPool);

exports.module = dbPool;
