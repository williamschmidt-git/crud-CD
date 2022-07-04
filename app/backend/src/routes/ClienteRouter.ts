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
    this._route.get('/', this._controller.findAll);
    this._route.get('/list?', this._controller.findByName);
    return this._route;
  }
}

export default ClienteRouter;