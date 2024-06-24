import { ConsumedFood } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type ConsumedFoodRequest = {
    quantity: string,
    date: string,
    foodId: string,
    userId: string,
    meal: string,
}

export class CreateConsumedFoodService {

    async execute({ quantity, date, foodId, userId, meal}: ConsumedFoodRequest): Promise< ConsumedFood | Error >  {      

        const consumed = prismaClient.consumedFood.create({
            data:{
                quantity,
                date,
                food_id:foodId,
                user_id:userId,
                meal: meal
            }
        });

        // await prismaClient.consumedFood.save(consumed);

        return consumed;
    }
}