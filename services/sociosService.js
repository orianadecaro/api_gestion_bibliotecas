// services/SociosService.js
const SociosModel = require("../models/sociosModel");
const sendEmail = require("../emailSender");

const getAllSocios = async () => {
  return await SociosModel.getAll();
};

const getSociosById = async (id) => {
  return await SociosModel.getById(id);
};

const createSocios = async (socioData) => {
  try {
    const nuevoSocio = await SociosModel.create(socioData);

    if (nuevoSocio?.email) {
      const subject = "¡Bienvenido/a a la comunidad!";
      const body = `
     Hola ${nuevoSocio.nombre},
    
     Te damos la bienvenida como nuevo socio/a. Gracias por sumarte a nuestra biblioteca.
    
     Ante cualquier consulta, estamos para ayudarte.
    
     Saludos, Biblioteca Jorge Luis Borges - EATA
    
      <img src="/logo.jpeg" alt="Logo Biblioteca" style="width:150px; height:auto;" />
    `;


      await sendEmail(nuevoSocio.email, subject, body);
    }

    return nuevoSocio;
  } catch (error) {
    console.error("Error al crear socio:", error.message);
    throw error;
  }
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
