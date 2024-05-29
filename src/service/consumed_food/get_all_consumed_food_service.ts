import { ConsumedFood } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type ConsumedFoodUpdateRequest = {
    userId: string
}

export class GetAllConsumedFoodService {

    async execute({userId}: ConsumedFoodUpdateRequest): Promise< ConsumedFood[] | Error >{
        
        const response = await prismaClient.consumedFood.findMany({where: { user_id:userId }});
        
        return response;
    }
}