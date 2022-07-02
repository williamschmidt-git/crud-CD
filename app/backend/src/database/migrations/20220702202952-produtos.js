'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      idProduto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dscProduto: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vlrUnitario: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('produtos');
  },
};
