"use strict";;
const user = require('./user.swagger');

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Caballista API',
        description: '',
        termsOfService: '',
        contact: {
            name: 'Name',
            email: 'Dev Team '
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: [
        {
            url: 'http://localhost:3000/api/v1',
            description: 'local server'
        }
    ],
    components: {
        schemas: {},
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        }
    },
    tags: {
        name: 'user'
    },
    paths: {
        '/api/v1/register': {
            "post": user
        }
    }
}

module.exports = swaggerDocument;
