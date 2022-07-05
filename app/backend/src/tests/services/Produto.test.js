import chai from 'chai';
import sinon from 'sinon';
import { describe } from 'mocha'
import ProdutoService from '../../services/ProdutoService';
import ProdutoModel from '../../database/models/Cliente';
import { FIND_ALL_PRODUTOS_MOCK } from './mocks/Produto.mock';
import { PRODUTOS_MOCK_1 } from '../controllers/mocks/Produtos.mock';

const { expect } = chai;

describe.only('Produto Service', () => {
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

    it('Deve chamar a função "findByName" e retornar um Objeto', async () => {
      sinon.stub(ProdutoModel, 'findAll').resolves(PRODUTOS_MOCK_1)

      const response = await service.findByName('Cli1');

      expect(ProdutoModel.findAll.called).to.be.true;
      expect(ProdutoModel.findAll).to.be.a('function');
      expect(response).to.be.an('Object');
      expect(response).to.be.deep.equal(PRODUTOS_MOCK_1);
    });
  });

  describe('findByName endpoint. Em caso de falha:', () => {
    afterEach(() => {
      (ProdutoModel.findAll).restore();
    });

    it('Deve chamar a função "findByName" e retornar um Objeto com mensagem de erro', async () => {
      sinon.stub(ProdutoModel, 'findAll').resolves({ error: '"Produto" não encontrado'})

      const response = await service.findByName('william');

      expect(ProdutoModel.findAll.called).to.be.true;
      expect(ProdutoModel.findAll).to.be.a('function');
      expect(response).to.be.an('Object')
      expect(response).to.be.deep.equal({ error: '"Produto" não encontrado'})
    });
  });
})