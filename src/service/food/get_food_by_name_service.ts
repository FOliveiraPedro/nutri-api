import { Food } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type FoodRequest = {
    id: string
}

export class GetFoodByNameService {

    async execute({ id }: FoodRequest): Promise< Food | Error >  {
        const response = await prismaClient.food.findFirst({ where: { name:id } })

        if(!response) {
            console.log("Food does not exists");
            return new Error("Food does not exists");
        }
        
        console.log("response");
        console.log(response);
        
        return response;
    }
}