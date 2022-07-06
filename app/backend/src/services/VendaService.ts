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
    // return nome ? (this.byName(nome)) : (this.byDesc(desc));
    const [paramKey] = Object.keys(query);
    if (paramKey  === 'desc') return this.byDesc(query);
    if (paramKey  === 'nome') {
      const clientes = this.byName(query);
      if (!clientes) return { error: '"Cliente" não encontrado' };
      return clientes;
    }
  }

  private async byName({ nome }): Promise<Ivenda | Ierror> {
    const cliente = await this.findCliente(nome);

    const { idCliente }  = cliente as Icliente;

    if (!idCliente) return { error: '"Cliente" não encontrado' };
    
    const vendas = await this._model.findAll({ where: { idCliente }, include: [{
      model: Cliente, as: 'cliente', attributes: { excludes: ['idCliente'] },
    }] });

    return vendas;
  }

  private async byDesc({ desc }): Promise<Ivenda | Ierror> {
    const produto = await this.findProduto(desc);

    if (!produto) return { error: '"Produto" não encontrado' };

    const { idProduto } = produto as Iproduto;

    const vendas = await this._model.findAll({ where: { idProduto }, include: [{
      model: Produto, as: 'produto', attributes: { excludes: ['idProduto'] },
    }] });

    return vendas;
  }

  private async findCliente(name: string): Promise<Icliente | Ierror> {
    const instanciaCliente = new ClienteService(Cliente);
    const cliente  = await instanciaCliente.findByName(name);

    return cliente;
  }

  private async findProduto(desc: string): Promise<Iproduto | Ierror> {
    const instanciaProduto = new ProdutoService(Produto);
    const produto = await instanciaProduto.findByName(desc);

    if (!produto) return { error: 'error' };

    return produto;
  }
}

export default VendaService;