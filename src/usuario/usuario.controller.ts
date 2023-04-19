import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Put,
  Req,
} from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { UsuarioAdicionarDto } from './dto/usuario.adicionar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { ReturningStatementNotSupportedError } from 'typeorm';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService, // private authService: AuthService
  ) {}

  @Post('loginADM')
  async loginADM(@Req() data: any) {
    return this.usuarioService.loginAdm(data.query);
  }

  @Get('listar')
  async listar(): Promise<Usuario[] | ResultadoDto> {
    return this.usuarioService.listar();
  }

  @Put('achar')
  async achar(@Body() data: UsuarioAdicionarDto) {
    if (data.codigo) {
      return this.usuarioService
        .findCod(data.codigo)
        .then((res) => {
          if (res) {
            return res;
          } else {
            return false;
          }
        })
        .catch((err) => {
          return false;
        });
    }
    if (data.login) {
      return this.usuarioService
        .findOne(data.login)
        .then((res) => {
          if (res) {
            return true;
          } else {
            return false;
          }
        })
        .catch((err) => {
          return false;
        });
    }
    if (data.id) {
      return this.usuarioService
        .findId(data.id)
        .then((res) => {
          if (res) {
            return res;
          } else {
            return false;
          }
        })
        .catch((err) => {
          return false;
        });
    }
  }

  @Post('adicionar')
  async adicionar(@Req() data: any): Promise<Usuario | ResultadoDto> {
    console.log(data.query);

    return this.usuarioService.adicionar(data.query).then((res)=>{
      console.log(res)
      return res
    })
  }

  @Put('atualizar')
  async atualizar(@Body() data: UsuarioAdicionarDto): Promise<ResultadoDto> {
    return this.usuarioService.atualizar(data);
  }
}

// @UseGuards(AuthGuard('local'))
// @Post('login')
// async login(@Request() req) {
//   return this.authService.login(req.user);
// }
