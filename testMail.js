require("dotenv").config();
const sendEmail = require("./emailSender");

sendEmail(
  "orianadecaro@gmail.com",
  "Prueba nodemailer",
  "Esto es una prueba de email."
)
  .then(() => console.log("Email enviado!"))
  .catch((err) => console.error("Error:", err));
