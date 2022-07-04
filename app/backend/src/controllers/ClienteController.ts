import { Request, Response } from 'express';
import Icliente from './interfaces/Cliente';

class ClienteController implements Icliente {
  private _service;

  constructor(serviceInstance: any) {
    this._service = serviceInstance;
    this.findAll = this.findAll.bind(this);
  }

  public findAll = async (_req: Request, res: Response): Promise<Response> => {
    const clientes = await this._service.findAll();

    if (!clientes) res.status(404).end();

    return res.status(200).json(clientes);
  };
}

export default ClienteController;