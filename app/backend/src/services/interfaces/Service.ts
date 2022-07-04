import { Icliente } from './Cliente';
import { Ierror } from './Error';
export interface Service {
  findAll(): Promise<Icliente[] | Ierror>
  findByName(name: string): Promise<Icliente | null | Ierror>
}