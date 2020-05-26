"use strict";

const coreService = require('./login.service');

function login(req, res) {
    return coreService.login(req.body)
        .then(function (response) { res.status(200).send(response) });
}

module.exports = {
    login
}