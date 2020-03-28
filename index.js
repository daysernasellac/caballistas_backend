'use strict';
const server = require('./server');
const config = require('./config');
const db = require('./db');

server.create(config, db);
server.start();
