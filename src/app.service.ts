import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getObject(): any {
    let objeto = {
      id: 1,
      nome: 'fulado'
    }
    return objeto
  }
}
