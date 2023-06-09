import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Meta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuario: number;

  @Column()
  titulo?: string;

  @Column()
  motivacao?: string;

  @Column()
  inicial?: string;

  @Column()
  final?: string;

  @Column()
  parcela?: string;
}