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
                AND:{
                    user_id:userId ,
                    date:{
                       lte:end,
                       gte:start
                   }
                } 
            }
        });

        console.log(response);
        
        return response;
    }
}