const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const supabase = require("../supabaseClient");
require("dotenv").config();

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email y contraseña son requeridos" });
    }

    try {
      // Buscar solo por email
      const { data, error } = await supabase
        .from("usuarios")
        .select("id, nombre, email, perfil_id, estado, password_hash, telefono, dni")
        .eq("email", email)
        .single();

      if (error || !data) {
        return res.status(401).json({ error: "Credenciales inválidas" });
      }

      // Comparar el password ingresado con el hash almacenado
      const match = await bcrypt.compare(password, data.password_hash);
      if (!match) {
        return res.status(401).json({ error: "Credenciales inválidas" });
      }

      if (data.estado === false) {
        return res.status(403).json({ error: "Usuario inactivo" });
      }

      // Generar token
      const token = jwt.sign(
        {
          id: data.id,
          email: data.email,
          perfil_id: data.perfil_id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "8h" }
      );

      return res.json({
        message: "Login exitoso",
        token,
        user: data,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Error en el servidor: " + err.message });
    }
  },
};
