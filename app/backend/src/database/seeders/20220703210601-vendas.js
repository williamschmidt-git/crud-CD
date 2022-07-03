'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('vendas', [
      { idCliente:1, idProduto:1, qtdVenda:5, vlrUnitarioVenda:5 },
      { idCliente:1, idProduto:2, qtdVenda:1, vlrUnitarioVenda:10 },
      { idCliente:1, idProduto:3, qtdVenda:1, vlrUnitarioVenda:15 },
      { idCliente:2, idProduto:1, qtdVenda:5, vlrUnitarioVenda:5 },
      { idCliente:2, idProduto:2, qtdVenda:1, vlrUnitarioVenda:10 },
      { idCliente:3, idProduto:1, qtdVenda:10, vlrUnitarioVenda:6 },
      { idCliente:3, idProduto:3, qtdVenda:2, vlrUnitarioVenda:15 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
