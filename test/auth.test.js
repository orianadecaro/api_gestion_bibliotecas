const request = require("supertest");
const app = require("../index");

describe("Auth routes", () => {
  it("debería loguearse con credenciales válidas", async () => {
    const response = await request(app).post("/login").send({
      email: "orianadecaro@gmail.com",
      password: "123456",
    });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
