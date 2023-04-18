import { Connection, Repository } from 'typeorm';
import { Movimentacoes } from './movimentacoes.entity';

export const movimentacoesProviders = [
  {
    provide: 'MOVIMENTACOES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Movimentacoes),
    inject: ['DATABASE_CONNECTION']
  },
]