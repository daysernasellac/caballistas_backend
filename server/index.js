'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger');
const cors = require('cors')

module.exports = function() {
    let server = express(),
        create,
        start;

    create = function(config) {
        let routes = require('./routes');
        // server settings
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);

        // returns middleware that parses json
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({extended: false}));
        server.use(cookieParser());
        server.use(logger('dev'));
        server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
        server.use(cors());

        if(require('./database')) {
            console.log('database up and running');
        }else {
            console.error('database down and crying');
        }

        // set up routes
        routes.init(server);
    }

    start = function() {
        let hostname = server.get('hostname'),
            port = server.get('port');

        server.listen(port, function() {
            console.log(`Express server running on - http://${hostname}:${port}`);
        });
    }

    return {
        create,
        start
    }
}
