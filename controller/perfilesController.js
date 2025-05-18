// controllers/PerfilesController.js
const PerfilesService = require("../services/perfilesService");

const getAllPerfiles = async (req, res) => {
  try {
    const Perfiles = await PerfilesService.getAllPerfiles();
    res.json(Perfiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPerfilesById = async (req, res) => {
  try {
    const Perfiles = await PerfilesService.getPerfilesById(req.params.id);
    res.json(Perfiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPerfiles = async (req, res) => {
  try {
    const nuevoPerfiles = await PerfilesService.createPerfiles(req.body);
    res.status(201).json(nuevoPerfiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePerfiles = async (req, res) => {
  try {
    const PerfilesActualizado = await PerfilesService.updatePerfiles(
      req.params.id,
      req.body
    );
    res.json(PerfilesActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePerfiles = async (req, res) => {
  try {
    await PerfilesService.deletePerfiles(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPerfiles,
  getPerfilesById,
  createPerfiles,
  updatePerfiles,
  deletePerfiles,
};
