import email from "./routes/email.route";
import apartment from "./routes/apartment.route";
import uploadimage from "./routes/image.route";
import loginroute from "./routes/login.route";
import * as express from "express";
import * as path from "path";
import * as cors from "cors";
import * as helmet from "helmet";
import * as compression from "compression";
import * as dotenv from "dotenv";
import authRoutes from "./routes/auth.route";
import connectDatabase from "./config/db";
import * as cookieParser from "cookie-parser";
import * as passport from "passport";
//const swaggerUi = require("swagger-ui-express");
//const swaggerDocument = require("../swagger.json");
import { ROLES } from "./utils";
import { initialiseAuthentication, utils } from "./auth";
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
    this.express.use(cookieParser());
    this.express.use(passport.initialize());
    //router.use("/api-docs", swaggerUi.serve);
    //router.get("/api-docs", swaggerUi.setup(swaggerDocument));
    this.express.use(
      express.static(path.resolve(__dirname, "../react-app/build"))
    );

    connectDatabase();
    router.get(/^\/(?!api).*/, (req, res) => {
      res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
    });
    initialiseAuthentication(this.express);

    /* //Only allows authenticated users to access page but uses Next.js instead of CRA
    this.express.get(
      "/pdf",
      passport.authenticate("jwt", { failureRedirect: "/loginuser" }),
      utils.checkIsInRole(ROLES.Admin),
      (req, res) => {
        res.redirect("/loginuser");
      }
    ); */

    this.express.use("/", router);
    this.express.use("/contact/", cors(), email);
    this.express.use(process.env.API_KEY + "auth/", cors(), authRoutes);

    //Example usage of authentication
    /*this.express.use(
      process.env.API_KEY + "apartments/",
      passport.authenticate("jwt", { failureRedirect: "/loginuser" }),
      utils.checkIsInRole(ROLES.Admin),
      cors(),
      apartment
    );
    */
    //Example usage of authentication

    this.express.use(process.env.API_KEY + "apartments/", cors(), apartment);
    this.express.use(
      process.env.API_KEY + "login/",
      passport.authenticate("jwt", { failureRedirect: "/loginuser" }),
      cors(),
      loginroute
    );
    this.express.use(process.env.API_KEY + "multer/", cors(), uploadimage);
    this.express.post("/api/world", (req, res) => {
      console.log(req.body);
      res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`
      );
    });
  }
}

export default new App().express;
