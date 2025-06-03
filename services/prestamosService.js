// services/prestamosService.js
const prestamosModel = require("../models/prestamosModel");
const sendEmail = require("../emailSender");
const sociosModel = require("../models/sociosModel");
const librosModel = require("../models/librosModel");

const getAllPrestamos = async () => {
  return await prestamosModel.getAll();
};

const getPrestamosById = async (id) => {
  return await prestamosModel.getById(id);
};

const createPrestamos = async (prestamosData) => {
  console.log("Datos recibidos para crear préstamo:", prestamosData);

  const libro = await librosModel.getById(prestamosData.libro_id);
  if (!libro) {
    throw new Error(`El libro con id ${prestamosData.libro_id} no existe.`);
  }

  const socio = await sociosModel.getById(prestamosData.socio_id);
  if (!socio) {
    throw new Error(`El socio con id ${prestamosData.socio_id} no existe.`);
  }

  try {
    const nuevoPrestamo = await prestamosModel.create(prestamosData);
    console.log("Préstamo creado:", nuevoPrestamo);

    if (socio.email) {
      const subject = "Confirmación de préstamo - Biblioteca Jorge Luis Borges";
      const body = `
        Hola ${socio.nombre},

        Se ha registrado exitosamente el préstamo del libro:
        Título: ${libro.titulo}
        Autor: ${libro.autor}

        Fecha de préstamo: ${prestamosData.fechaprestamo}
        Fecha de devolución: ${
          prestamosData.fechadevolucion || "No especificada"
        }
        Estado: ${prestamosData.estado}

        Muchas gracias por usar nuestra biblioteca.

        Saludos,
        Biblioteca Jorge Luis Borges
      `;
      await sendEmail(socio.email, subject, body);
    }

    return nuevoPrestamo;
  } catch (error) {
    console.error("Error al crear el préstamo:", error.message);
    throw error;
  }
};

const updatePrestamos = async (id, prestamosData) => {
  const prestamoActualizado = await prestamosModel.update(id, prestamosData);

  if (!prestamoActualizado) {
    throw new Error(`No se encontró el préstamo con id ${id} para actualizar.`);
  }

  const socio = await sociosModel.getById(prestamoActualizado.socio_id);
  if (socio?.email) {
    const subject = "Actualización de préstamo - Biblioteca Jorge Luis Borges";
    const body = `
      Hola ${socio.nombre},

      Tu préstamo ha sido actualizado con éxito.

      Estado actual del préstamo: ${
        prestamosData.estado || prestamoActualizado.estado
      }
      Fecha de devolución: ${
        prestamosData.fechadevolucion ||
        prestamoActualizado.fechadevolucion ||
        "No especificada"
      }

      Muchas gracias por usar nuestra biblioteca.

      Saludos,
      Biblioteca Jorge Luis Borges
    `;
    await sendEmail(socio.email, subject, body);
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
