import { Connection, Repository } from 'typeorm';
import { Meta } from './meta.entity';

export const metaProviders = [
  {
    provide: 'META_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Meta),
    inject: ['DATABASE_CONNECTION'],
  },
]