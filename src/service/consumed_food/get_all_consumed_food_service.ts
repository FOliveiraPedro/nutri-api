import { ConsumedFood } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type ConsumedFoodUpdateRequest = {
    userId: string,
    startDate: string,
    endDate: string,
}

export class GetAllConsumedFoodService {

    async execute({userId, startDate, endDate}: ConsumedFoodUpdateRequest): Promise< ConsumedFood[] | Error >{
        
        const response = await prismaClient.consumedFood.findMany({
            where: { 
                user_id:userId,
                date:{
                    lte:startDate,
                    gte:endDate
                }
            }
        });
        
        return response;
    }
}