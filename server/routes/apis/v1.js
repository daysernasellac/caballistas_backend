'use-strict';
const registerController = require('../../controllers/apis/register');
const departamentoController = require('../../controllers/apis/departamento/departamentoController');
const express = require('express');

let router = express.Router();
router.use('/register', registerController);
router.use('/departamentos', departamentoController)

module.exports = router;