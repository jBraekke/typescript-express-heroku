import email from "./routes/email.route";
import apartment from "./routes/apartment.route";
import uploadimage from "./routes/image.route";
import * as express from "express";
import * as path from "path";
import * as cors from "cors";
import * as helmet from "helmet";
import * as compression from "compression";
import * as dotenv from "dotenv";
import { textSpanIsEmpty } from "typescript";
import connectDatabase from "./config/db";

//const swaggerUi = require("swagger-ui-express");
//const swaggerDocument = require("../swagger.json");

dotenv.config();
class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(express.json());
    //router.use("/api-docs", swaggerUi.serve);
    //router.get("/api-docs", swaggerUi.setup(swaggerDocument));
    this.express.use(
      express.static(path.resolve(__dirname, "../react-app/build"))
    );

    connectDatabase();
    /*router.get("/*", cors(), (req, res) => {
      res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
    });*/
    router.get(/^\/(?!api).*/, (req, res) => {
      res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
    });

    //this.express.use(helmet());
    this.express.use("/", router);
    this.express.use("/contact/", email);
    this.express.use(process.env.API_KEY + "apartments/", apartment);
    this.express.use(process.env.API_KEY + "multer/", uploadimage);
    this.express.post("/api/world", (req, res) => {
      console.log(req.body);
      res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`
      );
    });
  }
}

export default new App().express;
