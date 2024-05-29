import { WeightProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";


type WeightProgressUpdateRequest = {
    userId: string
}

export class GetAllWeightProgressService {

    async execute({userId}: WeightProgressUpdateRequest): Promise< WeightProgress[] | Error >{
        
        const response = await prismaClient.weightProgress.findMany({where: { user_id:userId }});
        
        return response;
    }
}