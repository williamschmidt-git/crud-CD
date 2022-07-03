'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('clientes', [{
      nmCliente: 'Cli1',
      cidade: 'Cidade1',
    }, {
      nmCliente: 'Cli2',
      cidade: 'Cidade2',
    }, {
      nmCliente: 'Cli3',
      cidade: 'Cidade3',
    }, {
      nmCliente: 'Cli4',
      cidade: 'Cidade4',
    }]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  },
};
