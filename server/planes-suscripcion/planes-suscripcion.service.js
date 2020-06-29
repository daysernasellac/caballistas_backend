"use strict";
const PlanSuscripcion = require('../models/PlanSuscripcion');

const database = require('../database');
const _ = require('lodash');

// Register new plan Suscripcion
async function registerPlanSuscripcion(params) {
  let text = 'INSERT INTO TIPO_PLAN_SUSCRIPCION (ID_PLAN_SUSCRIPCION, NOMBRE_PLAN, VALOR_PLAN, FECHA_ACTUALIZACION, INFORMACION_PLAN, ACTIVO) VALUES(nextval($1), $2, $3, $4, $5, $6)';
  let planSuscripcion = new PlanSuscripcion(params);
  let arrayPlanSuscripcion = planSuscripcion.toArray();

  arrayPlanSuscripcion[0] = 'tipo_plan_suscripcion_id_plan_suscripcion_seq';

  return database.query(text, arrayPlanSuscripcion)
    .then(response => response.rows)
    .catch(err => { throw new Error(err) });
}

function findPlanesSuscripcion() {
  let query = 'SELECT * FROM TIPO_PLAN_SUSCRIPCION WHERE ACTIVO = $1';
  let activo = "S";
  return database.query(query, [activo])
    .then(response => response.rows)
    .catch(err => { throw new Error(err) });
}

async function deletePlanSuscripcionById({ id_plan_suscripcion }) {
  let query = 'UPDATE TIPO_PLAN_SUSCRIPCION SET ACTIVO = $2 WHERE ID_PLAN_SUSCRIPCION = $1';
  const activo = "N";
  return database.query(query, [id_plan_suscripcion, activo])
    .then(response => response.rows)
    .catch(err => { throw new Error(err) });
}

async function updatePlanSuscripcionById(params) {
  let {id_plan_suscripcion, nombre_plan, valor_plan, fecha_actualizacion, informacion_plan} = params,
  values = [id_plan_suscripcion, nombre_plan, valor_plan, fecha_actualizacion, informacion_plan]
  let query = 'UPDATE TIPO_PLAN_SUSCRIPCION SET NOMBRE_PLAN = $2, VALOR_PLAN = $3, FECHA_ACTUALIZACION = $4, INFORMACION_PLAN = $5  WHERE ID_PLAN_SUSCRIPCION = $1';
  return database.query(query, values)
    .then(response => response.rows)
    .catch(err => { throw new Error(err) });
}


module.exports = {
  registerPlanSuscripcion,
  findPlanesSuscripcion,
  deletePlanSuscripcionById,
  updatePlanSuscripcionById
}