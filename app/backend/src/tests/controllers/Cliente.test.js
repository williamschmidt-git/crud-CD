import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { describe } from 'mocha'
import clienteService from '../../services/ClienteService';
import { app } from '../../app'
import { CLIENTE1_MOCK, CLIENTE_CRIADO_MOCK } from './mocks/Clientes.mock';

const { expect } = chai;

chai.use(chaiHttp);

describe('Cliente Controller', () => {
  describe('findAll endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(clienteService.prototype, 'findAll').resolves([]);
    });

    after(() => {
      (clienteService.prototype.findAll).restore()
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
      (clienteService.prototype.findAll).restore()
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

  describe('findBy endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(clienteService.prototype, 'findBy').resolves(CLIENTE1_MOCK);
    });

    after(() => {
      (clienteService.prototype.findBy).restore();
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

  describe('findBy endpoint. Em caso de falha:', () =>{
    before(() => {
      sinon.stub(clienteService.prototype, 'findBy').resolves({ error: 'Error'});
    });

    after(() => {
      (clienteService.prototype.findBy).restore();
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

  describe('update endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(clienteService.prototype, 'update').resolves(CLIENTE1_MOCK);
    });

    after(() => {
      (clienteService.prototype.update).restore();
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

  describe('update endpoint. Em caso de falha:', () => {
    before(() => {
      sinon.stub(clienteService.prototype, 'update').resolves({ error: '"Cliente" não encontrado'});
    });

    after(() => {
      (clienteService.prototype.update).restore();
    })

    it('Deve retornar um código HTTP 404', async () => {
      const response = await chai.request(app).patch('/cliente/10000')

      expect(response).to.have.status(404);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).patch('/cliente/10000')

      expect(response.body).to.be.deep.equal({ error: '"Cliente" não encontrado' });
    });
  });

  describe('delete endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(clienteService.prototype, 'delete').resolves(CLIENTE1_MOCK);
    });

    after(() => {
      (clienteService.prototype.delete).restore();
    })

    it('Deve retornar um código HTTP 200', async () => {
      const response = await chai.request(app).delete('/cliente/1')

      expect(response).to.have.status(200);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).delete('/cliente/1')

      expect(response.body).to.be.deep.equal({ message: 'Cliente deletado'});
    });
  });

  describe('delete endpoint. Em caso de falha:', () => {
    before(() => {
      sinon.stub(clienteService.prototype, 'delete').resolves({ error: '"Cliente" não encontrado' });
    });

    after(() => {
      (clienteService.prototype.delete).restore();
    })

    it('Deve retornar um código HTTP 404', async () => {
      const response = await chai.request(app).delete('/cliente/1')

      expect(response).to.have.status(404);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).delete('/cliente/1')

      expect(response.body).to.be.deep.equal({ error: '"Cliente" não encontrado' });
    });
  });

  describe('create endpoint. Em caso de sucesso:', () => {
    before(() => {
      sinon.stub(clienteService.prototype, 'create').resolves(CLIENTE_CRIADO_MOCK);
    });

    after(() => {
      (clienteService.prototype.create).restore();
    })

    it('Deve retornar um código HTTP 201', async () => {
      const response = await chai.request(app).post('/cliente/').send(CLIENTE_CRIADO_MOCK)

      expect(response).to.have.status(201);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).post('/cliente/').send(CLIENTE_CRIADO_MOCK)

      expect(response.body).to.be.deep.equal(CLIENTE_CRIADO_MOCK)
    });
  });

  describe('create endpoint. Em caso de falha:', () => {
    before(() => {
      sinon.stub(clienteService.prototype, 'create').resolves(CLIENTE_CRIADO_MOCK);
    });

    after(() => {
      (clienteService.prototype.create).restore();
    })

    it('Deve retornar um código HTTP 201', async () => {
      const response = await chai.request(app).post('/cliente/').send({ nmCliente: 'William'})

      expect(response).to.have.status(400);
    });

    it('Deve retornar um objeto', async () => {
      const response = await chai.request(app).post('/cliente/').send({ nmCliente: 'William'})

      expect(response.body).to.be.deep.equal('Todos os campos são obrigatórios')
    });
  });
});
