import { Request, Response } from 'express';
import Icontroller from './interfaces/Controller';
import Schema from '../schemas/ClienteSchema';

class ProdutoController implements Icontroller {
  private _service;

  constructor(serviceInstance: any) {
    this._service = serviceInstance;
  }

  public findAll = async (_req: Request, res: Response): Promise<Response> => {
    const response = await this._service.findAll();

    if (response.error) return res.status(404).end();

    return res.status(200).json(response);
  };

  public findByName = async (req: Request, res: Response):Promise<Response> => {
    const { desc } = req.query;
    const response = await this._service.findByName(desc);

    if (response.error) return res.status(404).end();

    return res.status(200).json(response);
  };
}

export default ProdutoController;