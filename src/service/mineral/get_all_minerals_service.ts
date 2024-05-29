import { prismaClient } from "../../database/prisma_client";

export class GetAllMineralsService {

    async execute(){
        const response = await prismaClient.mineral.findMany();
        
        return response;
    }
}