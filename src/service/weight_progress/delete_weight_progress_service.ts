import { prismaClient } from "../../database/prisma_client";

export class DeleteWeightProgressService{

    async execute(id:string){
        
        if(!(await prismaClient.weightProgress.findUnique({ where: { id:id } }))){
            return new Error("Weight progress does not exists!");
        }

        await prismaClient.weightProgress.delete({
            where: {
                id: id,
            }
        });
    }
}