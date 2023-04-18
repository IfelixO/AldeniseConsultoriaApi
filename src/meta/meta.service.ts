import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Repository } from 'typeorm';
import { MetaCadastrarDto } from './dto/meta.cadastrar.dto';
import { Meta } from './meta.entity';

@Injectable()
export class MetaService {
  constructor(
    private usuarioService: UsuarioService,     
    @Inject('META_REPOSITORY')
    private metaRepository: Repository<Meta>,
    ) {}

  async achar(data : number): Promise<Meta | undefined> {
    let meta: Meta = await this.metaRepository.findOneBy  ({id: data})
    if (meta){
    return meta
    } else {
      return null
    }
  }

  async configurar(data: MetaCadastrarDto): Promise<any> {
    let meta = new Meta()
    meta.titulo = data.titulo
    meta.motivacao = data.motivacao
    meta.inicial = data.inicial
    meta.final = data.final
    meta.parcela = data.parcela

    let id = data.id
    // console.log(id)
    return this.metaRepository.update({
      id,
    },{
      titulo: meta.titulo,
      motivacao: meta.motivacao,
      inicial: meta.inicial,
      final: meta.final,
      parcela: meta.parcela,
    })
    .then((result) => {
      return this.usuarioService.findId(id)
    })
    .catch((error) => {
      return error
    })
  } 

  async adicionar(data: MetaCadastrarDto): Promise<ResultadoDto> {
    let meta = new Meta()
    meta.id = data.id
    meta.final = data.final
    meta.inicial = data.inicial
    meta.parcela = data.parcela
    meta.titulo = data.titulo
    meta.motivacao = data.motivacao
    return this.metaRepository.insert(meta)
    .then((res) => {
      return <ResultadoDto>{
        status: true,
        mensagem: 'Meta adicionada'
      }
    })
    .catch((err) => {
      return <ResultadoDto>{
        status: false,
        mensagem: 'Houve um erro ao cadastrar'
      }
    })

    
  } 

  
  }


