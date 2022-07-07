import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { describe } from 'mocha';
import produtoService from '../../services/ProdutoService';
import { app } from '../../app';
import { PRODUTOS_MOCK_1, PRODUTO_CRIADO_MOCK } from './mocks/Produtos.mock';

const { expect } = chai;

chai.use(chaiHttp);

describe('Produto Controller', () => {
  describe('findAll endpoint. Em caso de sucesso:', () =>{
    before(() => {
      sinon.stub(produtoService.prototype, 'findAll').resolves([]);
    });

    after(() => {
      (produtoService.prototype.findAll).restore()
    });

    it('Deve retornar um código HTTP 200', async () => {
      const response = await chai.request(app).get('/produto');

      expect(response).to.have.status(200);
    });

    it('Deve retornar um array', async () => {
      const response = await chai.request(app).get('/produto');

      expect(response.body).to.be.an('array');
    });
  });

  describe('findAll endpoint. Em caso de falha:', () =>{
    before(() => {
      sinon.stub(produtoService.prototype, 'findAll').resolves({ error: 'Error'});
    });

    after(() => {
      (produtoService.prototype.findAll).restore()
    })

    it('Deve retornar um código HTTP 404', async () => {
      const response = await chai.request(app).get('/produto')

      expect(response).to.have.status(404)
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).get('/produto')

      expect(response.body).to.be.an('object')
    });
  });

  describe('findBy endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(produtoService.prototype, 'findBy').resolves(PRODUTOS_MOCK_1);
    });

    after(() => {
      (produtoService.prototype.findBy).restore();
    })

    it('Deve retornar um código HTTP 200', async () => {
      const response = await chai.request(app).get('/produto/list?desc=Produto 1')

      expect(response).to.have.status(200);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).get('/produto/list?desc=Produto 1')

      expect(response.body).to.be.deep.equal(PRODUTOS_MOCK_1);
    });
  });

  describe('findBy endpoint. Em caso de falha:', () =>{
    before(() => {
      sinon.stub(produtoService.prototype, 'findBy').resolves({ error: 'Error'});
    });

    after(() => {
      (produtoService.prototype.findBy).restore();
    })

    it('Deve retornar um código HTTP 404', async () => {
      const response = await chai.request(app).get('/produto/list?desc=Produto 1000')

      expect(response).to.have.status(404);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).get('/produto/list?desc=Produto 1000')

      expect(response.body).to.be.an('object');
    });
  });

  describe('update endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(produtoService.prototype, 'update').resolves(PRODUTOS_MOCK_1);
    });

    after(() => {
      (produtoService.prototype.update).restore();
    })

    it('Deve retornar um código HTTP 200', async () => {
      const response = await chai.request(app).patch('/produto/1').send({ dscProduto: 'cadeira', vlrUnitario: 5 })

      expect(response).to.have.status(200);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).patch('/produto/1')

      expect(response.body).to.be.deep.equal({ message: 'Produto Atualizado'});
    });
  });

  describe('update endpoint. Em caso de falha:', () => {
    before(() => {
      sinon.stub(produtoService.prototype, 'update').resolves({ error: '"Produto" não encontrado'});
    });

    after(() => {
      (produtoService.prototype.update).restore();
    })

    it('Deve retornar um código HTTP 404', async () => {
      const response = await chai.request(app).patch('/produto/10000')

      expect(response).to.have.status(404);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).patch('/produto/10000')

      expect(response.body).to.be.deep.equal({ error: '"Produto" não encontrado' });
    });
  });

  describe('delete endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(produtoService.prototype, 'delete').resolves(PRODUTOS_MOCK_1);
    });

    after(() => {
      (produtoService.prototype.delete).restore();
    })

    it('Deve retornar um código HTTP 200', async () => {
      const response = await chai.request(app).delete('/produto/1')

      expect(response).to.have.status(200);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).delete('/produto/1')

      expect(response.body).to.be.deep.equal({ message: 'Produto deletado'});
    });
  });

  describe('delete endpoint. Em caso de falha:', () => {
    before(() => {
      sinon.stub(produtoService.prototype, 'delete').resolves({ error: '"Produto" não encontrado' });
    });

    after(() => {
      (produtoService.prototype.delete).restore();
    })

    it('Deve retornar um código HTTP 404', async () => {
      const response = await chai.request(app).delete('/produto/1')

      expect(response).to.have.status(404);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).delete('/produto/1')

      expect(response.body).to.be.deep.equal({ error: '"Produto" não encontrado' });
    });
  });

  describe('create endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(produtoService.prototype, 'create').resolves(PRODUTO_CRIADO_MOCK);
    });

    after(() => {
      (produtoService.prototype.create).restore();
    })

    it('Deve retornar um código HTTP 201', async () => {
      const response = await chai.request(app).post('/produto/').send(PRODUTO_CRIADO_MOCK)

      expect(response).to.have.status(201);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).post('/produto/').send(PRODUTO_CRIADO_MOCK)

      expect(response.body).to.be.deep.equal(PRODUTO_CRIADO_MOCK)
    });
  });

  describe('create endpoint. Em caso de falha:', () => {
    before(() => {
      sinon.stub(produtoService.prototype, 'create').resolves(PRODUTO_CRIADO_MOCK);
    });

    after(() => {
      (produtoService.prototype.create).restore();
    })

    it('Deve retornar um código HTTP 201', async () => {
      const response = await chai.request(app).post('/produto/').send({ dscProduto: 'cadeira'})

      expect(response).to.have.status(400);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).post('/produto/').send({ dscProduto: 'cadeira' })

      expect(response.body).to.be.deep.equal('Todos os campos são obrigatórios')
    });
  });
})