import { STRING, Model, INTEGER, TEXT } from 'sequelize';
import db from './index';
import Venda from './Vendas';

class Cliente extends Model {
  public idCliente: number;

  public nmCliente: string;

  public Cidade: number;
}

Cliente.init({
  idCliente: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nmCliente: {
    type: STRING,
    allowNull: false,
  },
  cidade: {
    type: TEXT,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
});

Cliente.hasOne(Venda, {
  foreignKey: 'idCliente',
  as: 'cliente',
});

export default Cliente;