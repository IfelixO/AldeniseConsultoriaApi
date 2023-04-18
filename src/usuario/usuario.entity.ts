import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  login: string;

  @Column()
  senha: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  ocupacao: string;

  @Column()
  perfil: string;

  @Column()
  codigo: string;

  @Column()
  disc: string;

  @Column()
  saude: string;

  @Column()
  descricaoSaude: string;

  @Column()
  descricaoAnalise: string;

  @Column()
  papel: string;
}