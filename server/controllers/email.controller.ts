import catchAsyncErrors from "../utils/catchAsync";
import { sendMail } from "../utils/sendEmail";

export const sendMails = catchAsyncErrors(async (req, res, next) => {
  var email = {
    subject: req.body.subject,
    text: req.body.text,
  };
  try {
    await sendMail(email);
  } catch (error) {
    console.log(error);
  }
  res.status(250).json();
});
