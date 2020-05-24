'use-strict';
const express = require('express');
const pool = require('../../../database');

// get all departaments
function getDepartamentos() {
  return pool.query('SELECT * FROM TIPO_DEPARTAMENTO')
    .then(response => response.rows)
    .catch(err => { throw new Error(err) });
}

module.exports = {
  getDepartamentos
}
