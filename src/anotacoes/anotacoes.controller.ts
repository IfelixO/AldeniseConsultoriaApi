import { Body, Controller, Get, Post, Put, Req, Delete } from '@nestjs/common';
import { Anotacoes } from './anotacoes.entity';
import { AnotacoesService } from './anotacoes.service';
import { AnotacoesDto } from './dto/anotacoes.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Controller('anotacoes')
export class AnotacoesController {
  constructor(private readonly anotacoesService: AnotacoesService) {}

  @Get('listar')
  async listar(@Req() data: any): Promise<Anotacoes | undefined> {
    return this.anotacoesService.listar(data.query.id);
  }

  // @Put('listarADM')
  // async listarADM(@Body() data: AnotacoesDto): Promise<Anotacoes | undefined>
  // {
  //   return this.anotacoesService.listar(data.id);
  // }

  @Put('atualizar')
  async atualizar(@Body() data: any): Promise<ResultadoDto> {
    return this.anotacoesService.atualizar(data);
  }

  // @Post('adicionar')
  // async adicionar(@Req() data: any): Promise<ResultadoDto> {
  //   console.log(data);
  //   return this.anotacoesService.adicionar(data.query);
  // }

  @Post('adicionarADM')
  async adicionarADM(@Body() data: AnotacoesDto): Promise<ResultadoDto> {
    return this.anotacoesService.adicionar(data);
  }

  // @Put('resetar')
  // async resetar(@Body() data: AnotacoesDto): Promise<ResultadoDto> {
  //   return this.anotacoesService.resetar(data);
  // }
}
