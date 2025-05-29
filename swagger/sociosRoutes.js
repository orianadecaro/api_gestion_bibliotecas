// routes/sociosRoutes.js
const express = require("express");
const router = express.Router();
const SociosController = require("../controller/sociosController");
const verifyToken = require("../middlewares/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Socios
 *   description: API para gestionar socios
 */

/**
 * @swagger
 * /socios:
 *   get:
 *     summary: Obtener todos los socios
 *     tags: [Socios]
 *     responses:
 *       200:
 *         description: Lista de socios
 */
router.get("/", SociosController.getSocios);

/**
 * @swagger
 * /socios/{id}:
 *   get:
 *     summary: Obtener un socio por ID
 *     tags: [Socios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del socio
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Socio encontrado
 *       404:
 *         description: Socio no encontrado
 */
router.get("/:id", SociosController.getSociosById);

/**
 * @swagger
 * /socios:
 *   post:
 *     summary: Crear un nuevo socio
 *     tags: [Socios]
 *     security:
 *       - bearerAuth: []  # Requiere token
 *     requestBody:
 *       description: Datos del nuevo socio
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *               perfil_id:
 *                 type: string
 *               telefono:
 *                 type: string
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Socio creado exitosamente
 */
router.post("/", verifyToken, SociosController.createSocios);

/**
 * @swagger
 * /socios/{id}:
 *   put:
 *     summary: Actualizar un socio existente
 *     tags: [Socios]
 *     security:
 *       - bearerAuth: []  # Requiere token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del socio a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos actualizados del socio
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *               perfil_id:
 *                 type: string
 *               telefono:
 *                 type: string
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Socio actualizado exitosamente
 *       404:
 *         description: Socio no encontrado
 */
router.put("/:id", verifyToken, SociosController.updateSocios);

/**
 * @swagger
 * /socios/{id}:
 *   delete:
 *     summary: Eliminar un socio
 *     tags: [Socios]
 *     security:
 *       - bearerAuth: []  # Requiere token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del socio a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Socio eliminado exitosamente
 *       404:
 *         description: Socio no encontrado
 */
router.delete("/:id", verifyToken, SociosController.deleteSocios);

module.exports = router;
