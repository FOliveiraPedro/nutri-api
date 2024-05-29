import { prismaClient } from "../../database/prisma_client";


export class GetAllFatService {

    async execute(){
        const response = await prismaClient.fat.findMany();
        
        return response;
    }
}