const express = require("express");
const router = express.Router();
const prestamosController = require("../controller/prestamosController");
const verifyToken = require("../middlewares/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Prestamos
 *   description: API para gestionar préstamos de libros
 */

/**
 * @swagger
 * /prestamos:
 *   get:
 *     summary: Obtener todos los préstamos
 *     tags: [Prestamos]
 *     responses:
 *       200:
 *         description: Lista de préstamos
 */
router.get("/", prestamosController.getAllPrestamos);

/**
 * @swagger
 * /prestamos/{id}:
 *   get:
 *     summary: Obtener un préstamo por ID
 *     tags: [Prestamos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del préstamo
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Préstamo encontrado
 *       404:
 *         description: Préstamo no encontrado
 */
router.get("/:id", prestamosController.getPrestamosById);

/**
 * @swagger
 * /prestamos:
 *   post:
 *     summary: Crear un nuevo préstamo
 *     tags: [Prestamos]
 *     security:
 *       - bearerAuth: []  # Requiere token
 *     requestBody:
 *       description: Datos del nuevo préstamo
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               libro_id:
 *                 type: string
 *               socio_id:
 *                 type: string
 *               fechaprestamo:
 *                 type: string
 *                 format: date
 *               fechadevolucion:
 *                 type: string
 *                 format: date
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Préstamo creado exitosamente
 */
router.post("/", verifyToken, prestamosController.createPrestamos);

/**
 * @swagger
 * /prestamos/{id}:
 *   put:
 *     summary: Actualizar un préstamo existente
 *     tags: [Prestamos]
 *     security:
 *       - bearerAuth: []  # Requiere token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del préstamo a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos actualizados del préstamo
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               libro_id:
 *                 type: string
 *               socio_id:
 *                 type: string
 *               fechaprestamo:
 *                 type: string
 *                 format: date
 *               fechadevolucion:
 *                 type: string
 *                 format: date
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Préstamo actualizado exitosamente
 *       404:
 *         description: Préstamo no encontrado
 */
router.put("/:id", verifyToken, prestamosController.updatePrestamos);

/**
 * @swagger
 * /prestamos/{id}:
 *   delete:
 *     summary: Eliminar un préstamo
 *     tags: [Prestamos]
 *     security:
 *       - bearerAuth: []  # Requiere token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del préstamo a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Préstamo eliminado exitosamente
 *       404:
 *         description: Préstamo no encontrado
 */
router.delete("/:id", verifyToken, prestamosController.deletePrestamos);

module.exports = router;
