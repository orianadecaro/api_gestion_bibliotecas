// services/librosService.js
const librosModel = require("../models/librosModel");

const getAllLibros = async () => {
  return await librosModel.getAll();
};

const getLibroById = async (id) => {
  return await librosModel.getById(id);
};

const createLibro = async (libroData) => {
  return await librosModel.create(libroData);
};

const updateLibro = async (id, libroData) => {
  return await librosModel.update(id, libroData);
};

const deleteLibro = async (id) => {
  return await librosModel.remove(id);
};

module.exports = {
  getAllLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro,
};
