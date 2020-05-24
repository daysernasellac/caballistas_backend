'use-strict';
const pool = require('../../../database').getPool();

// get all departaments
function getMunicipios() {
  return pool.query('SELECT * FROM TIPO_MUNICIPIO')
    .then(response => response.rows)
    .catch(err => { throw new Error(err) });
}

module.exports = {
  getMunicipios
}
