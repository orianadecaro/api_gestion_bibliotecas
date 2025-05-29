// routes/librosRoutes.js
const express = require("express");
const router = express.Router();
const librosController = require("../controller/librosController");
const verifyToken = require("../middlewares/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Libros
 *   description: API para gestionar libros
 */

/**
 * @swagger
 * /libros:
 *   get:
 *     summary: Obtener todos los libros
 *     tags: [Libros]
 *     responses:
 *       200:
 *         description: Lista de libros
 */
router.get("/", librosController.getAllLibros);

/**
 * @swagger
 * /libros/{id}:
 *   get:
 *     summary: Obtener un libro por ID
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro encontrado
 *       404:
 *         description: Libro no encontrado
 */
router.get("/:id", librosController.getLibroById);

/**
 * @swagger
 * /libros:
 *   post:
 *     summary: Crear un nuevo libro
 *     tags: [Libros]
 *     security:
 *       - bearerAuth: []  # Requiere token
 *     requestBody:
 *       description: Datos del nuevo libro
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo:
 *                 type: string
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               editorial:
 *                 type: string
 *               materia:
 *                 type: string
 *               cantidad:
 *                 type: string
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Libro creado exitosamente
 */
router.post("/", verifyToken, librosController.createLibro);

/**
 * @swagger
 * /libros/{id}:
 *   put:
 *     summary: Actualizar un libro existente
 *     tags: [Libros]
 *     security:
 *       - bearerAuth: []  # Requiere token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos actualizados del libro
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo:
 *                 type: string
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               editorial:
 *                 type: string
 *               materia:
 *                 type: string
 *               cantidad:
 *                 type: string
 *               estado:
 *                 type: string
 *
 *     responses:
 *       200:
 *         description: Libro actualizado exitosamente
 *       404:
 *         description: Libro no encontrado
 */
router.put("/:id", verifyToken, librosController.updateLibro);

/**
 * @swagger
 * /libros/{id}:
 *   delete:
 *     summary: Eliminar un libro
 *     tags: [Libros]
 *     security:
 *       - bearerAuth: []  # Requiere token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro eliminado exitosamente
 *       404:
 *         description: Libro no encontrado
 */
router.delete("/:id", verifyToken, librosController.deleteLibro);

module.exports = router;
