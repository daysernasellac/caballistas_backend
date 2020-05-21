"use strict";

const registerService = require('./register.service');

function getInformacionClienteByDocumento(request, response) {
    return registerService.findUserByDocument(request, response);
}

function getInformacionClienteByEmail(request, response) {
    return registerService.findUserByEmail(request, response);
}

function registerUser(req, res){
    return registerService.registerUser2(req, res);
}


module.exports = {
    getInformacionClienteByDocumento,
    getInformacionClienteByEmail,
    registerUser
}