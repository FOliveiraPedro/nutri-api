import { prismaClient } from "../../database/prisma_client";

type FoodUpdateRequest = {
    id: string
    name: string
}

export class UpdateFoodService{
    async execute({id, name}: FoodUpdateRequest){
        const type = await prismaClient.food.findUnique({where: { id:id}})

        if(!type){
            return new Error("Food does not exists!");
        }

        type.name = name? name: type.name;

        await prismaClient.food.update({
            where:{
                id:id
            },
            data:{
                name: name? name: type.name
            }
        });

        return type;

    }
}