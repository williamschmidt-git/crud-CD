import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { describe } from 'mocha'
import clienteService from '../../services/ClienteService';
import { app } from '../../app'
import { CLIENTE1_MOCK } from './mocks/Clientes.mock';

const { expect } = chai;

chai.use(chaiHttp);

describe('Cliente Controller', () => {
  describe('findAll endpoint. Em caso de sucesso:', () =>{
    before(() => {
      sinon.stub(clienteService.prototype, 'findAll').resolves([]);
    });

    after(() => {
      (clienteService.prototype.findAll as sinon.SinonStub).restore()
    })

    it('Deve retornar um código HTTP 200', async () => {
      const response = await chai.request(app).get('/cliente')

      expect(response).to.have.status(200)
    });

    it('Deve retornar um array', async () => {
      const response = await chai.request(app).get('/cliente')

      expect(response.body).to.be.an('array')
    });
  });

  describe('findAll endpoint. Em caso de falha:', () =>{
    before(() => {
      sinon.stub(clienteService.prototype, 'findAll').resolves({ error: 'Error'});
    });

    after(() => {
      (clienteService.prototype.findAll as sinon.SinonStub).restore()
    })

    it('Deve retornar um código HTTP 404', async () => {
      const response = await chai.request(app).get('/cliente')

      expect(response).to.have.status(404)
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).get('/cliente')

      expect(response.body).to.be.an('object')
    });
  });

  describe('findByName endpoint. Em caso de Sucesso:', () => {
    before(() => {
      sinon.stub(clienteService.prototype, 'findByName').resolves(CLIENTE1_MOCK);
    });

    after(() => {
      (clienteService.prototype.findByName as sinon.SinonStub).restore();
    })

    it('Deve retornar um código HTTP 200', async () => {
      const response = await chai.request(app).get('/cliente/list?name=Cli1')

      expect(response).to.have.status(200);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).get('/cliente/list?name=Cli1')

      expect(response.body).to.be.deep.equal(CLIENTE1_MOCK);
    });
  });

  describe('findByName endpoint. Em caso de falha:', () =>{
    before(() => {
      sinon.stub(clienteService.prototype, 'findByName').resolves({ error: 'Error'});
    });

    after(() => {
      (clienteService.prototype.findByName as sinon.SinonStub).restore();
    })

    it('Deve retornar um código HTTP 404', async () => {
      const response = await chai.request(app).get('/cliente/list?name=Cli1')

      expect(response).to.have.status(404);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).get('/cliente/list?name=Cli1')

      expect(response.body).to.be.an('object');
    });
  });

  describe('update endpoint. Em caso de Sucesso:', () => {
    before(() => {
      sinon.stub(clienteService.prototype, 'update').resolves(CLIENTE1_MOCK);
    });

    after(() => {
      (clienteService.prototype.update as sinon.SinonStub).restore();
    })

    it('Deve retornar um código HTTP 200', async () => {
      const response = await chai.request(app).patch('/cliente/1').send({ nmCliente: 'William', cidade: 'Cidade100' })

      expect(response).to.have.status(200);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).patch('/cliente/1')

      expect(response.body).to.be.deep.equal({ message: 'Cliente Atualizado'});
    });
  });
});
