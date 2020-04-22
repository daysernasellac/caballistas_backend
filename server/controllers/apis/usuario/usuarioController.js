'use-strict';
const express = require('express');
const usuarioService = require('../../services/authentication/register');
let router = express.Router();

router.get('/', usuarioService.getTipoDocumentos);

module.exports = router;