import { prismaClient } from "../../database/prisma_client";


export class GetAllCategoriesService {

    async execute(){
        const response = await prismaClient.category.findMany();
        
        return response;
    }
}