import { Body, Controller, Get, Post, Put, Req, Delete } from '@nestjs/common';
import { Movimentacoes } from './movimentacoes.entity';
import { MovimentacoesService } from './movimentacoes.service';
import { MovimentacoesDto } from './dto/movimentacoes.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Controller('movimentacoes')
export class MovimentacoesController {
  constructor(private readonly movimentacoesService: MovimentacoesService) {}


    @Get('listar')
    async listar(@Req() data: any):Promise<Movimentacoes | undefined>{
      return this.movimentacoesService.listar(data.query.id)
  }

    @Put ('atualizar')
    async atualizar(@Body() data: MovimentacoesDto ):Promise<ResultadoDto>{
      return this.movimentacoesService.atualizar(data)
    }

    @Post ('adicionar')
    async adicionar(@Req() data: any ): Promise<ResultadoDto>{
      return this.movimentacoesService.adicionar(data.query)
    }
    
    @Post ('adicionarADM')
    async adicionarADM(@Body() data: MovimentacoesDto ): Promise<ResultadoDto>{
      return this.movimentacoesService.adicionar(data)
    }
  }
