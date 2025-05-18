const usuarioService = require("../services/usuariosService");

const getUsuarios = async (req, res) => {
  try {
    const data = await usuarioService.getAllUsuarios();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsuariosById = async (req, res) => {
  try {
    const data = await usuarioService.getUsuariosById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUsuario = async (req, res) => {
  try {
    const data = await usuarioService.createUsuarios(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUsuario = async (req, res) => {
  try {
    const data = await usuarioService.updateUsuarios(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const data = await usuarioService.deleteUsuarios(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsuarios,
  getUsuariosById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
