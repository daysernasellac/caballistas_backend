'use strict';
const { Pool } = require('pg');
const config = require('../configs/index'); 

const getPool = function() {
    return new Pool(config.database);
}

module.exports = {
    getPool
}
