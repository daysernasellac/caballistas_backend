"use strict";

const { sendEmail } = require('./verificar-email.service');

/**
 * Metodo que permite enviar un mail para la validacion del correo electronico 
 * del usuario
 * 
 * acepta como parametros opcionales el from, subject y text
 * @param {Request} request 
 * @param {Response} response 
 */
function verificarEmail(request, response) {
    const emailParams = {
        to: request.body.correo,
        text: `<a href="https://caballistasfrontend.herokuapp.com/pass">Confirmar correo</a>`
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

function envioPassword(request, response) {
    const emailParams = {
        to: request.body.correo,
        text: `<a href="https://caballistasfrontend.herokuapp.com/pass"> Ingresa al siguiente link para restablecer una nueva contraseña</a>`
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
    verificarEmail,
    envioPassword
}