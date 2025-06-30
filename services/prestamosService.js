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

const getPrestamosBySocioId = async (socioId) => {
  return await prestamosModel.getBySocioId(socioId);
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
        <p> Hola ${socio.nombre},</p>

        <p>Se ha registrado exitosamente el préstamo del libro: </p>
        <p>Título: ${libro.titulo} </p>
        <p>Autor: ${libro.autor} </p>

        <p><strong>Fecha de préstamo:</strong> ${prestamosData.fechaprestamo} </p>
        <p><strong>Fecha de devolución:</strong> ${prestamosData.fechadevolucion || "No especificada"
        }</p>
       <p><strong>Estado:</strong> ${prestamosData.estado}</p>

        <p>Muchas gracias por usar nuestra biblioteca.</p>

       <p> Saludos,</p>
       <p> Biblioteca Jorge Luis Borges - EATA</p>

        <img src="https://gestion-bibliotecas-psi.vercel.app/logo.jpeg" alt="Logo Biblioteca" style="width:150px; height:auto;" />
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
      <p> Hola ${socio.nombre},  </p>

      <p>  Tu préstamo ha sido actualizado con éxito.</p>

      <p>   Estado actual del préstamo: ${prestamosData.estado || prestamoActualizado.estado}</p>
      <p>  Fecha de devolución: ${prestamosData.fechadevolucion ||
      prestamoActualizado.fechadevolucion ||
      "No especificada"
      }</p>

      <p> Muchas gracias por usar nuestra biblioteca.</p>

    <p> Saludos,</p>
    <p> Biblioteca Jorge Luis Borges - EATA</p>

    <img src="https://gestion-bibliotecas-psi.vercel.app/logo.jpeg" alt="Logo Biblioteca" style="width:150px; height:auto;" />
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
  getPrestamosBySocioId
};
