import { prismaClient } from "../../database/prisma_client";

type CategoryUpdateRequest = {
    id: string
    name: string
}

export class UpdateCategoryService{
    async execute({id, name}: CategoryUpdateRequest){
        const type = await prismaClient.category.findUnique({where: { id:id}})

        if(!type){
            return new Error("Category does not exists!");
        }

        type.name = name? name: type.name;

        // await prismaClient.category.save(type);

        return type;

    }
}