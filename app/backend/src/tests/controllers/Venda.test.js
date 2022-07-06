import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { describe } from 'mocha'
import vendaService from '../../services/VendaService';
import { app } from '../../app';
import { VENDA1_MOCK, VENDA_CRIADA_MOCK } from './mocks/Vendas.mock';

const { expect } = chai;

chai.use(chaiHttp);

describe.only('Venda Controller', () => {
  describe('findAll endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(vendaService.prototype, 'findAll').resolves([]);
    });

    after(() => {
      (vendaService.prototype.findAll).restore()
    });

    it('Deve retornar um código HTTP 200', async () => {
      const response = await chai.request(app).get('/venda')

      expect(response).to.have.status(200)
    });

    it('Deve retornar um array', async () => {
      const response = await chai.request(app).get('/cliente')

      expect(response.body).to.be.an('array')
    });
  });

  describe('findAll endpoint. Em caso de falha:', () =>{
    before(() => {
      sinon.stub(vendaService.prototype, 'findAll').resolves({ error: 'Error'});
    });

    after(() => {
      (vendaService.prototype.findAll).restore()
    })

    it('Deve retornar um código HTTP 404', async () => {
      const response = await chai.request(app).get('/venda')

      expect(response).to.have.status(404)
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).get('/venda')

      expect(response.body).to.be.an('object')
    });
  });

  describe('findBy endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(vendaService.prototype, 'findBy').resolves(VENDA1_MOCK);
    });

    after(() => {
      (vendaService.prototype.findBy).restore();
    })

    it('Deve retornar um código HTTP 200', async () => {
      const response = await chai.request(app).get('/venda/list?name=Cli1')

      expect(response).to.have.status(200);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).get('/venda/list?name=Cli1')

      expect(response.body).to.be.deep.equal(VENDA1_MOCK);
    });
  });

  describe('findBy endpoint. Em caso de falha:', () =>{
    before(() => {
      sinon.stub(vendaService.prototype, 'findBy').resolves({ error: 'Error'});
    });

    after(() => {
      (vendaService.prototype.findBy).restore();
    })

    it('Deve retornar um código HTTP 404', async () => {
      const response = await chai.request(app).get('/venda/list?name=Cli1')

      expect(response).to.have.status(404);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).get('/venda/list?name=Cli1')

      expect(response.body).to.be.an('string');
    });
  });

  describe('update endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(vendaService.prototype, 'update').resolves(VENDA1_MOCK);
    });

    after(() => {
      (vendaService.prototype.update).restore();
    })

    it('Deve retornar um código HTTP 200', async () => {
      const response = await chai.request(app).patch('/venda/1').send({ qtdVenda: 10, vlrUnitarioVenda: 2})

      expect(response).to.have.status(200);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).patch('/venda/1')

      expect(response.body).to.be.deep.equal({ message: 'Venda Atualizada'});
    });
  });

  describe('update endpoint. Em caso de falha:', () => {
    before(() => {
      sinon.stub(vendaService.prototype, 'update').resolves({ error: '"Venda" não encontrado'});
    });

    after(() => {
      (vendaService.prototype.update).restore();
    })

    it('Deve retornar um código HTTP 404', async () => {
      const response = await chai.request(app).patch('/venda/10000')

      expect(response).to.have.status(404);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).patch('/venda/10000')

      expect(response.body).to.be.deep.equal({ error: '"Venda" não encontrado' });
    });
  });

  describe('delete endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(vendaService.prototype, 'delete').resolves(VENDA1_MOCK);
    });

    after(() => {
      (vendaService.prototype.delete).restore();
    })

    it('Deve retornar um código HTTP 200', async () => {
      const response = await chai.request(app).delete('/venda/1')

      expect(response).to.have.status(200);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).delete('/venda/1')

      expect(response.body).to.be.deep.equal({ message: 'Venda deletada'});
    });
  });

  describe('delete endpoint. Em caso de falha:', () => {
    before(() => {
      sinon.stub(vendaService.prototype, 'delete').resolves({ error: '"Venda" não encontrado' });
    });

    after(() => {
      (vendaService.prototype.delete).restore();
    })

    it('Deve retornar um código HTTP 404', async () => {
      const response = await chai.request(app).delete('/venda/1')

      expect(response).to.have.status(404);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).delete('/venda/1')

      expect(response.body).to.be.deep.equal({ error: '"Venda" não encontrado' });
    });
  });

  describe('create endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(vendaService.prototype, 'create').resolves(VENDA_CRIADA_MOCK);
    });

    after(() => {
      (vendaService.prototype.create).restore();
    })

    it('Deve retornar um código HTTP 201', async () => {
      const response = await chai.request(app).post('/venda/').send(VENDA_CRIADA_MOCK)

      expect(response).to.have.status(201);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).post('/venda/').send(VENDA_CRIADA_MOCK)

      expect(response.body).to.be.deep.equal(VENDA_CRIADA_MOCK)
    });
  });
});