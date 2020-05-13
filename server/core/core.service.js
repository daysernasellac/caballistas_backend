'use-strict';
const express = require('express');
const pool = require('../database').getPool();

// Tomar todos los departamentos
function getDepartamentos(request, response) {
  pool.query('SELECT * FROM TIPO_DEPARTAMENTO', (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      return response.json(res.rows)
    }
  })
}

// Tomar todos los municipios
function getMunicipios(request, response) {
    pool.query('SELECT * FROM TIPO_MUNICIPIO', (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        return response.json(res.rows)
      }
    })
  }

  function getTipoDocumentos(request, response) {
    pool.query('SELECT * FROM TIPO_DOCUMENTO', (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        return response.json(res.rows)
      }
    })
  }

module.exports = {
  getDepartamentos,
  getMunicipios,
  getTipoDocumentos
}