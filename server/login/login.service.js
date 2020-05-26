'use-strict';
const express = require('express');
const database = require('../database')

// validar se los datos ingresados existen en la base de datos
function login(params) {
  let query = 'SELECT * FROM USUARIO_SISTEMA WHERE CORREO = $1 AND CONTRASENA = $2';
  let {correo, contrasena} = params.datos,
  values = [correo, contrasena]
  return database.query(query, values)
    .then(response => {
      return response.rows[0];
    })
    .catch(err => { console.log("errorr: " + err) });
}

module.exports = {
  login,
}