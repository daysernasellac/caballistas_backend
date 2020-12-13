"use strict";;

let localConfig = {
    port:  process.env.PORT || 8080,
    hostname: process.env.HOSTNAME || 'localhost',
    database: {
        user: 'wzclubdctmkhvw',
        host: 'ec2-34-200-106-49.compute-1.amazonaws.com',
        password: '9d22201b0f7fec11eaa65a3f3b2c3e932791cbb6729cfe9dd46a8e536d52e966',
        database: 'd67ht2ohqh5esu',
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