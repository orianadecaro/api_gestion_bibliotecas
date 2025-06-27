const request = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../index.js");

describe("Préstamos API", () => {
  let token;

  beforeAll(() => {
    token = jwt.sign(
      { id: "test-user-id", rol: "staff" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  });

  it("debería crear un préstamo", async () => {
    const nuevoPrestamo = {
      libro_id: 1,
      socio_id: 2,
      fechaprestamo: "2025-06-09",
      fechadevolucion: null,
      estado: "activo",
    };

    const res = await request(app)
      .post("/prestamos")
      .set("Authorization", `Bearer ${token}`)
      .send(nuevoPrestamo);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.estado).toBe("activo");
  });
});
