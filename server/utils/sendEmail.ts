import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();
export const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 0,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const message = {
    from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_DESTINATION_ADDRESS,
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(message, function (error, res) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent: " + res.message);
      res.json(res.message);
    }
    transporter.close();
  });
};
