// controllers/PrestamosController.js
const PrestamosService = require("../services/prestamosService");

const getAllPrestamos = async (req, res) => {
  try {
    const Prestamos = await PrestamosService.getAllPrestamos();
    res.json(Prestamos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPrestamosById = async (req, res) => {
  try {
    const Prestamos = await PrestamosService.getPrestamosById(req.params.id);
    res.json(Prestamos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getHistorialPrestamosBySocio = async (req, res) => {
  try {
    const socioId = parseInt(req.params.id, 10);
    const historial = await PrestamosService.getPrestamosBySocioId(socioId);
    // historial es un array
    if (!historial || historial.length === 0) {
      return res.status(404).json({ error: "Historial no encontrado" });
    }
    res.json(historial); // devuelve array
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const createPrestamos = async (req, res) => {
  try {
    const nuevoPrestamos = await PrestamosService.createPrestamos(req.body);
    res.status(201).json(nuevoPrestamos);
  } catch (error) {
    console.error("Error en createPrestamos:", error);
    res.status(500).json({ error: error.message });
  }
};

const updatePrestamos = async (req, res) => {
  try {
    const PrestamosActualizado = await PrestamosService.updatePrestamos(
      req.params.id,
      req.body
    );
    res.json(PrestamosActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePrestamos = async (req, res) => {
  try {
    await PrestamosService.deletePrestamos(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPrestamos,
  getHistorialPrestamosBySocio,
  getPrestamosById,
  createPrestamos,
  updatePrestamos,
  deletePrestamos,
};
