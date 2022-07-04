export interface Model<T> {
  create(obj: T): Promise<T>,
  findAll(): Promise<T[]>,
  // readOne(id: string): Promise<T | null>,
  update(id: string, obj: T): Promise<T | null>,
  destroy(id: string): Promise<T | null>,
}