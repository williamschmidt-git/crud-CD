import ClienteController from './controllers/ClienteController';
import ClienteService from './services/ClienteService';
import ClienteModel from './database/models/Cliente';
import ClienteRouter from './routes/ClienteRouter';
import ProdutoService from './services/ProdutoService';
import ProdutoModel from './database/models/Produtos';
import ProdutoController from './controllers/ProdutoController';
import ProdutoRouter from './routes/ProdutoRouter';
import VendaController from './controllers/VendaController';
import VendaService from './services/VendaService';
import VendaModel from './database/models/Vendas';
import VendaRouter from './routes/VendaRouter';

const clienteService = new ClienteService(ClienteModel);
const clienteController = new ClienteController(clienteService);
const clienteRouter = new ClienteRouter(clienteController);

const produtoService = new ProdutoService(ProdutoModel);
const produtoController = new ProdutoController(produtoService);
const produtoRouter = new ProdutoRouter(produtoController);

const vendaService = new VendaService(VendaModel);
const vendaController = new VendaController(vendaService);
const vendaRouter = new VendaRouter(vendaController);


export {
  clienteRouter,
  produtoRouter,
  vendaRouter,
};