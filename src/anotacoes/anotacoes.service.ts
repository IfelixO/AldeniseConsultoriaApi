import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { AnotacoesDto } from './dto/anotacoes.dto';
import { Anotacoes } from './anotacoes.entity';

@Injectable()
export class AnotacoesService {
  constructor(
    @Inject('ANOTACOES_REPOSITORY')
    private anotacoesRepository: Repository<Anotacoes>,
  ) {}

  async listar(data: number): Promise<Anotacoes> {
    let anotacoes = this.anotacoesRepository.findOneBy ({ id: data });
    return anotacoes;
  }

  async atualizar(data: any): Promise<ResultadoDto> {
    let id = data.id;

    if (data.nota == 0) {
      let anotacoes = {
        titulo: data.titulo,
        nota: data.texto,
        data: data.data
      }
      this.listar(id)
        .then((res) => {
          if (!res.tituloNota1) {
            return this.anotacoesRepository
            .update(
              {
                id,
              },
              {
                tituloNota1: anotacoes.titulo,
                nota1: anotacoes.nota,
                dataNota1: anotacoes.data
              },
            )
            .then((result) => {
              return <ResultadoDto>{
                status: true,
                mensagem: 'Anotação adicionada',
              };
            })
            .catch((error) => {
              return <ResultadoDto>{
                status: false,
                mensagem: 'Houve um erro ao adicionar',
              };
            });

          } else {
            if (!res.tituloNota2) {
              return this.anotacoesRepository
              .update(
                {
                  id,
                },
                {
                  tituloNota2: anotacoes.titulo,
                  nota2: anotacoes.nota,
                  dataNota2: anotacoes.data
                },
              )
              .then((result) => {
                return <ResultadoDto>{
                  status: true,
                  mensagem: 'Anotação adicionada',
                };
              })
              .catch((error) => {
                return <ResultadoDto>{
                  status: false,
                  mensagem: 'Houve um erro ao adicionar',
                };
              });
            } else {
              if (!res.tituloNota3) {
                return this.anotacoesRepository
                .update(
                  {
                    id,
                  },
                  {
                    tituloNota3: anotacoes.titulo,
                    nota3: anotacoes.nota,
                    dataNota3: anotacoes.data
                  },
                )
                .then((result) => {
                  return <ResultadoDto>{
                    status: true,
                    mensagem: 'Anotação adicionada',
                  };
                })
                .catch((error) => {
                  return <ResultadoDto>{
                    status: false,
                    mensagem: 'Houve um erro ao adicionar',
                  };
                });
              } else {
                if (!res.tituloNota4) {
                  return this.anotacoesRepository
                  .update(
                    {
                      id,
                    },
                    {
                      tituloNota4: anotacoes.titulo,
                      nota4: anotacoes.nota,
                      dataNota4: anotacoes.data
                    },
                  )
                  .then((result) => {
                    return <ResultadoDto>{
                      status: true,
                      mensagem: 'Anotação adicionada',
                    };
                  })
                  .catch((error) => {
                    return <ResultadoDto>{
                      status: false,
                      mensagem: 'Houve um erro ao adicionar',
                    };
                  });
                } else {
                  if (!res.tituloNota5) {
                    return this.anotacoesRepository
                    .update(
                      {
                        id,
                      },
                      {
                        tituloNota5: anotacoes.titulo,
                        nota5: anotacoes.nota,
                        dataNota5: anotacoes.data
                      },
                    )
                    .then((result) => {
                      return <ResultadoDto>{
                        status: true,
                        mensagem: 'Anotação adicionada',
                      };
                    })
                    .catch((error) => {
                      return <ResultadoDto>{
                        status: false,
                        mensagem: 'Houve um erro ao adicionar',
                      };
                    });
                  } else {
                    if (!res.tituloNota6) {
                      return this.anotacoesRepository
                      .update(
                        {
                          id,
                        },
                        {
                          tituloNota6: anotacoes.titulo,
                          nota6: anotacoes.nota,
                          dataNota6: anotacoes.data
                        },
                      )
                      .then((result) => {
                        return <ResultadoDto>{
                          status: true,
                          mensagem: 'Anotação adicionada',
                        };
                      })
                      .catch((error) => {
                        return <ResultadoDto>{
                          status: false,
                          mensagem: 'Houve um erro ao adicionar',
                        };
                      });
                    } else {
                      if (!res.tituloNota7) {
                        return this.anotacoesRepository
                        .update(
                          {
                            id,
                          },
                          {
                            tituloNota7: anotacoes.titulo,
                            nota7: anotacoes.nota,
                            dataNota7: anotacoes.data
                          },
                        )
                        .then((result) => {
                          return <ResultadoDto>{
                            status: true,
                            mensagem: 'Anotação adicionada',
                          };
                        })
                        .catch((error) => {
                          return <ResultadoDto>{
                            status: false,
                            mensagem: 'Houve um erro ao adicionar',
                          };
                        });
                      } else {
                        if (!res.tituloNota8) {
                          return this.anotacoesRepository
                          .update(
                            {
                              id,
                            },
                            {
                              tituloNota8: anotacoes.titulo,
                              nota8: anotacoes.nota,
                              dataNota8: anotacoes.data
                            },
                          )
                          .then((result) => {
                            return <ResultadoDto>{
                              status: true,
                              mensagem: 'Anotação adicionada',
                            };
                          })
                          .catch((error) => {
                            return <ResultadoDto>{
                              status: false,
                              mensagem: 'Houve um erro ao adicionar',
                            };
                          });
                        } else {
                          if (!res.tituloNota9) {
                            return this.anotacoesRepository
                            .update(
                              {
                                id,
                              },
                              {
                                tituloNota9: anotacoes.titulo,
                                nota9: anotacoes.nota,
                                dataNota9: anotacoes.data
                              },
                            )
                            .then((result) => {
                              return <ResultadoDto>{
                                status: true,
                                mensagem: 'Anotação adicionada',
                              };
                            })
                            .catch((error) => {
                              return <ResultadoDto>{
                                status: false,
                                mensagem: 'Houve um erro ao adicionar',
                              };
                            });
                          }else {
                            if (!res.tituloNota10) {
                              return this.anotacoesRepository
                              .update(
                                {
                                  id,
                                },
                                {
                                  tituloNota10: anotacoes.titulo,
                                  nota10: anotacoes.nota,
                                  dataNota10: anotacoes.data
                                },
                              )
                              .then((result) => {
                                return <ResultadoDto>{
                                  status: true,
                                  mensagem: 'Anotação adicionada',
                                };
                              })
                              .catch((error) => {
                                return <ResultadoDto>{
                                  status: false,
                                  mensagem: 'Houve um erro ao adicionar',
                                };
                              });
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (data.nota == 1) {
      let anotacoes = new Anotacoes()
      anotacoes.tituloNota1 = data.titulo;
      anotacoes.nota1 = data.texto;
      anotacoes.dataNota1 = data.data;
      return this.anotacoesRepository
        .update(
          {
            id,
          },
          {
            tituloNota1: anotacoes.tituloNota1,
            nota1: anotacoes.nota1,
            dataNota1: anotacoes.dataNota1,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Anotacoes atualizadas',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao atualizar',
          };
        });
    }
    if (data.nota == 2) {
      let anotacoes = new Anotacoes()
      anotacoes.tituloNota2 = data.titulo;
      anotacoes.nota2 = data.texto;
      anotacoes.dataNota2 = data.data;
      return this.anotacoesRepository
        .update(
          {
            id,
          },
          {
            tituloNota2: anotacoes.tituloNota2,
            nota2: anotacoes.nota2,
            dataNota2: anotacoes.dataNota2,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Anotacoes atualizadas',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao atualizar',
          };
        });
    }
    if (data.nota == 3) {
      let anotacoes = new Anotacoes()
      anotacoes.tituloNota3 = data.titulo;
      anotacoes.nota3 = data.texto;
      anotacoes.dataNota3 = data.data;
      return this.anotacoesRepository
        .update(
          {
            id,
          },
          {
            tituloNota3: anotacoes.tituloNota3,
            nota3: anotacoes.nota3,
            dataNota3: anotacoes.dataNota3,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Anotacoes atualizadas',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao atualizar',
          };
        });
    }
    if (data.nota == 4) {
      let anotacoes = new Anotacoes()
      anotacoes.tituloNota4 = data.titulo;
      anotacoes.nota4 = data.texto;
      anotacoes.dataNota4 = data.data;
      return this.anotacoesRepository
        .update(
          {
            id,
          },
          {
            tituloNota4: anotacoes.tituloNota4,
            nota4: anotacoes.nota4,
            dataNota4: anotacoes.dataNota4,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Anotacoes atualizadas',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao atualizar',
          };
        });
    }
    if (data.nota == 5) {
      let anotacoes = new Anotacoes()
      anotacoes.tituloNota5 = data.titulo;
      anotacoes.nota5 = data.texto;
      anotacoes.dataNota5 = data.data;
      return this.anotacoesRepository
        .update(
          {
            id,
          },
          {
            tituloNota5: anotacoes.tituloNota5,
            nota5: anotacoes.nota5,
            dataNota5: anotacoes.dataNota5,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Anotacoes atualizadas',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao atualizar',
          };
        });
    }
    if (data.nota == 6) {
      let anotacoes = new Anotacoes()
      anotacoes.tituloNota6 = data.titulo;
      anotacoes.nota6 = data.texto;
      anotacoes.dataNota6 = data.data;
      return this.anotacoesRepository
        .update(
          {
            id,
          },
          {
            tituloNota6: anotacoes.tituloNota6,
            nota6: anotacoes.nota6,
            dataNota6: anotacoes.dataNota6,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Anotacoes atualizadas',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao atualizar',
          };
        });
    }
    if (data.nota == 7) {
      let anotacoes = new Anotacoes()
      anotacoes.tituloNota7 = data.titulo;
      anotacoes.nota7 = data.texto;
      anotacoes.dataNota7 = data.data;
      return this.anotacoesRepository
        .update(
          {
            id,
          },
          {
            tituloNota7: anotacoes.tituloNota7,
            nota7: anotacoes.nota7,
            dataNota7: anotacoes.dataNota7,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Anotacoes atualizadas',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao atualizar',
          };
        });
    }
    if (data.nota == 8) {
      let anotacoes = new Anotacoes()
      anotacoes.tituloNota8 = data.titulo;
      anotacoes.nota8 = data.texto;
      anotacoes.dataNota8 = data.data;
      return this.anotacoesRepository
        .update(
          {
            id,
          },
          {
            tituloNota8: anotacoes.tituloNota8,
            nota8: anotacoes.nota8,
            dataNota8: anotacoes.dataNota8,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Anotacoes atualizadas',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao atualizar',
          };
        });
    }
    if (data.nota == 9) {
      let anotacoes = new Anotacoes()
      anotacoes.tituloNota9 = data.titulo;
      anotacoes.nota9 = data.texto;
      anotacoes.dataNota9 = data.data;
      return this.anotacoesRepository
        .update(
          {
            id,
          },
          {
            tituloNota9: anotacoes.tituloNota9,
            nota9: anotacoes.nota9,
            dataNota9: anotacoes.dataNota9,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Anotacoes atualizadas',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao atualizar',
          };
        });
    }
    if (data.nota == 10) {
      let anotacoes = new Anotacoes()
      anotacoes.tituloNota10 = data.titulo;
      anotacoes.nota10 = data.texto;
      anotacoes.dataNota10 = data.data;
      return this.anotacoesRepository
        .update(
          {
            id,
          },
          {
            tituloNota10: anotacoes.tituloNota10,
            nota10: anotacoes.nota10,
            dataNota10: anotacoes.dataNota10,
          },
        )
        .then((result) => {
          return <ResultadoDto>{
            status: true,
            mensagem: 'Anotacoes atualizadas',
          };
        })
        .catch((error) => {
          return <ResultadoDto>{
            status: false,
            mensagem: 'Houve um erro ao atualizar',
          };
        });
    }
  }

  // async adicionar(data: AnotacoesDto): Promise<ResultadoDto> {
  //   let anotacoes = new Anotacoes()
  //   anotacoes.id = data.id
  //   console.log(data)
  //   return this.anotacoesRepository.insert(anotacoes)
  //   .then((res) => {
  //     return <ResultadoDto>{
  //       status: true,
  //       mensagem: 'Anotacoes adicionada'
  //     }
  //   })
  //   .catch((err) => {
  //     return <ResultadoDto>{
  //       status: false,
  //       mensagem: 'Houve um erro ao adicionar'
  //     }
  //   })
  // }

  //   async resetar(data: AnotacoesDto): Promise<ResultadoDto> {
  //     let anotacoes = new Anotacoes()
  //     anotacoes.nota1 = ''
  //     anotacoes.nota2 = ''
  //     anotacoes.nota3 = ''
  //     anotacoes.nota4 = ''
  //     anotacoes.nota5 = ''
  //     anotacoes.nota6 = ''
  //     anotacoes.nota7 = ''
  //     anotacoes.nota8 = ''
  //     let id = data.id
  //     return this.anotacoesRepository.update({id},{
  //       nota1: anotacoes.nota1,
  //       nota2: anotacoes.nota2,
  //       nota3: anotacoes.nota3,
  //       nota4: anotacoes.nota4,
  //       nota5: anotacoes.nota5,
  //       nota6: anotacoes.nota6,
  //       nota7: anotacoes.nota7,
  //     })
  //     .then((res) => {
  //       return <ResultadoDto>{
  //         status: true,
  //         mensagem: 'Anotacoes resetada'
  //       }
  //     })
  //     .catch((err) => {
  //       return <ResultadoDto>{
  //         status: false,
  //         mensagem: 'Houve um erro ao resetar'
  //       }
  //     })
  //   }
}
