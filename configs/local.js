"use strict";;

let localConfig = {
    port:  process.env.PORT || 8080,
    hostname: process.env.HOSTNAME || 'localhost',
    database: {
        user: 'postgres',
        host: 'localhost',
        password: '123456789',
        database: 'postgres',
        port:'5432'
    },
    email: {
        host: "smtp.mailgun.org",
        port: 587,
        secure: false, 
        auth: {
            user: 'postmaster@sandbox22df14c29e7340aea1f104210e2e3252.mailgun.org',
            pass: 'fd1baa4c28a8c4cb9ca6a260e1a82dd0-7fba8a4e-2547003d'
        }
    },
    emailDefaultCredentials: {
        emailFrom: 'alexius9000@gmail.com',
        subject: 'Confirmación de email'
    }
};

module.exports = localConfig;