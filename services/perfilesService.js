// services/PerfilessService.js
const PerfilessModel = require("../models/perfilesModel");

const getAllPerfiles = async () => {
  return await PerfilessModel.getAll();
};

const getPerfilesById = async (id) => {
  return await PerfilessModel.getById(id);
};

const createPerfiles = async (PerfilesData) => {
  return await PerfilessModel.create(PerfilesData);
};

const updatePerfiles = async (id, PerfilesData) => {
  return await PerfilessModel.update(id, PerfilesData);
};

const deletePerfiles = async (id) => {
  return await PerfilessModel.remove(id);
};

module.exports = {
  getAllPerfiles,
  getPerfilesById,
  createPerfiles,
  updatePerfiles,
  deletePerfiles,
};
