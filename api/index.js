// api/index.js
const serverless = require("serverless-http");
const app = require("../index"); // importa tu app express

module.exports = serverless(app);
