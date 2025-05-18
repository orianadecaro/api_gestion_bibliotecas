// controllers/librosController.js
const librosService = require("../services/librosService");

const getAllLibros = async (req, res) => {
  try {
    const libros = await librosService.getAllLibros();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLibroById = async (req, res) => {
  try {
    const libro = await librosService.getLibroById(req.params.id);
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLibro = async (req, res) => {
  try {
    const nuevoLibro = await librosService.createLibro(req.body);
    res.status(201).json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLibro = async (req, res) => {
  try {
    const libroActualizado = await librosService.updateLibro(
      req.params.id,
      req.body
    );
    res.json(libroActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteLibro = async (req, res) => {
  try {
    await librosService.deleteLibro(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro,
};
