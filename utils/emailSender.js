const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // o el que uses (Outlook, etc.)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error al enviar email:", error.message);
  }
};

module.exports = sendEmail;
