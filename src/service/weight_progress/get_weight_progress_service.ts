import { WeightProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type WeightProgressRequest = {
    id: string
}

export class GetWeightProgressService {

    async execute({ id }: WeightProgressRequest): Promise< WeightProgress | Error >  {

        
        const response = await prismaClient.weightProgress.findUnique({ 
            where:{ 
                id:id 
            } 
        })

        if(!response) {
            console.log("Weight progress does not exists");
            return new Error("Weight progress does not exists");
        }

        return response;
    }
}