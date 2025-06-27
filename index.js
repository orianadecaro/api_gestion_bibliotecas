const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const swaggerSpec = require("./swagger");
const authRoutes = require("./swagger/authRoutes");
const librosRoutes = require("./swagger/librosRoutes");
const usuariosRoutes = require("./swagger/usuariosRoutes");
const sociosRoutes = require("./swagger/sociosRoutes");
const prestamosRoutes = require("./swagger/prestamosRoutes");
const perfilesRoutes = require("./swagger/perfilesRoutes");
const sociosAuthRoutes = require("./swagger/sociosAuthRoutes");
const sociosProfileRoutes = require("./swagger/socioProfileRoute");
const sociosHistorialRoutes = require("./swagger/sociosHistorialRoutes");
const swaggerUi = require("swagger-ui-express");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/", authRoutes);
app.use("/", sociosAuthRoutes);
app.use("/libros", librosRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/socios", sociosRoutes);
app.use("/socios/profile", sociosProfileRoutes);
app.use("/socios/historial", sociosHistorialRoutes);
app.use("/prestamos", prestamosRoutes);
app.use("/perfiles", perfilesRoutes);

// Swagger
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/api-docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.get("/", (req, res) => {
  res.send(`
        <html>
            <head><title>NodeJs BO</title></head>
            <body><h1>¡Bienvenido al backend de Gestión de Bibliotecas!</h1></body>
        </html>
    `);
});

const PORT = process.env.PORT || 3001;
/* app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); */

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Exportamos la app para Jest
module.exports = app;
