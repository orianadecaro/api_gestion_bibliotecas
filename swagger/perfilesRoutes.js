const express = require("express");
const router = express.Router();
const perfilController = require("../controller/perfilesController");

/**
 * @swagger
 * tags:
 *   name: Perfiles
 *   description: API para gestionar perfiles
 */

/**
 * @swagger
 * /perfiles:
 *   get:
 *     summary: Obtener todos los perfiles
 *     tags: [Perfiles]
 *     responses:
 *       200:
 *         description: Lista de perfiles
 */
router.get("/", perfilController.getAllPerfiles);

/**
 * @swagger
 * /perfiles/{id}:
 *   get:
 *     summary: Obtener un perfil por ID
 *     tags: [Perfiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del perfil
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Perfil encontrado
 *       404:
 *         description: Perfil no encontrado
 */
router.get("/:id", perfilController.getPerfilesById);

/**
 * @swagger
 * /perfiles:
 *   post:
 *     summary: Crear un nuevo perfil
 *     tags: [Perfiles]
 *     requestBody:
 *       description: Datos del nuevo perfil
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Perfil creado exitosamente
 */
router.post("/", perfilController.createPerfiles);

/**
 * @swagger
 * /perfiles/{id}:
 *   put:
 *     summary: Actualizar un perfil existente
 *     tags: [Perfiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del perfil a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos actualizados del perfil
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Perfil actualizado exitosamente
 *       404:
 *         description: Perfil no encontrado
 */
router.put("/:id", perfilController.updatePerfiles);

/**
 * @swagger
 * /perfiles/{id}:
 *   delete:
 *     summary: Eliminar un perfil
 *     tags: [Perfiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del perfil a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Perfil eliminado exitosamente
 *       404:
 *         description: Perfil no encontrado
 */
router.delete("/:id", perfilController.deletePerfiles);

module.exports = router;
