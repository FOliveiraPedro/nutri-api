import { verify } from 'jsonwebtoken';
import { GenerateRefreshToken } from '../../provider/generate_refresh_token';
import { GenerateToken } from '../../provider/generate_token';
import { prismaClient } from '../../database/prisma_client';



type RefreshTokenLoginRequest = {
    refreshToken:string
}

type RefreshTokenLoginResponse = {
    token: string,
    refresh_token: string
}

export class RefreshTokenLoginService {

    async execute({ refreshToken }: RefreshTokenLoginRequest): Promise< RefreshTokenLoginResponse | Error >  {

        const user = await prismaClient.user.findFirst({where:{ refresh_token:refreshToken }});

        if(!user){
            return new Error("User does not exist");
        }

        try{
            verify(refreshToken, "0c97b3f5-5de2-44fe-8c04-f5d103f8925b");
        }catch{
            return new Error("Token expired");
        }

        const token = await new GenerateToken().execute(user.id);

        const refresToken = await new GenerateRefreshToken().execute(user.id);

        user.refresh_token = refresToken;

        // prismaClient.user.save(user);

        const response = {
            token:token,
            refresh_token: refresToken,
        }

        return response;
    }
}