import "./config.ts";
import email from "./routes/email.route";
import * as express from "express";
import * as cors from "cors";
import * as path from "path";
import * as helmet from "helmet";
import * as compression from "compression";
const __dirname = path.resolve();
const app = express();

app.use(compression());
app.use(express.static(path.resolve(__dirname, "../react-app/build")));
app.use(express.json());

app.get("/", cors(), function (req, res) {
  res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
});
app.use(helmet());

app.use(`/contact`, email);

app.listen(9000);
