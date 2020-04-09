'use-strict';

let localConfig = {
    port:  process.env.PORT || 3000,
    hostname: process.env.HOSTNAME || 'localhost',
    database: {
        user: 'postgres',
        host: 'localhost',
        password: 'elasticheart',
        database: 'caballistas',
        port:'5432'
    }
};

module.exports = localConfig;