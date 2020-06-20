"use strict";;
const database = require('../database');
const UsuarioSistema = require('../models/UsuarioSistema')
const _ = require('lodash');

function findPagos() {
  let query = 'SELECT PR.ID_PAGO, IC.NUMERO_DOCUMENTO, IC.NOMBRES, IC.APELLIDOS, TPS.NOMBRE_PLAN, PR.VALOR_PAGO, PR.FECHA_PAGO FROM PAGOS_REALIZADOS PR INNER JOIN TIPO_PLAN_SUSCRIPCION TPS ON PR.TIPO_PLAN = TPS.ID_PLAN_SUSCRIPCION INNER JOIN INFORMACION_CLIENTE IC ON PR.CLIENTE = IC.ID_CLIENTE';
  return database.query(query)
    .then(response => response.rows)
    .catch(err => { throw new Error(err) });
}

module.exports = {
  findPagos
}