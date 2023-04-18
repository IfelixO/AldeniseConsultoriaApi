import { Body, Controller, Get, Post, Put, Req, Delete } from '@nestjs/common';
import { Progressao } from './progressao.entity';
import { ProgressaoService } from './progressao.service';
import { ProgressaoCadastrarDto } from './dto/progressao.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Controller('progressao')
export class ProgressaoController {
  constructor(private readonly progressaoService: ProgressaoService) {}

  @Get('listar')
  async listar(@Req() data: any): Promise<Progressao | undefined> {

    return this.progressaoService.listar(data.query.id);
  }

  @Put('listarADM')
  async listarADM(@Body() data: ProgressaoCadastrarDto): Promise<Progressao | undefined> 
  {
    return this.progressaoService.listar(data.id);
  }

  @Put('atualizar')
  async atualizar(@Body() data: ProgressaoCadastrarDto): Promise<ResultadoDto> {
    return this.progressaoService.atualizar(data);
  }

  @Post('adicionar')
  async adicionar(@Req() data: any): Promise<ResultadoDto> {
    console.log(data);
    return this.progressaoService.adicionar(data.query);
  }

  @Post('adicionarADM')
  async adicionarADM(
    @Body() data: ProgressaoCadastrarDto,
  ): Promise<ResultadoDto> {
    return this.progressaoService.adicionar(data);
  }

  @Put('resetar')
  async resetar(@Body() data: ProgressaoCadastrarDto): Promise<ResultadoDto> {
    return this.progressaoService.resetar(data);
  }
}
