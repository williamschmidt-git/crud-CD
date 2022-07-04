'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vendas', {
      idVenda: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dthVenda: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clientes',
          key: 'idCliente',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idProduto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Produtos',
          key: 'idProduto',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      qtdVenda: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vlrUnitarioVenda: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Vendas');
  },
};
