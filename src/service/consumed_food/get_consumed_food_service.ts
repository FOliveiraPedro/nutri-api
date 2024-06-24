import { ConsumedFood } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type ConsumedFoodRequest = {
    quantity: string,
    date: string,
    foodId: string,
    userId: string
}

export class GetConsumedFoodService {

    async execute({ quantity, date, foodId, userId }: ConsumedFoodRequest): Promise< ConsumedFood | Error >  {      

        const consumed = await prismaClient.consumedFood.findFirst({where: {food_id:foodId}});

        if(!consumed){
            return new Error("Consumed Food does not exists!");
        }

        return consumed;
    }
}