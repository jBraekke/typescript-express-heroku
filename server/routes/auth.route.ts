import * as express from "express";
import { authController } from "../controllers/index";
import { userController } from "../controllers/index";

const router = express.Router();

router.post("/login", authController.userLogin);
router.post("/register", authController.userRegister);
router.get("/getlistUsers", userController.listUsers);
//router.get("/:id", userController.get);
router.get("/me", userController.me);
//router.get("/logout", userController.logout);

router.get("/logout", function (req, res) {
  req.logOut();
  delete req.session;
  res.cookie("jwt", { expires: new Date(0) });
  res.clearCookie("jwt");
  res.redirect("/loginuser");
  console.log(req);
});

export default router;
