import catchAsyncErrors from "../utils/catchAsync";
//const { body, validationResult } = require("express-validator");
import ErrorHandler from "../utils/errorHandler";
import { userService } from "../service/index";

export const listApartments = catchAsyncErrors(async (req, res, next) => {
  const listUsers = await userService.listUsers();
  res.status(200).json({ success: true, data: listUsers });
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createUser(req.body);
  res.status(201).json({ success: true, data: user });
});

export const get = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`Can't find apartment with ID ${req.params.id}`, 404)
    );
  }
  res.status(201).json({ success: true, data: user });
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let user = await userService.getUserById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`Can't find apartment with ID ${req.params.id}`, 404)
    );
  }
  user = await userService.updateUser(req.params.id, req.body);
  res.status(201).json({ success: true, data: user });
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let user = await userService.getUserById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`Can't find apartment with ID ${req.params.id}`, 404)
    );
  }
  await userService.removeUser(req.params.id);
  res.status(204).json({});
});
