import { WeightProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";


type WeightProgressUpdateRequest = {
    userId: string,
    startDate: string,
    endDate: string,
}

export class GetAllWeightProgressService {

    async execute({userId, startDate, endDate }: WeightProgressUpdateRequest): Promise< WeightProgress[] | Error >{
        
        const response = await prismaClient.weightProgress.findMany({
            where: {
                 user_id:userId ,
                 date:{
                    lte:startDate,
                    gte:endDate
                }
            }
        });
        
        return response;
    }
}