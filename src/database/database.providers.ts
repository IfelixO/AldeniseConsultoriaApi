import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
      useFactory: async () => await createConnection({
        type: 'postgres',
        ssl: true,
        host: 'ep-aged-waterfall-101157.us-east-2.aws.neon.tech',
        port: 5432,
        username: 'IfelixO',
        password: 'IAbxc0TudMG6',
        database: 'neondb', 
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      })
    },
];