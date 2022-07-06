import chai from 'chai';
import sinon from 'sinon';
import { describe } from 'mocha'
import VendaService from '../../services/VendaService';
import VendaModel from  '../../database/models/Vendas';
import { FIND_ALL_VENDAS_MOCK } from './mocks/Vendas.mock';

const { expect } = chai;

describe.only('Venda Service', () => {
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
});