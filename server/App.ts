//import bodyParser = require("body-parser");
import email from "./routes/email.route";
import apartment from "./routes/apartment.route"
import * as express from "express";
import * as path from "path";
import * as cors from "cors";
import * as helmet from "helmet";
import * as compression from "compression";
import * as dotenv from "dotenv";
import { textSpanIsEmpty } from "typescript";
import connectDatabase from "./config/db";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
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
    //router.use("/api-docs", swaggerUi.serve);
    //router.get("/api-docs", swaggerUi.setup(swaggerDocument));
    this.express.use(
      express.static(path.resolve(__dirname, "../react-app/build"))
    );

    connectDatabase();
    //this.express.use(bodyParser.json());
    //this.express.use(bodyParser.urlencoded({ extended: true }));
    router.get("/*", cors(), (req, res) => {
      res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
    });

    this.express.use(express.json());
   
    //this.express.use(helmet());
    this.express.use("/", router);
    this.express.use("/contact/", email);
    this.express.use("/addApartment", apartment)
    this.express.post("/api/world", (req, res) => {
      console.log(req.body);
      res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`
      );
    });
  }
}

export default new App().express;
