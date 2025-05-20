const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Gestión de Bibliotecas",
      version: "1.0.0",
    },
  },
  apis: ["./swagger/*.js"], // Asegúrate de que esta ruta sea correcta
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
