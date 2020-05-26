"use strict";

const nodemailer = require('nodemailer');
const config = require('../../configs/index');

const CONSTANTS = {
    EMAIL: {
        TEXT: 'texto de ejemplo'
    }
};

/**
 * 
 */
async function createTransport() {
    return nodemailer.createTransport(config.email);
}

/**
 * Metodo que permite utilizar nodemailer
 * para enviar la validación de correo electronico
 */
async function sendEmail(emailParams) {
    const transporter = await createTransport(),
        emailOptions = createMailTemplate(emailParams);

    return new Promise((resolve, reject) => {
        transporter.sendMail(emailOptions, function (error, info) {
            if (error) reject(error);

            resolve({
                message: 'mail enviado'
            })
        });
    });
}

/**
 * 
 * @param {Object} mailParams 
 */
function createMailTemplate({ from, to, subject, text }) {
    return {
        from: from ? from : config.emailDefaultCredentials.emailFrom,
        to: to,
        subject: subject ? subject : config.emailDefaultCredentials.subject,
        text: text ? text : CONSTANTS.EMAIL.TEXT,
    }
}

module.exports = {
    createTransport,
    sendEmail,
    createMailTemplate
}