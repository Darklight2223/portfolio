const mailSender = require("../utils/mailSender");

const {
  contactConfirmationEmail,
  contactMe,
} = require("../mail/templates/contactReply");

require("dotenv").config();

exports.sendMail = async (req, res) => {
  try {
    // console.log("=================================");
    // console.log("CONTACT FORM REQUEST RECEIVED");
    // console.log("Body:", req.body);

    const { email, name, message } = req.body;

    if (!email || !name || !message) {
      console.log("Missing required fields");

      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    // console.log("Sending confirmation email...");

    await mailSender(
      email,
      "Thank You For Contacting Us",
      contactConfirmationEmail(name)
    );

    // console.log("Confirmation email sent.");

    // console.log("Sending notification email...");

    await mailSender(
      process.env.EMAIL_USER,
      "Awaiting Your Response",
      contactMe(name, email, message)
    );

    // console.log("Notification email sent.");

    return res.status(200).json({
      success: true,
      message: "Email Sent Successfully",
    });
  } catch (err) {
    // console.error("=================================");
    // console.error("CONTROLLER ERROR:", err);
    // console.error("=================================");

    return res.status(500).json({
      success: false,
      message: "Failed at Sending Mail",
      error: err.message,
    });
  }
};