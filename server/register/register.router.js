"use strict";
const express = require('express');
const registerController = require('./register.controller');
let router = express.Router();

router.get('/', registerController.getRegister);
router.post('/', registerController.registerUser);

module.exports = router;