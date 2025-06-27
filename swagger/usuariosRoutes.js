const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController");
const verifyToken = require("../middlewares/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: API para usuarios del sistema
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get("/", usuarioController.getUsuarios);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Un usuario
 */
router.get("/:id", usuarioController.getUsuariosById);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []  # Requiere token
 *     requestBody:
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
 *                 type: integer
 *               telefono:
 *                 type: string
 *               estado:
 *                 type: string
 *               password_hash:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario creado
 */
router.post("/", usuarioController.createUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Actualizar un usuario
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []  # Requiere token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     requestBody:
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
 *                 type: integer
 *               telefono:
 *                 type: string
 *               estado:
 *                 type: string
 *               password_hash:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado
 */
router.put("/:id", verifyToken, usuarioController.updateUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []  # Requiere token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado
 */
router.delete("/:id", verifyToken, usuarioController.deleteUsuario);

module.exports = router;
