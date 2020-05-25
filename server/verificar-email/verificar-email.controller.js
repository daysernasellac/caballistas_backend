"use strict";

const { createTransport, sendEmail, createMailTemplate } = require('./verificar-email.service');


const CONSTANTS = {
    EMAIL: {
        FROM: 'alexius900@gmail.com',
        SUBJECT: 'Confirmación email',
        TEXT: 'texto de ejemplo'
    }
}

function verificarEmail(request, response) {
    const emailParams = {
        to: request.body.correo
    };

    sendEmail(emailParams)
        .then(res => {
            response.status(200).send(res);
        })
        .catch(err => {
            console.error(err);
            response.status(500).send('Something broke!', err);
        });
}

module.exports = {
    verificarEmail
}