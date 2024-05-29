import { prismaClient } from "../../database/prisma_client";

type WeightProgressUpdateRequest = {
    id: string
    date: string,
    weight: string
}

export class UpdateWeightProgressService{
    async execute({id, date, weight}: WeightProgressUpdateRequest){
        const weightProgress = await prismaClient.weightProgress.findUnique({where: { id:id }})

        if(!weightProgress){
            return new Error("Weight progress does not exists!");
        }

        await prismaClient.weightProgress.update({
            where:{
                id:id
            },
            data:{
                date: date? '': '',
                weight: weight? weight: weightProgress.weight,
            }
        });

        return weightProgress;

    }
}