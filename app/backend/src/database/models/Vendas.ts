import { Model, INTEGER, FLOAT, DATE } from 'sequelize';
import Cliente from './Cliente';
import db from './index';
import Produto from './Produtos';

class Venda extends Model {
  idVenda: number;

  dthVenda: Date;
}

Venda.init({
  idVenda: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  dthVenda: {
    type: DATE,
    allowNull: false,
    defaultValue: DATE,
  },
  idCliente: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'Cliente',
      key: 'idCliente',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  idProduto: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'Produto',
      key: 'idProduto',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  qtdVenda: {
    type: INTEGER,
    allowNull: false,
  },
  vlrUnitarioVenda: {
    type: FLOAT,
    allowNull: false,
  },
}, {
  underscored: false,
  sequelize: db,
  timestamps: false,
});

Venda.belongsTo(Cliente, {
  foreignKey: 'idCliente',
  as: 'cliente',
});

Venda.belongsTo(Produto, {
  foreignKey: 'idProduto',
  as: 'produto',
});

export default Venda;