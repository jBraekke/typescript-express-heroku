import * as cors from "cors";
import * as expressRouter from "express";
import * as multer from "multer";
import * as dotenv from "dotenv";
dotenv.config;
const router = expressRouter.Router();

//Jeg lar denne være da det bare er en funksjon

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

router.post("/uploadimage", upload.single("image"), (req, res, next) => {
  try {
    return res.status(201).json({
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.error(error);
  }
});

export default router;
