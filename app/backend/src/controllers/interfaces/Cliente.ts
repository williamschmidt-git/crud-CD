import { NextFunction, Request, Response } from 'express';

export default interface Icliente {
  findAll: (req: Request, res: Response, next: NextFunction) => Promise<Response>
  findByName: (req: Request, res: Response, next: NextFunction) => Promise<Response>
  update: (req: Request, res: Response, next: NextFunction) => Promise<Response>
  delete: (req: Request, res: Response, next: NextFunction) => Promise<Response>
}