import { Request, Response, Router } from 'express';

class ClienteRouter {
  private _controller;

  private _route;

  constructor(controllerInstance: any) {
    this._controller = controllerInstance;
    this._route = Router();
    this.getRoutes = this.getRoutes.bind(this);
  }

  public getRoutes() {
    this._route.get('/', async (req: Request, res: Response) => {
      await this._controller.findAll(req, res);
    });
    return this._route;
  }
}

export default ClienteRouter;