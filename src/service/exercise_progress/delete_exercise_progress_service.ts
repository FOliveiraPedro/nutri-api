import { prismaClient } from "../../database/prisma_client";

export class DeleteExerciseProgressService{

    async execute(id:string){
        
        if(!(await prismaClient.exerciseProgress.findUnique({ where: { id:id } }))){
            return new Error("Exercise progress does not exists!");
        }

        await prismaClient.exerciseProgress.delete({
            where: {
                id: id,
            }
        });
    }
}