"use strict";

const registerService = require('./register.service');

function getInformacionClienteByDocumento(request, response) {
    return registerService.findUserByDocument(request.params)
        .then(usuario => {
            return response.json(usuario);
        });
}
function getUsuarioById(request, response) {
    return registerService.findUserById(request.params)
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

function registerUser(req, res) {
    return registerService.registerUser(req.body)
        .then(resultado => res.status(200).send(resultado));
}

function finalizarRegistro(req, res) {
    return registerService.updateUsuarioSistema(req.body)
        .then(resultado => res.status(200).send(resultado));
}

function getInfoUsuario(request, response) {
    return registerService.findUserById()
        .then(usuario => {
            return response.json(usuario);
        });
}

function deleteInfo(request, response) {
    return registerService.deleteUserById(request.params)
        .then(usuario => {
            return response.json(usuario);
        });
}

module.exports = {
    getInformacionClienteByDocumento,
    getInformacionClienteByEmail,
    registerUser,
    finalizarRegistro,
    getUsuarioById,
    getInfoUsuario,
    deleteInfo
}