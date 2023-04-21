import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { ProgressaoCadastrarDto } from './dto/progressao.cadastrar.dto';
import { Progressao } from './progressao.entity';

@Injectable()
export class ProgressaoService {
  constructor(
    @Inject('PROGRESSAO_REPOSITORY')
    private progressaoRepository: Repository<Progressao>,
  ) {}

  async listar(data: any): Promise<Progressao> {
    return this.progressaoRepository.findOneBy({ usuario: data });
  }

  async atualizar(data: ProgressaoCadastrarDto): Promise<ResultadoDto> {
    let progressao = new Progressao();
    progressao.entrada1 = data.entrada1;
    progressao.entrada2 = data.entrada2;
    progressao.entrada3 = data.entrada3;
    progressao.entrada4 = data.entrada4;
    progressao.entrada5 = data.entrada5;
    progressao.entrada6 = data.entrada6;
    progressao.entrada7 = data.entrada7;
    progressao.entrada8 = data.entrada8;

    let id = data.id;
    // return this.progressaoRepository.save(progressao)
    return this.progressaoRepository
      .update(
        {
          id,
        },
        {
          entrada1: progressao.entrada1,
          entrada2: progressao.entrada2,
          entrada3: progressao.entrada3,
          entrada4: progressao.entrada4,
          entrada5: progressao.entrada5,
          entrada6: progressao.entrada6,
          entrada7: progressao.entrada7,
        },
      )
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Progressao configurada',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao cadastrar',
        };
      });
  }

  async adicionar(data: ProgressaoCadastrarDto): Promise<ResultadoDto> {
    let progressao = new Progressao();
    progressao.usuario = data.id;
    progressao.entrada1 = '';
    progressao.entrada2 = '';
    progressao.entrada3 = '';
    progressao.entrada4 = '';
    progressao.entrada5 = '';
    progressao.entrada6 = '';
    progressao.entrada7 = '';
    progressao.entrada8 = '';

    return this.progressaoRepository
      .save(progressao)
      .then((res) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Progressao adicionada',
        };
      })
      .catch((err) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao adicionar',
        };
      });
  }

  async resetar(data: ProgressaoCadastrarDto): Promise<any> {
    let progressao = new Progressao();
    progressao.entrada1 = '';
    progressao.entrada2 = '';
    progressao.entrada3 = '';
    progressao.entrada4 = '';
    progressao.entrada5 = '';
    progressao.entrada6 = '';
    progressao.entrada7 = '';
    progressao.entrada8 = '';

    this.progressaoRepository.findOneBy({ usuario: data.id }).then((res) => {
      let id = res.id;
      return this.progressaoRepository
        .update(
          { id },
          {
            entrada1: progressao.entrada1,
            entrada2: progressao.entrada2,
            entrada3: progressao.entrada3,
            entrada4: progressao.entrada4,
            entrada5: progressao.entrada5,
            entrada6: progressao.entrada6,
            entrada7: progressao.entrada7,
          },
        )
        .then((res) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Progressao resetada',
          };
        })
        .catch((err) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao resetar',
          };
        });
    });
  }
}
