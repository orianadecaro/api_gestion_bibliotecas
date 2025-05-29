const jwt = require("jsonwebtoken");
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
      const { data, error } = await supabase
        .from("usuarios")
        .select("id, nombre, email, perfil_id, estado, password_hash, telefono")
        .eq("email", email)
        .eq("password_hash", password)
        .single();

      if (error || !data) {
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
