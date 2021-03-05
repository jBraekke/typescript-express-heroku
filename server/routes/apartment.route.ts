import * as cors from "cors";
import * as expressRouter from "express";
import { apartmentController } from "../controllers/index";
import * as dotenv from "dotenv";
dotenv.config;
const router = expressRouter.Router();

router.post("/add", cors(), apartmentController.create);

router.get("/getlist", cors(), apartmentController.listApartments);

export default router;
