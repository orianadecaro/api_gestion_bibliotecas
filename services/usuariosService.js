// services/UsuarioService.js
const UsuarioModel = require("../models/usuarioModel");

const getAllUsuarios = async () => {
  return await UsuarioModel.getAll();
};

const getUsuariosById = async (id) => {
  return await UsuarioModel.getById(id);
};

const createUsuarios = async (usuarioData) => {
  return await UsuarioModel.create(usuarioData);
};

const updateUsuarios = async (id, usuarioData) => {
  return await UsuarioModel.update(id, usuarioData);
};

const deleteUsuarios = async (id) => {
  return await UsuarioModel.remove(id);
};

module.exports = {
  getAllUsuarios,
  getUsuariosById,
  createUsuarios,
  updateUsuarios,
  deleteUsuarios,
};
