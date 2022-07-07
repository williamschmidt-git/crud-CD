import express from 'express';
import cors from 'cors';
import { clienteRouter, produtoRouter, vendaRouter } from './factory';
import errorMiddleware from './middlewares/error';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.app.use(errorMiddleware);
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
    this.app.use('/produto', produtoRouter.getRoutes());
    this.app.use('/venda', vendaRouter.getRoutes());
  }

  public getApp() {
    return this.app;
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();