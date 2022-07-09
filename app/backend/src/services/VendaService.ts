import Cliente from '../database/models/Cliente';
import ClienteService from './ClienteService';
import { Ierror } from './interfaces/Error';
import { Icliente } from './interfaces/Cliente';
// import { Service } from './interfaces/Service';
import { Ivenda } from './interfaces/Venda';
import { Iproduto } from './interfaces/Produto';
import ProdutoService from './ProdutoService';
import Produto from '../database/models/Produtos';

class VendaService {
  private _model;

  constructor(dbInstance: any) {
    this._model = dbInstance;
  }

  public async findAll(): Promise<Ivenda[] | Ierror> {
    const vendas = await this._model.findAll();

    if (!vendas) return { error: 'Não encontrado' };

    return vendas;
  }

  public async findBy(query): Promise<Ivenda | Ierror> {
    const [paramKey] = Object.keys(query);
    if (paramKey  === 'desc') {
      const produtos = await this.byDesc(query);
      if (!produtos) return { error: '"Produto" não encontrado' };
      return produtos;
    }
    if (paramKey === 'nome') {
      const clientes = await this.byName(query);
      if (!clientes) return { error: '"Cliente" não encontrado' };
      return clientes;
    }
    
  }

  public async update(id: string, obj: Ivenda): Promise<Ivenda | Ierror | null> {
    const venda = await this._model.findByPk(id);
    if (!venda) return { error: '"Venda" não encontrada' };

    const vendaAtualizada = await this._model.update({ ...obj }, {
      where: { idVenda: id },
    });

    return vendaAtualizada;
  }

  public async delete(id: string): Promise<Ivenda | null | Ierror> {
    const venda = await this._model.findByPk(id);

    if (!venda) return { error: '"Venda" não encontrada' };

    const vendaDeletada = await this._model.destroy({ where: {
      idVenda: id,
    } });

    return vendaDeletada;
  }

  public async create(obj: Ivenda): Promise<Ivenda | Ierror> {
    const venda: Ivenda = await this._model.create(obj);

    return venda;
  }
    
  private async byName({ nome }): Promise<Ivenda | Ierror> {
    const cliente = await this.findCliente(nome);

    const [...foundCliente]  = cliente as Icliente[];

    if (foundCliente.length >= 1) {
      const idCliente = foundCliente[0].idCliente;
      const vendas = await this._model.findAll({ where: { idCliente }, include: [{
        model: Cliente, as: 'cliente', attributes: { excludes: ['idCliente'] },
      }] });
  
      return vendas;
    } else {
      return { error: '"Cliente" não encontrado' };
    }
    
  }

  public async byDesc({ desc }): Promise<Ivenda | Ierror> {
    const produto = await this.findProduto(desc);

    const [...foundProduto] = produto as Iproduto[];

    if (foundProduto.length >= 1 ) {
      const idProduto = foundProduto[0].idProduto;
      const vendas = await this._model.findAll({ where: { idProduto }, include: [{
        model: Produto, as: 'produto', attributes: { excludes: ['idProduto'] },
      }] });

      return vendas;
    } else {
      return { error: '"Produto" não encontrado' };
    }

  }

  private async findCliente(name: string): Promise<Icliente[] | Ierror> {
    const instanciaCliente = new ClienteService(Cliente);
    const cliente  = await instanciaCliente.findBy(name);

    return cliente;
  }

  private async findProduto(desc: string): Promise<Iproduto[] | Ierror> {
    const instanciaProduto = new ProdutoService(Produto);
    const produto = await instanciaProduto.findBy(desc);

    if (!produto) return { error: 'error' };

    return produto;
  }

  public async findSale(id: string): Promise<Ivenda[] | Ierror> {
    const venda = await this._model.findAll({ where: { idVenda: id }, include: [{
      model: Cliente, as: 'cliente', attributes: { excludes: ['idCliente'] },
    },
    {
      model: Produto, as: 'produto', attributes: { excludes: ['idProduto'] },
    }] });

    if (!venda) return { error: 'error' };

    return venda;
  }
}

export default VendaService;