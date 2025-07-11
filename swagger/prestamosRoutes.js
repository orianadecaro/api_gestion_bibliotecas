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
 * /socios/historial/{id}:
 *   get:
 *     summary: Obtener historial de préstamos de un socio por su ID
 *     tags:
 *       - Socios
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del socio para obtener su historial
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de préstamos del socio
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   socio_id:
 *                     type: integer
 *                   libro_id:
 *                     type: integer
 *                   fechaprestamo:
 *                     type: string
 *                     format: date-time
 *                   fechadevolucion:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                   estado:
 *                     type: string
 *       401:
 *         description: No autorizado, token inválido o no proporcionado
 *       404:
 *         description: Socio o historial no encontrado
 *       500:
 *         description: Error del servidor
 */

router.get("/:id", verifyToken, prestamosController.getHistorialPrestamosBySocio);



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
 *                 type: integer
 *               socio_id:
 *                 type: integer
 *               fechaprestamo:
 *                 type: string
 *                 format: date
 *               fechadevolucion:
 *                 type: null
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
 *                 type: integer
 *               socio_id:
 *                 type: integer
 *               fechaprestamo:
 *                 type: string
 *                 format: date
 *               fechadevolucion:
 *                 type: null
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
