"use strict";;
const express = require('express');
const database = require('../database');
const ejemplo = require('../login/login.router')

const httpMessages = {
    onValidationError: {
        success: false,
        message: 'Please enter email and password',
    },
    onSaveError: {
        success: false,
        message: 'The email address already exist',
    },
    onUserSaveSuccess: {
        success: true,
        message: 'Successfully created new user',
    }
};

function findUserByDocument({ tipo_documento, numero_documento }) {
    let query = 'SELECT * FROM INFORMACION_CLIENTE WHERE TIPO_DOCUMENTO = $1 AND NUMERO_DOCUMENTO = $2';
    return database.query(query, [tipo_documento, numero_documento])
        .then(response => response.rows)
        .catch(err => { throw new Error(err) });
}

function findUserByEmail({ correo }) {
    const text = 'SELECT * FROM USUARIO_SISTEMA WHERE CORREO = $1';

    return database.query(text, [correo])
        .then(response => response.rows)
        .catch(err => { throw new Error(err) });
}

// Register new user 
function registerUser2(params) {
    let text = 'INSERT INTO INFORMACION_CLIENTE(ID_CLIENTE, TIPO_DOCUMENTO, NUMERO_DOCUMENTO, NOMBRES, TELEFONO, DIRECCION, ID_DEPARTAMENTO, ID_MUNICIPIO, APELLIDOS) VALUES (nextval($1), $2, $3, $4, $5, $6, $7, $8, $9)';
    return database.query(text, params)
        .then(response => response.rows)
        .catch(err => { throw new Error(err) });
}

module.exports = {
    registerUser2,
    findUserByDocument,
    findUserByEmail
}