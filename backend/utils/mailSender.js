const nodemailer = require("nodemailer");

require("dotenv").config();

// console.log("EMAIL_USER:", process.env.EMAIL_USER);
// console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailSender = async (email, title, body) => {
  try {
    // console.log("=================================");
    // console.log("Starting mail sending...");
    // console.log("To:", email);
    // console.log("Subject:", title);

    // Check Gmail connection/authentication
    await transporter.verify();

    // console.log("SMTP connection successful.");

    const info = await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    // console.log("Email sent successfully!");
    // console.log("Message ID:", info.messageId);

    return info;
  } catch (err) {
    // console.error("=================================");
    // console.error("MAIL ERROR");
    // console.error("Code:", err.code);
    // console.error("Command:", err.command);
    // console.error("Response:", err.response);
    // console.error("Message:", err.message);
    // console.error("=================================");

    throw err;
  }
};

module.exports = mailSender;