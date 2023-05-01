import { Body, Controller, Get, Post, Put, Req, Delete } from '@nestjs/common';
import { Custos } from './custos.entity';
import { CustosService } from './custos.service';
import { CustosDto } from './dto/custos.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Controller('custos')
export class CustosController {
  constructor(private readonly custosService: CustosService) {}

  @Get('listar')
  async listar(@Req() data: any): Promise<Custos | undefined> {
    // console.log('chegou listar custos')
    return this.custosService.listar(Number(data.query.id)).then((res)=>{
      // console.log('foi listar custos')
      return res
    })
  }

  @Put('listarADM')
  async listarADM(@Body() data: CustosDto): Promise<Custos | undefined> {
    return this.custosService.listar(data.id)
  }

  @Put('atualizar')
  async atualizar(@Body() data: CustosDto): Promise<ResultadoDto> {
    return this.custosService.atualizar(data);
  };

  @Put('excluir')
  async excluir(@Body() data: CustosDto): Promise<ResultadoDto> {
    return this.custosService.excluir(data);
  }

  @Post('adicionar')
  async adicionar(@Req() data: any): Promise<ResultadoDto> {
    return this.custosService.adicionar(data.query);
  }

  @Post('adicionarADM')
  async adicionarADM(@Body() data: CustosDto): Promise<ResultadoDto> {
    return this.custosService.adicionar(data);
  }

  // @Delete ('resetar')
  // async resetar(@Body() data: CustosDto ): Promise<ResultadoDto>{
  //   return this.custosService.resetar(data)
  // }
}
