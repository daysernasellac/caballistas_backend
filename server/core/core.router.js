"use strict";
const express = require('express');
const coreController = require('./core.controller');
let router = express.Router();

router.get('/departamentos', coreController.getDepartamentos);
router.get('/municipios/:tipo_departamento', coreController.getMunicipios);
router.get('/tipoDocumentos', coreController.getTipoDocumentos);

module.exports = router;