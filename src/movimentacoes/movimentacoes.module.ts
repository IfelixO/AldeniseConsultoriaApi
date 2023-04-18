import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MovimentacoesController } from './movimentacoes.controller';
import { movimentacoesProviders } from './movimentacoes.providers';
import { MovimentacoesService } from './movimentacoes.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MovimentacoesController],
  providers: [
    ...movimentacoesProviders,
    MovimentacoesService,
  ],
})
export class MovimentacoesModule {}