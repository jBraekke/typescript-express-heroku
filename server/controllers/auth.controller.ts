import catchAsyncErrors from "../utils/catchAsync";
import ErrorHandler from "../utils/errorHandler";
import { userService } from "../service/index";
import * as express from "express";
import { to } from "await-to-js";
import { verifyPassword, hashPassword, getRedirectUrl } from "../auth/utils";
import { login } from "../auth/strategies/jwt";
import { createUser, getUserByEmail } from "../service/user.service";
import * as cors from "cors";
import { userController } from "../controllers/index";

export const userLogin = catchAsyncErrors(async (req, res) => {
  const { email, password } = req.body;
  const [err, user]: any = await to(getUserByEmail(email));

  const authenticationError = () => {
    return res
      .status(500)
      .json({ success: false, data: "Authentication error!" });
  };

  if (!(await verifyPassword(password, user.password))) {
    console.error("Passwords do not match");
    return authenticationError();
  }

  const [loginErr, token] = await to(login(req, user));

  if (loginErr) {
    console.error("Log in error", loginErr);
    return authenticationError();
  }

  return res
    .status(200)
    .cookie("jwt", token, {
      httpOnly: true,
    })
    .json({
      success: true,
      data: getRedirectUrl(user.role),
    });
});

export const userRegister = catchAsyncErrors(async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  console.log(email);
  if (!/\b\w+\@\w+\.\w+(?:\.\w+)?\b/.test(email)) {
    return res
      .status(500)
      .json({ success: false, data: "Enter a valid email address." });
  } else if (password.length < 5 || password.length > 20) {
    return res.status(500).json({
      success: false,
      data: "Password must be between 5 and 20 characters.",
    });
  }

  let [err, user]: any = await to(
    createUser({
      firstName,
      lastName,
      email,
      password: await hashPassword(password),
      role,
    })
  );
  if (err) {
    return res.status(500).json({
      success: false,
      data:
        "Epost addresse er allerede tatt, vennligst velg en annen epost addresse!",
    });
  }

  return res.status(201).json({
    success: true,
    data: "Registrert!",
  });
});
