import { Nutrient } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

type NutrientRequest = {
    id: string
}

export class GetNutrientByNameService {

    async execute({ id }: NutrientRequest): Promise< Nutrient | Error >  {
        
        const response = await prismaClient.nutrient.findUnique({ where: { id:id } })

        if(!response) {
            console.log("Nutrient does not exists");
            return new Error("Nutrient does not exists");
        }

        return response;
    }
}