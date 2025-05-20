const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const authRoutes = require("./swagger/authRoutes");
const librosRoutes = require("./swagger/librosRoutes");
const usuariosRoutes = require("./swagger/usuariosRoutes");
const sociosRoutes = require("./swagger/sociosRoutes");
const prestamosRoutes = require("./swagger/prestamosRoutes");
const perfilesRoutes = require("./swagger/perfilesRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/", authRoutes);
app.use("/api/libros", librosRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/socios", sociosRoutes);
app.use("/api/prestamos", prestamosRoutes);
app.use("/api/perfiles", perfilesRoutes);

// Swagger
app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send(`
        <html>
            <head><title>NodeJs BO</title></head>
            <body><h1>¡Bienvenido al backend de Gestión de Bibliotecas!</h1></body>
        </html>
    `);
});

module.exports = serverless(app);
