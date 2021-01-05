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

    router.get('/api/booking', function (req, res) {
      res.set('Content-Type', 'application/json');
      res.json({ bookings: [1, 2, 3] });
    });

    router.get('/', (req, res) => {
      res.json({ message: 'Hello, I am your first router!' });
    });
    this.express.use('/', router);
  }
}

export default new App().express;