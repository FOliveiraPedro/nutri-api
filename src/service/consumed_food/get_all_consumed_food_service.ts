import { ConsumedFood } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type ConsumedFoodUpdateRequest = {
    userId: string,
    startDate: string,
    endDate: string,
}

export class GetAllConsumedFoodService {

    async execute({userId, startDate, endDate}: ConsumedFoodUpdateRequest): Promise< ConsumedFood[] | Error >{
        
        let start: Date = new Date(startDate);
        let end: Date = new Date(endDate);
        const response = await prismaClient.consumedFood.findMany({
            where: { 
                user_id:userId,
                date:{
                    lte:start,
                    gte:end
                }
            }
        });

        if(!response) {
            console.log("Category does not exists");
            return new Error("Category does not exists");
        }
        
        return response;
    }
}