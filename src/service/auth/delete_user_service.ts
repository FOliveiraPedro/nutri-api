import { prismaClient } from "../../database/prisma_client";


export class DeleteCategoryService{

    async execute(id:string){
        
        if(!(await prismaClient.user.findUnique({ where: { id:id } }))){
            return new Error("Category does not exists!");
        }

        prismaClient.user.delete({
            where: {
              id: id,
            },
          })
    }
}