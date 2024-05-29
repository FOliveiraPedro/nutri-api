import { prismaClient } from "../../database/prisma_client";

export class DeleteCategoryService{

    async execute(id:string){
        
        if(!(await prismaClient.category.findUnique({ where: { id:id } }))){
            return new Error("Category does not exists!");
        }

        await prismaClient.category.delete({
            where: {
              id: id,
            }
        });
    }
}