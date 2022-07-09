'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {

    await queryInterface.bulkInsert('Vendas', [
      { idCliente:1, idProduto:1, qtdVenda:5, vlrUnitarioVenda:5, vlrTotalVenda: 25},
      { idCliente:1, idProduto:2, qtdVenda:1, vlrUnitarioVenda:10, vlrTotalVenda: 10},
      { idCliente:1, idProduto:3, qtdVenda:1, vlrUnitarioVenda:15, vlrTotalVenda: 15},
      { idCliente:2, idProduto:1, qtdVenda:5, vlrUnitarioVenda:5, vlrTotalVenda: 25},
      { idCliente:2, idProduto:2, qtdVenda:1, vlrUnitarioVenda:10, vlrTotalVenda: 10},
      { idCliente:3, idProduto:1, qtdVenda:10, vlrUnitarioVenda:6, vlrTotalVenda: 60},
      { idCliente:3, idProduto:3, qtdVenda:2, vlrUnitarioVenda:15 , vlrTotalVenda: 30},
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Vendas', null, {});
  },
};
