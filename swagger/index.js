"use strict";;
const user = require('./user.swagger');

const config = require('../configs/index');
const urlApi = `http://${config.hostname}:${config.port}/api`;

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
            url: urlApi,
            description: 'Caballistas API'
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
            "post": user,
        },
        '/core/departamentos':{
            "get": {
                tags: ['user'],
                description: 'Departamentos',
                operationId: 'GetDepartamentos',
                security: [{
                    bearerAuth: []
                }],
                responses: {
                    "200" : {
                        description: "Obtiene la lista de departamentos",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        id_departamento: {
                                            type: "integer",
                                            description: "Identificador único del departamento"
                                        },
                                        nombre_departamento: {
                                            type: "string",
                                            description: "Nombre del departamento"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = swaggerDocument;
