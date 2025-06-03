const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Gestión de Bibliotecas",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // Opcional, para que diga "JWT" en Swagger UI
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: [
      {
        name: "Login",
        description: "Autenticación de usuarios",
      },
      {
        name: "Libros",
        description: "Gestión de libros",
      },
      {
        name: "Usuarios",
        description: "Gestión de usuarios",
      },
      {
        name: "Socios",
        description: "Gestión de socios",
      },
      {
        name: "Préstamos",
        description: "Gestión de préstamos",
      },
      {
        name: "Perfiles",
        description: "Gestión de perfiles",
      },
    ],
  },
  apis: ["./swagger/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
