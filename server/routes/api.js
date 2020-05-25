"use strict";

const router = require('express').Router();
const registerRouter = require('../register/register.router');
const coreRouter = require('../core/core.router');
const loginRouter = require('../login/login.router');
const emailVerification = require('../verificar-email/verificar-email.router');

router.use('/register', registerRouter);
router.use('/core', coreRouter);
router.use('/login', loginRouter);
router.use('/email', emailVerification);


module.exports = router;