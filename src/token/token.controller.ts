import { Body, Controller, Put, Res } from "@nestjs/common";
import { TokenService } from "./token.service";


@Controller('token')

export class TokenController{
    constructor(
        private tokenService: TokenService
    ) {}

    @Put('atualizar')
    async atualizarToken(@Res() data: any ){
        let tokenAnt = data.req.query.tokenAntigo
        return this.tokenService.atualizarToken(tokenAnt)
    }
    

}