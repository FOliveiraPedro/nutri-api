import { ConsumedFood } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type ConsumedFoodRequest = {
    quantity: string,
    date: string,
    foodId: string,
    userId: string
}

export class CreateConsumedFoodService {

    async execute({ quantity, date, foodId, userId }: ConsumedFoodRequest): Promise< ConsumedFood | Error >  {      

        const consumed = prismaClient.consumedFood.create({
            data:{
                quantity,
                date,
                food_id:foodId,
                user_id:userId
            }
        });

        // await prismaClient.consumedFood.save(consumed);

        return consumed;
    }
}