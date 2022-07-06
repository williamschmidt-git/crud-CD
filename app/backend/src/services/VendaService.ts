import { Ierror } from './interfaces/Error';
// import { Service } from './interfaces/Service';
import { Ivenda } from './interfaces/Venda';

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

}

export default VendaService;