import { prismaClient } from "../../database/prisma_client";

export class DeleteFoodService{

    async execute(id:string){
        
        if(!(await prismaClient.food.findUnique({ where: { id:id } }))){
            return new Error("Food does not exists!");
        }

        await prismaClient.food.delete({
            where: {
                id: id,
            }
        });
    }
}