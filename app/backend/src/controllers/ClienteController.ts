import { Request, Response } from 'express';
import Icliente from './interfaces/Cliente';
import Schema from '../schemas/JoiSchema';

class ClienteController implements Icliente {
  private _service;

  constructor(serviceInstance: any) {
    this._service = serviceInstance;
    this.findAll = this.findAll.bind(this);
    this.findByName = this.findByName.bind(this);
  }

  public findAll = async (_req: Request, res: Response): Promise<Response> => {
    const response = await this._service.findAll();

    if (response.error) return res.status(404).end();

    return res.status(200).json(response);
  };

  public findByName = async (req: Request, res: Response):Promise<Response> => {
    const { name } = req.query;
    const response = await this._service.findByName(name);

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

export default ClienteController;