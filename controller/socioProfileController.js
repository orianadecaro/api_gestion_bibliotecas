const supabase = require("../supabaseClient");

module.exports = {
    async getProfile(req, res) {
        const socioId = req.user.id; // viene del token decodificado en verifyToken

        try {
            const { data, error } = await supabase
                .from("socios")
                .select("id, nombre, email, telefono, perfil_id, estado, dni")
                .eq("id", socioId)
                .single();

            if (error || !data) {
                return res.status(404).json({ error: "Socio no encontrado" });
            }

            res.json({ socio: data });
        } catch (err) {
            res.status(500).json({ error: "Error en el servidor: " + err.message });
        }
    },
};
