const express = require("express");
const router = express.Router();
const SociosAuthController = require("../controller/sociosAuthController");

/**
 * @swagger
 * /socios/login:
 *   post:
 *     summary: Iniciar sesión como socio
 *     tags: [Socios]
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
 *       403:
 *         description: Socio inactivo
 */
router.post("/login", SociosAuthController.login);

module.exports = router;

