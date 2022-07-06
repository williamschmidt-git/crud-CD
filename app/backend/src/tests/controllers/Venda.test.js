import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { describe } from 'mocha'
import vendaService from '../../services/VendaService';
import { app } from '../../app';

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
});