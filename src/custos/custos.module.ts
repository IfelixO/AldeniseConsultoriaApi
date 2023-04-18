import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CustosController } from './custos.controller';
import { custosProviders } from './custos.providers';
import { CustosService } from './custos.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CustosController],
  providers: [
    ...custosProviders,
    CustosService,
  ],
})
export class CustosModule {}