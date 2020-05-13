"use strict";

const coreService = require('./core.service');

function getDepartamentos(req, res){
    return coreService.getDepartamentos(req, res);
}

function getMunicipios(req, res){
    return coreService.getMunicipios(req, res);
}

function getTipoDocumentos(req, res){
    return coreService.getTipoDocumentos(req, res);
}

module.exports = {
    getDepartamentos,
    getMunicipios,
    getTipoDocumentos
}