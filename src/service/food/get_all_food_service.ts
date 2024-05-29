import { prismaClient } from "../../database/prisma_client";

export class GetAllFoodsService {

    async execute(){
        const response = await prismaClient.food.findMany();
        
        return response;
    }
}