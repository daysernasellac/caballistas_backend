'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const passport = require('passport');

module.exports = function() {
    let server = express(),
        create,
        start;

    create = function(config, db) {
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
        server.use(passport.initialize());
        require('./config/passport')(passport); // check if passport is for you

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
