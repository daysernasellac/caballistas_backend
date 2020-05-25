"use strict";;
const database = require('../database');
const Cliente = require('../models/Cliente')
const _ = require('lodash');

function findUserByDocument({ tipo_documento, numero_documento }) {
    let query = 'SELECT * FROM INFORMACION_CLIENTE WHERE TIPO_DOCUMENTO = $1 AND NUMERO_DOCUMENTO = $2';
    return database.query(query, [tipo_documento, numero_documento])
        .then(response => response.rows[0])
        .catch(err => { throw new Error(err) });
}

function findUserByEmail({ correo }) {
    const text = 'SELECT * FROM USUARIO_SISTEMA WHERE CORREO = $1';

    return database.query(text, [correo])
        .then(response => response.rows)
        .catch(err => { throw new Error(err) });
}

// Register new user 
async function registerInformacionCliente(params) {
  let text = 'INSERT INTO INFORMACION_CLIENTE(ID_CLIENTE, TIPO_DOCUMENTO, NUMERO_DOCUMENTO, NOMBRES, TELEFONO, DIRECCION, ID_DEPARTAMENTO, ID_MUNICIPIO, APELLIDOS) VALUES (nextval($1), $2, $3, $4, $5, $6, $7, $8, $9)';
  let cliente = new Cliente(params);
  let arrayCliente = cliente.toArray();

  arrayCliente[0] = 'informacion_cliente_id_cliente_seq';

  return database.query(text, arrayCliente)
    .then(async (response) => {
      let res = await findUserByDocument({
        tipo_documento: params.tipo_documento,
        numero_documento: params.numero_documento
      });

      return _.merge(response, res);
    })
    .catch(err => {
      console.log(err);
    });
}

async function registerUser2(params) {
  let informacionCliente = await registerInformacionCliente(params);
  console.log(informacionCliente)
}

module.exports = {
    registerUser2,
    findUserByDocument,
    findUserByEmail
}