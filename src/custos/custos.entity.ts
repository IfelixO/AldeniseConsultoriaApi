import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Custos {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  usuario: number;

  @Column()
  receita: string;

  @Column()
  despesa1: string;

  @Column()
  despesa2: string;

  @Column()
  despesa3: string;

  @Column()
  despesa4: string;

  @Column()
  despesa5: string;

  @Column()
  despesa6: string;

  @Column()
  despesa7: string;

  @Column()
  despesa8: string;

  @Column()
  despesa9: string;

  @Column()
  despesa10: string;


}