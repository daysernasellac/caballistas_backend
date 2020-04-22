'use-strict';
const express = require('express');
const municipioService = require('../../../services/authentication/municipio/municipioService');
let router = express.Router();

router.get('/', municipioService.getMunicipios);

module.exports = router;