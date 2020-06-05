"use strict";
const express = require('express');
const registerController = require('./register.controller');
let router = express.Router();

router.get('/informacionCliente/:tipo_documento&:numero_documento', registerController.getInformacionClienteByDocumento);
router.get('/informacionCliente/correo/:correo', registerController.getInformacionClienteByEmail);
router.post('/', registerController.registerUser);
router.post('/finalizarRegistro', registerController.finalizarRegistro);
router.get('/informacionClienteById/:id_cliente', registerController.getUsuarioById);
router.get('/findInfoUsuarioById', registerController.getInfoUsuario);
router.post('/deleteUsuarioById/:id_cliente', registerController.deleteInfo);

module.exports = router;