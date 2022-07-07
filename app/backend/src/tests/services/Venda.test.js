import chai from 'chai';
import sinon from 'sinon';
import { describe } from 'mocha'
import VendaService from '../../services/VendaService';
import VendaModel from  '../../database/models/Vendas';
import { FIND_ALL_VENDAS_MOCK } from './mocks/Vendas.mock';
import { VENDA1_MOCK, VENDA_CRIADA_MOCK } from '../controllers/mocks/Vendas.mock';

const { expect } = chai;

const mock_test = {
  desc: 'Produto 1'
}

describe('Venda Service', () => {
  const service = new VendaService(VendaModel);

  describe('findAll endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (VendaModel.findAll).restore();
    });

    it('Deve chamar a função "findAll" e retornar um array', async () => {
      sinon.stub(VendaModel, 'findAll').resolves(FIND_ALL_VENDAS_MOCK);

      const response = await service.findAll();

      expect(VendaModel.findAll.called).to.be.true;
      expect(VendaModel.findAll).to.be.a('function');
      expect(response).to.be.an('array');
      expect(response).to.be.deep.equal(FIND_ALL_VENDAS_MOCK)
    });
  });

  describe('findAll endpoint. Em caso de falha:', () => {
    afterEach(() => {
      (VendaModel.findAll).restore();
    });

    it('Deve chamar a função "findAll" e retornar um array vazio', async () => {
      sinon.stub(VendaModel, 'findAll').resolves([])

      const response = await service.findAll();

      expect(VendaModel.findAll.called).to.be.true;
      expect(VendaModel.findAll).to.be.a('function');
      expect(response).to.be.an('array')
      expect(response).to.be.deep.equal([])
    });
  });

  describe('findBy endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (VendaModel.findAll).restore();
    });

    it('Deve chamar a função "findBy" e retornar um array', async () => {
      sinon.stub(VendaModel, 'findAll').resolves(VENDA1_MOCK)

      const response = await service.findBy(mock_test);

      expect(VendaModel.findAll.called).to.be.true;
      expect(VendaModel.findAll).to.be.a('function');
      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal(VENDA1_MOCK);
    });
  });

  describe('findBy endpoint. Em caso de falha:', () => {
    afterEach(() => {
      (VendaModel.findAll).restore();
    });

    it('Deve chamar a função "findBy" e retornar um Objeto com mensagem de erro', async () => {
      sinon.stub(VendaModel, 'findAll').resolves({ error: '"Produto" não encontrado' })

      const response = await service.findBy({ desc: 'Produto 100000'});

      expect(VendaModel.findAll.called).to.be.true;
      expect(VendaModel.findAll).to.be.a('function');
      expect(response).to.be.an('Object')
      expect(response).to.be.deep.equal({ error: '"Produto" não encontrado' })
    });
  });

  describe('update endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (VendaModel.update).restore();
    });

    it('Deve chamar a função "update" e retornar um array', async () => {
      sinon.stub(VendaModel, 'update').resolves([1])

      const response = await service.update('1', VENDA_CRIADA_MOCK);

      expect(VendaModel.update.called).to.be.true;
      expect(VendaModel.update).to.be.a('function');
      expect(response).to.be.an('array')
      expect(response).to.be.deep.equal([1])
    });
  });

  describe('update endpoint. Em caso de falha:', () => {
    afterEach(() => {
      (VendaModel.update).restore();
    });

    it('Deve chamar a função "update" e retornar um array', async () => {
      sinon.stub(VendaModel, 'update').resolves({ error: '"Venda" não encontrada' })

      const response = await service.update('1000', VENDA_CRIADA_MOCK);

      expect(VendaModel.update.called).to.be.false;
      expect(VendaModel.update).to.be.a('function');
      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal({ error: '"Venda" não encontrada' })
    });
  });

  describe('delete endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (VendaModel.destroy).restore();
    });

    it('Deve chamar a função "delete" e retornar um número', async () => {
      sinon.stub(VendaModel, 'destroy').resolves(1)

      const response = await service.delete('1');

      expect(VendaModel.destroy.called).to.be.true;
      expect(VendaModel.destroy).to.be.a('function');
      expect(response).to.be.an('number')
      expect(response).to.be.deep.equal(1)
    });
  });

  describe('delete endpoint. Em caso de falha:', () => {
    afterEach(() => {
      (VendaModel.destroy).restore();
    });

    it('Deve chamar a função "delete" e retornar uma mensagem de erro', async () => {
      sinon.stub(VendaModel, 'destroy').resolves({ error: '"Venda" não encontrada' })

      const response = await service.delete('1000');

      expect(VendaModel.destroy.called).to.be.false;
      expect(VendaModel.destroy).to.be.a('function');
      expect(response).to.be.an('Object')
      expect(response).to.be.deep.equal({ error: '"Venda" não encontrada' })
    });
  });

  describe('create endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (VendaModel.create).restore();
    });

    it('Deve chamar a função "create" e retornar o objeto criado', async () => {
      sinon.stub(VendaModel, 'create').resolves(VENDA1_MOCK)

      const response = await service.create(VENDA_CRIADA_MOCK);

      expect(VendaModel.create.called).to.be.true;
      expect(VendaModel.create).to.be.a('function');
      expect(response).to.be.an('object')
      expect(response).to.be.deep.equal(VENDA1_MOCK)
    });
  });
});