import * as express from "express";
import { emailController } from "../controllers/index";
import * as cors from "cors";
const router = express.Router();

router.post("/sendmail", cors(), emailController.sendMails);

export default router;
