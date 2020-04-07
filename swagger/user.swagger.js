module.exports = {
    tags: ['user'],
    description: 'Create new user in the system',
    operationId: 'PostUser',
    security: [{
        bearerAuth: []
    }],
    responses: {
        "200" : {
            description: "create new user",
            content: {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            email: {
                                type: "string",
                                description: "users email"
                            },
                            password: {
                                type: "string",
                                description: "users password"
                            }
                        }
                    }
                }
            }
        }
    }
}