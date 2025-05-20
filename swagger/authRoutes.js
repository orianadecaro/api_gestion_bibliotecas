const express = require("express");
const router = express.Router();
const controller = require("../controller/authController");

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Iniciar sesión con email y contraseña
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso
 *       401:
 *         description: Credenciales inválidas
 */
router.post("/login", controller.login);

module.exports = router;
