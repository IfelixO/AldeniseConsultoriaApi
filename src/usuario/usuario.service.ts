import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { UsuarioAdicionarDto } from './dto/usuario.adicionar.dto';
import { Usuario } from './usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async loginAdm(adm: any): Promise<any> {
    return this.usuarioRepository.findOneBy ({id: 1}).then((res)=>{
      if(bcrypt.compareSync(adm.senha, res.senha)){
        return <ResultadoDto>{
          status: true,
          mensagem: 'Adm logado com sucesso',
        };
      } else {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Adm não localizado',
        };
      }
    })
  }

  async listar(): Promise<Usuario[] | undefined | ResultadoDto> {
    return this.usuarioRepository
      .find()
      .then((res) => {
        let clientes = [];
        res.forEach((el, i) => {
          if (el.papel == 'cliente') {
            clientes.push(el);
          }
        });
        return clientes;
      })
      .catch((err) => {
        return <ResultadoDto>{
          mensagem: 'Houve um erro ao listar',
        };
      });
  }

  async adicionar(data: UsuarioAdicionarDto): Promise<Usuario | ResultadoDto> {
    console.log(data)
    let usuario = new Usuario();
    let separacaoNome = data.nome.split(' ');
    let separacaoTelefone = data.telefone.split('-');
    usuario.nome = data.nome;
    usuario.login = '';
    usuario.senha = '';
    usuario.perfil =
      'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FgerFin-28ad0714-8857-49b3-a73b-7182a3f60695/ImagePicker/c71734a9-da2f-49d1-a2ea-6dc03db0de82.jpeg';
    usuario.email = data.email;
    usuario.telefone = data.telefone;
    usuario.ocupacao = data.ocupacao;
    usuario.disc = data.disc;
    usuario.codigo = separacaoNome[0] + separacaoTelefone[1];
    usuario.papel = 'cliente';
    usuario.saude = data.saude;
    usuario.descricaoSaude = '';
    usuario.descricaoAnalise = '';
    return this.usuarioRepository
      .insert(usuario)
      .then((res) => {
        return this.findCod(usuario.codigo);
      })
      .catch((err) => {
        return <ResultadoDto>{
          mensagem: 'Houve um erro ao adicionar',
        };
      });
  }

  async findOne(login: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOneBy ({ login: login });
  }

  async findCod(codigo: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOneBy ({ codigo: codigo });
  }

  async findId(id: number): Promise<Usuario | undefined> {
    return this.usuarioRepository
      .findOneBy ({ id: id })
      .then((res) => {
        let usuario = {
          id: res.id,
          nome: res.nome,
          disc: res.disc,
          descricaoAnalise: res.descricaoAnalise,
        };
        return usuario;
      })
      .catch((err) => {
        return err;
      });
  }

  async atualizar(data: UsuarioAdicionarDto): Promise<ResultadoDto> {
    let usuario = new Usuario();
    let id = data.id;

    if (data.perfil) {
      usuario.perfil = data.perfil;
      return this.usuarioRepository
        .update(
          {
            id,
          },
          {
            perfil: usuario.perfil,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Perfil alterado',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao editar',
          };
        });
    }
    if (data.descricaoAnalise) {
      usuario.descricaoAnalise = data.descricaoAnalise;
      return this.usuarioRepository
        .update(
          {
            id,
          },
          {
            descricaoAnalise: usuario.descricaoAnalise,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Descrição alterada',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao editar',
          };
        });
    }
    if (data.descricaoSaude) {
      usuario.descricaoSaude = data.descricaoSaude;
      return this.usuarioRepository
        .update(
          {
            id,
          },
          {
            descricaoSaude: usuario.descricaoSaude,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Descrição alterada',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao editar',
          };
        });
    }
    if (data.login) {
      const salt = 8;
      bcrypt.hash(data.senha, salt).then((hash: string) => {
        console.log(hash);
        usuario.login = data.login;
        usuario.senha = hash;
        return this.usuarioRepository
          .update(
            {
              id,
            },
            {
              login: usuario.login,
              senha: usuario.senha,
            },
          )
          .then((result) => {
            return <ResultadoDto>{
              status: true,
              mensagem: 'Login cadastrado',
            };
          })
          .catch((error) => {
            return <ResultadoDto>{
              status: false,
              mensagem: 'Houve um erro ao cadastrar',
            };
          });
      });
    }
  }
}
