import { prismaClient } from "../../database/prisma_client";

type CategoryUserRequest = {
    id: string
    name: string
}

export class UpdateUserService{
    async execute({id, name}: CategoryUserRequest){
        const type = await prismaClient.user.findUnique({where: { id:id}})

        if(!type){
            return new Error("User does not exists!");
        }

        type.name = name? name: type.name;

        // await prismaClient.user.save(type);

        return type;

    }
}