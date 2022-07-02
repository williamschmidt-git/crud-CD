import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    dscProduto: string;

  @Column()
    vlrUnitario: string;
}