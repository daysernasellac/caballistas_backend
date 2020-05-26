"use strict";

const registerService = require('./register.service');

function getInformacionClienteByDocumento(request, response) {
    return registerService.findUserByDocument(request.params)
        .then(usuario => {
            return response.json(usuario);
        });
}

function getInformacionClienteByEmail(request, response) {
    registerService.findUserByEmail(request.params)
        .then(cliente => {
            response.json(cliente);
        });
}

function registerUser(req, res){
    return registerService.registerUser(req.body);
}

function finalizarRegistro(req, res){
    return registerService.updateUsuarioSistema(req.body);
}


module.exports = {
    getInformacionClienteByDocumento,
    getInformacionClienteByEmail,
    registerUser,
    finalizarRegistro
}