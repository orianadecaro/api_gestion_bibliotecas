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

const createPrestamos = async (req, res) => {
  try {
    const nuevoPrestamos = await PrestamosService.createPrestamos(req.body);
    res.status(201).json(nuevoPrestamos);
  } catch (error) {
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
  getPrestamosById,
  createPrestamos,
  updatePrestamos,
  deletePrestamos,
};
