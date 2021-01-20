import bodyParser = require('body-parser');
import * as express from 'express';
import * as path from 'path'
class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();

    this.express.use(express.static(path.resolve(__dirname, '../react-app/build')));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));


    router.get('/*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'));
    });

    this.express.use('/', router);
  }
}

export default new App().express;