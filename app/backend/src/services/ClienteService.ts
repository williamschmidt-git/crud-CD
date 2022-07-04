import { Service } from './interfaces/Service';
import { Icliente } from './interfaces/Cliente';
import { Ierror } from './interfaces/Error';

class ClienteService implements Service {
  private _model;

  constructor(dbInstance: any) {
    this._model = dbInstance;
  }

  public findAll = async (): Promise<Icliente[] | Ierror> => {
    const clientes = await this._model.findAll();

    if (!clientes) return { error: 'Not found' };

    return clientes;
  };

  public findByName = async (name: string): Promise<Icliente | null | Ierror> => {
    const cliente = await this._model.findAll({ where: { nmCliente: name } });

    if (!cliente) return { error: 'Not found ' };

    return cliente;
  };
}

export default ClienteService;
