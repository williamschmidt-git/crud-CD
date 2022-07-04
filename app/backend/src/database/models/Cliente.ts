import { STRING, Model, INTEGER, TEXT } from 'sequelize';
import db from './index';

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
  underscored: false,
  sequelize: db,
  timestamps: false,
});

export default Cliente;