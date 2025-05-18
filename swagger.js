// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Gestión de Biblioteca",
      version: "1.0.0",
      description: "Documentación de la API de gestión de biblioteca",
    },
    servers: [
      {
        url: "https://api-gestion-bibliotecas.vercel.app/",
      },
    ],
  },
  apis: ["./swagger/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
