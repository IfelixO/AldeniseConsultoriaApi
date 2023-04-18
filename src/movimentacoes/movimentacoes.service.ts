import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { MovimentacoesDto } from './dto/movimentacoes.dto';
import { Movimentacoes } from './movimentacoes.entity';

@Injectable()
export class MovimentacoesService {
  constructor(
    @Inject('MOVIMENTACOES_REPOSITORY')
    private movimentacoesRepository: Repository<Movimentacoes>,
  ) {}

  async listar(data: any): Promise<Movimentacoes> {
    let movimentacoes = this.movimentacoesRepository.findOneBy({id: data})
    return movimentacoes
  }

  async atualizar(data: MovimentacoesDto): Promise<ResultadoDto> {
    let movimentacoes = new Movimentacoes()
    movimentacoes.entrada1 = data.entrada1
    movimentacoes.entrada2 = data.entrada2
    movimentacoes.entrada3 = data.entrada3
    movimentacoes.entrada4 = data.entrada4
    movimentacoes.entrada5 = data.entrada5
    movimentacoes.entrada6 = data.entrada6
    movimentacoes.entrada7 = data.entrada7
    movimentacoes.entrada8 = data.entrada8
    movimentacoes.entrada9 = data.entrada9
    movimentacoes.entrada10 = data.entrada10
    movimentacoes.entrada11 = data.entrada11
    movimentacoes.entrada12 = data.entrada12
    movimentacoes.entrada13 = data.entrada13
    movimentacoes.entrada14 = data.entrada14
    movimentacoes.entrada15 = data.entrada15
    movimentacoes.entrada16 = data.entrada16
    movimentacoes.entrada17 = data.entrada17
    movimentacoes.entrada18 = data.entrada18
    movimentacoes.entrada19 = data.entrada19
    movimentacoes.entrada20 = data.entrada20
    movimentacoes.entrada21 = data.entrada21
    movimentacoes.entrada22 = data.entrada22
    movimentacoes.entrada23 = data.entrada23
    movimentacoes.entrada24 = data.entrada24
    movimentacoes.entrada25 = data.entrada25
    movimentacoes.entrada26 = data.entrada26
    movimentacoes.entrada27 = data.entrada27
    movimentacoes.entrada28 = data.entrada28
    movimentacoes.entrada29 = data.entrada29
    movimentacoes.entrada30 = data.entrada30
    movimentacoes.entrada31 = data.entrada31
    movimentacoes.entrada32 = data.entrada32
    let id = data.id
    return this.movimentacoesRepository.update({
      id,
    },{
      entrada1: movimentacoes.entrada1,
      entrada2: movimentacoes.entrada2,
      entrada3: movimentacoes.entrada3,
      entrada4: movimentacoes.entrada4,
      entrada5: movimentacoes.entrada5,
      entrada6: movimentacoes.entrada6,
      entrada7: movimentacoes.entrada7,
      entrada8: movimentacoes.entrada8,    
      entrada9: movimentacoes.entrada9,     
      entrada10: movimentacoes.entrada10,
      entrada11: movimentacoes.entrada11,
      entrada12: movimentacoes.entrada12,
      entrada13: movimentacoes.entrada13,
      entrada14: movimentacoes.entrada14,
      entrada15: movimentacoes.entrada15,
      entrada16: movimentacoes.entrada16,
      entrada17: movimentacoes.entrada17,
      entrada18: movimentacoes.entrada18,
      entrada19: movimentacoes.entrada19,
      entrada20: movimentacoes.entrada20,
      entrada21: movimentacoes.entrada21,
      entrada22: movimentacoes.entrada22,
      entrada23: movimentacoes.entrada23,
      entrada24: movimentacoes.entrada24,
      entrada25: movimentacoes.entrada25,
      entrada26: movimentacoes.entrada26,
      entrada27: movimentacoes.entrada27,
      entrada28: movimentacoes.entrada28,
      entrada29: movimentacoes.entrada29,
      entrada30: movimentacoes.entrada30,
      entrada31: movimentacoes.entrada31,
      entrada32: movimentacoes.entrada32,
    })
    .then((result) => {
      return <ResultadoDto>{
        status: true,
        mensagem: 'Movimentacoes atualizadas'
      }
    })
    .catch((error) => {
      return <ResultadoDto>{
        status: false,
        mensagem: 'Houve um erro ao atualizar'
      }
    })
  } 

  async adicionar(data: MovimentacoesDto): Promise<ResultadoDto> {
    let movimentacoes = new Movimentacoes()
    movimentacoes.id = data.id
    return this.movimentacoesRepository.insert(movimentacoes)
    .then((res) => {
      return <ResultadoDto>{
        status: true,
        mensagem: 'Movimentacoes adicionada'
      }
    })
    .catch((err) => {
      return <ResultadoDto>{
        status: false,
        mensagem: 'Houve um erro ao adicionar'
      }
    })
  } 
    

  
  }


