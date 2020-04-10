"use strict";

const router = require('express').Router();
const registerRouter = require('../register/register.router');

router.use('/register', registerRouter);

module.exports = router;