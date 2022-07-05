import { Request, Response } from 'express';
import Icontroller from './interfaces/Controller';
import Schema from '../schemas/ClienteSchema';

class ProdutoController implements Icontroller {
  private _service;

  constructor(serviceInstance: any) {
    this._service = serviceInstance;
  }
}

export default ProdutoController;