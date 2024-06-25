import { WeightProgress } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type WeightProgressRequest = {
    date: string,
    userId: string,
    weight: string
}

export class CreateWeightProgressService {

    async execute({ date, userId, weight }: WeightProgressRequest): Promise< WeightProgress | Error >  {

        let res: Date = new Date(date);

        const weightProgress = prismaClient.weightProgress.create({
            data:{
                date: res, 
                weight,
                user:{
                    connect:{
                        id:userId
                    }
                }
            } 
            });

        // await prismaClient.weightProgress.save(weightProgress);

        return weightProgress;
    }
}