import { Connection, Repository } from 'typeorm';
import { Anotacoes } from './anotacoes.entity';

export const anotacoesProviders = [
  {
    provide: 'ANOTACOES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Anotacoes),
    inject: ['DATABASE_CONNECTION'],
  },
]