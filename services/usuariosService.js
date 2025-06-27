// services/UsuarioService.js
const UsuarioModel = require("../models/usuarioModel");
const bcrypt = require("bcrypt");
const sendEmail = require("../emailSender");

const getAllUsuarios = async () => {
  return await UsuarioModel.getAll();
};

const getUsuariosById = async (id) => {
  return await UsuarioModel.getById(id);
};



const createUsuarios = async (usuarioData) => {
  try {

    // 2. Crear usuario con password hasheado
    const nuevoUsuario = await UsuarioModel.create(usuarioData
    );

    // 3. Enviar email de bienvenida
    if (nuevoUsuario?.email) {
      const subject = "¡Bienvenido/a a la plataforma!";
      const body = `
        <p>Hola ${nuevoUsuario.nombre},</p>
        
        <p>Te damos la bienvenida como nuevo staff de la bibilioteca. Gracias por sumarte  en nuestra comunidad.</p>
        <p>Ante cualquier consulta, estamos para ayudarte.</p>
        <p>Saludos,<br/>Equipo Biblioteca</p>
        <img src="/logo.jpeg" alt="Logo Biblioteca" style="width:150px; height:auto;" />
      `;

      await sendEmail(nuevoUsuario.email, subject, body);
    }

    return nuevoUsuario;
  } catch (error) {
    console.error("Error al crear usuario:", error.message);
    throw error;
  }
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
