import { Service } from './interfaces/Service';
import { Icliente } from './interfaces/Cliente';

class ClienteService implements Service {
  private _model;

  constructor(dbInstance: any) {
    this._model = dbInstance;
  }

  public findAll = async (): Promise<Icliente[]> => {
    const clientes = await this._model.findAll();
    return clientes;
  };
}

export default ClienteService;
