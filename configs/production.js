"use strict";;

let localConfig = {
    port:  process.env.PORT || 8080,
    hostname: process.env.HOSTNAME || 'localhost',
    database: {
        user: 'pfaggoguyndsiw',
        host: 'ec2-18-209-187-54.compute-1.amazonaws.com',
        password: 'ee2669f56eb07b865781c6ededd721d3e41a9ecd569297eff5f1ebe1ee22cbba',
        database: 'dcgmr23jiet1i4',
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