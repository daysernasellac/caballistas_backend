'use-strict';
const express = require('express');
const pool = require('../database')

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
  let  {tipo_departamento} = request.params,
        values = [tipo_departamento];
  const text = 'SELECT * FROM TIPO_MUNICIPIO WHERE TIPO_DEPARTAMENTO = $1';
  pool.query( text, values, (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        return response.json(res.rows);
      }
    })
  }

  // Tomar todos los tipos de documentos
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