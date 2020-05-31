"use strict";;

let localConfig = {
    port:  process.env.PORT || 8080,
    hostname: process.env.HOSTNAME || 'localhost',
    database: {
        user: 'postgres',
        host: 'localhost',
        password: 'elasticheart',
        database: 'caballistas',
        port:'5432'
    },
    email: {
        host: "smtp.mailtrap.io",
        port: 465,
        secure: false, 
        auth: {
            user: '0d3bc85d08a064',
            pass: '64728e1bd3455b'
        }
    },
    emailDefaultCredentials: {
        emailFrom: 'karenchiquito.serna@gmail.com',
        subject: 'Confirmación de email'
    }
};

module.exports = localConfig;