import { Injectable, Inject, HttpException, HttpStatus, forwardRef } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import bcrypt from "bcrypt";
import { Token } from './token.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthService } from 'src/auth/auth.service';
import { Usuario } from 'src/usuario/usuario.entity';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
    private usuarioService: UsuarioService,
    @Inject(forwardRef(()=> AuthService))
    private authService: AuthService,
  ) {}

    async salvar(hash: string, usuario: string ){
      let objToken = await this.tokenRepository.findOneBy ({usuario: usuario})
      if (objToken){
          this.tokenRepository.update(objToken.id, {
          hash: hash
        })

      } else {
        this.tokenRepository.insert({
          hash: hash,
          usuario: usuario
        })
      }
    }

    async atualizarToken(tokenAntigo: string){
      let objToken = await this.tokenRepository.findOneBy ({hash: tokenAntigo})
      if  (objToken) {
        let usuario = await this.usuarioService.findOne(objToken.usuario)
        // console.log(usuario)
      return this.authService.login(usuario)
      } else {
        return new HttpException({
          errorMessage: 'Token inválido'
        }, HttpStatus.UNAUTHORIZED)
      }
    }

    async acharUsuarioPorToken(token: string): Promise<Usuario> {
      let objToken: Token = await this.tokenRepository.findOneBy ({hash: token})
      if  (objToken) {
        let usuario = await this.usuarioService.findOne(objToken.usuario)
      return usuario
      } else {
        return null
      }
    }

}
;

