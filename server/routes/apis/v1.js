'use-strict';
const registerController = require('../../controllers/apis/register');
const express = require('express');

let router = express.Router();
router.use('/register', registerController);

module.exports = router;