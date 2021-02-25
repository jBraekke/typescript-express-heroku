import catchAsyncErrors from "../utils/catchAsync";

import { apartmentService } from "../service/index";

export const listApartments = catchAsyncErrors(async (req, res, next) => {
  const listApartments = await apartmentService.listApartments();
  res.status(200).json({ success: true, data: listApartments });
});

export const create = catchAsyncErrors(async (req, res, next) => {
  //req.body.admin = req.user.id;
  const article = await apartmentService.createApartments(req.body);
  res.status(201).json({ success: true, data: article });
});