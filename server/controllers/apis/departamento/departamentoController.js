'use-strict';
const express = require('express');
const departamentoService = require('../../../services/authentication/departamento/departamentoService');
let router = express.Router();

router.get('/', departamentoService.getDepartamentos);

module.exports = router;