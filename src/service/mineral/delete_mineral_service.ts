import { prismaClient } from "../../database/prisma_client";

export class DeleteMineralService{

    async execute(id:string){
        
        if(!(await prismaClient.mineral.findUnique({ where: { id:id } }))){
            return new Error("Mineral does not exists!");
        }

        await prismaClient.mineral.delete({
            where: {
                id: id,
            }
        });
    }
}