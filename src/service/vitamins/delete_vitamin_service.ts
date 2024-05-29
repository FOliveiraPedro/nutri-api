import { prismaClient } from "../../database/prisma_client";

export class DeleteVitaminService{

    async execute(id:string){
        
        if(!(await prismaClient.vitamin.findUnique({ where: { id:id } }))){
            return new Error("Vitamin does not exists!");
        }

        await prismaClient.vitamin.delete({
            where: {
                id: id,
            }
        });
    }
}