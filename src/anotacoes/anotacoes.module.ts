import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AnotacoesController } from './anotacoes.controller';
import { anotacoesProviders } from './anotacoes.providers';
import { AnotacoesService } from './anotacoes.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AnotacoesController],
  providers: [
    ...anotacoesProviders,
    AnotacoesService,
  ],
})
export class AnotacoesModule {}