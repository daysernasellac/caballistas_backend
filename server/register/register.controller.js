"use strict";

const registerService = require('./register.service');

function getInformacionClienteByDocumento(request, response) {
    return registerService.findUserByDocument(request.params)
        .then(usuario => {
            return response.json(usuario);
        });
}

function getInformacionClienteByEmail(request, response) {
    registerService.findUserByEmail(request, response)
        .then(cliente => {
            response.json(cliente);
        });
}

function registerUser(req, res){
    registerService.registerUser2(req, res)
        .then(usuario => {
            response.json(usuario);
        });
}


module.exports = {
    getInformacionClienteByDocumento,
    getInformacionClienteByEmail,
    registerUser
}