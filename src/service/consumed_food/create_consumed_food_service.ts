import { ConsumedFood } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";
import { connect } from "http2";

type ConsumedFoodRequest = {
    quantity: string,
    date: string,
    foodId: string,
    userId: string,
    meal: string,
}

export class CreateConsumedFoodService {

    async execute({ quantity, date, foodId, userId, meal}: ConsumedFoodRequest): Promise< ConsumedFood | Error >  {      
        console.log(quantity);
        console.log(date);
        console.log(foodId);
        console.log(userId);
        console.log(meal);
        let res: Date = new Date(date);
        const consumed = prismaClient.consumedFood.create({
            data:{
                quantity,
                date: res,
                meal: meal,
                food:{
                    connect:{
                        id:foodId
                    }
                },
                user:{
                    connect:{
                        id:userId
                    }
                } 
            }
            
        });

        // await prismaClient.consumedFood.save(consumed);

        return consumed;
    }
}