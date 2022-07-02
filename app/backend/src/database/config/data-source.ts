import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'testdb',
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});