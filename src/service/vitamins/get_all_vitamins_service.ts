import { prismaClient } from "../../database/prisma_client";

export class GetAllVitaminsService {

    async execute(){
        const response = await prismaClient.vitamin.findMany();
        
        return response;
    }
}