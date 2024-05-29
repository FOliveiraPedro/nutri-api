import { compare } from 'bcryptjs';
import { GenerateRefreshToken } from '../../provider/generate_refresh_token';
import { GenerateToken } from '../../provider/generate_token';
import { prismaClient } from '../../database/prisma_client';



type LoginRequest = {
    email:string,
    password: string
}

type LoginResponse = {
    id:string,
    email: string,
    name: string,
    token: string,
    refresh_token: string
}

export class LoginService {

    async execute({ email, password }: LoginRequest): Promise< LoginResponse | Error >  {

        const response = await prismaClient.user.findUnique({ where: { email:email } });
        if(!response) {
            return new Error("Email not registered");
        }

        const passwordMatch = compare(password,response.email)
        if(!passwordMatch){
            return new Error("Password dont match");
        }

        const token = await new GenerateToken().execute(response.id);

        const refreshToken = await new GenerateRefreshToken().execute(response.id);

        response.refresh_token = refreshToken;

        prismaClient.user.update({
            where: {
                email: email
            },
            data: {
                refresh_token: refreshToken,
            },
        });

        const user = {
            id: response.id,
            email: response.email,
            name: response.name,
            token:token,
            refresh_token: refreshToken,
        }
        
        return user;

    }
}