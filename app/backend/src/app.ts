import * as express from 'express';
import * as cors from 'cors';
import { AppDataSource } from './database/config/data-source';
import { DataSource } from 'typeorm';

class App {
  public app: express.Express;

  private _databaseConn: DataSource;

  constructor() {
    this.app = express();
    this.config();
    this._databaseConn = AppDataSource;
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this._databaseConn.initialize();
    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(cors());
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.warn(`Listen on ${PORT}`));
  }
}

export default App;