# 📚 Backend - Gestión de Biblioteca

Este es el backend del sistema de gestión de biblioteca. Provee una API REST construida con **Node.js** y **Express**, que se conecta a una base de datos en **Supabase** y utiliza **Swagger** para documentar los endpoints disponibles.

---

👩‍💻 Contribuyentes
Sandra Galiano,
Oriana De Caro

---

## 🚀 Tecnologías utilizadas

- **Node.js** – Entorno de ejecución para JavaScript
- **Express** – Framework web para construir la API REST
- **Supabase** – Backend-as-a-Service (BaaS) que proporciona base de datos y autenticación
- **Swagger** – Documentación interactiva para APIs
- **Vercel** – Despliegue y hosting
- **Nodemailer** – Herramienta para enviar correos electrónicos

---

## ⚙️ Configuración del entorno

1. Cloná el repositorio:
   git clone <url-del-repo>
   cd aoi-gestion-bibliotecas

2. Instalá las dependencias:
   npm install

3. Configurá las variables de entorno:
   SUPABASE_URL=...
   SUPABASE_KEY=...
   EMAIL_USER=...
   EMAIL_PASS=...

4. Ejecutá el servidor:
   node index.js

---

## 📘 Documentación Swagger

Una vez el servidor esté en funcionamiento, podés acceder a la documentación Swagger en:

http://localhost:3000/api-docs.json

https://swagger-gestion-bibliotecas.vercel.app/

---

## ✅ Funcionalidades principales

🔐 Autenticación y manejo de sesiones
👥 Gestión de usuarios, perfiles y socios
📖 ABM de libros
📆 Registro de préstamos y devoluciones
🧪 Testeos con Jest o framework similar (en carpeta /test)
📄 Documentación clara de la API con Swagger

---

## 📁 Estructura del Proyecto

├── controller/
│ ├── authController.js
│ ├── perfilesController.js
│ ├── librosController.js
│ ├── prestamosController.js
│ ├── usuariosController.js
│ └── sociosController.js
│
├── middleware/
│ └── authMiddleware.js
│
├── models/
│ ├── librosModel.js
│ ├── perfilesModel.js
│ ├── usuariosModel.js
│ ├── sociosModel.js
│ └── prestamosModel.js
│
├── service/
│ ├── librosService.js
│ ├── usuariosService.js
│ ├── sociosService.js
│ ├── prestamosService.js
│ └── perfilesService.js
│
├── swagger/
│ ├── authRoutes.js
│ ├── librosRoutes.js
│ ├── prestamosRoutes.js
│ ├── perfilesRoutes.js
│ ├── usuariosRoutes.js
│ └── sociosRoutes.js
│
├── test/
│ └── (tests aquí)
│
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
├── supabaseClient.js
├── swagger.js
├── emailSender.js
├── testMail.js
└── vercel.json
