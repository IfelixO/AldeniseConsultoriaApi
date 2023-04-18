import { Connection, Repository } from 'typeorm';
import { Progressao } from './progressao.entity';

export const progressaoProviders = [
  {
    provide: 'PROGRESSAO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Progressao),
    inject: ['DATABASE_CONNECTION'],
  },
]