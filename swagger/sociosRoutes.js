const express = require("express");
const SociosController = require("../controller/sociosController");

const router = express.Router();

router.get("/", SociosController.getSocios);
router.get("/:id", SociosController.getSociosById);
router.post("/", SociosController.createSocios);
router.put("/:id", SociosController.updateSocios);
router.delete("/:id", SociosController.deleteSocios);

module.exports = router;

// Swagger socios.yaml
/**
 * @swagger
 * tags:
 *   name: Socios
 *   description: Gestión de socios
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
 *   post:
 *     summary: Crear un socio
 *     tags: [Socios]
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
 *                 type: string
 *               telefono:
 *                 type: string
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Socio creado
 *
 * /socios/{id}:
 *   get:
 *     summary: Obtener un socio por ID
 *     tags: [Socios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Socio encontrado
 *   put:
 *     summary: Actualizar socio
 *     tags: [Socios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Socio actualizado
 *   delete:
 *     summary: Eliminar socio
 *     tags: [Socios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Socio eliminado
 */
