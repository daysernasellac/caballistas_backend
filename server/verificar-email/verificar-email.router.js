"use strict";

const router = require('express').Router();
const emailController = require('./verificar-email.controller');

router.post('/verificar', emailController.verificarEmail);
router.post('/olvidastePassword', emailController.envioPassword);

module.exports = router;