import { Body, Controller, Get, Post, UseGuards, Req, Res, Param, Put } from '@nestjs/common';
import { Meta } from './meta.entity';
import { MetaService } from './meta.service';
import { MetaCadastrarDto } from './dto/meta.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('meta')
export class MetaController {
  constructor(private readonly metaService: MetaService) {}

  // @UseGuards(JwtAuthGuard)
    @Get('achar')
    async achar(@Req() data: any):Promise<Meta | undefined>{
        return this.metaService.achar(data.query.id)
    }

    @Put('listarADM')
    async listarADM(@Body() data: MetaCadastrarDto):Promise<Meta | undefined>{
        return this.metaService.achar(data.id)
    } 

    @Put ('configurar')
    async configurar(@Body() data: MetaCadastrarDto ): Promise<ResultadoDto>{
      return this.metaService.configurar(data)
    }

    @Post ('adicionar')
    async adicionar(@Req() data: any ): Promise<ResultadoDto>{
      return this.metaService.adicionar(data.query)
    }

    @Post ('adicionarADM')
    async adicionarADM(@Body() data: MetaCadastrarDto ): Promise<ResultadoDto>{
      return this.metaService.adicionar(data)
    }

  }
