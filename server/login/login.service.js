'use-strict';
const express = require('express');
const pool = require('../database').getPool();

// validar se los datos ingresados existen en la base de datos
function login(request, response) {
  let  {correo, contrasena} = request.body,
        values = [correo, contrasena];
  const text = 'SELECT * FROM USUARIO WHERE CORREO = $1 AND CONTRASENA = $2';
  pool.query( text, values, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      return response.json(res.rows)
    }
  })
}

module.exports = {
  login

}