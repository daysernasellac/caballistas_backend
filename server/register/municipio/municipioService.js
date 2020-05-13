'use-strict';
const pool = require('../../../database').getPool();

// get all departaments
function getMunicipios(request, response) {
  pool.query('SELECT * FROM TIPO_MUNICIPIO', (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      return response.json(res.rows)
    }
  })
}

module.exports = {
    getMunicipios
}