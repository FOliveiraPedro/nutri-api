import { Nutrient } from "@prisma/client";
import { prismaClient } from "../../database/prisma_client";

export class CreateNutrientService {

    async execute(nutrientData: any): Promise<Nutrient | Error> {
        const { moisture, energy_calorie,energy_joule, fiber, ashes, carbs, protein, } = nutrientData;
        
        const nutrient = prismaClient.nutrient.create({
            data:{
                moisture,
                energy_calorie, 
                energy_joule, 
                fiber, 
                ashes, 
                carbs, 
                protein,
            }
        });

        // await prismaClient.nutrient.save(nutrient);

        return nutrient;
    }
}