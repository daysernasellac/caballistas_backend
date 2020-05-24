"use strict";;
const express = require('express');
const pool = require('../database').getPool();
const ejemplo = require('../login/login.router')

const httpMessages =  {
    onValidationError: {
        success: false,
        message: 'Please enter email and password',
    },
    onSaveError: {
        success:false,
        message: 'The email address already exist',
    },
    onUserSaveSuccess: {
        success: true,
        message: 'Successfully created new user',
    }
};

function findUserByDocument(request, response) {
    let  {tipo_documento, numero_documento} = request.params,
    values = [tipo_documento, numero_documento];
    const text = 'SELECT * FROM INFORMACION_CLIENTE WHERE TIPO_DOCUMENTO = $1 AND NUMERO_DOCUMENTO = $2';
    pool.query( text, values, (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          return response.json(res.rows);
        }
      })
}

function findUserByEmail(request, response) {
    let  {correo} = request.params,
    values = [correo];
    const text = 'SELECT * FROM USUARIO_SISTEMA WHERE CORREO = $1';
    pool.query( text, values, (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          return response.json(res.rows);
        }
      })
}

const values = ['karen', 'holi'];


// Register new user 
function registerUser2(request, response) {
    let {id_cliente, tipo_documento, numero_documento, nombres, apellidos, telefono, direccion, id_departamento, id_municipio} = request.body,
    values = [id_cliente = 'informacion_cliente_id_cliente_seq', tipo_documento, numero_documento, nombres, telefono, direccion, id_departamento, id_municipio, apellidos];
    const text = 'INSERT INTO INFORMACION_CLIENTE(ID_CLIENTE, TIPO_DOCUMENTO, NUMERO_DOCUMENTO, NOMBRES, TELEFONO, DIRECCION, ID_DEPARTAMENTO, ID_MUNICIPIO, APELLIDOS) VALUES (nextval($1), $2, $3, $4, $5, $6, $7, $8, $9)';
    pool.query( text, values, (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          return response.json(res.rows);
        }
      })
}


// Register new user 
function registerUser(request, response) {
    let {email, password} = request.body;

    console.log(request.body);
    

    if(!email || !password) {
        response.json(httpMessages.onValidationError);
    } else {
        let newUser = new User({email, password});

        newUser.save()
            .then(result => {
                return response.json(httpMessages.onUserSaveSuccess);
            })
            .catch(error => {
                return response.json(httpMessages.onSaveError);
            });
    }
}

module.exports = {
    registerUser2,
    findUserByDocument,
    findUserByEmail
}