"use strict";

const coreService = require('./login.service');

function login(req, res){
    return coreService.login(req, res);
}

module.exports = {
    login
}