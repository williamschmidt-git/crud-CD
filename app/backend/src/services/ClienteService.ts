import { Service } from './interfaces/Service';
import { Icliente } from './interfaces/Cliente';
import { Ierror } from './interfaces/Error';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

class ClienteService implements Service<Icliente> {
  private _model;

  constructor(dbInstance: any) {
    this._model = dbInstance;
  }

  public async findAll(): Promise<Icliente[] | Ierror> {
    const clientes = await this._model.findAll();

    if (!clientes) return { error: 'Não encontrado' };

    return clientes;
  }

  public async findBy(name: string): Promise<Icliente | null | Ierror> {
    const cliente = await this._model.findAll({ where: { nmCliente: {
      [Op.like]: `%${name}%`,
    } }, raw: true });

    if (!cliente) return { error: 'Não encontrado ' };

    return cliente;
  }

  public async update(id: string, obj: Icliente): Promise<Icliente | null | Ierror> {
    const cliente = await this._model.findByPk(id);

    if (!cliente) return { error: '"Cliente" não encontrado' };

    const clienteAtualizado = await this._model.update({ ...obj }, { where: { idCliente: id } });

    return clienteAtualizado;
  }

  public async delete(id: string): Promise<Icliente | null | Ierror> {
    const cliente = await this._model.findByPk(id);

    if (!cliente) return { error: '"Cliente" não encontrado' };

    const clienteDeletado = await this._model.destroy({ where: { idCliente: id } });

    return clienteDeletado;
  }

  public async create(obj: Icliente): Promise<Icliente | Ierror> {
    const cliente = await this._model.create(obj);

    return cliente;
  }
}

export default ClienteService;
