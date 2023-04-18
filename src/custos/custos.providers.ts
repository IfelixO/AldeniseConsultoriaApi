import { Connection, Repository } from 'typeorm';
import { Custos } from './custos.entity';

export const custosProviders = [
  {
    provide: 'CUSTOS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Custos),
    inject: ['DATABASE_CONNECTION'],
  },
]