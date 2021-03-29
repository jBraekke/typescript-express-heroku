import * as expressRouter from "express";
import { apartmentController } from "../controllers/index";
const router = expressRouter.Router();

router.post("/add", apartmentController.create);

router.get("/getlist", apartmentController.listApartments);

router.get("/:id", apartmentController.get);

router.put("/:id", apartmentController.update);

router.delete("/:id", apartmentController.remove);

export default router;
