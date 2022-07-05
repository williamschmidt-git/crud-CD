import chai from 'chai';
import sinon from 'sinon';
import { describe } from 'mocha'
import ClienteService from '../../services/ClienteService';
import ClienteModel from '../../database/models/Cliente';
import { FIND_ALL_CLIENTES_MOCK } from './mocks/Clientes.mock'
import { CLIENTE1_MOCK, CLIENTE_CRIADO_MOCK } from '../controllers/mocks/Clientes.mock';

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

  describe('findByName endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (ClienteModel.findAll).restore();
    });

    it('Deve chamar a função "findByName" e retornar um Objeto', async () => {
      sinon.stub(ClienteModel, 'findAll').resolves(CLIENTE1_MOCK)

      const response = await service.findByName('Cli1');

      expect(ClienteModel.findAll.called).to.be.true;
      expect(ClienteModel.findAll).to.be.a('function');
      expect(response).to.be.an('Object')
      expect(response).to.be.deep.equal(CLIENTE1_MOCK)
    });
  });

  describe('findByName endpoint. Em caso de falha:', () => {
    afterEach(() => {
      (ClienteModel.findAll).restore();
    });

    it('Deve chamar a função "findByName" e retornar um Objeto com mensagem de erro', async () => {
      sinon.stub(ClienteModel, 'findAll').resolves({ error: '"Cliente" não encontrado'})

      const response = await service.findByName('william');

      expect(ClienteModel.findAll.called).to.be.true;
      expect(ClienteModel.findAll).to.be.a('function');
      expect(response).to.be.an('Object')
      expect(response).to.be.deep.equal({ error: '"Cliente" não encontrado'})
    });
  });

  describe('update endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (ClienteModel.update).restore();
    });

    it('Deve chamar a função "update" e retornar um array', async () => {
      sinon.stub(ClienteModel, 'update').resolves([1])

      const response = await service.update('1', CLIENTE_CRIADO_MOCK);

      expect(ClienteModel.update.called).to.be.true;
      expect(ClienteModel.update).to.be.a('function');
      expect(response).to.be.an('array')
      expect(response).to.be.deep.equal([1])
    });
  });

  describe('update endpoint. Em caso de falha:', () => {
    afterEach(() => {
      (ClienteModel.update).restore();
    });

    it('Deve chamar a função "update" e retornar um array', async () => {
      sinon.stub(ClienteModel, 'update').resolves({ error: '"Cliente" não encontrado' })

      const response = await service.update('1000', CLIENTE_CRIADO_MOCK);

      expect(ClienteModel.update.called).to.be.false;
      expect(ClienteModel.update).to.be.a('function');
      expect(response).to.be.an('object')
      expect(response).to.be.deep.equal({ error: '"Cliente" não encontrado' })
    });
  });
});