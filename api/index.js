const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swagger"); // ruta corregida
const authRoutes = require("../swagger/authRoutes");
const librosRoutes = require("../swagger/librosRoutes");
const usuariosRoutes = require("../swagger/usuariosRoutes");
const sociosRoutes = require("../swagger/sociosRoutes");
const prestamosRoutes = require("../swagger/prestamosRoutes");
const perfilesRoutes = require("../swagger/perfilesRoutes");

dotenv.config();

const app = express();

app.use(express.json());

// Rutas
app.use("/", authRoutes);
app.use("/libros", librosRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/socios", sociosRoutes);
app.use("/prestamos", prestamosRoutes);
app.use("/perfiles", perfilesRoutes);

// Documentación Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Exporta como función para Vercel
module.exports = serverless(app);
