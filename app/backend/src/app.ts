import express from 'express';
import cors from 'cors';
import { clienteRouter } from './factory';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(cors());
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.warn(`Listen on ${PORT}`));
  }
  
  public routes(): void {
    this.app.use('/cliente', clienteRouter.getRoutes());
  }
}

export { App };