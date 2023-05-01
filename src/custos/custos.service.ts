import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { CustosDto } from './dto/custos.dto';
import { Custos } from './custos.entity';

@Injectable()
export class CustosService {
  constructor(
    @Inject('CUSTOS_REPOSITORY')
    private custosRepository: Repository<Custos>,
  ) {}

  async listar(data: number): Promise<Custos> {
    return this.custosRepository.findOneBy({ usuario: data });
  }

  async atualizar(data: any): Promise<ResultadoDto> {
    let custos = new Custos();
    custos.receita = data.receita;
    custos.despesa1 = data.despesa1;
    custos.despesa2 = data.despesa2;
    custos.despesa3 = data.despesa3;
    custos.despesa4 = data.despesa4;
    custos.despesa5 = data.despesa5;
    custos.despesa6 = data.despesa6;
    custos.despesa7 = data.despesa7;
    custos.despesa8 = data.despesa8;
    custos.despesa9 = data.despesa9;
    custos.despesa10 = data.despesa10;
    custos.despesa11 = data.despesa11;
    custos.despesa12 = data.despesa12;
    custos.despesa13 = data.despesa13;
    custos.despesa14 = data.despesa14;
    custos.despesa15 = data.despesa15;

    if (data.index) {
      switch (data.index) {
        case 1:
          custos.despesa1 = data.despesa;
          break;
        case 2:
          custos.despesa2 = data.despesa;
          break;
        case 3:
          custos.despesa3 = data.despesa;
          break;
        case 4:
          custos.despesa4 = data.despesa;
          break;
        case 5:
          custos.despesa5 = data.despesa;
          break;
        case 6:
          custos.despesa6 = data.despesa;
          break;
        case 7:
          custos.despesa7 = data.despesa;
          break;
        case 8:
          custos.despesa8 = data.despesa;
          break;
        case 9:
          custos.despesa9 = data.despesa;
          break;
        case 10:
          custos.despesa10 = data.despesa;
          break;
        case 11:
          custos.despesa11 = data.despesa;
          break;
        case 12:
          custos.despesa12 = data.despesa;
          break;
        case 13:
          custos.despesa13 = data.despesa;
          break;
        case 14:
          custos.despesa14 = data.despesa;
          break;
        case 15:
          custos.despesa15 = data.despesa;
          break;

        default:
          break;
      }
    }

    let id = data.id;

    return this.custosRepository
      .update(
        {
          id,
        },
        {
          despesa1: custos.despesa1,
          despesa2: custos.despesa2,
          despesa3: custos.despesa3,
          despesa4: custos.despesa4,
          despesa5: custos.despesa5,
          despesa6: custos.despesa6,
          despesa7: custos.despesa7,
          despesa8: custos.despesa8,
          despesa9: custos.despesa9,
          despesa10: custos.despesa10,
          despesa11: custos.despesa11,
          despesa12: custos.despesa12,
          despesa13: custos.despesa13,
          despesa14: custos.despesa14,
          despesa15: custos.despesa15,
        },
      )
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Custos atualizados',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao atualizar',
        };
      });
  }

  async excluir(data: any): Promise<any> {
    let custos = new Custos();
    switch (data.index) {
      case 1:
        custos.despesa1 = data.despesa2;
        custos.despesa2 = data.despesa3;
        custos.despesa3 = data.despesa4;
        custos.despesa4 = data.despesa5;
        custos.despesa5 = data.despesa6;
        custos.despesa6 = data.despesa7;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = data.despesa11;
        custos.despesa11 = data.despesa12;
        custos.despesa12 = data.despesa13;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;
        break;
      case 2:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa3;
        custos.despesa3 = data.despesa4;
        custos.despesa4 = data.despesa5;
        custos.despesa5 = data.despesa6;
        custos.despesa6 = data.despesa7;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = data.despesa11;
        custos.despesa11 = data.despesa12;
        custos.despesa12 = data.despesa13;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 3:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa4;
        custos.despesa4 = data.despesa5;
        custos.despesa5 = data.despesa6;
        custos.despesa6 = data.despesa7;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = data.despesa11;
        custos.despesa11 = data.despesa12;
        custos.despesa12 = data.despesa13;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 4:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa5;
        custos.despesa5 = data.despesa6;
        custos.despesa6 = data.despesa7;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = data.despesa11;
        custos.despesa11 = data.despesa12;
        custos.despesa12 = data.despesa13;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 5:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa6;
        custos.despesa6 = data.despesa7;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = data.despesa11;
        custos.despesa11 = data.despesa12;
        custos.despesa12 = data.despesa13;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 6:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa7;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = data.despesa11;
        custos.despesa11 = data.despesa12;
        custos.despesa12 = data.despesa13;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 7:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa6;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = data.despesa11;
        custos.despesa11 = data.despesa12;
        custos.despesa12 = data.despesa13;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 8:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa6;
        custos.despesa7 = data.despesa7;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = data.despesa11;
        custos.despesa11 = data.despesa12;
        custos.despesa12 = data.despesa13;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 9:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa6;
        custos.despesa7 = data.despesa7;
        custos.despesa8 = data.despesa8;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = data.despesa11;
        custos.despesa11 = data.despesa12;
        custos.despesa12 = data.despesa13;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 10:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa6;
        custos.despesa7 = data.despesa7;
        custos.despesa8 = data.despesa8;
        custos.despesa9 = data.despesa9;
        custos.despesa10 = data.despesa11;
        custos.despesa11 = data.despesa12;
        custos.despesa12 = data.despesa13;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 11:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa6;
        custos.despesa7 = data.despesa7;
        custos.despesa8 = data.despesa8;
        custos.despesa9 = data.despesa9;
        custos.despesa10 = data.despesa10;
        custos.despesa11 = data.despesa12;
        custos.despesa12 = data.despesa13;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 12:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa6;
        custos.despesa7 = data.despesa7;
        custos.despesa8 = data.despesa8;
        custos.despesa9 = data.despesa9;
        custos.despesa10 = data.despesa10;
        custos.despesa11 = data.despesa11;
        custos.despesa12 = data.despesa13;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 13:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa6;
        custos.despesa7 = data.despesa7;
        custos.despesa8 = data.despesa8;
        custos.despesa9 = data.despesa9;
        custos.despesa10 = data.despesa10;
        custos.despesa11 = data.despesa11;
        custos.despesa12 = data.despesa12;
        custos.despesa13 = data.despesa14;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 14:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa6;
        custos.despesa7 = data.despesa7;
        custos.despesa8 = data.despesa8;
        custos.despesa9 = data.despesa9;
        custos.despesa10 = data.despesa10;
        custos.despesa11 = data.despesa11;
        custos.despesa12 = data.despesa12;
        custos.despesa13 = data.despesa13;
        custos.despesa14 = data.despesa15;
        custos.despesa15 = ` - `;

        break;
      case 15:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa6;
        custos.despesa7 = data.despesa7;
        custos.despesa8 = data.despesa8;
        custos.despesa9 = data.despesa9;
        custos.despesa10 = data.despesa10;
        custos.despesa11 = data.despesa11;
        custos.despesa12 = data.despesa12;
        custos.despesa13 = data.despesa13;
        custos.despesa14 = data.despesa14;
        custos.despesa15 = ` - `;

        break;

      default:
        break;
    }

    this.custosRepository.findOneBy({usuario: data.id}).then((res)=>{
      let id = res.id;
      return this.custosRepository
        .update(
          {
            id,
          },
          {
            despesa1: custos.despesa1,
            despesa2: custos.despesa2,
            despesa3: custos.despesa3,
            despesa4: custos.despesa4,
            despesa5: custos.despesa5,
            despesa6: custos.despesa6,
            despesa7: custos.despesa7,
            despesa8: custos.despesa8,
            despesa9: custos.despesa9,
            despesa10: custos.despesa10,
            despesa11: custos.despesa11,
            despesa12: custos.despesa12,
            despesa13: custos.despesa13,
            despesa14: custos.despesa14,
            despesa15: custos.despesa15,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Custo excluído',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao excluir',
          };
        });


    })

  }

  async adicionar(data: CustosDto): Promise<ResultadoDto> {
    let custos = new Custos();
    custos.usuario = data.usuario;
    custos.receita = data.receita;
    custos.despesa1 = data.despesa1;
    custos.despesa2 = data.despesa2;
    custos.despesa3 = data.despesa3;
    custos.despesa4 = data.despesa4;
    custos.despesa5 = data.despesa5;
    custos.despesa6 = data.despesa6;
    custos.despesa7 = data.despesa7;
    custos.despesa8 = data.despesa8;
    custos.despesa9 = data.despesa9;
    custos.despesa10 = data.despesa10;
    custos.despesa11 = data.despesa11;
    custos.despesa12 = data.despesa12;
    custos.despesa13 = data.despesa13;
    custos.despesa14 = data.despesa14;
    custos.despesa15 = data.despesa15;
    return this.custosRepository
      .save(custos)
      .then((res) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Custos adicionados',
        };
      })
      .catch((err) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao adicionar',
        };
      });
  }

  //   async resetar(data: CustosDto): Promise<ResultadoDto> {
  //     let custos = new Custos()
  //     custos.despesa1 = ''
  //     custos.despesa2 = ''
  //     custos.despesa3 = ''
  //     custos.despesa4 = ''
  //     custos.despesa5 = ''
  //     custos.despesa6 = ''
  //     custos.despesa7 = ''
  //     custos.despesa8 = ''
  //     let id = data.id
  //     return this.custosRepository.update({id},{
  //       despesa1: custos.despesa1,
  //       despesa2: custos.despesa2,
  //       despesa3: custos.despesa3,
  //       despesa4: custos.despesa4,
  //       despesa5: custos.despesa5,
  //       despesa6: custos.despesa6,
  //       despesa7: custos.despesa7,
  //     })
  //     .then((res) => {
  //       return <ResultadoDto>{
  //         status: true,
  //         mensagem: 'Custos deletada'
  //       }
  //     })
  //     .catch((err) => {
  //       return <ResultadoDto>{
  //         status: false,
  //         mensagem: 'Houve um erro ao deletar'
  //       }
  //     })
  //   }
}
