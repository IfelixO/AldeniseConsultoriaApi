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

  async listar(data: any): Promise<Custos> {
    return this.custosRepository.findOne({ id: data });
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
    switch (data.index) {
      case 2:
        custos.despesa1 = data.despesa;
        break;
      case 3:
        custos.despesa2 = data.despesa;
        break;
      case 4:
        custos.despesa3 = data.despesa;
        break;
      case 5:
        custos.despesa4 = data.despesa;
        break;
      case 6:
        custos.despesa5 = data.despesa;
        break;
      case 7:
        custos.despesa6 = data.despesa;
        break;
      case 8:
        custos.despesa7 = data.despesa;
        break;
      case 9:
        custos.despesa8 = data.despesa;
        break;
      case 10:
        custos.despesa9 = data.despesa;
        break;
      case 11:
        custos.despesa10 = data.despesa;
        break;

      default:
        break;
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

  async excluir(data: any): Promise<ResultadoDto> {
    let custos = new Custos();
    switch (data.index) {
      case 2:
        custos.despesa1 = data.despesa2;
        custos.despesa2 = data.despesa3;
        custos.despesa3 = data.despesa4;
        custos.despesa4 = data.despesa5;
        custos.despesa5 = data.despesa6;
        custos.despesa6 = data.despesa7;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = ` - `;
        break;
      case 3:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa3;
        custos.despesa3 = data.despesa4;
        custos.despesa4 = data.despesa5;
        custos.despesa5 = data.despesa6;
        custos.despesa6 = data.despesa7;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = ` - `;

        break;
      case 4:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa4;
        custos.despesa4 = data.despesa5;
        custos.despesa5 = data.despesa6;
        custos.despesa6 = data.despesa7;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = ` - `;

        break;
      case 5:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa5;
        custos.despesa5 = data.despesa6;
        custos.despesa6 = data.despesa7;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = ` - `;

        break;
      case 6:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa6;
        custos.despesa6 = data.despesa7;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = ` - `;

        break;
      case 7:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa7;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = ` - `;

        break;
      case 8:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa6;
        custos.despesa7 = data.despesa8;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = ` - `;

        break;
      case 9:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa6;
        custos.despesa7 = data.despesa7;
        custos.despesa8 = data.despesa9;
        custos.despesa9 = data.despesa10;
        custos.despesa10 = ` - `;

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
        custos.despesa9 = data.despesa10;
        custos.despesa10 = ` - `;

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
        custos.despesa10 = ` - `;

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
        custos.despesa10 = ` - `;

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
        custos.despesa10 = ` - `;

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
        custos.despesa10 = ` - `;

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
        custos.despesa10 = ` - `;

        break;
      case 16:
        custos.despesa1 = data.despesa1;
        custos.despesa2 = data.despesa2;
        custos.despesa3 = data.despesa3;
        custos.despesa4 = data.despesa4;
        custos.despesa5 = data.despesa5;
        custos.despesa6 = data.despesa6;
        custos.despesa7 = data.despesa7;
        custos.despesa8 = data.despesa8;
        custos.despesa9 = data.despesa9;
        custos.despesa10 = ` - `;

        break;

      default:
        break;
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
  }

  async adicionar(data: CustosDto): Promise<ResultadoDto> {
    let custos = new Custos();
    console.log(data);
    custos.id = data.id;
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
    return this.custosRepository
      .insert(custos)
      .then((res) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Custos adicionada',
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
