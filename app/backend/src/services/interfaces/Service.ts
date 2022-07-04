import { Icliente } from './Cliente';
export interface Service {
  findAll(): Promise<Icliente[]>
  findByName(name: string): Promise<Icliente>
}