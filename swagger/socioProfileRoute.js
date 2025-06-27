const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const SocioProfileController = require("../controller/socioProfileController");

/**
 * @swagger
 * /socios/profile:
 *   get:
 *     summary: Obtener el perfil del socio autenticado
 *     tags: [Socios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil del socio obtenido correctamente
 *       401:
 *         description: No autorizado
 */
router.get("/:id", verifyToken, SocioProfileController.getProfile);

module.exports = router;
