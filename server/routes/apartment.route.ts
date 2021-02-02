import * as express from 'express';
import {apartmentController} from "../controllers/index"

const router = express.Router();

router.post(
    '/',apartmentController.create
  );

export default router;