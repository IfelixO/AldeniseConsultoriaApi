import { Module } from '@nestjs/common';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { DatabaseModule } from '../database/database.module';
import { MetaController } from './meta.controller';
import { metaProviders } from './meta.providers';
import { MetaService } from './meta.service';

@Module({
  imports: [DatabaseModule, UsuarioModule],
  controllers: [MetaController],
  providers: [
    ...metaProviders,
    MetaService,
  ],
  exports: [MetaService]
})
export class MetaModule {}