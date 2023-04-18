import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetaModule } from './meta/meta.module';
import { TokenModule } from './token/token.module';
import { ProgressaoModule } from './progressao/progressao.module';
import { CustosModule } from './custos/custos.module';
import { MovimentacoesModule } from './movimentacoes/movimentacoes.module';
import { AnotacoesModule } from './anotacoes/anotacoes.module';

@Module({
  imports: [
    AnotacoesModule,
    MovimentacoesModule,
    CustosModule,
    ProgressaoModule,
    MetaModule, 
    TokenModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
