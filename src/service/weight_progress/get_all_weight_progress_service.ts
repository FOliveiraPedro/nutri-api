import { WeightProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";


type WeightProgressUpdateRequest = {
    userId: string,
    startDate: string,
    endDate: string,
}

export class GetAllWeightProgressService {

    async execute({userId, startDate, endDate }: WeightProgressUpdateRequest): Promise< WeightProgress[] | Error >{
        
        let start: Date = new Date(startDate);
        let end: Date = new Date(endDate);

        const response = await prismaClient.weightProgress.findMany({
            where: {
                 user_id:userId ,
                 date:{
                    lte:end,
                    gte:start
                }
            }
        });
        
        return response;
    }
}