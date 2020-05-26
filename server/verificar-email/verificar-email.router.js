"use strict";

const router = require('express').Router();
const emailController = require('./verificar-email.controller');

router.post('/verificar', emailController.verificarEmail);

module.exports = router;