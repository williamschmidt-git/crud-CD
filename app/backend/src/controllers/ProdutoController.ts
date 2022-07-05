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

  public update = async (req: Request, res: Response):Promise<Response> => {
    const { id } = req.params;
    const obj = req.body;

    const response = await this._service.update(id, obj);

    if (response.error) return res.status(404).json({ error: response.error });

    return res.status(200).json({ message: 'Cliente Atualizado' });
  };

  public delete = async (req: Request, res: Response):Promise<Response> => {
    const { id } = req.params;

    const response = await this._service.delete(id);

    if (response.error) return res.status(404).json({ error: response.error });

    return res.status(200).json({ message: 'Cliente deletado' });
  };
}

export default ProdutoController;