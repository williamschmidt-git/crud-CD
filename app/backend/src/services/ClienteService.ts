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

    if (!clientes) return { error: 'Não encontrado' };

    return clientes;
  };

  public findByName = async (name: string): Promise<Icliente | null | Ierror> => {
    const cliente = await this._model.findAll({ where: { nmCliente: name } });

    if (!cliente) return { error: 'Não encontrado ' };

    return cliente;
  };

  public update = async (id: string, obj: Icliente): Promise<Icliente | null | Ierror> => {
    const cliente = await this._model.findByPk(id);

    if (!cliente) return { error: '"Cliente" não encontrado' };

    const clienteAtualizado = await this._model.update({ ...obj }, { where: { idCliente: id } });

    return clienteAtualizado;
  };

  public delete = async (id: string): Promise<Icliente | null | Ierror> => {
    const cliente = await this._model.findByPk(id);

    if (!cliente) return { error: '"Cliente" não encontrado' };

    const clienteDeletado = await this._model.destroy({ where: { idCliente: id } });

    return clienteDeletado;
  };

  public create = async (obj: Icliente): Promise<Icliente | Ierror> => {
    const cliente = await this._model.create(obj);

    return cliente;
  };
}

export default ClienteService;
