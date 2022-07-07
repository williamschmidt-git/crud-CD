import { Request, Response } from 'express';
import Icontroller from './interfaces/Controller';
import Schema from '../schemas/ProdutoSchema';

class ProdutoController implements Icontroller {
  private _service;

  constructor(serviceInstance: any) {
    this._service = serviceInstance;
    this.findAll = this.findAll.bind(this);
    this.findBy = this.findBy.bind(this);
  }

  public findAll = async (_req: Request, res: Response): Promise<Response> => {
    const response = await this._service.findAll();

    if (response.error) return res.status(404).end();

    return res.status(200).json(response);
  };

  public findBy = async (req: Request, res: Response):Promise<Response> => {
    const { desc } = req.query;
    const response = await this._service.findBy(desc);

    if (response.error) return res.status(404).end();

    return res.status(200).json(response);
  };

  public update = async (req: Request, res: Response):Promise<Response> => {
    const { id } = req.params;
    const obj = req.body;

    const response = await this._service.update(id, obj);

    if (response.error) return res.status(404).json({ error: response.error });

    return res.status(200).json({ message: 'Produto Atualizado' });
  };

  public delete = async (req: Request, res: Response):Promise<Response> => {
    const { id } = req.params;

    const response = await this._service.delete(id);

    if (response.error) return res.status(404).json({ error: response.error });

    return res.status(200).json({ message: 'Produto deletado' });
  };

  public create = async (req: Request, res: Response):Promise<Response> => {
    const { error } = Schema.validate(req.body);

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(Number(code)).json(message);
    }

    const response = await this._service.create(req.body);

    return res.status(201).json(response);
  };
}

export default ProdutoController;