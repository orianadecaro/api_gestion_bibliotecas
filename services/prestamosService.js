// services/prestamosService.js
const prestamosModel = require("../models/prestamosModel");
const sendEmail = require("../utils/emailSender");
const sociosModel = require("../models/sociosModel");

const getAllPrestamos = async () => {
  return await prestamosModel.getAll();
};

const getPrestamosById = async (id) => {
  return await prestamosModel.getById(id);
};

const createPrestamos = async (prestamosData) => {
  const nuevoPrestamo = await prestamosModel.create(prestamosData);

  const socio = await sociosModel.getById(nuevoPrestamo.socio_id);
  if (socio?.email) {
    await sendEmail(
      socio.email,
      "Nuevo préstamo registrado",
      `Hola ${socio.nombre}, se ha registrado un nuevo préstamo a tu nombre con éxito.\n\nSaludos,\nBiblioteca Jorge Luis Borges`
    );
  }

  return nuevoPrestamo;
};

const updatePrestamos = async (id, prestamosData) => {
  const prestamoActualizado = await prestamosModel.update(id, prestamosData);

  const socio = await sociosModel.getById(prestamoActualizado.socio_id);
  if (socio?.email) {
    await sendEmail(
      socio.email,
      "Actualización de préstamo",
      `Hola ${socio.nombre}, tu devolución  ha sido registrada con éxito.\n\nSaludos,\nBiblioteca Jorge Luis Borges`
    );
  }

  return prestamoActualizado;
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
