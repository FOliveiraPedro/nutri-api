import { prismaClient } from "../../database/prisma_client";

export class GetAllNutrientsService {

    async execute(){
        const response = await prismaClient.nutrient.findMany();
        
        return response;
    }
}