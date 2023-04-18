import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
import { Usuario } from 'src/usuario/usuario.entity';


@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,     
        private jwtService: JwtService,
        private tokenService: TokenService
        ) {}

    async validarUsuario(login: string, senha: string): Promise<any> {
        const usuario = await this.usuarioService.findOne(login);
        if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
          const { senha, ...result } = usuario;
      return result;
        }
        return null;
      }

      async login(user: any) {
        const payload = { username: user.login, sub: user.id };
        const token = this.jwtService.sign(payload)
        this.tokenService.salvar(token, user.login)
        return {
          access_token: token,
          usuario: user.nome,
          idUsuario: user.id,
          perfil: user.perfil
        };
      }


      async loginAuto(token: string) {
        let usuario: Usuario = await this.tokenService.acharUsuarioPorToken(token)
        if (usuario){
          return this.login(usuario)
        } else {
          return new HttpException({
            errorMessage: 'Token inválido'
          }, HttpStatus.UNAUTHORIZED)
        }
      }

}
 