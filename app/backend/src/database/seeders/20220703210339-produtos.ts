'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('produtos', [
      { dscProduto:'Produto 1', 'vlrUnitario':5 },
      { dscProduto:'Produto 2', 'vlrUnitario':10 },
      { dscProduto:'Produto 3', 'vlrUnitario':15 },
      { dscProduto:'Produto 4', 'vlrUnitario':20 },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  },
};
