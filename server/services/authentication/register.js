'use-strict';
const express = require('express');
const User = require('../../models/User');

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
    registerUser
}