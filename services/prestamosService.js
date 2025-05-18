// services/prestamosService.js
const prestamosModel = require("../models/prestamosModel");

const getAllPrestamos = async () => {
  return await prestamosModel.getAll();
};

const getPrestamosById = async (id) => {
  return await prestamosModel.getById(id);
};

const createPrestamos = async (prestamosData) => {
  return await prestamosModel.create(prestamosData);
};

const updatePrestamos = async (id, prestamosData) => {
  return await prestamosModel.update(id, prestamosData);
};

const deletePrestamos = async (id) => {
  return await prestamosModel.remove(id);
};

module.exports = {
  getAllPrestamos,
  getPrestamosById,
  createPrestamos,
  updatePrestamos,
  deletePrestamos,
};
