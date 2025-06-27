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




module.exports = router;
