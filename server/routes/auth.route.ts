import * as express from "express";
import { authController } from "../controllers/index";
import { userController } from "../controllers/index";

const router = express.Router();

router.post("/login", authController.userLogin);
router.post("/register", authController.userRegister);
router.get("/getlistUsers", userController.listUsers);
//router.get("/:id", userController.get);
router.get("/me", userController.me);

export default router;
