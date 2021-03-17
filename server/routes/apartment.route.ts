import * as cors from "cors";
import * as expressRouter from "express";
import { apartmentController } from "../controllers/index";
import * as dotenv from "dotenv";
dotenv.config;
const router = expressRouter.Router();

router.post("/add", cors(), apartmentController.create);

router.get("/getlist", cors(), apartmentController.listApartments);

router.get("/:id", cors(), apartmentController.get);

router.put("/:id", cors(), apartmentController.update);

router.delete("/:id", cors(), apartmentController.remove);

export default router;
