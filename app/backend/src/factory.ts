import ClienteController from './controllers/ClienteController';
import ClienteService from './services/ClienteService';
import ClienteModel from './database/models/Cliente';
import ClienteRouter from './routes/ClienteRouter';

const clienteService = new ClienteService(ClienteModel);
const clienteController = new ClienteController(clienteService);
const clienteRouter = new ClienteRouter(clienteController);


export {
  clienteRouter,
};