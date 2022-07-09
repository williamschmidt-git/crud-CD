import { NextFunction, Request, Response } from 'express';
import Icontroller from './interfaces/Controller';
import Schema from '../schemas/ClienteSchema';

class ClienteController implements Icontroller {
  private _service;

  constructor(serviceInstance: any) {
    this._service = serviceInstance;
    this.findAll = this.findAll.bind(this);
    this.findBy = this.findBy.bind(this);
  }

  public findAll = async (_req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
      const response = await this._service.findAll();

      if (response.error) return res.status(404).end();

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  public findBy = async (req: Request, res: Response, next: NextFunction):Promise<Response> => {
    try {
      const { name } = req.query;
      const response = await this._service.findBy(name);
      if (response.error) return res.status(404).end();
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }; 

  public update = async (req: Request, res: Response, next: NextFunction):Promise<Response> => {
    try {
      const { id } = req.params;
      const obj = req.body;

      const response = await this._service.update(id, obj);

      if (response.error) return res.status(404).json({ error: response.error });

      return res.status(200).json({ message: 'Cliente Atualizado' });
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction):Promise<Response> => {
    try {
      const { id } = req.params;

      const response = await this._service.delete(id);

      if (response.error) return res.status(404).json({ error: response.error });

      return res.status(200).json({ message: 'Cliente deletado' });
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction):Promise<Response> => {
    try {
      const { error } = Schema.validate(req.body);

      if (error) {
        const [code, message] = error.message.split('|');
        return res.status(Number(code)).json(message);
      }

      const response = await this._service.create(req.body);

      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };
}

export default ClienteController;