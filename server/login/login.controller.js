"use strict";

const coreService = require('./login.service');

async function login(req, res) {
    let response;
    
    try {
        response = await coreService.login(req.body);
    } catch (error) {
        console.error(error);
        return;
    }

    return response;
}

module.exports = {
    login
}