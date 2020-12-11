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
            user: '8004a2b4a07202',
            pass: '7bebe60121ac54'
        }
    },
    emailDefaultCredentials: {
        emailFrom: 'caballistas@gmail.com',
        subject: 'Confirmación de email'
    }
};

module.exports = localConfig;