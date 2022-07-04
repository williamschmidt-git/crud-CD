import { Icliente } from './Cliente';
import { Ierror } from './Error';
export interface Service {
  findAll(): Promise<Icliente[] | Ierror>
  findByName(name: string): Promise<Icliente | null | Ierror>
  update(id: string, obj: Icliente): Promise<Icliente | null | Ierror>
  delete(id: string): Promise<Icliente | null | Ierror>
}