import { Food } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type FoodRequest = {
    id: string
}

export class GetFoodByIdService {

    async execute({ id }: FoodRequest): Promise< Food | Error >  {
        const response = await prismaClient.food.findFirst({ where: { id:id } })

        if(!response) {
            console.log("Food does not exists");
            return new Error("Food does not exists");
        }

        return response;
    }
}