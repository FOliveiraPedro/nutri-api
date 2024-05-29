
import { hash } from 'bcryptjs'
import { prismaClient } from '../../database/prisma_client';
import { User } from '@prisma/client';

type RegisterRequest = {
    email: string,
    name: string,
    password: string,
}

export class RegisterService {

    async execute({ email, name, password }: RegisterRequest): Promise< User | Error >  {

        const response = await prismaClient.user.findUnique({ where: { email:email } });
        if(response) {
            return new Error("Email already in use");
        }

        const hashedPassword = await hash(password,8);
        const user = prismaClient.user.create({
            data:{
                email: email,
                name: name,
                password: hashedPassword,
                refresh_token: "",
            },
        })
        
        // await prismaClient.user.save(user);
        
        return user;
    }
}