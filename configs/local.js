"use strict";;

let localConfig = {
    port:  process.env.PORT || 3000,
    hostname: process.env.HOSTNAME || 'localhost',
    database: {
        user: '',
        host: '',
        password: '',
        database: '',
        port:''
    }
};

module.exports = localConfig;