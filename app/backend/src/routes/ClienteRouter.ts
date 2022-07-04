import { Router } from 'express';

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
    this._route.patch('/:id', this._controller.update);
    this._route.delete('/:id', this._controller.delete);
    return this._route;
  }
}

export default ClienteRouter;