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
                AND:{
                    user_id:userId ,
                    date:{
                       lte:end,
                       gte:start
                   }
                }
            }
        });

        console.log(response);
        
        return response;
    }
}