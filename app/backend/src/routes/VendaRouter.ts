import { Router } from 'express';

class VendaRouter {
  private _controller;

  private _route;

  constructor(controllerInstance: any) {
    this._controller = controllerInstance;
    this._route = Router();
    this.getRoutes = this.getRoutes.bind(this);
  }

  public getRoutes() {
    this._route.get('/', this._controller.findAll);
    this._route.get('/list?', this._controller.findBy);
    return this._route;
  }
}

export default VendaRouter;