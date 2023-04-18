import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProgressaoController } from './progressao.controller';
import { progressaoProviders } from './progressao.providers';
import { ProgressaoService } from './progressao.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProgressaoController],
  providers: [
    ...progressaoProviders,
    ProgressaoService,
  ],
})
export class ProgressaoModule {}