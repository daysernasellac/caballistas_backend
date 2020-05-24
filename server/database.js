const { Pool } = require('pg')
const config =require('../configs')
const pool = new Pool(config.database)
module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
}