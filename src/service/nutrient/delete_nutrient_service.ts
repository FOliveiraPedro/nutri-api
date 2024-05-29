import { prismaClient } from "../../database/prisma_client";

export class DeleteNutrientService{

    async execute(id:string){
        
        if(!(await prismaClient.nutrient.findUnique({ where: { id:id } }))){
            return new Error("Nutrient does not exists!");
        }

        await prismaClient.nutrient.delete({
            where: {
                id: id,
            }
        });
    }
}