"use strict";;
const database = require('../database');
const Cliente = require('../models/Cliente');
const UsuarioSistema = require('../models/UsuarioSistema')
const _ = require('lodash');

function findUserByDocument({ tipo_documento, numero_documento }) {
  let query = 'SELECT * FROM INFORMACION_CLIENTE WHERE TIPO_DOCUMENTO = $1 AND NUMERO_DOCUMENTO = $2';
  return database.query(query, [tipo_documento, numero_documento])
    .then(response => response.rows[0])
    .catch(err => { throw new Error(err) });
}

function findUserById({ id_cliente }) {
  let query = 'SELECT * FROM INFORMACION_CLIENTE WHERE ID_CLIENTE = $1';
  return database.query(query, [id_cliente])
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
  let cliente = new Cliente(params.user);
  let arrayCliente = cliente.toArray();

  arrayCliente[0] = 'informacion_cliente_id_cliente_seq';

  return database.query(text, arrayCliente)
    .then(async (response) => {
      let res = await findUserByDocument({
        tipo_documento: params.user.tipo_documento,
        numero_documento: params.user.numero_documento
      });
      return _.merge(response, res);
    })
    .catch(err => {
      console.log(err);
    });
}

async function registerUser(params) {
  let informacionCliente = await registerInformacionCliente(params);

  let text = 'INSERT INTO USUARIO_SISTEMA (ID_USUARIO, TIPO_USUARIO, CLIENTE, CORREO, CONTRASENA, TIPO_ESTADO) VALUES(nextval($1), $2, $3, $4, $5, $6)';
  let usuario = new UsuarioSistema(params.user).toArray();
  let parametrosConsulta = [
    'usuario_id_usuario_seq',
    3,
    informacionCliente.id_cliente,
    usuario[3],
    '',
    3
  ];
  return database.query(text, parametrosConsulta)
    .then(async (response) => {
     response.rows;
    })
    .catch(err => {
      console.log(err);
    });
}

async function updateUsuarioSistema(params) {
  let text = 'UPDATE USUARIO_SISTEMA SET  CONTRASENA= $2, TIPO_ESTADO= $3 WHERE CORREO= $1';
  let {correo, contrasena, tipo_estado} = params.inf,
  values = [correo, contrasena, tipo_estado = 1]
  return database.query(text, values)
    .then(async (response) => {
      response.rows;
    })
    .catch(err => {
      console.log(err);
    });
}
module.exports = {
  registerUser,
  findUserByDocument,
  findUserByEmail,
  updateUsuarioSistema,
  findUserById
}