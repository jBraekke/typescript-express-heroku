import * as cors from "cors";
import * as express from "express";
import { apartmentController } from "../controllers/index";

const router = express.Router();

router.post("/", cors(), apartmentController.create);

router.get("/", apartmentController.listApartments);

export default router;
