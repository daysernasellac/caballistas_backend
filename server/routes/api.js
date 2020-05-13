"use strict";

const router = require('express').Router();
const registerRouter = require('../register/register.router');
const coreRouter = require('../core/core.router');
const loginRouter = require('../login/login.router');

router.use('/register', registerRouter);
router.use('/core', coreRouter);
router.use('/login', loginRouter);

module.exports = router;