import { prismaClient } from "../../database/prisma_client";


export class DeleteFatService{

    async execute(id:string){
        
        if(!(await prismaClient.fat.findUnique({ where: { id:id } }))){
            return new Error("Fat does not exists!");
        }

        await prismaClient.fat.delete({
            where: {
                id: id,
            }
        });
    }
}