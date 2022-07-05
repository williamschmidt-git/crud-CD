import { Ierror } from './Error';
export interface Service<T> {
  findAll(): Promise<T[] | Ierror>
  findByName(name: string): Promise<T | null | Ierror>
  update(id: string, obj: T): Promise<T | null | Ierror>
  delete(id: string): Promise<T | null | Ierror>
  create(obj: T): Promise<T | Ierror>
}