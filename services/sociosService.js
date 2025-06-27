// services/SociosService.js
const sendEmail = require("../emailSender");
const SociosModel = require("../models/sociosModel");

const getAllSocios = async () => {
  return await SociosModel.getAll();
};

const getSociosById = async (id) => {
  return await SociosModel.getById(id);
};

const createSocios = async (socioData) => {
  try {
    const nuevoSocio = await SociosModel.create(socioData);

    if (nuevoSocio?.email && nuevoSocio?.nombre) {
      const subject = "¡Bienvenido/a a la comunidad!";
      const body = `
      <p>Hola ${nuevoSocio.nombre},</p>
    
      <p>Te damos la bienvenida como nuevo socio/a. Gracias por sumarte a nuestra biblioteca.</p>
    
      <p>Ante cualquier consulta, estamos para ayudarte.</p>
    
      <p>Saludos,<br/>Biblioteca Jorge Luis Borges - EATA</p>
    
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
