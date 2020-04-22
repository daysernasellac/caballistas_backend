'use-strict';
const registerController = require('../../controllers/apis/register');
const departamentoController = require('../../controllers/apis/departamento/departamentoController');
const municipioController = require('../../controllers/apis/municipio/municipioController');
const express = require('express');

let router = express.Router();
router.use('/register', registerController);
router.use('/departamentos', departamentoController)
router.use('/municipios', municipioController)
module.exports = router;