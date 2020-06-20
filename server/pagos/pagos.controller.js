"use strict";

const pagosService = require('./pagos.service');

function getInfoPagos(request, response) {
    return pagosService.findPagos()
        .then(usuario => {
            return response.json(usuario);
        });
}

module.exports = {
    getInfoPagos
}