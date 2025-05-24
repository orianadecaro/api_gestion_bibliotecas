// services/SociosService.js
const SociosModel = require("../models/sociosModel");

const getAllSocios = async () => {
  return await SociosModel.getAll();
};

const getSociosById = async (id) => {
  return await SociosModel.getById(id);
};

const createSocios = async (SociosData) => {
  return await SociosModel.create(SociosData);
};

const updateSocios = async (id, SociosData) => {
  return await SociosModel.update(id, SociosData);
};

const deleteSocios = async (id) => {
  return await SociosModel.remove(id);
};

module.exports = {
  getAllSocios,
  getSociosById,
  createSocios,
  updateSocios,
  deleteSocios,
};
