import { Ierror } from './interfaces/Error';
import { Iproduto } from './interfaces/Produto';
import { Service } from './interfaces/Service';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

class ProdutoService implements Service<Iproduto> {
  private _model;

  constructor(dbInstance: any) {
    this._model = dbInstance;
  }

  public async findAll(): Promise<Iproduto[] | Ierror> {
    const produtos = await this._model.findAll();

    if (!produtos) return { error: 'Não encontrado' };

    return produtos;
  }

  public async findBy(name: string): Promise<Iproduto | null | Ierror> {
    const produto = await this._model.findOne({ where: {
      dscProduto: {
        [Op.like]:  `%${name}%`,
      },
    }, raw: true });

    if (!produto) return { error: 'Não encontrado ' };

    return produto;
  }

  public async update(id: string, obj: Iproduto): Promise<Iproduto | null | Ierror> {
    const produto = await this._model.findByPk(id);

    if (!produto) return { error: '"Produto" não encontrado' };

    const produtoAtualizado = await this._model.update({ ...obj }, { where: { idProduto: id } });

    return produtoAtualizado;
  }

  public async delete(id: string): Promise<Iproduto | null | Ierror> {
    const produto = await this._model.findByPk(id);

    if (!produto) return { error: '"Produto" não encontrado' };

    const produtoDeletado = await this._model.destroy({ where: { idProduto: id } });

    return produtoDeletado;
  }

  public async create(obj: Iproduto): Promise<Iproduto | Ierror> {
    const produto = await this._model.create(obj);

    return produto;
  }
}

export default ProdutoService;