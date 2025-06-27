const request = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../index.js");

describe("Socios API", () => {
  let token;

  beforeAll(() => {
    token = jwt.sign(
      { id: "test-user-id", rol: "staff" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  });

  it("debería crear un socio", async () => {
    const nuevoSocio = {
      nombre: "Juan Pérez",
      email: "juan@example.com",
      perfil_id: 3,
      telefono: "123456789",
      estado: true,
    };

    const res = await request(app)
      .post("/socios")
      .set("Authorization", `Bearer ${token}`)
      .send(nuevoSocio);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.nombre).toBe("Juan Pérez");
  });
});
