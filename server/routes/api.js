"use strict";

const router = require('express').Router();
const registerRouter = require('../register/register.router');
const coreRouter = require('../core/core.router');
const loginRouter = require('../login/login.router');
const passwordRouter = require('../password/password.router');
const emailVerification = require('../verificar-email/verificar-email.router');
const pagosRouter = require('../pagos/pagos.router');
const planesSuscripcionRouter = require('../planes-suscripcion/planes-suscripcion.router');

router.use('/register', registerRouter);
router.use('/core', coreRouter);
router.use('/login', loginRouter);
router.use('/email', emailVerification);
router.use('/password', passwordRouter);
router.use('/pagos', pagosRouter);
router.use('/planesSuscripcion', planesSuscripcionRouter);


module.exports = router;