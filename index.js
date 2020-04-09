'use strict';
require('dotenv').config();

const server = require('./server')();
const config = require('./configs');
const db = {};

server.create(config, db);
server.start();
