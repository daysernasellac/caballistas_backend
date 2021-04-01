"use-strict";
const database = require("../database");

// validar se los datos ingresados existen en la base de datos
async function login(params) {
	const query = "SELECT * FROM USUARIO_SISTEMA WHERE CORREO = $1 AND CONTRASENA = $2";
  const values = Object.values({
    correo: params.datos.correo,
    contrasena: params.datos.contrasena
  }) 

  let response;
  
  try {
    response = await database.query(query, values);

  } catch (error) {
    console.error('Error in login service',)
  }

	return response.rows[0];
}

module.exports = {
	login,
};
