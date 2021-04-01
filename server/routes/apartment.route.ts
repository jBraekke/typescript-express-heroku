import * as expressRouter from "express";
import passport from "passport";
import { utils } from "../auth";
import { apartmentController } from "../controllers/index";
import { ROLES } from "../utils/roles";
const router = expressRouter.Router();

router.post("/add", apartmentController.create);

router.post("/edit/:id", apartmentController.update);

router.get("/getlist", apartmentController.listApartments);

router.get("/:id", apartmentController.get);

router.put("/:id", apartmentController.update);

router.delete("/:id", apartmentController.remove);

export default router;
