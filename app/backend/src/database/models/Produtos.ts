import { STRING, Model, INTEGER, FLOAT } from 'sequelize';
import db from './index';
import Venda from './Vendas';

class Produto extends Model {
  public idProduto: number;

  public dscProduto: string;

  public vlrUnitario: number;
}

Produto.init({
  idProduto: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  dscProduto: {
    type: STRING,
    allowNull: false,
  },
  vlrUnitario: {
    type: FLOAT,
    allowNull: false,
  },
}, {
  underscored: false,
  sequelize: db,
  timestamps: false,
});

Produto.hasOne(Venda, {
  foreignKey: 'idProduto',
  as: 'produto',
});

export default Produto;