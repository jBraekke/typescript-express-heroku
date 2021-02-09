import * as cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import * as expressRouter from "express";
import { apartmentController } from "../controllers/index";
import apartmentSchema from "../model/apartmentSchema";
import * as multer from "multer";
import * as dotenv from "dotenv";
dotenv.config;
const router = expressRouter.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./react-app/public/uploads/");
  },

  filename: function (req: any, file: any, cb: any) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post(
  "/add",
  cors(),
  upload.array("images", 5),
  async (req: Request, res: Response, next: NextFunction) => {
    let newApartment = new apartmentSchema({
      adresse: req.body.adresse,
      antallSoveRom: req.body.antallSoveRom,
      prisPerMnd: req.body.prisPerMnd,
      depositum: req.body.depositum,
      husleieGaranti: req.body.husleieGaranti,
      by: req.body.by,
      images: req.files,
    });
    await newApartment.save();
    res.send(newApartment);
  }
);

//router.post("/", cors(), apartmentController.create);

router.get("/getlist", cors(), apartmentController.listApartments);

export default router;
