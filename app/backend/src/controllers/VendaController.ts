import { NextFunction, Request, Response } from 'express';
import Icontroller from './interfaces/Controller';

class VendaController implements Icontroller {
  private _service;

  constructor(serviceInstance: any) {
    this._service = serviceInstance;
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

  public findBy = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
      const query = req.query;
      const response = await this._service.findBy(query);

      if (response.error) return res.status(404).json(response.error);

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  public findSale = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
      const { id } = req.params;
      const response = await this._service.findSale(id);
  
      if (response.error) return res.status(404).json(response.error);
  
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  public findByCustomer =
    async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
      try {
        const { id } = req.params;
        const response = await this._service.findByCustomer(id);

        if (response.error) return res.status(404).json(response.error);

        return res.status(200).json(response);
      } catch (error) {
        next(error);
      }
    };

  public findByProduct =
    async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
      try {
        const { id } = req.params;
        const response = await this._service.findByProduct(id);

        if (response.error) return res.status(404).json(response.error);

        return res.status(200).json(response);
      } catch (error) {
        next(error);
      }
    };

  public update = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
      const { id } = req.params;
      const obj = req.body;

      const response = await this._service.update(id, obj);

      if (response.error) return res.status(404).json({ error: response.error });

      return res.status(200).json({ message: 'Venda Atualizada' });
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction):Promise<Response> => {
    try {
      const { id } = req.params;

      const response = await this._service.delete(id);

      if (response.error) return res.status(404).json({ error: response.error });

      return res.status(200).json({ message: 'Venda deletada' });
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction):Promise<Response> => {
    try {
      const response = await this._service.create(req.body);

      return res.status(201).json(response);
    } catch (error) {
      next();
    }
  };
}

export default VendaController;