import { WeightProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type WeightProgressRequest = {
    date: string,
    userId: string,
    weight: string
}

export class CreateWeightProgressService {

    async execute({ date, userId, weight }: WeightProgressRequest): Promise< WeightProgress | Error >  {

        const convertedDate = '';

        const weightProgress = prismaClient.weightProgress.create({
            data:{
                date: convertedDate, 
                weight, 
                user_id:userId} 
            });

        // await prismaClient.weightProgress.save(weightProgress);

        return weightProgress;
    }
}