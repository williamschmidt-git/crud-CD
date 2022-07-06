import chai from 'chai';
import sinon from 'sinon';
import { describe } from 'mocha'
import ProdutoService from '../../services/ProdutoService';
import ProdutoModel from '../../database/models/Cliente';
import { FIND_ALL_PRODUTOS_MOCK } from './mocks/Produto.mock';
import { PRODUTOS_MOCK_1, PRODUTO_CRIADO_MOCK } from '../controllers/mocks/Produtos.mock';

const { expect } = chai;

describe('Produto Service', () => {
  const service = new ProdutoService(ProdutoModel);

  describe('findAll endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (ProdutoModel.findAll).restore();
    });

    it('Deve chamar a função "findAll" e retornar um array', async () => {
      sinon.stub(ProdutoModel, 'findAll').resolves(FIND_ALL_PRODUTOS_MOCK);

      const response = await service.findAll();

      expect(ProdutoModel.findAll.called).to.be.true;
      expect(ProdutoModel.findAll).to.be.a('function');
      expect(response).to.be.an('array');
      expect(response).to.be.deep.equal(FIND_ALL_PRODUTOS_MOCK)
    });
  });

  describe('findAll endpoint. Em caso de falha:', () => {
    afterEach(() => {
      (ProdutoModel.findAll).restore();
    });

    it('Deve chamar a função "findAll" e retornar um array vazio', async () => {
      sinon.stub(ProdutoModel, 'findAll').resolves([])

      const response = await service.findAll();

      expect(ProdutoModel.findAll.called).to.be.true;
      expect(ProdutoModel.findAll).to.be.a('function');
      expect(response).to.be.an('array')
      expect(response).to.be.deep.equal([])
    });
  });

  describe('findByName endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (ProdutoModel.findAll).restore();
    });

    it('Deve chamar a função "findByName" e retornar um array', async () => {
      sinon.stub(ProdutoModel, 'findAll').resolves(PRODUTOS_MOCK_1)

      const response = await service.findByName('Produto 1');

      expect(ProdutoModel.findAll.called).to.be.true;
      expect(ProdutoModel.findAll).to.be.a('function');
      expect(response).to.be.an('array');
      expect(response).to.be.deep.equal(PRODUTOS_MOCK_1);
    });
  });

  describe('findByName endpoint. Em caso de falha:', () => {
    afterEach(() => {
      (ProdutoModel.findAll).restore();
    });

    it('Deve chamar a função "findByName" e retornar um Objeto com mensagem de erro', async () => {
      sinon.stub(ProdutoModel, 'findAll').resolves({ error: '"Produto" não encontrado' })

      const response = await service.findByName('william');

      expect(ProdutoModel.findAll.called).to.be.true;
      expect(ProdutoModel.findAll).to.be.a('function');
      expect(response).to.be.an('Object')
      expect(response).to.be.deep.equal({ error: '"Produto" não encontrado' })
    });
  });

  describe('update endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (ProdutoModel.update).restore();
    });

    it('Deve chamar a função "update" e retornar um array', async () => {
      sinon.stub(ProdutoModel, 'update').resolves([1])

      const response = await service.update('1', PRODUTO_CRIADO_MOCK);

      expect(ProdutoModel.update.called).to.be.true;
      expect(ProdutoModel.update).to.be.a('function');
      expect(response).to.be.an('array')
      expect(response).to.be.deep.equal([1])
    });
  });

  describe('update endpoint. Em caso de falha:', () => {
    afterEach(() => {
      (ProdutoModel.update).restore();
    });

    it('Deve chamar a função "update" e retornar um array', async () => {
      sinon.stub(ProdutoModel, 'update').resolves({ error: '"Produto" não encontrado' })

      const response = await service.update('1000', PRODUTO_CRIADO_MOCK);

      expect(ProdutoModel.update.called).to.be.false;
      expect(ProdutoModel.update).to.be.a('function');
      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal({ error: '"Produto" não encontrado' })
    });
  });

  describe('delete endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (ProdutoModel.destroy).restore();
    });

    it('Deve chamar a função "delete" e retornar um número', async () => {
      sinon.stub(ProdutoModel, 'destroy').resolves(1)

      const response = await service.delete('1');

      expect(ProdutoModel.destroy.called).to.be.true;
      expect(ProdutoModel.destroy).to.be.a('function');
      expect(response).to.be.an('number')
      expect(response).to.be.deep.equal(1)
    });
  });

  describe('delete endpoint. Em caso de falha:', () => {
    afterEach(() => {
      (ProdutoModel.destroy).restore();
    });

    it('Deve chamar a função "delete" e retornar uma mensagme de erro', async () => {
      sinon.stub(ProdutoModel, 'destroy').resolves({ error: '"Produto" não encontrado' })

      const response = await service.delete('1000');

      expect(ProdutoModel.destroy.called).to.be.false;
      expect(ProdutoModel.destroy).to.be.a('function');
      expect(response).to.be.an('Object')
      expect(response).to.be.deep.equal({ error: '"Produto" não encontrado' })
    });
  });

  describe('create endpoint. Em caso de sucesso:', () => {
    afterEach(() => {
      (ProdutoModel.create).restore();
    });

    it('Deve chamar a função "create" e retornar o objeto criado', async () => {
      sinon.stub(ProdutoModel, 'create').resolves(PRODUTOS_MOCK_1)

      const response = await service.create(PRODUTO_CRIADO_MOCK);

      expect(ProdutoModel.create.called).to.be.true;
      expect(ProdutoModel.create).to.be.a('function');
      expect(response).to.be.an('array')
      expect(response).to.be.deep.equal(PRODUTOS_MOCK_1)
    });
  });
})