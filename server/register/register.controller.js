"use strict";

const registerService = require('./register.service');

function getRegister(request, response) {
    response.send({name: "john", lastname: "doe"})
        .status(200);
}

function registerUser(req, res){
    return registerService.registerUser(req, res);
}


module.exports = {
    getRegister,
    registerUser
}