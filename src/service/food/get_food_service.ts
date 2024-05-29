import { Food } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type FoodRequest = {
    name: string
}

export class GetFoodService {

    async execute({ name }: FoodRequest): Promise< Food | Error >  {
        const response = await prismaClient.food.findFirst({ where: { name:name } })

        if(!response) {
            console.log("Food does not exists");
            return new Error("Food does not exists");
        }

        return response;
    }
}