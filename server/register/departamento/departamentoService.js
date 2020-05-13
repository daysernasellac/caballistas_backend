'use-strict';
const express = require('express');
const pool = require('../../../database').getPool();

// get all departaments
function getDepartamentos(request, response) {
  pool.query('SELECT * FROM TIPO_DEPARTAMENTO', (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      return response.json(res.rows)
    }
  })
}

module.exports = {
  getDepartamentos
}