import chai from 'chai';
import sinon from 'sinon';
import { describe } from 'mocha'
import ClienteService from '../../services/ClienteService';
import ClienteModel from '../../database/models/Cliente';
import { FIND_ALL_CLIENTES_MOCK } from './mocks/Clientes.mock'

const { expect } = chai;

describe.only('Cliente Service', () => {
  const service = new ClienteService(ClienteModel);

  describe('findAll endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (ClienteModel.findAll).restore();
    });

    it('Deve chamar a função "findAll" e retornar um array', async () => {
      sinon.stub(ClienteModel, 'findAll').resolves(FIND_ALL_CLIENTES_MOCK)

      const response = await service.findAll();

      expect(ClienteModel.findAll.called).to.be.true;
      expect(ClienteModel.findAll).to.be.a('function');
      expect(response).to.be.an('array')
      expect(response).to.be.deep.equal(FIND_ALL_CLIENTES_MOCK)
    });
  });

  describe('findAll endpoint. Em caso de falha:', () => {
    afterEach(() => {
      (ClienteModel.findAll).restore();
    });

    it('Deve chamar a função "findAll" e retornar um array vazio', async () => {
      sinon.stub(ClienteModel, 'findAll').resolves([])

      const response = await service.findAll();

      expect(ClienteModel.findAll.called).to.be.true;
      expect(ClienteModel.findAll).to.be.a('function');
      expect(response).to.be.an('array')
      expect(response).to.be.deep.equal([])
    });
  });
});