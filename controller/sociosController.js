const SociosService = require("../services/sociosService");

const getSocios = async (req, res) => {
  try {
    const data = await SociosService.getAllSocios();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSociosById = async (req, res) => {
  try {
    const data = await SociosService.getSociosById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const createSocios = async (req, res) => {
  try {
    const data = await SociosService.createSocios(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.error("Error en createPrestamos:", err);
    res.status(400).json({ error: err.message });
  }
};

const updateSocios = async (req, res) => {
  try {
    const data = await SociosService.updateSocios(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteSocios = async (req, res) => {
  try {
    const data = await SociosService.deleteSocios(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  deleteSocios,
  getSocios,
  getSociosById,
  createSocios,
  updateSocios,
};
