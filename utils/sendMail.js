const nodemailer = require("nodemailer");

const sendEmailToUser = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMPT_USER,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };
  return await transporter.sendMail(mailOptions);
};

module.exports = sendEmailToUser;
