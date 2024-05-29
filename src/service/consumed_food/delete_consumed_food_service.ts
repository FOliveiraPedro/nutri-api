import { prismaClient } from "../../database/prisma_client";

export class DeleteConsumedFoodService{

    async execute(id:string){
        
        if(!(await prismaClient.consumedFood.findUnique({ where: { id:id } }))){
            return new Error("Category does not exists!");
        }

        await prismaClient.consumedFood.delete({
            where: {
              id: id,
            }
        });
    }
}