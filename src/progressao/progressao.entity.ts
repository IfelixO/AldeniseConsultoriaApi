import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Progressao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  entrada1: string;

  @Column()
  entrada2: string;

  @Column()
  entrada3: string;

  @Column()
  entrada4: string;

  @Column()
  entrada5: string;

  @Column()
  entrada6: string;

  @Column()
  entrada7: string;

  @Column()
  entrada8: string;


};