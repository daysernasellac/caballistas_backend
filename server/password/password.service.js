'use-strict';
const express = require('express');
const database = require('../database')

// validar se los datos ingresados existen en la base de datos
function cambiarContrasena(params) {
  let query = 'UPDATE USUARIO_SISTEMA SET CONTRASENA = $2 WHERE ID_USUARIO  = $1';
  let {id_usuario, contrasena} = params,
  values = [id_usuario, contrasena]
  return database.query(query, values)
    .then(response => {
      return response.rows[0];
    })
    .catch(err => { console.log("errorr: " + err) });
}

module.exports = {
  cambiarContrasena,
}